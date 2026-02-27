// generateAIQPdf.ts
// White-background, clean layout — identical tone & style to generateMindsetPdf.ts
// Uses jsPDF  (npm install jspdf)

import jsPDF from "jspdf";
import digiLogo from "@/assets/digi-logo.png";

export interface AIQReportData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  knowScore:  number;   // 0–200   (correct MCQ × 10)
  hackScore:  number;   // 0–650   (rating ids 1–13 sum × 10)
  buildScore: number;   // 0–350   (rating ids 14–20 sum × 10)
  total:      number;   // 200–1200
  aiqLabel:   string;
  aiqColor:   string;
  description: string;
}

// ── Constants ─────────────────────────────────────────────────────────────────
const MAGENTA = "#C2185B";
const BLACK   = "#111111";
const DARK    = "#374151";
const GRAY    = "#6B7280";
const LGRAY   = "#9CA3AF";
const BORDER  = "#E5E7EB";
const ROWBG   = "#F9FAFB";

// ── Helpers ───────────────────────────────────────────────────────────────────

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#","");
  return [parseInt(h.substring(0,2),16), parseInt(h.substring(2,4),16), parseInt(h.substring(4,6),16)];
}
function setFill  (doc: jsPDF, hex: string) { const [r,g,b]=hexToRgb(hex); doc.setFillColor(r,g,b); }
function setStroke(doc: jsPDF, hex: string) { const [r,g,b]=hexToRgb(hex); doc.setDrawColor(r,g,b); }
function setTxt   (doc: jsPDF, hex: string) { const [r,g,b]=hexToRgb(hex); doc.setTextColor(r,g,b); }
function wrap(doc: jsPDF, text: string, maxW: number): string[] { return doc.splitTextToSize(text, maxW); }
function PW(doc: jsPDF) { return doc.internal.pageSize.getWidth();  }
function PH(doc: jsPDF) { return doc.internal.pageSize.getHeight(); }

// ── Load image as base64 (works with bundled assets) ─────────────────────────

async function loadImageAsBase64(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width  = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) { reject("canvas context failed"); return; }
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = reject;
    img.src = src;
  });
}

// ── Shared header & footer ────────────────────────────────────────────────────

function drawHeader(doc: jsPDF) {
  const w = PW(doc);
  // Pink bar — no text
  setFill(doc, MAGENTA);
  doc.rect(0, 0, w, 8, "F");
}

function drawFooter(doc: jsPDF, page: number, totalPages: number, name: string, date: string) {
  const w = PW(doc); const h = PH(doc);
  setStroke(doc, BORDER); doc.setLineWidth(0.3);
  doc.line(20, h-13, w-20, h-13);
  doc.setFont("helvetica","normal"); doc.setFontSize(7); setTxt(doc, LGRAY);
  doc.text(
    `AIQ Assessment  •  ${name}  •  ${date}  •  Prepared by Digiculum  •  info@digiculum.com`,
    w/2, h-8, { align:"center" }
  );
  doc.text(`Page ${page} of ${totalPages}`, w/2, h-4, { align:"center" });
}

// Magenta uppercase label + hairline rule; returns next y
function sectionLabel(doc: jsPDF, text: string, x: number, y: number, uw: number): number {
  doc.setFont("helvetica","bold"); doc.setFontSize(7.5); setTxt(doc, MAGENTA);
  doc.text(text, x, y);
  y += 2.5;
  setStroke(doc, BORDER); doc.setLineWidth(0.3);
  doc.line(x, y, x+uw, y);
  return y + 4;
}

// ── PAGE 1 ────────────────────────────────────────────────────────────────────

