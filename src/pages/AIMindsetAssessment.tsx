import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Lightbulb, CheckCircle2, ChevronRight, Download,
  Mail, Phone, User, AlertCircle, Brain, Shield, Zap
} from "lucide-react";
import { downloadMindsetPdf } from "./generateMindsetPdf";

// ─── Types ────────────────────────────────────────────────────────────────────

type Mindset = "Optimistic" | "Pragmatic" | "Skeptic";

interface ScenarioOption {
  label: "a" | "b" | "c";
  text: string;
  mindset: Mindset;
}

interface Scenario {
  id: number;
  title: string;
  context: string;
  options: ScenarioOption[];
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  organization: string;
}

// ─── Legend mapping ───────────────────────────────────────────────────────────

const LEGEND: Record<number, Record<"a" | "b" | "c", Mindset>> = {
  1:  { a: "Skeptic",    b: "Pragmatic",  c: "Optimistic" },
  2:  { a: "Optimistic", b: "Pragmatic",  c: "Skeptic"    },
  3:  { a: "Skeptic",    b: "Optimistic", c: "Pragmatic"  },
  4:  { a: "Skeptic",    b: "Optimistic", c: "Pragmatic"  },
  5:  { a: "Optimistic", b: "Pragmatic",  c: "Skeptic"    },
  6:  { a: "Optimistic", b: "Pragmatic",  c: "Skeptic"    },
  7:  { a: "Skeptic",    b: "Pragmatic",  c: "Optimistic" },
  8:  { a: "Skeptic",    b: "Optimistic", c: "Pragmatic"  },
  9:  { a: "Pragmatic",  b: "Skeptic",    c: "Optimistic" },
  10: { a: "Skeptic",    b: "Optimistic", c: "Pragmatic"  },
  11: { a: "Optimistic", b: "Pragmatic",  c: "Skeptic"    },
  12: { a: "Pragmatic",  b: "Skeptic",    c: "Optimistic" },
  13: { a: "Optimistic", b: "Pragmatic",  c: "Skeptic"    },
  14: { a: "Optimistic", b: "Pragmatic",  c: "Skeptic"    },
  15: { a: "Pragmatic",  b: "Skeptic",    c: "Optimistic" },
  16: { a: "Optimistic", b: "Skeptic",    c: "Pragmatic"  },
};

