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
//       {/* Background blocks (grid of squares / lines) */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute inset-0 bg-grid-pattern opacity-20" />
//         {/* Subtle block pattern – darker lines for light theme */}
//         <div className="absolute inset-0 bg-block-pattern opacity-10" />
//       </div>

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
import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, Play, Shield, Star, CheckCircle2 } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const WORDS = [
  "WhatsApp Marketing",
  "Customer Engagement",
  "Business Growth",
  "Campaign Automation",
];

const METRICS = [
  { label: "Messages Sent", value: "24.8K", delta: "+12% this week" },
  { label: "Open Rate",     value: "98.2%", delta: "+4% this week"  },
  { label: "Campaigns",     value: "142",   delta: "+8 this week"   },
];

const LIVE_MESSAGES = [
  { initials: "R", color: "#059669", name: "Rahul S.",  text: "Interested in the Premium plan. Can we schedule a demo?" },
  { initials: "P", color: "#0d9488", name: "Priya M.",  text: "Order confirmed! Your tracking link is ready." },
  { initials: "A", color: "#10b981", name: "Aarav K.",  text: "Hi, I saw your offer on the campaign — love it!" },
  { initials: "S", color: "#6d28d9", name: "Sara T.",   text: "Can you send me the brochure for the Ultimate plan?" },
  { initials: "D", color: "#f59e0b", name: "Dev P.",    text: "Your bot replied instantly. Impressive!" },
];

const CHART_INIT = [40, 62, 48, 78, 55, 88, 70];
const CHART_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TRUST = ["Meta Verified", "No Credit Card", "24/7 Support"];

const AVATARS = [
  { bg: "#059669", label: "A" },
  { bg: "#0d9488", label: "B" },
  { bg: "#34d399", label: "C" },
  { bg: "#10b981", label: "D" },
  { bg: "#6ee7b7", label: "E", text: "#065f46" },
];

// ─── Dot grid canvas ──────────────────────────────────────────────────────────

function DotGrid() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sp = 26, r = 1.3;
      for (let x = 0; x < canvas.width; x += sp) {
        for (let y = 0; y < canvas.height; y += sp) {
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(5,150,105,0.10)";
          ctx.fill();
        }
      }
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

// ─── Word rotator ─────────────────────────────────────────────────────────────

function WordRotator() {
  const [idx, setIdx]       = useState(0);
  const [phase, setPhase]   = useState("in"); // "in" | "out"

  useEffect(() => {
    const id = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIdx((i) => (i + 1) % WORDS.length);
        setPhase("in");
      }, 280);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="inline-block text-green-600 transition-all duration-[280ms]"
      style={{
        opacity:   phase === "in" ? 1 : 0,
        transform: phase === "in" ? "translateY(0)" : "translateY(10px)",
      }}
    >
      {WORDS[idx]}
    </span>
  );
}

// ─── Live message feed ────────────────────────────────────────────────────────

