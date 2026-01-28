import { Lightbulb, Search, Rocket } from "lucide-react";

const challengeData = [
  {
    stage: "Think AI",
    icon: Lightbulb,
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    challenges: [
      "I'm overwhelmed by AI noise and still can't tell what's real.",
      "I'm pulled by conflicting AI opinions, vendors, and frameworks.",
      "I'm unclear how AI will impact my business.",
      "I'm unsure where AI truly fits in my organization.",
    ],
  },
  {
    stage: "Evaluate",
    icon: Search,
    color: "text-primary",
    borderColor: "border-primary/30",
    challenges: [
      "We've run pilots, but I can't clearly prove or explain the value.",
      "We're trying many tools, but lack a consistent way to evaluate them.",
      "I worry we'll back the wrong AI bets and lose credibility.",
      "I feel pressure to act on AI without a clear, responsible path.",
      "I don't have a clear AI strategy—only scattered initiatives.",
      "Our AI pilots are running, but outcomes are inconsistent and unclear.",
      "We've bought AI tools, but adoption and usage are weak.",
      "We're experimenting with AI, but too many pilots fail to deliver value.",
    ],
  },
  {
    stage: "Scale AI",
    icon: Rocket,
    color: "text-green-400",
    borderColor: "border-green-400/30",
    challenges: [
      "I hesitate to scale AI because the investment feels too large.",
      "I can't justify scaling AI without clear, measurable ROI.",
      "AI scaling looks risky, and I'm not confident we can control it.",
      "I worry enterprise-wide AI will create more risk than value.",
      "We don't have proof our pilots will translate into scalable impact.",
      "I'm concerned AI at scale will trigger compliance and governance issues.",
      "I'm not sure we have the people and processes to scale AI safely.",
      "I fear scaling AI will disrupt operations without guaranteed outcomes.",
    ],
  },
];

const LeaderChallenges = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg text-center mb-12">
          Leaders have unique challenges at{" "}
          <span className="text-accent-gradient">different stages</span>
        </h2>

        <div className="space-y-12">
          {challengeData.map((section, index) => (
            <div key={index} className="diagram-container">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className={`h-6 w-6 ${section.color}`} />
                <h3 className={`text-2xl font-bold ${section.color}`}>
                  {section.stage}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.challenges.map((challenge, cIndex) => (
                  <div
                    key={cIndex}
                    className={`p-4 rounded-lg border ${section.borderColor} bg-card/30 hover:bg-card/50 transition-all duration-300`}
                  >
                    <p className="text-foreground/80 text-sm italic">
                      "{challenge}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderChallenges;
