// // "use client";
// // import { useState } from "react";
// // import { Mail, MessageSquare, Phone, Send, CheckCircle2 } from "lucide-react";

// // export default function ContactSection() {
// //   const [submitted, setSubmitted] = useState(false);
// //   const [form, setForm]           = useState({ name: "", email: "", subject: "", message: "" });

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setSubmitted(true);
// //     setTimeout(() => setSubmitted(false), 4000);
// //     setForm({ name: "", email: "", subject: "", message: "" });
// //   };

// //   const contactInfo = [
// //     {
// //       icon: Mail,
// //       label: "Email us",
// //       value: "support@greenping.io",
// //       href: "mailto:support@greenping.io",
// //     },
// //     {
// //       icon: MessageSquare,
// //       label: "WhatsApp",
// //       value: "Chat with us instantly",
// //       href: "#",
// //     },
// //     {
// //       icon: Phone,
// //       label: "Call us",
// //       value: "+91 98765 43210",
// //       href: "tel:+919876543210",
// //     },
// //   ];

// //   return (
// //     <section id="contact" className="py-24 relative">
// //       {/* bg gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1710]/50 to-transparent pointer-events-none" />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
// //         {/* Header */}
// //         <div className="text-center mb-16 space-y-4">
// //           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111914] border border-[#1E2B22] text-sm text-[#00D46A]">
// //             <MessageSquare className="w-3.5 h-3.5" />
// //             Get in touch
// //           </div>
// //           <h2
// //             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
// //             style={{ fontFamily: "Outfit, sans-serif" }}
// //           >
// //             We&apos;d love to <span className="gradient-text">hear from you</span>
// //           </h2>
// //           <p className="text-[#6B8070] text-lg max-w-lg mx-auto">
// //             Have questions about Greenping? Reach out for personalized support,
// //             demo requests, or any inquiries about our services.
// //           </p>
// //         </div>

// //         <div className="grid lg:grid-cols-5 gap-10">
// //           {/* Left — info */}
// //           <div className="lg:col-span-2 space-y-6">
// //             {contactInfo.map((info, i) => (
// //               <a
// //                 key={i}
// //                 href={info.href}
// //                 className="flex items-center gap-4 p-5 glass-card rounded-2xl border border-[#1E2B22] hover:border-[#00D46A]/40 transition-all group"
// //               >
// //                 <div className="w-11 h-11 rounded-xl bg-[#00D46A]/10 border border-[#00D46A]/20 flex items-center justify-center group-hover:bg-[#00D46A]/20 transition-colors flex-shrink-0">
// //                   <info.icon className="w-5 h-5 text-[#00D46A]" />
// //                 </div>
// //                 <div>
// //                   <div className="text-xs text-[#4B6B57] mb-0.5">{info.label}</div>
// //                   <div className="text-sm font-medium text-white">{info.value}</div>
// //                 </div>
// //               </a>
// //             ))}

// //             {/* QR code card */}
// //             <div className="p-5 glass-card rounded-2xl border border-[#1E2B22]">
// //               <div className="text-xs text-[#4B6B57] mb-3">Scan to connect on WhatsApp</div>
// //               <div className="w-full aspect-square max-w-[140px] mx-auto bg-white rounded-xl p-3 flex items-center justify-center">
// //                 {/* SVG QR placeholder */}
// //                 <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
// //                   <rect width="80" height="80" fill="white"/>
// //                   {/* QR pattern — simplified decorative */}
// //                   {[0,1,2,3,4,5,6].map(r => [0,1,2,3,4,5,6].map(c => {
// //                     const inCorner = (r < 2 && c < 2) || (r < 2 && c > 4) || (r > 4 && c < 2);
// //                     return (
// //                       <rect
// //                         key={`${r}-${c}`}
// //                         x={5 + c * 10}
// //                         y={5 + r * 10}
// //                         width={8}
// //                         height={8}
// //                         rx={1}
// //                         fill={inCorner ? "#000" : Math.random() > 0.5 ? "#000" : "transparent"}
// //                       />
// //                     );
// //                   }))}
// //                   <rect x={5} y={5} width={26} height={26} rx={2} fill="none" stroke="#000" strokeWidth="2"/>
// //                   <rect x={47} y={5} width={26} height={26} rx={2} fill="none" stroke="#000" strokeWidth="2"/>
// //                   <rect x={5} y={47} width={26} height={26} rx={2} fill="none" stroke="#000" strokeWidth="2"/>
// //                 </svg>
// //               </div>
// //               <p className="text-xs text-[#4B6B57] text-center mt-3">Scan to get our WhatsApp channel</p>
// //             </div>
// //           </div>

