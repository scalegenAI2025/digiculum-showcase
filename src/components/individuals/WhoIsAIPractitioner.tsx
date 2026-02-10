import {
  Lightbulb,
  Target,
  BookOpen,
  Code,
  Layers,
  Workflow,
  Briefcase,
  Sparkles,
  Clock,
  Award,
  ArrowRightCircle,
  GraduationCap,
} from "lucide-react";

const cards = [
  {
    icon: Lightbulb,
    question: "Who is an AI Practitioner?",
    answer:
      "An AI Practitioner proactively adapts to AI's impact on work to stay relevant and competitive—either in his/her current role or a new AI role.",
  },
  {
    icon: Target,
    question: "Why does becoming AI Practitioner matter now?",
    answer:
      "AI is changing how work gets done. Those who adapt early gain an advantage; those who don't risk being left behind.",
  },
  {
    icon: BookOpen,
    question: "Who is this bootcamp for?",
    answer:
      "For technical, non-technical or absolute beginners who want practical AI skills and knowledge.",
  },
  {
    icon: Code,
    question: "Do I need to know coding before I enroll for the bootcamp?",
    answer:
      "No. Coding skills are helpful but not required. Even if you’ve never written a single line of code, you can join and succeed in this bootcamp.",
  },
  {
    icon: Layers,
    question: "What will you learn in the 21 day bootcamp?",
    answer:
      "You will learn essential AI concepts, important AI tools, and work on practical AI projects, based on our unique Know-Hack-Build model.",
  },
  {
    icon: Workflow,
    question: "What is Know-Hack-Build model ?",
    answer:
      "The Know–Hack–Build model is a framework for measuring an individual’s AIQ (AI Quotient)—the level of AI literacy and capability that will increasingly influence how people are evaluated and hired in the future.",
  },
  {
    icon: Briefcase,
    question: "How will you apply this to your job ?",
    answer:
      "You’ll receive 3 months of coaching, along with a structured plan to apply AI to your role.",
  },
  {
    icon: Sparkles,
    question: "How is this bootcamp different from a typical program ?",
    answer:
      "This is a highly individual-centric bootcamp where learning is personalized to your needs using the Know–Hack–Build model. You’ll receive continuous coaching focused on practical application, along with collaborative learning through an ecosystem where you can seek and share knowledge and experiences with others.",
  },
  {
    icon: Clock,
    question: "What are the bootcamp timings ?",
    answer:
      "The program duration is 60 hours spanning over 21 consecutive days including weekends. Timings 8:30 - 10:30 pm IST ( 4 - 6 pm CET) on weekdays. 12 - 6 pm ( 7:30 am - 1:30 pm CET) on Saturdays and 12 - 4 pm (7:30 am - 11:30 pm CET) ",
  },
  {
    icon: Award,
    question: "What do you get at the end of 21 day bootcamp ?",
    answer:
      "You’ll receive an AI Practitioner certificate, followed by coaching and enrollment into an ecosystem.",
  },
  {
    icon: ArrowRightCircle,
    question: "What's next after the AI Practitioner Bootcamp ?",
    answer:
      "After completion of 21-day AI Practitioner Bootcamp, an individual can enroll in a 1-month AI Specialization Program.",
  },
  {
    icon: GraduationCap,
    question: "Why should I enroll in AI Specialization Program ?",
    answer:
      "The 1-month AI Specialization Program helps you turn the general AI skills and capabilities into job-specific advantage. ",
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
              className="
        relative group border border-border rounded-2xl p-8
        bg-card/40 backdrop-blur-md
        transition-all duration-300
        hover:border-primary hover:shadow-xl hover:-translate-y-1
      "
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Question (always visible) */}
              <h3 className="text-lg font-semibold text-white">
                {card.question}
              </h3>

              {/* Answer (hidden → visible on hover) */}
              <div
                className="
          mt-4 text-foreground/80 text-semibold leading-relaxed
          opacity-0 max-h-0 overflow-hidden
          transition-all duration-300 ease-in-out
          group-hover:opacity-100 group-hover:max-h-40
        "
              >
                {card.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsAIPractitioner;
