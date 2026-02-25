// generateMindsetPdf.ts
// Generates a downloadable PDF report for AI Mindset Assessment.
// Uses the same raw PDF 1.4 byte-construction approach — zero dependencies.

export type Mindset = "Optimistic" | "Pragmatic" | "Skeptic";

export interface MindsetReportData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  counts: Record<Mindset, number>;
  dominant: Mindset;
  description: string;
  traits: string[];
  dominantColor: string;
}

// ─── Raw PDF builder (identical core to generateAIQPdf) ───────────────────────

class RawPDF {
  private objOffsets: number[] = [];
  private stream: string[] = [];
  private w = 595;
  private h = 842;

  private col(hex: string) {
    const n = parseInt(hex.replace("#", ""), 16);
    const r = ((n >> 16) & 255) / 255;
    const g = ((n >> 8) & 255) / 255;
    const b = (n & 255) / 255;
    return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
  }

  private py(y: number) {
    return this.h - y;
  }

  fillRect(x: number, y: number, w: number, h: number, hex: string) {
    this.stream.push(`${this.col(hex)} rg ${x} ${this.py(y + h)} ${w} ${h} re f`);
  }

  strokeRect(x: number, y: number, w: number, h: number, hex: string, lw = 0.5) {
    this.stream.push(`${lw} w ${this.col(hex)} RG ${x} ${this.py(y + h)} ${w} ${h} re S`);
  }

  line(x1: number, y1: number, x2: number, y2: number, hex: string, lw = 0.5) {
    this.stream.push(`${lw} w ${this.col(hex)} RG ${x1} ${this.py(y1)} m ${x2} ${this.py(y2)} l S`);
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
    const safe = str.replace(/[^\x20-\x7E]/g, "?");
    const charW = size * 0.55;
    let finalStr = safe;
    if (maxWidth) {
      const maxChars = Math.floor(maxWidth / charW);
      finalStr = safe.length > maxChars ? safe.slice(0, maxChars - 1) + "..." : safe;
    }
    let tx = x;
    if (align === "center") tx = x - (finalStr.length * charW) / 2;
    if (align === "right") tx = x - finalStr.length * charW;
    const font = bold ? "/F2" : "/F1";
    const escaped = finalStr.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    this.stream.push(`BT ${font} ${size} Tf ${this.col(hex)} rg ${tx} ${this.py(y)} Td (${escaped}) Tj ET`);
  }

  // Wrap text across multiple lines, return next Y position
  textWrapped(str: string, x: number, y: number, size: number, hex: string, maxWidth: number, lineHeight: number): number {
    const safe = str.replace(/[^\x20-\x7E]/g, "?");
    const charW = size * 0.55;
    const maxChars = Math.floor(maxWidth / charW);
    const words = safe.split(" ");
    let line = "";
    let curY = y;
    for (const word of words) {
      if ((line + word).length > maxChars) {
        this.text(line.trim(), x, curY, size, hex);
        curY += lineHeight;
        line = word + " ";
      } else {
        line += word + " ";
      }
    }
    if (line.trim()) {
      this.text(line.trim(), x, curY, size, hex);
      curY += lineHeight;
    }
    return curY;
  }

