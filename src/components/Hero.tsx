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
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* ── Photo: absolute, covers right side of viewport ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Photo */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[55%]">
          <Image
            src="/socios.jpg"
            alt="Sócios C2R Advocacia"
            fill
            className="object-cover object-top"
            style={{ filter: "saturate(0.9) contrast(1.05)" }}
            sizes="100vw"
            priority
          />

          {/* Gradient: dark left fade — gives text legibility on desktop */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, var(--bg-base) 0%, var(--bg-base) 8%, rgba(8,8,8,0.92) 20%, rgba(8,8,8,0.6) 50%, rgba(8,8,8,0.15) 80%, transparent 100%)",
            }}
          />

          {/* Gradient: bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,8,8,0.3) 0%, transparent 30%, transparent 65%, var(--bg-base) 100%)",
            }}
          />

          {/* Mobile: heavier overlay for text readability */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: "rgba(8,8,8,0.65)" }}
          />
        </div>
      </div>

      {/* Subtle grid behind everything */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity: 0.03 }}
      >
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="section-container w-full pt-36 pb-24">
          <div className="max-w-xl lg:max-w-lg">
            <div
              className="label-tag mb-8 anim-fade"
              style={{ animationDelay: "0.1s" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--c-orange-bright)",
                  animation: "fadeIn 1s ease infinite alternate",
                }}
              />
              Parceira Jurídica de Inovação
            </div>

            <h1
              className="text-hero-refined mb-7 anim-up"
              style={{ animationDelay: "0.2s" }}
            >
              O Jurídico
              <br />
              <span className="text-gradient-orange">das Techs.</span>
            </h1>

            <p
              className="text-lg font-light leading-relaxed mb-10 anim-up"
              style={{
                color: "var(--t-secondary)",
                animationDelay: "0.3s",
              }}
            >
              Somos mais do que um escritório de advocacia. Somos sua{" "}
              <strong
                style={{ color: "var(--t-primary)", fontWeight: 600 }}
              >
                parceira estratégica
              </strong>{" "}
              — tecnologia acima de burocracia, colaboração acima de
              competição.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-12 anim-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="#contato" className="btn-primary group">
                Vem voar na nave C2R
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              <a href="#servicos" className="btn-ghost">
                Nossos serviços
              </a>
            </div>

            <div
              className="flex flex-wrap gap-3 anim-up"
              style={{ animationDelay: "0.5s" }}
            >
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(26,26,28,0.7)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid var(--b-subtle)",
                    color: "var(--t-secondary)",
                  }}
                >
                  <Icon
                    size={13}
                    style={{ color: "var(--c-orange-bright)" }}
                  />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