function LiveFeed() {
  const [messages, setMessages] = useState(LIVE_MESSAGES.slice(0, 3));
  const idxRef = useRef(3);

  useEffect(() => {
    const id = setInterval(() => {
      const next = LIVE_MESSAGES[idxRef.current % LIVE_MESSAGES.length];
      idxRef.current++;
      setMessages((prev) => [...prev.slice(-2), next]);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-3 space-y-2 overflow-hidden min-h-[88px]">
      {messages.map((m, i) => (
        <div
          key={`${m.initials}-${i}`}
          className="flex items-start gap-2 animate-[msgIn_.4s_ease_forwards]"
        >
          <div
            className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-bold text-white mt-0.5"
            style={{ background: m.color }}
          >
            {m.initials}
          </div>
          <div className="bg-white border border-gray-100 rounded-lg px-2 py-1.5 flex-1">
            <p className="text-[9px] text-gray-400 mb-0.5">{m.name}</p>
            <p className="text-[10px] text-gray-600 leading-snug">{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Animated chart bars ──────────────────────────────────────────────────────

function ChartBars() {
  const [heights, setHeights] = useState(CHART_INIT);

  useEffect(() => {
    const id = setInterval(() => {
      setHeights(CHART_DAYS.map(() => Math.floor(30 + Math.random() * 65)));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[10px] text-gray-400">
        <span>Weekly campaign performance</span>
        <span className="text-green-600">↑ 23%</span>
      </div>
      <div className="flex items-end gap-1 h-10">
        {heights.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm transition-all duration-700 ${
              h > 70 ? "bg-green-500" : "bg-green-200"
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between">
        {CHART_DAYS.map((d) => (
          <span key={d} className="text-[9px] text-gray-400 flex-1 text-center">{d}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Floating badge ───────────────────────────────────────────────────────────

function FloatBadge({ label, value, valueClass = "", className = "" }) {
  return (
    <div
      className={`absolute bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl px-3.5 py-2.5 ${className}`}
    >
      <p className="text-[10px] text-gray-400">{label}</p>
      <p
        className={`text-sm font-extrabold mt-0.5 ${valueClass}`}
        style={{ fontFamily: "sans-serif" }}
      >
        {value}
      </p>
    </div>
  );
}

// ─── Dashboard mockup ─────────────────────────────────────────────────────────

function DashboardMock() {
  return (
    <div className="relative">
      {/* Floating badges */}
      <FloatBadge
        label="Messages delivered"
        value="+1,240 ✓✓"
        valueClass="text-green-600"
        className="animate-[floatA_4s_ease-in-out_infinite] -top-4 -right-3 z-10"
      />
      <FloatBadge
        label="Response rate"
        value="98.2% ↑"
        valueClass="text-gray-900"
        className="animate-[floatB_5s_ease-in-out_infinite] -bottom-4 -left-4 z-10"
      />

      {/* Main card */}
      <div
        className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl shadow-green-100/40
                   animate-[fadeSlideUp_.6s_.6s_both]"
      >
        {/* Window bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <div className="flex-1 mx-3 h-5 bg-gray-100 rounded flex items-center px-2">
            <span className="text-[9px] text-gray-400">app.greenping.io/dashboard</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-400">Good morning</p>
              <p
                className="text-sm font-bold text-gray-900"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Dashboard Overview
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200 text-[10px] font-semibold text-green-700">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-gray-50 border border-gray-100 rounded-xl p-2.5">
                <p className="text-[9px] text-gray-400 mb-1">{m.label}</p>
                <p
                  className="text-base font-extrabold text-gray-900 leading-none"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {m.value}
                </p>
                <p className="text-[9px] text-green-600 mt-1">{m.delta}</p>
              </div>
            ))}
          </div>

          {/* Live feed */}
          <LiveFeed />

          {/* Chart */}
          <ChartBars />
        </div>
      </div>
    </div>
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-white"
    >
      {/* Animated dot grid */}
      <DotGrid />

      {/* Glowing orbs */}
      <div
        aria-hidden="true"
        className="absolute top-0 -left-20 w-[380px] h-[380px] bg-green-400 rounded-full blur-[130px] opacity-[0.07] pointer-events-none animate-[orbDrift_8s_ease-in-out_infinite_alternate]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 w-[300px] h-[300px] bg-teal-400 rounded-full blur-[110px] opacity-[0.07] pointer-events-none animate-[orbDrift_10s_ease-in-out_infinite_alternate-reverse]"
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT ── */}
          <div className="text-center lg:text-left space-y-7">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-sm text-green-800 font-medium
                         animate-[fadeSlideUp_.6s_.1s_both]"
            >
              <Shield className="w-4 h-4 text-green-600" />
              Official WhatsApp Business Solution Provider
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-900
                         animate-[fadeSlideUp_.6s_.2s_both]"
              style={{ fontFamily: "sans-serif" }}
            >
              Ultimate solution
              <br />
              <span className="text-gray-400 font-bold text-[.75em]">for </span>
              <WordRotator />
            </h1>

            {/* Subtext */}
            <p
              className="text-gray-500 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0
                         animate-[fadeSlideUp_.6s_.3s_both]"
            >
              Greenping Solutions is a Meta-verified platform designed to revolutionise
              how businesses connect with customers — secure, reliable, and fully compliant
              WhatsApp communication at scale.
            </p>

            {/* Trust items */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-5 text-sm text-gray-500
                         animate-[fadeSlideUp_.6s_.35s_both]"
            >
              {TRUST.map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start
                         animate-[fadeSlideUp_.6s_.4s_both]"
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-green-600
                           text-white font-semibold text-base transition-all
                           hover:bg-green-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200
                           active:scale-[.98]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl
                           bg-gray-50 border border-gray-200 text-gray-700 font-medium text-base
                           hover:border-green-400 hover:text-green-700 hover:bg-white transition-all group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Play className="w-3.5 h-3.5 text-green-600 fill-green-600" />
                </span>
                Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div
              className="flex items-center gap-4 justify-center lg:justify-start
                         animate-[fadeSlideUp_.6s_.5s_both]"
            >
              <div className="flex -space-x-2">
                {AVATARS.map((av, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-sm"
                    style={{ background: av.bg, color: av.text || "#fff" }}
                  >
                    {av.label}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-400">Trusted by 10,000+ businesses</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="hidden lg:block animate-[fadeSlideUp_.6s_.55s_both]">
            <DashboardMock />
          </div>

        </div>
      </div>

      {/* Global keyframes */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbDrift {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(28px, 18px); }
        }
        @keyframes floatA {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        @keyframes msgIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}