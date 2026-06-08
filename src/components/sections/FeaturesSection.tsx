// "use client";
// import { useEffect, useRef, useState, useCallback } from "react";
// import {
//   UserPlus, MessageCircle, QrCode, Bot, Layout, GitBranch,
//   Plug2, BarChart2, Users2, Megaphone, Sparkles, FileText,
// } from "lucide-react";

// // ─── Feature data ──────────────────────────────────────────────────────────────
// const features = [
//   {
//     Icon: UserPlus,
//     title: "Embedded Signup",
//     desc: "Integrated Embedded Signup System that makes customer onboarding seamless and fast. Reduce drop-offs and get users verified in seconds.",
//     badge: "Popular",
//     tag: "Used by 80% of teams",
//     side: "left",
//   },
//   {
//     Icon: MessageCircle,
//     title: "WhatsApp Chat",
//     desc: "Seamlessly connect with customers through a unified WhatsApp Chat inbox. Handle multiple conversations simultaneously with smart routing.",
//     tag: "Real-time messaging",
//     side: "left",
//   },
//   {
//     Icon: QrCode,
//     title: "QR Code Generator",
//     desc: "Instantly generate QR codes for your WhatsApp number to drive offline-to-online engagement at stores, events, and print materials.",
//     tag: "Offline + online",
//     side: "left",
//   },
//   {
//     Icon: Bot,
//     title: "Chat-Bot",
//     desc: "Engage customers 24/7 with intelligent, rule-based chatbot responses. Handle FAQs, lead capture, and support without human intervention.",
//     tag: "Always on",
//     side: "left",
//   },
//   {
//     Icon: Layout,
//     title: "Manage Templates",
//     desc: "Create and manage message templates directly in-app without visiting Meta Business Manager. Get approvals faster with guided workflows.",
//     badge: "New",
//     tag: "Meta-approved",
//     side: "left",
//   },
//   {
//     Icon: GitBranch,
//     title: "Flow Maker",
//     desc: "Build complex bot conversation flows visually with our advanced no-code Flow Maker. Drag, connect, and publish in minutes.",
//     tag: "No-code builder",
//     side: "left",
//   },
//   {
//     Icon: Plug2,
//     title: "API Integration",
//     desc: "Full REST APIs and webhooks enable smooth integration with any third-party service — CRMs, ERPs, ecommerce platforms, and more.",
//     tag: "100+ integrations",
//     side: "right",
//   },
//   {
//     Icon: BarChart2,
//     title: "Live Analysis",
//     desc: "Get real-time analytics and delivery status of your campaigns and messages. Track open rates, CTRs, and response times live.",
//     tag: "Live data",
//     side: "right",
//   },
//   {
//     Icon: Users2,
//     title: "Assign Agents",
//     desc: "Distribute chats to team members and agents with role-based access control. Set SLAs, monitor workload, and reassign in one click.",
//     tag: "Team management",
//     side: "right",
//   },
//   {
//     Icon: Megaphone,
//     title: "Campaigns",
//     desc: "Effortlessly schedule and manage broadcast campaigns to thousands of contacts. Segment, personalise, and A/B test at scale.",
//     tag: "Bulk messaging",
//     side: "right",
//   },
//   {
//     Icon: Sparkles,
//     title: "AI Chatbot",
//     desc: "Leverage advanced AI to automate customer interactions with intelligent, contextual responses. Learns from conversation history.",
//     badge: "AI",
//     tag: "Powered by AI",
//     side: "right",
//   },
//   {
//     Icon: FileText,
//     title: "Chat Reports",
//     desc: "Generate comprehensive analytics and detailed reports on all WhatsApp communications. Export to CSV, PDF, or push to your BI tool.",
//     tag: "Full analytics",
//     side: "right",
//   },
// ];

// // SVG node positions: [cx, cy, labelAnchor, labelX, labelY]
// const NODE_POS = [
//   // Left side (indices 0-5)
//   [150, 170, "end", 128, 170],
//   [130, 220, "end", 108, 220],
//   [210, 200, "end", 188, 200],
//   [240, 240, "end", 218, 240],
//   [220, 295, "end", 198, 295],
//   [160, 330, "end", 138, 330],
//   // Right side (indices 6-11)
//   [570, 170, "start", 592, 170],
//   [590, 220, "start", 612, 220],
//   [510, 200, "start", 532, 200],
//   [480, 240, "start", 502, 240],
//   [500, 295, "start", 522, 295],
//   [560, 330, "start", 582, 330],
// ];

// // SVG branch paths (left then right, matching NODE_POS order)
// const BRANCH_PATHS = [
//   "M360,280 Q280,220 150,170",
//   "M360,280 Q270,240 130,220",
//   "M360,280 Q300,240 210,200",
//   "M360,280 Q310,250 240,240",
//   "M360,280 Q310,290 220,295",
//   "M360,280 Q280,300 160,330",
//   "M360,280 Q440,220 570,170",
//   "M360,280 Q450,240 590,220",
//   "M360,280 Q420,240 510,200",
//   "M360,280 Q410,250 480,240",
//   "M360,280 Q410,290 500,295",
//   "M360,280 Q440,300 560,330",
// ];

// const badgeStyle = {
//   Popular: "bg-green-100 text-green-800 border border-green-200",
//   New: "bg-blue-100 text-blue-800 border border-blue-200",
//   AI: "bg-purple-100 text-purple-800 border border-purple-200",
// };

// // ─── Pulse Dot ────────────────────────────────────────────────────────────────
// function PulseDot() {
//   return (
//     <span className="relative inline-flex w-2 h-2 mr-2 flex-shrink-0 mt-0.5">
//       <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
//       <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
//     </span>
//   );
// }

// // ─── Detail card ──────────────────────────────────────────────────────────────
// function DetailCard({ feature, onClose }) {
//   const { Icon, title, desc, badge, tag } = feature;
//   return (
//     <div
//       className="mt-4 flex items-start gap-4 bg-white border border-green-200 rounded-2xl p-5 shadow-sm shadow-green-100
//                  animate-[slideUp_.3s_cubic-bezier(.2,.8,.3,1)_forwards]"
//       style={{ opacity: 0, transform: "translateY(12px)" }}
//     >
//       <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0 text-green-600">
//         <Icon className="w-6 h-6" />
//       </div>
//       <div className="flex-1 min-w-0">
//         <div className="flex items-center gap-2 flex-wrap mb-1">
//           <h3
//             className="text-base font-extrabold text-gray-900"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             {title}
//           </h3>
//           {badge && (
//             <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide ${badgeStyle[badge]}`}>
//               {badge}
//             </span>
//           )}
//         </div>
//         <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
//         <div className="flex items-center gap-1 mt-3 text-xs text-green-700 font-medium bg-green-50 border border-green-200 rounded-full px-3 py-1 w-fit">
//           <PulseDot />
//           {tag}
//         </div>
//       </div>
//       <button
//         onClick={onClose}
//         className="text-gray-300 hover:text-gray-500 transition-colors flex-shrink-0 mt-0.5"
//         aria-label="Close"
//       >
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>
//     </div>
//   );
// }

// // ─── Tree SVG ─────────────────────────────────────────────────────────────────
// function FeatureTree({ active, onSelect }) {
//   const svgRef = useRef(null);

//   // Animate branches in on mount
//   useEffect(() => {
//     if (!svgRef.current) return;
//     const paths = svgRef.current.querySelectorAll(".branch");
//     paths.forEach((path, i) => {
//       const len = path.getTotalLength?.() || 200;
//       path.style.strokeDasharray = len;
//       path.style.strokeDashoffset = len;
//       setTimeout(() => {
//         path.style.transition = "stroke-dashoffset .7s ease, stroke .3s";
//         path.style.strokeDashoffset = "0";
//       }, 300 + i * 80);
//     });
//   }, []);

