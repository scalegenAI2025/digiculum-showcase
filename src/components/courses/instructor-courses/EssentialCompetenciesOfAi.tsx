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
  Heart, 
  BarChart3, 
  Rocket,
  CheckCircle2,
  Calendar,
  Target,
  Lightbulb,
  Network,
  Award
} from "lucide-react";
import amit from '@/assets/instruction-based-courses/Essential-Competencies/amit.png'
import bg from '@/assets/instruction-based-courses/Essential-Competencies/bg.jpg'
import amazon from '@/assets/instruction-based-courses/Essential-Competencies/amazon.webp'
import coaching from '@/assets/instruction-based-courses/Essential-Competencies/coaching.png'
import framework from '@/assets/instruction-based-courses/Essential-Competencies/framework.png'
import qrCode from '@/assets/instruction-based-courses/Essential-Competencies/qr-code.png'
import superEcosystem from '@/assets/instruction-based-courses/Essential-Competencies/super-ecosystem.jpg'

const EssentialCompetenciesOfAi = () => {
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
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Digital Leadership Course</span>
          </div>
          <h1 className="heading-xl mb-6">Essential Competencies for AI/GenAI Leaders</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Transform your leadership approach to successfully drive AI transformation in the digital era
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
            <p>
              In the digital era of AI/GenAI, customer experience, industry dynamics, business models, competence requirements, and project parameters are constantly changing.
            </p>
            <p>
              But the leadership required to drive these changes has not changed much. Most leaders still use the pre-digital style of leadership to drive risky and uncertain AI transformation projects.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground">
                This results in slow adoption or even failure of AI transformation initiatives.
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
          <CardContent className="text-foreground/80 space-y-6">
            <p>
              To drive AI transformation successfully, a digital leader must demonstrate the following four essential behaviors:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Learning new skills</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Connecting with people</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Leveraging data</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Delivering results</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div>
              <h4 className="font-semibold text-foreground mb-4 text-lg">Four Key Competencies</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h5 className="font-semibold text-foreground">Growth Mindset</h5>
                  </div>
                  <p className="text-sm">Cultivate readiness for continuous learning and adaptation</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-primary" />
                    <h5 className="font-semibold text-foreground">Empathy</h5>
                  </div>
                  <p className="text-sm">Build stronger connections and empower your team</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <h5 className="font-semibold text-foreground">Informed Decision-Making</h5>
                  </div>
                  <p className="text-sm">Leverage data for strategic choices</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <h5 className="font-semibold text-foreground">Fast Execution</h5>
                  </div>
                  <p className="text-sm">Drive rapid implementation and scaling</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground">
                The Digital Leadership Framework provides step-by-step guidelines to cultivate these competencies.
              </p>
            </div>

            {/* Framework Image */}
            <div className="mt-6">
              <img 
                src={framework} 
                alt="Digital Leadership Framework" 
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
                <p className="text-sm">Instructor-driven online or classroom based</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Duration</p>
                <p className="text-sm">12 hours spanning over 2 days</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Target Audience</p>
                <p className="text-sm">Leaders/Managers at levels L1, L2, L3, and L4</p>
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
              Instructor-led, in-person/virtual, 12 hours, 1-2-1 coaching (1 hour free)
            </p>

            {/* Day 1 */}
            <div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-2 mb-4 inline-block">
                <h4 className="font-semibold text-primary">DAY 1</h4>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">Need for AI/GenAI Leadership</h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Why are business incumbents struggling to adopt GenAI?</li>
                    <li>Pre-digital vs Digital style of leadership</li>
                    <li>6 facts about AI/GenAI every leader must know</li>
                    <li>Difference between AI, ML, DL, and GenAI</li>
                    <li>Types of GenAI content</li>
                    <li>Difference between traditional AI and GenAI</li>
                    <li>Evolution of LLMs</li>
                    <li>Business architecture of GenAI</li>
                    <li>How GPT works</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">Developing a Leadership Brand</h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>6 different styles of leadership</li>
                    <li>24 AI-conducive behaviours</li>
                    <li>Assessing the AI needs of your organization</li>
                    <li>Crafting a leadership brand statement</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">Competency #1: Growth Mindset</h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Anatomy of growth mindset</li>
                    <li>How a growth mindset drives learning</li>
                    <li>Reskilling for 12 new AI/GenAI job roles</li>
                    <li>Cultivating a growth mindset</li>
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
                  <h5 className="font-semibold text-foreground mb-3">Competency #2: Empathy</h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Empathy framework: Think-Feel-Will Analysis</li>
                    <li>How empathy drives empowerment</li>
                    <li>Using empathy for team building, stakeholder management and influencing, networking, mentoring, and reverse mentoring</li>
                    <li>Implementing a 12-week empathy program</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">Competency #3: Informed Decision-Making</h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Avoiding bias traps</li>
                    <li>Data driven Decision-making model</li>
                    <li>Assessing the right data</li>
                    <li>Tackling the most challenging decision: Should we invest in AI/GenAI?</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold text-foreground mb-3">Competency #4: Fast Execution</h5>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>The need for speed</li>
                    <li>Managing uncertainties using the Act-Learn-Build model</li>
                    <li>7 key actions to be taken by AI/GenAI Leaders</li>
                    <li>Scaling GenAI using the Readiness Rocket Framework</li>
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
                    <p><strong className="text-primary">Growth Mindset Cultivation Framework</strong> to ensure readiness to reskilling for 12 new AI/GenAI job roles</p>
                  </div>
                  <div className="bg-muted/30 rounded p-3">
                    <p><strong className="text-primary">12-Week Empathy Program</strong> for reinforcing connections with key AI stakeholders</p>
                  </div>
                  <div className="bg-muted/30 rounded p-3">
                    <p><strong className="text-primary">Informed Decision-Making Framework</strong> for identifying AI/GenAI investment areas</p>
                  </div>
                  <div className="bg-muted/30 rounded p-3">
                    <p><strong className="text-primary">Fast Execution and Rocket Readiness Framework</strong> with 7 important scaling actions</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h5 className="font-semibold text-foreground mb-3">In the coaching, there will be:</h5>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Commitment contract with the coach</li>
                    <li>Continuous check-ins on implementation of the four competencies</li>
                    <li>Problem-solving and behavior building</li>
                    <li>Continuous feedback on personal development</li>
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
              <div className="flex justify-center items-center">
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
                  alt="Digital Leadership Framework Book" 
                  className="w-full max-w-xs rounded-lg border border-border shadow-lg"
                />
                <div className="text-center">
                  <p className="font-semibold text-foreground mb-1">Based on his book</p>
                  <p className="text-sm text-muted-foreground mb-3">Available on Amazon</p>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.amazon.com/dp/B0CT4J7H1D?ref=cm_sw_r_ffobk_cp_ud_dp_SN58ATAJN43WRWFFBSQX&ref_=cm_sw_r_ffobk_cp_ud_dp_SN58ATAJN43WRWFFBSQX&social_share=cm_sw_r_ffobk_cp_ud_dp_SN58ATAJN43WRWFFBSQX&bestFormat=true&csmig=1"
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
              Ready to Transform Your Leadership?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our Digital Leadership course and develop the essential competencies needed to drive successful AI transformation in your organization.
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

export default EssentialCompetenciesOfAi;