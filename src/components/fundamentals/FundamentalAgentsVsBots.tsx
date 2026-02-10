// import AgentBot from "@/assets/Agent-Bot.png"
// const FundamentalAgentsVsBots = () => {
//   return (
//     <div className="mb-20">
//       <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center md:text-left">2. Agents v Bots</h3>

//       <div className="diagram-container max-w-5xl mx-auto">
//         {/* Mobile/Tablet View - Stacked Cards */}
//         <div className="lg:hidden space-y-6">
//           {/* Blue Zone */}
//           <div className="text-center mb-4">
//             <span className="font-semibold text-primary">Blue Zone (Agent)</span>
//           </div>
          
//           {agentVsBotData.map((item, index) => (
//             <div key={index} className="border border-foreground/20 rounded-lg p-4">
//               <p className="text-primary italic text-xs mb-2">{item.check}</p>
//               <p className="text-sm font-medium mb-3">{item.question}</p>
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center gap-2">
//                   <svg className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
//                     <path d="M10 5L3 15h14L10 5z" />
//                   </svg>
//                   <span className="text-xs text-foreground/80">{item.blueAnswer}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <svg className="w-4 h-4 text-red-400" viewBox="0 0 20 20" fill="currentColor">
//                     <path d="M10 15L3 5h14L10 15z" />
//                   </svg>
//                   <span className="text-xs text-foreground/80">{item.redAnswer}</span>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Red Zone */}
//           <div className="text-center mt-4">
//             <span className="font-semibold text-primary">Red Zone (Bot)</span>
//           </div>
//         </div>

//         {/* Desktop View - Original Flow Diagram */}
//         <div className="hidden lg:block overflow-x-auto">
//           <div className="min-w-[900px]">
//             {/* Blue Zone Header */}
//             <div className="text-center mb-4">
//               <span className="font-semibold text-primary">Blue Zone</span>
//             </div>

//             {/* Top outcomes */}
//             <div className="grid grid-cols-5 gap-4 text-center text-sm mb-2" style={{ marginLeft: "120px" }}>
//               <div>Goal and it auto-performs the tasks</div>
//               <div>Can figure out path A to C</div>
//               <div>Can auto-detect it</div>
//               <div>Can auto-adjust the workflow</div>
//               <div>Yes</div>
//             </div>

//             {/* Arrows up */}
//             <div className="grid grid-cols-5 gap-4 text-center mb-2" style={{ marginLeft: "120px" }}>
//               {[...Array(5)].map((_, i) => (
//                 <div key={i} className="flex justify-center">
//                   <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-foreground/50">
//                     <path d="M10 30V5M10 5L3 12M10 5L17 12" stroke="currentColor" strokeWidth="2" />
//                   </svg>
//                 </div>
//               ))}
//             </div>

//             {/* Dashed line */}
//             <div className="border-t-2 border-dashed border-foreground/30 mb-4" />

//             {/* Agent v Bot Test row */}
//             <div className="flex items-center gap-4 mb-4">
//               <div className="flex flex-col text-primary font-bold whitespace-nowrap">
//                 <span className="text-white">Agent</span>
//                 <span className="text-white">v</span>
//                 <span className="text-white">Bot</span>
//                 <span className="text-primary">Test</span>
//                 {/*Agent<br />v<br />Bot<br />Test*/}
//               </div>
//               <div className="flex items-center gap-2">
//                 <Arrow />
//               </div>
//               <div className="flex-1 grid grid-cols-5 gap-4">
//                 {agentVsBotData.map((item, index) => (
//                   <div key={index} className="text-center text-sm">
//                     <p className="text-primary italic text-xs">{item.check}</p>
//                     <p>{item.question}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Dashed line */}
//             <div className="border-t-2 border-dashed border-foreground/30 mb-4" />

//             {/* Arrows down */}
//             <div className="grid grid-cols-5 gap-4 text-center mb-2" style={{ marginLeft: "120px" }}>
//               {[...Array(5)].map((_, i) => (
//                 <div key={i} className="flex justify-center">
//                   <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-foreground/50">
//                     <path d="M10 0V25M10 25L3 18M10 25L17 18" stroke="currentColor" strokeWidth="2" />
//                   </svg>
//                 </div>
//               ))}
//             </div>

//             {/* Bottom outcomes */}
//             <div className="grid grid-cols-5 gap-4 text-center text-sm mb-4" style={{ marginLeft: "120px" }}>
//               <div>Tasks to reach goal</div>
//               <div>Cannot figure out path A to C</div>
//               <div>Cannot auto-detect it</div>
//               <div>Cannot auto-adjust the workflow</div>
//               <div>No</div>
//             </div>

//             {/* Red Zone Header */}
//             <div className="text-center">
//               <span className="font-semibold text-primary">Red Zone</span>
//             </div>
//           </div>
//         </div>

//         {/* Explanations */}
//         <div className="mt-8 space-y-3 text-xs md:text-sm">
//           <p>
//             If all 5 answers fall in Blue zone, it is an <span className="font-bold text-primary">Agent</span>.
//             Focus on continuously improving the core capabilities.
//           </p>
//           <p>
//             If less than 5 answers fall in Red zone, it is an <span className="font-bold text-primary">Agent</span>.
//             Focus on moving the core capabilities from Red zone to Blue zone.
//           </p>
//           <p>
//             If all 5 answers fall in Red zone, it is a <span className="font-bold text-primary">Bot</span>.
//             Call it a Bot. Do not call it an Agent and mislead your clients.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const agentVsBotData = [
//   {
//     check: "(Autonomy Check)",
//     question: "Do you provide system",
//     blueAnswer: "Goal and it auto-performs the tasks",
//     redAnswer: "Tasks to reach goal"
//   },
//   {
//     check: "(Independent Decision-making Check)",
//     question: "If the path from A to B breaks, your system",
//     blueAnswer: "Can figure out path A to C",
//     redAnswer: "Cannot figure out path A to C"
//   },
//   {
//     check: "(Environment Sensing check)",
//     question: "If a new tool is introduced in the IT environment, your system",
//     blueAnswer: "Can auto-detect it",
//     redAnswer: "Cannot auto-detect it"
//   },
//   {
//     check: "(Dynamic Adaptation check)",
//     question: "If a tool is replaced in the IT environment, your system",
//     blueAnswer: "Can auto-adjust the workflow",
//     redAnswer: "Cannot auto-adjust the workflow"
//   },
//   {
//     check: "(Proactive Learning Check)",
//     question: "Your system becomes better and clever at every interaction",
//     blueAnswer: "Yes",
//     redAnswer: "No"
//   }
// ];

// const Arrow = () => (
//   <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-foreground/50">
//     <path d="M0 10H35M35 10L28 3M35 10L28 17" stroke="currentColor" strokeWidth="2" />
//   </svg>
// );

// export default FundamentalAgentsVsBots;

import AgentBot from "@/assets/agentvsbot.png";

const FundamentalAgentsVsBots = () => {
  return (
    <div className="mb-20">
      <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center md:text-left">
        2. Agents v Bots
      </h3>

      <div className="flex justify-center">
        {/* Same ring highlight as other images */}
        <div className="rounded-xl overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-primary hover:bg-primary/5">
          <img
            src={AgentBot}
            alt="Agents vs Bots Diagram"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FundamentalAgentsVsBots;