async function buildPage1(doc: jsPDF, data: AIQReportData, date: string) {
  const w = PW(doc); const ML = 20; const UW = w - 40;
  let y = 14;

  drawHeader(doc);
  y = 14;

  // ─── Report title + Digiculum logo ───────────────────────────────────────
  const logoW = 20;   // mm width of logo
  const logoH = 7;    // mm height of logo
  const logoX = ML + UW - logoW;
  const logoY = y - 4.5; // vertically align with title text

  // Draw Digiculum logo to the right of the title
  try {
    const logoData = await loadImageAsBase64(digiLogo);
    doc.addImage(logoData, "PNG", logoX, logoY, logoW, logoH);
  } catch {
    doc.setFont("helvetica","bold"); doc.setFontSize(8); setTxt(doc, MAGENTA);
    doc.text("Digiculum", logoX, y);
  }

  doc.setFont("helvetica","bold"); doc.setFontSize(16); setTxt(doc, BLACK);
  doc.text("AIQ Assessment Report", ML, y);
  y += 4;
  setStroke(doc, MAGENTA); doc.setLineWidth(0.6);
  doc.line(ML, y, ML+UW, y);
  y += 7;

  // ─── Report details ───────────────────────────────────────────────────────
  const sectionLabelY = y;

  doc.setFont("helvetica","bold"); doc.setFontSize(7.5); setTxt(doc, MAGENTA);
  doc.text("REPORT DETAILS", ML, sectionLabelY);

  // Hairline below label
  y = sectionLabelY + 2.5;
  setStroke(doc, BORDER); doc.setLineWidth(0.3);
  doc.line(ML, y, ML+UW, y);
  y += 4;

  // Details rows — "Prepared by" row removed
  const details: [string,string][] = [
    ["Name",            data.name],
    ["Assessment Date", date],
    ["Email",           data.email],
    ["Phone",           data.phone],
  ];
  if (data.organization.trim()) details.push(["Organisation", data.organization]);

  const rowH = 6.5;
  details.forEach(([label, value], i) => {
    const ry = y + i*rowH;
    if (i%2===0) { setFill(doc, ROWBG); doc.rect(ML, ry-4.5, UW, rowH, "F"); }
    doc.setFont("helvetica","bold"); doc.setFontSize(9); setTxt(doc, GRAY);
    doc.text(label, ML+2, ry);
    doc.setFont("helvetica","normal"); setTxt(doc, BLACK);
    doc.text(value||"—", ML+48, ry);
  });
  y += details.length*rowH + 7;

  // ─── Overall AIQ score ────────────────────────────────────────────────────
  y = sectionLabel(doc, "OVERALL AIQ SCORE", ML, y, UW);

  // Large score number centred
  doc.setFont("helvetica","bold"); doc.setFontSize(34); setTxt(doc, data.aiqColor);
  doc.text(String(data.total), w/2, y+12, { align:"center" });
  doc.setFont("helvetica","normal"); doc.setFontSize(9); setTxt(doc, GRAY);
  doc.text("out of 1200", w/2, y+18, { align:"center" });

  // AIQ level badge
  const [br,bg_,bb] = hexToRgb(data.aiqColor);
  const blr = Math.round(br+(255-br)*0.85), blg = Math.round(bg_+(255-bg_)*0.85), blb = Math.round(bb+(255-bb)*0.85);
  const badgeW = 62; const badgeX = (w-badgeW)/2;
  doc.setFillColor(blr,blg,blb);
  doc.roundedRect(badgeX, y+21, badgeW, 8, 2, 2, "F");
  doc.setDrawColor(br,bg_,bb); doc.setLineWidth(0.3);
  doc.roundedRect(badgeX, y+21, badgeW, 8, 2, 2, "S");
  doc.setFont("helvetica","bold"); doc.setFontSize(9); doc.setTextColor(br,bg_,bb);
  doc.text(data.aiqLabel, w/2, y+26.5, { align:"center" });
  y += 33;

  // ── Score range colour bar ──────────────────────────────────────────────
  setStroke(doc, BORDER); doc.setLineWidth(0.3);
  doc.line(ML, y, ML+UW, y);
  y += 4;

  const barY   = y;
  const barH   = 4;
  const segW   = UW / 5;
  const segs   = ["#ef4444","#f97316","#eab308","#22c55e","#6366f1"];

  segs.forEach((c, i) => {
    setFill(doc, c);
    doc.rect(ML + i * segW, barY, segW, barH, "F");
  });

  const clampedTotal = Math.min(Math.max(data.total, 200), 1200);
  const markerPct    = (clampedTotal - 200) / 1000;
  const markerX      = ML + markerPct * UW;

  doc.setFillColor(255, 255, 255);
  doc.rect(markerX - 0.8, barY - 0.5, 1.6, barH + 1, "F");

  setFill(doc, BLACK);
  doc.triangle(
    markerX - 2, barY - 2.5,
    markerX + 2, barY - 2.5,
    markerX,     barY - 0.5,
    "F"
  );

  doc.setFont("helvetica","bold"); doc.setFontSize(7.5); setTxt(doc, BLACK);
  const scoreLabelX = Math.min(Math.max(markerX, ML + 6), ML + UW - 6);
  doc.text(String(data.total), scoreLabelX, barY - 4, { align:"center" });

  y = barY + barH + 4;

  const rangeLbls = ["200","400","600","800","1000","1200"];
  const levelLbls = ["Very Low","Low","Medium","High","Very High"];

  doc.setFont("helvetica","normal"); doc.setFontSize(7); setTxt(doc, LGRAY);
  rangeLbls.forEach((l, i) => {
    const rx = i < 5 ? ML + i * segW : ML + UW;
    doc.text(l, rx, y + 3, { align: i < 5 ? "left" : "right" });
  });

  setTxt(doc, GRAY); doc.setFontSize(7);
  levelLbls.forEach((l, i) => {
    doc.text(l, ML + i * segW + segW / 2, y + 7, { align:"center" });
  });
  y += 13;

  // ─── Score breakdown: Know / Hack / Build ─────────────────────────────────
  y = sectionLabel(doc, "SCORE BREAKDOWN", ML, y, UW);

  const cols = [
    { label:"Know",  sub:"Core AI Concepts & Trends",        score:data.knowScore,  max:200 },
    { label:"Hack",  sub:"Apply AI Tools & Automate Tasks",  score:data.hackScore,  max:650 },
    { label:"Build", sub:"Create AI-Powered Apps",           score:data.buildScore, max:350 },
  ];
  const colW3 = (UW - 8) / 3;

  cols.forEach(({ label, sub, score, max }, i) => {
    const bx = ML + i * (colW3 + 4);

    setFill(doc, ROWBG);
    doc.roundedRect(bx, y, colW3, 38, 2, 2, "F");
    setStroke(doc, BORDER); doc.setLineWidth(0.3);
    doc.roundedRect(bx, y, colW3, 38, 2, 2, "S");

    setFill(doc, MAGENTA);
    doc.roundedRect(bx, y, colW3, 3, 1, 1, "F");

    doc.setFont("helvetica","bold"); doc.setFontSize(18); setTxt(doc, BLACK);
    doc.text(String(score), bx + colW3 / 2, y + 16, { align:"center" });

    doc.setFont("helvetica","bold"); doc.setFontSize(8.5); setTxt(doc, MAGENTA);
    doc.text(label, bx + colW3 / 2, y + 23, { align:"center" });

    doc.setFont("helvetica","normal"); doc.setFontSize(7); setTxt(doc, GRAY);
    doc.text(`out of ${max}`, bx + colW3 / 2, y + 28, { align:"center" });

    const trackY  = y + 31;
    const trackH2 = 3;
    const trackW  = colW3 - 8;
    setFill(doc, "#F3F4F6");
    doc.roundedRect(bx + 4, trackY, trackW, trackH2, 0.8, 0.8, "F");
    const fillW = max > 0 ? (score / max) * trackW : 0;
    if (fillW > 0) {
      setFill(doc, MAGENTA);
      doc.roundedRect(bx + 4, trackY, fillW, trackH2, 0.8, 0.8, "F");
    }
  });
  y += 43;

  // ─── Know–Hack–Build framework ────────────────────────────────────────────
  y = sectionLabel(doc, "THE KNOW–HACK–BUILD FRAMEWORK", ML, y, UW);

  const intro = "The Know–Hack–Build model is a framework for measuring an individual's AIQ or AI Quotient — the level of AI literacy and capability that will increasingly influence how people are evaluated and hired in the future.";
  doc.setFont("helvetica","normal"); doc.setFontSize(9); setTxt(doc, DARK);
  const introLines = wrap(doc, intro, UW);
  introLines.forEach((l: string, i: number) => { doc.text(l, ML, y + i * 4.5); });
  y += introLines.length * 4.5 + 5;

  const fwBlocks = [
    { label:"Know",  text:"Understand core AI concepts, trends, and use cases that matter for your role." },
    { label:"Hack",  text:"Apply AI tools to automate everyday tasks and boost productivity without coding." },
    { label:"Build", text:"Create practical AI apps that improve your work and give you an edge." },
  ];

  fwBlocks.forEach(({ label, text }) => {
    const lines = wrap(doc, text, UW - 30);
    const bh = lines.length * 4.5 + 4;

    setFill(doc, MAGENTA);
    doc.rect(ML, y, 2.5, bh, "F");

    doc.setFont("helvetica","bold"); doc.setFontSize(9); setTxt(doc, MAGENTA);
    doc.text(label + " —", ML + 5, y + 4.5);

    doc.setFont("helvetica","normal"); setTxt(doc, DARK);
    const labelOffset = label.length * 2.6 + 4;
    lines.forEach((l: string, i: number) => {
      doc.text(l, ML + 5 + labelOffset, y + 4.5 + i * 4.5);
    });
    y += bh + 3;
  });
  y += 4;

  // ─── Recommendation ───────────────────────────────────────────────────────
  y = sectionLabel(doc, "RECOMMENDATION", ML, y, UW);

  const recLines = wrap(doc, data.description, UW - 8);  // UW already = page width - 40mm margins; subtract indent offset
  const recH = recLines.length * 5 + 4;

  setFill(doc, MAGENTA);
  doc.rect(ML, y - 1, 2.5, recH, "F");

  doc.setFont("helvetica","normal"); doc.setFontSize(9); setTxt(doc, DARK);
  recLines.forEach((l: string, i: number) => { doc.text(l, ML + 6, y + 2 + i * 5); });

  drawFooter(doc, 1, 1, data.name, date);
}

// ── Main export ───────────────────────────────────────────────────────────────

export async function downloadAIQPdf(data: AIQReportData) {
  const doc  = new jsPDF({ orientation:"portrait", unit:"mm", format:"a4" });
  const date = new Date().toLocaleDateString("en-GB", { year:"numeric", month:"long", day:"numeric" });
  await buildPage1(doc, data, date);
  doc.save(`AIQ_Report_${data.name.replace(/\s+/g,"_")}.pdf`);
}