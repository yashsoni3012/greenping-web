// // "use client";
// // import { useEffect, useState } from "react";
// // import { ArrowRight, Play, Shield, Star, CheckCircle2 } from "lucide-react";

// // const words = ["WhatsApp Marketing", "Customer Engagement", "Business Growth", "Campaign Automation"];

// // export default function HeroSection() {
// //   const [wordIdx, setWordIdx] = useState(0);
// //   const [visible, setVisible] = useState(true);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setVisible(false);
// //       setTimeout(() => {
// //         setWordIdx((i) => (i + 1) % words.length);
// //         setVisible(true);
// //       }, 300);
// //     }, 2800);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section
// //       id="home"
// //       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
// //     >
// //       {/* Background elements */}
// //       <div className="absolute inset-0 grid-lines opacity-100" />
// //       <div className="absolute inset-0 bg-hero-radial" />

// //       {/* Glowing orbs */}
// //       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D46A] rounded-full blur-[140px] opacity-5 pointer-events-none" />
// //       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00D46A] rounded-full blur-[120px] opacity-5 pointer-events-none" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
// //         <div className="grid lg:grid-cols-2 gap-16 items-center">
// //           {/* Left content */}
// //           <div className="text-center lg:text-left space-y-8">
// //             {/* Badge */}
// //             <div
// //               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111914] border border-[#1E2B22] text-sm text-[#00D46A] font-medium fade-up"
// //               style={{ animationDelay: "0.1s" }}
// //             >
// //               <Shield className="w-4 h-4 fill-[#00D46A] text-[#00D46A]" />
// //               Official WhatsApp Business Solution Provider
// //               <span className="w-1.5 h-1.5 rounded-full bg-[#00D46A] animate-pulse" />
// //             </div>

// //             {/* Headline */}
// //             <div
// //               className="space-y-4 fade-up"
// //               style={{ animationDelay: "0.2s" }}
// //             >
// //               <h1
// //                 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
// //                 style={{ fontFamily: "Outfit, sans-serif" }}
// //               >
// //                 <span className="gradient-text-white">Ultimate Solution</span>
// //                 <br />
// //                 <span className="text-[#6B8070]">for </span>
// //                 <span
// //                   className="gradient-text inline-block transition-all duration-300"
// //                   style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}
// //                 >
// //                   {words[wordIdx]}
// //                 </span>
// //               </h1>
// //             </div>

// //             {/* Subtext */}
// //             <p
// //               className="text-[#6B8070] text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 fade-up"
// //               style={{ animationDelay: "0.3s" }}
// //             >
// //               Greenping Solutions is a Meta-verified platform designed to revolutionize
// //               how businesses connect with customers. Secure, reliable, and fully compliant
// //               WhatsApp communication at scale.
// //             </p>

// //             {/* Trust indicators */}
// //             <div
// //               className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-[#6B8070] fade-up"
// //               style={{ animationDelay: "0.35s" }}
// //             >
// //               {["Meta Verified", "No Credit Card", "24/7 Support"].map((t) => (
// //                 <div key={t} className="flex items-center gap-1.5">
// //                   <CheckCircle2 className="w-4 h-4 text-[#00D46A]" />
// //                   {t}
// //                 </div>
// //               ))}
// //             </div>

// //             {/* CTAs */}
// //             <div
// //               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up"
// //               style={{ animationDelay: "0.4s" }}
// //             >
// //               <a
// //                 href="#pricing"
// //                 className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#00D46A] text-black font-bold text-base transition-all"
// //               >
// //                 Get Started Free
// //                 <ArrowRight className="w-5 h-5" />
// //               </a>
// //               <button className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#111914] border border-[#1E2B22] text-white font-medium text-base hover:border-[#00D46A]/40 hover:bg-[#111914]/80 transition-all group">
// //                 <span className="w-8 h-8 rounded-full bg-[#00D46A]/10 flex items-center justify-center group-hover:bg-[#00D46A]/20 transition-colors">
// //                   <Play className="w-3.5 h-3.5 text-[#00D46A] fill-[#00D46A]" />
// //                 </span>
// //                 Watch Demo
// //               </button>
// //             </div>

