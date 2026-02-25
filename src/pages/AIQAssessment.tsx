import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Brain, CheckCircle2, ChevronRight, ChevronLeft, Download, Mail, Phone, User, AlertCircle } from "lucide-react";
import { downloadAIQPdf } from "./generateAIQPdf";

// ─── Types ───────────────────────────────────────────────────────────────────

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

// ─── Data ────────────────────────────────────────────────────────────────────

const MRI_IMAGE = "/mnt/user-data/uploads/1771852490099_image.png";

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which of the following statement best describes AI?",
    options: [
      { label: "A", text: "AI is a tool" },
      { label: "B", text: "AI is a software" },
      { label: "C", text: "AI is an agent" },
      { label: "D", text: "AI is a technology" },
    ],
    correct: ["D"],
    multi: false,
  },
  {
    id: 2,
    text: "Which of the following are the ethical concerns associated with Generative AI?",
    options: [
      { label: "A", text: "Job displacement" },
      { label: "B", text: "Decreased device durability" },
      { label: "C", text: "Potential for creating misleading information" },
      { label: "D", text: "Over-reliance on cloud storage" },
    ],
    correct: ["C"],
    multi: false,
  },
  {
    id: 3,
    text: "I am a class teacher. I want to build an app which tells me which students are more likely to pass the exam. Which AI technology can provide me the most cost-effective solution?",
    options: [
      { label: "A", text: "Machine Learning" },
      { label: "B", text: "Deep Learning" },
      { label: "C", text: "Generative AI" },
      { label: "D", text: "Agentic AI" },
    ],
    correct: ["A"],
    multi: false,
  },
  {
    id: 4,
    text: "I am a class teacher. I build an app which tells me which students are more likely to pass the exam. After identifying the students, the app is programmed to send an email to their parents. It is a use case of:",
    options: [
      { label: "A", text: "AI Agent" },
      { label: "B", text: "Bot" },
      { label: "C", text: "Agentic AI" },
      { label: "D", text: "AI Copilot" },
    ],
    correct: ["B"],
    multi: false,
  },
  {
    id: 5,
    text: "I am a class teacher. I build an app which tells me which students are more likely to pass the exam. After identifying the students, the app auto-decides to send an email to their parents. It is a use case of:",
    options: [
      { label: "A", text: "AI Agent" },
      { label: "B", text: "Bot" },
      { label: "C", text: "Agentic AI" },
      { label: "D", text: "AI Copilot" },
    ],
    correct: ["C"],
    multi: false,
  },
  {
    id: 6,
    text: "What is the primary function of Generative AI?",
    options: [
      { label: "A", text: "To convert data" },
      { label: "B", text: "To categorize data" },
      { label: "C", text: "To collect data" },
      { label: "D", text: "To create data" },
    ],
    correct: ["D"],
    multi: false,
  },
  {
    id: 7,
    text: "Which of the following is an example of Generative AI?",
    options: [
      { label: "A", text: "Spam filters" },
      { label: "B", text: "Deep fakes" },
      { label: "C", text: "Data annotation algorithms" },
      { label: "D", text: "All of the above" },
    ],
    correct: ["B"],
    multi: false,
  },
  {
    id: 8,
    text: "What does GPT stand for?",
    options: [
      { label: "A", text: "Generative Pretrained Transformer" },
      { label: "B", text: "Generative Processing Transformer" },
      { label: "C", text: "Generative Predictive Transformer" },
      { label: "D", text: "Generative Performance Transformer" },
    ],
    correct: ["A"],
    multi: false,
  },
  {
    id: 9,
    text: "On which version of GPT was ChatGPT originally released?",
    options: [
      { label: "A", text: "GPT-3" },
      { label: "B", text: "GPT-3.5" },
      { label: "C", text: "GPT-4" },
      { label: "D", text: "GPT-4o" },
    ],
    correct: ["B"],
    multi: false,
  },
  {
    id: 10,
    text: "A hospital wants to build a system that detects tumors from MRI scans with high accuracy. The dataset contains thousands of medical images. Which AI technology is most appropriate?",
    image: MRI_IMAGE,
    options: [
      { label: "A", text: "Machine Learning" },
      { label: "B", text: "Deep Learning" },
      { label: "C", text: "Generative AI" },
      { label: "D", text: "Agentic AI" },
    ],
    correct: ["B"],
    multi: false,
  },
  {
    id: 11,
    text: "A bank wants to detect highly sophisticated fraud patterns hidden inside millions of transaction records. Which AI approach is most powerful for capturing complex nonlinear patterns?",
    options: [
      { label: "A", text: "Machine Learning" },
      { label: "B", text: "Deep Learning" },
      { label: "C", text: "Generative AI" },
      { label: "D", text: "Agentic AI" },
    ],
    correct: ["B"],
    multi: false,
  },
  {
    id: 12,
    text: "Which of the following statements are true?",
    options: [
      { label: "A", text: "IT impacts AI" },
      { label: "B", text: "AI impacts IT" },
      { label: "C", text: "AI is a digital transformation technology" },
      { label: "D", text: "AI is not a digital transformation technology" },
    ],
    correct: ["A", "B", "C"],
    multi: true,
  },
  {
    id: 13,
    text: "A consulting firm wants to automatically generate client reports based on raw data summaries. Which AI technology is most suitable?",
    options: [
      { label: "A", text: "Machine Learning" },
      { label: "B", text: "Deep Learning" },
      { label: "C", text: "Generative AI" },
      { label: "D", text: "Robotic Process Automation" },
    ],
    correct: ["C"],
    multi: false,
  },
  {
    id: 14,
    text: "Which of the AI technologies mandatorily need neural networks architecture?",
    options: [
      { label: "A", text: "Machine Learning" },
      { label: "B", text: "Generative AI" },
      { label: "C", text: "Deep Learning" },
      { label: "D", text: "Computer Vision" },
    ],
    correct: ["B", "C"],
    multi: true,
  },
  {
    id: 15,
    text: "Which of the following GPT versions are instruction tuned?",
    options: [
      { label: "A", text: "GPT-3" },
      { label: "B", text: "GPT-3.5" },
      { label: "C", text: "GPT-4" },
      { label: "D", text: "GPT-4o" },
    ],
    correct: ["B", "C", "D"],
    multi: true,
  },
  {
    id: 16,
    text: "What is fine-tuning?",
    options: [
      { label: "A", text: "Adjusting the power settings of the hardware" },
      { label: "B", text: "Modifying the physical components of the AI system" },
      { label: "C", text: "Making small adjustments to the model based on additional data" },
      { label: "D", text: "Teaching the AI to perform physical tasks" },
    ],
    correct: ["C"],
    multi: false,
  },
  {
    id: 17,
    text: "Which of the following statements are true?",
    options: [
      { label: "A", text: "ChatGPT is an LLM" },
      { label: "B", text: "ChatGPT is not an LLM" },
      { label: "C", text: "When you infuse AI in an existing product, it becomes an AI copilot" },
      { label: "D", text: "AI copilot is a completely new product" },
    ],
    correct: ["B", "C"],
    multi: true,
  },
  {
    id: 18,
    text: "An AI system: searches flights, compares prices, books tickets, sends confirmations, and updates calendar based on pre-coded tasks. Which AI type best describes this system?",
    options: [
      { label: "A", text: "Generative AI" },
      { label: "B", text: "Agentic AI" },
      { label: "C", text: "Machine Learning" },
      { label: "D", text: "Automation" },
    ],
    correct: ["D"],
    multi: false,
  },
  {
    id: 19,
    text: "An AI system: searches flights, compares prices, books tickets, sends confirmations, and updates calendar based on text prompt and no code. Which AI type best describes this system?",
    options: [
      { label: "A", text: "Generative AI" },
      { label: "B", text: "Agentic AI" },
      { label: "C", text: "Machine Learning" },
      { label: "D", text: "Automation" },
    ],
    correct: ["B"],
    multi: false,
  },
  {
    id: 20,
    text: "A fashion brand wants AI to generate new clothing design concepts based on prompts. Which AI approach fits best?",
    options: [
      { label: "A", text: "Deep Learning classification" },
      { label: "B", text: "Generative AI" },
      { label: "C", text: "Basic Machine Learning" },
      { label: "D", text: "Agentic AI" },
    ],
    correct: ["B"],
    multi: false,
  },
];

