const FundamentalSkillVsCompetence = () => {
  return (
    <div className="mb-20">
      <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center md:text-left">4. AI Skill v AI Competence</h3>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Skill */}
          <div>
            <p className="text-center mb-6">
              <span className="text-primary font-medium">Skill</span>{" "}
              <span className="text-foreground/70">implies specific ability to perform tasks</span>
            </p>
            
            {/* Skill Diagram */}
            <div className="flex flex-col items-center">
              {/* Roles row */}
              <div className="flex justify-center gap-2 md:gap-4 mb-2">
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Role 1</div>
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Role 2</div>
                <span className="self-center text-foreground/50">...</span>
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Role N</div>
              </div>

              {/* Connection Lines */}
              <svg width="280" height="60" viewBox="0 0 280 60" className="text-foreground/50 my-2">
                {/* Cross-connections showing many-to-many relationship */}
                <line x1="50" y1="0" x2="50" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="0" x2="140" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="0" x2="230" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="140" y1="0" x2="50" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="140" y1="0" x2="140" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="140" y1="0" x2="230" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="230" y1="0" x2="50" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="230" y1="0" x2="140" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="230" y1="0" x2="230" y2="60" stroke="currentColor" strokeWidth="1" />
              </svg>

              {/* Skills row */}
              <div className="flex justify-center gap-2 md:gap-4 mt-2">
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Skill 1</div>
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Skill 2</div>
                <span className="self-center text-foreground/50">...</span>
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Skill N</div>
              </div>
            </div>

            {/* Example */}
            <p className="text-center text-foreground/70 text-xs md:text-sm mt-6">
              For an AI engineer role, <span className="text-primary">python</span>, <span className="text-primary">FastAPI</span>, and <span className="text-primary">n8n</span> are skills.
            </p>
          </div>

          {/* Right Side - Competence */}
          <div>
            <p className="text-center mb-6">
              <span className="text-primary font-medium">Competence</span>{" "}
              <span className="text-foreground/70">implies proficiency in applying skills through experience and knowledge</span>
            </p>
            
            {/* Competence Diagram - 3 layers */}
            <div className="flex flex-col items-center">
              {/* Jobs row */}
              <div className="flex justify-center gap-2 md:gap-4 mb-2">
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Job 1</div>
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Job 2</div>
                <span className="self-center text-foreground/50">...</span>
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Job N</div>
              </div>

              {/* Connection Lines - Jobs to Competence */}
              <svg width="280" height="40" viewBox="0 0 280 40" className="text-foreground/50 my-1">
                <line x1="50" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="0" x2="140" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="140" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="140" y1="0" x2="140" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="140" y1="0" x2="230" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="230" y1="0" x2="140" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="230" y1="0" x2="230" y2="40" stroke="currentColor" strokeWidth="1" />
              </svg>

              {/* Competence row */}
              <div className="flex justify-center gap-2 md:gap-4 my-2">
                <div className="diagram-box px-2 md:px-4 py-2 text-xs md:text-sm border-primary/50">Competence 1</div>
                <div className="diagram-box px-2 md:px-4 py-2 text-xs md:text-sm border-primary/50">Competence 2</div>
                <span className="self-center text-foreground/50">...</span>
                <div className="diagram-box px-2 md:px-4 py-2 text-xs md:text-sm border-primary/50">Competence N</div>
              </div>

              {/* Connection Lines - Competence to Skills */}
              <svg width="280" height="40" viewBox="0 0 280 40" className="text-foreground/50 my-1">
                <line x1="50" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="0" x2="140" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="140" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="140" y1="0" x2="140" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="140" y1="0" x2="230" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="230" y1="0" x2="140" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="230" y1="0" x2="230" y2="40" stroke="currentColor" strokeWidth="1" />
              </svg>

              {/* Skills row */}
              <div className="flex justify-center gap-2 md:gap-4 mt-2">
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Skill 1</div>
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Skill 2</div>
                <span className="self-center text-foreground/50">...</span>
                <div className="diagram-box px-3 md:px-6 py-2 text-xs md:text-sm">Skill N</div>
              </div>
            </div>

            {/* Example */}
            <p className="text-center text-foreground/70 text-xs md:text-sm mt-6">
              An AI engineer job in company A might require advanced competence in python with 5+ years of experience. Whereas company B might require basic competence in python with less than 1 year of experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundamentalSkillVsCompetence;
