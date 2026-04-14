"use client";

import { useEffect, useRef, useState } from "react";
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
    <section id="sobre" className="py-24 bg-[#f8f8f6] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#0d2530] clip-diagonal hidden lg:block" />

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left — content */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#E3531F]/10 border border-[#E3531F]/20 text-[#E3531F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            Quem somos
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-[#122E39] leading-tight mb-6">
            Expertise jurídica e{" "}
            <span className="text-gradient-orange">visão empreendedora</span>{" "}
            que entregam resultados.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Na C2R, acreditamos que o direito pode ser ousado. Somos parceiras
            estratégicas de iniciativas inovadoras — trabalhando juntos para
            transformar o amanhã com{" "}
            <strong className="text-[#122E39]">tecnologia acima de burocracia</strong> e{" "}
            <strong className="text-[#122E39]">colaboração acima de competição.</strong>
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
                <CheckCircle2 size={16} className="text-[#E3531F] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{b}</span>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E3531F] to-[#F0861C] text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#E3531F]/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Agende uma conversa
          </a>
        </div>

        {/* Right — dark card with archetypes */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="bg-[#0d2530] rounded-3xl p-8 border border-white/8 relative overflow-hidden">
            {/* Decorative orange blob */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#E3531F]/20 rounded-full blur-[60px]" />

            {/* Title */}
            <div className="relative z-10 mb-8">
              <div className="text-[#F0861C] text-xs font-semibold tracking-widest uppercase mb-2">
                Nossa Essência
              </div>
              <h3 className="text-white text-2xl font-black">
                O DNA da C2R
              </h3>
            </div>

            {/* Differentials */}
            <div className="relative z-10 flex flex-col gap-6">
              {differentials.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`flex gap-4 items-start transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#E3531F] to-[#F0861C] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-1">{title}</div>
                    <div className="text-white/50 text-sm leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom quote */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <p className="text-white/40 text-sm italic leading-relaxed">
                &ldquo;O seu propósito nos inspira. É atuar como parceiras
                estratégicas de iniciativas inovadoras, trabalhando juntos para
                transformar o amanhã.&rdquo;
              </p>
              <div className="text-[#F0861C] text-xs font-semibold mt-2">
                — Propósito C2R
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
