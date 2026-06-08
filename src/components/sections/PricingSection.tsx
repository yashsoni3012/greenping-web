// "use client";

// import { useState, useRef, useEffect, useCallback } from "react";
// import { Check, Zap, Star, Crown, ChevronLeft, ChevronRight } from "lucide-react";

// const cycles = [
//   { key: "monthly", label: "Monthly" },
//   { key: "6months", label: "6 Months", discount: "Save 10%" },
//   { key: "12months", label: "12 Months", discount: "Save 20%" },
//   { key: "18months", label: "18 Months", discount: "Save 30%" },
// ];

// const plans = [
//   {
//     name: "Free",
//     icon: Zap,
//     tagline: "Perfect for getting started",
//     price: { monthly: 0, "6months": 0, "12months": 0, "18months": 0 },
//     featured: false,
//     cta: "Get Started Free",
//     features: [
//       "10 Contacts",
//       "5 Campaigns / Month",
//       "10 Bot Replies",
//       "10 Bot Flows",
//       "2 Contact Custom Fields",
//       "5 Team Members / Agents",
//       "AI Chat Bot",
//       "API & Webhook Access",
//     ],
//   },
//   {
//     name: "Premium",
//     icon: Star,
//     tagline: "For growing businesses",
//     price: { monthly: 2500, "6months": 2250, "12months": 2000, "18months": 1750 },
//     featured: true,
//     cta: "Choose Premium",
//     features: [
//       "1,000 Contacts",
//       "50 Campaigns / Month",
//       "100 Bot Replies",
//       "10 Bot Flows",
//       "100 Contact Custom Fields",
//       "10 Team Members / Agents",
//       "AI Chat Bot",
//       "API & Webhook Access",
//     ],
//   },
//   {
//     name: "Ultimate",
//     icon: Crown,
//     tagline: "Unlimited everything",
//     price: { monthly: 3500, "6months": 3150, "12months": 2800, "18months": 2450 },
//     featured: false,
//     cta: "Choose Ultimate",
//     features: [
//       "Unlimited Contacts",
//       "Unlimited Campaigns",
//       "Unlimited Bot Replies",
//       "Unlimited Bot Flows",
//       "Unlimited Custom Fields",
//       "Unlimited Team Members",
//       "AI Chat Bot",
//       "API & Webhook Access",
//     ],
//   },
// ];

// // Helper to get previous, current, next card indices (circular)
// const getVisibleIndices = (centerIdx: number) => {
//   const prev = (centerIdx - 1 + plans.length) % plans.length;
//   const next = (centerIdx + 1) % plans.length;
//   return [prev, centerIdx, next];
// };

// export default function PricingCarouselSection() {
//   const [cycle, setCycle] = useState("monthly");
//   const [centerIndex, setCenterIndex] = useState(0); // index in original plans array
//   const [visibleCards, setVisibleCards] = useState(() => getVisibleIndices(0).map(i => plans[i]));
//   const [isSliding, setIsSliding] = useState(false);
//   const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [cardWidth, setCardWidth] = useState(0);
//   const [gap, setGap] = useState(24);
//   const [containerWidth, setContainerWidth] = useState(0);

//   // Update dimensions
//   const updateDimensions = useCallback(() => {
//     if (!containerRef.current || !trackRef.current?.children[0]) return;
//     const container = containerRef.current;
//     const firstCard = trackRef.current.children[0] as HTMLElement;
//     const gapValue = parseInt(window.getComputedStyle(container).gap) || 24;
//     setGap(gapValue);
//     setCardWidth(firstCard.offsetWidth);
//     setContainerWidth(container.offsetWidth);
//   }, []);

//   useEffect(() => {
//     updateDimensions();
//     window.addEventListener("resize", updateDimensions);
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, [updateDimensions]);

//   // Function to slide to next or previous
//   const slide = (direction: "prev" | "next") => {
//     if (isSliding) return;
//     setIsSliding(true);
//     setSlideDirection(direction === "prev" ? "left" : "right");

//     // Animate the track
//     if (trackRef.current) {
//       const translateX = direction === "prev" ? cardWidth + gap : -(cardWidth + gap);
//       trackRef.current.style.transition = "transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)";
//       trackRef.current.style.transform = `translateX(${translateX}px)`;
//     }

//     // After animation, update the visible cards and reset position
//     setTimeout(() => {
//       // Compute new center index
//       let newCenter: number;
//       if (direction === "prev") {
//         newCenter = (centerIndex - 1 + plans.length) % plans.length;
//       } else {
//         newCenter = (centerIndex + 1) % plans.length;
//       }
//       setCenterIndex(newCenter);
//       const newIndices = getVisibleIndices(newCenter);
//       setVisibleCards(newIndices.map(i => plans[i]));

//       // Reset track position without animation
//       if (trackRef.current) {
//         trackRef.current.style.transition = "none";
//         trackRef.current.style.transform = "translateX(0px)";
//         // Force reflow
//         void trackRef.current.offsetHeight;
//         trackRef.current.style.transition = "";
//       }
//       setIsSliding(false);
//       setSlideDirection(null);
//     }, 300);
//   };

//   const prev = () => slide("prev");
//   const next = () => slide("next");

//   // Auto-play
//   useEffect(() => {
//     const id = setInterval(() => {
//       if (!isSliding) next();
//     }, 4500);
//     return () => clearInterval(id);
//   }, [isSliding, centerIndex]);

//   // For mobile dots, we need the real center index
//   const realPlanIndex = centerIndex;

//   // Compute dynamic scale/opacity for each card based on position
//   const getCardStyle = (position: number) => {
//     // position: 0 = left, 1 = center, 2 = right
//     if (position === 1) {
//       return { scale: 1, opacity: 1, zIndex: 20 };
//     } else {
//       return { scale: 0.85, opacity: 0.5, zIndex: 5 };
//     }
//   };

//   return (
//     <section
//       id="pricing"
//       className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
//     >
//       {/* Background effects */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-white" />
//       <div
//         className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
//         style={{ background: "radial-gradient(circle, #10B981, transparent 70%)" }}
//       />
//       <div
//         className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10"
//         style={{ background: "radial-gradient(circle, #14B8A6, transparent 70%)" }}
//       />

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-10 sm:mb-14 space-y-3">
//           <h2
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
//             style={{ fontFamily: "Outfit, sans-serif" }}
//           >
//             Plans that{" "}
//             <span className="bg-gradient-to-r from-green-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
//               scale with you
//             </span>
//           </h2>
//           <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
//             Choose the plan that fits your business. Upgrade or downgrade anytime.
//           </p>
//         </div>

//         {/* Billing toggle */}
//         <div className="flex justify-center mb-10 sm:mb-14">
//           <div className="inline-flex flex-wrap justify-center items-center gap-1 p-1 rounded-2xl bg-gray-100 border border-gray-200">
//             {cycles.map((c) => (
//               <button
//                 key={c.key}
//                 onClick={() => setCycle(c.key)}
//                 className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
//                   cycle === c.key
//                     ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-sm"
//                     : "text-gray-500 hover:text-gray-900"
//                 }`}
//               >
//                 {c.label}
//                 {c.discount && (
//                   <span
//                     className={`ml-1 text-[10px] font-semibold ${
//                       cycle === c.key ? "text-white/80" : "text-green-600"
//                     }`}
//                   >
//                     {c.discount}
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Carousel container */}
//         <div className="relative">
//           <div
//             ref={containerRef}
//             className="overflow-hidden mx-auto"
//             style={{ maxWidth: "100%" }}
//           >
//             <div
//               ref={trackRef}
//               className="flex gap-6"
//               style={{ transform: "translateX(0px)", transition: "none" }}
//             >
//               {visibleCards.map((plan, idx) => {
//                 const { scale, opacity, zIndex } = getCardStyle(idx);
//                 const isCenter = idx === 1;
//                 return (
//                   <div
//                     key={`${centerIndex}-${idx}`} // force re-render when cards change
//                     className="flex-shrink-0 transition-all duration-300"
//                     style={{
//                       width: "calc(100% / 3 - 16px)",
//                       minWidth: "280px",
//                       transform: `scale(${scale})`,
//                       opacity,
//                       zIndex,
//                       transition: "transform 0.3s ease, opacity 0.3s ease",
//                     }}
//                   >
//                     <PlanCard plan={plan} cycle={cycle} isCenter={isCenter} />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Navigation buttons */}
//           <button
//             onClick={prev}
//             disabled={isSliding}
//             aria-label="Previous plan"
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-30
//               w-10 h-10 rounded-full bg-white border-2 border-gray-200 shadow-lg
//               flex items-center justify-center transition-all
//               hover:bg-green-50 hover:border-green-300 hover:scale-110
//               disabled:opacity-40 disabled:cursor-not-allowed"
//           >
//             <ChevronLeft className="w-5 h-5 text-green-600" />
//           </button>
//           <button
//             onClick={next}
//             disabled={isSliding}
//             aria-label="Next plan"
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-30
//               w-10 h-10 rounded-full bg-white border-2 border-gray-200 shadow-lg
//               flex items-center justify-center transition-all
//               hover:bg-green-50 hover:border-green-300 hover:scale-110
//               disabled:opacity-40 disabled:cursor-not-allowed"
//           >
//             <ChevronRight className="w-5 h-5 text-green-600" />
//           </button>
//         </div>

//         {/* Mobile pagination dots */}
//         <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
//           {plans.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 let diff = i - realPlanIndex;
//                 if (diff > 0) for (let d = 0; d < diff; d++) next();
//                 else if (diff < 0) for (let d = 0; d < -diff; d++) prev();
//               }}
//               aria-label={`Go to plan ${i + 1}`}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 realPlanIndex === i ? "bg-green-600 w-7" : "bg-gray-300 hover:bg-gray-400 w-2"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Footer note */}
//         <p className="text-center text-gray-500 text-sm mt-8">
//           Have questions about our pricing?{" "}
//           <a href="#contact" className="text-green-600 hover:underline font-medium">
//             Contact us
//           </a>
//         </p>
//       </div>

//       {/* Global styles for smoother transitions */}
//       <style jsx global>{`
//         .pricing-carousel-track {
//           will-change: transform;
//         }
//       `}</style>
//     </section>
//   );
// }

// // PlanCard component (same as before)
// function PlanCard({ plan, cycle, isCenter }: { plan: any; cycle: string; isCenter: boolean }) {
//   return (
//     <div
//       className={`relative h-full rounded-3xl p-px ${plan.featured ? "shadow-2xl" : "shadow-md"}`}
//       style={plan.featured ? { background: "linear-gradient(135deg, #10B981, #14B8A6, #059669)" } : {}}
//     >
//       <div
//         className={`relative h-full rounded-3xl flex flex-col transition-all duration-300 ${
//           plan.featured ? "bg-white" : "bg-white border border-gray-200"
//         } ${isCenter ? "p-6 lg:p-8" : "p-5 lg:p-7"}`}
//       >
//         {plan.featured && (
//           <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
//             <span className="px-4 py-1 rounded-full bg-gradient-to-r from-green-600 to-teal-600 text-white text-[11px] font-bold shadow-lg whitespace-nowrap">
//               ⚡ Most Popular
//             </span>
//           </div>
//         )}

//         <div className="mb-5">
//           <div
//             className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
//               plan.featured
//                 ? "bg-gradient-to-br from-green-600 to-teal-600 text-white"
//                 : "bg-gradient-to-br from-green-50 to-teal-50 text-green-600"
//             }`}
//           >
//             <plan.icon className={`w-5 h-5 ${plan.featured ? "fill-white" : ""}`} />
//           </div>
//           <h3 className="text-xl font-bold text-gray-900 mb-0.5 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
//             {plan.name}
//           </h3>
//           <p className="text-sm text-gray-500">{plan.tagline}</p>
//         </div>

//         <div className="mb-6">
//           {plan.price[cycle] === 0 ? (
//             <div className="text-4xl font-bold text-gray-900" style={{ fontFamily: "Outfit, sans-serif" }}>
//               Free
//             </div>
//           ) : (
//             <div className="flex items-end gap-1 flex-wrap">
//               <span className="text-lg text-gray-400 font-medium">₹</span>
//               <span className="text-4xl font-bold text-gray-900 leading-none" style={{ fontFamily: "Outfit, sans-serif" }}>
//                 {plan.price[cycle].toLocaleString()}
//               </span>
//               <span className="text-gray-400 text-sm mb-1">/mo</span>
//             </div>
//           )}
//           <p className="text-[11px] text-gray-400 mt-1 leading-snug">+ WhatsApp Cloud Messaging Charges</p>
//         </div>

//         <a
//           href="#"
//           className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all mb-6 ${
//             plan.featured
//               ? "bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 shadow-md hover:shadow-lg"
//               : "bg-gray-100 border border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50"
//           }`}
//         >
//           {plan.cta}
//         </a>

//         <div className="border-t border-gray-100 mb-5" />

//         <ul className="space-y-2.5 flex-1">
//           {plan.features.map((f: string, i: number) => (
//             <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
//               <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
//               <span>{f}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Check, Zap, Star, Crown, ChevronLeft, ChevronRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CYCLES = [
  { key: "monthly",  label: "Monthly" },
  { key: "6months",  label: "6 Months",  discount: "Save 10%" },
  { key: "12months", label: "12 Months", discount: "Save 20%" },
  { key: "18months", label: "18 Months", discount: "Save 30%" },
];

const PLANS = [
  {
    name: "Free",
    Icon: Zap,
    tagline: "Perfect for getting started",
    price: { monthly: 0, "6months": 0, "12months": 0, "18months": 0 },
    featured: false,
    cta: "Get Started Free",
    features: ["10 Contacts","5 Campaigns / Month","10 Bot Replies","10 Bot Flows","2 Contact Custom Fields","5 Team Members / Agents","AI Chat Bot","API & Webhook Access"],
  },
  {
    name: "Premium",
    Icon: Star,
    tagline: "For growing businesses",
    price: { monthly: 2500, "6months": 2250, "12months": 2000, "18months": 1750 },
    featured: true,
    cta: "Choose Premium",
    features: ["1,000 Contacts","50 Campaigns / Month","100 Bot Replies","10 Bot Flows","100 Contact Custom Fields","10 Team Members / Agents","AI Chat Bot","API & Webhook Access"],
  },
  {
    name: "Ultimate",
    Icon: Crown,
    tagline: "Unlimited everything",
    price: { monthly: 3500, "6months": 3150, "12months": 2800, "18months": 2450 },
    featured: false,
    cta: "Choose Ultimate",
    features: ["Unlimited Contacts","Unlimited Campaigns","Unlimited Bot Replies","Unlimited Bot Flows","Unlimited Custom Fields","Unlimited Team Members","AI Chat Bot","API & Webhook Access"],
  },
];

// ─── Dot Grid Canvas ──────────────────────────────────────────────────────────

function DotGrid() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const draw = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sp = 22, r = 1.6;
      for (let x = 0; x <= canvas.width; x += sp)
        for (let y = 0; y <= canvas.height; y += sp) {
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(5,150,105,0.18)";
          ctx.fill();
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

// ─── Plan Card ────────────────────────────────────────────────────────────────

function PlanCard({ plan, cycle, isCenter, onClick }) {
  const { name, Icon, tagline, price, featured, cta, features } = plan;
  const priceVal = price[cycle];

  return (
    /*
     * pt-5 creates room above the card so the "Most Popular" badge
     * (absolutely positioned at -top-[14px]) is never clipped.
     * The section uses overflow-visible so nothing cuts it off at the edges.
     */
    <div
      onClick={!isCenter ? onClick : undefined}
      className={[
        "transition-all duration-350 flex-shrink-0 pt-5",
        "w-full sm:w-[calc(33.333%-11px)]",
        isCenter
          ? "scale-100 opacity-100 z-20"
          : "scale-[.88] opacity-50 z-10 cursor-pointer hover:opacity-72",
      ].join(" ")}
      style={{ transition: "transform .35s ease, opacity .35s ease" }}
    >
      {/* gradient-border wrapper for featured */}
      <div
        className={[
          "relative rounded-3xl h-full",
          featured ? "p-px shadow-2xl" : "shadow-md",
        ].join(" ")}
        style={featured ? { background: "linear-gradient(135deg,#10b981,#14b8a6,#059669)" } : {}}
      >
        {/* ── Badge sits here, above the card border, never inside it ── */}
        {featured && (
          <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-30 whitespace-nowrap pointer-events-none">
            <span
              className="inline-block px-4 py-[4px] rounded-full text-white text-[10px] font-extrabold tracking-wide shadow-lg shadow-green-300/40"
              style={{ background: "linear-gradient(120deg,#059669,#0d9488)", fontFamily: "'Syne',sans-serif" }}
            >
              ⚡ Most Popular
            </span>
          </div>
        )}

        {/* Card body */}
        <div
          className={[
            "relative rounded-3xl flex flex-col h-full",
            featured ? "bg-white" : "bg-white border border-gray-200",
            isCenter ? "p-6 lg:p-7" : "p-5",
          ].join(" ")}
        >
          {/* Icon */}
          <div
            className={[
              "w-11 h-11 rounded-xl flex items-center justify-center mb-4",
              featured
                ? "bg-gradient-to-br from-green-600 to-teal-600 text-white"
                : "bg-green-50 text-green-600",
            ].join(" ")}
          >
            <Icon className={`w-5 h-5 ${featured ? "fill-white" : ""}`} />
          </div>

          {/* Name + tagline */}
          <h3
            className="text-lg font-extrabold text-gray-900 mb-0.5 leading-tight"
           style={{ fontFamily: "sans-serif" }}
          >
            {name}
          </h3>
          <p className="text-xs text-gray-400 mb-4">{tagline}</p>

          {/* Price */}
          <div className="mb-1">
            {priceVal === 0 ? (
              <span className="text-4xl font-extrabold text-gray-900" style={{ fontFamily: "sans-serif" }}>
                Free
              </span>
            ) : (
              <div className="flex items-end gap-1 flex-wrap">
                <span className="text-base text-gray-400 font-medium">₹</span>
                <span className="text-4xl font-extrabold text-gray-900 leading-none" style={{ fontFamily: "sans-serif" }}>
                  {priceVal.toLocaleString()}
                </span>
                <span className="text-gray-400 text-xs mb-1">/mo</span>
              </div>
            )}
          </div>
          <p className="text-[10px] text-gray-300 mb-5 leading-snug">
            + WhatsApp Cloud Messaging Charges
          </p>

          {/* CTA */}
          <a
            href="#"
            className={[
              "block text-center py-3 rounded-xl font-semibold text-sm transition-all mb-5",
              featured
                ? "bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 shadow-md hover:shadow-lg"
                : "bg-gray-50 border border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50",
            ].join(" ")}
          >
            {cta}
          </a>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-4" />

          {/* Features */}
          <ul className="space-y-2.5 flex-1">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function PricingCarouselSection() {
  const [cycle, setCycle]     = useState("monthly");
  const [active, setActive]   = useState(0);
  const [sliding, setSliding] = useState(false);
  const autoRef               = useRef(null);

  const indices = [
    (active - 1 + PLANS.length) % PLANS.length,
    active,
    (active + 1) % PLANS.length,
  ];

  const go = useCallback(
    (idx) => {
      if (sliding) return;
      setSliding(true);
      setActive(idx);
      setTimeout(() => setSliding(false), 370);
    },
    [sliding]
  );

  const prev = useCallback(() => go((active - 1 + PLANS.length) % PLANS.length), [active, go]);
  const next = useCallback(() => go((active + 1) % PLANS.length), [active, go]);

  // Auto-play
  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setActive(a => (a + 1) % PLANS.length), 4500);
  }, []);

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [startAuto]);

  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ background: "#f0fdf4" }}
    >
      {/* Dot grid */}
      <DotGrid />

      {/* Soft radial overlay — keeps centre legible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(240,253,244,.62), rgba(240,253,244,.04))",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-12 space-y-3">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200
                       text-[11px] font-medium text-green-700 tracking-wide"
            style={{ background: "rgba(255,255,255,.65)", backdropFilter: "blur(4px)" }}
          >
            <Star className="w-3.5 h-3.5 text-green-600 fill-green-600" />
            Simple pricing
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.08]"
           style={{ fontFamily: "sans-serif" }}
          >
            Plans that{" "}
            <span className="bg-gradient-to-r from-green-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
              scale with you
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Choose the plan that fits your business. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* ── Billing toggle ── */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div
            className="inline-flex flex-wrap justify-center items-center gap-1 p-1 rounded-2xl border border-green-200"
            style={{ background: "rgba(255,255,255,.6)", backdropFilter: "blur(4px)" }}
          >
            {CYCLES.map((c) => (
              <button
                key={c.key}
                onClick={() => setCycle(c.key)}
                className={[
                  "px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap",
                  cycle === c.key
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900",
                ].join(" ")}
              >
                {c.label}
                {c.discount && (
                  <span
                    className={`ml-1 text-[10px] font-semibold ${
                      cycle === c.key ? "text-white/80" : "text-green-600"
                    }`}
                  >
                    {c.discount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Carousel ── */}
        {/*
          overflow-visible is critical — it lets the "Most Popular" badge
          render above the track without being clipped.
          Navigation buttons use absolute positioning outside the overflow boundary.
        */}
        <div
          className="relative"
          onMouseEnter={() => clearInterval(autoRef.current)}
          onMouseLeave={startAuto}
        >
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={sliding}
            aria-label="Previous plan"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-5 z-30
                       w-10 h-10 rounded-full bg-white border border-green-200 shadow-lg
                       flex items-center justify-center transition-all
                       hover:bg-green-50 hover:border-green-400 hover:scale-110
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-green-600" />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            disabled={sliding}
            aria-label="Next plan"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-5 z-30
                       w-10 h-10 rounded-full bg-white border border-green-200 shadow-lg
                       flex items-center justify-center transition-all
                       hover:bg-green-50 hover:border-green-400 hover:scale-110
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-green-600" />
          </button>

          {/* Track — overflow-visible so badge is never clipped */}
          <div className="overflow-visible px-2">
            <div className="flex items-stretch gap-4">
              {indices.map((planIdx, pos) => (
                <PlanCard
                  key={`${planIdx}-${pos}`}
                  plan={PLANS[planIdx]}
                  cycle={cycle}
                  isCenter={pos === 1}
                  onClick={() => (pos === 0 ? prev() : next())}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {PLANS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to plan ${i + 1}`}
              className={[
                "h-2 rounded-full transition-all duration-300 border-none outline-none",
                active === i ? "w-7 bg-green-600" : "w-2 bg-green-200 hover:bg-green-400",
              ].join(" ")}
            />
          ))}
        </div>

        {/* ── Footer note ── */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Have questions about our pricing?{" "}
          <a href="#contact" className="text-green-600 hover:underline font-medium">
            Contact us
          </a>
        </p>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </section>
  );
}