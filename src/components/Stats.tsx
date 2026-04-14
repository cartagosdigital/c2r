"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 18,
    suffix: "+",
    prefix: "",
    label: "Anos de Expertise",
    sublabel: "Experiência jurídica consolidada",
  },
  {
    value: 5,
    suffix: "mi+",
    prefix: "",
    label: "Em Investimentos",
    sublabel: "Assessorados e estruturados",
  },
  {
    value: 1.8,
    suffix: "",
    prefix: "",
    label: "NPS de Satisfação",
    sublabel: "Clientes que recomendam",
    isDecimal: true,
  },
  {
    value: 18,
    suffix: "+",
    prefix: "",
    label: "Estados Atendidos",
    sublabel: "Presença nacional",
  },
];

function CounterItem({
  stat,
  index,
  triggered,
}: {
  stat: (typeof stats)[0];
  index: number;
  triggered: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(stat.isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [triggered, stat.value, stat.isDecimal]);

  const displayValue = stat.isDecimal ? count.toFixed(1) : count;

  return (
    <div
      className={`text-center transition-all duration-700 ${
        triggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="text-5xl lg:text-6xl font-black text-white mb-2 leading-none tabular-nums">
        <span className="text-[#E3531F]">{stat.prefix}</span>
        <span className="text-gradient-orange">{displayValue}</span>
        <span className="text-[#F0861C]">{stat.suffix}</span>
      </div>
      <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
      <div className="text-white/40 text-sm">{stat.sublabel}</div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggered]);

  return (
    <section id="numeros" className="py-24 bg-[#0d2530] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#E3531F]/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#F0861C]/10 rounded-full blur-[60px]" />
      </div>

      {/* Geometric lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="stat-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stat-grid)" />
        </svg>
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            triggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#E3531F]/15 border border-[#E3531F]/30 text-[#F0861C] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            Nossos Números
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Resultados que{" "}
            <span className="text-gradient-orange">falam por si.</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <CounterItem key={i} stat={stat} index={i} triggered={triggered} />
          ))}
        </div>

        {/* Map decoration */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-500 ${
            triggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white/60 px-6 py-3 rounded-full text-sm">
            <span className="w-2 h-2 bg-[#E3531F] rounded-full animate-pulse" />
            Atendemos clientes em todo o Brasil e no exterior
          </div>
        </div>
      </div>
    </section>
  );
}
