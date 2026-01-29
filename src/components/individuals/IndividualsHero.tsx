import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";
import BrochureDialog from "./BrochureDialog";

const IndividualsHero = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
            Cohort #1
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">AI Practitioner</span> Bootcamp
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Personalized Continuous Collaborative Learning Experience through our unique{" "}
            <span className="text-primary font-semibold">Know-Hack-Build</span> Framework
          </p>
          
          <p className="text-lg text-primary font-medium mb-10">
            Don't miss out the unbeatable Early Joiner offer
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="glass-card p-6 text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">21 Days</h3>
              <p className="text-foreground/70 text-sm">Start Date: 16th Feb 2026</p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Live Learning</h3>
              <p className="text-foreground/70 text-sm">Time: 8:30 pm IST / 4 PM CET</p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Practical Application</h3>
              <p className="text-foreground/70 text-sm">1:1 Consultation Included</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="glass-card p-8 mb-10 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl text-foreground/50 line-through">INR 3,00,000</span>
              <span className="text-3xl md:text-4xl font-bold text-primary">INR 30,000</span>
            </div>
            <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
              90% DISCOUNT
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-primary w-full sm:w-auto">
                1:1 Consultation
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => setBrochureOpen(true)}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      <BrochureDialog open={brochureOpen} onOpenChange={setBrochureOpen} />
    </section>
  );
};

export default IndividualsHero;
