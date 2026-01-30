import { Presentation, Users, Target, BookOpen, Route, HeartHandshake, Network } from "lucide-react";

const programSteps = [
  {
    title: "AI Inspiration",
    description: "45 minutes presentation + 15 mins QA",
    icon: Presentation,
    milestone: false,
  },
  {
    title: "Client Discovery",
    description: "1:1 Interviews with Leaders",
    subdescription: "(20-30 minutes per person)",
    icon: Users,
    milestone: false,
  },
  {
    title: "Delivery begins",
    milestone: true,
  },
  {
    title: "Think-Evaluate-Scale e AI Maturity Assessment",
    description: "Identify the stage of AI adoption for an enterprise",
    icon: Target,
    milestone: false,
  },
  {
    title: "Instructor-led Live Modules",
    description: "Customized as per business requirements of your enterprise",
    icon: BookOpen,
    milestone: false,
  },
  {
    title: "Journey Co-creation",
    description: "1:1 Meeting with Leaders",
    subdescription: "(30 minutes per person)",
    icon: Route,
    milestone: false,
  },
  {
    title: "Personalized Continuous Coaching",
    description: "Regular check-ins to track individual progress and organization value",
    icon: HeartHandshake,
    milestone: false,
  },
  {
    title: "Ecosystem Onboarding",
    description: "Leaders seek and share knowledge and experience with each other",
    icon: Network,
    milestone: false,
  },
];

const ProgramFlow = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          AI Leadership Readiness Program
        </h2>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative px-8">
            {/* Horizontal Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40"></div>
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-8 gap-0">
              {programSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Node Circle */}
                  <div className={`relative z-10 ${
                    step.milestone 
                      ? 'w-12 h-12 bg-primary' 
                      : 'w-4 h-4 bg-primary'
                  } rounded-full border-4 border-black shadow-lg mb-6`}>
                    {step.milestone && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center max-w-[140px]">
                    {!step.milestone && step.icon && (
                      <div className="mb-2 flex justify-center">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    
                    <h3 className={`font-bold mb-2 leading-tight ${
                      step.milestone 
                        ? 'text-base text-primary' 
                        : 'text-sm text-primary'
                    }`}>
                      {step.title}
                    </h3>
                    
                    {step.description && (
                      <p className="text-xs text-primary/80 leading-tight mb-1">
                        {step.description}
                      </p>
                    )}
                    
                    {step.subdescription && (
                      <p className="text-xs text-primary/70 leading-tight italic">
                        {step.subdescription}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary to-primary/40"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-8">
              {programSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Node Circle */}
                  <div className={`absolute -left-8 ${
                    step.milestone 
                      ? 'w-10 h-10 bg-primary' 
                      : 'w-4 h-4 mt-1 bg-primary'
                  } rounded-full border-4 border-black shadow-lg flex-shrink-0`}>
                    {step.milestone && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-black/50 rounded-lg p-4 shadow-sm border border-primary/20">
                    {!step.milestone && step.icon && (
                      <div className="mb-3">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    
                    <h3 className={`font-bold mb-2 ${
                      step.milestone 
                        ? 'text-lg text-primary' 
                        : 'text-base text-primary'
                    }`}>
                      {step.title}
                    </h3>
                    
                    {step.description && (
                      <p className="text-sm text-primary/80 mb-1">
                        {step.description}
                      </p>
                    )}
                    
                    {step.subdescription && (
                      <p className="text-sm text-primary/70 italic">
                        {step.subdescription}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFlow;