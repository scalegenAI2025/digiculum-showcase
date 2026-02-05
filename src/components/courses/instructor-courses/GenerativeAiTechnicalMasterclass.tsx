import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Users, 
  Code, 
  Zap, 
  BookOpen, 
  Target,
  CheckCircle2,
  Calendar,
  Lightbulb,
  Network,
  Award,
  Wrench,
  Brain,
  Shield,
  Rocket,
  GitBranch,
  Settings,
  AlertTriangle,
  Layers
} from "lucide-react";

const GenerativeAiTechnicalMasterclass = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Technical Masterclass</span>
          </div>
          <h1 className="heading-xl mb-6">Generative AI Technical Masterclass</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Master complex GenAI concepts with simplified, applicable knowledge for technical professionals
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
              GenAI is a digital transformation technology that can enable business transformation. Based on transformer architecture, an evolution of neural networks — the foundation of deep learning.
            </p>
            <p>
              A wealth of GenAI content exists: research papers, articles, blogs, videos, and social media. These materials are often filled with technical jargon and complex visuals intended for researchers.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground">
                This makes it difficult for professionals and students to fully grasp the concepts.
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
              Technical reskilling is critical to leading AI/GenAI transformation. This masterclass simplifies complex GenAI concepts, delivering high-quality applicable knowledge.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="font-semibold text-foreground mb-2">GenAI 2.0 Coverage:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Scaling strategies</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Operational readiness</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Multimodal capabilities</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Advanced LLM features</p>
                </div>
              </div>
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
                <p className="text-sm">Instructor-led: online or in-class options</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Duration</p>
                <p className="text-sm">18 hours</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="font-semibold text-foreground mb-2">Target Audience</p>
                <p className="text-sm">Solution architects, developers, project managers, consultants, test engineers, system administrators</p>
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
                <p className="text-sm">Ensures workplace application of skills</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Call-to-Action</h5>
                <p className="text-sm">Accelerates GenAI deployment in organizations</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Content Customization</h5>
                <p className="text-sm">Stand out in your domain with tailored content</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Collaboration</h5>
                <p className="text-sm">Through partnerships and ecosystems</p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
              <h5 className="font-semibold text-foreground mb-2">Introductory Talk</h5>
              <p className="text-sm">30-minute overview + 15-minute Q&A • Optional and free of charge</p>
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
          <CardContent className="text-foreground/80 space-y-4">
            <p className="text-sm text-muted-foreground mb-6">
              Instructor-led, in-person/virtual, 18 hours, 1-2-1 coaching (1 hour free)
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Generative AI Primer</h5>
                </div>
                <p className="text-sm">A quick recap of the prerequisite videos on generative AI</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Prompt Engineering</h5>
                </div>
                <p className="text-sm">Learn the techniques of crafting effective prompts</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Evolution to Transformer Architecture</h5>
                </div>
                <p className="text-sm">Evolution from probabilistic/statistical → neural networks → transformer based</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Key Technical Concepts</h5>
                </div>
                <p className="text-sm">Important concepts like learning algorithms, output evals, machine learning principles etc.</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Transformer Architecture</h5>
                </div>
                <p className="text-sm">Strong focus on self-attention technique at the heart of transformer architectures</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Fine Tuning LLMs</h5>
                </div>
                <p className="text-sm">Introduction to different types of LLM Fine Tuning techniques</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">LLM Model Selection</h5>
                </div>
                <p className="text-sm">Proven best practices of selecting an LLM model based on business requirements</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Generative AI Deployment</h5>
                </div>
                <p className="text-sm">Know more about different data pipelines, LLMOps, and MLOps</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Agent-driven Workflows</h5>
                </div>
                <p className="text-sm">Key capabilities of agents and how they can add efficiencies in processes and workflows</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Retrieval-Augmented Generation (RAG)</h5>
                </div>
                <p className="text-sm">Need for RAGs, RAG architectures, different RAG techniques</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Biases and Hallucinations</h5>
                </div>
                <p className="text-sm">Understand the causes, detection, and mitigation of biases and hallucinations</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">GenAI 2.0</h5>
                </div>
                <p className="text-sm">Scaling generative AI, operational readiness framework, advanced LLMs, technical ecosystem</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Responsible AI for Techies</h5>
                </div>
                <p className="text-sm">How technical professionals can ensure compliance with Responsible AI policies</p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-foreground">Pilot Selection</h5>
                </div>
                <p className="text-sm">Proven guidelines and best practices for selecting a scalable GenAI pilot</p>
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
          <CardContent className="text-foreground/80 space-y-6">
            <p className="mb-4">Three types of technical professionals would enroll in the course:</p>
            
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <span className="font-bold text-primary">A</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-foreground mb-2">Type A: Same role, same job description, No AI/GenAI</h5>
                    <p className="text-sm">Coaching will include transition to Type B or Type C, based on participant's interest</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <span className="font-bold text-primary">B</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-foreground mb-2">Type B: Same role, modified job description, Partial AI/GenAI</h5>
                    <p className="text-sm">Coaching will include dealing with change in job description</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <span className="font-bold text-primary">C</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-foreground mb-2">Type C: New role, new job description, Full AI/GenAI</h5>
                    <p className="text-sm">Coaching will include bringing innovations and productivity into daily jobs</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div>
              <h5 className="font-semibold text-foreground mb-4">The coaching format comprises:</h5>
              <div className="space-y-3">
                <div className="bg-muted/30 rounded p-3">
                  <p><strong className="text-primary">Commitment contract</strong> with the coach</p>
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <p><strong className="text-primary">Continuous check-ins</strong> on implementation of the technical concepts</p>
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <p><strong className="text-primary">Problem-solving</strong> and behavior building</p>
                </div>
                <div className="bg-muted/30 rounded p-3">
                  <p><strong className="text-primary">Continuous feedback</strong> on the technical competence development</p>
                </div>
              </div>
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
                <Button variant="outline" size="sm">
                  Order →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Master Generative AI?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our Technical Masterclass and gain the skills needed to drive GenAI transformation in your organization.
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

export default GenerativeAiTechnicalMasterclass;