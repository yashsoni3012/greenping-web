

// // import Link from "next/link";
// // import { Zap, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

// // const footerLinks = {
// //   Product: [
// //     { label: "Features",   href: "#features" },
// //     { label: "Pricing",    href: "#pricing" },
// //     { label: "FAQ",        href: "#faq" },
// //     { label: "Book Demo",  href: "#contact" },
// //   ],
// //   Company: [
// //     { label: "About",       href: "#" },
// //     { label: "Blog",        href: "#" },
// //     { label: "Careers",     href: "#" },
// //     { label: "Contact",     href: "#contact" },
// //   ],
// //   Legal: [
// //     { label: "Privacy Policy",     href: "#" },
// //     { label: "Terms & Conditions", href: "#" },
// //     { label: "Cookie Policy",      href: "#" },
// //   ],
// // };

// // export default function Footer() {
// //   return (
// //     <footer className="border-t border-gray-200 bg-white">
// //       {/* Top gradient line – WhatsApp green/teal */}
// //       <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60" />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
// //         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
// //           {/* Brand column */}
// //           <div className="lg:col-span-2 space-y-6">
// //             <Link href="/" className="flex items-center gap-2.5">
// //               <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center shadow-sm">
// //                 <Zap className="w-5 h-5 text-white fill-white" />
// //               </div>
// //               <span
// //                 className="font-bold text-xl text-gray-900 tracking-tight"
// //                 style={{ fontFamily: "Outfit, sans-serif" }}
// //               >
// //                 Greenping<span className="text-green-600">.</span>
// //               </span>
// //             </Link>
// //             <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
// //               India's premier Meta-verified WhatsApp Business Solution. Powering
// //               10,000+ businesses with official WhatsApp Cloud API.
// //             </p>
// //             <div className="flex items-center gap-3">
// //               {[Twitter, Linkedin, Instagram].map((Icon, i) => (
// //                 <a
// //                   key={i}
// //                   href="#"
// //                   className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-green-600 hover:border-green-300 transition-all"
// //                 >
// //                   <Icon className="w-4 h-4" />
// //                 </a>
// //               ))}
// //             </div>
// //             {/* Meta badge – light */}
// //             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-xs text-green-700">
// //               <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
// //               Meta Verified Partner
// //             </div>
// //           </div>

// //           {/* Links */}
// //           {Object.entries(footerLinks).map(([title, links]) => (
// //             <div key={title}>
// //               <h4
// //                 className="text-gray-900 font-semibold text-sm mb-5"
// //                 style={{ fontFamily: "Outfit, sans-serif" }}
// //               >
// //                 {title}
// //               </h4>
// //               <ul className="space-y-3">
// //                 {links.map((link) => (
// //                   <li key={link.label}>
// //                     <a
// //                       href={link.href}
// //                       className="text-gray-500 hover:text-green-600 text-sm transition-colors flex items-center gap-1 group"
// //                     >
// //                       {link.label}
// //                       <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 translate-x-0.5" />
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Bottom bar */}
// //         <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
// //           <p className="text-gray-400 text-xs">
// //             © 2026 Greenping Solutions. All rights reserved.
// //           </p>
// //           <div className="flex items-center gap-4">
// //             <a href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Privacy</a>
// //             <a href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Terms</a>
// //             <a href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Cookies</a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// import Link from "next/link";
// import { Zap, Twitter, Linkedin, Instagram, ArrowUpRight, MessageCircle, Shield, Globe } from "lucide-react";

// const footerLinks = {
//   Product: [
//     { label: "Features",  href: "#features" },
//     { label: "Pricing",   href: "#pricing" },
//     { label: "FAQ",       href: "#faq" },
//     { label: "Book Demo", href: "#contact" },
//   ],
//   Company: [
//     { label: "About",   href: "#" },
//     { label: "Blog",    href: "#" },
//     { label: "Careers", href: "#" },
//     { label: "Contact", href: "#contact" },
//   ],
//   Legal: [
//     { label: "Privacy Policy",     href: "#" },
//     { label: "Terms & Conditions", href: "#" },
//     { label: "Cookie Policy",      href: "#" },
//   ],
// };


// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-[#0a1a10]">

//       {/* ── Deep mesh background ── */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* radial glows */}
//         <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-700/20 blur-[120px]" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-600/10 blur-[160px]" />
//         <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/15 blur-[120px]" />

//         {/* subtle dot grid */}
//         <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
//               <circle cx="1.5" cy="1.5" r="1.5" fill="#4ade80" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#dots)" />
//         </svg>

//         {/* diagonal stripe overlay */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(45deg, #22c55e 0px, #22c55e 1px, transparent 1px, transparent 20px)",
//           }}
//         />
//       </div>

//       {/* ── Top glowing divider ── */}
//       <div className="relative h-px">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-70" />
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-30 blur-sm" />
//       </div>


//       {/* ── Main content ── */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

