// "use client";
// import { useState } from "react";
// import { Plus, Minus, HelpCircle } from "lucide-react";

// const faqs = [
//   {
//     q: "How can I integrate WhatsApp with my business account?",
//     a: "To integrate WhatsApp, simply sign up for Greenping, connect your WhatsApp Business Account, and follow the step-by-step guide provided in the dashboard. Our Embedded Signup process makes onboarding take less than 5 minutes — fully using the official WhatsApp Cloud API.",
//   },
//   {
//     q: "Can I manage multiple phone numbers on the same account?",
//     a: "Yes! Greenping supports managing multiple phone numbers under the same WhatsApp Business Account, enabling you to handle communication from different channels — regional offices, brands, or product lines — all in a single unified interface.",
//   },
//   {
//     q: "How do I create and manage message templates?",
//     a: "You can easily create, edit, and submit WhatsApp message templates directly within the Greenping dashboard — no need to visit Meta Business Manager separately. Navigate to the Templates section, create your template, submit for approval, and deploy in campaigns.",
//   },
//   {
//     q: "What analytics does the platform provide?",
//     a: "Greenping provides real-time analytics on message delivery rates, open rates, response times, campaign performance, bot engagement, and agent activity. All data is presented in visual dashboards with export options for deeper analysis.",
//   },
//   {
//     q: "Is my data secure when using Greenping?",
//     a: "Absolutely. We use industry-standard AES-256 encryption for all stored data. All communications use WhatsApp's built-in end-to-end encryption. We are GDPR compliant and follow WhatsApp's privacy and security policies strictly.",
//   },
//   {
//     q: "Can I set up an AI-powered chatbot without coding?",
//     a: "Yes! Our Flow Maker lets you build sophisticated conversation flows visually — no code needed. For more advanced AI responses, our AI Chatbot feature uses large language models to automatically handle customer queries with contextual, intelligent answers.",
//   },
// ];

// export default function FaqSection() {
//   const [open, setOpen] = useState<number | null>(null);

//   return (
//     <section id="faq" className="py-24 relative">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6">
//         {/* Header */}
//         <div className="text-center mb-16 space-y-4">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111914] border border-[#1E2B22] text-sm text-[#00D46A]">
//             <HelpCircle className="w-3.5 h-3.5" />
//             Got questions?
//           </div>
//           <h2
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
//             style={{ fontFamily: "Outfit, sans-serif" }}
//           >
//             Frequently Asked <span className="gradient-text">Questions</span>
//           </h2>
//           <p className="text-[#6B8070]">
//             Everything you need to know about Greenping Solutions.
//           </p>
//         </div>

//         {/* Accordion */}
//         <div className="space-y-3">
//           {faqs.map((faq, i) => (
//             <div
//               key={i}
//               className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
//                 open === i ? "border-[#00D46A]/40 shadow-glow-sm" : "border-[#1E2B22]"
//               }`}
//             >
//               <button
//                 className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
//                 onClick={() => setOpen(open === i ? null : i)}
//               >
//                 <span
//                   className={`font-semibold text-sm sm:text-base transition-colors ${
//                     open === i ? "text-[#00D46A]" : "text-white"
//                   }`}
//                   style={{ fontFamily: "Outfit, sans-serif" }}
//                 >
//                   {i + 1}. {faq.q}
//                 </span>
//                 <span
//                   className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
//                     open === i
//                       ? "bg-[#00D46A] text-black"
//                       : "bg-[#1E2B22] text-[#6B8070]"
//                   }`}
//                 >
//                   {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
//                 </span>
//               </button>

//               <div
//                 className={`overflow-hidden transition-all duration-300 ${
//                   open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <p className="px-6 pb-5 text-[#6B8070] text-sm leading-relaxed">{faq.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-12 text-center p-8 glass-card rounded-3xl border border-[#1E2B22]">
//           <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
//             Still have questions?
//           </h3>
//           <p className="text-[#6B8070] text-sm mb-4">
//             Our team is ready to help you get set up and growing.
//           </p>
//           <a
//             href="#contact"
//             className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00D46A] text-black font-semibold text-sm transition-all"
//           >
//             Talk to Support
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How can I integrate WhatsApp with my business account?",
    a: "To integrate WhatsApp, simply sign up for Greenping, connect your WhatsApp Business Account, and follow the step-by-step guide provided in the dashboard. Our Embedded Signup process makes onboarding take less than 5 minutes — fully using the official WhatsApp Cloud API.",
  },
  {
    q: "Can I manage multiple phone numbers on the same account?",
    a: "Yes! Greenping supports managing multiple phone numbers under the same WhatsApp Business Account, enabling you to handle communication from different channels — regional offices, brands, or product lines — all in a single unified interface.",
  },
  {
    q: "How do I create and manage message templates?",
    a: "You can easily create, edit, and submit WhatsApp message templates directly within the Greenping dashboard — no need to visit Meta Business Manager separately. Navigate to the Templates section, create your template, submit for approval, and deploy in campaigns.",
  },
  {
    q: "What analytics does the platform provide?",
    a: "Greenping provides real-time analytics on message delivery rates, open rates, response times, campaign performance, bot engagement, and agent activity. All data is presented in visual dashboards with export options for deeper analysis.",
  },
  {
    q: "Is my data secure when using Greenping?",
    a: "Absolutely. We use industry-standard AES-256 encryption for all stored data. All communications use WhatsApp's built-in end-to-end encryption. We are GDPR compliant and follow WhatsApp's privacy and security policies strictly.",
  },
  {
    q: "Can I set up an AI-powered chatbot without coding?",
    a: "Yes! Our Flow Maker lets you build sophisticated conversation flows visually — no code needed. For more advanced AI responses, our AI Chatbot feature uses large language models to automatically handle customer queries with contextual, intelligent answers.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 text-sm text-green-700 font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-green-600" />
            Got questions?
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Want To <span className="bg-gradient-to-r from-green-600 via-teal-600 to-green-600 bg-clip-text text-transparent">Know More?</span>
          </h2>
          <p className="text-gray-500">
            Everything you need to know about Greenping Solutions.
          </p>
        </div>

        {/* FAQ Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "border-green-300 shadow-md"
                  : "border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              <button
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className={`font-semibold text-sm sm:text-base transition-colors ${
                    open === i ? "text-green-600" : "text-gray-900"
                  }`}
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {i + 1}. {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    open === i
                      ? "bg-gradient-to-r from-green-600 to-teal-600 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA – full width */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl border border-green-200 shadow-sm">
          <h3 className="text-gray-900 font-semibold text-lg mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
            Still have questions?
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Our team is ready to help you get set up and growing.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold text-sm transition-all hover:from-green-700 hover:to-teal-700 shadow-md"
          >
            Talk to Support
          </a>
        </div>
      </div>
    </section>
  );
}