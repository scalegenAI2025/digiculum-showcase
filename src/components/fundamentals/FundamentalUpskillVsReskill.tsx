const FundamentalUpskillVsReskill = () => {
  return (
    <div className="mb-20">
      <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center md:text-left">5. Upskilling v AI Reskilling</h3>

      <div className="diagram-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto text-center">
          {/* Step 1 */}
          <div>
            <div className="w-24 h-24 md:w-36 md:h-36 mx-auto mb-4 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="2" className="text-foreground/60" />
                <polygon points="50,30 30,65 70,65" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
              </svg>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs md:text-xs">You</span>
            </div>
            <p className=" text-sm md:text-base">Your Job</p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="w-24 h-24 md:w-36 md:h-36 mx-auto mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="2" className="text-foreground/60" />
                <polygon points="50,15 15,75 85,75" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
              </svg>
            </div>
            <p className="text-xs md:text-sm">
              You <span className="text-primary font-medium">Upskill</span> to fit better in your job.
              Your job becomes your comfort zone.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="w-24 h-24 md:w-36 md:h-36 mx-auto mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="20" y="5" width="60" height="90" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
                <polygon points="50,15 20,75 80,75" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
              </svg>
            </div>
            <p className="text-xs md:text-sm">
              AI changes your job making you uncomfortable and irrelevant
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <div className="w-24 h-24 md:w-36 md:h-36 mx-auto mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="20" y="5" width="60" height="90" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
                <polygon points="80,50 60,35 60,65" fill="currentColor" className="text-foreground/60" />
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
    </div>
  );
};

export default FundamentalUpskillVsReskill;
