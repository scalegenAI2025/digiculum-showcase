import { useState } from "react";
import { Button } from "@/components/ui/button";
import BrochureDialog from "./BrochureDialog";
import brochurePdf from "@/assets/individuals.pdf";
import gptLogo from '@/assets/AI-logos/openai.png'
import claudeLogo from '@/assets/AI-logos/Claude.png'
import GeminiLogo from '@/assets/AI-logos/Gemini.png'
import aiStudioLogo from '@/assets/AI-logos/aistudio.png'
import runwayLogo from '@/assets/AI-logos/runway.png'
import perplexityLogo from '@/assets/AI-logos/perplexity.png'
import notebookLmLogo from '@/assets/AI-logos/notebooklm.png'
import n8nLogo from '@/assets/AI-logos/n8n.png'
import huggingFaceLogo from '@/assets/AI-logos/huggingface.png'
import elevenLabsLogo from '@/assets/AI-logos/elevenlabs.png'
import happenStanceLogo from '@/assets/AI-logos/happenstance.png'
import heygenLogo from '@/assets/AI-logos/heygen.png'
import gammaLogo from '@/assets/AI-logos/gamma.png'


const tools = [
  { name: "ChatGPT", logo: gptLogo },
  { name: "Claude", logo: claudeLogo },
  { name: "Gemini Deep Research", logo: GeminiLogo },
  { name: "Perplexity", logo: perplexityLogo },
  { name: "NotebookLM", logo: notebookLmLogo},
  { name: "Runway", logo: runwayLogo },
  { name: "HeyGen", logo: heygenLogo },
  { name: "ElevenLabs", logo: elevenLabsLogo },
  { name: "Hugging Face", logo: huggingFaceLogo },
  { name: "Google AI Studio", logo: aiStudioLogo },
  { name: "Gamma", logo: gammaLogo },
  { name: "Happenstance", logo: happenStanceLogo },
  { name: "n8n", logo: n8nLogo }
];

const ToolsUsed = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);

  const handleBrochureSubmit = (data: { name: string; email: string; phone: string }) => {
    // Here you can send data to Google Sheets or your backend
    console.log("User data:", data);
    
    // Download the PDF after form submission
    const link = document.createElement('a');
    link.href = brochurePdf;
    link.download = 'AI-Practitioner-Bootcamp-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close the dialog (handled by BrochureDialog itself)
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tools You Will <span className="text-gradient">Use</span>
        </h2>

        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Get hands-on experience with industry-leading AI tools
        </p>

        {/* LOGO GRID - 3 columns on mobile, 4 on tablet, 5 on desktop for better distribution */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-14">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`glass-card flex flex-col items-center justify-center p-6 rounded-xl
                         hover:border-primary/50 transition-all duration-300 gap-4 ${
                           index === 10 ? 'lg:col-start-2' : ''
                         }`}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                loading="lazy"
                className="h-10 md:h-12 object-contain transition duration-300"
              />
              <p className="text-primary text-sm font-medium text-center">
                {tool.name}
              </p>
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

      <BrochureDialog 
        open={brochureOpen} 
        onOpenChange={setBrochureOpen}
        onSubmit={handleBrochureSubmit}
      />
    </section>
  );
};

export default ToolsUsed;