// ─── Scenarios ────────────────────────────────────────────────────────────────

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "Evaluating a GenAI Coding Tool",
    context: "As a software developer, your manager has tasked you with evaluating a new GenAI tool from an unrecognised startup vendor that promises to revolutionize code generation. You would:",
    options: [
      { label: "a", mindset: "Skeptic",    text: "Do due diligence and a product demo, but be reluctant to run the trial or recommend it due to the vendor's unpopularity and fear of job losses." },
      { label: "b", mindset: "Pragmatic",  text: "Do due diligence, schedule a demo, run the trial, and evaluate other vendor tools before recommending the final tool — ensuring informed, comparative decision-making." },
      { label: "c", mindset: "Optimistic", text: "Do due diligence, schedule a demo, run the trial, and recommend the tool quickly so your company achieves benefits like improved efficiency and cost reductions sooner." },
    ],
  },
  {
    id: 2,
    title: "Onboarding a New Graduate",
    context: "As the owner of a private equity firm, you have a new graduate joining during a heavy workload period. Personalised financial reports are due soon. You would:",
    options: [
      { label: "a", mindset: "Optimistic", text: "Ask the new graduate to use a GenAI tool to expedite report preparations, trusting AI's capabilities to deliver accurate and timely results." },
      { label: "b", mindset: "Pragmatic",  text: "Have a senior employee train the graduate manually first, even if it impacts timelines, then introduce GenAI once proficiency is confirmed." },
      { label: "c", mindset: "Skeptic",    text: "Not ask the new graduate to use GenAI at all, believing it might be detrimental to their professional growth and development." },
    ],
  },
  {
    id: 3,
    title: "Summarising an Annual Report",
    context: "You're tasked with summarising your company's annual report for an investor presentation. A colleague suggests using GenAI. You would:",
    options: [
      { label: "a", mindset: "Skeptic",    text: "Never use GenAI to summarise due to fear of misuse of sensitive financial information, preferring to rely on human judgment." },
      { label: "b", mindset: "Optimistic", text: "Use a GenAI tool since the annual report information is publicly available — a practical and efficient approach." },
      { label: "c", mindset: "Pragmatic",  text: "Evaluate the GenAI tool first for its data protection and safety measures before using it to summarise the annual report." },
    ],
  },
  {
    id: 4,
    title: "Using GenAI at a Publishing Company",
    context: "You've joined a publishing company where GenAI is widely used. Your manager expects you to use it to boost productivity. You would:",
    options: [
      { label: "a", mindset: "Skeptic",    text: "Use the tool unwillingly, cautious about over-reliance on AI and its potential impact on your personal learning and development." },
      { label: "b", mindset: "Optimistic", text: "Use the tool willingly to fit into the team culture and ways of working, embracing new technologies that align with company objectives." },
      { label: "c", mindset: "Pragmatic",  text: "Schedule a meeting with your manager to express your concerns and seek clarification before deciding to use the tool." },
    ],
  },
  {
    id: 5,
    title: "AI Assistants Handling Mundane Tasks",
    context: "Envision a future where AI assistants seamlessly manage routine tasks, freeing people for more creative pursuits. How appealing does this prospect sound to you?",
    options: [
      { label: "a", mindset: "Optimistic", text: "Highly appealing — AI handling routine tasks promises increased efficiency and liberation, enabling focus on meaningful endeavors." },
      { label: "b", mindset: "Pragmatic",  text: "Moderately appealing — intrigued by the concept but maintaining reservations about potential implications and adjustments required." },
      { label: "c", mindset: "Skeptic",    text: "Not appealing at all — you value human involvement and autonomy in daily activities, preferring traditional methods of task management." },
    ],
  },
  {
    id: 6,
    title: "AI Tackling Societal Challenges",
    context: "As a policymaker facing complex challenges like homelessness, traffic congestion, and environmental degradation, you believe:",
    options: [
      { label: "a", mindset: "Optimistic", text: "GenAI has vast potential to tackle intricate societal issues, offering innovative solutions that were previously unimaginable." },
      { label: "b", mindset: "Pragmatic",  text: "While GenAI holds promise, its efficacy may be constrained by limitations and dependencies, resulting in only partial alleviation of challenges." },
      { label: "c", mindset: "Skeptic",    text: "GenAI advancements could inadvertently worsen societal issues, possibly exacerbating pre-existing problems rather than solving them." },
    ],
  },
  {
    id: 7,
    title: "AI's Impact on Job Creation",
    context: "As a business owner incorporating GenAI into operations, you contemplate its impact on employment. You believe:",
    options: [
      { label: "a", mindset: "Skeptic",    text: "GenAI will lead to a decrease in job opportunities, potentially resulting in workforce displacement and job loss across the industry." },
      { label: "b", mindset: "Pragmatic",  text: "GenAI adoption will have no significant impact on job opportunities, with the workforce structure remaining relatively stable." },
      { label: "c", mindset: "Optimistic", text: "GenAI integration will lead to a significant increase in job opportunities, creating new roles and avenues for employment." },
    ],
  },
  {
    id: 8,
    title: "Ethics in GenAI Development",
    context: "As a researcher developing cutting-edge GenAI technologies, ethical considerations are debated within your team. You believe:",
    options: [
      { label: "a", mindset: "Skeptic",    text: "Ethical guidelines should form the cornerstone of GenAI development, ensuring advancements align with moral principles and societal values." },
      { label: "b", mindset: "Optimistic", text: "Ethical issues surrounding GenAI are exaggerated and should not impede the pace of innovation — prioritise technological advancement." },
      { label: "c", mindset: "Pragmatic",  text: "A middle ground is needed — progress should not be unduly hindered by overly stringent ethical considerations, but ethics still matter." },
    ],
  },
  {
    id: 9,
    title: "Bias in AI Algorithms",
    context: "As a data scientist developing GenAI algorithms for finance, healthcare, and advertising, you're aware of potential biases. You believe:",
    options: [
      { label: "a", mindset: "Pragmatic",  text: "Some bias may be unavoidable; proper oversight and continuous mitigation through robust testing and transparency are key." },
      { label: "b", mindset: "Skeptic",    text: "Addressing biases is critically important to ensure fairness and equity, requiring rigorous measures at every stage of development." },
      { label: "c", mindset: "Optimistic", text: "Concerns about AI biases are exaggerated — algorithms are inherently neutral and observed biases are likely misinterpretations." },
    ],
  },
  {
    id: 10,
    title: "AI and Human Autonomy",
    context: "As a technology enthusiast observing increasing AI reliance in daily life, you feel:",
    options: [
      { label: "a", mindset: "Skeptic",    text: "AI systems could erode human autonomy over time, leading to dependency and control issues as people relinquish decision-making." },
      { label: "b", mindset: "Optimistic", text: "AI's impact on human autonomy is minimal — it's just another tool that enhances human capabilities rather than diminishing autonomy." },
      { label: "c", mindset: "Pragmatic",  text: "Human autonomy might be affected in certain contexts, but this can be managed through careful design and regulation of AI systems." },
    ],
  },
  {
    id: 11,
    title: "AI in Healthcare",
    context: "As a medical professional navigating AI's growing role in healthcare, you feel:",
    options: [
      { label: "a", mindset: "Optimistic", text: "AI will revolutionize healthcare, improving diagnosis and treatment through more accurate diagnoses and personalized treatment options." },
      { label: "b", mindset: "Pragmatic",  text: "AI might offer some improvements, but human expertise remains crucial — a balance between AI insights and clinical judgment is essential." },
      { label: "c", mindset: "Skeptic",    text: "AI could introduce risks and uncertainties to healthcare, requiring careful safeguards to protect patient safety and privacy." },
    ],
  },
  {
    id: 12,
    title: "AI Advancing Scientific Research",
    context: "As a scientist in a research laboratory, how likely do you think it is that AI will lead to significant advancements in scientific research?",
    options: [
      { label: "a", mindset: "Pragmatic",  text: "Somewhat likely, but traditional methods will still be essential — AI enhances efficiency, but human ingenuity remains vital." },
      { label: "b", mindset: "Skeptic",    text: "Unlikely — AI might hinder scientific progress by stifling creativity and impeding critical thinking." },
      { label: "c", mindset: "Optimistic", text: "Very likely — AI can accelerate scientific discoveries, unlocking new insights previously unattainable through traditional methods alone." },
    ],
  },
  {
    id: 13,
    title: "AI Personalising Education",
    context: "As an educator in an evolving educational landscape, you feel:",
    options: [
      { label: "a", mindset: "Optimistic", text: "AI can personalize learning experiences and improve educational outcomes by providing adaptive feedback and tailored pathways for diverse student needs." },
      { label: "b", mindset: "Pragmatic",  text: "AI might provide some tools for educators but won't fundamentally change education — its impact will be incremental rather than transformative." },
      { label: "c", mindset: "Skeptic",    text: "AI's impact on education will be insignificant compared to teaching quality, curriculum design, and student engagement." },
    ],
  },
  {
    id: 14,
    title: "AI Augmenting Workplace Capabilities",
    context: "As a mid-level manager evaluating AI integration, what is your opinion on AI's potential to augment human capabilities in the workplace?",
    options: [
      { label: "a", mindset: "Optimistic", text: "AI can enhance productivity and efficiency across industries by automating routine tasks and empowering employees to focus on higher-value work." },
      { label: "b", mindset: "Pragmatic",  text: "AI might offer improvements, but human oversight is crucial to ensure ethical use and mitigate risks of over-reliance on automation." },
      { label: "c", mindset: "Skeptic",    text: "AI could lead to widespread job displacement and economic instability, particularly for workers in vulnerable sectors." },
    ],
  },
  {
    id: 15,
    title: "AI Security Vulnerabilities",
    context: "As a cybersecurity analyst working with AI systems, you feel:",
    options: [
      { label: "a", mindset: "Pragmatic",  text: "Some misuse is possible, but robust technological safeguards can effectively mitigate risks, minimizing impact on system integrity." },
      { label: "b", mindset: "Skeptic",    text: "AI systems are vulnerable to manipulation and misuse, posing serious threats to data integrity, privacy, and security." },
      { label: "c", mindset: "Optimistic", text: "AI systems are inherently secure and resistant to manipulation, with stringent built-in safeguards ensuring reliability." },
    ],
  },
  {
    id: 16,
    title: "Investing in GenAI Learning",
    context: "As the CEO of a technology company, you're deciding whether to invest in GenAI learning initiatives. You would:",
    options: [
      { label: "a", mindset: "Optimistic", text: "Invest in GenAI learning to empower employees with cutting-edge skills, enhance productivity, and position the company as a leader in AI innovation." },
      { label: "b", mindset: "Skeptic",    text: "Be cautious about investing, with concerns about the maturity of GenAI solutions and their alignment with strategic goals." },
      { label: "c", mindset: "Pragmatic",  text: "Base your decision on market conditions, budget constraints, and organizational readiness — conduct further research before committing." },
    ],
  },
];

