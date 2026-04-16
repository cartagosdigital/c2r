"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Globe, TrendingUp, Users, Scale } from "lucide-react";

const badges = [
  { icon: Zap, label: "100% Digital" },
  { icon: Shield, label: "Segurança Jurídica" },
  { icon: Globe, label: "Atendimento Nacional" },
];

const panelStats = [
  { value: "+18", label: "Anos", icon: Scale },
  { value: "+5mi", label: "Investimentos", icon: TrendingUp },
  { value: "18+", label: "Estados", icon: Globe },
  { value: "24h", label: "Resposta", icon: Zap },
];

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
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

      {/* Vertical accent line */}
      <div
        className="absolute top-0 right-1/3 w-px h-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--b-orange) 40%, var(--b-orange) 60%, transparent)",
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10 pt-44 md:pt-52 lg:pt-56 pb-24 grid lg:grid-cols-2 gap-16 items-center">
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
            className="text-hero-refined mb-6 anim-up"
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

        {/* Right — unified dashboard panel */}
        <div className="hidden lg:block anim-up" style={{ animationDelay: "0.35s" }}>
          <div
            ref={cardRef}
            className="hero-panel rounded-2xl overflow-hidden relative"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--b-visible)",
            }}
          >
            {/* Spotlight follow effect */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 hero-panel-glow"
              style={{
                background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201,74,26,0.08), transparent 60%)",
              }}
            />

            {/* Header bar */}
            <div
              className="relative z-10 flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid var(--b-subtle)" }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="C2R Advocacia"
                  width={100}
                  height={40}
                  className="h-7 w-auto"
                />
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "#22c55e",
                    boxShadow: "0 0 6px rgba(34,197,94,0.5)",
                    animation: "fadeIn 1.5s ease infinite alternate",
                  }}
                />
                <span className="text-xs font-medium" style={{ color: "var(--t-muted)" }}>
                  Disponível agora
                </span>
              </div>
            </div>

            {/* Sócios photo band */}
            <div className="relative z-10 overflow-hidden" style={{ height: 200 }}>
              <Image
                src="/socios.jpg"
                alt="Sócios C2R Advocacia"
                fill
                className="object-cover object-top"
                style={{ filter: "saturate(0.9) contrast(1.05)" }}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 40%, var(--bg-surface) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-6 right-6 z-10">
                <div className="flex items-center gap-2">
                  <Users size={13} style={{ color: "var(--c-orange-bright)" }} />
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "var(--c-orange-bright)" }}>
                    Sócios fundadores
                  </span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="relative z-10 grid grid-cols-4 gap-0">
              {panelStats.map(({ value, label, icon: Icon }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center py-5 px-2 text-center"
                  style={{
                    borderRight: i < 3 ? "1px solid var(--b-subtle)" : "none",
                  }}
                >
                  <Icon size={14} className="mb-2" style={{ color: "var(--c-orange)" }} />
                  <div
                    className="text-lg font-semibold leading-none mb-1"
                    style={{ color: "var(--t-primary)" }}
                  >
                    {value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider font-medium" style={{ color: "var(--t-muted)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div
              className="relative z-10 px-6 py-4 flex items-center justify-between"
              style={{
                borderTop: "1px solid var(--b-subtle)",
                background: "rgba(201,74,26,0.04)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--c-orange), var(--c-orange-bright))" }}
                >
                  <Zap size={14} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: "var(--t-primary)" }}>
                    Assessoria digital e ágil
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--t-muted)" }}>
                    Contratos, compliance e consultoria
                  </div>
                </div>
              </div>
              <a
                href="#contato"
                className="text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: "var(--c-orange)",
                  color: "white",
                }}
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
