import { Bot, CheckCircle } from "lucide-react";

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
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 overflow-hidden relative">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Bot className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-primary text-sm font-medium">Build</span>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Create Your Personal Project
                  </h2>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
                AI as your Interviewer
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground/80">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildProject;