// ─── Mindset config ───────────────────────────────────────────────────────────

const MINDSET_CONFIG: Record<Mindset, {
  color: string; bg: string; border: string;
  icon: typeof Zap; description: string; traits: string[];
}> = {
  Optimistic: {
    color: "#22c55e", bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.3)",
    icon: Zap,
    description: "You see AI as a transformative force for good. You embrace innovation enthusiastically, believing AI will create more opportunities than it displaces, and you're eager to lead adoption efforts.",
    traits: ["Early adopter mindset", "Believes AI creates opportunity", "Embraces change proactively", "Sees potential over risk"],
  },
  Pragmatic: {
    color: "#6366f1", bg: "rgba(99,102,241,0.1)", border: "rgba(99,102,241,0.3)",
    icon: Brain,
    description: "You take a balanced, evidence-based approach to AI. You recognise both its potential and limitations, advocating for careful evaluation, human oversight, and measured implementation.",
    traits: ["Evidence-based decision maker", "Values human oversight", "Balanced risk assessment", "Measured implementation advocate"],
  },
  Skeptic: {
    color: "#f97316", bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.3)",
    icon: Shield,
    description: "You approach AI with healthy caution, prioritising ethical considerations, job security, and human autonomy. Your scrutiny ensures risks are addressed before adoption — a valuable perspective in any team.",
    traits: ["Risk-aware thinker", "Prioritises ethics & safety", "Champions human autonomy", "Questions before adopting"],
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

