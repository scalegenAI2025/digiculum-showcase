import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ban, Mail, AlertCircle } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <AlertCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Refund Terms</span>
          </div>
          <h1 className="heading-xl mb-6">Refund Policy</h1>
          <p className="text-muted-foreground text-lg">
            Our policy on refunds for courses and services
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 pb-24">
        {/* Refund Policy Statement */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Ban className="w-5 h-5 text-primary" />
              Refund Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
              <Ban className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2">
                No Refunds Available
              </p>
              <p>
                Our courses and services are not refundable.
              </p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 mt-6">
              <p className="text-sm text-foreground/70">
                Please carefully review the course content and requirements before making a purchase. Once a purchase is made, we are unable to process refund requests.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>

      <Footer />
    </div>
  );
};

export default RefundPolicy;