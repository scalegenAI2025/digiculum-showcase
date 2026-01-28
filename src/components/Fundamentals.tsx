const Fundamentals = () => {
  return (
    <section className="py-24 bg-background" id="fundamentals">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Let us get on same page</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            AI terminology is not yet standardized, and there's no universal agreement on many
            definitions. As a result, people often use many terms interchangeably. To avoid
            confusion, we'll first clarify five essential fundamentals.
          </p>
        </div>

        {/* Fundamental 1: Types of AI */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">
            1. Traditional AI v Generative AI v Agentic AI
          </h3>
          <p className="text-center text-primary mb-6">
            <span className="text-primary font-medium">Core Capabilities</span>{" "}
            <span className="text-foreground/70 italic">of each AI</span>
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Traditional AI */}
            <div className="text-center">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="diagram-box">Pattern Recognition</div>
                <div className="diagram-box">Prediction</div>
                <div className="diagram-box">Classification</div>
                <div className="diagram-box">Facial Recognition</div>
                <div className="diagram-box col-span-2">Text to Speech / Speech to Text</div>
                <div className="diagram-box">Personalization</div>
              </div>
              <h4 className="font-bold text-lg">Traditional AI</h4>
            </div>

            {/* Generative AI */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="diagram-box px-12 py-8">Creation</div>
              </div>
              <h4 className="font-bold text-lg">Generative AI</h4>
            </div>

            {/* Agentic AI */}
            <div className="text-center">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="diagram-box">Autonomy</div>
                <div className="diagram-box">Independent Decision-making</div>
                <div className="diagram-box">Environment Sensing</div>
                <div className="diagram-box">Dynamic Adaptation</div>
                <div className="diagram-box col-span-2">Proactive Learning</div>
              </div>
              <h4 className="font-bold text-lg">Agentic AI</h4>
            </div>
          </div>
        </div>

        {/* Fundamental 2: Agents v Bots */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">2. Agents v Bots</h3>

          <div className="max-w-5xl mx-auto">
            {/* Flow Diagram */}
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                {/* Blue Zone Header */}
                <div className="text-center mb-4">
                  <span className="font-semibold">Blue Zone</span>
                </div>

                {/* Top outcomes */}
                <div className="grid grid-cols-5 gap-4 text-center text-sm mb-2">
                  <div>Goal and it auto-performs the tasks</div>
                  <div>Can figure out path A to C</div>
                  <div>Can auto-detect it</div>
                  <div>Can auto-adjust the workflow</div>
                  <div>Yes</div>
                </div>

                {/* Arrows up */}
                <div className="grid grid-cols-5 gap-4 text-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex justify-center">
                      <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-foreground/50">
                        <path d="M10 30V5M10 5L3 12M10 5L17 12" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Dashed line */}
                <div className="border-t-2 border-dashed border-foreground/30 mb-4" />

                {/* Agent v Bot Test row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary font-bold">
                    Agent<br />v<br />Bot<br />Test
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Start</span>
                    <Arrow />
                  </div>
                  <div className="flex-1 grid grid-cols-5 gap-4">
                    <div className="text-center text-sm">
                      <p className="text-primary italic text-xs">(Autonomy Check)</p>
                      <p>Do you provide system</p>
                    </div>
                    <div className="text-center text-sm">
                      <p className="text-primary italic text-xs">(Independent Decision-making Check)</p>
                      <p>If the path from A to B breaks, your system</p>
                    </div>
                    <div className="text-center text-sm">
                      <p className="text-primary italic text-xs">(Environment Sensing check)</p>
                      <p>If a new tool is introduced in the IT environment, your system</p>
                    </div>
                    <div className="text-center text-sm">
                      <p className="text-primary italic text-xs">(Dynamic Adaptation check)</p>
                      <p>If a tool is replaced in the IT environment, your system</p>
                    </div>
                    <div className="text-center text-sm">
                      <p className="text-primary italic text-xs">(Proactive Learning Check)</p>
                      <p>Your system becomes better and clever at every interaction</p>
                    </div>
                  </div>
                </div>

                {/* Dashed line */}
                <div className="border-t-2 border-dashed border-foreground/30 mb-4" />

                {/* Arrows down */}
                <div className="grid grid-cols-5 gap-4 text-center mb-2" style={{ marginLeft: "120px" }}>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex justify-center">
                      <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-foreground/50">
                        <path d="M10 0V25M10 25L3 18M10 25L17 18" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Bottom outcomes */}
                <div className="grid grid-cols-5 gap-4 text-center text-sm mb-4" style={{ marginLeft: "120px" }}>
                  <div>Tasks to reach goal</div>
                  <div>Cannot figure out path A to C</div>
                  <div>Cannot auto-detect it</div>
                  <div>Cannot auto-adjust the workflow</div>
                  <div>No</div>
                </div>

                {/* Red Zone Header */}
                <div className="text-center">
                  <span className="font-semibold text-red-400">Red Zone</span>
                </div>
              </div>
            </div>

            {/* Explanations */}
            <div className="mt-8 space-y-3 text-sm">
              <p>
                If all 5 answers fall in Blue zone, it is an <span className="font-bold">Agent</span>.
                Focus on continuously improving the core capabilities.
              </p>
              <p>
                If less than 5 answers fall in Red zone, it is an <span className="font-bold">Agent</span>.
                Focus on moving the core capabilities from Red zone to Blue zone.
              </p>
              <p>
                If all 5 answers fall in Red zone, it is a <span className="font-bold">Bot</span>.
                Call it a Bot. Do not call it an Agent and mislead your clients.
              </p>
            </div>
          </div>
        </div>

        {/* Fundamental 3: AI Role v AI Job */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">3. AI Role v AI Job</h3>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* AI Role */}
            <div className="text-center">
              <div className="diagram-box py-8 px-6 mb-6">
                <h4 className="font-bold text-lg mb-4 text-primary">AI Role</h4>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>A set of responsibilities within a job</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Can be performed alongside existing duties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Requires AI skills as part of broader skillset</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Examples: AI Champion, AI Advocate</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-foreground/70">
                <span className="text-primary font-medium">Role</span> is what you do within your current position
              </p>
            </div>
            
            {/* AI Job */}
            <div className="text-center">
              <div className="diagram-box py-8 px-6 mb-6">
                <h4 className="font-bold text-lg mb-4 text-primary">AI Job</h4>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>A full-time position dedicated to AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Primary focus is AI-related work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Requires deep AI expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Examples: AI Engineer, ML Specialist</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-foreground/70">
                <span className="text-primary font-medium">Job</span> is your entire professional identity
              </p>
            </div>
          </div>
        </div>

        {/* Fundamental 4: AI Skill v AI Competence */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">4. AI Skill v AI Competence</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Skill */}
              <div className="relative">
                <div className="diagram-box py-8 px-6">
                  <h4 className="font-bold text-lg mb-4 text-center text-primary">AI Skill</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">1</div>
                      <span className="text-sm">Specific ability or technique</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">2</div>
                      <span className="text-sm">Can be learned in isolation</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">3</div>
                      <span className="text-sm">Prompt writing, tool usage</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-foreground/70 mt-4">
                  Building block of expertise
                </p>
              </div>
              
              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-primary">
                  <path d="M0 10H50M50 10L43 3M50 10L43 17" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              
              {/* AI Competence */}
              <div className="relative">
                <div className="diagram-box py-8 px-6 border-primary/40">
                  <h4 className="font-bold text-lg mb-4 text-center text-primary">AI Competence</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-sm">★</div>
                      <span className="text-sm">Combination of multiple skills</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-sm">★</div>
                      <span className="text-sm">Applied knowledge + judgment</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-sm">★</div>
                      <span className="text-sm">Solving real-world problems</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-foreground/70 mt-4">
                  Mastery through application
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center p-6 border border-dashed border-foreground/20 rounded-xl">
              <p className="text-sm text-foreground/70">
                <span className="text-primary font-medium">Skills</span> are the individual pieces you learn. 
                <span className="text-primary font-medium"> Competence</span> is when you combine them to deliver results.
              </p>
            </div>
          </div>
        </div>

        {/* Fundamental 5: Upskilling v Reskilling */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-12">5. Upskilling v AI Reskilling</h3>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {/* Step 1 */}
            <div>
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="2" className="text-foreground/60" />
                  <polygon points="50,35 35,60 65,60" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
                </svg>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm">You</span>
              </div>
              <p className="font-medium">Your Job</p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="w-32 h-32 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="2" className="text-foreground/60" />
                  <polygon points="50,20 20,70 80,70" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
                </svg>
              </div>
              <p>
                You <span className="text-primary font-medium">Upskill</span> to fit better in your job.
                Your job becomes your comfort zone.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="w-32 h-32 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="25" y="10" width="50" height="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
                  <polygon points="50,20 30,70 70,70" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
                </svg>
              </div>
              <p>
                AI changes your job making you uncomfortable and irrelevant
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <div className="w-32 h-32 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="25" y="10" width="50" height="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
                  <polygon points="75,50 60,35 60,65" fill="currentColor" className="text-foreground/60" />
                </svg>
              </div>
              <p>
                You step out of your comfort zone,{" "}
                <span className="text-primary font-medium">reskill</span> to AI and stay relevant in
                your new job
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Arrow = () => (
  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-foreground/50">
    <path d="M0 10H35M35 10L28 3M35 10L28 17" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default Fundamentals;
