import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import LeadersHero from "@/components/leaders/LeadersHero";
import AdoptionStages from "@/components/leaders/AdoptionStages";
import LeaderChallenges from "@/components/leaders/LeaderChallenges";
import EmpowerLeaders from "@/components/leaders/EmpowerLeaders";
import ProgramFlow from "@/components/leaders/ProgramFlow";
import LeadersContact from "@/components/leaders/LeadersContact";

const Leaders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <LeadersHero />
      <SectionSeparator />
      <AdoptionStages />
      <LeaderChallenges />
      <EmpowerLeaders />
      <SectionSeparator />
      <ProgramFlow />
      <SectionSeparator />
      <LeadersContact />
      <SectionSeparator />
      <Footer />
    </div>
  );
};

export default Leaders;
