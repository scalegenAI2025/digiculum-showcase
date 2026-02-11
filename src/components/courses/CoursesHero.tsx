import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import coursesBg from "@/assets/courses.png";

const CoursesHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-20 pt-24 pb-8">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coursesBg})` }}
      />

      {/* Dark + Pink Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-pink-900/40" />

      {/* Content */}
      <div className="relative z-10 w-full pl-6 md:pl-16 lg:pl-24">
        <div className="max-w-3xl text-white">

          <h1 className="heading-xl mb-6 text-white">
            Will you allow{" "}
            <span className="text-accent-gradient">AI</span>{" "}
            to take away your job?
          </h1>

          <p className="text-xl text-white/80 mb-8">
            Reskill now with our comprehensive AI courses designed for professionals at every level
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#instructor-led">
              <Button
                size={isMobile ? "sm" : "lg"}
                className={`bg-primary hover:bg-primary/90 ${
                  !isMobile ? "text-base px-8 py-6" : ""
                }`}
              >
                Instructor-led Courses
              </Button>
            </a>
            <a href="#self-paced">
              <Button
                size={isMobile ? "sm" : "lg"}
                className={`bg-primary hover:bg-primary/90 ${
                  !isMobile ? "text-base px-8 py-6" : ""
                }`}
              >
                Self-paced Courses
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;