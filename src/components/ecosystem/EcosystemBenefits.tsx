// import { 
//   Bell, 
//   BookOpen, 
//   Users, 
//   Shield, 
//   Rocket,
//   CheckCircle2
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// const benefits = [
//   {
//     icon: Bell,
//     title: "Curated Updates",
//     description: "Stay informed on the AI topics you care about so you don't fall behind"
//   },
//   {
//     icon: BookOpen,
//     title: "Real Use-Cases & Playbooks",
//     description: "Learn what actually worked and what didn't from members who've been there"
//   },
//   {
//     icon: Users,
//     title: "Peer Support",
//     description: "Get prompts, feedback, and troubleshooting help when you're stuck"
//   },
//   {
//     icon: Shield,
//     title: "Best Practices & Responsible AI",
//     description: "Avoid costly mistakes with guidance on responsible AI adoption"
//   },
//   {
//     icon: Rocket,
//     title: "Momentum & Accountability",
//     description: "Keep progressing beyond the program with community support"
//   }
// ];

// const EcosystemBenefits = () => {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto mb-16">
//           <h2 className="heading-lg text-center mb-6">
//             What you get inside the ecosystem
//           </h2>
//           <p className="text-muted-foreground text-center text-lg">
//             At Digiculum, we are building an AI ecosystem where ambitious professionals don't learn alone—they learn together. 
//             Cut through the noise, learn faster, and apply AI with confidence.
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {benefits.map((benefit, index) => (
//             <Card 
//               key={index}
//               className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] group"
//             >
//               <CardContent className="p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors shrink-0">
//                     <benefit.icon className="w-6 h-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
//                       {benefit.title}
//                     </h3>
//                     <p className="text-sm text-muted-foreground">
//                       {benefit.description}
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
        
//         {/* Value proposition */}
//         <div className="mt-16 max-w-3xl mx-auto">
//           <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
//             <CardContent className="p-8 text-center">
//               <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
//               <p className="text-lg text-foreground">
//                 If AI is getting bigger and messier, your advantage comes from being in the right room—where people are learning, 
//                 experimenting, and sharing what works. The ecosystem keeps you{" "}
//                 <span className="text-primary font-semibold">relevant</span>,{" "}
//                 <span className="text-primary font-semibold">competitive</span>, and{" "}
//                 <span className="text-primary font-semibold">continuously evolving</span>.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EcosystemBenefits;

import { CheckCircle2 } from "lucide-react";

const EcosystemBenefits = () => {
  return (
    <section className="py-20">
      <div className="w-full px-6">
        {/* Centered wrapper */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Intro paragraph */}
          <p className="text-lg leading-relaxed text-foreground">
            At <span className="font-semibold">Digiculum</span>, we are building an{" "}
            <span className="font-semibold">AI ecosystem</span> where ambitious professionals don’t learn
            alone—they learn <span className="font-semibold">together</span>. You can cut
            through noise, learn faster, and apply AI with confidence. Instead
            of chasing random tutorials or trends, you get{" "}
            <span className="font-semibold">
              real-world insights, proven workflows, and practical prompts
            </span>{" "}
            from people actively using AI in their careers.
          </p>

          {/* Section heading */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            What you get inside the ecosystem:
          </h2>

          {/* Bullet points */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span>
                <span className="font-semibold">Curated updates</span> on the AI topics
                you care about (so you don’t fall behind)
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span>
                <span className="font-semibold">
                  Real use-cases and playbooks
                </span>{" "}
                shared by members (what actually worked, what didn’t)
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span>
                <span className="font-semibold">Peer support</span> when you’re
                stuck—prompts, feedback, and troubleshooting from the
                community
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span>
                <span className="font-semibold">
                  Best practices & responsible AI guidance
                </span>{" "}
                to avoid costly mistakes
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span>
                <span className="font-semibold">
                  Momentum and accountability
                </span>{" "}
                to keep progressing beyond the program
              </span>
            </li>
          </ul>

          {/* Closing statement */}
          <p className="text-lg leading-relaxed text-foreground pt-4 border-t border-border">
            If AI is getting bigger and messier, your advantage comes from being
            in the right room—where people are learning, experimenting, and
            sharing what works. The ecosystem keeps you{" "}
            <span className="font-semibold text-primary">relevant</span>,{" "}
            <span className="font-semibold text-primary">competitive</span>, and{" "}
            <span className="font-semibold text-primary">
              continuously evolving
            </span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemBenefits;
