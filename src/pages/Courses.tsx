import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import { CoursesHero, InstructorLedCourses, SelfPacedCourses } from "@/components/courses";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CoursesHero />
      <SectionSeparator />
      <InstructorLedCourses />
      <SectionSeparator />
      <SelfPacedCourses />
      <SectionSeparator />
      <Footer />
    </div>
  );
};

export default Courses;
