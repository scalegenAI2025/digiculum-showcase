import { Users, Lightbulb, Share2, Globe } from "lucide-react";

const ecosystems = [
  { name: "Ecosystem 1", icon: Users },
  { name: "Ecosystem 2", icon: Lightbulb },
  { name: "Ecosystem 3", icon: Share2 },
  { name: "Super Ecosystem", icon: Globe, featured: true },
  { name: "Ecosystem n", icon: Users },
];

const EcosystemConcept = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">What is an Ecosystem?</h2>
          <p className="text-lg text-muted-foreground">
            An ecosystem is a community where people seek and share AI knowledge, skills, 
            and best practices related to a certain AI topic with each other.
          </p>
        </div>
        
        {/* Ecosystem Network Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection lines - hidden on mobile */}
          <div className="hidden md:block absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
              {/* Lines connecting to center */}
              <line x1="100" y1="75" x2="400" y2="150" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="2" />
              <line x1="200" y1="225" x2="400" y2="150" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="2" />
              <line x1="600" y1="225" x2="400" y2="150" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="2" />
              <line x1="700" y1="75" x2="400" y2="150" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="2" />
            </svg>
          </div>
          
          {/* Ecosystem nodes - responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
            {ecosystems.map((eco, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center ${
                  eco.featured ? 'md:col-span-1 md:row-start-1 md:col-start-3' : ''
                }`}
              >
                <div 
                  className={`
                    w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center 
                    transition-all duration-300 hover:scale-110
                    ${eco.featured 
                      ? 'bg-primary text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.5)]' 
                      : 'bg-card border border-border/50 hover:border-primary/50'
                    }
                  `}
                >
                  <eco.icon className={`w-8 h-8 md:w-10 md:h-10 ${eco.featured ? '' : 'text-primary'}`} />
                </div>
                <p className={`mt-3 text-sm font-medium text-center ${eco.featured ? 'text-primary' : 'text-foreground'}`}>
                  {eco.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemConcept;
