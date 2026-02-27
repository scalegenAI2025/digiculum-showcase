// generateMindsetPdf.ts
// Browser-side PDF generation using jsPDF
// Install: npm install jspdf

import jsPDF from "jspdf";

type Mindset = "Optimistic" | "Pragmatic" | "Skeptic";

interface MindsetPdfParams {
  name: string;
  email: string;
  phone: string;
  organization: string;
  counts: Record<Mindset, number>;
  dominant: Mindset;
  dominantColor: string; // e.g. "#22c55e"
  description: string;
  traits: string[];
}

// ── Constants ─────────────────────────────────────────────────────────────────

const MAGENTA = "#C2185B";
const BLACK   = "#111111";
const DARK    = "#374151";
const GRAY    = "#6B7280";
const LGRAY   = "#9CA3AF";
const BORDER  = "#E5E7EB";

const MINDSET_COLORS: Record<Mindset, string> = {
  Optimistic: "#22c55e",
  Pragmatic:  "#6366f1",
  Skeptic:    "#f97316",
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

function setFill(doc: jsPDF, hex: string) {
  const [r, g, b] = hexToRgb(hex);
  doc.setFillColor(r, g, b);
}
function setStroke(doc: jsPDF, hex: string) {
  const [r, g, b] = hexToRgb(hex);
  doc.setDrawColor(r, g, b);
}
function setTxt(doc: jsPDF, hex: string) {
  const [r, g, b] = hexToRgb(hex);
  doc.setTextColor(r, g, b);
}

function wrap(doc: jsPDF, text: string, maxW: number): string[] {
  return doc.splitTextToSize(text, maxW);
}

function PW(doc: jsPDF) { return doc.internal.pageSize.getWidth(); }
function PH(doc: jsPDF) { return doc.internal.pageSize.getHeight(); }

// ── Shared header & footer ────────────────────────────────────────────────────

function drawHeader(doc: jsPDF) {
  const w = PW(doc);
  setFill(doc, MAGENTA);
  doc.rect(0, 0, w, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  setTxt(doc, "#ffffff");
  doc.text("AI MINDSET ASSESSMENT REPORT", 20, 5.5);
  doc.setFont("helvetica", "normal");
  doc.text("Digiculum", w - 20, 5.5, { align: "right" });
}

function drawFooter(doc: jsPDF, page: number, name: string, date: string) {
  const w = PW(doc);
  const h = PH(doc);
  setStroke(doc, BORDER);
  doc.setLineWidth(0.3);
  doc.line(20, h - 13, w - 20, h - 13);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  setTxt(doc, LGRAY);
  doc.text(
    `AI Mindset Assessment  •  ${name}  •  ${date}  •  Prepared by Digiculum  •  info@digiculum.com`,
    w / 2, h - 8, { align: "center" }
  );
  doc.text(`Page ${page} of 2`, w / 2, h - 4, { align: "center" });
}

function sectionLabel(doc: jsPDF, text: string, x: number, y: number, uw: number): number {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  setTxt(doc, MAGENTA);
  doc.text(text, x, y);
  y += 2.5;
  setStroke(doc, BORDER);
  doc.setLineWidth(0.3);
  doc.line(x, y, x + uw, y);
  return y + 4;
}

// ── PAGE 1: All report details ────────────────────────────────────────────────

function buildPage1(
  doc: jsPDF,
  name: string,
  date: string,
  email: string,
  phone: string,
  organization: string,
  dominant: Mindset,
  dominantColor: string,
  description: string,
  counts: Record<Mindset, number>,
  traits: string[],
  focus: string,
) {
  const w  = PW(doc);
  const ML = 20;
  const UW = w - 40;
  let y = 14;

  drawHeader(doc);
  y = 14;

  // ── Report title ──
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  setTxt(doc, BLACK);
  doc.text("AI Mindset Assessment Report", ML, y);
  y += 4;
  setStroke(doc, MAGENTA);
  doc.setLineWidth(0.6);
  doc.line(ML, y, ML + UW, y);
  y += 7;

  // ── Report details ──
  y = sectionLabel(doc, "REPORT DETAILS", ML, y, UW);

  const details: [string, string][] = [
    ["Name",            name],
    ["Assessment Date", date],
    ["Prepared by",     "Digiculum"],
    ["Email",           email],
    ["Phone",           phone],
  ];
  if (organization.trim()) details.push(["Organisation", organization]);

  const rowH = 6.5;
  details.forEach(([label, value], i) => {
    const ry = y + i * rowH;
    if (i % 2 === 0) {
      setFill(doc, "#F9FAFB");
      doc.rect(ML, ry - 4.5, UW, rowH, "F");
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    setTxt(doc, GRAY);
    doc.text(label, ML + 2, ry);
    doc.setFont("helvetica", "normal");
    setTxt(doc, BLACK);
    doc.text(value || "—", ML + 48, ry);
  });
  y += details.length * rowH + 7;

  // ── Predominant mindset ──
  y = sectionLabel(doc, "YOUR PREDOMINANT MINDSET", ML, y, UW);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  setTxt(doc, dominantColor);
  doc.text(dominant, w / 2, y + 9, { align: "center" });
  y += 20; // extra space between name and description

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  setTxt(doc, DARK);
  const descLines = wrap(doc, description, UW);
  descLines.forEach((line: string, i: number) => {
    doc.text(line, w / 2, y + i * 4.8, { align: "center" });
  });
  y += descLines.length * 4.8 + 7;

  // ── Focus ──
  y = sectionLabel(doc, "YOUR FOCUS", ML, y, UW);

  const [mr, mg, mb] = hexToRgb(dominantColor);
  const focusLines = wrap(doc, focus, UW - 8);
  const focusH = focusLines.length * 5 + 4;
  doc.setFillColor(mr, mg, mb);
  doc.rect(ML, y - 1, 2.5, focusH, "F");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  setTxt(doc, DARK);
  focusLines.forEach((line: string, i: number) => {
    doc.text(line, ML + 6, y + 2 + i * 5);
  });
  y += focusH + 7;

  // ── Mindset distribution ──
  y = sectionLabel(doc, "MINDSET DISTRIBUTION", ML, y, UW);

  const total     = Object.values(counts).reduce((a, b) => a + b, 0);
  // Bar now uses full UW minus label space — no space reserved for count number
  const barTrackW = UW - 28;

  (Object.entries(counts) as [Mindset, number][]).forEach(([m, c]) => {
    const color  = MINDSET_COLORS[m];
    const filled = total > 0 ? (c / total) * barTrackW : 0;

    // Mindset label on the left
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    setTxt(doc, GRAY);
    doc.text(m, ML, y + 3.5);

    // Gray track
    setFill(doc, "#F3F4F6");
    doc.roundedRect(ML + 28, y, barTrackW, 5, 1, 1, "F");

    // Coloured fill
    if (filled > 0) {
      setFill(doc, color);
      doc.roundedRect(ML + 28, y, filled, 5, 1, 1, "F");
    }

    // No count number — bar extends to full track width
    y += 9;
  });
  y += 5;

  // ── Key traits ──
  y = sectionLabel(doc, "KEY TRAITS", ML, y, UW);

  const colW   = (UW - 4) / 2;
  const traitH = 9;

  traits.forEach((t, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const tx  = ML + col * (colW + 4);
    const ty  = y + row * (traitH + 2);

    const lr = Math.round(mr + (255 - mr) * 0.88);
    const lg = Math.round(mg + (255 - mg) * 0.88);
    const lb = Math.round(mb + (255 - mb) * 0.88);
    doc.setFillColor(lr, lg, lb);
    doc.roundedRect(tx, ty, colW, traitH, 1.5, 1.5, "F");
    setStroke(doc, dominantColor);
    doc.setLineWidth(0.25);
    doc.roundedRect(tx, ty, colW, traitH, 1.5, 1.5, "S");

    doc.setFillColor(mr, mg, mb);
    doc.circle(tx + 4.5, ty + 4.5, 1, "F");

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(mr, mg, mb);
    doc.text(t, tx + 8.5, ty + 6);
  });

  drawFooter(doc, 1, name, date);
}

// ── PAGE 2: How Different Mindsets Work ──────────────────────────────────────

function buildPage2(doc: jsPDF, name: string, date: string) {
  doc.addPage();
  const w  = PW(doc);
  const ML = 20;
  const UW = w - 40;
  let y = 14;

  drawHeader(doc);
  y = 14;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  setTxt(doc, BLACK);
  doc.text("How Different Mindsets Work", ML, y);
  y += 4;
  setStroke(doc, MAGENTA);
  doc.setLineWidth(0.6);
  doc.line(ML, y, ML + UW, y);
  y += 9;

  const blocks: { mindset: Mindset; body: string }[] = [
    {
      mindset: "Optimistic",
      body: "People with an optimistic mindset are enthusiastic early adopters of AI, believing in its potential to revolutionize various industries, transform their businesses, and create significant value for their customers. They wholeheartedly embrace the hype surrounding AI, viewing it as a harbinger of groundbreaking innovations to develop new products, services, and solutions. They are excited about the new job prospects and opportunities opened by AI. They are willing to take risks with the expectation that the technology will yield significant benefits in terms of innovation, efficiency, and competitive advantage. They weigh profits more than ethics.",
    },
    {
      mindset: "Skeptic",
      body: "People with a skeptic mindset approach AI with caution and a degree of doubt, adopting a \"wait-and-see\" attitude, monitoring the technology's progress, and demanding concrete evidence of its value before considering its adoption. They are highly concerned about the ethical implications and the potential job losses caused by its large-scale adoption. They are hesitant to rush into adopting it without careful evaluation and risk mitigation. They weigh ethics more than profits.",
    },
    {
      mindset: "Pragmatic",
      body: "People with a pragmatic mindset fall somewhere between optimistic and skeptic firms. They are neither too excited about the promises of AI, nor doubt its potential to enable digital transformation. They take a balanced approach to AI adoption, measuring the technology benefits and identifying and fixing the underlying issues. They also consider the challenges such as bias and safety and invest in developing guardrails to ensure that AI is used responsibly and ethically. They normally prefer to reserve their opinions about the speculations around the job prospects or job losses likely to be caused by it. They balance profits and ethics.",
    },
  ];

  blocks.forEach(({ mindset, body }, idx) => {
    const color = MINDSET_COLORS[mindset];
    const [cr, cg, cb] = hexToRgb(color);

    const bodyLines = wrap(doc, body, UW - 10);
    const blockH    = 12 + bodyLines.length * 4.8;

    // Left colour accent bar
    doc.setFillColor(cr, cg, cb);
    doc.rect(ML, y, 3, blockH, "F");

    // Mindset name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(cr, cg, cb);
    doc.text(mindset, ML + 8, y + 7);

    // Body
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    setTxt(doc, DARK);
    bodyLines.forEach((line: string, i: number) => {
      doc.text(line, ML + 8, y + 13 + i * 4.8);
    });

    y += blockH + 4;

    // Separator between blocks (not after last)
    if (idx < blocks.length - 1) {
      setStroke(doc, BORDER);
      doc.setLineWidth(0.2);
      doc.line(ML, y, ML + UW, y);
      y += 6;
    }
  });

  drawFooter(doc, 2, name, date);
}

// ── Main export ───────────────────────────────────────────────────────────────

export function downloadMindsetPdf(params: MindsetPdfParams) {
  const {
    name, email, phone, organization,
    counts, dominant, dominantColor, description, traits,
  } = params;

  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const date = new Date().toLocaleDateString("en-GB", {
    year: "numeric", month: "long", day: "numeric",
  });

  const focus =
    dominant === "Pragmatic"
      ? "Your focus should be to make decisions and take actions based on a pragmatic mindset — continuing to evaluate AI thoughtfully, balancing innovation with oversight, and championing measured, responsible adoption across your organisation."
      : `Your predominant mindset is ${dominant}. Your focus should be to transition your mindset to Pragmatic — taking a balanced, evidence-based approach that weighs both the promise and the risks of AI, ensuring responsible adoption with appropriate human oversight.`;

  buildPage1(doc, name, date, email, phone, organization, dominant, dominantColor, description, counts, traits, focus);
  buildPage2(doc, name, date);

  doc.save(`AI_Mindset_Report_${name.replace(/\s+/g, "_")}.pdf`);
}