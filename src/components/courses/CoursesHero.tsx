// import { BookOpen } from "lucide-react";
// import coursesBg from "@/assets/courses.png";

// const CoursesHero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-24 pb-8">
      
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${coursesBg})` }}
//       />

//       {/* Dark + Pink Overlay - matching IndividualsHero */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-pink-900/40" />

//       <div className="relative z-10 container mx-auto px-6">
//         <div className="text-center max-w-4xl mx-auto text-white">

//           <h1 className="heading-xl mb-6">
//             Will you allow AI to{" "}
//             <span className="text-accent-gradient">take away your job?</span>
//           </h1>

//           <p className="text-xl text-white/80 mb-8">
//             Reskill now with our comprehensive AI courses designed for professionals at every level
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center">
//             <a href="#instructor-led" className="btn-primary">
//               Instructor-led Courses
//             </a>
//             <a href="#self-paced" className="btn-primary">
//               Self-paced Courses
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursesHero;

import { BookOpen } from "lucide-react";
import coursesBg from "@/assets/courses.png";

const CoursesHero = () => {
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
