import { Presentation, Users, Target, BookOpen, Route, HeartHandshake, Network, ArrowRight } from "lucide-react";

const programSteps = [
  {
    title: "AI Inspiration",
    description: "45 minutes presentation + 15 mins QA",
    icon: Presentation,
  },
  {
    title: "Client Discovery",
    description: "1:1 Interviews with Leaders (20-30 minutes per person)",
    icon: Users,
  },
  {
    title: "Think-Evaluate-Scale",
    description: "Identify the stage of AI adoption for an enterprise",
    icon: Target,
  },
  {
    title: "Instructor-led Live Modules",
    description: "Customized as per business requirements of your enterprise (30 minutes per person)",
    icon: BookOpen,
  },
  {
    title: "Journey Co-creation",
    description: "1:1 Meeting with Leaders",
    icon: Route,
  },
  {
    title: "Personalized Continuous Coaching",
    description: "Regular check-ins to track individual progress and organization value",
    icon: HeartHandshake,
  },
  {
    title: "Ecosystem Onboarding",
    description: "Leaders seek and share knowledge and experience with each other",
    icon: Network,
  },
];

const ProgramFlow = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg text-center mb-4">
          AI Leadership Readiness Program
        </h2>
        <p className="text-xl text-center text-primary font-medium mb-12">
          Delivery begins
        </p>

        {/* Desktop Flow */}
        <div className="hidden lg:block diagram-container overflow-x-auto">
          <div className="flex items-start justify-between min-w-[1000px] gap-2">
            {programSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center w-32">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-3">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-2 leading-tight">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-tight">{step.description}</p>
                </div>
                {index < programSteps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-primary/50 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Flow */}
        <div className="lg:hidden space-y-4">
          {programSteps.map((step, index) => (
            <div key={index} className="diagram-container flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFlow;
