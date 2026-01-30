import { Lightbulb, Search, Rocket } from "lucide-react";
import thinkAi from "@/assets/think-ai.png"
import evaluateAi from "@/assets/evaluate-ai.jpg"
import scaleAi from "@/assets/scale-ai.jpg"

const challengeData = [
  {
    stage: "Think AI",
    icon: Lightbulb,
    color: "text-primary",
    image: thinkAi,
    challenges: [
      "I'm overwhelmed by AI noise and still can't tell what's real.",
      "I'm pulled by conflicting AI opinions, vendors, and frameworks.",
      "I'm unclear how AI will impact my business.",
      "I'm unsure where AI truly fits in my organization.",
      "We've run pilots, but I can't clearly prove or explain the value.",
      "We're trying many tools, but lack a consistent way to evaluate them.",
      "I worry we'll back the wrong AI bets and lose credibility.",
      "I feel pressure to act on AI without a clear, responsible path.",
    ],
  },
  {
    stage: "Evaluate AI",
    icon: Search,
    color: "text-primary",
    image: evaluateAi,
    challenges: [
      "I don't have a clear AI strategy—only scattered initiatives.",
      "Our AI pilots are running, but outcomes are inconsistent and unclear.",
      "We've bought AI tools, but adoption and usage are weak.",
      "We're experimenting with AI, but too many pilots fail to deliver value.",
      "I can't tell which AI efforts to scale and which to stop.",
      "We lack a consistent framework to assess AI performance and impact.",
      "AI is happening across teams, but it's fragmented and hard to govern.",
      "I'm unsure whether our current AI setup is ready for real operations.",
    ],
  },
  {
    stage: "Scale AI",
    icon: Rocket,
    color: "text-primary",
    image: scaleAi,
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
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 space-y-40">
        {challengeData.map((section, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className={isReversed ? "md:order-2" : ""}>
                <div className="h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={section.image}
                    alt={section.stage}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className={isReversed ? "md:order-1" : ""}>
                <div className="flex items-center gap-3 mb-8">
                  <section.icon className={`h-7 w-7 ${section.color}`} />
                  <h3 className={`text-3xl font-bold ${section.color}`}>
                    {section.stage}
                  </h3>
                </div>

                <div className="space-y-4">
                  {section.challenges.map((challenge, cIndex) => (
                    <p
                      key={cIndex}
                      className="text-white/80 text-sm md:text-base italic leading-relaxed"
                    >
                      “{challenge}”
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LeaderChallenges;