const RATING_STATEMENTS: RatingStatement[] = [
  { id: 1, text: "I can effectively write structured prompts that consistently generate high-quality outputs from AI tools (e.g., reports, summaries, analysis)" },
  { id: 2, text: "I have automated any recurring task using AI tools (e.g., email drafting, meeting summaries, report generation)" },
  { id: 3, text: "I have actively used more than 2 AI tools in combination (e.g., Flow + ChatGPT + Google Workspace)" },
  { id: 4, text: "I can break down a manual process into steps and identify where AI can intervene" },
  { id: 5, text: "I use AI to analyze spreadsheets, documents, or dashboards to extract insights" },
  { id: 6, text: "I use AI to simulate scenarios or compare strategic options before making a decision" },
  { id: 7, text: "I configure or customize an AI assistant or custom GPT (ChatGPT) for a specific task" },
  { id: 8, text: "I have connected AI tools with my other apps (calendar, emails, website etc.)" },
  { id: 9, text: "When faced with a new problem, I often think how can AI help solve this" },
  { id: 10, text: "I use AI to accelerate my own learning" },
  { id: 11, text: "I can quantify the time or cost savings created by my AI usage" },
  { id: 12, text: "I manually validate or review the AI output before using it in my daily tasks" },
  { id: 13, text: "I often experiment with new AI tools" },
  { id: 14, text: "I can identify a real-world business problem and determine whether AI is an appropriate solution" },
  { id: 15, text: "I have designed a structured AI use case document" },
  { id: 16, text: "I can assess whether available data is sufficient and suitable for building an AI solution" },
  { id: 17, text: "I can design a high-level AI solution" },
  { id: 18, text: "I can select AI tools or Large Language Models based on requirements" },
  { id: 19, text: "I can build a functional AI-powered workflow or application using no-code / low-code tools" },
  { id: 20, text: "I can define KPIs and track performance metrics for AI systems after deployment" },
];

