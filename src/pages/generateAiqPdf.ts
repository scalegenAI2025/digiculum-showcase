// generateAIQPdf.ts
// White-background, clean layout — identical tone & style to generateMindsetPdf.ts
// Uses jsPDF  (npm install jspdf)

import jsPDF from "jspdf";

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

// ── Constants (identical palette to Mindset report) ───────────────────────────
const MAGENTA = "#C2185B";
const BLACK   = "#111111";
const DARK    = "#374151";
const GRAY    = "#6B7280";
const LGRAY   = "#9CA3AF";
const BORDER  = "#E5E7EB";
const ROWBG   = "#F9FAFB";

// Know / Hack / Build brand colours
const KNOW_COLOR  = "#6366f1";
const HACK_COLOR  = "#22c55e";
const BUILD_COLOR = "#f97316";

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

// ── Shared header & footer ────────────────────────────────────────────────────

function drawHeader(doc: jsPDF) {
  const w = PW(doc);
  setFill(doc, MAGENTA);
  doc.rect(0, 0, w, 8, "F");
  doc.setFont("helvetica","bold"); doc.setFontSize(7); setTxt(doc,"#ffffff");
  doc.text("AIQ ASSESSMENT REPORT", 20, 5.5);
  doc.setFont("helvetica","normal");
  doc.text("Digiculum", w-20, 5.5, { align:"right" });
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

// Thin colour bar on left side of a block; return same y (caller advances)
function accentBar(doc: jsPDF, hex: string, x: number, y: number, h: number) {
  const [r,g,b] = hexToRgb(hex);
  doc.setFillColor(r,g,b);
  doc.rect(x, y, 2.5, h, "F");
}

// Draw a mini horizontal progress bar, return new y
function progressBar(doc: jsPDF, x: number, y: number, w: number, filled: number, max: number, color: string): number {
  const trackH = 3;
  setFill(doc, "#F3F4F6");
  doc.roundedRect(x, y, w, trackH, 0.8, 0.8, "F");
  const fillW = max > 0 ? (filled/max)*w : 0;
  if (fillW > 0) { setFill(doc, color); doc.roundedRect(x, y, fillW, trackH, 0.8, 0.8, "F"); }
  return y + trackH;
}

// ── PAGE 1: Full report ───────────────────────────────────────────────────────

function buildPage1(doc: jsPDF, data: AIQReportData, date: string) {
  const w = PW(doc); const ML = 20; const UW = w - 40;
  let y = 14;

  drawHeader(doc);
  y = 14;

  // ─── Report title ─────────────────────────────────────────────────────────
  doc.setFont("helvetica","bold"); doc.setFontSize(16); setTxt(doc, BLACK);
  doc.text("AIQ Assessment Report", ML, y);
  y += 4;
  setStroke(doc, MAGENTA); doc.setLineWidth(0.6);
  doc.line(ML, y, ML+UW, y);
  y += 7;

  // ─── Report details ───────────────────────────────────────────────────────
  y = sectionLabel(doc, "REPORT DETAILS", ML, y, UW);

  const details: [string,string][] = [
    ["Name",            data.name],
    ["Assessment Date", date],
    ["Prepared by",     "Digiculum"],
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

  // Score range colour bar
  setStroke(doc, BORDER); doc.setLineWidth(0.3);
  doc.line(ML, y, ML+UW, y);
  y += 4;

  const segW  = UW/5;
  const segs  = ["#ef4444","#f97316","#eab308","#22c55e","#6366f1"];
  segs.forEach((c,i) => { setFill(doc,c); doc.rect(ML+i*segW, y, segW, 4, "F"); });
  // white position marker (score range 200–1200)
  const pct = Math.min(Math.max((data.total-200)/1000, 0), 1);
  doc.setFillColor(255,255,255);
  doc.rect(ML+pct*UW-1, y-1, 2, 6, "F");

  y += 5;
  const rangeLbls = ["200","400","600","800","1000","1200"];
  const levelLbls = ["Very Low","Low","Medium","High","Very High"];
  doc.setFont("helvetica","normal"); doc.setFontSize(7); setTxt(doc, LGRAY);
  rangeLbls.forEach((l,i) => {
    const rx = i<5 ? ML+i*segW+segW/2 : ML+UW;
    doc.text(l, rx, y+3, { align:"center" });
  });
  setTxt(doc, GRAY); doc.setFontSize(7);
  levelLbls.forEach((l,i) => { doc.text(l, ML+i*segW+segW/2, y+7, { align:"center" }); });
  y += 13;

  // ─── Score breakdown: Know / Hack / Build ─────────────────────────────────
  y = sectionLabel(doc, "SCORE BREAKDOWN", ML, y, UW);

  const cols = [
    { label:"Know",  sub:"Core AI Concepts & Trends",        score:data.knowScore,  max:200,  color:KNOW_COLOR  },
    { label:"Hack",  sub:"Apply AI Tools & Automate Tasks",  score:data.hackScore,  max:650,  color:HACK_COLOR  },
    { label:"Build", sub:"Create AI-Powered Apps",           score:data.buildScore, max:350,  color:BUILD_COLOR },
  ];
  const colW3 = (UW-8)/3;

  cols.forEach(({ label, sub, score, max, color }, i) => {
    const bx = ML + i*(colW3+4);
    const [cr,cg,cb] = hexToRgb(color);
    const lr = Math.round(cr+(255-cr)*0.88), lg = Math.round(cg+(255-cg)*0.88), lb = Math.round(cb+(255-cb)*0.88);

    // Card bg
    doc.setFillColor(lr,lg,lb);
    doc.roundedRect(bx, y, colW3, 38, 2, 2, "F");
    doc.setDrawColor(cr,cg,cb); doc.setLineWidth(0.3);
    doc.roundedRect(bx, y, colW3, 38, 2, 2, "S");
    // Top colour strip
    doc.setFillColor(cr,cg,cb);
    doc.roundedRect(bx, y, colW3, 3, 1, 1, "F");
    // Score number
    doc.setFont("helvetica","bold"); doc.setFontSize(18); doc.setTextColor(cr,cg,cb);
    doc.text(String(score), bx+colW3/2, y+16, { align:"center" });
    // Label
    doc.setFont("helvetica","bold"); doc.setFontSize(8.5); doc.setTextColor(cr,cg,cb);
    doc.text(label, bx+colW3/2, y+23, { align:"center" });
    // Sub + max
    doc.setFont("helvetica","normal"); doc.setFontSize(7); setTxt(doc, GRAY);
    doc.text(`out of ${max}`, bx+colW3/2, y+28, { align:"center" });
    // Progress bar
    progressBar(doc, bx+4, y+31, colW3-8, score, max, color);
  });
  y += 43;

  // ─── Know–Hack–Build framework ────────────────────────────────────────────
  y = sectionLabel(doc, "THE KNOW–HACK–BUILD FRAMEWORK", ML, y, UW);

  const intro = "The Know–Hack–Build model is a framework for measuring an individual's AIQ or AI Quotient — the level of AI literacy and capability that will increasingly influence how people are evaluated and hired in the future.";
  doc.setFont("helvetica","normal"); doc.setFontSize(9); setTxt(doc, DARK);
  const introLines = wrap(doc, intro, UW);
  introLines.forEach((l:string,i:number) => { doc.text(l, ML, y+i*4.5); });
  y += introLines.length*4.5 + 5;

  const fwBlocks = [
    { label:"Know",  color:KNOW_COLOR,  text:"Understand core AI concepts, trends, and use cases that matter for your role." },
    { label:"Hack",  color:HACK_COLOR,  text:"Apply AI tools to automate everyday tasks and boost productivity without coding." },
    { label:"Build", color:BUILD_COLOR, text:"Create practical AI apps that improve your work and give you an edge." },
  ];
  fwBlocks.forEach(({ label, color, text }) => {
    const [cr,cg,cb] = hexToRgb(color);
    const lines = wrap(doc, text, UW-30);
    const bh = lines.length*4.5 + 4;
    accentBar(doc, color, ML, y, bh);
    doc.setFont("helvetica","bold"); doc.setFontSize(9); doc.setTextColor(cr,cg,cb);
    doc.text(label+" —", ML+5, y+4.5);
    doc.setFont("helvetica","normal"); setTxt(doc, DARK);
    lines.forEach((l:string,i:number) => { doc.text(l, ML+5+label.length*2.6+4, y+4.5+i*4.5); });
    y += bh + 3;
  });
  y += 4;

  // ─── Recommendation ───────────────────────────────────────────────────────
  y = sectionLabel(doc, "RECOMMENDATION", ML, y, UW);

  const recLines = wrap(doc, data.description, UW-8);
  const recH = recLines.length*5 + 4;
  const [rr,rg,rb] = hexToRgb(data.aiqColor);
  doc.setFillColor(rr,rg,rb);
  doc.rect(ML, y-1, 2.5, recH, "F");
  doc.setFont("helvetica","normal"); doc.setFontSize(9.5); setTxt(doc, DARK);
  recLines.forEach((l:string,i:number) => { doc.text(l, ML+6, y+2+i*5); });

  drawFooter(doc, 1, 1, data.name, date);
}

// ── Main export ───────────────────────────────────────────────────────────────

export function downloadAIQPdf(data: AIQReportData) {
  const doc  = new jsPDF({ orientation:"portrait", unit:"mm", format:"a4" });
  const date = new Date().toLocaleDateString("en-GB", { year:"numeric", month:"long", day:"numeric" });
  buildPage1(doc, data, date);
  doc.save(`AIQ_Report_${data.name.replace(/\s+/g,"_")}.pdf`);
}