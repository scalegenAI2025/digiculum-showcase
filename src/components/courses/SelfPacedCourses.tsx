import { Play, Sparkles, AlertTriangle, Cpu, Brain, MessageSquare, Layers, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const selfPacedCourses = [
  {
    title: "Generative AI",
    description: "6 facts on Generative AI every professional should know",
    icon: Sparkles,
    category: "Fundamentals"
  },
  {
    title: "Prompt Engineering",
    description: "Engineer precise prompts, drive accurate AI results",
    icon: MessageSquare,
    category: "Skills"
  },
  {
    title: "Bias and Hallucination",
    description: "Understand the business impact, types, and causes",
    icon: AlertTriangle,
    category: "Safety"
  },
  {
    title: "Key Technical Concepts of AI, ML and GenAI",
    description: "Mastering the core technologies driving AI",
    icon: Cpu,
    category: "Technical"
  },
  {
    title: "Natural Language Processing (NLP) Architectures",
    description: "Explore the structures that power natural language",
    icon: Brain,
    category: "Technical"
  },
  {
    title: "LLM Model Selection",
    description: "A strong prerequisite for Scaling GenAI and AI Agents",
    icon: Search,
    category: "Advanced"
  }
];

const SelfPacedCourses = () => {
  return (
    <section id="self-paced" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Learn at Your Pace</span>
          </div>
          
          <h2 className="heading-lg mb-4">Self-paced Online Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible learning modules you can complete on your own schedule
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selfPacedCourses.map((course, index) => (
            <Card 
              key={index}
              className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors shrink-0">
                    <course.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {course.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6">
                  {course.description}
                </p>
                
                <button className="w-full btn-primary text-sm py-2">
                  Enroll
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelfPacedCourses;
