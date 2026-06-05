// "use client";
// import {
//   UserPlus, MessageCircle, QrCode, Bot, Layout, GitBranch,
//   Plug2, BarChart2, Users2, Megaphone, Sparkles, FileText,
// } from "lucide-react";

// const features = [
//   {
//     icon: UserPlus,
//     title: "Embedded Signup",
//     desc: "Integrated Embedded Signup System that makes customer onboarding seamless and fast.",
//     badge: "Popular",
//   },
//   {
//     icon: MessageCircle,
//     title: "Integrated WhatsApp Chat",
//     desc: "Seamlessly connect with customers through a unified WhatsApp Chat inbox.",
//   },
//   {
//     icon: QrCode,
//     title: "QR Code Generator",
//     desc: "Instantly generate QR codes for your WhatsApp number to drive offline engagement.",
//   },
//   {
//     icon: Bot,
//     title: "Chat-Bot",
//     desc: "Engage customers 24/7 with intelligent, rule-based chatbot responses effortlessly.",
//   },
//   {
//     icon: Layout,
//     title: "Manage Templates",
//     desc: "Create and manage message templates directly in-app without visiting Meta Business Manager.",
//     badge: "New",
//   },
//   {
//     icon: GitBranch,
//     title: "Flow Maker",
//     desc: "Build complex bot conversation flows visually with our advanced no-code Flow Maker.",
//   },
//   {
//     icon: Plug2,
//     title: "API Integration",
//     desc: "Full REST APIs and webhooks enable smooth integration with any third-party service.",
//   },
//   {
//     icon: BarChart2,
//     title: "Live Analysis",
//     desc: "Get real-time analytics and delivery status of your campaigns and messages.",
//   },
//   {
//     icon: Users2,
//     title: "Assign Agents",
//     desc: "Distribute chats to team members and agents with role-based access control.",
//   },
//   {
//     icon: Megaphone,
//     title: "Campaigns",
//     desc: "Effortlessly schedule and manage broadcast campaigns to thousands of contacts.",
//   },
//   {
//     icon: Sparkles,
//     title: "AI Chatbot",
//     desc: "Leverage advanced AI to automate customer interactions with intelligent, contextual responses.",
//     badge: "AI",
//   },
//   {
//     icon: FileText,
//     title: "Chat Reports",
//     desc: "Generate comprehensive analytics and detailed reports on all WhatsApp communications.",
//   },
// ];

// const badgeColors: Record<string, string> = {
//   Popular: "bg-[#00D46A]/10 text-[#00D46A] border border-[#00D46A]/20",
//   New:     "bg-blue-500/10  text-blue-400  border border-blue-400/20",
//   AI:      "bg-purple-500/10 text-purple-400 border border-purple-400/20",
// };

// export default function FeaturesSection() {
//   return (
//     <section id="features" className="py-24 relative">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1710]/50 to-transparent pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16 space-y-4">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111914] border border-[#1E2B22] text-sm text-[#00D46A] font-medium">
//             <Sparkles className="w-3.5 h-3.5" />
//             Everything you need
//           </div>
//           <h2
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
//             style={{ fontFamily: "Outfit, sans-serif" }}
//           >
//             Powerful Features for
//             <br />
//             <span className="gradient-text">Modern Businesses</span>
//           </h2>
//           <p className="text-[#6B8070] text-lg max-w-xl mx-auto">
//             Everything you need to run WhatsApp marketing campaigns, support operations,
//             and grow your business — in one unified platform.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {features.map((feat, i) => (
//             <div
//               key={i}
//               className="feature-card glass-card rounded-2xl p-6 border border-[#1E2B22] relative overflow-hidden group"
//             >
//               {/* Glow on hover */}
//               <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D46A]/0 to-transparent group-hover:via-[#00D46A]/50 transition-all duration-500" />

//               <div className="flex items-start justify-between mb-4">
//                 <div className="w-11 h-11 rounded-xl bg-[#00D46A]/10 border border-[#00D46A]/20 flex items-center justify-center group-hover:bg-[#00D46A]/20 transition-colors">
//                   <feat.icon className="w-5 h-5 text-[#00D46A]" />
//                 </div>
//                 {feat.badge && (
//                   <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColors[feat.badge]}`}>
//                     {feat.badge}
//                   </span>
//                 )}
//               </div>
//               <h3
//                 className="text-white font-semibold text-base mb-2"
//                 style={{ fontFamily: "Outfit, sans-serif" }}
//               >
//                 {feat.title}
//               </h3>
//               <p className="text-[#6B8070] text-sm leading-relaxed">{feat.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useRef } from "react";
import {
  UserPlus, MessageCircle, QrCode, Bot, Layout, GitBranch,
  Plug2, BarChart2, Users2, Megaphone, Sparkles, FileText,
} from "lucide-react";
 
const features = [
  {
    icon: UserPlus,
    title: "Embedded Signup",
    desc: "Integrated Embedded Signup System that makes customer onboarding seamless and fast.",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: MessageCircle,
    title: "Integrated WhatsApp Chat",
    desc: "Seamlessly connect with customers through a unified WhatsApp Chat inbox.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=300&fit=crop&auto=format",
  },
  {
  icon: QrCode,
  title: "QR Code Generator",
  desc: "Instantly generate QR codes for your WhatsApp number to drive offline engagement.",
  image: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=600",
},
  {
  icon: Bot,
  title: "Chat-Bot",
  desc: "Engage customers 24/7 with intelligent, rule-based chatbot responses effortlessly.",
  image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
},
  {
    icon: Layout,
    title: "Manage Templates",
    desc: "Create and manage message templates directly in-app without visiting Meta Business Manager.",
    badge: "New",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: GitBranch,
    title: "Flow Maker",
    desc: "Build complex bot conversation flows visually with our advanced no-code Flow Maker.",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: Plug2,
    title: "API Integration",
    desc: "Full REST APIs and webhooks enable smooth integration with any third-party service.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: BarChart2,
    title: "Live Analysis",
    desc: "Get real-time analytics and delivery status of your campaigns and messages.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: Users2,
    title: "Assign Agents",
    desc: "Distribute chats to team members and agents with role-based access control.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: Megaphone,
    title: "Campaigns",
    desc: "Effortlessly schedule and manage broadcast campaigns to thousands of contacts.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: Sparkles,
    title: "AI Chatbot",
    desc: "Leverage advanced AI to automate customer interactions with intelligent, contextual responses.",
    badge: "AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop&auto=format",
  },
  {
    icon: FileText,
    title: "Chat Reports",
    desc: "Generate comprehensive analytics and detailed reports on all WhatsApp communications.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&auto=format",
  },
];
 
const badgeColors: Record<string, string> = {
  Popular: "bg-gradient-to-r from-green-100 to-teal-100 text-green-800 border border-green-200",
  New:     "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200",
  AI:      "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200",
};
 
export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
 
    const cards = document.querySelectorAll(".feature-card-light");
    cards.forEach((card) => observer.observe(card));
 
    return () => observer.disconnect();
  }, []);
 
  return (
<section id="features" className="py-24 relative bg-white" ref={sectionRef}>
<div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/30 to-white pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
<div className="text-center mb-16 space-y-4">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 text-sm font-medium">
<Sparkles className="w-3.5 h-3.5 text-green-600" />
<span className="bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent">
              Everything you need
</span>
</div>
<h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
            style={{ fontFamily: "Outfit, sans-serif" }}
>
            Powerful Features for
<br />
<span className="bg-gradient-to-r from-green-600 via-teal-600 to-green-600 bg-clip-text text-transparent animate-gradient">
              Modern Businesses
</span>
</h2>
<p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to run WhatsApp marketing campaigns, support operations,
            and grow your business — in one unified platform.
</p>
</div>
 
        {/* Hero Banner */}
<div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden mb-12 shadow-lg">
<img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=500&fit=crop&auto=format"
            alt="WhatsApp Business Platform"
            className="w-full h-full object-cover"
          />
<div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-teal-800/50 to-transparent flex flex-col justify-center px-8 sm:px-12">
<p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-2">
              All-in-One Platform
</p>
<h3
              className="text-white text-2xl sm:text-3xl font-bold max-w-md leading-snug"
              style={{ fontFamily: "Outfit, sans-serif" }}
>
              Connect, Engage & Grow on WhatsApp
</h3>
<p className="text-green-100/80 text-sm mt-2 max-w-sm">
              Trusted by 5,000+ businesses to power their WhatsApp communications.
</p>
</div>
</div>
 
        {/* Feature Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => (
<div
              key={i}
              className="feature-card-light bg-white rounded-2xl border border-gray-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${i * 0.05}s` }}
>
              {/* Top gradient bar on hover */}
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
 
              {/* Image */}
<div className="relative w-full h-40 overflow-hidden flex-shrink-0 bg-gradient-to-br from-green-50 to-teal-50">
<img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-950/20" />
</div>
 
              {/* Card Body */}
<div className="p-6 relative flex flex-col flex-1">
<div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-teal-50/0 group-hover:from-green-50/20 group-hover:to-teal-50/20 transition-all duration-500 pointer-events-none" />
 
                <div className="flex items-start justify-between mb-4">
<div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 flex items-center justify-center group-hover:from-green-100 group-hover:to-teal-100 transition-all duration-300">
<feat.icon className="w-5 h-5 text-green-600" />
</div>
                  {feat.badge && (
<span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColors[feat.badge]}`}>
                      {feat.badge}
</span>
                  )}
</div>
 
                <h3
                  className="text-gray-900 font-semibold text-base mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
>
                  {feat.title}
</h3>
<p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
 
                <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
</div>
          ))}
</div>
</div>
 
      <style jsx>{`
        .feature-card-light {
          opacity: 0;
          transform: translateY(20px);
          animation-fill-mode: forwards;
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradientShift 3s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
      `}</style>
</section>
  );
}