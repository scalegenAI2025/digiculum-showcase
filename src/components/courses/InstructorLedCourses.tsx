import leadershipBg from "@/assets/instruction-based-courses/leadership.png";
import techmasterclassBg from "@/assets/instruction-based-courses/tech_masterclass.png";
import strategyBg from "@/assets/instruction-based-courses/strategy.png";
import mindsetBg from "@/assets/instruction-based-courses/Mindset.png";
import opsreadinessBg from "@/assets/instruction-based-courses/ops_readiness.png"

const instructorCourses = [
  {
    title: "Essential Competencies for AI/GenAI Leaders",
    audience: "For executives and middle managers",
    duration: "12 hours",
    image: leadershipBg,
  },
  {
    title: "Generative AI Technical Masterclass",
    audience: "For technical professionals",
    duration: "18 hours",
    image: techmasterclassBg,
  },
  {
    title: "AI/GenAI Transformation Strategy",
    audience: "For executives and middle managers",
    duration: "6 hours",
    image: strategyBg,
  },
  {
    title: "Cultivating AI/GenAI Mindset",
    audience: "For executives, managers, and early career professionals",
    duration: "4 hours",
    image: mindsetBg,
  },
  {
    title: "AI/GenAI Operational Readiness",
    audience: "For executives and middle managers",
    duration: "12 hours",
    image: opsreadinessBg,
  },
];

const InstructorLedCourses = () => {
  return (
    <section id="instructor-led" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg mb-10 text-white">
          Instructor-led Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {instructorCourses.map((course, index) => (
            <div
              key={index}
              className="relative h-[380px] rounded-xl overflow-hidden border border-white/10 
                         hover:border-white/30 transition-all duration-300 group"
              style={{
                backgroundImage: `url(${course.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t 
                              from-black/90 via-black/60 to-black/20" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {course.title}
                </h3>

                <p className="text-sm text-white/70 mb-3">
                  {course.audience}
                </p>

                <div className="text-sm text-white/70 mb-4">
                  {course.duration}
                </div>

                <button
                  className="w-fit px-5 py-2 rounded-full
                             text-sm btn-primary"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorLedCourses;
