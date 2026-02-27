import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RedirectAssessment from "@/components/RedirectAssessment";
import ReskillPartner from "@/components/ReskillPartner";
import JourneyFlowchart from "@/components/JourneyFlowchart";
import Fundamentals from "@/components/Fundamentals";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <RedirectAssessment />
      <SectionSeparator />
      <ReskillPartner />
      <SectionSeparator />
      <JourneyFlowchart />
      <SectionSeparator />
      <Fundamentals />
      <SectionSeparator />
      <FAQ />
      <SectionSeparator />
      <Footer />
    </div>
  );
};

export default Index;
