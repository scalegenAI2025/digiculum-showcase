import superEcosystemImg from "@/assets/ecosystem.png"

const EcosystemConcept = () => {
  return (
    <section className="py-20 bg-#121212">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">What is an Ecosystem?</h2>
          <p className="text-lg text-muted-foreground">
            An ecosystem is a community where people seek and share AI knowledge,
            skills, and best practices related to a certain AI topic with each other.
          </p>
        </div>

        {/* Ecosystem Diagram Image */}
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-primary/5">
          <img
            src={superEcosystemImg}
            alt="Super Ecosystem Diagram"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default EcosystemConcept;
