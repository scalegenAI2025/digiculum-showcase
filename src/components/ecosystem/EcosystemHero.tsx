// import { Network } from "lucide-react";
// import ecosystemBg from "@/assets/ecosystem.png";

// const EcosystemHero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-24 pb-8">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${ecosystemBg})` }}
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative container mx-auto px-6">
//         <div className="text-center max-w-4xl mx-auto">
//           {/* <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 backdrop-blur">
//             <Network className="w-4 h-4 text-primary" />
//             <span className="text-sm text-primary font-medium">
//               Community Learning
//             </span>
//           </div> */}

//           <h1 className="heading-xl mb-6 text-white">
//             How fast an individual reskills largely depends on their{" "}
//             <span className="text-accent-gradient">
//               ability to work in Ecosystems
//             </span>
//           </h1>

//           <p className="text-xl text-white/80 mb-8">
//             Join a community where ambitious professionals learn together,
//             share insights, and accelerate their AI journey
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EcosystemHero;

import { Network } from "lucide-react";
import ecosystemBg from "@/assets/ecosystembg.png";

const EcosystemHero = () => {
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
  <span className="text-accent-gradient">
   Ecosystems
  </span>
</h1>


          <p className="text-xl text-white/80 mb-8">
            Join a community where ambitious professionals learn together,
            <br />
            share insights, and accelerate their AI journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemHero;
