import { Lightbulb, Target, BookOpen, Code, Layers } from "lucide-react";

const cards = [
  {
    icon: Lightbulb,
    question: "Who is an AI Practitioner?",
    answer: "An AI Practitioner proactively adapts to AI's impact on work to stay relevant and competitive—either in his/her current role or a new AI role.",
  },
  {
    icon: Target,
    question: "Why does becoming AI Practitioner matter now?",
    answer: "AI is changing how work gets done. Those who adapt early gain an advantage; those who don't risk being left behind.",
  },
  {
    icon: BookOpen,
    question: "Who is this bootcamp for?",
    answer: "For technical, non-technical or absolute beginners who want practical AI skills and knowledge.",
  },
  {
    icon: Code,
    question: "Do I need to know coding before I enroll for the bootcamp?",
    answer: "No. Coding skills are helpful but not required. Even if you’ve never written a single line of code, you can join and succeed in this bootcamp.",
  },
  {
    icon: Layers,
    question: "What will you learn in the 21 day bootcamp ?",
    answer: "You will learn essential AI concepts, important AI tools, and work on practical AI projects, based on our unique Know-Hack-Build model.",
  },
  {
    icon: Layers,
    question: "What will you learn in the 21 day bootcamp ?",
    answer: "You will learn essential AI concepts, important AI tools, and work on practical AI projects, based on our unique Know-Hack-Build model.",
  },
  {
    icon: Layers,
    question: "What will you learn in the 21 day bootcamp ?",
    answer: "You will learn essential AI concepts, important AI tools, and work on practical AI projects, based on our unique Know-Hack-Build model.",
  },
  {
    icon: Layers,
    question: "What will you learn in the 21 day bootcamp ?",
    answer: "You will learn essential AI concepts, important AI tools, and work on practical AI projects, based on our unique Know-Hack-Build model.",
  },
  {
    icon: Layers,
    question: "What will you learn in the 21 day bootcamp ?",
    answer: "You will learn essential AI concepts, important AI tools, and work on practical AI projects, based on our unique Know-Hack-Build model.",
  },
  {
    icon: Layers,
    question: "What will you learn in the 21 day bootcamp ?",
    answer: "You will learn essential AI concepts, important AI tools, and work on practical AI projects, based on our unique Know-Hack-Build model.",
  },
  {
    icon: Layers,
    question: "What will you learn in the 21 day bootcamp ?",
    answer: "You will learn essential AI concepts, important AI tools, and work on practical AI projects, based on our unique Know-Hack-Build model.",
  },
  {
    icon: Layers,
    question: "What will you learn in the 21 day bootcamp ?",
    answer: "You will learn essential AI concepts, important AI tools, and work on practical AI projects, based on our unique Know-Hack-Build model.",
  },
];

const WhoIsAIPractitioner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">AI Practitioner</span> Bootcamp
        </h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Understanding the path to becoming an AI Practitioner
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {card.question}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {card.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsAIPractitioner;
