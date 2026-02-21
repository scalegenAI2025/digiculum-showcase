import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Mail, Info } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Cookie className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Cookie Usage</span>
          </div>
          <h1 className="heading-xl mb-6">Cookie Policy</h1>
          <p className="text-muted-foreground text-lg">
            Information about cookies on our platform
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-6 pb-24">
        {/* Cookie Policy Statement */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Info className="w-5 h-5 text-primary" />
              Cookie Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
              <Cookie className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">
                No Cookies Currently in Use
              </p>
              <p>
                We do not use any cookies on the website at the moment. The policy will be updated if we intend to use any cookies on{" "}
                <a href="https://www.digiculum.com" className="text-primary underline hover:text-primary/80">
                  www.digiculum.com
                </a>{" "}
                in future.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;