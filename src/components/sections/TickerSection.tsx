// import { Shield, Zap, Globe, Lock, Star, MessageSquare } from "lucide-react";

// const items = [
//   { icon: Shield,       label: "Meta Verified Partner" },
//   { icon: Zap,          label: "Official WhatsApp Cloud API" },
//   { icon: Globe,        label: "Global Reach" },
//   { icon: Lock,         label: "End-to-End Encrypted" },
//   { icon: Star,         label: "98% Satisfaction Rate" },
//   { icon: MessageSquare,label: "24/7 Support" },
//   { icon: Shield,       label: "GDPR Compliant" },
//   { icon: Zap,          label: "Real-time Analytics" },
// ];

// export default function TickerSection() {
//   return (
//     <section className="py-6 border-y border-[#1E2B22] bg-[#0D1710] overflow-hidden relative">
//       <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F0D] via-transparent to-[#0A0F0D] z-10 pointer-events-none" />
//       <div className="ticker-wrapper">
//         <div className="ticker-track">
//           {[...items, ...items].map((item, i) => (
//             <div
//               key={i}
//               className="inline-flex items-center gap-2.5 mx-8 text-[#6B8070] hover:text-[#00D46A] transition-colors cursor-default"
//             >
//               <item.icon className="w-4 h-4 text-[#00D46A]" />
//               <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
//               <span className="text-[#1E2B22] text-xl">·</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { Shield, Zap, Globe, Lock, Star, MessageSquare } from "lucide-react";

const items = [
  { icon: Shield,       label: "Meta Verified Partner" },
  { icon: Zap,          label: "Official WhatsApp Cloud API" },
  { icon: Globe,        label: "Global Reach" },
  { icon: Lock,         label: "End-to-End Encrypted" },
  { icon: Star,         label: "98% Satisfaction Rate" },
  { icon: MessageSquare,label: "24/7 Support" },
  { icon: Shield,       label: "GDPR Compliant" },
  { icon: Zap,          label: "Real-time Analytics" },
];

export default function TickerSection() {
  return (
    <section className="py-6 border-y border-gray-200 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 mx-8 text-gray-500 hover:text-[#00D46A] transition-colors cursor-default"
            >
              <item.icon className="w-4 h-4 text-[#00D46A]" />
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              <span className="text-gray-300 text-xl">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}