// //           {/* Right — form */}
// //           <div className="lg:col-span-3">
// //             <div className="glass-card rounded-3xl p-6 lg:p-8 border border-[#1E2B22]">
// //               {submitted ? (
// //                 <div className="h-full flex flex-col items-center justify-center py-16 text-center">
// //                   <div className="w-16 h-16 rounded-full bg-[#00D46A]/10 flex items-center justify-center mb-4">
// //                     <CheckCircle2 className="w-8 h-8 text-[#00D46A]" />
// //                   </div>
// //                   <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>Message sent!</h3>
// //                   <p className="text-[#6B8070] text-sm">We&apos;ll get back to you within 24 hours.</p>
// //                 </div>
// //               ) : (
// //                 <form onSubmit={handleSubmit} className="space-y-5">
// //                   <div className="grid sm:grid-cols-2 gap-5">
// //                     <div>
// //                       <label className="block text-xs font-medium text-[#6B8070] mb-2">
// //                         Full Name *
// //                       </label>
// //                       <input
// //                         type="text"
// //                         required
// //                         value={form.name}
// //                         onChange={(e) => setForm({ ...form, name: e.target.value })}
// //                         placeholder="Rahul Sharma"
// //                         className="w-full px-4 py-3 rounded-xl bg-[#111914] border border-[#1E2B22] text-white placeholder-[#4B6B57] text-sm focus:outline-none focus:border-[#00D46A]/50 transition-colors"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-xs font-medium text-[#6B8070] mb-2">
// //                         Email Address *
// //                       </label>
// //                       <input
// //                         type="email"
// //                         required
// //                         value={form.email}
// //                         onChange={(e) => setForm({ ...form, email: e.target.value })}
// //                         placeholder="rahul@company.com"
// //                         className="w-full px-4 py-3 rounded-xl bg-[#111914] border border-[#1E2B22] text-white placeholder-[#4B6B57] text-sm focus:outline-none focus:border-[#00D46A]/50 transition-colors"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-xs font-medium text-[#6B8070] mb-2">
// //                       Subject
// //                     </label>
// //                     <input
// //                       type="text"
// //                       value={form.subject}
// //                       onChange={(e) => setForm({ ...form, subject: e.target.value })}
// //                       placeholder="Request a demo, pricing question..."
// //                       className="w-full px-4 py-3 rounded-xl bg-[#111914] border border-[#1E2B22] text-white placeholder-[#4B6B57] text-sm focus:outline-none focus:border-[#00D46A]/50 transition-colors"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-xs font-medium text-[#6B8070] mb-2">
// //                       Message *
// //                     </label>
// //                     <textarea
// //                       required
// //                       rows={5}
// //                       value={form.message}
// //                       onChange={(e) => setForm({ ...form, message: e.target.value })}
// //                       placeholder="Tell us about your business needs..."
// //                       className="w-full px-4 py-3 rounded-xl bg-[#111914] border border-[#1E2B22] text-white placeholder-[#4B6B57] text-sm focus:outline-none focus:border-[#00D46A]/50 transition-colors resize-none"
// //                     />
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     className="btn-glow w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#00D46A] text-black font-bold text-sm transition-all"
// //                   >
// //                     Send Message
// //                     <Send className="w-4 h-4" />
// //                   </button>
// //                   <p className="text-xs text-[#4B6B57] text-center">
// //                     We typically reply within 2 business hours.
// //                   </p>
// //                 </form>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import { Mail, MessageSquare, Phone, Send, CheckCircle2 } from "lucide-react";

