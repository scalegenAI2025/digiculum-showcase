import { Briefcase, Shield, Building, Palette } from "lucide-react";

const tracks = [
  {
    icon: Briefcase,
    title: "Consulting Track",
    description: "For technical, management, or strategy consultants who aspire to become AI consultants.",
    color: "border-primary/50 hover:border-primary",
    iconBg: "bg-primary/50",
  },
  {
    icon: Shield,
    title: "Compliance Track",
    description: "For those who want to pursue careers in AI auditing, risk management, or data and AI compliance.",
    color: "border-primary/50 hover:border-primary",
    iconBg: "bg-primary/50",
  },
  {
    icon: Building,
    title: "Domain Track",
    description: "For specialized professionals in finance, healthcare, legal, HR, accounting, pharma, and more who want to leverage AI in their respective fields.",
    color: "border-primary/50 hover:border-primary",
    iconBg: "bg-primary/50",
  },
  {
    icon: Palette,
    title: "Creative Track",
    description: "For creatives such as artists, UX designers, fashion and interior designers, and filmmakers who want to combine their craft with the power of AI.",
    color: "border-primary/50 hover:border-primary",
    iconBg: "bg-primary/50",
  },
];

const AISpecialization = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">AI Specialization</span> Program
          </h2>
          <div className="flex flex-col gap-2">
          <div className="flex flex-col text-foreground/70">
          <p>
            After completion of 21-day AI Practitioner Bootcamp, an individual can enroll in a 1-month
          </p>
          <span>AI Specialization Program.</span>
          </div>
          <div className="flex flex-col text-foreground/70">
          <p>
            The 1-month AI Specialization Program helps you turn the general AI skills and capabilities into
          </p>
          <span>job-specific advantage.</span>
          </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`glass-card p-6 border-2 ${track.color} transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${track.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <track.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/60 mt-8 text-sm">
          More tracks to be added soon. Download brochure for more details.
        </p>
      </div>
    </section>
  );
};

export default AISpecialization;
