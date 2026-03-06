import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import ReadinessAreas from "@/components/readiness/ReadinessAreas";
import ReadinessRocketFramework from "@/components/readiness/ReadinessRocketFramework";
import ReadinessBook from "@/components/readiness/ReadinessBook";
import ReadinessHero from "@/components/readiness/ReadinessHero";
import RedirectAssessment from "@/components/RedirectAssessment";
import EmpowerReadiness from "@/components/readiness/EmpowerReadiness"
import ReadinessAdoptionStages from "@/components/readiness/ReadinessAdoptionStages"
import ReadinessChallenges from "@/components/readiness/ReadinessChallenges"
import ReadinessContact from "@/components/readiness/ReadinessContact"
import ReadinessProgramFlow from "@/components/readiness/ReadinessProgramFlow"


const Leaders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ReadinessHero />
      <SectionSeparator />
      <ReadinessRocketFramework />
      <ReadinessBook />
      <SectionSeparator />
      <ReadinessAreas />
      <SectionSeparator />
      <RedirectAssessment />
      <SectionSeparator />
      <ReadinessContact />
      <SectionSeparator />
      <Footer />
    </div>
  );
};

export default Leaders;
