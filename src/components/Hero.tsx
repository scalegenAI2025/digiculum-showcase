import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - For Individuals */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold text-lg">For Individuals</span>
            </div>
            <p className="text-foreground/70 italic mb-6 text-lg">
              Technical, Non-Technical or Absolute Beginners
            </p>
            
            <h1 className="heading-xl mb-4">
              AI Practitioner
              <br />
              <span className="text-primary">Bootcamp</span>
            </h1>
            
            <p className="text-primary italic text-lg mb-6">
              Start Date: 16th Feb, 2026
            </p>
            
            <p className="text-foreground/70 mb-8">Cohort-based</p>
            
            <a href="#consultation" className="btn-primary inline-block">
              1:1 Consultation
            </a>
          </div>

          {/* Right Column - For Business Leaders */}
          <div className="text-center lg:text-right animate-fade-in-delay-1">
            <div className="inline-block mb-4">
              <span className="text-primary font-semibold text-lg">For Business Leaders</span>
            </div>
            <p className="text-foreground/70 italic mb-6 text-lg">
              Senior Leaders, Executives, or Functional decision-makers
            </p>
            
            <h1 className="heading-xl mb-4">
              AI Leadership
              <br />
              <span className="text-primary">Readiness Program</span>
            </h1>
            
            <div className="h-6" />
            
            <p className="text-foreground/70 mb-8">Enterprise-focused</p>
            
            <a href="#find-more" className="btn-primary inline-block">
              Find More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-8 right-8 opacity-50">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-foreground/30"
        >
          <path
            d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
