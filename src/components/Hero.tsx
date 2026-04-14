"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

// The C2R geometric symbol as decorative SVG
function C2RSymbol({
  className,
  opacity = 0.08,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      {/* C curve */}
      <path
        d="M30 55 L85 30 L85 80 L30 105 Q10 120 30 135 L85 110 L85 80"
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* 2 arrows */}
      <path d="M100 30 L150 52 L150 78 L100 56 Z" fill="white" />
      <path d="M100 83 L150 105 L150 131 L100 109 Z" fill="white" />
      {/* R shape */}
      <path
        d="M162 30 L180 52 L162 74 L144 52 Z"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M162 74 L180 96 L162 118"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

const badges = [
  { icon: Zap, label: "100% Digital" },
  { icon: Shield, label: "Segurança Jurídica" },
  { icon: Globe, label: "Atendimento Nacional" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX / innerWidth - 0.5) * 20;
      const yPct = (clientY / innerHeight - 0.5) * 20;
      const geoEl = heroRef.current.querySelector(".geo-parallax") as HTMLElement;
      if (geoEl) {
        geoEl.style.transform = `translate(${xPct}px, ${yPct}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0d2530]"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#E3531F]/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F0861C]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#244C99]/15 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Geometric grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.05 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Large decorative C2R symbol — right side */}
      <div
        className="geo-parallax absolute right-[-80px] top-1/2 -translate-y-1/2 transition-transform duration-300 ease-out pointer-events-none"
      >
        <C2RSymbol className="w-[500px] h-[500px] animate-float-slow" opacity={0.06} />
      </div>

      {/* Diagonal orange line accent */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#E3531F]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 bg-[#E3531F]/15 border border-[#E3531F]/30 text-[#F0861C] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
            style={{ animation: "fadeUp 0.6s ease-out forwards" }}
          >
            <span className="w-1.5 h-1.5 bg-[#F0861C] rounded-full animate-pulse" />
            Parceira Jurídica de Inovação
          </div>

          {/* Headline */}
          <h1
            className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tight mb-6"
            style={{ animation: "fadeUp 0.6s ease-out 0.1s both" }}
          >
            O Jurídico
            <br />
            <span className="text-gradient-orange">das Techs.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-xl mb-10"
            style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}
          >
            Somos mais do que um escritório de advocacia.
            Somos sua{" "}
            <strong className="text-white font-semibold">parceira estratégica</strong>{" "}
            — com tecnologia acima de burocracia e colaboração acima de competição.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mb-12"
            style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}
          >
            <a
              href="#contato"
              className="group flex items-center gap-2 bg-gradient-to-r from-[#E3531F] to-[#F0861C] text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:shadow-2xl hover:shadow-[#E3531F]/30 transition-all duration-300 hover:-translate-y-1"
            >
              Vem voar na nave C2R
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-7 py-3.5 rounded-xl font-medium text-base transition-all duration-300"
            >
              Nossos serviços
            </a>
          </div>

          {/* Badges */}
          <div
            className="flex flex-wrap gap-3"
            style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Icon size={13} className="text-[#F0861C]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right — decorative visual block */}
        <div className="hidden lg:flex flex-col gap-4 items-end">
          {/* Floating card 1 */}
          <div
            className="animate-float bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 max-w-xs w-full"
            style={{ animationDelay: "0s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E3531F] to-[#F0861C] rounded-xl flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Assessoria Ágil</div>
                <div className="text-white/40 text-xs">Resposta em até 24h</div>
              </div>
            </div>
            <div className="text-white/50 text-xs leading-relaxed">
              Contratos, compliance e consultoria jurídica com a velocidade que sua startup precisa.
            </div>
          </div>

          {/* Floating card 2 */}
          <div
            className="animate-float bg-gradient-to-br from-[#E3531F]/20 to-[#F0861C]/10 backdrop-blur-sm border border-[#E3531F]/20 rounded-2xl p-5 max-w-xs w-full mr-8"
            style={{ animationDelay: "2s" }}
          >
            <div className="text-4xl font-black text-gradient-orange mb-1">+5mi</div>
            <div className="text-white/60 text-sm">em investimentos assessorados</div>
          </div>

          {/* Floating card 3 */}
          <div
            className="animate-float bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 max-w-[200px] w-full"
            style={{ animationDelay: "4s" }}
          >
            <div className="text-3xl font-black text-white mb-1">+18</div>
            <div className="text-white/50 text-xs">anos de expertise jurídica</div>
          </div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0 80 L1440 20 L1440 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
