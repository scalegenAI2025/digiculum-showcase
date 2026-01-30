import { Clock, Users, Award, Lightbulb, Target, Settings, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const instructorCourses = [
  {
    title: "Essential Competencies for AI/GenAI Leaders",
    subtitle: "Cultivating AI/GenAI Mindset",
    duration: "4 hours",
    icon: Lightbulb,
    description: "Develop the essential mindset and competencies needed to lead AI initiatives in your organization.",
    highlights: ["Leadership mindset", "Strategic thinking", "AI governance"]
  },
  {
    title: "AI/GenAI Transformation Strategy",
    subtitle: "AI/GenAI Operational Readiness",
    duration: "22 hours",
    icon: Target,
    description: "Master the strategic framework for successful AI transformation and operational implementation.",
    highlights: ["Transformation roadmap", "Change management", "Implementation strategies"]
  },
  {
    title: "AI Operations & Scaling",
    subtitle: "Enterprise AI Deployment",
    duration: "16 hours",
    icon: Settings,
    description: "Learn to operationalize and scale AI solutions across your enterprise infrastructure.",
    highlights: ["MLOps fundamentals", "Scaling strategies", "Production deployment"]
  },
  {
    title: "AI Ethics & Governance",
    subtitle: "Responsible AI Leadership",
    duration: "8 hours",
    icon: Brain,
    description: "Understand ethical considerations and governance frameworks for responsible AI adoption.",
    highlights: ["Ethical frameworks", "Risk management", "Compliance standards"]
  }
];

const InstructorLedCourses = () => {
  return (
    <section id="instructor-led" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Live Training</span>
          </div>
          
          <h2 className="heading-lg mb-4">Instructor-led Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive, expert-led training sessions designed for professionals seeking comprehensive AI education
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {instructorCourses.map((course, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <course.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-1">{course.title}</CardTitle>
                <p className="text-primary text-sm font-medium">{course.subtitle}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-secondary/50 text-foreground/70 px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Certificate included</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorLedCourses;