// //             {/* Social proof */}
// //             <div
// //               className="flex items-center gap-4 justify-center lg:justify-start fade-up"
// //               style={{ animationDelay: "0.5s" }}
// //             >
// //               <div className="flex -space-x-2">
// //                 {["#00D46A", "#00B558", "#7EEDB4", "#22c55e", "#4ade80"].map((c, i) => (
// //                   <div
// //                     key={i}
// //                     className="w-8 h-8 rounded-full border-2 border-[#0A0F0D] flex items-center justify-center text-xs font-bold text-[#0A0F0D]"
// //                     style={{ background: c }}
// //                   >
// //                     {String.fromCharCode(65 + i)}
// //                   </div>
// //                 ))}
// //               </div>
// //               <div>
// //                 <div className="flex items-center gap-1">
// //                   {[...Array(5)].map((_, i) => (
// //                     <Star key={i} className="w-3.5 h-3.5 text-[#00D46A] fill-[#00D46A]" />
// //                   ))}
// //                 </div>
// //                 <p className="text-xs text-[#6B8070]">Trusted by 10,000+ businesses</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right — dashboard mockup */}
// //           <div
// //             className="relative fade-up"
// //             style={{ animationDelay: "0.6s" }}
// //           >
// //             <div className="relative float-anim">
// //               {/* Main card */}
// //               <div className="glass-card rounded-3xl p-1 shadow-glow-lg">
// //                 <div className="bg-[#0D1710] rounded-2xl overflow-hidden">
// //                   {/* Window bar */}
// //                   <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E2B22]">
// //                     <div className="w-3 h-3 rounded-full bg-red-500/70" />
// //                     <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
// //                     <div className="w-3 h-3 rounded-full bg-[#00D46A]/70" />
// //                     <div className="flex-1 mx-4 h-5 rounded bg-[#1E2B22] flex items-center px-2">
// //                       <span className="text-[9px] text-[#4B6B57]">app.greenping.io/dashboard</span>
// //                     </div>
// //                   </div>

// //                   {/* Dashboard body */}
// //                   <div className="p-5 space-y-4">
// //                     {/* Header row */}
// //                     <div className="flex items-center justify-between">
// //                       <div>
// //                         <div className="text-xs text-[#4B6B57]">Good morning</div>
// //                         <div className="text-sm font-semibold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>Dashboard Overview</div>
// //                       </div>
// //                       <div className="px-3 py-1 rounded-full bg-[#00D46A]/10 text-[#00D46A] text-xs font-medium border border-[#00D46A]/20">
// //                         ● Live
// //                       </div>
// //                     </div>

// //                     {/* Metric cards */}
// //                     <div className="grid grid-cols-3 gap-2">
// //                       {[
// //                         { label: "Messages Sent",   value: "24.8K", delta: "+12%" },
// //                         { label: "Open Rate",        value: "98.2%", delta: "+4%" },
// //                         { label: "Campaigns",        value: "142",   delta: "+8" },
// //                       ].map((m) => (
// //                         <div key={m.label} className="bg-[#111914] rounded-xl p-3 border border-[#1E2B22]">
// //                           <div className="text-[10px] text-[#4B6B57] mb-1">{m.label}</div>
// //                           <div className="text-lg font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>{m.value}</div>
// //                           <div className="text-[10px] text-[#00D46A]">{m.delta} this week</div>
// //                         </div>
// //                       ))}
// //                     </div>

