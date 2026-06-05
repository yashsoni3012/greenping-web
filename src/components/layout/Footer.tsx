// import Link from "next/link";
// import { Zap, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

// const footerLinks = {
//   Product: [
//     { label: "Features",   href: "#features" },
//     { label: "Pricing",    href: "#pricing" },
//     { label: "FAQ",        href: "#faq" },
//     { label: "Book Demo",  href: "#contact" },
//   ],
//   Company: [
//     { label: "About",       href: "#" },
//     { label: "Blog",        href: "#" },
//     { label: "Careers",     href: "#" },
//     { label: "Contact",     href: "#contact" },
//   ],
//   Legal: [
//     { label: "Privacy Policy",     href: "#" },
//     { label: "Terms & Conditions", href: "#" },
//     { label: "Cookie Policy",      href: "#" },
//   ],
// };

// export default function Footer() {
//   return (
//     <footer className="border-t border-[#1E2B22] bg-[#060C08]">
//       {/* Top gradient */}
//       <div className="h-px bg-gradient-to-r from-transparent via-[#00D46A] to-transparent opacity-30" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
//           {/* Brand column */}
//           <div className="lg:col-span-2 space-y-6">
//             <Link href="/" className="flex items-center gap-2.5">
//               <div className="w-9 h-9 rounded-xl bg-[#00D46A] flex items-center justify-center">
//                 <Zap className="w-5 h-5 text-black fill-black" />
//               </div>
//               <span
//                 className="font-bold text-xl text-white tracking-tight"
//                 style={{ fontFamily: "Outfit, sans-serif" }}
//               >
//                 Greenping<span className="text-[#00D46A]">.</span>
//               </span>
//             </Link>
//             <p className="text-[#6B8070] text-sm leading-relaxed max-w-xs">
//               India's premier Meta-verified WhatsApp Business Solution. Powering
//               10,000+ businesses with official WhatsApp Cloud API.
//             </p>
//             <div className="flex items-center gap-3">
//               {[Twitter, Linkedin, Instagram].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="w-9 h-9 rounded-lg bg-[#111914] border border-[#1E2B22] flex items-center justify-center text-[#6B8070] hover:text-[#00D46A] hover:border-[#00D46A]/40 transition-all"
//                 >
//                   <Icon className="w-4 h-4" />
//                 </a>
//               ))}
//             </div>
//             {/* Meta badge */}
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111914] border border-[#1E2B22] text-xs text-[#6B8070]">
//               <span className="w-2 h-2 rounded-full bg-[#00D46A] animate-pulse" />
//               Meta Verified Partner
//             </div>
//           </div>

//           {/* Links */}
//           {Object.entries(footerLinks).map(([title, links]) => (
//             <div key={title}>
//               <h4
//                 className="text-white font-semibold text-sm mb-5"
//                 style={{ fontFamily: "Outfit, sans-serif" }}
//               >
//                 {title}
//               </h4>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       className="text-[#6B8070] hover:text-[#00D46A] text-sm transition-colors flex items-center gap-1 group"
//                     >
//                       {link.label}
//                       <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 translate-x-0.5" />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom bar */}
//         <div className="border-t border-[#1E2B22] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-[#4B6B57] text-xs">
//             © 2026 Greenping Solutions. All rights reserved.
//           </p>
//           <div className="flex items-center gap-4">
//             <a href="#" className="text-[#4B6B57] hover:text-[#6B8070] text-xs transition-colors">Privacy</a>
//             <a href="#" className="text-[#4B6B57] hover:text-[#6B8070] text-xs transition-colors">Terms</a>
//             <a href="#" className="text-[#4B6B57] hover:text-[#6B8070] text-xs transition-colors">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import { Zap, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features",   href: "#features" },
    { label: "Pricing",    href: "#pricing" },
    { label: "FAQ",        href: "#faq" },
    { label: "Book Demo",  href: "#contact" },
  ],
  Company: [
    { label: "About",       href: "#" },
    { label: "Blog",        href: "#" },
    { label: "Careers",     href: "#" },
    { label: "Contact",     href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy",     href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cookie Policy",      href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      {/* Top gradient line – WhatsApp green/teal */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center shadow-sm">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span
                className="font-bold text-xl text-gray-900 tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Greenping<span className="text-green-600">.</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              India's premier Meta-verified WhatsApp Business Solution. Powering
              10,000+ businesses with official WhatsApp Cloud API.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-green-600 hover:border-green-300 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            {/* Meta badge – light */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-xs text-green-700">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              Meta Verified Partner
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-gray-900 font-semibold text-sm mb-5"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-green-600 text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © 2026 Greenping Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}