import { Network } from "lucide-react";

const EcosystemHero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Network className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Community Learning</span>
          </div>
          
          <h1 className="heading-xl mb-6">
            How fast an individual reskills largely depends on their{" "}
            <span className="text-accent-gradient">ability to work in Ecosystems</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Join a community where ambitious professionals learn together, share insights, and accelerate their AI journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemHero;