// //                     {/* Message preview */}
// //                     <div className="bg-[#111914] rounded-xl p-4 border border-[#1E2B22] space-y-3">
// //                       <div className="flex items-center gap-2">
// //                         <div className="w-7 h-7 rounded-full bg-[#00D46A]/20 flex items-center justify-center">
// //                           <span className="text-xs text-[#00D46A] font-bold">R</span>
// //                         </div>
// //                         <div>
// //                           <div className="text-xs font-medium text-white">Rahul Sharma</div>
// //                           <div className="text-[10px] text-[#4B6B57]">+91 98765 43210</div>
// //                         </div>
// //                         <div className="ml-auto text-[10px] text-[#4B6B57]">2m ago</div>
// //                       </div>
// //                       <div className="bg-[#1E2B22] rounded-lg p-2.5 text-[11px] text-[#8FAF9B]">
// //                         Hi! I received your offer. I'm interested in the Premium plan. Can we schedule a demo?
// //                       </div>
// //                       <div className="flex gap-2">
// //                         <div className="flex-1 h-6 rounded-lg bg-[#1E2B22]" />
// //                         <div className="px-3 h-6 rounded-lg bg-[#00D46A] flex items-center">
// //                           <span className="text-[10px] font-semibold text-black">Reply</span>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Mini chart */}
// //                     <div className="space-y-2">
// //                       <div className="flex items-center justify-between text-[10px] text-[#4B6B57]">
// //                         <span>Weekly campaign performance</span>
// //                         <span className="text-[#00D46A]">↑ 23%</span>
// //                       </div>
// //                       <div className="flex items-end gap-1.5 h-16">
// //                         {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
// //                           <div
// //                             key={i}
// //                             className="flex-1 rounded-sm bg-gradient-to-t from-[#00D46A] to-[#7EEDB4] opacity-80 transition-all"
// //                             style={{ height: `${h}%` }}
// //                           />
// //                         ))}
// //                       </div>
// //                       <div className="flex justify-between text-[9px] text-[#4B6B57]">
// //                         {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <span key={d}>{d}</span>)}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Floating badges */}
// //               <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-2.5 border border-[#1E2B22] shadow-glow-sm">
// //                 <div className="text-xs text-[#4B6B57]">Message delivered</div>
// //                 <div className="text-sm font-bold text-[#00D46A]" style={{ fontFamily: "Outfit, sans-serif" }}>+1,240 ✓✓</div>
// //               </div>
// //               <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-2.5 border border-[#1E2B22] shadow-glow-sm">
// //                 <div className="text-xs text-[#4B6B57]">Response rate</div>
// //                 <div className="text-sm font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>98.2% <span className="text-[#00D46A]">↑</span></div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom fade */}
// //       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F0D] to-transparent pointer-events-none" />
// //     </section>
// //   );
// // }

// "use client";
// import { useEffect, useState } from "react";
// import { ArrowRight, Play, Shield, Star, CheckCircle2 } from "lucide-react";

// const words = ["WhatsApp Marketing", "Customer Engagement", "Business Growth", "Campaign Automation"];

// export default function HeroSection() {
//   const [wordIdx, setWordIdx] = useState(0);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisible(false);
//       setTimeout(() => {
//         setWordIdx((i) => (i + 1) % words.length);
//         setVisible(true);
//       }, 300);
//     }, 2800);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-white"
//     >
//       {/* Light theme background elements */}
//       <div className="absolute inset-0 grid-lines opacity-20" />
//       <div className="absolute inset-0 bg-hero-radial-light" />

