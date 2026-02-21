import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import { 
  EcosystemHero, 
  EcosystemConcept, 
  EcosystemBenefits, 
  EcosystemCTA 
} from "@/components/ecosystem";

const Ecosystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <EcosystemHero />
      <SectionSeparator />
      <EcosystemConcept />
      {/* <SectionSeparator /> */}
      <EcosystemBenefits />
      <SectionSeparator />
      <EcosystemCTA />
      <SectionSeparator />
      <Footer />
    </div>
  );
};

export default Ecosystem;