//   // Idle pulse every 4s when nothing active
//   useEffect(() => {
//     if (active !== null) return;
//     const id = setInterval(() => {
//       NODE_POS.forEach((_, i) => {
//         // visual ping: briefly add/remove class via SVG directly
//       });
//     }, 4000);
//     return () => clearInterval(id);
//   }, [active]);

//   return (
//     <svg
//       ref={svgRef}
//       viewBox="0 0 720 560"
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-full h-auto overflow-visible"
//       aria-hidden="true"
//     >
//       {/* Trunk */}
//       <line
//         x1="360" y1="520" x2="360" y2="280"
//         stroke="#d1fae5" strokeWidth="2" strokeLinecap="round"
//         style={{ animation: "breathe 3s ease infinite" }}
//       />

//       {/* Branches */}
//       {BRANCH_PATHS.map((d, i) => (
//         <path
//           key={i}
//           className="branch"
//           d={d}
//           fill="none"
//           strokeLinecap="round"
//           stroke={
//             active === null
//               ? "#a7f3d0"
//               : active === i
//                 ? "#059669"
//                 : "#e5e7eb"
//           }
//           strokeWidth={active === i ? 2.5 : 1.5}
//           style={{
//             transition: "stroke .3s, stroke-width .3s",
//           }}
//         />
//       ))}

//       {/* Root hub */}
//       <circle cx="360" cy="280" r="32" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
//       <circle cx="360" cy="280" r="20" fill="#059669" />
//       <text
//         x="360" y="276"
//         textAnchor="middle" dominantBaseline="middle"
//         fontFamily="'Syne', sans-serif" fontSize="8" fontWeight="700"
//         fill="#fff" letterSpacing=".06em"
//       >
//         WHATS
//       </text>
//       <text
//         x="360" y="287"
//         textAnchor="middle" dominantBaseline="middle"
//         fontFamily="'Syne', sans-serif" fontSize="8" fontWeight="700"
//         fill="#fff" letterSpacing=".06em"
//       >
//         APP
//       </text>

//       {/* Nodes */}
//       {NODE_POS.map(([cx, cy, anchor, lx, ly], i) => {
//         const isActive = active === i;
//         const isDim = active !== null && !isActive;
//         const f = features[i];
//         return (
//           <g
//             key={i}
//             onClick={() => onSelect(i)}
//             style={{ cursor: "pointer" }}
//             opacity={isDim ? 0.35 : 1}
//           >
//             {/* Pulse ring */}
//             {isActive && (
//               <circle
//                 cx={cx} cy={cy}
//                 fill="none" stroke="#059669" strokeWidth="1"
//                 style={{ animation: "nodeRing 1.8s ease-out infinite" }}
//               />
//             )}
//             {/* Outer ring */}
//             <circle
//               cx={cx} cy={cy} r="16"
//               fill="none"
//               stroke={isActive ? "#059669" : "#d1fae5"}
//               strokeWidth={isActive ? 2 : 1.5}
//               style={{ transition: "stroke .3s" }}
//             />
//             {/* Inner fill */}
//             <circle
//               cx={cx} cy={cy} r="12"
//               fill={isActive ? "#ecfdf5" : "#fff"}
//               stroke={isActive ? "#059669" : "#a7f3d0"}
//               strokeWidth="1"
//               style={{ transition: "fill .3s, stroke .3s" }}
//             />
//             {/* Core dot */}
//             <circle
//               cx={cx} cy={cy} r={isActive ? 6 : 5}
//               fill={isActive ? "#065f46" : "#d1fae5"}
//               style={{ transition: "fill .3s, r .2s" }}
//             />
//             {/* Label */}
//             <text
//               x={lx} y={ly}
//               textAnchor={anchor} dominantBaseline="middle"
//               fontFamily="'DM Sans', sans-serif"
//               fontSize="11"
//               fontWeight={isActive ? "500" : "400"}
//               fill={isActive ? "#065f46" : "#6b7280"}
//               style={{ transition: "fill .3s, font-weight .2s", pointerEvents: "none" }}
//             >
//               {f.title}
//             </text>
//             {/* Badge label */}
//             {f.badge && (
//               <text
//                 x={lx} y={ly + 13}
//                 textAnchor={anchor} dominantBaseline="middle"
//                 fontFamily="'DM Sans', sans-serif"
//                 fontSize="9" fontWeight="600"
//                 fill="#059669"
//                 style={{ pointerEvents: "none" }}
//               >
//                 {f.badge === "Popular" ? "★ popular" : f.badge === "AI" ? "✦ AI" : "● new"}
//               </text>
//             )}
//           </g>
//         );
//       })}

//       {/* Root label */}
//       <text
//         x="360" y="540"
//         textAnchor="middle"
//         fontFamily="'DM Sans', sans-serif"
//         fontSize="11"
//         fill="#059669"
//         opacity=".6"
//         fontStyle="italic"
//       >
//         Platform core
//       </text>
//     </svg>
//   );
// }

// // ─── Section ──────────────────────────────────────────────────────────────────
// export default function FeaturesTreeSection() {
//   const [active, setActive] = useState(null);

//   const handleSelect = useCallback((i) => {
//     setActive((prev) => (prev === i ? null : i));
//   }, []);

//   return (
//     <section
//       id="features"
//       className="py-20 sm:py-28 bg-white relative overflow-hidden"
//     >
//       {/* Soft bg */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/20 to-white pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

//         {/* Header */}
//         <div className="text-center space-y-2">
//           <div className="flex items-center justify-center gap-3 text-xs font-medium tracking-widest text-green-600 uppercase">
//             <span className="w-8 h-px bg-green-400 inline-block" />
//             Platform features
//             <span className="w-8 h-px bg-green-400 inline-block" />
//           </div>
//           <h2
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.08] tracking-tight"
//             style={{ fontFamily: "sans-serif" }}
//           >
//             One platform.
//             <br />
//             <span className="bg-gradient-to-r from-green-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
//               Infinite possibilities.
//             </span>
//           </h2>
//           <p className="text-gray-400 text-sm sm:text-base max-w-sm mx-auto leading-relaxed mb-0">
//             Click any node on the tree to explore each feature.
//           </p>
//         </div>

//         {/* Tree */}
//        <div className="-mt-32 sm:-mt-40">
//           <FeatureTree active={active} onSelect={handleSelect} />
//         </div>

//         {/* Detail card */}
//         {active !== null && (
//           <DetailCard
//             key={active}
//             feature={features[active]}
//             onClose={() => setActive(null)}
//           />
//         )}

//         {/* Stats */}
//         {/* <div className="flex justify-center gap-10 sm:gap-16 mt-10 pt-8 border-t border-green-100">
//           {[["12", "Features"], ["5K+", "Businesses"], ["24/7", "Uptime"], ["∞", "Scale"]].map(([n, l]) => (
//             <div key={l} className="text-center">
//               <div
//                 className="text-2xl sm:text-3xl font-extrabold text-green-600"
//                 style={{ fontFamily: "'Syne', sans-serif" }}
//               >
//                 {n}
//               </div>
//               <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{l}</div>
//             </div>
//           ))}
//         </div> */}
//       </div>

//       {/* Keyframes */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

