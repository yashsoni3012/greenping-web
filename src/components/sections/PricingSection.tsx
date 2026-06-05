// "use client";
// import { useState } from "react";
// import { Check, Zap, Star, Crown } from "lucide-react";

// type BillingCycle = "monthly" | "6months" | "12months" | "18months";

// const cycles: { key: BillingCycle; label: string; discount?: string }[] = [
//   { key: "monthly",  label: "Monthly" },
//   { key: "6months",  label: "6 Months",  discount: "Save 10%" },
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

// export default function PricingSection() {
//   const [cycle, setCycle] = useState<BillingCycle>("monthly");

//   return (
//     <section id="pricing" className="py-24 relative">
//       {/* bg accent */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0D1710]/60 via-transparent to-transparent pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-12 space-y-4">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111914] border border-[#1E2B22] text-sm text-[#00D46A]">
//             <Star className="w-3.5 h-3.5 fill-[#00D46A]" />
//             Simple Pricing
//           </div>
//           <h2
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
//             style={{ fontFamily: "Outfit, sans-serif" }}
//           >
//             Plans that <span className="gradient-text">scale with you</span>
//           </h2>
//           <p className="text-[#6B8070] text-lg">
//             Choose the plan that fits your business. Upgrade or downgrade anytime.
//           </p>
//         </div>

//         {/* Billing toggle */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-[#111914] border border-[#1E2B22]">
//             {cycles.map((c) => (
//               <button
//                 key={c.key}
//                 onClick={() => setCycle(c.key)}
//                 className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all ${
//                   cycle === c.key
//                     ? "bg-[#00D46A] text-black shadow-glow-sm"
//                     : "text-[#6B8070] hover:text-white"
//                 }`}
//               >
//                 {c.label}
//                 {c.discount && (
//                   <span className={`ml-1.5 text-[10px] font-semibold ${cycle === c.key ? "text-black/70" : "text-[#00D46A]"}`}>
//                     {c.discount}
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Plan cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {plans.map((plan, i) => (
//             <div
//               key={i}
//               className={`relative rounded-3xl p-px transition-all duration-300 ${
//                 plan.featured ? "shadow-glow-md" : ""
//               }`}
//               style={
//                 plan.featured
//                   ? { background: "linear-gradient(135deg, #00D46A, #7EEDB4, #00B558)" }
//                   : { background: "transparent" }
//               }
//             >
//               <div
//                 className={`relative h-full rounded-3xl p-6 lg:p-8 ${
//                   plan.featured ? "bg-[#0D1710]" : "glass-card border border-[#1E2B22]"
//                 }`}
//               >
//                 {plan.featured && (
//                   <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
//                     <span className="px-4 py-1 rounded-full bg-[#00D46A] text-black text-xs font-bold">
//                       ⚡ Most Popular
//                     </span>
//                   </div>
//                 )}

//                 {/* Plan header */}
//                 <div className="mb-6">
//                   <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${plan.featured ? "bg-[#00D46A] text-black" : "bg-[#00D46A]/10 text-[#00D46A]"}`}>
//                     <plan.icon className={`w-5 h-5 ${plan.featured ? "fill-black" : ""}`} />
//                   </div>
//                   <h3
//                     className="text-xl font-bold text-white mb-1"
//                     style={{ fontFamily: "Outfit, sans-serif" }}
//                   >
//                     {plan.name}
//                   </h3>
//                   <p className="text-sm text-[#6B8070]">{plan.tagline}</p>
//                 </div>

//                 {/* Price */}
//                 <div className="mb-6">
//                   {plan.price[cycle] === 0 ? (
//                     <div className="text-4xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
//                       Free
//                     </div>
//                   ) : (
//                     <div className="flex items-end gap-1">
//                       <span className="text-lg text-[#6B8070] font-medium">₹</span>
//                       <span
//                         className="text-4xl font-bold text-white"
//                         style={{ fontFamily: "Outfit, sans-serif" }}
//                       >
//                         {plan.price[cycle].toLocaleString()}
//                       </span>
//                       <span className="text-[#6B8070] text-sm mb-1">/month</span>
//                     </div>
//                   )}
//                   <p className="text-xs text-[#4B6B57] mt-1">+ WhatsApp Cloud Messaging Charges</p>
//                 </div>

//                 {/* CTA */}
//                 <a
//                   href="#"
//                   className={`w-full block text-center py-3.5 rounded-xl font-semibold text-sm transition-all mb-6 ${
//                     plan.featured
//                       ? "bg-[#00D46A] text-black hover:bg-[#00B558] shadow-glow-sm"
//                       : "bg-[#111914] border border-[#1E2B22] text-white hover:border-[#00D46A]/40 hover:bg-[#1E2B22]"
//                   }`}
//                 >
//                   {plan.cta}
//                 </a>

//                 {/* Features */}
//                 <ul className="space-y-3">
//                   {plan.features.map((f, j) => (
//                     <li key={j} className="flex items-center gap-2.5 text-sm text-[#8FAF9B]">
//                       <Check className="w-4 h-4 text-[#00D46A] flex-shrink-0" />
//                       {f}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact note */}
//         <p className="text-center text-[#6B8070] text-sm mt-8">
//           Have questions about our pricing?{" "}
//           <a href="#contact" className="text-[#00D46A] hover:underline">
//             Contact us
//           </a>
//         </p>
//       </div>
//     </section>
//   );
// }


"use client";
import { useState } from "react";
import { Check, Zap, Star, Crown } from "lucide-react";

type BillingCycle = "monthly" | "6months" | "12months" | "18months";

const cycles: { key: BillingCycle; label: string; discount?: string }[] = [
  { key: "monthly",  label: "Monthly" },
  { key: "6months",  label: "6 Months",  discount: "Save 10%" },
  { key: "12months", label: "12 Months", discount: "Save 20%" },
  { key: "18months", label: "18 Months", discount: "Save 30%" },
];

const plans = [
  {
    name: "Free",
    icon: Zap,
    tagline: "Perfect for getting started",
    price: { monthly: 0, "6months": 0, "12months": 0, "18months": 0 },
    featured: false,
    cta: "Get Started Free",
    features: [
      "10 Contacts",
      "5 Campaigns / Month",
      "10 Bot Replies",
      "10 Bot Flows",
      "2 Contact Custom Fields",
      "5 Team Members / Agents",
      "AI Chat Bot",
      "API & Webhook Access",
    ],
  },
  {
    name: "Premium",
    icon: Star,
    tagline: "For growing businesses",
    price: { monthly: 2500, "6months": 2250, "12months": 2000, "18months": 1750 },
    featured: true,
    cta: "Choose Premium",
    features: [
      "1,000 Contacts",
      "50 Campaigns / Month",
      "100 Bot Replies",
      "10 Bot Flows",
      "100 Contact Custom Fields",
      "10 Team Members / Agents",
      "AI Chat Bot",
      "API & Webhook Access",
    ],
  },
  {
    name: "Ultimate",
    icon: Crown,
    tagline: "Unlimited everything",
    price: { monthly: 3500, "6months": 3150, "12months": 2800, "18months": 2450 },
    featured: false,
    cta: "Choose Ultimate",
    features: [
      "Unlimited Contacts",
      "Unlimited Campaigns",
      "Unlimited Bot Replies",
      "Unlimited Bot Flows",
      "Unlimited Custom Fields",
      "Unlimited Team Members",
      "AI Chat Bot",
      "API & Webhook Access",
    ],
  },
];

export default function PricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="py-24 relative bg-white">
      {/* Light gradient background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 text-sm text-green-700 font-medium">
            <Star className="w-3.5 h-3.5 fill-green-600 text-green-600" />
            Simple Pricing
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Plans that <span className="bg-gradient-to-r from-green-600 via-teal-600 to-green-600 bg-clip-text text-transparent">scale with you</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the plan that fits your business. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Billing toggle – light */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-gray-100 border border-gray-200">
            {cycles.map((c) => (
              <button
                key={c.key}
                onClick={() => setCycle(c.key)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  cycle === c.key
                    ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {c.label}
                {c.discount && (
                  <span className={`ml-1.5 text-[10px] font-semibold ${cycle === c.key ? "text-white/80" : "text-green-600"}`}>
                    {c.discount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-px transition-all duration-300 ${
                plan.featured ? "shadow-xl" : ""
              }`}
              style={
                plan.featured
                  ? { background: "linear-gradient(135deg, #10B981, #14B8A6, #059669)" }
                  : { background: "transparent" }
              }
            >
              <div
                className={`relative h-full rounded-3xl p-6 lg:p-8 ${
                  plan.featured
                    ? "bg-white"
                    : "bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-green-600 to-teal-600 text-white text-xs font-bold shadow-sm">
                      ⚡ Most Popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    plan.featured
                      ? "bg-gradient-to-br from-green-600 to-teal-600 text-white"
                      : "bg-gradient-to-br from-green-50 to-teal-50 text-green-600"
                  }`}>
                    <plan.icon className={`w-5 h-5 ${plan.featured ? "fill-white" : ""}`} />
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-1"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {plan.price[cycle] === 0 ? (
                    <div className="text-4xl font-bold text-gray-900" style={{ fontFamily: "Outfit, sans-serif" }}>
                      Free
                    </div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-lg text-gray-500 font-medium">₹</span>
                      <span
                        className="text-4xl font-bold text-gray-900"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {plan.price[cycle].toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-sm mb-1">/month</span>
                    </div>
                  )}
                  <p className="text-xs text-gray-400 mt-1">+ WhatsApp Cloud Messaging Charges</p>
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className={`w-full block text-center py-3.5 rounded-xl font-semibold text-sm transition-all mb-6 ${
                    plan.featured
                      ? "bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 shadow-md"
                      : "bg-gray-100 border border-gray-200 text-gray-700 hover:border-green-300 hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Have questions about our pricing?{" "}
          <a href="#contact" className="text-green-600 hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}