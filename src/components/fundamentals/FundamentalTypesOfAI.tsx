// import TGA from "@/assets/Trad-Gen-Agent.png";
// const FundamentalTypesOfAI = () => {
//   return (
//     <div className="mb-20">
//       <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center md:text-left">
//         1. Traditional AI v Generative AI v Agentic AI
//       </h3>
//       <p className="text-center text-primary mb-6">
//         <span className="text-primary font-medium">Core Capabilities</span>{" "}
//         <span className="text-foreground/70 italic">of each AI</span>
//       </p>

//       <div className="diagram-container grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//         {/* Traditional AI */}
//         <div className="text-center">
//           <div className="grid grid-cols-2 gap-2 mb-4">
//             <div className="diagram-box text-xs md:text-sm">Pattern Recognition</div>
//             <div className="diagram-box text-xs md:text-sm">Prediction</div>
//             <div className="diagram-box text-xs md:text-sm">Classification</div>
//             <div className="diagram-box text-xs md:text-sm">Facial Recognition</div>
//             <div className="diagram-box col-span-2 text-xs md:text-sm">Text to Speech / Speech to Text</div>
//             <div className="diagram-box col-span-2 text-xs md:text-sm">Personalization</div>
//           </div>
//           <h4 className="font-bold text-base md:text-lg">Traditional AI</h4>
//         </div>

//         {/* Generative AI */}
//         <div className="text-center">
//           <div className="flex justify-center mb-4">
//             <div className="diagram-box px-8 md:px-12 py-6 md:py-8 text-sm md:text-base">Creation</div>
//           </div>
//           <h4 className="font-bold text-base md:text-lg">Generative AI</h4>
//         </div>

//         {/* Agentic AI */}
//         <div className="text-center">
//           <div className="grid grid-cols-2 gap-2 mb-4">
//             <div className="diagram-box text-xs md:text-sm">Autonomy</div>
//             <div className="diagram-box text-xs md:text-sm">Independent Decision-making</div>
//             <div className="diagram-box text-xs md:text-sm">Environment Sensing</div>
//             <div className="diagram-box text-xs md:text-sm">Dynamic Adaptation</div>
//             <div className="diagram-box col-span-2 text-xs md:text-sm">Proactive Learning</div>
//           </div>
//           <h4 className="font-bold text-base md:text-lg">Agentic AI</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FundamentalTypesOfAI;

import TGA from "@/assets/Trad-Gen-Agent.png";

const FundamentalTypesOfAI = () => {
  return (
    <div className="mb-20">
      <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center md:text-left">
        1. Traditional AI v Generative AI v Agentic AI
      </h3>
      {/* <p className="text-center text-primary mb-6">
        <span className="text-primary font-medium">Core Capabilities</span>{" "}
        <span className="text-foreground/70 italic">of each AI</span>
      </p> */}

      <div className="flex justify-center">
        {/* Same ring highlight as other images */}
        <div className="rounded-xl overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-primary/5">
          <img
            src={TGA}
            alt="Traditional vs Generative vs Agentic AI"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FundamentalTypesOfAI;
