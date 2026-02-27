import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";
import BrochureDialog from "./BrochureDialog";
import individualsBg from "@/assets/individuals.png";
import brochurePdf from "@/assets/AI_Pract_Brochure.pdf";

const IndividualsHero = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // md breakpoint
  };

  handleResize(); // run once on load
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);


  const handleBrochureSubmit = (data: {
    name: string;
    email: string;
    phone: string;
  }) => {
    // Here you can send data to Google Sheets or your backend
    console.log("User data:", data);

    // Download the PDF after form submission
    const link = document.createElement("a");
    link.href = brochurePdf;
    link.download = "AI-Practitioner-Bootcamp-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close the dialog
    setBrochureOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-24 pb-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${individualsBg})` }}
      />

      {/* Dark + Pink Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-pink-900/40" />

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 w-full text-white">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              AI Practitioner <br /> Bootcamp
            </h1>

            <p className="text-xl font-semibold mb-6">Cohort #1</p>

            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Personalized Continuous Collaborative Learning Experience through
              our unique{" "}
              <span className="text-primary font-semibold">
                Know-Hack-Build
              </span>{" "}
              Framework
            </p>

            {/* Info Row */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm">
              <div>
                <p className="font-semibold">14 Days</p>
                <p className="text-white/70">Start Date: 9th Mar 2026</p>
              </div>

              <div>
                <p className="font-semibold">Live Learning</p>
                <p className="text-white/70">8 PM IST / 4.30 PM CET</p>
              </div>

              <div>
                <p className="font-semibold">Practical Application</p>
                <p className="text-white/70">Coaching + Ecosystem</p>
              </div>
            </div>

            {/* CTA */}
  <div className="flex gap-4">
  <a href={import.meta.env.VITE_CALENDLY_URL} target="_blank">
    <Button
      size={isMobile ? "sm" : "lg"}
      className="bg-primary hover:bg-primary/90"
    >
      1:1 Consultation
    </Button>
  </a>

  <Button
    size={isMobile ? "sm" : "lg"}
    variant="outline"
    className="bg-primary hover:bg-primary/90"
    onClick={() => setBrochureOpen(true)}
  >
    Download Brochure
  </Button>
</div>


          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center lg:justify-end">
            <div className="bg-black/50 p-8 rounded-2xl max-w-md w-full">
              <h2 className="text-2xl font-bold mb-6">
                Don't miss out the unbeatable <br />
                <span className="text-white">Early Joiner offer</span>
              </h2>

              <p className="text-lg text-white mb-2 font-bold">90% DISCOUNT</p>

              <p className="text-lg line-through text-white/40">INR 3,00,000</p>
              <div className="flex gap-2">
                <p className="text-3xl font-bold text-primary mb-6">
                  INR 30,000
                </p>
                <span className="text-3xl font-bold text-white mb-6">only</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrochureDialog
        open={brochureOpen}
        onOpenChange={setBrochureOpen}
        onSubmit={handleBrochureSubmit}
      />
    </section>
  );
};

export default IndividualsHero;
