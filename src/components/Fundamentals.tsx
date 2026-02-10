import FundamentalTypesOfAI from "./fundamentals/FundamentalTypesOfAI";
import FundamentalAgentsVsBots from "./fundamentals/FundamentalAgentsVsBots";
import FundamentalRoleVsJob from "./fundamentals/FundamentalRoleVsJob";
import FundamentalSkillVsCompetence from "./fundamentals/FundamentalSkillVsCompetence";
import FundamentalUpskillVsReskill from "./fundamentals/FundamentalUpskillVsReskill";

const Fundamentals = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="fundamentals">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Let us get on same page</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-sm md:text-base">
            AI terminology is not yet standardized, and there's no universal agreement on many
            definitions. As a result, people often use many terms interchangeably. To avoid
            confusion, we'll first clarify five essential fundamentals.
          </p>
        </div>

        <FundamentalTypesOfAI />
        <FundamentalAgentsVsBots />
        <FundamentalRoleVsJob />
        <FundamentalSkillVsCompetence />
        <FundamentalUpskillVsReskill />
      </div>
    </section>
  );
};

export default Fundamentals;
