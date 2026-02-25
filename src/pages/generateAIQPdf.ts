// generateAIQPdf.ts
// Generates a downloadable PDF report for AIQ Assessment using canvas + jsPDF-like raw PDF construction.
// No external dependencies required — uses browser's built-in APIs only.

export interface AIQReportData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  mcqScore: number;       // 0–200
  ratingScore: number;    // 0–100
  total: number;          // 0–300
  aiqLabel: string;
  aiqColor: string;
  description: string;
}

// ─── Minimal raw PDF builder ──────────────────────────────────────────────────
// Produces a valid single-page PDF with text, rectangles, and lines using the
// PDF 1.4 spec. No images (keeps file size tiny and dependency-free).

class RawPDF {
  private objects: string[] = [];
  private objOffsets: number[] = [];
  private stream: string[] = [];
  private w = 595; // A4 width in points
  private h = 842; // A4 height in points

  // colours as r g b (0–1)
  private col(hex: string) {
    const n = parseInt(hex.replace("#", ""), 16);
    const r = ((n >> 16) & 255) / 255;
    const g = ((n >> 8) & 255) / 255;
    const b = (n & 255) / 255;
    return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
  }

  // PDF y is bottom-up; convert from top-down
  private py(y: number) {
    return this.h - y;
  }

  // ── stream helpers ──────────────────────────────────────────────────────────

  fillRect(x: number, y: number, w: number, h: number, hex: string) {
    this.stream.push(
      `${this.col(hex)} rg ${x} ${this.py(y + h)} ${w} ${h} re f`
    );
  }

  strokeRect(x: number, y: number, w: number, h: number, hex: string, lw = 0.5) {
    this.stream.push(
      `${lw} w ${this.col(hex)} RG ${x} ${this.py(y + h)} ${w} ${h} re S`
    );
  }

  line(x1: number, y1: number, x2: number, y2: number, hex: string, lw = 0.5) {
    this.stream.push(
      `${lw} w ${this.col(hex)} RG ${x1} ${this.py(y1)} m ${x2} ${this.py(y2)} l S`
    );
  }

  text(
    str: string,
    x: number,
    y: number,
    size: number,
    hex: string,
    bold = false,
    align: "left" | "center" | "right" = "left",
    maxWidth?: number
  ) {
    // Sanitize: replace non-ASCII chars
    const safe = str.replace(/[^\x20-\x7E]/g, "?");
    // Rough char width estimate at given size
    const charW = size * 0.55;

    let finalStr = safe;
    if (maxWidth) {
      const maxChars = Math.floor(maxWidth / charW);
      finalStr = safe.length > maxChars ? safe.slice(0, maxChars - 1) + "…" : safe;
    }

    let tx = x;
    if (align === "center") tx = x - (finalStr.length * charW) / 2;
    if (align === "right") tx = x - finalStr.length * charW;

    const font = bold ? "/F2" : "/F1";
    const escaped = finalStr.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    this.stream.push(
      `BT ${font} ${size} Tf ${this.col(hex)} rg ${tx} ${this.py(y)} Td (${escaped}) Tj ET`
    );
  }

  // ── assemble PDF ──────────────────────────────────────────────────────────

