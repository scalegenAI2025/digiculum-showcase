import { useState, useRef } from "react";
import { Brain, CheckCircle2, ChevronRight, ChevronLeft, Download, Mail, Phone, User, AlertCircle } from "lucide-react";
import { downloadAIQPdf } from "./generateAIQPdf";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Question {
  id: number;
  text: string;
  options: { label: string; text: string }[];
  image?: string;
  correct: string[];
  multi: boolean;
}

interface RatingStatement {
  id: number;
  text: string;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  organization: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const MRI_IMAGE = "/mnt/user-data/uploads/1771852490099_image.png";

const QUESTIONS: Question[] = [
  { id: 1,  text: "Which of the following statement best describes AI?",
    options: [{ label:"A", text:"AI is a tool" },{ label:"B", text:"AI is a software" },{ label:"C", text:"AI is an agent" },{ label:"D", text:"AI is a technology" }],
    correct: ["D"], multi: false },
  { id: 2,  text: "Which of the following are the ethical concerns associated with Generative AI?",
    options: [{ label:"A", text:"Job displacement" },{ label:"B", text:"Decreased device durability" },{ label:"C", text:"Potential for creating misleading information" },{ label:"D", text:"Over-reliance on cloud storage" }],
    correct: ["C"], multi: false },
  { id: 3,  text: "I am a class teacher. I want to build an app which tells me which students are more likely to pass the exam. Which AI technology can provide me the most cost-effective solution?",
    options: [{ label:"A", text:"Machine Learning" },{ label:"B", text:"Deep Learning" },{ label:"C", text:"Generative AI" },{ label:"D", text:"Agentic AI" }],
    correct: ["A"], multi: false },
  { id: 4,  text: "I am a class teacher. I build an app which tells me which students are more likely to pass the exam. After identifying the students, the app is programmed to send an email to their parents. It is a use case of:",
    options: [{ label:"A", text:"AI Agent" },{ label:"B", text:"Bot" },{ label:"C", text:"Agentic AI" },{ label:"D", text:"AI Copilot" }],
    correct: ["B"], multi: false },
  { id: 5,  text: "I am a class teacher. I build an app which tells me which students are more likely to pass the exam. After identifying the students, the app auto-decides to send an email to their parents. It is a use case of:",
    options: [{ label:"A", text:"AI Agent" },{ label:"B", text:"Bot" },{ label:"C", text:"Agentic AI" },{ label:"D", text:"AI Copilot" }],
    correct: ["C"], multi: false },
  { id: 6,  text: "What is the primary function of Generative AI?",
    options: [{ label:"A", text:"To convert data" },{ label:"B", text:"To categorize data" },{ label:"C", text:"To collect data" },{ label:"D", text:"To create data" }],
    correct: ["D"], multi: false },
  { id: 7,  text: "Which of the following is an example of Generative AI?",
    options: [{ label:"A", text:"Spam filters" },{ label:"B", text:"Deep fakes" },{ label:"C", text:"Data annotation algorithms" },{ label:"D", text:"All of the above" }],
    correct: ["B"], multi: false },
  { id: 8,  text: "What does GPT stand for?",
    options: [{ label:"A", text:"Generative Pretrained Transformer" },{ label:"B", text:"Generative Processing Transformer" },{ label:"C", text:"Generative Predictive Transformer" },{ label:"D", text:"Generative Performance Transformer" }],
    correct: ["A"], multi: false },
  { id: 9,  text: "On which version of GPT was ChatGPT originally released?",
    options: [{ label:"A", text:"GPT-3" },{ label:"B", text:"GPT-3.5" },{ label:"C", text:"GPT-4" },{ label:"D", text:"GPT-4o" }],
    correct: ["B"], multi: false },
  { id: 10, text: "A hospital wants to build a system that detects tumors from MRI scans with high accuracy. The dataset contains thousands of medical images. Which AI technology is most appropriate?",
    image: MRI_IMAGE,
    options: [{ label:"A", text:"Machine Learning" },{ label:"B", text:"Deep Learning" },{ label:"C", text:"Generative AI" },{ label:"D", text:"Agentic AI" }],
    correct: ["B"], multi: false },
  { id: 11, text: "A bank wants to detect highly sophisticated fraud patterns hidden inside millions of transaction records. Which AI approach is most powerful for capturing complex nonlinear patterns?",
    options: [{ label:"A", text:"Machine Learning" },{ label:"B", text:"Deep Learning" },{ label:"C", text:"Generative AI" },{ label:"D", text:"Agentic AI" }],
    correct: ["B"], multi: false },
  { id: 12, text: "Which of the following statements are true?",
    options: [{ label:"A", text:"IT impacts AI" },{ label:"B", text:"AI impacts IT" },{ label:"C", text:"AI is a digital transformation technology" },{ label:"D", text:"AI is not a digital transformation technology" }],
    correct: ["A","B","C"], multi: true },
  { id: 13, text: "A consulting firm wants to automatically generate client reports based on raw data summaries. Which AI technology is most suitable?",
    options: [{ label:"A", text:"Machine Learning" },{ label:"B", text:"Deep Learning" },{ label:"C", text:"Generative AI" },{ label:"D", text:"Robotic Process Automation" }],
    correct: ["C"], multi: false },
  { id: 14, text: "Which of the AI technologies mandatorily need neural networks architecture?",
    options: [{ label:"A", text:"Machine Learning" },{ label:"B", text:"Generative AI" },{ label:"C", text:"Deep Learning" },{ label:"D", text:"Computer Vision" }],
    correct: ["B","C"], multi: true },
  { id: 15, text: "Which of the following GPT versions are instruction tuned?",
    options: [{ label:"A", text:"GPT-3" },{ label:"B", text:"GPT-3.5" },{ label:"C", text:"GPT-4" },{ label:"D", text:"GPT-4o" }],
    correct: ["B","C","D"], multi: true },
  { id: 16, text: "What is fine-tuning?",
    options: [{ label:"A", text:"Adjusting the power settings of the hardware" },{ label:"B", text:"Modifying the physical components of the AI system" },{ label:"C", text:"Making small adjustments to the model based on additional data" },{ label:"D", text:"Teaching the AI to perform physical tasks" }],
    correct: ["C"], multi: false },
  { id: 17, text: "Which of the following statements are true?",
    options: [{ label:"A", text:"ChatGPT is an LLM" },{ label:"B", text:"ChatGPT is not an LLM" },{ label:"C", text:"When you infuse AI in an existing product, it becomes an AI copilot" },{ label:"D", text:"AI copilot is a completely new product" }],
    correct: ["B","C"], multi: true },
  { id: 18, text: "An AI system: searches flights, compares prices, books tickets, sends confirmations, and updates calendar based on pre-coded tasks. Which AI type best describes this system?",
    options: [{ label:"A", text:"Generative AI" },{ label:"B", text:"Agentic AI" },{ label:"C", text:"Machine Learning" },{ label:"D", text:"Automation" }],
    correct: ["D"], multi: false },
  { id: 19, text: "An AI system: searches flights, compares prices, books tickets, sends confirmations, and updates calendar based on text prompt and no code. Which AI type best describes this system?",
    options: [{ label:"A", text:"Generative AI" },{ label:"B", text:"Agentic AI" },{ label:"C", text:"Machine Learning" },{ label:"D", text:"Automation" }],
    correct: ["B"], multi: false },
  { id: 20, text: "A fashion brand wants AI to generate new clothing design concepts based on prompts. Which AI approach fits best?",
    options: [{ label:"A", text:"Deep Learning classification" },{ label:"B", text:"Generative AI" },{ label:"C", text:"Basic Machine Learning" },{ label:"D", text:"Agentic AI" }],
    correct: ["B"], multi: false },
];

// Rating ids 1–13 = Hack  |  ids 14–20 = Build
const RATING_STATEMENTS: RatingStatement[] = [
  { id: 1,  text: "I can effectively write structured prompts that consistently generate high-quality outputs from AI tools (e.g., reports, summaries, analysis)" },
  { id: 2,  text: "I have automated any recurring task using AI tools (e.g., email drafting, meeting summaries, report generation)" },
  { id: 3,  text: "I have actively used more than 2 AI tools in combination (e.g., Flow + ChatGPT + Google Workspace)" },
  { id: 4,  text: "I can break down a manual process into steps and identify where AI can intervene" },
  { id: 5,  text: "I use AI to analyze spreadsheets, documents, or dashboards to extract insights" },
  { id: 6,  text: "I use AI to simulate scenarios or compare strategic options before making a decision" },
  { id: 7,  text: "I configure or customize an AI assistant or custom GPT (ChatGPT) for a specific task" },
  { id: 8,  text: "I have connected AI tools with my other apps (calendar, emails, website etc.)" },
  { id: 9,  text: "When faced with a new problem, I often think how can AI help solve this" },
  { id: 10, text: "I use AI to accelerate my own learning" },
  { id: 11, text: "I can quantify the time or cost savings created by my AI usage" },
  { id: 12, text: "I manually validate or review the AI output before using it in my daily tasks" },
  { id: 13, text: "I often experiment with new AI tools" },
  // Build ↓
  { id: 14, text: "I can identify a real-world business problem and determine whether AI is an appropriate solution" },
  { id: 15, text: "I have designed a structured AI use case document" },
  { id: 16, text: "I can assess whether available data is sufficient and suitable for building an AI solution" },
  { id: 17, text: "I can design a high-level AI solution" },
  { id: 18, text: "I can select AI tools or Large Language Models based on requirements" },
  { id: 19, text: "I can build a functional AI-powered workflow or application using no-code / low-code tools" },
  { id: 20, text: "I can define KPIs and track performance metrics for AI systems after deployment" },
];

// ─── Scoring ──────────────────────────────────────────────────────────────────
// Know  : correct MCQ answers × 10          →  0 – 200
// Hack  : sum of ratings (ids 1–13) × 10    →  0 – 650
// Build : sum of ratings (ids 14–20) × 10   →  0 – 350
// Total : Know + Hack + Build                → 200 – 1200  (min 20+0+0 realistic = 200 after first MCQ)
// Note  : minimum total from scoring formula = 200 (20 MCQs each at least attempted; ratings at least 1)
//         but instructions say range 200-1200, so we enforce minimum 200 at display

function scoreQuestion(question: Question, selected: string[]): boolean {
  return [...selected].sort().join(",") === [...question.correct].sort().join(",");
}

function getAIQLabel(total: number): { label: string; color: string } {
  if (total <= 400)  return { label: "Very Low AIQ",  color: "#ef4444" };
  if (total <= 600)  return { label: "Low AIQ",        color: "#f97316" };
  if (total <= 800)  return { label: "Medium AIQ",     color: "#eab308" };
  if (total <= 1000) return { label: "High AIQ",       color: "#22c55e" };
  return                    { label: "Very High AIQ",  color: "#6366f1" };
}

function getDescription(total: number): string {
  if (total <= 400)
    return "You are at the early stage of your AI journey and currently have limited conceptual clarity and practical exposure to AI tools. Your immediate focus should be building strong foundational understanding of core AI concepts such as Machine Learning, Generative AI, and Agentic AI. Start using one AI tool consistently for structured tasks like summarization, drafting, and ideation to build comfort. Avoid jumping into automation or advanced AI workflows before strengthening conceptual clarity. A structured learning pathway with guided practice will significantly accelerate your progress. With focused effort over the next 60–90 days, you can transition from awareness to practical confidence in AI usage.";
  if (total <= 600)
    return "You have foundational awareness of AI concepts and are beginning to apply AI tools in selective scenarios. However, your usage appears inconsistent and lacks structured workflow integration. The next step is to move from occasional use to systematic productivity enhancement through prompt mastery and task automation. You should aim to automate at least two recurring workflows and measure tangible time or cost savings. Strengthening your understanding of AI use case design will help bridge the gap between experimentation and impact. With structured implementation, you can rapidly evolve into a confident AI practitioner.";
  if (total <= 800)
    return "You demonstrate solid conceptual understanding and regular application of AI tools in your work. You are comfortable using AI for productivity and analysis but may not yet be fully leveraging cross-tool orchestration or scalable AI workflows. The next level of growth lies in designing structured AI use cases aligned with measurable business outcomes. You should focus on integrating multiple AI tools and defining KPIs to quantify impact. Developing the ability to assess data readiness and select appropriate AI models will elevate your capability. With disciplined execution, you can transition to an AI expert within your domain.";
  if (total <= 1000)
    return "You exhibit strong AI fluency across knowledge, applied usage, and solution design. Your AI usage appears systematic, outcome-oriented, and aligned with strategic objectives. To move further, focus on scaling AI adoption across teams and embedding governance frameworks. You should formalize AI experimentation processes and build repeatable playbooks for automation and AI deployment. Mentoring others and driving cross-functional AI initiatives will amplify your impact. With continued innovation and strategic alignment, you are positioned to become an AI expert within your organization.";
  return "You operate at an advanced level of AI capability, combining conceptual depth, operational execution, and strategic thinking. Your focus should now shift from individual excellence to organizational transformation and ecosystem influence. Standardizing AI governance, risk management, and performance measurement frameworks will ensure sustainable scale. You are well-positioned to architect enterprise-wide AI adoption strategies and drive measurable ROI. Expanding into advanced areas such as Agentic AI systems, AI architecture optimization, and policy alignment will further differentiate you. At this level, your opportunity is not just to use AI effectively, but to shape how AI creates competitive advantage at scale.";
}

// ─── Types ────────────────────────────────────────────────────────────────────

type Phase = "assessment" | "info" | "result";
type AssessmentSubPhase = "mcq" | "rating";

// ─── Component ────────────────────────────────────────────────────────────────

export default function AIQAssessment() {
  const [phase, setPhase]                       = useState<Phase>("assessment");
  const [subPhase, setSubPhase]                 = useState<AssessmentSubPhase>("mcq");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentRatingIndex, setCurrentRatingIndex]     = useState(0);
  const [answers, setAnswers]                   = useState<Record<number, string[]>>({});
  const [ratings, setRatings]                   = useState<Record<number, number>>({});
  const [userInfo, setUserInfo]                 = useState<UserInfo>({ name:"", email:"", phone:"", organization:"" });
  const [infoErrors, setInfoErrors]             = useState<Partial<UserInfo>>({});
  const [knowScore,  setKnowScore]              = useState(0);   // 0–200
  const [hackScore,  setHackScore]              = useState(0);   // 0–650
  const [buildScore, setBuildScore]             = useState(0);   // 0–350
  const [unansweredWarning, setUnansweredWarning] = useState(false);
  const [ratingWarning, setRatingWarning]         = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const currentQuestion        = QUESTIONS[currentQuestionIndex];
  const currentRatingStatement = RATING_STATEMENTS[currentRatingIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion  = currentQuestionIndex === QUESTIONS.length - 1;
  const isFirstRating   = currentRatingIndex === 0;
  const isLastRating    = currentRatingIndex === RATING_STATEMENTS.length - 1;
  const answeredMCQ     = Object.keys(answers).length;
  const answeredRating  = Object.keys(ratings).length;

  function scrollToCard() { cardRef.current?.scrollIntoView({ behavior:"smooth", block:"start" }); }

  // ── MCQ handlers ─────────────────────────────────────────────────────────────

  function toggleAnswer(qId: number, label: string, multi: boolean) {
    setUnansweredWarning(false);
    setAnswers(prev => {
      const cur = prev[qId] ?? [];
      if (multi) return { ...prev, [qId]: cur.includes(label) ? cur.filter(l => l !== label) : [...cur, label] };
      return { ...prev, [qId]: [label] };
    });
  }

  function goToNextQuestion() {
    if (!answers[currentQuestion.id]?.length) { setUnansweredWarning(true); return; }
    setUnansweredWarning(false);
    setCurrentQuestionIndex(i => i + 1);
    scrollToCard();
  }

  function goToPrevQuestion() {
    setUnansweredWarning(false);
    setCurrentQuestionIndex(i => i - 1);
    scrollToCard();
  }

  function submitMCQ() {
    if (!answers[currentQuestion.id]?.length) { setUnansweredWarning(true); return; }
    setUnansweredWarning(false);
    let correct = 0;
    for (const q of QUESTIONS) { if (scoreQuestion(q, answers[q.id] ?? [])) correct++; }
    setKnowScore(correct * 10); // 0–200
    setSubPhase("rating");
    setCurrentRatingIndex(0);
    scrollToCard();
  }

  // ── Rating handlers ───────────────────────────────────────────────────────────

  function goToNextRating() {
    if (!ratings[currentRatingStatement.id]) { setRatingWarning(true); return; }
    setRatingWarning(false);
    setCurrentRatingIndex(i => i + 1);
    scrollToCard();
  }

  function goToPrevRating() {
    setRatingWarning(false);
    setCurrentRatingIndex(i => i - 1);
    scrollToCard();
  }

  function submitRating() {
    if (!ratings[currentRatingStatement.id]) { setRatingWarning(true); return; }
    setRatingWarning(false);
    let hack = 0, build = 0;
    for (const s of RATING_STATEMENTS) {
      const v = ratings[s.id] ?? 0;
      if (s.id <= 13) hack  += v;
      else            build += v;
    }
    setHackScore(hack * 10);   // max 13×5×10 = 650
    setBuildScore(build * 10); // max  7×5×10 = 350
    setPhase("info");
    scrollToCard();
  }

  // ── Info handler ─────────────────────────────────────────────────────────────

  function submitInfo() {
    const errors: Partial<UserInfo> = {};
    if (!userInfo.name.trim()) errors.name = "Name is required";
    if (!userInfo.email.trim() || !/\S+@\S+\.\S+/.test(userInfo.email)) errors.email = "Valid email is required";
    if (!userInfo.phone.trim() || !/^\+?[\d\s\-]{7,15}$/.test(userInfo.phone)) errors.phone = "Valid phone is required";
    setInfoErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setPhase("result");
    scrollToCard();
  }

  // ── Derived values ────────────────────────────────────────────────────────────

  const total   = knowScore + hackScore + buildScore; // 200–1200
  const aiqInfo = getAIQLabel(total);
  const isHack  = (idx: number) => idx < 13; // rating index 0–12 = Hack, 13–19 = Build

  const steps = [
    { key:"assessment", label:"Assessment" },
    { key:"info",       label:"Your Info"  },
    { key:"result",     label:"Report"     },
  ];
  function stepState(key: string) {
    const order = ["assessment","info","result"];
    const ci = order.indexOf(phase), si = order.indexOf(key);
    return si === ci ? "active" : si < ci ? "done" : "inactive";
  }

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen" style={{ backgroundColor:"#ffffff", color:"#111111", fontFamily:"inherit" }}>

      {/* ── Hero ── */}
      <section className="pt-32 pb-12 px-6" style={{ backgroundColor:"#ffffff" }}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-primary text-primary-foreground">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-semibold">Artificial Intelligence Quotient</span>
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color:"#111111" }}>AIQ Assessment</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"#555555" }}>
            Measure your AI knowledge and application skills across 40 questions. Get a personalised AIQ report.
          </p>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {steps.map((step, i) => {
              const state = stepState(step.key);
              return (
                <div key={step.key} className="flex items-center gap-2">
                  <div className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all
                    ${state==="active" ? "bg-primary text-primary-foreground"
                    : state==="done"   ? "bg-primary/10 text-primary border border-primary/30"
                    :                    "bg-gray-100 text-gray-400 border border-gray-200"}`}>
                    {state==="done" ? <CheckCircle2 className="w-3 h-3"/> : <span>{i+1}</span>}
                    {step.label}
                  </div>
                  {i < steps.length-1 && <ChevronRight className="w-3 h-3" style={{ color:"#d1d5db" }}/>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div ref={cardRef} className="container mx-auto max-w-4xl px-6 pb-24">

        {/* ════════ MCQ ════════ */}
        {phase==="assessment" && subPhase==="mcq" && (
          <div className="space-y-6">
            {/* Progress */}
            <div className="flex items-center gap-3">
              <span className="text-sm whitespace-nowrap" style={{ color:"#555555" }}>Know Q{currentQuestionIndex+1} of {QUESTIONS.length}</span>
              <div className="flex-1 rounded-full h-1.5 overflow-hidden bg-gray-100">
                <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width:`${((currentQuestionIndex+1)/QUESTIONS.length)*100}%` }}/>
              </div>
              <span className="text-sm whitespace-nowrap" style={{ color:"#555555" }}>{answeredMCQ} answered</span>
            </div>

            {/* Dot nav */}
            <div className="flex flex-wrap gap-1.5">
              {QUESTIONS.map((q, idx) => (
                <button key={q.id} onClick={() => { setUnansweredWarning(false); setCurrentQuestionIndex(idx); scrollToCard(); }}
                  className={`w-7 h-7 rounded-full text-xs font-semibold transition-all
                    ${idx===currentQuestionIndex ? "bg-primary text-primary-foreground border-0"
                    : answers[q.id]?.length      ? "bg-primary/10 text-primary border border-primary/30"
                    :                              "bg-gray-100 text-gray-500 border border-gray-200"}`}>
                  {idx+1}
                </button>
              ))}
            </div>

            {/* Question card */}
            <div className="rounded-2xl overflow-hidden" style={{ background:"#f9fafb", border:"1px solid #e5e7eb" }}>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 mt-0.5 bg-primary/10 text-primary">
                    {currentQuestion.id}
                  </span>
                  <div className="flex-1">
                    {currentQuestion.multi && (
                      <span className="inline-block text-xs rounded-full px-2 py-0.5 mb-2 font-medium bg-primary/10 text-primary border border-primary/30">
                        Multiple correct answers
                      </span>
                    )}
                    {currentQuestion.image && (
                      <div className="mb-4 rounded-lg overflow-hidden" style={{ border:"1px solid #e5e7eb" }}>
                        <img src={currentQuestion.image} alt="Question image" className="w-full max-h-56 object-cover"/>
                      </div>
                    )}
                    <p className="text-base font-medium leading-relaxed" style={{ color:"#111111" }}>{currentQuestion.text}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5 ml-10">
                  {currentQuestion.options.map(opt => {
                    const selected = answers[currentQuestion.id]?.includes(opt.label);
                    return (
                      <button key={opt.label} onClick={() => toggleAnswer(currentQuestion.id, opt.label, currentQuestion.multi)}
                        className={`flex items-center gap-3 text-left px-4 py-3 rounded-xl transition-all text-sm
                          ${selected ? "bg-primary/10 border-2 border-primary" : "bg-white border border-gray-200"}`}
                        style={{ color:"#374151" }}>
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0
                          ${selected ? "bg-primary text-primary-foreground" : "bg-gray-100 text-gray-500"}`}>
                          {opt.label}
                        </span>
                        {opt.text}
                      </button>
                    );
                  })}
                </div>

                {unansweredWarning && (
                  <p className="mt-3 text-xs flex items-center gap-1.5 ml-10" style={{ color:"#f59e0b" }}>
                    <AlertCircle className="w-3.5 h-3.5"/> Please select an answer before proceeding.
                  </p>
                )}
              </div>
            </div>

            {/* Nav */}
            <div className="flex justify-between items-center pt-2">
              <button onClick={goToPrevQuestion} disabled={isFirstQuestion}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 bg-white disabled:opacity-30 disabled:cursor-not-allowed">
                <ChevronLeft className="w-4 h-4"/> Previous
              </button>
              {isLastQuestion
                ? <button onClick={submitMCQ} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground border-0">
                    Next: Hack &amp; Build <ChevronRight className="w-4 h-4"/>
                  </button>
                : <button onClick={goToNextQuestion} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground border-0">
                    Next <ChevronRight className="w-4 h-4"/>
                  </button>
              }
            </div>
          </div>
        )}

        {/* ════════ RATING ════════ */}
        {phase==="assessment" && subPhase==="rating" && (
          <div className="space-y-6">
            <div className="rounded-xl p-4 text-sm bg-primary/10 border border-primary/30 text-primary">
              Rate each statement <strong>1–5</strong> based on how often it applies to you.&nbsp;
              <span className="opacity-80">(1 = Never | 2 = Rarely | 3 = Sometimes | 4 = Frequently | 5 = Systematically)</span>
            </div>

            {/* Hack / Build sub-label */}
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold
                ${!isHack(currentRatingIndex) ? "bg-gray-100 text-gray-500 border border-gray-200" : "bg-primary text-primary-foreground"}`}>
                Hack (Q1–13)
              </span>
              <ChevronRight className="w-3 h-3 text-gray-300"/>
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold
                ${isHack(currentRatingIndex) ? "bg-gray-100 text-gray-500 border border-gray-200" : "bg-primary text-primary-foreground"}`}>
                Build (Q14–20)
              </span>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3">
              <span className="text-sm whitespace-nowrap" style={{ color:"#555555" }}>
                {isHack(currentRatingIndex) ? "Hack" : "Build"} Q{currentRatingIndex+1} of {RATING_STATEMENTS.length}
              </span>
              <div className="flex-1 rounded-full h-1.5 overflow-hidden bg-gray-100">
                <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width:`${((currentRatingIndex+1)/RATING_STATEMENTS.length)*100}%` }}/>
              </div>
              <span className="text-sm whitespace-nowrap" style={{ color:"#555555" }}>{answeredRating} answered</span>
            </div>

            {/* Dot nav */}
            <div className="flex flex-wrap gap-1.5">
              {RATING_STATEMENTS.map((s, idx) => (
                <button key={s.id} onClick={() => { setRatingWarning(false); setCurrentRatingIndex(idx); scrollToCard(); }}
                  className={`w-7 h-7 rounded-full text-xs font-semibold transition-all
                    ${idx===currentRatingIndex ? "bg-primary text-primary-foreground border-0"
                    : ratings[s.id]            ? "bg-primary/10 text-primary border border-primary/30"
                    :                            "bg-gray-100 text-gray-500 border border-gray-200"}`}>
                  {idx+1}
                </button>
              ))}
            </div>

            {/* Rating card */}
            <div className="rounded-2xl overflow-hidden" style={{ background:"#f9fafb", border:"1px solid #e5e7eb" }}>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-6">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 mt-0.5 bg-primary/10 text-primary">
                    {currentRatingIndex+1}
                  </span>
                  <div className="flex-1">
                    <span className="inline-block text-xs rounded-full px-2 py-0.5 mb-2 font-medium bg-primary/10 text-primary border border-primary/30">
                      {isHack(currentRatingIndex) ? "Hack" : "Build"}
                    </span>
                    <p className="text-base font-medium leading-relaxed" style={{ color:"#111111" }}>{currentRatingStatement.text}</p>
                  </div>
                </div>

                <div className="flex gap-3 ml-10 flex-wrap">
                  {[1,2,3,4,5].map(val => {
                    const labels = ["Never","Rarely","Sometimes","Frequently","Systematically"];
                    const selected = ratings[currentRatingStatement.id] === val;
                    return (
                      <button key={val} onClick={() => { setRatingWarning(false); setRatings(prev => ({ ...prev, [currentRatingStatement.id]:val })); }}
                        className={`flex flex-col items-center gap-1 px-5 py-3 rounded-xl text-xs font-semibold transition-all min-w-[80px]
                          ${selected ? "bg-primary text-primary-foreground border-0" : "bg-white border border-gray-200 text-gray-600"}`}>
                        <span className="text-xl font-bold">{val}</span>
                        <span className="font-normal opacity-80">{labels[val-1]}</span>
                      </button>
                    );
                  })}
                </div>

                {ratingWarning && (
                  <p className="mt-3 text-xs flex items-center gap-1.5 ml-10" style={{ color:"#f59e0b" }}>
                    <AlertCircle className="w-3.5 h-3.5"/> Please select a rating before proceeding.
                  </p>
                )}
              </div>
            </div>

            {/* Nav */}
            <div className="flex justify-between items-center pt-2">
              <button onClick={() => { if (isFirstRating) { setSubPhase("mcq"); setCurrentQuestionIndex(QUESTIONS.length-1); scrollToCard(); } else { goToPrevRating(); } }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 bg-white">
                <ChevronLeft className="w-4 h-4"/> Previous
              </button>
              {isLastRating
                ? <button onClick={submitRating} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground border-0">
                    Next: Your Info <ChevronRight className="w-4 h-4"/>
                  </button>
                : <button onClick={goToNextRating} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground border-0">
                    Next <ChevronRight className="w-4 h-4"/>
                  </button>
              }
            </div>
          </div>
        )}

        {/* ════════ INFO ════════ */}
        {phase==="info" && (
          <div className="max-w-xl mx-auto">
            <div className="rounded-2xl overflow-hidden" style={{ background:"#f9fafb", border:"1px solid #e5e7eb" }}>
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 bg-primary/10 border border-primary/30">
                    <Brain className="w-7 h-7 text-primary"/>
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color:"#111111" }}>Almost done!</h2>
                  <p className="text-sm mt-1" style={{ color:"#555555" }}>Enter your details to generate your personalised AIQ Report.</p>
                </div>

                <div className="space-y-4">
                  {([
                    { key:"name"         as const, label:"Full Name",            placeholder:"Jane Doe",           icon:User,  type:"text"  },
                    { key:"email"        as const, label:"Email Address",        placeholder:"jane@example.com",  icon:Mail,  type:"email" },
                    { key:"phone"        as const, label:"Phone Number",         placeholder:"+91 98765 43210",   icon:Phone, type:"tel"   },
                    { key:"organization" as const, label:"Organization (optional)", placeholder:"Acme Corp",      icon:null,  type:"text"  },
                  ] as const).map(({ key, label, placeholder, icon: Icon, type }) => (
                    <div key={key}>
                      <label className="text-xs uppercase tracking-widest mb-1.5 block font-medium" style={{ color:"#6b7280" }}>{label}</label>
                      <div className="relative">
                        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400"/>}
                        <input type={type} placeholder={placeholder} value={userInfo[key]}
                          onChange={e => setUserInfo(p => ({ ...p, [key]:e.target.value }))}
                          className="w-full rounded-xl text-sm px-4 py-3 outline-none bg-white text-gray-900"
                          style={{ paddingLeft:Icon?"2.5rem":"1rem", border:infoErrors[key]?"1px solid #ef4444":"1px solid #e5e7eb" }}/>
                      </div>
                      {infoErrors[key] && <p className="text-xs mt-1 flex items-center gap-1 text-red-500"><AlertCircle className="w-3 h-3"/> {infoErrors[key]}</p>}
                    </div>
                  ))}
                  <div style={{ borderTop:"1px solid #e5e7eb", marginTop:"1rem", paddingTop:"1rem" }}/>
                  <button onClick={submitInfo} className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground border-0">
                    Generate My AIQ Report <ChevronRight className="w-4 h-4"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════ RESULT ════════ */}
        {phase==="result" && (
          <div className="space-y-6 max-w-2xl mx-auto">

            {/* Main score card */}
            <div className="rounded-2xl overflow-hidden" style={{ background:"#f9fafb", border:"1px solid #e5e7eb" }}>
              <div className="h-1.5" style={{ background:`linear-gradient(to right, ${aiqInfo.color}66, ${aiqInfo.color})` }}/>
              <div className="pt-8 pb-6 text-center px-6">
                <p className="text-sm uppercase tracking-widest font-medium mb-1" style={{ color:"#6b7280" }}>Your AIQ Score</p>
                <div className="text-7xl font-bold mb-1 font-mono" style={{ color:aiqInfo.color }}>{total}</div>
                <p className="text-sm mb-4" style={{ color:"#9ca3af" }}>out of 1200</p>
                <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold mb-6"
                  style={{ border:`1px solid ${aiqInfo.color}60`, background:aiqInfo.color+"15", color:aiqInfo.color }}>
                  {aiqInfo.label}
                </div>
                <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color:"#555555" }}>{getDescription(total)}</p>
              </div>
            </div>

            {/* Know / Hack / Build breakdown */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { score:knowScore,  label:"Know",  sub:"MCQ Knowledge",  max:200  },
                { score:hackScore,  label:"Hack",  sub:"AI Application", max:650  },
                { score:buildScore, label:"Build", sub:"AI Development", max:350  },
              ].map(item => (
                <div key={item.label} className="rounded-2xl text-center p-5" style={{ background:"#f9fafb", border:"1px solid #e5e7eb" }}>
                  <p className="text-3xl font-bold font-mono text-primary">{item.score}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest mt-1" style={{ color:"#374151" }}>{item.label}</p>
                  <p className="text-xs mt-0.5" style={{ color:"#6b7280" }}>{item.sub}</p>
                  <p className="text-xs" style={{ color:"#9ca3af" }}>out of {item.max}</p>
                </div>
              ))}
            </div>

            {/* Score range visual */}
            <div className="rounded-2xl p-6" style={{ background:"#f9fafb", border:"1px solid #e5e7eb" }}>
              <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color:"#6b7280" }}>Score Range</p>
              <div className="relative h-4 rounded-full overflow-hidden" style={{ background:"linear-gradient(to right,#ef4444,#f97316,#eab308,#22c55e,#6366f1)" }}>
                <div className="absolute top-0 h-full w-1 bg-white rounded-full shadow-lg"
                  style={{ left:`calc(${Math.min(((total-200)/1000)*100,99)}% - 2px)` }}/>
              </div>
              <div className="flex justify-between mt-2 text-xs" style={{ color:"#9ca3af" }}>
                <span>Very Low</span><span>Low</span><span>Medium</span><span>High</span><span>Very High</span>
              </div>
              <div className="flex justify-between mt-1 text-xs" style={{ color:"#d1d5db" }}>
                <span>200</span><span>400</span><span>600</span><span>800</span><span>1000</span><span>1200</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => downloadAIQPdf({
                  name:userInfo.name, email:userInfo.email, phone:userInfo.phone, organization:userInfo.organization,
                  knowScore, hackScore, buildScore, total,
                  aiqLabel:aiqInfo.label, aiqColor:aiqInfo.color,
                  description:getDescription(total),
                })}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground border-0">
                <Download className="w-4 h-4"/> Download Report
              </button>
              <button
                onClick={() => { setPhase("assessment"); setSubPhase("mcq"); setAnswers({}); setRatings({}); setCurrentQuestionIndex(0); setCurrentRatingIndex(0); setUserInfo({ name:"",email:"",phone:"",organization:"" }); scrollToCard(); }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 bg-white">
                Retake Assessment
              </button>
            </div>

            <p className="text-center text-xs" style={{ color:"#9ca3af" }}>
              For queries, reach us at <a href="mailto:info@digiculum.com" className="text-primary">info@digiculum.com</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}