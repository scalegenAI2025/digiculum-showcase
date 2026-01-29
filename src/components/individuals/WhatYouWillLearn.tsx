import { GraduationCap } from "lucide-react";

const topics = [
  { category: "AI Fundamentals", items: ["What type of technology is AI?", "Different types of AI", "Key Enablers of AI", "Correlation between AI, IT, and Digital Transformation"] },
  { category: "Machine Learning", items: ["Machine Learning (ML)", "Supervised, Unsupervised, and Reinforcement Learning", "ML Model Output Evaluation", "How GPT was trained"] },
  { category: "Deep Learning", items: ["Deep Learning", "Transformer architectures", "Self-Attention mechanism", "Pretraining LLMs"] },
  { category: "Generative AI", items: ["Generative AI", "Building Blocks of Generative AI", "Generative AI Use cases", "Prompt Engineering"] },
  { category: "Advanced Concepts", items: ["Agentic AI", "Core Capabilities of AI Agents", "Retrieval-Augmented Generation (RAG)", "Fine-tuning techniques"] },
  { category: "Technical Skills", items: ["Computer Vision", "Natural Language Processing", "Vectorization and Embeddings", "Diffusion models"] },
];

const WhatYouWillLearn = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">
            What You Will <span className="text-gradient">Learn</span>
          </h2>
        </div>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Know important AI concepts in simple, easy to understand language
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 pb-3 border-b border-border/50">
                {topic.category}
              </h3>
              <ul className="space-y-2">
                {topic.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
