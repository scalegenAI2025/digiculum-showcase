import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import bg from "@/assets/instruction-based-courses/GenAI-Transformation/bg.jpg"
import amazon from "@/assets/instruction-based-courses/GenAI-Transformation/amazon.jpg"
import framework from "@/assets/instruction-based-courses/GenAI-Transformation/framework.png"
import amit from "@/assets/instruction-based-courses/Essential-Competencies/amit.png"
import qrCode from "@/assets/instruction-based-courses/Essential-Competencies/qr-code.png"
import superEcosystem from "@/assets/instruction-based-courses/Essential-Competencies/super-ecosystem.jpg"
import coaching from "@/assets/instruction-based-courses/Essential-Competencies/coaching.png"


import { 
  Target, 
  Users, 
  TrendingUp, 
  Zap, 
  BookOpen, 
  CheckCircle2,
  Calendar,
  Lightbulb,
  Network,
  Award,
  Map,
  BarChart3,
  Compass,
  Layers,
  GitBranch,
  Settings,
  Globe,
  MessageSquare
} from "lucide-react";

const AiGenaiTransformationStrategy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section 
        className="pt-32 pb-16 px-6 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Compass className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Strategic Framework</span>
          </div>
          <h1 className="heading-xl mb-6">AI/GenAI Transformation Strategy</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Develop comprehensive end-to-end strategies to successfully scale your AI/GenAI initiatives
          </p>
          <a href="https://calendly.com/kirtikganesan27/30min" target="_blank">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            1:1 Consultation →
          </Button>
          </a>
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
            <p>
              Most of the global business incumbents have embarked on the AI/GenAI transformation journey. Only a few have clarity where they are heading and what they want to do.
            </p>
            <p>
              Most of them deployed GenAI pilots without a scaling strategy. As a result, 90% pilots will not make it to production.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground">
                And those with a scaling strategy normally don't have a comprehensive end-to-end framework.
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
            <p>
              GenAI pilots should be selected with a scaling strategy. Scaling strategy can be developed using the Digital Strategy Framework.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="font-semibold text-foreground mb-3">The Digital Strategy Framework is an end-to-end framework comprising:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Strategy creation</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Strategy execution</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Wanted position</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Strategic priorities</p>
                </div>
              </div>
            </div>

            {/* Framework Image */}
            <div className="mt-6">
              <img 
                src={framework} 
                alt="Digital Strategy Framework" 
                className="w-full rounded-lg border border-border shadow-lg"
              />
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
                <p className="text-sm">6 hours</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Target Audience</p>
                <p className="text-sm">Leaders/Managers at levels L1, L2, L3, L4, strategists, transformation drivers, change agents, program/project managers</p>
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
                <p className="text-sm">Differentiate from competitors with tailored strategies</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Collaboration</h5>
                <p className="text-sm">Learn through ecosystem partnerships</p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
              <h5 className="font-semibold text-foreground mb-2">Introductory Talk</h5>
              <p className="text-sm">30-minute overview + 15 minutes of Q&A • Optional and free of charge</p>
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
              Instructor-led, in-person/virtual, 6 hours, 1-2-1 coaching (1 hour free)
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Digital Transformation Overview</h5>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                  <li>Business areas and technology</li>
                  <li>Digital landscape and disruptions</li>
                  <li>Three types of transformations</li>
                  <li>Customers in digital economy</li>
                  <li>Ecosystems and platforms</li>
                  <li>Role of AI/GenAI in digital transformation</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">AI, Digital Transformation, and Corporate Strategy</h5>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                  <li>6 facts about AI/GenAI every professional must know</li>
                  <li>Difference between AI, ML, DL, and GenAI</li>
                  <li>Types of GenAI content</li>
                  <li>Difference between traditional AI and GenAI</li>
                  <li>Evolution of LLMs</li>
                  <li>Business architecture of GenAI</li>
                  <li>How GPT works</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Map className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Strategy Creation</h5>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                  <li>Evaluating the results of Digital Maturity, AI Maturity, and GenAI Maturity Assessment</li>
                  <li>Situation analysis</li>
                  <li>Learnings from best case studies</li>
                  <li>Preparing a generic DT strategy</li>
                  <li>Preparing a specific AI/GenAI strategy</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Wanted Position and Strategic Priorities</h5>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                  <li>Defining a wanted position</li>
                  <li>Listing the key strategic priorities</li>
                  <li>Learnings from best case studies</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Strategy Execution - 1</h5>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                  <li>Choose transformation type</li>
                  <li>Selecting pilot or GenAI solution (no-pilot) approach</li>
                  <li>Greenfield vs Brownfield strategy</li>
                  <li>Positioning in the GenAI value chain</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Strategy Execution - 2</h5>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                  <li>Business models, business case, use case, and productivity gain</li>
                  <li>Identify the key change areas</li>
                  <li>LLM and vendor selection</li>
                  <li>Mapping adjacent technologies</li>
                  <li>Defining key metrics</li>
                  <li>Continuous monitoring and improvement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coaching with Image */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Users className="w-5 h-5 text-primary" />
              Coaching
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
                <p className="mb-4">In the course, you will be introduced to:</p>
                
                <div className="space-y-3">
                  <div className="bg-muted/30 rounded p-3">
                    <p><strong className="text-primary">Digital Strategy Framework</strong> to set a guideline for end-to-end strategy creation and execution</p>
                  </div>
                  <div className="bg-muted/30 rounded p-3">
                    <p><strong className="text-primary">Assessments</strong> such as digital maturity, AI maturity and GenAI maturity</p>
                  </div>
                  <div className="bg-muted/30 rounded p-3">
                    <p><strong className="text-primary">Situation Analysis</strong> to create strategy using Porter's 5 forces analysis</p>
                  </div>
                  <div className="bg-muted/30 rounded p-3">
                    <p><strong className="text-primary">Critical Steps</strong> for AI/GenAI strategy execution</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h5 className="font-semibold text-foreground mb-3">In the coaching, there will be:</h5>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Commitment contract with the coach</li>
                    <li>Continuous check-ins on strategy creation and execution</li>
                    <li>Problem-solving and behavior building</li>
                    <li>Continuous feedback on the strategy development</li>
                  </ul>
                </div>
              </div>

              {/* Coaching Image */}
              <div className="flex items-center justify-center">
                <img 
                  src={coaching} 
                  alt="Coaching Framework" 
                  className="w-full max-w-md rounded-lg border border-border shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ecosystem with Image */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Network className="w-5 h-5 text-primary" />
              Ecosystem
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
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
              </div>

              {/* Ecosystem Image */}
              <div className="flex items-center justify-center h-full min-h-[300px]">
                <img 
                  src={superEcosystem} 
                  alt="Super Ecosystem" 
                  className="w-full max-w-md rounded-lg border border-border shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructor with Images */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Award className="w-5 h-5 text-primary" />
              Course Instructor
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {/* Left: Amit Photo */}
              <div className="flex justify-center">
                <img 
                  src={amit} 
                  alt="Amit Prabhu" 
                  className="w-full max-w-xs rounded-lg border border-border shadow-lg"
                />
              </div>

              {/* Center: Details and QR Code */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg">A Course By Amit Prabhu</h4>
                <p className="text-sm">
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
                
                {/* QR Code */}
                <div className="flex justify-center pt-4">
                  <img 
                    src={qrCode} 
                    alt="Connect on LinkedIn" 
                    className="w-32 h-32 border border-border rounded"
                  />
                </div>
                <p className="text-center text-sm italic">Connect on LinkedIn</p>
              </div>

              {/* Right: Book */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <img 
                  src={amazon} 
                  alt="Digital Strategy Framework Book" 
                  className="w-full max-w-xs rounded-lg border border-border shadow-lg"
                />
                <div className="text-center">
                  <p className="font-semibold text-foreground mb-1">Based on his book</p>
                  <p className="text-sm text-muted-foreground mb-3">Available on Amazon</p>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.amazon.se/dp/1637425651?ref=cm_sw_r_cp_ud_dp_ZAEJRGGWVDN7BVDP1TQ2_1&ref_=cm_sw_r_cp_ud_dp_ZAEJRGGWVDN7BVDP1TQ2_1&social_share=cm_sw_r_cp_ud_dp_ZAEJRGGWVDN7BVDP1TQ2_1"
                  >
                    <Button variant="outline" size="sm">
                      Order →
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Build Your AI/GenAI Strategy?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our Transformation Strategy course and develop a comprehensive framework to successfully scale your AI initiatives.
            </p>
            <a href="https://calendly.com/kirtikganesan27/30min" target="_blank">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              1:1 Consultation →
            </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AiGenaiTransformationStrategy;