//         @keyframes breathe {
//           0%, 100% { stroke-opacity: .4; }
//           50%       { stroke-opacity: 1; }
//         }
//         @keyframes nodeRing {
//           0%   { r: 14px; opacity: .7; }
//           100% { r: 28px; opacity: 0; }
//         }
//         @keyframes slideUp {
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  UserPlus, MessageCircle, QrCode, Bot, Layout, GitBranch,
  Plug2, BarChart2, Users2, Megaphone, Sparkles, FileText,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const FEATURES = [
  { Icon: UserPlus,      title: "Embedded Signup",    desc: "Integrated Embedded Signup System that makes customer onboarding seamless and fast. Reduce drop-offs and get users verified in seconds.",                                               badge: "Popular", tag: "Used by 80% of teams"  },
  { Icon: MessageCircle, title: "WhatsApp Chat",       desc: "Seamlessly connect with customers through a unified WhatsApp Chat inbox. Handle multiple conversations simultaneously with smart routing.",                                              tag: "Real-time messaging"     },
  { Icon: QrCode,        title: "QR Code Generator",  desc: "Instantly generate QR codes for your WhatsApp number to drive offline-to-online engagement at stores, events, and print materials.",                                                    tag: "Offline + online"        },
  { Icon: Bot,           title: "Chat-Bot",            desc: "Engage customers 24/7 with intelligent, rule-based chatbot responses. Handle FAQs, lead capture, and support without human intervention.",                                              tag: "Always on"               },
  { Icon: Layout,        title: "Manage Templates",    desc: "Create and manage message templates directly in-app without visiting Meta Business Manager. Get approvals faster with guided workflows.",                        badge: "New",     tag: "Meta-approved"           },
  { Icon: GitBranch,     title: "Flow Maker",          desc: "Build complex bot conversation flows visually with our advanced no-code Flow Maker. Drag, connect, and publish in minutes.",                                                            tag: "No-code builder"         },
  { Icon: Plug2,         title: "API Integration",     desc: "Full REST APIs and webhooks enable smooth integration with any third-party service — CRMs, ERPs, ecommerce platforms, and more.",                                                      tag: "100+ integrations"       },
  { Icon: BarChart2,     title: "Live Analysis",       desc: "Get real-time analytics and delivery status of your campaigns and messages. Track open rates, CTRs, and response times live.",                                                          tag: "Live data"               },
  { Icon: Users2,        title: "Assign Agents",       desc: "Distribute chats to team members and agents with role-based access control. Set SLAs, monitor workload, and reassign in one click.",                                                   tag: "Team management"         },
  { Icon: Megaphone,     title: "Campaigns",           desc: "Effortlessly schedule and manage broadcast campaigns to thousands of contacts. Segment, personalise, and A/B test at scale.",                                                           tag: "Bulk messaging"          },
  { Icon: Sparkles,      title: "AI Chatbot",          desc: "Leverage advanced AI to automate customer interactions with intelligent, contextual responses. Learns from conversation history.",                               badge: "AI",      tag: "Powered by AI"           },
  { Icon: FileText,      title: "Chat Reports",        desc: "Generate comprehensive analytics and detailed reports on all WhatsApp communications. Export to CSV, PDF, or push to your BI tool.",                                                   tag: "Full analytics"          },
];

// Hub centre in SVG coordinates
const HUB = { x: 360, y: 268 };

// [cx, cy, labelAnchor, lx, ly]
const NODE_POS = [
  [158, 148, "end",   136, 148], // 0 L
  [130, 200, "end",   108, 200], // 1 L
  [202, 178, "end",   180, 178], // 2 L
  [228, 224, "end",   206, 224], // 3 L
  [210, 278, "end",   188, 278], // 4 L
  [155, 315, "end",   133, 315], // 5 L
  [562, 148, "start", 584, 148], // 6 R
  [590, 200, "start", 612, 200], // 7 R
  [518, 178, "start", 540, 178], // 8 R
  [492, 224, "start", 514, 224], // 9 R
  [510, 278, "start", 532, 278], // 10 R
  [565, 315, "start", 587, 315], // 11 R
];

const BRANCH_D = [
  `M${HUB.x},${HUB.y} Q272,202 158,148`,
  `M${HUB.x},${HUB.y} Q252,232 130,200`,
  `M${HUB.x},${HUB.y} Q290,218 202,178`,
  `M${HUB.x},${HUB.y} Q298,244 228,224`,
  `M${HUB.x},${HUB.y} Q292,272 210,278`,
  `M${HUB.x},${HUB.y} Q264,288 155,315`,
  `M${HUB.x},${HUB.y} Q448,202 562,148`,
  `M${HUB.x},${HUB.y} Q468,232 590,200`,
  `M${HUB.x},${HUB.y} Q430,218 518,178`,
  `M${HUB.x},${HUB.y} Q422,244 492,224`,
  `M${HUB.x},${HUB.y} Q428,272 510,278`,
  `M${HUB.x},${HUB.y} Q456,288 565,315`,
];

