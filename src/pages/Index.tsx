import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReskillPartner from "@/components/ReskillPartner";
import JourneyFlowchart from "@/components/JourneyFlowchart";
import Fundamentals from "@/components/Fundamentals";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ReskillPartner />
      <JourneyFlowchart />
      <Fundamentals />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
