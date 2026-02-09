import { Wrench, CheckCircle } from "lucide-react";

const features = [
  "Your personalized interviewer trained to simulate real interview rounds for your target roles, industries, and seniority levels.",
  "It will ask you high-quality questions, probe deeper based on your answers, and give structured feedback on clarity, confidence, and impact.",
  "You can use it to practice consistently, sharpen your storytelling, and enter interviews with a clear advantage.",
  "It will help you perform better, negotiate stronger, and accelerate career growth.",
];

const BuildProject = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex gap-2 items-center">
            <Wrench className="w-6 h-6 text-foreground" />
            <h2 className="text-2xl font-bold text-primary">
              Build
            </h2>
          </div>
          
          <p className="text-foreground/70 max-w-2xl">
            Create Your Personal Project: AI as your Interviewer
          </p>
        </div>

        <div className="glass-card p-8 md:p-4 overflow-hidden relative">
          
          <div className="relative z-10">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 mr-10">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildProject;