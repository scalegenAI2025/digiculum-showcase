import { BookOpen } from "lucide-react";

const CoursesHero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">11 Courses Available</span>
          </div>
          
          <h1 className="heading-xl mb-6">
            Will you allow AI to{" "}
            <span className="text-accent-gradient">take away your job?</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Reskill now with our comprehensive AI courses designed for professionals at every level
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#instructor-led" className="btn-primary">
              Instructor-led Courses
            </a>
            <a href="#self-paced" className="btn-outline">
              Self-paced Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