const BADGE_CLS = {
  Popular: "bg-green-100 text-green-800 border border-green-200",
  New:     "bg-blue-100  text-blue-800  border border-blue-200",
  AI:      "bg-purple-100 text-purple-800 border border-purple-200",
};

// ─── PulseDot ──────────────────────────────────────────────────────────────────
function PulseDot() {
  return (
    <span className="relative inline-flex w-2 h-2 mr-2 flex-shrink-0 mt-0.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
    </span>
  );
}

// ─── DetailCard ────────────────────────────────────────────────────────────────
function DetailCard({ feature, onClose }) {
  const { Icon, title, desc, badge, tag } = feature;
  return (
    <div className="mt-5 flex items-start gap-4 bg-white border border-green-200 rounded-2xl p-5
                    shadow-md shadow-green-100/40
                    animate-[slideUp_.32s_cubic-bezier(.2,.8,.3,1)_forwards]
                    opacity-0 translate-y-3">
      <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-200
                      flex items-center justify-center flex-shrink-0 text-green-600">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <h3 className="text-base font-extrabold text-gray-900" style={{ fontFamily: "'Syne',sans-serif" }}>
            {title}
          </h3>
          {badge && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide ${BADGE_CLS[badge]}`}>
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
        <div className="inline-flex items-center gap-1 mt-3 text-xs text-green-700 font-medium
                        bg-green-50 border border-green-200 rounded-full px-3 py-1">
          <PulseDot />
          {tag}
        </div>
      </div>
      <button
        onClick={onClose}
        aria-label="Close detail"
        className="flex-shrink-0 mt-0.5 text-gray-300 hover:text-gray-500 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

// ─── FeatureTree (SVG layer) ───────────────────────────────────────────────────
function FeatureTree({ active, onSelect }) {
  const svgRef       = useRef(null);
  const pathRefs     = useRef([]);
  const travRefs     = useRef([]);
  const waveTimer    = useRef(null);
  const travelTimers = useRef([]);

  // ── 1. Branch draw-in on mount ──────────────────────────────────────────────
  useEffect(() => {
    const paths = pathRefs.current;
    paths.forEach((p, i) => {
      if (!p) return;
      const len = p.getTotalLength ? p.getTotalLength() : 280;
      p.style.strokeDasharray  = `${len}`;
      p.style.strokeDashoffset = `${len}`;
      const tid = setTimeout(() => {
        p.style.transition       = "stroke-dashoffset .75s ease, stroke .35s, stroke-width .35s";
        p.style.strokeDashoffset = "0";
      }, 220 + i * 72);
      travelTimers.current.push(tid);
    });
    return () => travelTimers.current.forEach(clearTimeout);
  }, []);

  // ── 2. Continuous signal wave ───────────────────────────────────────────────
  const fireWave = useCallback(() => {
    travRefs.current.forEach((c, i) => {
      if (!c) return;
      const tid = setTimeout(() => {
        // reset
        c.style.transition     = "none";
        c.style.offsetDistance = "0%";
        c.style.opacity        = "0";
        // trigger reflow
        void c.getBoundingClientRect();
        // animate
        c.style.transition     = "offset-distance 1.1s cubic-bezier(.4,0,.6,1), opacity .12s ease";
        c.style.opacity        = "1";
        c.style.offsetDistance = "100%";
        const hide = setTimeout(() => { if (c) c.style.opacity = "0"; }, 1050);
        travelTimers.current.push(hide);
      }, i * 105);
      travelTimers.current.push(tid);
    });
  }, []);

  useEffect(() => {
    // delay first wave until branches finish drawing
    const init = setTimeout(() => {
      fireWave();
      waveTimer.current = setInterval(fireWave, 3400);
    }, 1200);
    return () => {
      clearTimeout(init);
      clearInterval(waveTimer.current);
      travelTimers.current.forEach(clearTimeout);
    };
  }, [fireWave]);

  // ── 3. Branch colour when active changes ────────────────────────────────────
  useEffect(() => {
    pathRefs.current.forEach((p, i) => {
      if (!p) return;
      if (active === null) {
        p.setAttribute("stroke", "#a7f3d0");
        p.setAttribute("stroke-width", "1.5");
      } else if (active === i) {
        p.setAttribute("stroke", "#059669");
        p.setAttribute("stroke-width", "2.5");
      } else {
        p.setAttribute("stroke", "#e5e7eb");
        p.setAttribute("stroke-width", "1.5");
      }
    });
  }, [active]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 720 460"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto overflow-visible"
      aria-hidden="true"
    >
      <defs>
        {/* path definitions for offset-path travel */}
        {BRANCH_D.map((d, i) => (
          <path key={i} id={`bp${i}`} d={d} />
        ))}
      </defs>

      {/* Trunk */}
      <line
        x1={HUB.x} y1="440" x2={HUB.x} y2={HUB.y}
        stroke="#d1fae5" strokeWidth="2" strokeLinecap="round"
        style={{ animation: "breathe 3s ease infinite" }}
      />

      {/* Branches */}
      {BRANCH_D.map((d, i) => (
        <path
          key={i}
          ref={el => (pathRefs.current[i] = el)}
          d={d}
          fill="none"
          strokeLinecap="round"
          stroke="#a7f3d0"
          strokeWidth="1.5"
        />
      ))}

      {/* Travelling signal dots — one per branch */}
      {BRANCH_D.map((d, i) => (
        <circle
          key={i}
          ref={el => (travRefs.current[i] = el)}
          r="3.5"
          fill="#059669"
          opacity="0"
          style={{
            offsetPath:     `path('${d}')`,
            offsetDistance: "0%",
            offsetRotate:   "0deg",
          }}
        />
      ))}

      {/* Hub glow ring */}
      <circle
        cx={HUB.x} cy={HUB.y} r="36"
        fill="none" stroke="#059669" strokeWidth="1"
        style={{ animation: "hubPulse 2.6s ease infinite" }}
      />
      {/* Hub */}
      <circle cx={HUB.x} cy={HUB.y} r="30" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
      <circle cx={HUB.x} cy={HUB.y} r="19" fill="#059669" />
      <text x={HUB.x} y={HUB.y - 4} textAnchor="middle" dominantBaseline="middle"
        fontFamily="'Syne',sans-serif" fontSize="7.5" fontWeight="700"
        fill="#fff" letterSpacing=".07em">WHATS</text>
      <text x={HUB.x} y={HUB.y + 6} textAnchor="middle" dominantBaseline="middle"
        fontFamily="'Syne',sans-serif" fontSize="7.5" fontWeight="700"
        fill="#fff" letterSpacing=".07em">APP</text>

      {/* Nodes */}
      {NODE_POS.map(([cx, cy, anchor, lx, ly], i) => {
        const isActive = active === i;
        const isDim    = active !== null && !isActive;
        const f        = FEATURES[i];
        return (
          <g
            key={i}
            onClick={() => onSelect(i)}
            style={{
              cursor: "pointer",
              opacity: isDim ? 0.28 : 1,
              transition: "opacity .3s",
              animation: `nodeIn .5s ease ${0.3 + i * 0.06}s both`,
            }}
          >
            {/* Pulse ring */}
            {isActive && (
              <circle
                cx={cx} cy={cy} r="14"
                fill="none" stroke="#059669" strokeWidth="1.5"
                style={{ animation: "ring 1.8s ease-out infinite" }}
              />
            )}
            {/* Outer */}
            <circle cx={cx} cy={cy} r="16"
              fill="none"
              stroke={isActive ? "#059669" : "#d1fae5"}
              strokeWidth={isActive ? 2 : 1.5}
              style={{ transition: "stroke .3s" }}
            />
            {/* Inner */}
            <circle cx={cx} cy={cy} r="11"
              fill={isActive ? "#ecfdf5" : "#fff"}
              stroke={isActive ? "#059669" : "#a7f3d0"}
              strokeWidth="1"
              style={{ transition: "fill .3s, stroke .3s" }}
            />
            {/* Core */}
            <circle cx={cx} cy={cy} r={isActive ? 6 : 5}
              fill={isActive ? "#065f46" : "#d1fae5"}
              style={{ transition: "fill .3s" }}
            />
            {/* Label */}
            <text
              x={lx} y={ly}
              textAnchor={anchor} dominantBaseline="middle"
              fontFamily="'DM Sans',sans-serif"
              fontSize="10.5"
              fontWeight={isActive ? "500" : "400"}
              fill={isActive ? "#065f46" : "#6b7280"}
              style={{ pointerEvents: "none", transition: "fill .3s" }}
            >
              {f.title}
            </text>
            {/* Badge micro-label */}
            {f.badge && (
              <text
                x={lx} y={ly + 13}
                textAnchor={anchor} dominantBaseline="middle"
                fontFamily="'DM Sans',sans-serif"
                fontSize="9" fontWeight="600" fill="#059669"
                style={{ pointerEvents: "none" }}
              >
                {f.badge === "Popular" ? "★ popular" : f.badge === "AI" ? "✦ AI" : "● new"}
              </text>
            )}
          </g>
        );
      })}

      {/* Root label */}
      <text
        x={HUB.x} y="458"
        textAnchor="middle"
        fontFamily="'DM Sans',sans-serif"
        fontSize="11" fill="#059669" opacity=".6" fontStyle="italic"
      >
        Platform core
      </text>
    </svg>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────
export default function FeaturesTreeSection() {
  const [active, setActive] = useState(null);
  const toggle = useCallback((i) => setActive(p => p === i ? null : i), []);

  return (
    <section
      id="features"
      className="py-16 sm:py-24 bg-white relative overflow-hidden"
    >
      {/* Soft radial bg */}
      <div className="pointer-events-none absolute inset-0"
           style={{ background: "radial-gradient(ellipse 65% 45% at 50% 58%, rgba(5,150,105,.05), transparent)" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-2 space-y-2">
          <div className="flex items-center justify-center gap-3 text-[10px] font-medium tracking-[.14em] text-green-600 uppercase">
            <span className="w-6 h-px bg-green-400" />
            Platform features
            <span className="w-6 h-px bg-green-400" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900
                       leading-[1.08] tracking-tight"
           style={{ fontFamily: "sans-serif" }}
          >
            One platform.
            <br />
            <span className="bg-gradient-to-r from-green-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
              Infinite possibilities.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xs mx-auto leading-relaxed">
            Click any node to explore each feature.
          </p>
        </div>

        {/* Tree — negative top margin pulls it up to reduce dead space */}
        <div className="-mt-6 sm:-mt-10">
          <FeatureTree active={active} onSelect={toggle} />
        </div>

        {/* Detail card */}
        {active !== null && (
          <DetailCard
            key={active}
            feature={FEATURES[active]}
            onClose={() => setActive(null)}
          />
        )}
      </div>

      {/* ── Keyframes ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes breathe {
          0%, 100% { stroke-opacity: .35; }
          50%       { stroke-opacity: 1;  }
        }
        @keyframes hubPulse {
          0%, 100% { r: 36; opacity: .45; }
          50%       { r: 42; opacity: 0;  }
        }
        @keyframes ring {
          0%   { r: 14; opacity: .75; stroke-width: 1.5; }
          100% { r: 32; opacity: 0;   stroke-width: .5;  }
        }
        @keyframes nodeIn {
          from { opacity: 0; transform: scale(.35); }
          to   { opacity: 1; transform: scale(1);   }
        }
        @keyframes slideUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}