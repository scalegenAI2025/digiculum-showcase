const FundamentalRoleVsJob = () => {
  return (
    <div className="mb-20">
      <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center md:text-left">3. AI Role v AI Job</h3>
      
      <div className="diagram-container max-w-5xl mx-auto">
        {/* Main Diagram */}
        <div className="relative">
          {/* Mobile/Tablet View */}
          <div className="lg:hidden space-y-6">
            {/* Role Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-primary text-xs md:text-sm max-w-[100px]">
                  <span className="text-primary font-medium">AI Engineer</span> is a broad generic role defined at industry level
                </p>
                <div className="flex-1 flex justify-center gap-2 md:gap-3 px-2">
                  <div className="diagram-box px-3 md:px-5 py-2 text-xs md:text-sm">Role 1</div>
                  <div className="diagram-box px-3 md:px-5 py-2 text-xs md:text-sm">Role 2</div>
                  <span className="self-center text-foreground/50">...</span>
                  <div className="diagram-box px-3 md:px-5 py-2 text-xs md:text-sm">Role N</div>
                </div>
                <p className="text-foreground/70 text-xs max-w-[70px] text-right">
                  Role defined at industry level
                </p>
              </div>
            </div>

            {/* Connection Lines - SVG matching reference */}
            <div className="flex justify-center py-2">
              <svg width="100%" height="80" viewBox="0 0 300 80" preserveAspectRatio="xMidYMid meet" className="text-foreground/50">
                {/* Role 1 to Job 1 and Job 2 */}
                <line x1="55" y1="0" x2="55" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="55" y1="0" x2="150" y2="80" stroke="currentColor" strokeWidth="1" />
                {/* Role 2 to Job 2 */}
                <line x1="150" y1="0" x2="150" y2="80" stroke="currentColor" strokeWidth="1" />
                {/* Role N to Job 2 and Job N */}
                <line x1="245" y1="0" x2="150" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="245" y1="0" x2="245" y2="80" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>

            {/* Center annotation */}
            <p className="text-center text-foreground/70 text-xs italic">
              A job can be derived from single or multiple roles
            </p>

            {/* Job Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-[100px]" />
                <div className="flex-1 flex justify-center gap-2 md:gap-3 px-2">
                  <div className="diagram-box px-3 md:px-5 py-2 text-xs md:text-sm">Job 1</div>
                  <div className="diagram-box px-3 md:px-5 py-2 text-xs md:text-sm">Job 2</div>
                  <span className="self-center text-foreground/50">...</span>
                  <div className="diagram-box px-3 md:px-5 py-2 text-xs md:text-sm">Job N</div>
                </div>
                <p className="text-foreground/70 text-xs max-w-[70px] text-right">
                  Job defined at company level
                </p>
              </div>
            </div>

            {/* Examples */}
            <div className="grid grid-cols-2 gap-4 text-center text-xs md:text-sm mt-6">
              <div>
                <p className="text-foreground/70">AI Engineer role is customized to</p>
                <p><span className="text-primary font-medium">AI/ML Engineer</span></p>
                <p className="text-foreground/70">job in Company A</p>
              </div>
              <div>
                <p className="text-foreground/70">AI Engineer role is customized to</p>
                <p><span className="text-primary font-medium">Agentic AI</span> Engineer</p>
                <p className="text-foreground/70">job in Company B</p>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between">
              {/* Left annotation */}
              <p className="text-primary text-sm max-w-[120px]">
                <span className="text-primary font-medium">AI Engineer</span> is a broad generic role defined at industry level
              </p>

              {/* Center diagram */}
              <div className="flex-1 px-8">
                {/* Roles row */}
                <div className="flex justify-center gap-8 mb-4">
                  <div className="diagram-box px-8 py-3">Role 1</div>
                  <div className="diagram-box px-8 py-3">Role 2</div>
                  <span className="self-center text-foreground/50 text-xl">...</span>
                  <div className="diagram-box px-8 py-3">Role N</div>
                </div>

                {/* Connection Lines - matching reference image exactly */}
                <div className="flex justify-center py-2">
                  <svg width="500" height="80" viewBox="0 0 500 80" className="text-foreground/50">
                    {/* Role 1 (x=80) connects to Job 1 (x=80) and Job 2 (x=200) */}
                    <line x1="80" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                    <line x1="80" y1="0" x2="200" y2="80" stroke="currentColor" strokeWidth="1" />
                    {/* Role 2 (x=200) connects to Job 2 (x=200) */}
                    <line x1="200" y1="0" x2="200" y2="80" stroke="currentColor" strokeWidth="1" />
                    {/* Role N (x=420) connects to Job 2 (x=200) and Job N (x=420) */}
                    <line x1="420" y1="0" x2="200" y2="80" stroke="currentColor" strokeWidth="1" />
                    <line x1="420" y1="0" x2="420" y2="80" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                {/* Center annotation */}
                <p className="text-center text-foreground/70 text-sm italic mb-2">
                  A job can be derived from single or multiple roles
                </p>

                {/* Jobs row */}
                <div className="flex justify-center gap-8">
                  <div className="diagram-box px-8 py-3">Job 1</div>
                  <div className="diagram-box px-8 py-3">Job 2</div>
                  <span className="self-center text-foreground/50 text-xl">...</span>
                  <div className="diagram-box px-8 py-3">Job N</div>
                </div>

                {/* Examples */}
                <div className="flex justify-center gap-16 mt-6 text-sm">
                  <div className="text-center">
                    <p className="text-foreground/70">AI Engineer role is customized to</p>
                    <p><span className="text-primary font-medium">AI/ML Engineer</span></p>
                    <p className="text-foreground/70">job in Company A</p>
                  </div>
                  <div className="text-center">
                    <p className="text-foreground/70">AI Engineer role is customized to</p>
                    <p><span className="text-primary font-medium">Agentic AI</span> Engineer</p>
                    <p className="text-foreground/70">job in Company B</p>
                  </div>
                </div>
              </div>

              {/* Right annotations */}
              <div className="text-right text-sm max-w-[100px]">
                <p className="text-foreground/70 mb-16">Role defined at industry level</p>
                <p className="text-foreground/70">Job defined at company level</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundamentalRoleVsJob;