// export default function ContactSection() {
//   const [submitted, setSubmitted] = useState(false);
//   const [form, setForm]           = useState({ name: "", email: "", subject: "", message: "" });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 4000);
//     setForm({ name: "", email: "", subject: "", message: "" });
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email us",
//       value: "support@greenping.io",
//       href: "mailto:support@greenping.io",
//     },
//     {
//       icon: MessageSquare,
//       label: "WhatsApp",
//       value: "Chat with us instantly",
//       href: "#",
//     },
//     {
//       icon: Phone,
//       label: "Call us",
//       value: "+91 98765 43210",
//       href: "tel:+919876543210",
//     },
//   ];

//   return (
//     <section id="contact" className="py-24 relative bg-white">
//       {/* Light gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 via-transparent to-transparent pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16 space-y-4">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 text-sm text-green-700 font-medium">
//             <MessageSquare className="w-3.5 h-3.5 text-green-600" />
//             Get in touch
//           </div>
//           <h2
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
//             style={{ fontFamily: "Outfit, sans-serif" }}
//           >
//             We&apos;d love to <span className="bg-gradient-to-r from-green-600 via-teal-600 to-green-600 bg-clip-text text-transparent">hear from you</span>
//           </h2>
//           <p className="text-gray-500 text-lg max-w-lg mx-auto">
//             Have questions about Greenping? Reach out for personalized support,
//             demo requests, or any inquiries about our services.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-10">
//           {/* Left — info */}
//           <div className="lg:col-span-2 space-y-6">
//             {contactInfo.map((info, i) => (
//               <a
//                 key={i}
//                 href={info.href}
//                 className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-green-200 transition-all group"
//               >
//                 <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 flex items-center justify-center group-hover:from-green-100 group-hover:to-teal-100 transition-colors flex-shrink-0">
//                   <info.icon className="w-5 h-5 text-green-600" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-400 mb-0.5">{info.label}</div>
//                   <div className="text-sm font-medium text-gray-900">{info.value}</div>
//                 </div>
//               </a>
//             ))}

//             {/* QR code card – light */}
//             <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
//               <div className="text-xs text-gray-400 mb-3">Scan to connect on WhatsApp</div>
//               <div className="w-full aspect-square max-w-[140px] mx-auto bg-white rounded-xl p-3 flex items-center justify-center border border-gray-100">
//                 {/* SVG QR placeholder */}
//                 <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                   <rect width="80" height="80" fill="white"/>
//                   {/* QR pattern — simplified decorative */}
//                   {[0,1,2,3,4,5,6].map(r => [0,1,2,3,4,5,6].map(c => {
//                     const inCorner = (r < 2 && c < 2) || (r < 2 && c > 4) || (r > 4 && c < 2);
//                     return (
//                       <rect
//                         key={`${r}-${c}`}
//                         x={5 + c * 10}
//                         y={5 + r * 10}
//                         width={8}
//                         height={8}
//                         rx={1}
//                         fill={inCorner ? "#1F2937" : Math.random() > 0.5 ? "#374151" : "transparent"}
//                       />
//                     );
//                   }))}
//                   <rect x={5} y={5} width={26} height={26} rx={2} fill="none" stroke="#374151" strokeWidth="2"/>
//                   <rect x={47} y={5} width={26} height={26} rx={2} fill="none" stroke="#374151" strokeWidth="2"/>
//                   <rect x={5} y={47} width={26} height={26} rx={2} fill="none" stroke="#374151" strokeWidth="2"/>
//                 </svg>
//               </div>
//               <p className="text-xs text-gray-400 text-center mt-3">Scan to get our WhatsApp channel</p>
//             </div>
//           </div>

