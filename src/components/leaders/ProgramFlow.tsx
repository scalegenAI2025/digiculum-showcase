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
    <section className="py-16 md:py-24 bg-#121212 ">
      <div className="p-6 container mx-auto px-6 rounded-xl overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-primary/5 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          AI Leadership Readiness Program
        </h2>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative px-8">
            {/* Horizontal Line - positioned to align with center of all dots */}
            <div className="absolute left-0 right-0 h-0.5 bg-white" style={{ top: '6px' }}></div>
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-8 gap-0">
              {programSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Node Circle - positioned so center aligns with line */}
                  <div className={`relative z-10 ${
                    step.milestone 
                      ? 'w-12 h-12 bg-white' 
                      : 'w-4 h-4 bg-white'
                  } rounded-full border-4 border-black shadow-lg mb-6`} style={{
                    marginTop: step.milestone ? '-18px' : '2px'
                  }}>
                    {step.milestone && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center max-w-[140px]">
                    {!step.milestone && step.icon && (
                      <div className="mb-2 flex justify-center">
                        <step.icon className="w-8 h-8 text-white" />
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
                      <p className="text-xs text-white leading-tight mb-1">
                        {step.description}
                      </p>
                    )}
                    
                    {step.subdescription && (
                      <p className="text-xs text-white/70 leading-tight italic">
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
            {/* Vertical Line - positioned to align with center of dots */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-white" style={{ left: 'calc(1rem + 0.125rem)' }}></div>
            
            {/* Timeline Steps */}
            <div className="space-y-8">
              {programSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Node Circle - positioned to overlap the vertical line */}
                  <div className={`absolute ${
                    step.milestone 
                      ? 'w-10 h-10 bg-white -left-[2.125rem]' 
                      : 'w-4 h-4 bg-white -left-[1.125rem] mt-1'
                  } rounded-full border-4 border-black shadow-lg flex-shrink-0`}>
                    {step.milestone && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-black/50 rounded-lg p-4 shadow-sm border border-white/20">
                    {!step.milestone && step.icon && (
                      <div className="mb-3">
                        <step.icon className="w-8 h-8 text-white" />
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
                      <p className="text-sm text-white/80 mb-1">
                        {step.description}
                      </p>
                    )}
                    
                    {step.subdescription && (
                      <p className="text-sm text-white/70 italic">
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