//           {/* ── Brand column ── */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Logo */}
//             <Link href="/" className="inline-flex items-center gap-2.5 group">
              
//               <span className="font-bold text-xl text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
//                 Greenping<span className="text-green-400">.</span>
//               </span>
//             </Link>

//             <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//               India's premier Meta-verified WhatsApp Business Solution. Powering
//               10,000+ businesses with official WhatsApp Cloud API.
//             </p>

//             {/* Social icons */}
//             <div className="flex items-center gap-3">
//               {[Twitter, Linkedin, Instagram].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/10 transition-all duration-200"
//                 >
//                   <Icon className="w-4 h-4" />
//                 </a>
//               ))}
//             </div>

//             {/* Meta badge */}
//             {/* <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/25">
//               <span className="relative flex w-2 h-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
//               </span>
//               <span className="text-xs font-medium text-green-300">Meta Verified Partner</span>
//             </div> */}

//             {/* WhatsApp CTA pill */}
//             <a
//               href="#contact"
//               className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold shadow-lg shadow-green-900/40 hover:shadow-green-500/30 hover:from-green-400 hover:to-teal-400 transition-all duration-300"
//               style={{ fontFamily: "Outfit, sans-serif" }}
//             >
//               <MessageCircle className="w-4 h-4" />
//               Chat with us on WhatsApp
//               <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//             </a>
//           </div>

//           {/* ── Link columns ── */}
//           {Object.entries(footerLinks).map(([title, links]) => (
//             <div key={title}>
//               <h4
//                 className="text-white font-semibold text-sm mb-5 flex items-center gap-2"
//                 style={{ fontFamily: "Outfit, sans-serif" }}
//               >
//                 <span className="w-1 h-4 rounded-full bg-gradient-to-b from-green-400 to-teal-500 inline-block" />
//                 {title}
//               </h4>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       className="text-gray-400 hover:text-green-300 text-sm transition-colors flex items-center gap-1 group w-fit"
//                     >
//                       {link.label}
//                       <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 translate-x-0.5 group-hover:text-green-400" />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* ── Newsletter strip ── */}
//         <div className="mt-16 rounded-2xl bg-gradient-to-r from-green-900/40 via-teal-900/30 to-green-900/40 border border-green-500/15 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
//           <div>
//             <p className="text-white font-semibold text-base" style={{ fontFamily: "Outfit, sans-serif" }}>
//               Stay in the loop
//             </p>
//             <p className="text-gray-400 text-sm mt-0.5">Product updates & WhatsApp API news, monthly.</p>
//           </div>
//           <div className="flex w-full sm:w-auto items-center gap-2">
//             <input
//               type="email"
//               placeholder="you@company.com"
//               className="flex-1 sm:w-64 bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm px-4 py-2.5 rounded-xl outline-none focus:border-green-500/50 focus:bg-white/8 transition-all"
//             />
//             <button
//               className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold hover:from-green-400 hover:to-teal-400 transition-all whitespace-nowrap shadow-lg shadow-green-900/30"
//               style={{ fontFamily: "Outfit, sans-serif" }}
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* ── Bottom bar ── */}
//         <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-gray-500 text-xs">
//             © 2026 Greenping Solutions Pvt. Ltd. All rights reserved.
//           </p>

//           {/* WhatsApp "Powered by" badge */}
//           <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
//             <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-green-400" xmlns="http://www.w3.org/2000/svg">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//             </svg>
//             <span className="text-gray-400 text-xs">Powered by WhatsApp Cloud API</span>
//           </div>

//           <div className="flex items-center gap-4">
//             {["Privacy", "Terms", "Cookies"].map((item) => (
//               <a key={item} href="#" className="text-gray-500 hover:text-green-400 text-xs transition-colors">
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Bottom glow line ── */}
//       <div className="relative h-px">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-600/50 to-transparent" />
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import { Twitter, Linkedin, Instagram, ArrowUpRight, MessageCircle } from "lucide-react";

const footerLinks = {
  "Product": [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  "Company": [
    { label: "About", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  "Legal": [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1a10] overflow-hidden">
      {/* Simplified background – only a subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#4ade80" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Top thin divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-bold text-xl text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                Greenping<span className="text-green-400">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Meta-verified WhatsApp Business solution for 10,000+ businesses.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/40 transition"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold shadow-lg hover:shadow-green-500/30 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat on WhatsApp
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Link columns – now 3 compact columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1 h-3 rounded-full bg-green-400" />
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-green-300 text-sm transition flex items-center gap-1 group w-fit">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar – compact */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-gray-500">
            © 2026 Greenping Solutions Pvt. Ltd.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-green-400 transition">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-green-400 transition">Terms</a>
            <a href="#" className="text-gray-500 hover:text-green-400 transition">Cookies</a>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/10">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-green-400">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-gray-500 text-[10px]">WhatsApp Cloud API</span>
          </div>
        </div>
      </div>

      {/* Bottom thin divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent" />
    </footer>
  );
}