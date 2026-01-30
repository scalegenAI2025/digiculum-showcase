import { ArrowRight, Users } from "lucide-react";

const EcosystemCTA = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Free to Join</span>
          </div>
          
          <h2 className="heading-lg mb-6">
            Ready to join the ecosystem?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Instead of chasing random tutorials or trends, get real-world insights, proven workflows, 
            and practical prompts from people who are actively using AI in their careers.
          </p>
          
          <a 
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
          >
            Enroll for Free
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Submit your info and join the community
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemCTA;
