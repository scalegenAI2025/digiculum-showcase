import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import {
  IndividualsHero,
  GettingStarted,
  WhoIsAIPractitioner,
  KnowHackBuild,
  BootcampFAQ,
  AISpecialization,
  WhatYouWillLearn,
  HackVITA,
  BuildProject,
  ToolsUsed,
  FinalCTA,
} from "@/components/individuals";

const Individuals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <IndividualsHero />
      <SectionSeparator />
      <GettingStarted />
      <SectionSeparator />
      <WhoIsAIPractitioner />
      <SectionSeparator />
      <KnowHackBuild />
      <WhatYouWillLearn />
      <HackVITA />
      <BuildProject />
      <ToolsUsed />
      <SectionSeparator />
      <AISpecialization />
      <SectionSeparator />
      <FinalCTA />
      <SectionSeparator />
      <Footer />
    </div>
  );
};

export default Individuals;