//       {/* Glowing orbs – softer and lighter */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D46A] rounded-full blur-[140px] opacity-10 pointer-events-none" />
//       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00D46A] rounded-full blur-[120px] opacity-10 pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left content */}
//           <div className="text-center lg:text-left space-y-8">
//             {/* Badge – light version */}
//             <div
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm text-[#00D46A] font-medium fade-up"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <Shield className="w-4 h-4 fill-[#00D46A] text-[#00D46A]" />
//               Official WhatsApp Business Solution Provider
//               <span className="w-1.5 h-1.5 rounded-full bg-[#00D46A] animate-pulse" />
//             </div>

//             {/* Headline – dark text */}
//             <div
//               className="space-y-4 fade-up"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <h1
//                 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900"
//                 style={{ fontFamily: "Outfit, sans-serif" }}
//               >
//                 <span className="gradient-text-light">Ultimate Solution</span>
//                 <br />
//                 <span className="text-gray-500">for </span>
//                 <span
//                   className="gradient-text-light inline-block transition-all duration-300"
//                   style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}
//                 >
//                   {words[wordIdx]}
//                 </span>
//               </h1>
//             </div>

//             {/* Subtext */}
//             <p
//               className="text-gray-500 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 fade-up"
//               style={{ animationDelay: "0.3s" }}
//             >
//               Greenping Solutions is a Meta-verified platform designed to revolutionize
//               how businesses connect with customers. Secure, reliable, and fully compliant
//               WhatsApp communication at scale.
//             </p>

//             {/* Trust indicators */}
//             <div
//               className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-500 fade-up"
//               style={{ animationDelay: "0.35s" }}
//             >
//               {["Meta Verified", "No Credit Card", "24/7 Support"].map((t) => (
//                 <div key={t} className="flex items-center gap-1.5">
//                   <CheckCircle2 className="w-4 h-4 text-[#00D46A]" />
//                   {t}
//                 </div>
//               ))}
//             </div>

//             {/* CTAs – light theme adjustments */}
//             <div
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up"
//               style={{ animationDelay: "0.4s" }}
//             >
//               <a
//                 href="#pricing"
//                 className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#00D46A] text-white font-bold text-base transition-all hover:bg-[#00B558] shadow-sm"
//               >
//                 Get Started Free
//                 <ArrowRight className="w-5 h-5" />
//               </a>
//               <button className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gray-100 border border-gray-200 text-gray-700 font-medium text-base hover:border-[#00D46A]/40 hover:bg-gray-50 transition-all group">
//                 <span className="w-8 h-8 rounded-full bg-[#00D46A]/10 flex items-center justify-center group-hover:bg-[#00D46A]/20 transition-colors">
//                   <Play className="w-3.5 h-3.5 text-[#00D46A] fill-[#00D46A]" />
//                 </span>
//                 Watch Demo
//               </button>
//             </div>

//             {/* Social proof – light */}
//             <div
//               className="flex items-center gap-4 justify-center lg:justify-start fade-up"
//               style={{ animationDelay: "0.5s" }}
//             >
//               <div className="flex -space-x-2">
//                 {["#00D46A", "#00B558", "#7EEDB4", "#22c55e", "#4ade80"].map((c, i) => (
//                   <div
//                     key={i}
//                     className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm"
//                     style={{ background: c }}
//                   >
//                     {String.fromCharCode(65 + i)}
//                   </div>
//                 ))}
//               </div>
//               <div>
//                 <div className="flex items-center gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-3.5 h-3.5 text-[#00D46A] fill-[#00D46A]" />
//                   ))}
//                 </div>
//                 <p className="text-xs text-gray-500">Trusted by 10,000+ businesses</p>
//               </div>
//             </div>
//           </div>

//           {/* Right — dashboard mockup (light version) */}
//           <div
//             className="relative fade-up"
//             style={{ animationDelay: "0.6s" }}
//           >
//             <div className="relative float-anim">
//               {/* Main card – light glass */}
//               <div className="glass-card-light rounded-3xl p-1 shadow-lg">
//                 <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
//                   {/* Window bar */}
//                   <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
//                     <div className="w-3 h-3 rounded-full bg-red-400/70" />
//                     <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
//                     <div className="w-3 h-3 rounded-full bg-[#00D46A]/70" />
//                     <div className="flex-1 mx-4 h-5 rounded bg-gray-100 flex items-center px-2">
//                       <span className="text-[9px] text-gray-400">app.greenping.io/dashboard</span>
//                     </div>
//                   </div>

//                   {/* Dashboard body */}
//                   <div className="p-5 space-y-4">
//                     {/* Header row */}
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-xs text-gray-400">Good morning</div>
//                         <div className="text-sm font-semibold text-gray-800" style={{ fontFamily: "Outfit, sans-serif" }}>Dashboard Overview</div>
//                       </div>
//                       <div className="px-3 py-1 rounded-full bg-[#00D46A]/10 text-[#00D46A] text-xs font-medium border border-[#00D46A]/20">
//                         ● Live
//                       </div>
//                     </div>

//                     {/* Metric cards */}
//                     <div className="grid grid-cols-3 gap-2">
//                       {[
//                         { label: "Messages Sent",   value: "24.8K", delta: "+12%" },
//                         { label: "Open Rate",        value: "98.2%", delta: "+4%" },
//                         { label: "Campaigns",        value: "142",   delta: "+8" },
//                       ].map((m) => (
//                         <div key={m.label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
//                           <div className="text-[10px] text-gray-400 mb-1">{m.label}</div>
//                           <div className="text-lg font-bold text-gray-800" style={{ fontFamily: "Outfit, sans-serif" }}>{m.value}</div>
//                           <div className="text-[10px] text-[#00D46A]">{m.delta} this week</div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Message preview */}
//                     <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3">
//                       <div className="flex items-center gap-2">
//                         <div className="w-7 h-7 rounded-full bg-[#00D46A]/20 flex items-center justify-center">
//                           <span className="text-xs text-[#00D46A] font-bold">R</span>
//                         </div>
//                         <div>
//                           <div className="text-xs font-medium text-gray-800">Rahul Sharma</div>
//                           <div className="text-[10px] text-gray-400">+91 98765 43210</div>
//                         </div>
//                         <div className="ml-auto text-[10px] text-gray-400">2m ago</div>
//                       </div>
//                       <div className="bg-gray-100 rounded-lg p-2.5 text-[11px] text-gray-600">
//                         Hi! I received your offer. I'm interested in the Premium plan. Can we schedule a demo?
//                       </div>
//                       <div className="flex gap-2">
//                         <div className="flex-1 h-6 rounded-lg bg-gray-100" />
//                         <div className="px-3 h-6 rounded-lg bg-[#00D46A] flex items-center">
//                           <span className="text-[10px] font-semibold text-white">Reply</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Mini chart */}
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-between text-[10px] text-gray-400">
//                         <span>Weekly campaign performance</span>
//                         <span className="text-[#00D46A]">↑ 23%</span>
//                       </div>
//                       <div className="flex items-end gap-1.5 h-16">
//                         {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
//                           <div
//                             key={i}
//                             className="flex-1 rounded-sm bg-gradient-to-t from-[#00D46A] to-[#7EEDB4] opacity-80 transition-all"
//                             style={{ height: `${h}%` }}
//                           />
//                         ))}
//                       </div>
//                       <div className="flex justify-between text-[9px] text-gray-400">
//                         {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <span key={d}>{d}</span>)}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating badges – light version */}
//               <div className="absolute -top-4 -right-4 glass-card-light rounded-2xl px-4 py-2.5 border border-gray-100 shadow-md bg-white/90 backdrop-blur-sm">
//                 <div className="text-xs text-gray-400">Message delivered</div>
//                 <div className="text-sm font-bold text-[#00D46A]" style={{ fontFamily: "Outfit, sans-serif" }}>+1,240 ✓✓</div>
//               </div>
//               <div className="absolute -bottom-4 -left-4 glass-card-light rounded-2xl px-4 py-2.5 border border-gray-100 shadow-md bg-white/90 backdrop-blur-sm">
//                 <div className="text-xs text-gray-400">Response rate</div>
//                 <div className="text-sm font-bold text-gray-800" style={{ fontFamily: "Outfit, sans-serif" }}>98.2% <span className="text-[#00D46A]">↑</span></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom fade – light gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
//     </section>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Shield, Star, CheckCircle2 } from "lucide-react";

const words = ["WhatsApp Marketing", "Customer Engagement", "Business Growth", "Campaign Automation"];

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-white"
    >
      {/* Background blocks (grid of squares / lines) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        {/* Subtle block pattern – darker lines for light theme */}
        <div className="absolute inset-0 bg-block-pattern opacity-10" />
      </div>

      {/* Light theme background elements */}
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute inset-0 bg-hero-radial-light" />

      {/* Glowing orbs – softer and lighter */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D46A] rounded-full blur-[140px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00D46A] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge – light version */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm text-[#00D46A] font-medium fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Shield className="w-4 h-4 fill-[#00D46A] text-[#00D46A]" />
              Official WhatsApp Business Solution Provider
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D46A] animate-pulse" />
            </div>

            {/* Headline – dark text */}
            <div
              className="space-y-4 fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                <span className="gradient-text-light">Ultimate Solution</span>
                <br />
                <span className="text-gray-500">for </span>
                <span
                  className="gradient-text-light inline-block transition-all duration-300"
                  style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}
                >
                  {words[wordIdx]}
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p
              className="text-gray-500 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Greenping Solutions is a Meta-verified platform designed to revolutionize
              how businesses connect with customers. Secure, reliable, and fully compliant
              WhatsApp communication at scale.
            </p>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-500 fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              {["Meta Verified", "No Credit Card", "24/7 Support"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D46A]" />
                  {t}
                </div>
              ))}
            </div>

            {/* CTAs – light theme adjustments */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#pricing"
                className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#00D46A] text-white font-bold text-base transition-all hover:bg-[#00B558] shadow-sm"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gray-100 border border-gray-200 text-gray-700 font-medium text-base hover:border-[#00D46A]/40 hover:bg-gray-50 transition-all group">
                <span className="w-8 h-8 rounded-full bg-[#00D46A]/10 flex items-center justify-center group-hover:bg-[#00D46A]/20 transition-colors">
                  <Play className="w-3.5 h-3.5 text-[#00D46A] fill-[#00D46A]" />
                </span>
                Watch Demo
              </button>
            </div>

            {/* Social proof – light */}
            <div
              className="flex items-center gap-4 justify-center lg:justify-start fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex -space-x-2">
                {["#00D46A", "#00B558", "#7EEDB4", "#22c55e", "#4ade80"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm"
                    style={{ background: c }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#00D46A] fill-[#00D46A]" />
                  ))}
                </div>
                <p className="text-xs text-gray-500">Trusted by 10,000+ businesses</p>
              </div>
            </div>
          </div>

          {/* Right — dashboard mockup (light version) */}
          <div
            className="relative fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative float-anim">
              {/* Main card – light glass */}
              <div className="glass-card-light rounded-3xl p-1 shadow-lg">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                  {/* Window bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-[#00D46A]/70" />
                    <div className="flex-1 mx-4 h-5 rounded bg-gray-100 flex items-center px-2">
                      <span className="text-[9px] text-gray-400">app.greenping.io/dashboard</span>
                    </div>
                  </div>

                  {/* Dashboard body */}
                  <div className="p-5 space-y-4">
                    {/* Header row */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-400">Good morning</div>
                        <div className="text-sm font-semibold text-gray-800" style={{ fontFamily: "Outfit, sans-serif" }}>Dashboard Overview</div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-[#00D46A]/10 text-[#00D46A] text-xs font-medium border border-[#00D46A]/20">
                        ● Live
                      </div>
                    </div>

                    {/* Metric cards */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Messages Sent",   value: "24.8K", delta: "+12%" },
                        { label: "Open Rate",        value: "98.2%", delta: "+4%" },
                        { label: "Campaigns",        value: "142",   delta: "+8" },
                      ].map((m) => (
                        <div key={m.label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                          <div className="text-[10px] text-gray-400 mb-1">{m.label}</div>
                          <div className="text-lg font-bold text-gray-800" style={{ fontFamily: "Outfit, sans-serif" }}>{m.value}</div>
                          <div className="text-[10px] text-[#00D46A]">{m.delta} this week</div>
                        </div>
                      ))}
                    </div>

                    {/* Message preview */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#00D46A]/20 flex items-center justify-center">
                          <span className="text-xs text-[#00D46A] font-bold">R</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-800">Rahul Sharma</div>
                          <div className="text-[10px] text-gray-400">+91 98765 43210</div>
                        </div>
                        <div className="ml-auto text-[10px] text-gray-400">2m ago</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-2.5 text-[11px] text-gray-600">
                        Hi! I received your offer. I'm interested in the Premium plan. Can we schedule a demo?
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-6 rounded-lg bg-gray-100" />
                        <div className="px-3 h-6 rounded-lg bg-[#00D46A] flex items-center">
                          <span className="text-[10px] font-semibold text-white">Reply</span>
                        </div>
                      </div>
                    </div>

                    {/* Mini chart */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-gray-400">
                        <span>Weekly campaign performance</span>
                        <span className="text-[#00D46A]">↑ 23%</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-16">
                        {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-gradient-to-t from-[#00D46A] to-[#7EEDB4] opacity-80 transition-all"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-[9px] text-gray-400">
                        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <span key={d}>{d}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges – light version */}
              <div className="absolute -top-4 -right-4 glass-card-light rounded-2xl px-4 py-2.5 border border-gray-100 shadow-md bg-white/90 backdrop-blur-sm">
                <div className="text-xs text-gray-400">Message delivered</div>
                <div className="text-sm font-bold text-[#00D46A]" style={{ fontFamily: "Outfit, sans-serif" }}>+1,240 ✓✓</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card-light rounded-2xl px-4 py-2.5 border border-gray-100 shadow-md bg-white/90 backdrop-blur-sm">
                <div className="text-xs text-gray-400">Response rate</div>
                <div className="text-sm font-bold text-gray-800" style={{ fontFamily: "Outfit, sans-serif" }}>98.2% <span className="text-[#00D46A]">↑</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade – light gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}