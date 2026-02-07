import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import bg from "@/assets/instruction-based-courses/Operational-Readiness/bg.jpg"
import amazon from "@/assets/instruction-based-courses/Operational-Readiness/amazon.webp"
import framework from "@/assets/instruction-based-courses/Operational-Readiness/framework.png"
import amit from "@/assets/instruction-based-courses/Essential-Competencies/amit.png"
import qrCode from "@/assets/instruction-based-courses/Essential-Competencies/qr-code.png"
import superEcosystem from "@/assets/instruction-based-courses/Essential-Competencies/super-ecosystem.jpg"
import coaching from "@/assets/instruction-based-courses/Essential-Competencies/coaching.png"
import {
  Rocket,
  TrendingUp,
  Users,
  Database,
  Cpu,
  Target,
  CheckCircle2,
  Calendar,
  Award,
  Network,
  Zap,
  BarChart3,
  Lightbulb,
  AlertCircle,
} from "lucide-react";

const AiGenaiOperationalReadiness = () => {
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
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Course</span>
          </div>
          <h1 className="heading-xl mb-6">AI/GenAI Operational Readiness</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Implement the Readiness Rocket Framework to successfully scale GenAI
            in your organization
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
              <AlertCircle className="w-5 h-5 text-primary" />
              Problem
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <p>
              Most of the global business incumbents have embarked on the
              AI/GenAI transformation journey.
            </p>
            <p>
              As per a study by BCG, only 10% of them have scaled genAI, whereas
              90% of them are still lagging.
            </p>
            <p>
              This has caused a huge gap between scaling and lagging companies.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground">
                One of the key reasons for this huge gap is a lack of
                operational readiness, i.e most of the enterprises are not
                operationally ready to scale genAI.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Solution Section */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Lightbulb className="w-5 h-5 text-primary" />
              Solution
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-6">
            <p>
              Enterprises should implement the Operational Readiness, a.k.a
              Readiness Rocket Framework.
            </p>

            <div className="bg-muted/50 rounded-lg p-4">
              <p className="font-semibold text-foreground mb-3">
                The Framework comprises:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>4 readiness areas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Boosters</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Launchpad</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Strategy and maturity assessment</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm">
                A convertible pilot or a genAI solution or MVP should be
                developed in parallel with operational readiness.
              </p>
            </div>

            {/* Framework Image */}
            <div className="mt-6 flex justify-center">
              <img 
                src={framework} 
                alt="Readiness Rocket Framework" 
                className="w-full max-w-2xl rounded-lg border border-border shadow-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Readiness Rocket Framework */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Rocket className="w-5 h-5 text-primary" />
              Readiness Rocket Framework
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <p className="mb-4">Digital Leadership Framework</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">
                    Customer Readiness
                  </h5>
                </div>
                <p className="text-sm">
                  Engage and assess customer readiness for AI adoption
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">
                    Technology Readiness
                  </h5>
                </div>
                <p className="text-sm">
                  Evaluate infrastructure and AI capabilities
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">
                    Data Readiness
                  </h5>
                </div>
                <p className="text-sm">
                  Implement data acquisition, preparation, and production
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">
                    People Readiness
                  </h5>
                </div>
                <p className="text-sm">
                  Build structures, governance, and new GenAI roles
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Format */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Calendar className="w-5 h-5 text-primary" />
              Format
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Delivery</p>
                <p className="text-sm">
                  Instructor-driven online or classroom-based
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Duration</p>
                <p className="text-sm">12 hours spanning over 2 days</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">
                  Target Audience
                </p>
                <p className="text-sm">
                  All Leaders/Managers at levels L1, L2, L3 and L4, strategists,
                  transformation drivers, change agents, program/project
                  managers
                </p>
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
                <p className="text-sm">
                  Ensure practical application of competencies at workplace
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">
                  Call-to-Action
                </h5>
                <p className="text-sm">
                  Speed up your organization's AI/GenAI deployment
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">
                  Content Customization
                </h5>
                <p className="text-sm">Differentiate from competitors</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">
                  Collaboration
                </h5>
                <p className="text-sm">Learn through ecosystem</p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
              <h5 className="font-semibold text-foreground mb-2">
                Introductory Talk
              </h5>
              <p className="text-sm">
                30-minute overview + 15 minutes of Q&A • Optional and free of
                charge
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Course Content */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <BarChart3 className="w-5 h-5 text-primary" />
              Content
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 space-y-6">
            <p className="text-sm text-muted-foreground">
              Instructor-led, in-person/virtual, 12 hours, 1-2-1 coaching (1
              hour free)
            </p>

            {/* Day 1 */}
            <div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-2 mb-4 inline-block">
                <h4 className="font-semibold text-primary">DAY 1</h4>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">
                    Scaled Adoption of GenAI
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>KPIs for Scaled Adoption</li>
                    <li>Why will genAI scale?</li>
                    <li>Convertible and Nonconvertible pilots</li>
                    <li>GenAI solution or MVP</li>
                    <li>
                      Dependencies between Operational Readiness, Convertible
                      Pilots, and GenAI solution
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">
                    Introduction to Operational Readiness Framework
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>The need for operational readiness</li>
                    <li>GenAI Maturity Assessment</li>
                    <li>Scaled Adoption Strategy</li>
                    <li>
                      Introduction to boosters, readiness areas, and launchpad
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">
                    Boosters
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>
                      Booster 1 for Readiness Rocket: Assessment and preparation
                    </li>
                    <li>
                      Booster 2 for Readiness Rocket: Assessment and preparation
                    </li>
                    <li>
                      Booster 3 for Readiness Rocket: Assessment and preparation
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">
                    Readiness Area 1: Customer
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Importance of customer engagement</li>
                    <li>Know your VITA score</li>
                    <li>Strategies for customer engagement</li>
                    <li>Customer Readiness Audit</li>
                    <li>High-readiness customers Selection Matrices</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Day 2 */}
            <div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-2 mb-4 inline-block">
                <h4 className="font-semibold text-primary">DAY 2</h4>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">
                    Readiness Area 2: Technology
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Exploring AI/GenAI capabilities</li>
                    <li>Large Language Model Selection</li>
                    <li>Fine Tuning v RAG</li>
                    <li>Evaluating infrastructure</li>
                    <li>Managing technical debt</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">
                    Readiness Area 3: Data
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Choosing the right data strategy</li>
                    <li>Three critical steps to Data Acquisition</li>
                    <li>Three critical steps to Data Preparation</li>
                    <li>Three critical steps to Data Production</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">
                    Readiness Area 4: People
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Need for structures, governance, and frameworks</li>
                    <li>Responsible AI framework</li>
                    <li>Introduction to 12 New GenAI roles</li>
                    <li>Assessing the skills gap</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">
                    Launchpad
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Need for launchpad</li>
                    <li>4 key areas of genAI investments</li>
                    <li>Cultivating the right competencies</li>
                    <li>Taking fast actions</li>
                  </ul>
                </div>
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
                    <p>
                      <strong className="text-primary">
                        Readiness Rocket Framework
                      </strong>{" "}
                      an operational readiness framework for Scaling Generative AI
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded p-3">
                    <p>
                      <strong className="text-primary">Assessments</strong> such as
                      AI maturity, GenAI maturity, AI/GenAI Mindsets, VITA scores
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded p-3">
                    <p>
                      <strong className="text-primary">
                        Implementation of readiness areas
                      </strong>
                      : customer, technology, data, and people
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded p-3">
                    <p>
                      <strong className="text-primary">
                        Setting the foundations
                      </strong>
                      : boosters and launchpad, for readiness rocket
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h5 className="font-semibold text-foreground mb-3">
                    In the coaching, there will be:
                  </h5>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Commitment contract with the Coach</li>
                    <li>
                      Continuous check-ins on implementation of readiness rocket
                      components
                    </li>
                    <li>Problem-solving and behavior building</li>
                    <li>
                      Continuous feedback on the operational readiness development
                    </li>
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
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>
                      An Ecosystem is a cohort where people collaborate to seek and
                      share knowledge, skills, and experiences with each other.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>
                      Collaboration is a powerful and effective learning technique
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>
                      Future of Work will be largely dependent on an individual's
                      ability to work in ecosystems
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>
                      Research shows that an individual learns 3X faster through
                      ecosystems than standalone
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>
                      AI/GenAI Transformation requires diverse skillsets and
                      expertise to be leveraged through ecosystems
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>
                      Ecosystems enable a paradigm shift in the mindset, from being
                      an employee of a firm to an employee of an industry
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-foreground">
                    After completion of the course, participants shall be
                    automatically enrolled in an ecosystem of professionals
                    belonging to different industries and geographical locations.
                  </p>
                </div>
              </div>

              {/* Ecosystem Image */}
              <div className="flex items-center justify-center">
                <img 
                  src={superEcosystem} 
                  alt="Super Ecosystem" 
                  className="w-full max-w-md rounded-lg border border-border shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Instructor with Images */}
        <Card className="mb-8 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Award className="w-5 h-5 text-primary" />
              Course Instructor
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left: Amit Photo */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src={amit} 
                  alt="Amit Prabhu" 
                  className="w-full max-w-[280px] rounded-lg border border-border shadow-lg object-cover"
                />
              </div>

              {/* Center: Details and QR Code */}
              <div className="flex flex-col items-center lg:items-start space-y-4">
                <div className="text-center lg:text-left w-full">
                  <h4 className="font-semibold text-foreground text-lg mb-3">
                    Amit Prabhu
                  </h4>
                  <p className="text-sm mb-4">
                    AI Consultant, Author, Speaker, Business Trainer, Policymaker,
                    Entrepreneur, and Career Coach
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <a
                        href="mailto:amit@amitprabhu.net"
                        className="text-primary underline hover:text-primary/80"
                      >
                        amit@amitprabhu.net
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.amitprabhu.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:text-primary/80"
                      >
                        www.amitprabhu.net
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* QR Code */}
                <div className="flex flex-col items-center pt-4">
                  <img 
                    src={qrCode} 
                    alt="Connect on LinkedIn" 
                    className="w-36 h-36 border border-border rounded mb-2"
                  />
                  <p className="text-center text-sm italic text-muted-foreground">Connect on LinkedIn</p>
                </div>
              </div>

              {/* Right: Book */}
              <div className="flex flex-col items-center justify-start space-y-4">
                <img 
                  src={amazon} 
                  alt="Scaling Generative AI Book" 
                  className="w-full max-w-[280px] rounded-lg border border-border shadow-lg"
                />
                <div className="text-center space-y-2">
                  <p className="font-semibold text-foreground">
                    Based on his book
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available on Amazon
                  </p>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.amazon.com/Scaling-Generative-Operational-Readiness-Enterprises/dp/1637427980"
                  >
                    <Button variant="outline" size="sm" className="mt-2">
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
              Ready to Scale GenAI in Your Organization?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our AI/GenAI Operational Readiness course and implement the
              Readiness Rocket Framework to successfully scale GenAI in your
              enterprise.
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

export default AiGenaiOperationalReadiness;