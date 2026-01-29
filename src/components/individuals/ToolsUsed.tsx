import { useState } from "react";
import { Button } from "@/components/ui/button";
import BrochureDialog from "./BrochureDialog";

const tools = [
  "ChatGPT", "Claude", "Gemini", "Perplexity", "NotebookLM",
  "Runway", "HeyGen", "ElevenLabs", "Hugging Face", "Google AI Studio",
  "Deep Research", "Gamma",
];

const ToolsUsed = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tools You Will <span className="text-gradient">Use</span>
        </h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Get hands-on experience with industry-leading AI tools
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="px-6 py-3 glass-card rounded-full text-foreground/80 hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              {tool}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-foreground/70 mb-6">
            Know more about the AI Practitioners Bootcamp and AI Specialization Program
          </p>
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => setBrochureOpen(true)}
          >
            Download Brochure
          </Button>
        </div>
      </div>

      <BrochureDialog open={brochureOpen} onOpenChange={setBrochureOpen} />
    </section>
  );
};

export default ToolsUsed;