  build(): Uint8Array {
    const content = this.stream.join("\n");
    const contentLen = new TextEncoder().encode(content).length;

    // Objects: catalog(1) pages(2) page(3) content(4) font-regular(5) font-bold(6)
    const parts: string[] = [];

    const addObj = (body: string) => {
      this.objOffsets.push(parts.join("").length);
      parts.push(
        `${this.objOffsets.length} 0 obj\n${body}\nendobj\n`
      );
    };

    // obj 1 - catalog
    addObj("<< /Type /Catalog /Pages 2 0 R >>");
    // obj 2 - pages
    addObj(`<< /Type /Pages /Kids [3 0 R] /Count 1 >>`);
    // obj 3 - page
    addObj(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${this.w} ${this.h}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>`
    );
    // obj 4 - content stream
    addObj(
      `<< /Length ${contentLen} >>\nstream\n${content}\nendstream`
    );
    // obj 5 - Helvetica
    addObj(
      `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`
    );
    // obj 6 - Helvetica-Bold
    addObj(
      `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`
    );

    // xref
    const header = "%PDF-1.4\n";
    const body = parts.join("");
    const xrefOffset = header.length + body.length;

    const xref = [
      "xref",
      `0 ${this.objOffsets.length + 1}`,
      "0000000000 65535 f \n" +
        this.objOffsets.map((o) => `${String(header.length + o).padStart(10, "0")} 00000 n `).join("\n"),
      "",
      "trailer",
      `<< /Size ${this.objOffsets.length + 1} /Root 1 0 R >>`,
      "startxref",
      String(xrefOffset),
      "%%EOF",
    ].join("\n");

    return new TextEncoder().encode(header + body + xref);
  }
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function downloadAIQPdf(data: AIQReportData) {
  const pdf = new RawPDF();

  const BG = "#09090b";
  const CARD = "#18181b";
  const BORDER = "#27272a";
  const WHITE = "#fafafa";
  const MUTED = "#71717a";
  const PRIMARY = "#6366f1";
  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Background
  pdf.fillRect(0, 0, 595, 842, BG);

  // ── Header bar ──────────────────────────────────────────────────────────────
  pdf.fillRect(0, 0, 595, 56, CARD);
  pdf.line(0, 56, 595, 56, BORDER, 0.5);
  pdf.text("digiculum", 40, 34, 18, PRIMARY, true);
  pdf.text("AIQ Assessment Report", 200, 34, 11, MUTED);
  pdf.text(date, 555, 34, 10, MUTED, false, "right");

  // ── Title ──────────────────────────────────────────────────────────────────
  pdf.text("Artificial Intelligence Quotient", 297, 98, 11, MUTED, false, "center");
  pdf.text("AIQ Report", 297, 124, 28, WHITE, true, "center");

  // Accent line under title
  pdf.fillRect(237, 134, 121, 2, PRIMARY);

  // ── User info card ─────────────────────────────────────────────────────────
  pdf.fillRect(40, 154, 515, 88, CARD);
  pdf.strokeRect(40, 154, 515, 88, BORDER);

  // field labels & values
  const fields = [
    { label: "FULL NAME", value: data.name, x: 60, y: 178 },
    { label: "EMAIL", value: data.email, x: 330, y: 178 },
    { label: "PHONE", value: data.phone, x: 60, y: 218 },
    { label: "ORGANIZATION", value: data.organization || "—", x: 330, y: 218 },
  ];
  for (const f of fields) {
    pdf.text(f.label, f.x, f.y, 7.5, PRIMARY, true);
    pdf.text(f.value, f.x, f.y + 16, 11, WHITE, false, "left", 220);
  }

  // ── Score boxes ────────────────────────────────────────────────────────────
  const boxY = 262;
  const boxes = [
    { label: "Knowledge Score", sub: "out of 200", value: String(data.mcqScore), x: 40 },
    { label: "Application Score", sub: "out of 100", value: String(data.ratingScore), x: 218 },
    { label: "Total AIQ Score", sub: "out of 300", value: String(data.total), x: 396, accent: true },
  ];
  for (const b of boxes) {
    pdf.fillRect(b.x, boxY, 169, 90, CARD);
    pdf.strokeRect(b.x, boxY, 169, 90, b.accent ? PRIMARY + "80" : BORDER);
    pdf.text(b.value, b.x + 84, boxY + 42, b.accent ? 32 : 28, b.accent ? data.aiqColor : PRIMARY, true, "center");
    pdf.text(b.label, b.x + 84, boxY + 60, 9, MUTED, false, "center");
    pdf.text(b.sub, b.x + 84, boxY + 74, 8, MUTED, false, "center");
  }

  // ── AIQ Level banner ───────────────────────────────────────────────────────
  const bannerY = 372;
  pdf.fillRect(40, bannerY, 515, 90, CARD);
  pdf.strokeRect(40, bannerY, 515, 90, data.aiqColor + "60");
  pdf.fillRect(40, bannerY, 4, 90, data.aiqColor); // left accent bar

  pdf.text(data.aiqLabel, 297, bannerY + 30, 20, data.aiqColor, true, "center");

  // Description — word-wrap manually
  const words = data.description.split(" ");
  let line1 = "";
  let line2 = "";
  let line3 = "";
  const maxCharsPerLine = 85;
  for (const w of words) {
    if ((line1 + w).length < maxCharsPerLine) line1 += w + " ";
    else if ((line2 + w).length < maxCharsPerLine) line2 += w + " ";
    else line3 += w + " ";
  }
  if (line1) pdf.text(line1.trim(), 297, bannerY + 52, 9, MUTED, false, "center");
  if (line2) pdf.text(line2.trim(), 297, bannerY + 65, 9, MUTED, false, "center");
  if (line3) pdf.text(line3.trim(), 297, bannerY + 78, 9, MUTED, false, "center");

  // ── Score bar ──────────────────────────────────────────────────────────────
  const barY = 484;
  pdf.text("SCORE RANGE", 40, barY, 8, MUTED, true);
  pdf.fillRect(40, barY + 10, 515, 10, "#27272a");

  // gradient segments
  const segColors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#6366f1"];
  const segW = 515 / 5;
  for (let i = 0; i < 5; i++) {
    pdf.fillRect(40 + i * segW, barY + 10, segW, 10, segColors[i] + "60");
  }
  // position marker
  const markerX = 40 + Math.min((data.total / 300) * 515, 511);
  pdf.fillRect(markerX - 2, barY + 6, 4, 18, WHITE);

  // labels
  const rangeLabels = ["Very Low", "Low", "Medium", "High", "Very High"];
  for (let i = 0; i < 5; i++) {
    pdf.text(rangeLabels[i], 40 + i * segW + segW / 2, barY + 32, 7.5, MUTED, false, "center");
  }

  // ── Score breakdown ────────────────────────────────────────────────────────
  const brkY = 534;
  pdf.text("SCORE BREAKDOWN", 40, brkY, 8, MUTED, true);
  pdf.line(40, brkY + 6, 555, brkY + 6, BORDER, 0.4);

  const rows = [
    { label: "MCQ Knowledge Questions (20 questions, max 10 pts each)", score: data.mcqScore, max: 200 },
    { label: "AI Application Self-Rating (20 statements, 1–5 scale)", score: data.ratingScore, max: 100 },
    { label: "Total AIQ Score", score: data.total, max: 300, bold: true },
  ];
  for (let i = 0; i < rows.length; i++) {
    const ry = brkY + 20 + i * 28;
    const r = rows[i];
    pdf.text(r.label, 40, ry, r.bold ? 10 : 9.5, r.bold ? WHITE : MUTED, r.bold);
    pdf.text(`${r.score} / ${r.max}`, 555, ry, r.bold ? 11 : 9.5, r.bold ? data.aiqColor : PRIMARY, r.bold, "right");
    if (!r.bold) {
      pdf.fillRect(40, ry + 5, 440, 3, "#27272a");
      pdf.fillRect(40, ry + 5, Math.round((r.score / r.max) * 440), 3, PRIMARY + "99");
    }
    pdf.line(40, ry + 12, 555, ry + 12, BORDER, 0.25);
  }

  // ── Footer ─────────────────────────────────────────────────────────────────
  pdf.fillRect(0, 800, 595, 42, CARD);
  pdf.line(0, 800, 595, 800, BORDER, 0.5);
  pdf.text("Generated by Digiculum AIQ Assessment Platform", 297, 820, 8.5, MUTED, false, "center");
  pdf.text("info@digiculum.com", 297, 834, 8.5, PRIMARY, false, "center");

  // ── Download ───────────────────────────────────────────────────────────────
  const bytes = pdf.build();
  const blob = new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `AIQ_Report_${data.name.replace(/\s+/g, "_")}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
}