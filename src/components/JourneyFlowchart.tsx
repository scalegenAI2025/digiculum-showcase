import { Award } from "lucide-react";

const JourneyFlowchart = () => {
  return (
    <section className="py-24 bg-background" id="courses">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
            Your Personalized, Continuous, Collaborative AI{" "}
            <span className="text-primary font-bold italic">Reskilling</span>
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mt-2">Journey</h2>
        </div>

        {/* Main Flow */}
        <div className="overflow-x-auto pb-8">
          <div className="min-w-[1000px]">
            {/* Top Row - Main Journey Steps */}
            <div className="flex items-start justify-between gap-4 mb-8">
              {/* Step 1: Interviews */}
              <div className="flex-1 text-center">
                <h3 className="font-semibold text-lg mb-2">1:1<br />Interviews</h3>
                <p className="text-primary text-sm font-medium mb-2">30 minutes</p>
                <p className="text-sm text-foreground/70">
                  meeting with each cohort member to set individual targets
                </p>
              </div>

              <div className="flex items-center pt-6">
                <Arrow />
              </div>

              {/* Step 2: Inspiration */}
              <div className="flex-1 text-center">
                <h3 className="font-semibold text-lg mb-2">AI<br />Inspiration</h3>
                <p className="text-primary text-sm font-medium mb-2">1 hour</p>
                <p className="text-sm text-foreground/70">
                  warm-up workshop. A day before cohort kick-off
                </p>
              </div>

              <div className="flex items-center pt-6">
                <Arrow />
              </div>

              {/* Step 3: Bootcamp */}
              <div className="flex-1 text-center">
                <h3 className="font-semibold text-lg mb-2">AI Practitioner<br />Bootcamp</h3>
                <p className="text-sm text-foreground/70 mb-2">
                  For individuals with all types of background: technical, non-technical or absolute beginners
                </p>
                <p className="text-primary text-sm font-medium">21 Days</p>
              </div>

              <div className="flex items-center pt-6">
                <Arrow />
              </div>

              {/* Step 4: Action Planning */}
              <div className="flex-1 text-center">
                <h3 className="font-semibold text-lg mb-2">Action<br />Planning</h3>
                <p className="text-primary text-sm font-medium mb-2">1 hour</p>
                <p className="text-sm text-foreground/70">
                  individual session with each cohort member to plan practical application
                </p>
              </div>

              <div className="flex items-center pt-6">
                <Arrow />
              </div>

              {/* Certificate */}
              <div className="flex-1 text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-12 h-12 text-foreground" />
                </div>
                <h3 className="font-semibold text-lg">AI Practitioner<br />Certificate</h3>
              </div>

              <div className="flex items-center pt-6">
                <Arrow />
              </div>

              {/* Post-Bootcamp */}
              <div className="flex-1">
                <p className="text-xs text-foreground/60 italic mb-2 text-center">
                  Common for graduates of both AI Practitioner Bootcamp and AI Specialization Program
                </p>
                <div className="flex gap-4">
                  <div className="flex-1 text-center">
                    <h3 className="font-semibold mb-2">Coaching</h3>
                    <p className="text-sm text-foreground/70">
                      Regular check-ins to track individual progress over
                    </p>
                    <p className="text-primary text-sm font-medium">3 months</p>
                  </div>
                  <div className="flex-1 text-center">
                    <h3 className="font-semibold mb-2">Ecosystem</h3>
                    <p className="text-sm text-foreground/70">
                      Collaboration with other individuals on AI topics
                    </p>
                    <p className="text-primary text-sm font-medium">perpetual</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Down from Bootcamp */}
            <div className="flex justify-center mb-8" style={{ marginLeft: "25%" }}>
              <ArrowDown />
            </div>

            {/* Bottom Row - Specialization */}
            <div className="flex items-start gap-4" style={{ marginLeft: "20%" }}>
              {/* Specialization */}
              <div className="text-center max-w-xs">
                <h3 className="font-semibold text-lg mb-2">AI Specialization<br />Program</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Individual selects one of the following specialized tracks:
                </p>
                <div className="space-y-1 font-semibold">
                  <p>Consulting</p>
                  <p>Compliance</p>
                  <p>Domain</p>
                  <p>Creative</p>
                </div>
                <p className="text-primary text-sm font-medium mt-4">1 month</p>
              </div>

              <div className="flex items-center pt-12">
                <Arrow />
              </div>

              {/* Completion Certificate */}
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-12 h-12 text-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-4">Completion<br />Certificates</h3>
                <div className="space-y-1 text-sm font-medium">
                  <p>AI Consultant</p>
                  <p>Compliance Guardian</p>
                  <p>Domain Visionary</p>
                  <p>VITA Creator</p>
                </div>
              </div>

              <div className="flex items-center pt-12">
                <Arrow />
              </div>

              {/* Post-Specialization */}
              <div className="border-t border-dashed border-foreground/30 pt-4">
                <p className="text-xs text-foreground/60 italic mb-4">
                  Only for graduates of AI Specialization Program
                </p>
                <div className="flex gap-8">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Skill Building</h3>
                    <p className="text-sm text-foreground/70">
                      Relevant to current job
                    </p>
                    <p className="text-primary text-sm font-medium">1 year</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Feeds</h3>
                    <p className="text-sm text-foreground/70">
                      Regular updates on AI on topics of interest
                    </p>
                    <p className="text-primary text-sm font-medium">1 year</p>
                  </div>
                </div>
              </div>
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

const ArrowDown = () => (
  <svg width="20" height="40" viewBox="0 0 20 40" fill="none" className="text-foreground/50">
    <path d="M10 0V35M10 35L3 28M10 35L17 28" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default JourneyFlowchart;
