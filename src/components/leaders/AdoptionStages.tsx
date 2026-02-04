import { Lightbulb, Search, Rocket } from "lucide-react";

const stages = [
  {
    title: "Think AI",
    description: "Early stage. Few/No pilots.",
    icon: Lightbulb,
    gradient: "bg-primary/50",
  },
  {
    title: "Evaluate",
    description: "Intermediate stage. Considerable AI pilots and Agents. Not ready to scale.",
    icon: Search,
    gradient: "bg-primary/50",
  },
  {
    title: "Scale AI",
    description: "Advanced stage. Considerable AI pilots and Agents. Almost ready to scale.",
    icon: Rocket,
    gradient: "bg-primary/50",
  },
];

const AdoptionStages = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg text-center mb-12">
          Enterprises are at different stages of{" "}
          <span className="text-accent-gradient">AI Adoption</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="diagram-container flex flex-col items-center text-center p-8"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${stage.gradient} flex items-center justify-center mb-6`}
              >
                <stage.icon className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
              <p className="text-muted-foreground">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdoptionStages;
