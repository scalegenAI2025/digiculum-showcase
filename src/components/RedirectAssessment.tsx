import { Button } from "@/components/ui/button";

const RedirectAssessment = () => {
  return (
    <div className="flex justify-center mt-12">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 w-3/4 text-center">
        <h3 className="text-2xl font-semibold text-foreground mb-4">
          Know your Artificial Intelligence Quotient (AIQ)
        </h3>
        <p className="text-muted-foreground mb-6">
          First step towards your AI Reskilling Journey
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90"
          onClick={() => window.open("/aiqassessment", "_blank")}
        >
          Assessment →
        </Button>
      </div>
    </div>
  );
};

export default RedirectAssessment;