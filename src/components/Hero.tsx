"use client";

import Image from "next/image";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

const badges = [
  { icon: Zap, label: "100% Digital" },
  { icon: Shield, label: "Segurança Jurídica" },
  { icon: Globe, label: "Atendimento Nacional" },
];

export default function Hero() {
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

      {/* Content */}
      <div className="section-container relative z-10 pt-44 md:pt-52 lg:pt-56 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — copy */}
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

        {/* Right — sócios portrait */}
        <div className="hidden lg:block anim-up relative" style={{ animationDelay: "0.3s" }}>
          <div className="hero-portrait-wrap relative">
            {/* Decorative orange border accent — top-right offset */}
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-2xl pointer-events-none"
              style={{
                border: "2px solid var(--c-orange)",
                opacity: 0.2,
              }}
            />

            {/* Main photo container */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "4 / 5",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px var(--b-visible)",
              }}
            >
              <Image
                src="/socios.jpg"
                alt="Sócios C2R Advocacia"
                fill
                className="object-cover"
                style={{ filter: "saturate(0.92) contrast(1.05)" }}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />

              {/* Bottom gradient for text legibility */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(8,8,8,0.85) 100%)",
                }}
              />

              {/* Bottom overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--c-orange), var(--c-orange-bright))",
                    }}
                  >
                    <Shield size={15} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--t-primary)" }}>
                      C2R Advocacia
                    </div>
                    <div className="text-xs" style={{ color: "var(--t-secondary)" }}>
                      Florianópolis, SC
                    </div>
                  </div>
                </div>
                <div
                  className="flex gap-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "12px" }}
                >
                  <div>
                    <div className="text-xl font-semibold" style={{ color: "var(--t-primary)" }}>+18</div>
                    <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--t-muted)" }}>anos</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold" style={{ color: "var(--t-primary)" }}>+5mi</div>
                    <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--t-muted)" }}>investimentos</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold" style={{ color: "var(--t-primary)" }}>100%</div>
                    <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--t-muted)" }}>digital</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating accent card — bottom-left offset */}
            <div
              className="absolute -bottom-5 -left-5 px-5 py-3.5 rounded-xl float-alt z-20"
              style={{
                background: "var(--bg-overlay)",
                border: "1px solid var(--b-orange)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "#22c55e",
                    boxShadow: "0 0 6px rgba(34,197,94,0.5)",
                    animation: "fadeIn 1.5s ease infinite alternate",
                  }}
                />
                <span className="text-xs font-semibold" style={{ color: "var(--t-primary)" }}>
                  Atendimento ativo agora
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
