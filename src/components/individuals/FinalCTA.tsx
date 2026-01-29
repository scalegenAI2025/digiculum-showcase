import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12 border-primary/30">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Won't Wait. <span className="text-gradient">Neither Should You.</span>
            </h2>
            
            <div className="space-y-4 text-foreground/80 mb-8 max-w-2xl mx-auto">
              <p>
                AI is already changing jobs and it is only going to get bigger, faster, and messier.
              </p>
              <p>
                Reskilling is no longer a "nice to have." It's a career decision you need to make <strong className="text-foreground">NOW</strong>.
              </p>
              <p>
                The longer you wait, the more you fall behind—and someone else will use AI to move faster, deliver better, and replace you.
              </p>
              <p className="text-lg text-foreground font-medium pt-4">
                So the real question isn't "Will AI take my job?"
              </p>
              <p className="text-xl text-primary font-semibold">
                It's "Will you allow AI to take your job?"
              </p>
            </div>

            {/* Special offer */}
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-8">
              <p className="text-foreground/80 mb-4">
                To help early movers act now, we're opening the AI Practitioners Bootcamp at an unbeatable early-joiner offer:
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-xl text-foreground/50 line-through">INR 3,00,000</span>
                <span className="text-3xl font-bold text-primary">INR 30,000 only</span>
              </div>
              <span className="inline-block mt-3 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                90% DISCOUNT
              </span>
            </div>

            <p className="text-foreground/70 mb-6">
              If you have questions about the bootcamp or about how AI is impacting your career, we're happy to help.
            </p>
            <p className="text-foreground font-medium mb-8">
              Let's get you AI-ready before the gap becomes impossible to close.
            </p>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-primary">
                1:1 Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
