import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import ecosystemBg from "@/assets/ecosystembg.png";

const EcosystemHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-20 pt-24 pb-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ecosystemBg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <h1 className="heading-xl mb-6 text-white leading-tight">
            Reskilling accelerates
            <br />
            when individuals thrive
            <br />
            <span>in </span>
            <span className="text-accent-gradient">Ecosystems</span>
          </h1>

          <p className="text-xl text-white/80 mb-8">
            Join a community where ambitious professionals learn together,
            <br />
            share insights, and accelerate their AI journey
          </p>
          <a
            href="/ecosystemform"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary inline-flex items-center gap-2 ${
              isMobile ? "text-sm px-6 py-3" : "text-lg px-10 py-4"
            }`}
          >
            Enroll for Free
            <ArrowRight className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcosystemHero;