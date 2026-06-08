

// import { Shield, Globe, Zap, CheckCircle2 } from "lucide-react";

// const pillars = [
//   {
//     icon: Shield,
//     title: "Meta Verified",
//     desc: "Officially verified by Meta — ensuring compliance, trust, and uninterrupted service.",
//   },
//   {
//     icon: Globe,
//     title: "Global Reach",
//     desc: "Reach customers in 180+ countries through WhatsApp's worldwide infrastructure.",
//   },
//   {
//     icon: Zap,
//     title: "Secure & Compliant",
//     desc: "End-to-end encrypted communication with GDPR compliance built in.",
//   },
// ];

// const apiFeatures = [
//   "Webhooks & REST API",
//   "Bulk message sending",
//   "Media message support",
//   "Template management API",
//   "Contact list management",
//   "Delivery status callbacks",
// ];

// export default function ApiSection() {
//   return (
//     <section className="py-24 relative overflow-hidden bg-white">
//       {/* Glow background – softer green/teal gradient */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-300/20 to-teal-300/20 rounded-full blur-[200px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left — visual (light theme code block) */}
//           <div className="relative">
//             {/* Code block mockup – light glass */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
//               {/* Title bar */}
//               <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50">
//                 <div className="flex gap-1.5">
//                   <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
//                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
//                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
//                 </div>
//                 <span className="text-xs text-gray-500 ml-2 font-mono">send-message.js</span>
//               </div>

//               <div className="p-5 font-mono text-xs leading-relaxed bg-white">
//                 <div><span className="text-gray-400">
//                   {/*  Send WhatsApp message via Greenping API */}
//                 </span></div>
//                 <div className="mt-2">
//                   <span className="text-purple-600">const</span>
//                   <span className="text-gray-800"> response </span>
//                   <span className="text-green-600">= </span>
//                   <span className="text-purple-600">await </span>
//                   <span className="text-gray-800">fetch</span>
//                   <span className="text-gray-400">(</span>
//                 </div>
//                 <div className="pl-4 text-green-600">&apos;https://api.greenping.io/v1/messages&apos;<span className="text-gray-400">,</span></div>
//                 <div className="pl-4 text-gray-400">{"{"}</div>
//                 <div className="pl-8"><span className="text-purple-600">method</span><span className="text-gray-800">: </span><span className="text-green-600">&apos;POST&apos;</span><span className="text-gray-400">,</span></div>
//                 <div className="pl-8"><span className="text-purple-600">headers</span><span className="text-gray-800">: {"{"}</span></div>
//                 <div className="pl-12"><span className="text-purple-600">&apos;Authorization&apos;</span><span className="text-gray-800">: </span><span className="text-green-600">`Bearer ${"{"}<span className="text-gray-800">API_KEY</span>{"}"}`</span><span className="text-gray-400">,</span></div>
//                 <div className="pl-12"><span className="text-purple-600">&apos;Content-Type&apos;</span><span className="text-gray-800">: </span><span className="text-green-600">&apos;application/json&apos;</span></div>
//                 <div className="pl-8"><span className="text-gray-800">{"}"}</span><span className="text-gray-400">,</span></div>
//                 <div className="pl-8"><span className="text-purple-600">body</span><span className="text-gray-800">: JSON.stringify({"{"}</span></div>
//                 <div className="pl-12"><span className="text-purple-600">to</span><span className="text-gray-800">: </span><span className="text-green-600">&apos;+919876543210&apos;</span><span className="text-gray-400">,</span></div>
//                 <div className="pl-12"><span className="text-purple-600">type</span><span className="text-gray-800">: </span><span className="text-green-600">&apos;template&apos;</span><span className="text-gray-400">,</span></div>
//                 <div className="pl-12"><span className="text-purple-600">template</span><span className="text-gray-800">: {"{"} </span><span className="text-purple-600">name</span><span className="text-gray-800">: </span><span className="text-green-600">&apos;order_confirm&apos;</span><span className="text-gray-800"> {"}"}</span></div>
//                 <div className="pl-8"><span className="text-gray-400">)</span></div>
//                 <div className="pl-4"><span className="text-gray-400">{"}"}</span></div>
//                 <div className="text-gray-400">);</div>
//                 <div className="mt-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-teal-50 border border-green-200">
//                   <span className="text-gray-400">
//                     {/* // Response: */}
//                   </span>
//                   <span className="text-green-600">{"{ "}</span>
//                   <span className="text-purple-600">status</span>
//                   <span className="text-gray-800">: </span>
//                   <span className="text-green-600">&apos;sent&apos;</span>
//                   <span className="text-gray-800">, </span>
//                   <span className="text-purple-600">messageId</span>
//                   <span className="text-gray-800">: </span>
//                   <span className="text-green-600">&apos;wamid.xyz&apos;</span>
//                   <span className="text-green-600">{" }"}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Floating badge – light theme with green gradient */}
//             <div className="absolute -top-5 -right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-green-200 shadow-md">
//               <div className="text-xs text-gray-500 mb-0.5">Delivery rate</div>
//               <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent" style={{ fontFamily: "Outfit, sans-serif" }}>99.9%</div>
//             </div>
//           </div>

//           {/* Right — copy */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 text-sm text-green-700 font-medium">
//                 <Zap className="w-3.5 h-3.5 text-green-600" />
//                 Official Cloud API
//               </div>
//               <h2
//                 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
//                 style={{ fontFamily: "Outfit, sans-serif" }}
//               >
//                 Powered by{" "}
//                 <span className="bg-gradient-to-r from-green-600 via-teal-600 to-green-600 bg-clip-text text-transparent">Official WhatsApp</span>
//                 <br />Cloud API
//               </h2>
//               <p className="text-gray-500 text-lg leading-relaxed">
//                 Our platform leverages the official WhatsApp Cloud API to provide
//                 businesses with a powerful, reliable, and compliant communication
//                 solution — connecting you to the world&apos;s most popular messaging app.
//               </p>
//             </div>

//             {/* Pillars – light theme cards with hover gradient */}
//             <div className="space-y-4">
//               {pillars.map((p, i) => (
//                 <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300">
//                   <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center flex-shrink-0">
//                     <p.icon className="w-5 h-5 text-green-600" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900 text-sm mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{p.title}</div>
//                     <div className="text-gray-500 text-sm">{p.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* API feature list – light */}
//             <div className="grid grid-cols-2 gap-2">
//               {apiFeatures.map((f, i) => (
//                 <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
//                   <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
//                   {f}
//                 </div>
//               ))}
//             </div>

//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold transition-all hover:from-green-700 hover:to-teal-700 shadow-md hover:shadow-lg"
//             >
//               View API Docs
//               <Zap className="w-4 h-4 fill-white" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Shield, Globe, Zap, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Meta Verified",
    desc: "Officially verified by Meta — ensuring compliance, trust, and uninterrupted service.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Reach customers in 180+ countries through WhatsApp's worldwide infrastructure.",
  },
  {
    icon: Zap,
    title: "Secure & Compliant",
    desc: "End-to-end encrypted communication with GDPR compliance built in.",
  },
];

const apiFeatures = [
  "Webhooks & REST API",
  "Bulk message sending",
  "Media message support",
  "Template management API",
  "Contact list management",
  "Delivery status callbacks",
];

export default function ApiSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Glow background – softer green/teal gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-300/20 to-teal-300/20 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual (light theme code block) */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-gray-500 ml-2 font-mono">send-message.js</span>
              </div>

              <div className="p-5 font-mono text-xs leading-relaxed bg-white">
                <div>
                  <span className="text-gray-400"></span>
                </div>
                <div className="mt-2">
                  <span className="text-purple-600">const</span>
                  <span className="text-gray-800"> response </span>
                  <span className="text-green-600">= </span>
                  <span className="text-purple-600">await </span>
                  <span className="text-gray-800">fetch</span>
                  <span className="text-gray-400">(</span>
                </div>
                <div className="pl-4 text-green-600">
                  &apos;https://api.greenping.io/v1/messages&apos;<span className="text-gray-400">,</span>
                </div>
                <div className="pl-4 text-gray-400">{"{"}</div>
                <div className="pl-8">
                  <span className="text-purple-600">method</span>
                  <span className="text-gray-800">: </span>
                  <span className="text-green-600">&apos;POST&apos;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-8">
                  <span className="text-purple-600">headers</span>
                  <span className="text-gray-800">: {"{"}</span>
                </div>
                <div className="pl-12">
                  <span className="text-purple-600">&apos;Authorization&apos;</span>
                  <span className="text-gray-800">: </span>
                  <span className="text-green-600">{`Bearer ${"{"}<span className="text-gray-800">API_KEY</span>{"}"}`}</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-12">
                  <span className="text-purple-600">&apos;Content-Type&apos;</span>
                  <span className="text-gray-800">: </span>
                  <span className="text-green-600">&apos;application/json&apos;</span>
                </div>
                <div className="pl-8">
                  <span className="text-gray-800">{"}"}</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-8">
                  <span className="text-purple-600">body</span>
                  <span className="text-gray-800">: JSON.stringify({"{"})</span>
                </div>
                <div className="pl-12">
                  <span className="text-purple-600">to</span>
                  <span className="text-gray-800">: </span>
                  <span className="text-green-600">&apos;+919876543210&apos;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-12">
                  <span className="text-purple-600">type</span>
                  <span className="text-gray-800">: </span>
                  <span className="text-green-600">&apos;template&apos;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-12">
                  <span className="text-purple-600">template</span>
                  <span className="text-gray-800">: {"{"} </span>
                  <span className="text-purple-600">name</span>
                  <span className="text-gray-800">: </span>
                  <span className="text-green-600">&apos;order_confirm&apos;</span>
                  <span className="text-gray-800"> {"}"}</span>
                </div>
                <div className="pl-8">
                  <span className="text-gray-400">)</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">{"}"}</span>
                </div>
                <div className="text-gray-400">);</div>
                <div className="mt-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-teal-50 border border-green-200">
                  <span className="text-gray-400"></span>
                  <span className="text-green-600">{"{ "}</span>
                  <span className="text-purple-600">status</span>
                  <span className="text-gray-800">: </span>
                  <span className="text-green-600">&apos;sent&apos;</span>
                  <span className="text-gray-800">, </span>
                  <span className="text-purple-600">messageId</span>
                  <span className="text-gray-800">: </span>
                  <span className="text-green-600">&apos;wamid.xyz&apos;</span>
                  <span className="text-green-600">{" }"}</span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-5 -right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-green-200 shadow-md">
              <div className="text-xs text-gray-500 mb-0.5">Delivery rate</div>
              <div
                className="text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                99.9%
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 text-sm text-green-700 font-medium">
                <Zap className="w-3.5 h-3.5 text-green-600" />
                Official Cloud API
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Powered by{" "}
                <span className="bg-gradient-to-r from-green-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                  Official WhatsApp
                </span>
                <br />
                Cloud API
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Our platform leverages the official WhatsApp Cloud API to provide
                businesses with a powerful, reliable, and compliant communication
                solution — connecting you to the world&apos;s most popular messaging
                app.
              </p>
            </div>

            {/* Pillars – light theme cards */}
            <div className="space-y-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div
                      className="font-semibold text-gray-900 text-sm mb-1"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {p.title}
                    </div>
                    <div className="text-gray-500 text-sm">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* API feature list */}
            <div className="grid grid-cols-2 gap-2">
              {apiFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold transition-all hover:from-green-700 hover:to-teal-700 shadow-md hover:shadow-lg"
            >
              View API Docs
              <Zap className="w-4 h-4 fill-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}