//           {/* Right — form (light) */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-sm">
//               {submitted ? (
//                 <div className="h-full flex flex-col items-center justify-center py-16 text-center">
//                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center mb-4">
//                     <CheckCircle2 className="w-8 h-8 text-green-600" />
//                   </div>
//                   <h3 className="text-gray-900 text-xl font-bold mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>Message sent!</h3>
//                   <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div className="grid sm:grid-cols-2 gap-5">
//                     <div>
//                       <label className="block text-xs font-medium text-gray-500 mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={form.name}
//                         onChange={(e) => setForm({ ...form, name: e.target.value })}
//                         placeholder="Rahul Sharma"
//                         className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-medium text-gray-500 mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={(e) => setForm({ ...form, email: e.target.value })}
//                         placeholder="rahul@company.com"
//                         className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-500 mb-2">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       value={form.subject}
//                       onChange={(e) => setForm({ ...form, subject: e.target.value })}
//                       placeholder="Request a demo, pricing question..."
//                       className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-500 mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       required
//                       rows={5}
//                       value={form.message}
//                       onChange={(e) => setForm({ ...form, message: e.target.value })}
//                       placeholder="Tell us about your business needs..."
//                       className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors resize-none"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-sm transition-all hover:from-green-700 hover:to-teal-700 shadow-md"
//                   >
//                     Send Message
//                     <Send className="w-4 h-4" />
//                   </button>
//                   <p className="text-xs text-gray-400 text-center">
//                     We typically reply within 2 business hours.
//                   </p>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MessageSquare, Phone, Send, CheckCircle2 } from "lucide-react";

// ─── Dot grid canvas – same as in Hero ───────────────────────────────────────
function DotGrid() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 26;
      const radius = 1.3;
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(5, 150, 105, 0.10)";
          ctx.fill();
        }
      }
    };

    draw();
    const resizeObserver = new ResizeObserver(draw);
    resizeObserver.observe(canvas);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email us",
      value: "support@greenping.io",
      href: "mailto:support@greenping.io",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Chat with us instantly",
      href: "#",
    },
    {
      icon: Phone,
      label: "Call us",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-white overflow-hidden">
      {/* Dot grid background (same as hero) */}
      <DotGrid />

      {/* Light gradient overlay (optional, for subtle depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 text-sm text-green-700 font-medium">
            <MessageSquare className="w-3.5 h-3.5 text-green-600" />
            Get in touch
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            We&apos;d love to{" "}
            <span className="bg-gradient-to-r from-green-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              hear from you
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Have questions about Greenping? Reach out for personalized support,
            demo requests, or any inquiries about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-green-200 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 flex items-center justify-center group-hover:from-green-100 group-hover:to-teal-100 transition-colors flex-shrink-0">
                  <info.icon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">{info.label}</div>
                  <div className="text-sm font-medium text-gray-900">{info.value}</div>
                </div>
              </a>
            ))}

            {/* QR code card – light */}
            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-xs text-gray-400 mb-3">Scan to connect on WhatsApp</div>
              <div className="w-full aspect-square max-w-[140px] mx-auto bg-white rounded-xl p-3 flex items-center justify-center border border-gray-100">
                {/* SVG QR placeholder */}
                <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="80" fill="white" />
                  {[0, 1, 2, 3, 4, 5, 6].map((r) =>
                    [0, 1, 2, 3, 4, 5, 6].map((c) => {
                      const inCorner = (r < 2 && c < 2) || (r < 2 && c > 4) || (r > 4 && c < 2);
                      return (
                        <rect
                          key={`${r}-${c}`}
                          x={5 + c * 10}
                          y={5 + r * 10}
                          width={8}
                          height={8}
                          rx={1}
                          fill={
                            inCorner
                              ? "#1F2937"
                              : (r * 7 + c * 3) % 3 === 0
                                ? "#374151"
                                : "transparent"
                          }
                        />
                      );
                    })
                  )}
                  <rect x={5} y={5} width={26} height={26} rx={2} fill="none" stroke="#374151" strokeWidth="2" />
                  <rect x={47} y={5} width={26} height={26} rx={2} fill="none" stroke="#374151" strokeWidth="2" />
                  <rect x={5} y={47} width={26} height={26} rx={2} fill="none" stroke="#374151" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-xs text-gray-400 text-center mt-3">Scan to get our WhatsApp channel</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-sm">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Message sent!
                  </h3>
                  <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-2">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Request a demo, pricing question..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your business needs..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-sm transition-all hover:from-green-700 hover:to-teal-700 shadow-md"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-gray-400 text-center">We typically reply within 2 business hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}