// ─── Scoring helpers ──────────────────────────────────────────────────────────

function scoreQuestion(question: Question, selected: string[]): boolean {
  const sorted = [...selected].sort().join(",");
  const correct = [...question.correct].sort().join(",");
  return sorted === correct;
}

function getAIQLabel(total: number) {
  if (total <= 50) return { label: "Very Low AIQ", color: "#ef4444", emoji: "🔴" };
  if (total <= 100) return { label: "Low AIQ", color: "#f97316", emoji: "🟠" };
  if (total <= 150) return { label: "Medium AIQ", color: "#eab308", emoji: "🟡" };
  if (total <= 200) return { label: "High AIQ", color: "#22c55e", emoji: "🟢" };
  return { label: "Very High AIQ", color: "#6366f1", emoji: "🟣" };
}

function getDescription(total: number) {
  if (total <= 50)
    return "You're just beginning your AI journey. There's tremendous opportunity ahead — start exploring AI fundamentals and beginner-friendly tools to build your foundation.";
  if (total <= 100)
    return "You have a basic awareness of AI concepts. Consider deepening your understanding through structured learning and hands-on experimentation with AI tools.";
  if (total <= 150)
    return "You have a solid grasp of AI concepts and some practical experience. Keep building on this foundation by applying AI in real-world workflows and projects.";
  if (total <= 200)
    return "You demonstrate strong AI literacy and practical capabilities. You're ready to lead AI initiatives and mentor others in your organization.";
  return "You are an AI power user with exceptional knowledge and application skills. You are among the top tier of AI practitioners — consider sharing your expertise and pioneering new AI solutions.";
}

// ─── Sub-phases ───────────────────────────────────────────────────────────────

type Phase = "assessment" | "info" | "result";
type AssessmentSubPhase = "mcq" | "rating";

// ─── Component ────────────────────────────────────────────────────────────────

