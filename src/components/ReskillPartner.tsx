const ReskillPartner = () => {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
  We are your
</h2>

<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
  <span className="text-primary">AI</span> Reskilling Partners
</h2>


          <div className="space-y-8 text-lg text-foreground/80 text-left">
            <p>
              At Digiculum, we don't position ourselves as another AI course
              provider. We are your{" "}
              <span className="text-foreground font-semibold">
                AI Reskilling Partners
              </span>
              .
            </p>

            <p>
              The internet is full of AI noise: bold promises, flashy tools, and
              fear-driven marketing that pressures you to "act now" without
              really helping you understand your AI career roadmap.
            </p>

            <p className="font-semibold text-foreground">
              We take a different approach.
            </p>

            <p>
              We don't create FOMO; we convert fear into focused action. That's
              why we want to know you first. Feel free to schedule a 1:1
              consultation with us to share your goals and get your first steps.
            </p>

            <div className="py-8 text-center">
              <p className="text-xl text-foreground/70 mb-4">
                The real question is not:{" "}
                <span className="text-foreground font-semibold">
                  "Will AI take away my job?"
                </span>
              </p>
              <p className="text-xl text-foreground/70">
                It should be:{" "}
                <span className="text-foreground font-semibold text-2xl">
                  "Will you allow AI to take away your job?"
                </span>
              </p>
            </div>

            <p>
              AI is already impacting our work—and it's only going to get bigger
              and messier from here. The only way to stay relevant is to{" "}
              <span className="text-foreground font-bold">reskill</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Second part */}
      <div className="container mx-auto px-6 max-w-4xl mt-20">
        <div className="space-y-8 text-lg text-foreground/80">
          <div className="flex justify-center items-center gap-3">
            <span className="text-xl text-foreground">
              But AI reskilling isn't a
              <span className="font-bold"> one-size-fits-all </span>
              <span>course</span>
            </span>
          </div>

          <p>
            At Digiculum, we believe it should be a{" "}
            <span className="text-primary font-semibold">personalized</span>,{" "}
            <span className="text-primary font-semibold">continuous</span>, and{" "}
            <span className="text-primary font-semibold">collaborative</span>{" "}
            journey—tailored to your role and goals, updated as AI evolves, and
            supported by a community that helps you learn faster and apply
            better.
          </p>

          <p>
            If you're serious about staying competitive in an AI-driven world,
            we're here to guide you—to walk the journey with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReskillPartner;