type Phase = "quiz" | "info" | "result";

export default function AIMindsetAssessment() {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [answers, setAnswers] = useState<Record<number, "a" | "b" | "c">>({});
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", email: "", phone: "", organization: "" });
  const [infoErrors, setInfoErrors] = useState<Partial<UserInfo>>({});
  const [counts, setCounts] = useState<Record<Mindset, number>>({ Optimistic: 0, Pragmatic: 0, Skeptic: 0 });
  const [dominant, setDominant] = useState<Mindset>("Pragmatic");
  const topRef = useRef<HTMLDivElement>(null);

  function selectAnswer(scenarioId: number, label: "a" | "b" | "c") {
    setAnswers((prev) => ({ ...prev, [scenarioId]: label }));
  }

  function submitQuiz() {
    const unanswered = SCENARIOS.filter((s) => !answers[s.id]);
    if (unanswered.length > 0) {
      alert(`Please answer all scenarios. ${unanswered.length} remaining.`);
      return;
    }
    const tally: Record<Mindset, number> = { Optimistic: 0, Pragmatic: 0, Skeptic: 0 };
    for (const s of SCENARIOS) {
      const chosen = answers[s.id];
      tally[LEGEND[s.id][chosen]]++;
    }
    setCounts(tally);
    const dom = (Object.keys(tally) as Mindset[]).reduce((a, b) => tally[a] >= tally[b] ? a : b);
    setDominant(dom);
    setPhase("info");
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function submitInfo() {
    const errors: Partial<UserInfo> = {};
    if (!userInfo.name.trim()) errors.name = "Name is required";
    if (!userInfo.email.trim() || !/\S+@\S+\.\S+/.test(userInfo.email)) errors.email = "Valid email is required";
    if (!userInfo.phone.trim() || !/^\+?[\d\s\-]{7,15}$/.test(userInfo.phone)) errors.phone = "Valid phone is required";
    setInfoErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setPhase("result");
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const cfg = MINDSET_CONFIG[dominant];
  const Icon = cfg.icon;
  const answered = Object.keys(answers).length;

  return (
    <div ref={topRef} className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Discover Your AI Mindset</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI Mindset Assessment</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            16 real-world case scenarios to reveal whether you're an Optimist, Pragmatist, or Skeptic when it comes to AI.
          </p>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {(["quiz", "info", "result"] as Phase[]).map((p, i) => {
              const labels = ["Scenarios", "Your Info", "Mindset Report"];
              const active = phase === p;
              const done = (phase === "info" && i === 0) || (phase === "result" && i <= 1);
              return (
                <div key={p} className="flex items-center gap-2">
                  <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${active ? "bg-primary text-primary-foreground" : done ? "bg-primary/20 text-primary" : "bg-muted/50 text-muted-foreground"}`}>
                    {done && !active ? <CheckCircle2 className="w-3 h-3" /> : <span>{i + 1}</span>}
                    {labels[i]}
                  </div>
                  {i < 2 && <ChevronRight className="w-3 h-3 text-muted-foreground" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 pb-24">

        {/* ════════════════ PHASE: QUIZ ════════════════ */}
        {phase === "quiz" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm text-muted-foreground">{answered} of {SCENARIOS.length} answered</span>
              <div className="flex-1 bg-muted/30 rounded-full h-1.5 overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${(answered / SCENARIOS.length) * 100}%` }} />
              </div>
            </div>

            {SCENARIOS.map((s) => {
              const chosen = answers[s.id];
              return (
                <Card key={s.id} className="bg-card/50 border-border/50 overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                        {s.id}
                      </span>
                      <div>
                        <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">{s.title}</p>
                        <CardTitle className="text-sm font-normal text-muted-foreground leading-relaxed">
                          {s.context}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {s.options.map((opt) => {
                        const isSelected = chosen === opt.label;
                        return (
                          <button
                            key={opt.label}
                            onClick={() => selectAnswer(s.id, opt.label)}
                            className={`w-full flex items-start gap-3 text-left px-4 py-3 rounded-lg border transition-all text-sm ${
                              isSelected
                                ? "bg-primary/10 border-primary text-foreground"
                                : "bg-card border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                            }`}
                          >
                            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5 ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                              {opt.label.toUpperCase()}
                            </span>
                            <span className="flex-1 leading-relaxed">{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div className="flex justify-end pt-4">
              <button onClick={submitQuiz} className="btn-primary inline-flex items-center gap-2">
                See My Mindset <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ════════════════ PHASE: INFO ════════════════ */}
        {phase === "info" && (
          <div className="max-w-xl mx-auto">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <div className="text-center mb-2">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                    <Lightbulb className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Almost there!</CardTitle>
                  <p className="text-muted-foreground text-sm mt-1">Enter your details to reveal your AI Mindset Report.</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { key: "name" as const,         label: "Full Name",               placeholder: "Jane Doe",         icon: User,  type: "text"  },
                  { key: "email" as const,        label: "Email Address",           placeholder: "jane@example.com", icon: Mail,  type: "email" },
                  { key: "phone" as const,        label: "Phone Number",            placeholder: "+91 98765 43210",  icon: Phone, type: "tel"   },
                  { key: "organization" as const, label: "Organization (optional)", placeholder: "Acme Corp",        icon: null,  type: "text"  },
                ].map(({ key, label, placeholder, icon: Ic, type }) => (
                  <div key={key}>
                    <label className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5 block font-medium">{label}</label>
                    <div className="relative">
                      {Ic && <Ic className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />}
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={userInfo[key]}
                        onChange={(e) => setUserInfo((p) => ({ ...p, [key]: e.target.value }))}
                        className={`w-full rounded-lg border bg-card text-foreground text-sm px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/30 ${Ic ? "pl-9" : ""} ${infoErrors[key] ? "border-red-500" : "border-border/60"}`}
                      />
                    </div>
                    {infoErrors[key] && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {infoErrors[key]}
                      </p>
                    )}
                  </div>
                ))}
                <Separator className="my-2" />
                <button onClick={submitInfo} className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3">
                  Reveal My AI Mindset <ChevronRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ════════════════ PHASE: RESULT ════════════════ */}
        {phase === "result" && (
          <div className="space-y-6 max-w-2xl mx-auto">

            {/* Main result */}
            <Card className="bg-card/50 border-border/50 overflow-hidden">
              <div className="h-1.5" style={{ background: `linear-gradient(to right, ${cfg.color}44, ${cfg.color})` }} />
              <CardContent className="pt-8 pb-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 border" style={{ background: cfg.bg, borderColor: cfg.border }}>
                  <Icon className="w-8 h-8" style={{ color: cfg.color }} />
                </div>
                <p className="text-sm text-muted-foreground mb-1 uppercase tracking-widest font-medium">Your Predominant Mindset</p>
                <h2 className="text-5xl font-bold mb-4" style={{ color: cfg.color }}>{dominant}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">{cfg.description}</p>
              </CardContent>
            </Card>

            {/* Count breakdown */}
            <div className="grid grid-cols-3 gap-4">
              {(Object.entries(counts) as [Mindset, number][]).map(([m, c]) => {
                const mc = MINDSET_CONFIG[m];
                const MIcon = mc.icon;
                return (
                  <Card key={m} className="bg-card/50 border-border/50 text-center overflow-hidden">
                    <div className="h-0.5" style={{ background: m === dominant ? mc.color : "transparent" }} />
                    <CardContent className="pt-5 pb-4">
                      <MIcon className="w-5 h-5 mx-auto mb-2" style={{ color: mc.color }} />
                      <p className="text-3xl font-bold font-mono" style={{ color: mc.color }}>{c}</p>
                      <p className="text-xs text-muted-foreground mt-1">{m}</p>
                      <p className="text-xs text-muted-foreground">responses</p>
                      {m === dominant && (
                        <span className="inline-block mt-2 text-xs rounded-full px-2 py-0.5 font-medium" style={{ background: mc.bg, color: mc.color, border: `1px solid ${mc.border}` }}>
                          Dominant
                        </span>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Distribution */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="pt-6 pb-5">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium">Mindset Distribution</p>
                <div className="space-y-3">
                  {(Object.entries(counts) as [Mindset, number][]).map(([m, c]) => {
                    const mc = MINDSET_CONFIG[m];
                    return (
                      <div key={m} className="flex items-center gap-3">
                        <span className="text-xs w-20 text-right text-muted-foreground">{m}</span>
                        <div className="flex-1 bg-muted/30 rounded-full h-2.5 overflow-hidden">
                          <div className="h-full rounded-full transition-all" style={{ width: `${(c / 16) * 100}%`, background: mc.color }} />
                        </div>
                        <span className="text-xs font-mono font-semibold w-6" style={{ color: mc.color }}>{c}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Traits */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="pt-6 pb-5">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium">Key Traits</p>
                <div className="grid grid-cols-2 gap-2">
                  {cfg.traits.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm rounded-lg px-3 py-2" style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: cfg.color }} />
                      <span style={{ color: cfg.color }}>{t}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => downloadMindsetPdf({
                  name: userInfo.name,
                  email: userInfo.email,
                  phone: userInfo.phone,
                  organization: userInfo.organization,
                  counts,
                  dominant,
                  dominantColor: cfg.color,
                  description: cfg.description,
                  traits: cfg.traits,
                })}
                className="btn-primary flex-1 inline-flex items-center justify-center gap-2 py-3"
              >
                <Download className="w-4 h-4" /> Download Report
              </button>
              <button
                onClick={() => {
                  setPhase("quiz");
                  setAnswers({});
                  setUserInfo({ name: "", email: "", phone: "", organization: "" });
                  topRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-border/60 text-sm font-medium text-foreground hover:bg-muted/30 transition-all"
              >
                Retake Assessment
              </button>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              For queries, reach us at{" "}
              <a href="mailto:info@digiculum.com" className="text-primary underline">info@digiculum.com</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}