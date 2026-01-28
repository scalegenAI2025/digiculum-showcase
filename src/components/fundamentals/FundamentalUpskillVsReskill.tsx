const FundamentalUpskillVsReskill = () => {
  return (
    <div className="mb-20">
      <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center md:text-left">5. Upskilling v AI Reskilling</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto text-center">
        {/* Step 1 */}
        <div>
          <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-4 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="2" className="text-foreground/60" />
              <polygon points="50,35 35,60 65,60" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
            </svg>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm">You</span>
          </div>
          <p className="font-medium text-sm md:text-base">Your Job</p>
        </div>

        {/* Step 2 */}
        <div>
          <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="2" className="text-foreground/60" />
              <polygon points="50,20 20,70 80,70" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
            </svg>
          </div>
          <p className="text-xs md:text-sm">
            You <span className="text-primary font-medium">Upskill</span> to fit better in your job.
            Your job becomes your comfort zone.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="25" y="10" width="50" height="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
              <polygon points="50,20 30,70 70,70" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
            </svg>
          </div>
          <p className="text-xs md:text-sm">
            AI changes your job making you uncomfortable and irrelevant
          </p>
        </div>

        {/* Step 4 */}
        <div>
          <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="25" y="10" width="50" height="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
              <polygon points="75,50 60,35 60,65" fill="currentColor" className="text-foreground/60" />
            </svg>
          </div>
          <p className="text-xs md:text-sm">
            You step out of your comfort zone,{" "}
            <span className="text-primary font-medium">reskill</span> to AI and stay relevant in
            your new job
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundamentalUpskillVsReskill;
