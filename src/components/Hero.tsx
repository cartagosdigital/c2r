"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

function C2RMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 55 L85 30 L85 80 L30 105 Q10 120 30 135 L85 110 L85 80"
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M100 30 L150 52 L150 78 L100 56 Z" fill="white" />
      <path d="M100 83 L150 105 L150 131 L100 109 Z" fill="white" />
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
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const xPct = (e.clientX / window.innerWidth - 0.5) * 18;
      const yPct = (e.clientY / window.innerHeight - 0.5) * 18;
      parallaxRef.current.style.transform = `translate(${xPct}px, ${yPct}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/3 translate-x-1/3"
          style={{ background: "var(--c-orange-glow)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full translate-y-1/3 -translate-x-1/4"
          style={{ background: "rgba(201,74,26,0.06)", filter: "blur(100px)" }}
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.04 }}>
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Ghost C2R mark */}
      <div
        ref={parallaxRef}
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 transition-transform duration-500 ease-out pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <C2RMark className="w-[540px] h-[540px] float" />
      </div>

      {/* Vertical accent line */}
      <div
        className="absolute top-0 right-1/3 w-px h-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--b-orange) 40%, var(--b-orange) 60%, transparent)",
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10 pt-40 md:pt-44 lg:pt-48 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div
            className="label-tag mb-8 anim-fade"
            style={{ animationDelay: "0s" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--c-orange-bright)", animation: "fadeIn 1s ease infinite alternate" }}
            />
            Parceira Jurídica de Inovação
          </div>

          <h1
            className="text-hero mb-6 anim-up"
            style={{ animationDelay: "0.1s" }}
          >
            O Jurídico
            <br />
            <span className="text-gradient-orange">das Techs.</span>
          </h1>

          <p
            className="text-lg font-light leading-relaxed max-w-xl mb-10 anim-up"
            style={{
              color: "var(--t-secondary)",
              animationDelay: "0.2s",
            }}
          >
            Somos mais do que um escritório de advocacia.
            Somos sua{" "}
            <strong style={{ color: "var(--t-primary)", fontWeight: 600 }}>parceira estratégica</strong>
            {" "}— tecnologia acima de burocracia, colaboração acima de competição.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-12 anim-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contato"
              className="btn-primary group"
            >
              Vem voar na nave C2R
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#servicos"
              className="btn-ghost"
            >
              Nossos serviços
            </a>
          </div>

          <div
            className="flex flex-wrap gap-3 anim-up"
            style={{ animationDelay: "0.4s" }}
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "var(--bg-overlay)",
                  border: "1px solid var(--b-subtle)",
                  color: "var(--t-secondary)",
                }}
              >
                <Icon size={13} style={{ color: "var(--c-orange-bright)" }} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating cards */}
        <div className="hidden lg:flex flex-col gap-4 items-end">
          <div
            className="float p-5 rounded-2xl max-w-xs w-full"
            style={{
              background: "var(--bg-overlay)",
              border: "1px solid var(--b-subtle)",
              animationDelay: "0s",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--c-orange), var(--c-orange-bright))" }}
              >
                <Zap size={18} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "var(--t-primary)" }}>
                  Assessoria Ágil
                </div>
                <div className="text-xs" style={{ color: "var(--t-muted)" }}>
                  Resposta em até 24h
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--t-secondary)" }}>
              Contratos, compliance e consultoria jurídica com a velocidade que sua startup precisa.
            </p>
          </div>

          <div
            className="float p-5 rounded-2xl max-w-xs w-full mr-8"
            style={{
              background: "rgba(201,74,26,0.10)",
              border: "1px solid var(--b-orange)",
              animationDelay: "2s",
            }}
          >
            <div className="text-4xl font-semibold text-gradient-orange mb-1">+5mi</div>
            <div className="text-sm" style={{ color: "var(--t-secondary)" }}>
              em investimentos assessorados
            </div>
          </div>

          <div
            className="float p-5 rounded-2xl max-w-[200px] w-full"
            style={{
              background: "var(--bg-overlay)",
              border: "1px solid var(--b-subtle)",
              animationDelay: "4s",
            }}
          >
            <div className="text-3xl font-semibold mb-1" style={{ color: "var(--t-primary)" }}>
              +18
            </div>
            <div className="text-xs" style={{ color: "var(--t-secondary)" }}>
              anos de expertise jurídica
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
