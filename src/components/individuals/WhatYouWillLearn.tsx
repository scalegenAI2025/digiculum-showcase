// import { Brain, Zap, Wrench } from "lucide-react";

// const topics = [
//   { category: "AI Fundamentals", items: ["What type of technology is AI?", "Different types of AI", "Key Enablers of AI", "Correlation between AI, IT, and Digital Transformation"] },
//   { category: "Machine Learning", items: ["Machine Learning (ML)", "Supervised, Unsupervised, and Reinforcement Learning", "ML Model Output Evaluation", "How GPT was trained"] },
//   { category: "Deep Learning", items: ["Deep Learning", "Transformer architectures", "Self-Attention mechanism", "Pretraining LLMs"] },
//   { category: "Generative AI", items: ["Generative AI", "Building Blocks of Generative AI", "Generative AI Use cases", "Prompt Engineering"] },
//   { category: "Advanced Concepts", items: ["Agentic AI", "Core Capabilities of AI Agents", "Retrieval-Augmented Generation (RAG)", "Fine-tuning techniques"] },
//   { category: "Technical Skills", items: ["Computer Vision", "Natural Language Processing", "Vectorization and Embeddings", "Diffusion models"] },
// ];

// const WhatYouWillLearn = () => {
//   return (
//     <section className="py-20 bg-card/30">
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-center gap-3 mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             What You Will <span className="text-gradient">Learn</span>
//           </h2>
//         </div>
//         <div className="flex flex-col gap-4">
//         <div className="flex gap-2 items-center">
//           <Brain className="w-6 h-6 text-foreground" />
//           <h2 className="text-2xl font-bold text-primary">Know</h2>
//           </div>

//         <p className="text-foreground/70 mb-12 max-w-2xl">
//           Know important AI concepts in simple, easy to understand language
//         </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {topics.map((topic, index) => (
//             <div
//               key={index}
//               className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
//             >
//               <h3 className="text-lg font-semibold text-primary mb-4 pb-3 border-b border-border/50">
//                 {topic.category}
//               </h3>
//               <ul className="space-y-2">
//                 {topic.items.map((item, i) => (
//                   <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
//                     <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatYouWillLearn;

import { Brain } from "lucide-react";

const leftColumn = [
  {
    category: "AI Fundamentals",
    items: [
      "What type of technology is AI?",
      "Correlation between AI, IT, and Digital Transformation",
      "Key enablers of AI",
      "Different types of AI",
    ],
  },
  {
    category: "Generative AI",
    items: [
      "Building blocks of GenAI",
      "LLM use cases",
      "LLM evolution",
      "How GPT was trained",
      "Prompt engineering",
    ],
  },
  {
    category: "Agentic AI",
    items: [
      "Core capabilities of AI agents",
      "Business essentials of AI agents",
      "Evaluation of AI agents",
    ],
  },
];

const rightColumn = [
  {
    category: "Technical Concepts",
    items: [
      "Machine learning (ML)",
      "ML model output evaluation",
      "Natural language processing",
      "Neural networks",
      "Deep learning",
      "Vectorization and embeddings",
      "Self-attention mechanism",
      "Transformer architectures",
      "Diffusion models",
      "Supervised, unsupervised, and reinforcement learning",
      "Pretraining LLMs",
      "Fine-tuning techniques",
      "Retrieval-Augmented Generation (RAG)",
    ],
  },
];

const WhatYouWillLearn = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What You Will <span className="text-gradient">Learn</span>
          </h2>
        </div>

        {/* Know Header */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex gap-2 items-center">
            <Brain className="w-6 h-6 text-foreground" />
            <h2 className="text-2xl font-bold text-primary">Know</h2>
          </div>

          <p className="text-foreground/70 max-w-2xl">
            Know important AI concepts in simple, easy to understand language
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-8">
            {leftColumn.map((topic, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {topic.category}
                </h3>
                <ul className="space-y-2">
                  {topic.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightColumn.map((topic, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {topic.category}
                </h3>
                <ul className="space-y-2">
                  {topic.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
