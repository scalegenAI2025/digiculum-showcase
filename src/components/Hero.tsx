import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card - For Individuals */}
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 animate-fade-in-up">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-semibold text-sm rounded-full">
                  For Individuals
                </span>
              </div>
              <p className="text-foreground/70 italic mb-4 text-sm">
                Technical, Non-Technical or Absolute Beginners
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                AI Practitioner
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Bootcamp
              </h2>
              
              <p className="text-primary italic text-sm mb-4">
                Start Date: 16th Feb, 2026
              </p>
              
              <p className="text-foreground/60 text-sm mb-6">Cohort-based</p>
              
              <div className="mt-auto">
                <a href="#consultation" className="btn-primary inline-block text-sm px-6 py-2.5">
                  1:1 Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Right Card - For Business Leaders */}
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 animate-fade-in-delay-1">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-semibold text-sm rounded-full">
                  For Business Leaders
                </span>
              </div>
              <p className="text-foreground/70 italic mb-4 text-sm">
                Senior Leaders, Executives, or Functional decision-makers
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                AI Leadership
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Readiness Program
              </h2>
              
              <div className="h-4" />
              
              <p className="text-foreground/60 text-sm mb-6">Enterprise-focused</p>
              
              <div className="mt-auto">
                <a href="#find-more" className="btn-primary inline-block text-sm px-6 py-2.5">
                  Find More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-6 right-6 opacity-40">
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          className="text-primary"
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