export default function AIQAssessment() {
  const [phase, setPhase] = useState<Phase>("assessment");
  const [subPhase, setSubPhase] = useState<AssessmentSubPhase>("mcq");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentRatingIndex, setCurrentRatingIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", email: "", phone: "", organization: "" });
  const [infoErrors, setInfoErrors] = useState<Partial<UserInfo>>({});
  const [mcqScore, setMcqScore] = useState(0);
  const [ratingScore, setRatingScore] = useState(0);
  const [unansweredWarning, setUnansweredWarning] = useState(false);
  const [ratingWarning, setRatingWarning] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const currentRatingStatement = RATING_STATEMENTS[currentRatingIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;
  const isFirstRating = currentRatingIndex === 0;
  const isLastRating = currentRatingIndex === RATING_STATEMENTS.length - 1;
  const answeredCount = Object.keys(answers).length;

  function scrollToCard() {
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ── Quiz handlers ───────────────────────────────────────────────────────────

  function toggleAnswer(qId: number, label: string, multi: boolean) {
    setUnansweredWarning(false);
    setAnswers((prev) => {
      const cur = prev[qId] ?? [];
      if (multi) {
        return { ...prev, [qId]: cur.includes(label) ? cur.filter((l) => l !== label) : [...cur, label] };
      }
      return { ...prev, [qId]: [label] };
    });
  }

  function goToNext() {
    if (!answers[currentQuestion.id]?.length) {
      setUnansweredWarning(true);
      return;
    }
    setUnansweredWarning(false);
    setCurrentQuestionIndex((i) => i + 1);
    scrollToCard();
  }

  function goToPrev() {
    setUnansweredWarning(false);
    setCurrentQuestionIndex((i) => i - 1);
    scrollToCard();
  }

  function submitQuiz() {
    if (!answers[currentQuestion.id]?.length) {
      setUnansweredWarning(true);
      return;
    }
    setUnansweredWarning(false);
    let correct = 0;
    for (const q of QUESTIONS) {
      if (scoreQuestion(q, answers[q.id] ?? [])) correct++;
    }
    setMcqScore(correct * 10);
    setSubPhase("rating");
    setCurrentRatingIndex(0);
    scrollToCard();
  }

  // ── Rating handlers ─────────────────────────────────────────────────────────

  function goToNextRating() {
    if (!ratings[currentRatingStatement.id]) {
      setRatingWarning(true);
      return;
    }
    setRatingWarning(false);
    setCurrentRatingIndex((i) => i + 1);
    scrollToCard();
  }

  function goToPrevRating() {
    setRatingWarning(false);
    setCurrentRatingIndex((i) => i - 1);
    scrollToCard();
  }

  function submitRating() {
    if (!ratings[currentRatingStatement.id]) {
      setRatingWarning(true);
      return;
    }
    setRatingWarning(false);
    const sum = Object.values(ratings).reduce((a, b) => a + b, 0);
    setRatingScore(sum);
    setPhase("info");
    scrollToCard();
  }

  // ── Info handlers ───────────────────────────────────────────────────────────

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

  const total = mcqScore + ratingScore;
  const aiqInfo = getAIQLabel(total);

  // ── Step indicator ──────────────────────────────────────────────────────────
  const steps = [
    { key: "assessment", label: "Assessment" },
    { key: "info", label: "Your Info" },
    { key: "result", label: "Report" },
  ];

  function getStepState(stepKey: string) {
    const order = ["assessment", "info", "result"];
    const current = order.indexOf(phase);
    const step = order.indexOf(stepKey);
    if (step === current) return "active";
    if (step < current) return "done";
    return "inactive";
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#ffffff", color: "#111111", fontFamily: "inherit" }}
    >
      {/* ── Hero ── */}
      <section className="pt-32 pb-12 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-primary text-primary-foreground">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-semibold">Artificial Intelligence Quotient</span>
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#111111" }}>AIQ Assessment</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#555555" }}>
            Measure your AI knowledge and application skills across 40 questions. Get a personalised AIQ report.
          </p>

          {/* Progress Stepper */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {steps.map((step, i) => {
              const state = getStepState(step.key);
              return (
                <div key={step.key} className="flex items-center gap-2">
                  <div
                    className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      state === "active"
                        ? "bg-primary text-primary-foreground"
                        : state === "done"
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "bg-gray-100 text-gray-400 border border-gray-200"
                    }`}
                  >
                    {state === "done" ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <span>{i + 1}</span>
                    )}
                    {step.label}
                  </div>
                  {i < steps.length - 1 && <ChevronRight className="w-3 h-3" style={{ color: "#d1d5db" }} />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div ref={cardRef} className="container mx-auto max-w-4xl px-6 pb-24">

        {/* ════════════════ PHASE: ASSESSMENT — MCQ ════════════════ */}
        {phase === "assessment" && subPhase === "mcq" && (
          <div className="space-y-6">
            {/* Progress bar */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm whitespace-nowrap" style={{ color: "#555555" }}>
                Knowledge Q{currentQuestionIndex + 1} of {QUESTIONS.length}
              </span>
              <div className="flex-1 rounded-full h-1.5 overflow-hidden bg-gray-100">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
              <span className="text-sm whitespace-nowrap" style={{ color: "#555555" }}>
                {answeredCount} answered
              </span>
            </div>

            {/* Question dot navigation */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {QUESTIONS.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setUnansweredWarning(false);
                    setCurrentQuestionIndex(idx);
                    scrollToCard();
                  }}
                  title={`Question ${idx + 1}`}
                  className={`w-7 h-7 rounded-full text-xs font-semibold transition-all ${
                    idx === currentQuestionIndex
                      ? "bg-primary text-primary-foreground border-0"
                      : answers[q.id]?.length
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "bg-gray-100 text-gray-500 border border-gray-200"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            {/* Single Question Card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
            >
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
                      <div className="mb-4 rounded-lg overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
                        <img
                          src={currentQuestion.image}
                          alt="MRI brain scan"
                          className="w-full max-h-56 object-cover"
                        />
                      </div>
                    )}
                    <p className="text-base font-medium leading-relaxed" style={{ color: "#111111" }}>
                      {currentQuestion.text}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5 ml-10">
                  {currentQuestion.options.map((opt) => {
                    const selected = answers[currentQuestion.id]?.includes(opt.label);
                    return (
                      <button
                        key={opt.label}
                        onClick={() => toggleAnswer(currentQuestion.id, opt.label, currentQuestion.multi)}
                        className={`flex items-center gap-3 text-left px-4 py-3 rounded-xl transition-all text-sm ${
                          selected
                            ? "bg-primary/10 border-2 border-primary"
                            : "bg-white border border-gray-200"
                        }`}
                        style={{ color: "#374151" }}
                      >
                        <span
                          className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 ${
                            selected ? "bg-primary text-primary-foreground" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {opt.label}
                        </span>
                        {opt.text}
                      </button>
                    );
                  })}
                </div>

                {unansweredWarning && (
                  <p className="mt-3 text-xs flex items-center gap-1.5 ml-10" style={{ color: "#f59e0b" }}>
                    <AlertCircle className="w-3.5 h-3.5" />
                    Please select an answer before proceeding.
                  </p>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={goToPrev}
                disabled={isFirstQuestion}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all border border-gray-200 text-gray-600 bg-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {isLastQuestion ? (
                <button
                  onClick={submitQuiz}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all bg-primary text-primary-foreground border-0"
                >
                  Next: Application
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={goToNext}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all bg-primary text-primary-foreground border-0"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ════════════════ PHASE: ASSESSMENT — RATING (one per page) ════════════════ */}
        {phase === "assessment" && subPhase === "rating" && (
          <div className="space-y-6">
            {/* Info banner */}
            <div className="rounded-xl p-4 text-sm bg-primary/10 border border-primary/30 text-primary">
              Rate each statement from <strong>1 to 5</strong> based on how often it applies to you.&nbsp;
              <span className="opacity-80">
                (1 = Never &nbsp;|&nbsp; 2 = Rarely &nbsp;|&nbsp; 3 = Sometimes &nbsp;|&nbsp; 4 = Frequently &nbsp;|&nbsp; 5 = Systematically)
              </span>
            </div>

            {/* Progress bar */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm whitespace-nowrap" style={{ color: "#555555" }}>
                Application Q{currentRatingIndex + 1} of {RATING_STATEMENTS.length}
              </span>
              <div className="flex-1 rounded-full h-1.5 overflow-hidden bg-gray-100">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentRatingIndex + 1) / RATING_STATEMENTS.length) * 100}%` }}
                />
              </div>
              <span className="text-sm whitespace-nowrap" style={{ color: "#555555" }}>
                {Object.keys(ratings).length} answered
              </span>
            </div>

            {/* Rating dot navigation */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {RATING_STATEMENTS.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setRatingWarning(false);
                    setCurrentRatingIndex(idx);
                    scrollToCard();
                  }}
                  title={`Statement ${idx + 1}`}
                  className={`w-7 h-7 rounded-full text-xs font-semibold transition-all ${
                    idx === currentRatingIndex
                      ? "bg-primary text-primary-foreground border-0"
                      : ratings[s.id]
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "bg-gray-100 text-gray-500 border border-gray-200"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            {/* Single Rating Card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
            >
              <div className="p-6">
                <div className="flex items-start gap-3 mb-6">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 mt-0.5 bg-primary/10 text-primary">
                    {currentRatingIndex + 1}
                  </span>
                  <p className="text-base font-medium leading-relaxed" style={{ color: "#111111" }}>
                    {currentRatingStatement.text}
                  </p>
                </div>

                <div className="flex gap-3 ml-10 flex-wrap">
                  {[1, 2, 3, 4, 5].map((val) => {
                    const labels = ["Never", "Rarely", "Sometimes", "Frequently", "Systematically"];
                    const selected = ratings[currentRatingStatement.id] === val;
                    return (
                      <button
                        key={val}
                        onClick={() => {
                          setRatingWarning(false);
                          setRatings((prev) => ({ ...prev, [currentRatingStatement.id]: val }));
                        }}
                        className={`flex flex-col items-center gap-1 px-5 py-3 rounded-xl text-xs font-semibold transition-all min-w-[80px] ${
                          selected
                            ? "bg-primary text-primary-foreground border-0"
                            : "bg-white border border-gray-200 text-gray-600"
                        }`}
                      >
                        <span className="text-xl font-bold">{val}</span>
                        <span className="font-normal opacity-80">{labels[val - 1]}</span>
                      </button>
                    );
                  })}
                </div>

                {ratingWarning && (
                  <p className="mt-3 text-xs flex items-center gap-1.5 ml-10" style={{ color: "#f59e0b" }}>
                    <AlertCircle className="w-3.5 h-3.5" />
                    Please select a rating before proceeding.
                  </p>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => {
                  if (isFirstRating) {
                    setSubPhase("mcq");
                    setCurrentQuestionIndex(QUESTIONS.length - 1);
                    scrollToCard();
                  } else {
                    goToPrevRating();
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all border border-gray-200 text-gray-600 bg-white"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {isLastRating ? (
                <button
                  onClick={submitRating}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all bg-primary text-primary-foreground border-0"
                >
                  Next: Your Info
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={goToNextRating}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all bg-primary text-primary-foreground border-0"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ════════════════ PHASE: INFO ════════════════ */}
        {phase === "info" && (
          <div className="max-w-xl mx-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
            >
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 bg-primary/10 border border-primary/30">
                    <Brain className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: "#111111" }}>Almost done!</h2>
                  <p className="text-sm mt-1" style={{ color: "#555555" }}>
                    Enter your details to generate your personalised AIQ Report.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { key: "name" as const, label: "Full Name", placeholder: "Jane Doe", icon: User, type: "text" },
                    { key: "email" as const, label: "Email Address", placeholder: "jane@example.com", icon: Mail, type: "email" },
                    { key: "phone" as const, label: "Phone Number", placeholder: "+91 98765 43210", icon: Phone, type: "tel" },
                    { key: "organization" as const, label: "Organization (optional)", placeholder: "Acme Corp", icon: null, type: "text" },
                  ].map(({ key, label, placeholder, icon: Icon, type }) => (
                    <div key={key}>
                      <label className="text-xs uppercase tracking-widest mb-1.5 block font-medium" style={{ color: "#6b7280" }}>
                        {label}
                      </label>
                      <div className="relative">
                        {Icon && (
                          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
                        )}
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={userInfo[key]}
                          onChange={(e) => setUserInfo((p) => ({ ...p, [key]: e.target.value }))}
                          className="w-full rounded-xl text-sm px-4 py-3 outline-none transition-all bg-white text-gray-900"
                          style={{
                            paddingLeft: Icon ? "2.5rem" : "1rem",
                            border: infoErrors[key] ? "1px solid #ef4444" : "1px solid #e5e7eb",
                          }}
                        />
                      </div>
                      {infoErrors[key] && (
                        <p className="text-xs mt-1 flex items-center gap-1 text-red-500">
                          <AlertCircle className="w-3 h-3" /> {infoErrors[key]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div style={{ borderTop: "1px solid #e5e7eb", marginTop: "1rem", paddingTop: "1rem" }} />

                  <button
                    onClick={submitInfo}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all bg-primary text-primary-foreground border-0"
                  >
                    Generate My AIQ Report
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════ PHASE: RESULT ════════════════ */}
        {phase === "result" && (
          <div className="space-y-6 max-w-2xl mx-auto">
            {/* Main Score Card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
            >
              <div
                className="h-1.5"
                style={{ background: `linear-gradient(to right, ${aiqInfo.color}66, ${aiqInfo.color})` }}
              />
              <div className="pt-8 pb-6 text-center px-6">
                <p className="text-sm uppercase tracking-widest font-medium mb-1" style={{ color: "#6b7280" }}>Your AIQ Score</p>
                <div className="text-7xl font-bold mb-1 font-mono" style={{ color: aiqInfo.color }}>
                  {total}
                </div>
                <p className="text-sm mb-4" style={{ color: "#9ca3af" }}>out of 300</p>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold mb-6"
                  style={{ border: `1px solid ${aiqInfo.color}60`, background: aiqInfo.color + "15", color: aiqInfo.color }}
                >
                  <span>{aiqInfo.emoji}</span> {aiqInfo.label}
                </div>
                <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color: "#555555" }}>
                  {getDescription(total)}
                </p>
              </div>
            </div>

            {/* Score Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { score: mcqScore, label: "Knowledge Score", max: "out of 200" },
                { score: ratingScore, label: "Application Score", max: "out of 100" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl text-center p-6"
                  style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
                >
                  <p className="text-3xl font-bold font-mono text-primary">{item.score}</p>
                  <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "#6b7280" }}>{item.label}</p>
                  <p className="text-xs" style={{ color: "#9ca3af" }}>{item.max}</p>
                </div>
              ))}
            </div>

            {/* Score Range Visual */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
            >
              <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: "#6b7280" }}>Score Range</p>
              <div className="relative h-4 rounded-full overflow-hidden" style={{ background: "linear-gradient(to right, #ef4444, #f97316, #eab308, #22c55e, #6366f1)" }}>
                <div
                  className="absolute top-0 h-full w-1 bg-white rounded-full shadow-lg"
                  style={{ left: `calc(${Math.min((total / 300) * 100, 99)}% - 2px)` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs" style={{ color: "#9ca3af" }}>
                <span>Very Low</span><span>Low</span><span>Medium</span><span>High</span><span>Very High</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() =>
                  downloadAIQPdf({
                    name: userInfo.name,
                    email: userInfo.email,
                    phone: userInfo.phone,
                    organization: userInfo.organization,
                    mcqScore,
                    ratingScore,
                    total,
                    aiqLabel: aiqInfo.label,
                    aiqColor: aiqInfo.color,
                    description: getDescription(total),
                  })
                }
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all bg-primary text-primary-foreground border-0"
              >
                <Download className="w-4 h-4" />
                Download Report
              </button>
              <button
                onClick={() => {
                  setPhase("assessment");
                  setSubPhase("mcq");
                  setAnswers({});
                  setRatings({});
                  setCurrentQuestionIndex(0);
                  setCurrentRatingIndex(0);
                  setUserInfo({ name: "", email: "", phone: "", organization: "" });
                  scrollToCard();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all border border-gray-200 text-gray-600 bg-white"
              >
                Retake Assessment
              </button>
            </div>

            <p className="text-center text-xs" style={{ color: "#9ca3af" }}>
              For queries, reach us at{" "}
              <a href="mailto:info@digiculum.com" className="text-primary">
                info@digiculum.com
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}