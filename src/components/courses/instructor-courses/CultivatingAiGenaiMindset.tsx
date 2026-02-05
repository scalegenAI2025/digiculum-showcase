import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Users, 
  TrendingUp, 
  Zap, 
  BookOpen, 
  CheckCircle2,
  Calendar,
  Target,
  Lightbulb,
  Network,
  Award,
  Eye,
  ArrowRight,
  Focus,
  UserCheck,
  MessageSquare,
  Activity
} from "lucide-react";

const CultivatingAiGenaiMindset = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Growth Mindset Course</span>
          </div>
          <h1 className="heading-xl mb-6">Cultivating AI/GenAI Mindset</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Develop the right mindset to accelerate GenAI adoption and transformation in your organization
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Book a Consultation →
          </Button>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 pb-24">
        {/* Problem Section */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Target className="w-5 h-5 text-primary" />
              The Problem
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Different people have reacted differently to the GenAI hype</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>The reaction depends on an individual mindset</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Like individuals, the organizations have a mindset too, which is the weighted average of the mindset of all the individuals</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Different organizations have reacted differently to the GenAI hype based on their mindsets</p>
              </li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground">
                Scaled adoption of GenAI is very slow in organizations with skeptic mindsets.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Solution Section */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Lightbulb className="w-5 h-5 text-primary" />
              The Solution
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>In order to scale generative AI, an organization should cultivate the right mindset</p>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Right mindset should be cultivated by individuals at different levels in the corporate hierarchy</p>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Based on the growth mindset framework</p>
              </li>
            </ul>
            
            <div className="bg-muted/50 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground text-center">
                GROWTH MINDSET FRAMEWORK
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Course Format */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Calendar className="w-5 h-5 text-primary" />
              Course Format
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Delivery</p>
                <p className="text-sm">Instructor-driven online or classroom-based</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Duration</p>
                <p className="text-sm">4 hours</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Target Audience</p>
                <p className="text-sm">Employees at all levels in the organization hierarchy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Makes This Unique */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Award className="w-5 h-5 text-primary" />
              What Makes This Course Unique?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Coaching</h5>
                <p className="text-sm">Ensure practical application of competencies at workplace</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Call-to-Action</h5>
                <p className="text-sm">Speed up your organization's AI/GenAI deployment</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Content Customization</h5>
                <p className="text-sm">Differentiate from competitors with tailored content</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Collaboration</h5>
                <p className="text-sm">Learn through ecosystem partnerships</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Content */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <BookOpen className="w-5 h-5 text-primary" />
              Course Content
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-6">
            <p className="text-sm text-muted-foreground">
              Instructor-led, in-person/virtual, 4 hours, 1-2-1 coaching (1 hour free)
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Need for Right Mindset</h5>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                  <li>The GenAI hype</li>
                  <li>Three mindset approaches</li>
                  <li>Know your mindset type</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">The Growth Mindset</h5>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                  <li>Fixed mindset vs Growth mindset</li>
                  <li>Anatomy of a growth mindset</li>
                  <li>How growth mindset fosters learning</li>
                  <li>Introduction to the growth mindset framework</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Cultivating Growth Mindset</h5>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                  <li>More about the belief → action → focus framework</li>
                  <li>Building beliefs</li>
                  <li>Reinforcing actions</li>
                  <li>Monitoring progress</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Practical Applications of Growth Mindset</h5>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                  <li>Case study discussion</li>
                  <li>Business scenarios and simulations</li>
                  <li>Role-plays</li>
                  <li>Group activities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coaching */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Users className="w-5 h-5 text-primary" />
              Coaching
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p className="mb-4">In the course, you will be introduced to:</p>
            
            <div className="space-y-3">
              <div className="bg-muted/30 rounded p-3">
                <p><strong className="text-primary">The importance</strong> of cultivating the growth mindset</p>
              </div>
              <div className="bg-muted/30 rounded p-3">
                <p><strong className="text-primary">Understanding</strong> the key differences between the fixed and growth mindset</p>
              </div>
              <div className="bg-muted/30 rounded p-3">
                <p><strong className="text-primary">Growth mindset cultivation framework</strong></p>
              </div>
              <div className="bg-muted/30 rounded p-3">
                <p><strong className="text-primary">Practical applications</strong> of growth mindset</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div>
              <h5 className="font-semibold text-foreground mb-3">In the coaching, there will be:</h5>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Commitment contract with the coach</li>
                <li>Continuous check-ins on plan of action</li>
                <li>Problem-solving and behavior building</li>
                <li>Continuous feedback on the growth mindset cultivation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Ecosystem */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Network className="w-5 h-5 text-primary" />
              Ecosystem
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              An ecosystem is a cohort where people collaborate to seek and share knowledge, skills, and experiences with each other.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Collaboration is a powerful and effective learning technique</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Future of work will be largely dependent on an individual's ability to work in ecosystems</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Research shows that an individual learns 3X faster through ecosystems than standalone</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>AI/GenAI transformation requires diverse skillsets and expertise to be leveraged through ecosystems</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Ecosystems enable a paradigm shift in the mindset, from being an employee of a firm to an employee of an industry</p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground">
                After completion of the course, participants shall be automatically enrolled in an ecosystem of professionals belonging to different industries and geographical locations.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Instructor */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Award className="w-5 h-5 text-primary" />
              Course Instructor
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground text-lg mb-2">Amit Prabhu</h4>
                <p className="text-sm mb-4">
                  AI Consultant, Author, Speaker, Business Trainer, Policymaker, Entrepreneur, and Career Coach
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <a href="mailto:amit@amitprabhu.net" className="text-primary underline hover:text-primary/80">
                      amit@amitprabhu.net
                    </a>
                  </p>
                  <p>
                    <a href="https://www.amitprabhu.net" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                      www.amitprabhu.net
                    </a>
                  </p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Based on his book</p>
                <p className="text-sm text-muted-foreground mb-3">Available on Amazon</p>
                <a target="_blank" href="https://www.amazon.com/dp/B0CT4J7H1D?ref=cm_sw_r_ffobk_cp_ud_dp_SN58ATAJN43WRWFFBSQX&ref_=cm_sw_r_ffobk_cp_ud_dp_SN58ATAJN43WRWFFBSQX&social_share=cm_sw_r_ffobk_cp_ud_dp_SN58ATAJN43WRWFFBSQX&bestFormat=true&csmig=1">
                <Button variant="outline" size="sm">
                  Order →
                </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Cultivate a Growth Mindset?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our mindset transformation course and empower your organization to embrace AI/GenAI with confidence and enthusiasm.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book a Consultation →
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CultivatingAiGenaiMindset;