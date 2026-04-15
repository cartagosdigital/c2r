"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Rocket, Brain, Heart } from "lucide-react";

const differentials = [
  {
    icon: Rocket,
    title: "Ativista",
    desc: "Revolucionamos o direito tradicional. Acreditamos que advocacia pode ser ousada, inovadora e 100% digital.",
  },
  {
    icon: Brain,
    title: "Sapiente",
    desc: "Especialistas em constante aprendizado. Conhecimento profundo transformado em soluções práticas para seu negócio.",
  },
  {
    icon: Heart,
    title: "Intérprete",
    desc: "Traduzimos o juridiquês em linguagem que você entende. Complexo por dentro, simples para você.",
  },
];

const bullets = [
  "Atendimento 100% digital e ágil",
  "Equipe especializada em startups e fintechs",
  "Parceria de longo prazo, não cliente de carteira",
  "Tecnologia como ferramenta, não como promessa",
  "Contratos e documentos com visual law",
  "Disponíveis via WhatsApp, email e videochamada",
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      className="py-24 overflow-hidden relative"
      style={{ background: "var(--bg-elevated)" }}
    >
      {/* Subtle ambient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "var(--c-orange-glow)",
          filter: "blur(120px)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div
        ref={sectionRef}
        className="section-container grid lg:grid-cols-2 gap-16 items-center relative z-10"
      >
        {/* Left — content */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="label-tag mb-6">Quem somos</div>

          <h2 className="text-section-title mb-6">
            Expertise jurídica e{" "}
            <span className="text-gradient-orange">visão empreendedora</span>{" "}
            que entregam resultados.
          </h2>

          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "var(--t-secondary)" }}
          >
            Na C2R, acreditamos que o direito pode ser ousado. Somos parceiras
            estratégicas de iniciativas inovadoras — trabalhando juntos para
            transformar o amanhã com{" "}
            <strong style={{ color: "var(--t-primary)", fontWeight: 600 }}>
              tecnologia acima de burocracia
            </strong>{" "}
            e{" "}
            <strong style={{ color: "var(--t-primary)", fontWeight: 600 }}>
              colaboração acima de competição.
            </strong>
          </p>

          {/* Bullets */}
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {bullets.map((b, i) => (
              <div
                key={b}
                className={`flex items-start gap-2.5 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <CheckCircle2
                  size={15}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--c-orange)" }}
                />
                <span className="text-sm" style={{ color: "var(--t-secondary)" }}>
                  {b}
                </span>
              </div>
            ))}
          </div>

          <a href="#contato" className="btn-primary">
            Agende uma conversa
          </a>
        </div>

        {/* Right — DNA card */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: "var(--bg-overlay)",
              border: "1px solid var(--b-visible)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
              style={{ background: "var(--c-orange-glow)", filter: "blur(60px)" }}
            />

            {/* Sócios photo */}
            <div className="relative z-10 mb-8 -mx-8 -mt-8 overflow-hidden" style={{ borderBottom: "1px solid var(--b-visible)" }}>
              <Image
                src="/socios.jpg"
                alt="Sócios C2R Advocacia"
                width={1200}
                height={800}
                className="w-full h-72 object-cover"
                style={{ filter: "saturate(0.95) contrast(1.05)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, rgba(8,8,8,0) 50%, rgba(8,8,8,0.85) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--c-orange-bright)" }}>
                    Sócios C2R
                  </div>
                  <div className="text-sm font-medium mt-0.5" style={{ color: "var(--t-primary)" }}>
                    Liderança da banca
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mb-8">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "var(--c-orange-bright)" }}
              >
                Nossa Essência
              </div>
              <h3 className="text-2xl font-black" style={{ color: "var(--t-primary)" }}>
                O DNA da C2R
              </h3>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              {differentials.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`flex gap-4 items-start transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, var(--c-orange), var(--c-orange-mid))",
                    }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div
                      className="font-bold text-sm mb-1"
                      style={{ color: "var(--t-primary)" }}
                    >
                      {title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "var(--t-secondary)" }}>
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="relative z-10 mt-8 pt-6"
              style={{ borderTop: "1px solid var(--b-subtle)" }}
            >
              <p className="text-sm italic leading-relaxed" style={{ color: "var(--t-muted)" }}>
                &ldquo;O seu propósito nos inspira. É atuar como parceiras
                estratégicas de iniciativas inovadoras, trabalhando juntos para
                transformar o amanhã.&rdquo;
              </p>
              <div
                className="text-xs font-semibold mt-2"
                style={{ color: "var(--c-orange-bright)" }}
              >
                — Propósito C2R
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