  build(): Uint8Array {
    const content = this.stream.join("\n");
    const contentLen = new TextEncoder().encode(content).length;
    const parts: string[] = [];

    const addObj = (body: string) => {
      this.objOffsets.push(parts.join("").length);
      parts.push(`${this.objOffsets.length} 0 obj\n${body}\nendobj\n`);
    };

    addObj("<< /Type /Catalog /Pages 2 0 R >>");
    addObj(`<< /Type /Pages /Kids [3 0 R] /Count 1 >>`);
    addObj(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${this.w} ${this.h}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>`);
    addObj(`<< /Length ${contentLen} >>\nstream\n${content}\nendstream`);
    addObj(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`);
    addObj(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`);

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

// ─── Mindset colours ──────────────────────────────────────────────────────────

const MINDSET_COLORS: Record<Mindset, string> = {
  Optimistic: "#22c55e",
  Pragmatic:  "#6366f1",
  Skeptic:    "#f97316",
};

// ─── Main export ──────────────────────────────────────────────────────────────

export function downloadMindsetPdf(data: MindsetReportData) {
  const pdf = new RawPDF();

  const BG     = "#09090b";
  const CARD   = "#18181b";
  const BORDER = "#27272a";
  const WHITE  = "#fafafa";
  const MUTED  = "#71717a";
  const PRIMARY = "#6366f1";
  const DC = data.dominantColor;

  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit", month: "long", year: "numeric",
  });

  // ── Background ──────────────────────────────────────────────────────────────
  pdf.fillRect(0, 0, 595, 842, BG);

  // ── Header ──────────────────────────────────────────────────────────────────
  pdf.fillRect(0, 0, 595, 56, CARD);
  pdf.line(0, 56, 595, 56, BORDER, 0.5);
  pdf.text("digiculum", 40, 34, 18, PRIMARY, true);
  pdf.text("AI Mindset Assessment Report", 192, 34, 11, MUTED);
  pdf.text(date, 555, 34, 10, MUTED, false, "right");

  // ── Title ───────────────────────────────────────────────────────────────────
  pdf.text("Artificial Intelligence Mindset Evaluation", 297, 94, 11, MUTED, false, "center");
  pdf.text("AI Mindset Report", 297, 120, 26, WHITE, true, "center");
  pdf.fillRect(247, 130, 101, 2, DC);

  // ── User card ───────────────────────────────────────────────────────────────
  pdf.fillRect(40, 150, 515, 88, CARD);
  pdf.strokeRect(40, 150, 515, 88, BORDER);

  const fields = [
    { label: "FULL NAME",     value: data.name,                x: 60,  y: 174 },
    { label: "EMAIL",         value: data.email,               x: 330, y: 174 },
    { label: "PHONE",         value: data.phone,               x: 60,  y: 214 },
    { label: "ORGANIZATION",  value: data.organization || "-", x: 330, y: 214 },
  ];
  for (const f of fields) {
    pdf.text(f.label, f.x, f.y, 7.5, PRIMARY, true);
    pdf.text(f.value, f.x, f.y + 16, 11, WHITE, false, "left", 220);
  }

  // ── Dominant mindset banner ──────────────────────────────────────────────────
  const bannerY = 258;
  pdf.fillRect(40, bannerY, 515, 100, CARD);
  pdf.strokeRect(40, bannerY, 515, 100, DC + "55");
  pdf.fillRect(40, bannerY, 4, 100, DC); // left accent

  pdf.text("YOUR PREDOMINANT MINDSET", 297, bannerY + 20, 8, MUTED, true, "center");
  pdf.text(data.dominant, 297, bannerY + 46, 24, DC, true, "center");

  // Description wrapped
  pdf.textWrapped(data.description, 56, bannerY + 64, 8.5, MUTED, 490, 13);

  // ── Score boxes ─────────────────────────────────────────────────────────────
  const boxY = 378;
  const mindsets: Mindset[] = ["Optimistic", "Pragmatic", "Skeptic"];
  const boxW = 163;
  const boxGap = 8;

  for (let i = 0; i < 3; i++) {
    const m = mindsets[i];
    const bx = 40 + i * (boxW + boxGap);
    const isDominant = m === data.dominant;
    const mc = MINDSET_COLORS[m];

    pdf.fillRect(bx, boxY, boxW, 82, CARD);
    pdf.strokeRect(bx, boxY, boxW, 82, isDominant ? mc : BORDER);
    if (isDominant) pdf.fillRect(bx, boxY, boxW, 2, mc);

    pdf.text(String(data.counts[m]), bx + boxW / 2, boxY + 36, 28, mc, true, "center");
    pdf.text(m, bx + boxW / 2, boxY + 54, 9, isDominant ? WHITE : MUTED, isDominant, "center");
    pdf.text("responses", bx + boxW / 2, boxY + 66, 8, MUTED, false, "center");

    if (isDominant) {
      pdf.fillRect(bx + boxW / 2 - 24, boxY + 74, 48, 1, mc);
      pdf.text("Dominant", bx + boxW / 2, boxY + 79, 7.5, mc, true, "center");
    }
  }

  // ── Distribution bar ────────────────────────────────────────────────────────
  const barSecY = 480;
  pdf.text("MINDSET DISTRIBUTION", 40, barSecY, 8, MUTED, true);
  pdf.line(40, barSecY + 6, 555, barSecY + 6, BORDER, 0.4);

  for (let i = 0; i < 3; i++) {
    const m = mindsets[i];
    const ry = barSecY + 18 + i * 30;
    const mc = MINDSET_COLORS[m];
    const pct = data.counts[m] / 16;

    pdf.text(m, 40, ry, 9, m === data.dominant ? WHITE : MUTED, m === data.dominant);
    pdf.fillRect(140, ry - 9, 370, 10, "#27272a");
    pdf.fillRect(140, ry - 9, Math.round(pct * 370), 10, mc + "cc");
    pdf.text(`${data.counts[m]} / 16`, 555, ry, 9, mc, true, "right");
  }

  // ── Key traits ───────────────────────────────────────────────────────────────
  const traitY = 588;
  pdf.text("KEY TRAITS OF YOUR MINDSET", 40, traitY, 8, MUTED, true);
  pdf.line(40, traitY + 6, 555, traitY + 6, BORDER, 0.4);

  const col1 = data.traits.slice(0, 2);
  const col2 = data.traits.slice(2, 4);

  for (let i = 0; i < col1.length; i++) {
    const ty = traitY + 22 + i * 36;
    pdf.fillRect(40, ty - 12, 247, 28, DC + "15");
    pdf.strokeRect(40, ty - 12, 247, 28, DC + "44");
    pdf.fillRect(40, ty - 12, 3, 28, DC);
    pdf.text(col1[i], 52, ty + 3, 9, WHITE, false, "left", 220);
  }
  for (let i = 0; i < col2.length; i++) {
    const ty = traitY + 22 + i * 36;
    pdf.fillRect(308, ty - 12, 247, 28, DC + "15");
    pdf.strokeRect(308, ty - 12, 247, 28, DC + "44");
    pdf.fillRect(308, ty - 12, 3, 28, DC);
    pdf.text(col2[i], 320, ty + 3, 9, WHITE, false, "left", 220);
  }

  // ── What this means section ─────────────────────────────────────────────────
  const whatY = 700;
  pdf.fillRect(40, whatY, 515, 80, CARD);
  pdf.strokeRect(40, whatY, 515, 80, BORDER);
  pdf.fillRect(40, whatY, 515, 2, DC);

  pdf.text("WHAT THIS MEANS FOR YOU", 297, whatY + 18, 8, DC, true, "center");

  const tips: Record<Mindset, string> = {
    Optimistic: "You are a natural AI champion. Channel your enthusiasm by leading pilots, building business cases, and helping your organisation embrace AI-driven transformation.",
    Pragmatic:  "You bring balance and rigour to AI adoption. Your instinct to evaluate, test, and govern AI responsibly makes you an invaluable asset in any AI strategy team.",
    Skeptic:    "Your critical lens is essential. Use it to advocate for ethics, risk management, and human-centred AI design - ensuring AI serves people, not the other way around.",
  };

  pdf.textWrapped(tips[data.dominant], 56, whatY + 34, 8.5, MUTED, 490, 13);

  // ── Footer ──────────────────────────────────────────────────────────────────
  pdf.fillRect(0, 800, 595, 42, CARD);
  pdf.line(0, 800, 595, 800, BORDER, 0.5);
  pdf.text("Generated by Digiculum AI Mindset Assessment Platform", 297, 820, 8.5, MUTED, false, "center");
  pdf.text("info@digiculum.com", 297, 834, 8.5, PRIMARY, false, "center");

  // ── Download ────────────────────────────────────────────────────────────────
  const bytes = pdf.build();
  const blob = new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `AIMindset_Report_${data.name.replace(/\s+/g, "_")}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
}