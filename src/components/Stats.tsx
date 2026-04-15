"use client";

import { useEffect, useRef, useState } from "react";
import { GlobePulse } from "./ui/globe-pulse";

const globeMarkers = [
  { id: "br", location: [-15.78, -47.93] as [number, number], delay: 0 },
  { id: "us", location: [38.90, -77.04] as [number, number], delay: 0.3 },
  { id: "mx", location: [19.43, -99.13] as [number, number], delay: 0.6 },
  { id: "co", location: [4.71, -74.07] as [number, number], delay: 0.9 },
  { id: "pt", location: [38.72, -9.14] as [number, number], delay: 1.2 },
  { id: "de", location: [52.52, 13.40] as [number, number], delay: 1.5 },
];

const stats = [
  {
    value: 18,
    suffix: "+",
    label: "Anos de Expertise",
    sublabel: "Experiência jurídica consolidada",
    isDecimal: false,
  },
  {
    value: 5,
    suffix: "mi+",
    label: "Em Investimentos",
    sublabel: "Assessorados e estruturados",
    isDecimal: false,
  },
  {
    value: 1.8,
    suffix: "",
    label: "NPS de Satisfação",
    sublabel: "Clientes que recomendam",
    isDecimal: true,
  },
  {
    value: 18,
    suffix: "+",
    label: "Estados Atendidos",
    sublabel: "Presença nacional",
    isDecimal: false,
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
      <div className="text-5xl lg:text-6xl font-black mb-2 leading-none tabular-nums">
        <span className="text-gradient-orange">{displayValue}</span>
        <span style={{ color: "var(--c-orange-bright)" }}>{stat.suffix}</span>
      </div>
      <div className="font-semibold text-lg mb-1" style={{ color: "var(--t-primary)" }}>
        {stat.label}
      </div>
      <div className="text-sm" style={{ color: "var(--t-muted)" }}>
        {stat.sublabel}
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) setTriggered(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggered]);

  return (
    <section
      id="numeros"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-80 h-80 rounded-full"
          style={{ background: "var(--c-orange-glow)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full"
          style={{ background: "rgba(201,74,26,0.08)", filter: "blur(60px)" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.03 }}>
        <svg className="w-full h-full">
          <defs>
            <pattern id="stat-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stat-grid)" />
        </svg>
      </div>

      <div ref={sectionRef} className="section-container relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            triggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="label-tag mb-6 mx-auto w-fit">Nossos Números</div>
          <h2 className="text-section-title">
            Resultados que{" "}
            <span className="text-gradient-orange">falam por si.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <CounterItem key={i} stat={stat} index={i} triggered={triggered} />
          ))}
        </div>

        {/* Globe — presença internacional */}
        <div
          className={`mt-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 delay-300 ${
            triggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="label-tag mb-6">Presença Global</div>
            <h3 className="text-section-title mb-6">
              Onde a C2R{" "}
              <span className="text-gradient-orange">atua.</span>
            </h3>
            <p
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: "var(--t-secondary)" }}
            >
              Atendemos clientes a partir do Brasil, com operações e parcerias
              ativas em seis países — conectando startups brasileiras a
              investidores, operações e regulação internacional.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                { flag: "🇧🇷", name: "Brasil" },
                { flag: "🇺🇸", name: "Estados Unidos" },
                { flag: "🇲🇽", name: "México" },
                { flag: "🇨🇴", name: "Colômbia" },
                { flag: "🇵🇹", name: "Portugal" },
                { flag: "🇩🇪", name: "Alemanha" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--c-orange)" }}
                  />
                  <span className="text-sm font-medium" style={{ color: "var(--t-primary)" }}>
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <GlobePulse
              markers={globeMarkers}
              className="w-full max-w-[520px]"
              speed={0.0025}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
