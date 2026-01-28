import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import leaderbg from "@/assets/leader-bg.png";

const LeadersHero = () => {
  const handleConsultation = () => {
    // Opens Calendly or consultation booking page
    window.open("https://calendly.com", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-24 pb-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${leaderbg})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6 animate-fade-in">
            AI Leadership Readiness Program
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in-delay-1">
            Empowering leaders to think, evaluate, and scale AI
          </p>
          <p className="text-lg text-primary font-medium mb-10 animate-fade-in-delay-1">
            Only for Businesses
          </p>
          <Button
            onClick={handleConsultation}
            size="lg"
            className="btn-primary text-lg px-10 py-6 animate-fade-in-delay-2"
          >
            <Calendar className="mr-2 h-5 w-5" />
            1:1 Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadersHero;
