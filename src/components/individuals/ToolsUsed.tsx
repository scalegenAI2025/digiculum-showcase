import { useState } from "react";
import { Button } from "@/components/ui/button";
import BrochureDialog from "./BrochureDialog";
import gptLogo from '@/assets/gpt.jpg'

const tools = [
  { name: "ChatGPT", logo: gptLogo },
  { name: "Claude", logo: "https://logo.clearbit.com/anthropic.com" },
  { name: "Gemini", logo: "https://logo.clearbit.com/google.com" },
  { name: "Perplexity", logo: "https://logo.clearbit.com/perplexity.ai" },
  { name: "NotebookLM", logo: "https://logo.clearbit.com/google.com" },
  { name: "Runway", logo: "https://logo.clearbit.com/runwayml.com" },
  { name: "HeyGen", logo: "https://logo.clearbit.com/heygen.com" },
  { name: "ElevenLabs", logo: "https://logo.clearbit.com/elevenlabs.io" },
  { name: "Hugging Face", logo: "https://logo.clearbit.com/huggingface.co" },
  { name: "Google AI Studio", logo: "https://logo.clearbit.com/google.com" },
  { name: "Deep Research", logo: "https://logo.clearbit.com/openai.com" },
  { name: "Gamma", logo: "https://logo.clearbit.com/gamma.app" },
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

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="glass-card flex items-center justify-center p-6 rounded-xl
                         hover:border-primary/50 transition-all duration-300"
              title={tool.name}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                loading="lazy"
                className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
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
