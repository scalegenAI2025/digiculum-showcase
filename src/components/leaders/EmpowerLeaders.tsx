import { Lightbulb, Search, Rocket, Check } from "lucide-react";

const empowermentData = [
  {
    stage: "Think AI",
    icon: Lightbulb,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    outcomes: [
      "Establish a pragmatic mindset toward balancing profits and ethics",
      "Identify where AI is relevant in their organization",
    ],
  },
  {
    stage: "Evaluate",
    icon: Search,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    outcomes: [
      "Build scalable AI pilots and agents",
      "Evaluate the operational readiness gaps",
      "Select right AI for future initiatives",
    ],
  },
  {
    stage: "Scale AI",
    icon: Rocket,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    outcomes: [
      "Prepare scaled adoption strategy for enterprise-wide transformation",
      "Achieve operational readiness",
    ],
  },
];

const EmpowerLeaders = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg text-center mb-4">
          We empower leaders at every stage to
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          make informed decisions and take fast actions
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {empowermentData.map((section, index) => (
            <div
              key={index}
              className={`diagram-container border ${section.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-full ${section.bgColor} flex items-center justify-center`}
                >
                  <section.icon className={`h-5 w-5 ${section.color}`} />
                </div>
                <h3 className={`text-xl font-bold ${section.color}`}>
                  {section.stage}
                </h3>
              </div>
              <ul className="space-y-4">
                {section.outcomes.map((outcome, oIndex) => (
                  <li key={oIndex} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 mt-0.5 ${section.color} flex-shrink-0`} />
                    <span className="text-foreground/80">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpowerLeaders;
