import { BookOpen } from "lucide-react";
import coursesBg from "@/assets/courses.png";

const CoursesHero = () => {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${coursesBg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
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
            <a href="#self-paced" className="btn-primary">
              Self-paced Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
