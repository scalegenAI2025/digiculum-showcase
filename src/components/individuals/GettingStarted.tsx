import { MessageCircle, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "Step 1",
    title: "1:1 Consultation",
    description: "Schedule a personalized consultation to understand your goals",
  },
  {
    icon: Users,
    number: "Step 2",
    title: "Enroll in Cohort",
    description: "Join our next cohort and connect with fellow learners",
  },
  {
    icon: Rocket,
    number: "Step 3",
    title: "Start your AI Reskilling Journey",
    description: "Become an AI Practitioner",
  },
];

const GettingStarted = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get Started in <span className="text-gradient">3 Simple Steps</span>
        </h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Your journey to becoming an AI Practitioner starts here
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-8 text-center h-full hover:border-primary/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-primary text-sm font-medium">{step.number}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{step.title}</h3>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </div>
              
              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
