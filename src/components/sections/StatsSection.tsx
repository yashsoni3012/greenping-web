// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Users, TrendingUp, Clock, Award } from "lucide-react";

// const stats = [
//   { icon: Users,      value: 10000, suffix: "+", label: "Active Users",     color: "#00D46A" },
//   { icon: TrendingUp, value: 98,    suffix: "%",  label: "Satisfaction Rate", color: "#7EEDB4" },
//   { icon: Clock,      value: 24,    suffix: "/7", label: "Support Hours",   color: "#00D46A" },
//   { icon: Award,      value: 500,   suffix: "+",  label: "Enterprise Clients", color: "#7EEDB4" },
// ];

// function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
//   const [count, setCount]   = useState(0);
//   const [started, setStarted] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setStarted(true); },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!started) return;
//     const duration = 1800;
//     const steps    = 60;
//     const increment = value / steps;
//     let current    = 0;
//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= value) { setCount(value); clearInterval(timer); }
//       else setCount(Math.floor(current));
//     }, duration / steps);
//     return () => clearInterval(timer);
//   }, [started, value]);

//   return (
//     <div ref={ref} className="tabular-nums">
//       {count.toLocaleString()}{suffix}
//     </div>
//   );
// }

// export default function StatsSection() {
//   return (
//     <section className="py-20 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//           {stats.map((stat, i) => (
//             <div
//               key={i}
//               className="feature-card glass-card rounded-2xl p-6 lg:p-8 text-center border border-[#1E2B22] relative overflow-hidden group"
//             >
//               <div className="absolute inset-0 bg-card-glow opacity-0 group-hover:opacity-100 transition-opacity" />
//               <div
//                 className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
//                 style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}25` }}
//               >
//                 <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
//               </div>
//               <div
//                 className="text-3xl lg:text-4xl font-bold mb-1"
//                 style={{ color: stat.color, fontFamily: "Outfit, sans-serif" }}
//               >
//                 <AnimatedNumber value={stat.value} suffix={stat.suffix} />
//               </div>
//               <div className="text-sm text-[#6B8070]">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import { Users, TrendingUp, Clock, Award } from "lucide-react";

const stats = [
  { icon: Users,      value: 10000, suffix: "+", label: "Active Users",     color: "#00D46A" },
  { icon: TrendingUp, value: 98,    suffix: "%",  label: "Satisfaction Rate", color: "#7EEDB4" },
  { icon: Clock,      value: 24,    suffix: "/7", label: "Support Hours",   color: "#00D46A" },
  { icon: Award,      value: 500,   suffix: "+",  label: "Enterprise Clients", color: "#7EEDB4" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount]   = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps    = 60;
    const increment = value / steps;
    let current    = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="feature-card glass-card-light rounded-2xl p-6 lg:p-8 text-center border border-gray-100 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}25` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div
                className="text-3xl lg:text-4xl font-bold mb-1"
                style={{ color: stat.color, fontFamily: "Outfit, sans-serif" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}