import { Brain, Zap, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Know",
    color: "from-blue-500/20 to-primary/20",
    description: "Understand core AI concepts, trends, and use cases that matter for your role.",
    items: [
      "What type of technology is AI?",
      "Machine Learning (ML) fundamentals",
      "Deep Learning & Transformer architectures",
      "Generative AI & Agentic AI",
      "Prompt Engineering",
      "RAG & Fine-tuning techniques",
    ],
  },
  {
    icon: Zap,
    title: "Hack",
    color: "from-yellow-500/20 to-orange-500/20",
    description: "Apply AI tools to automate everyday tasks and boost productivity—without coding.",
    items: [
      "Video: Turn text into videos, derive insights",
      "Image: Create photo-realistic designs",
      "Text: Summarize, augment, auto-generate",
      "Audio: Create music, voice cloning",
    ],
  },
  {
    icon: Wrench,
    title: "Build",
    color: "from-green-500/20 to-emerald-500/20",
    description: "Create practical AI apps that improve your work and give you an edge.",
    items: [
      "Create your personal AI projects",
      "Build AI-powered interview simulator",
      "Develop custom AI applications",
      "Accelerate your career growth",
    ],
  },
];

const KnowHackBuild = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The <span className="text-gradient">Know–Hack–Build</span> Model
        </h2>
        <p className="text-foreground/70 text-center mb-6 max-w-3xl mx-auto">
          A framework for measuring your AIQ (AI Quotient)—the level of AI literacy and capability that will increasingly influence how people are evaluated and hired in the future.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${pillar.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{pillar.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-foreground/80 mb-6">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowHackBuild;
