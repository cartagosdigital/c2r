"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Building2,
  ShieldCheck,
  DollarSign,
  FileText,
  Gavel,
  Users,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Assessoria Completa",
    subtitle: "Startups & Tech",
    desc: "Contratos, termos de uso, políticas de privacidade e toda a estrutura jurídica que sua startup precisa para decolar.",
    tag: "Mais procurado",
    accent: "var(--c-orange)",
  },
  {
    icon: ShieldCheck,
    title: "LGPD & Privacidade",
    subtitle: "Proteção de Dados",
    desc: "Adequação completa à Lei Geral de Proteção de Dados. Diagnóstico, implementação e treinamento para sua equipe.",
    tag: null,
    accent: "#3F6DC1",
  },
  {
    icon: DollarSign,
    title: "Direito Financeiro",
    subtitle: "Fintechs & Crédito",
    desc: "Regulação para fintechs, correspondentes bancários, emissoras de cartão e empresas de crédito consignado.",
    tag: null,
    accent: "#335E6A",
  },
  {
    icon: FileText,
    title: "Contratos Digitais",
    subtitle: "B2B & B2C",
    desc: "Elaboração e revisão de contratos digitais, SaaS, licenciamento de software e termos de serviço.",
    tag: null,
    accent: "var(--c-orange-bright)",
  },
  {
    icon: Building2,
    title: "Estruturação Societária",
    subtitle: "Societário",
    desc: "Abertura, reestruturação e gestão jurídica de empresas. Shareholder agreements e vesting para fundadores.",
    tag: null,
    accent: "var(--c-orange-dark)",
  },
  {
    icon: Users,
    title: "Direito Trabalhista",
    subtitle: "CLT & PJ",
    desc: "Compliance trabalhista, contratos de prestação de serviço, acordos e gestão de equipes híbridas e remotas.",
    tag: null,
    accent: "#244C99",
  },
  {
    icon: Globe,
    title: "Propriedade Intelectual",
    subtitle: "Marcas & Patentes",
    desc: "Registro de marcas, proteção de software, contratos de licenciamento e propriedade intelectual para startups.",
    tag: null,
    accent: "var(--c-orange-mid)",
  },
  {
    icon: Gavel,
    title: "Litígios & Contencioso",
    subtitle: "Resolução de Conflitos",
    desc: "Mediação, arbitragem e litígios especializados em direito empresarial, trabalhista e digital.",
    tag: null,
    accent: "#335E6A",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 70);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className={`card-dark group relative cursor-pointer transition-all duration-500 p-6 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {service.tag && (
        <div
          className="absolute -top-3 right-4 text-white text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: "linear-gradient(90deg, var(--c-orange), var(--c-orange-bright))" }}
        >
          {service.tag}
        </div>
      )}

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${service.accent}22`, border: `1px solid ${service.accent}44` }}
      >
        <Icon size={20} style={{ color: service.accent }} />
      </div>

      <div
        className="text-[10px] font-semibold tracking-widest uppercase mb-1"
        style={{ color: "var(--c-orange-bright)" }}
      >
        {service.subtitle}
      </div>
      <h3
        className="font-bold text-lg mb-2 leading-tight"
        style={{ color: "var(--t-primary)" }}
      >
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--t-secondary)" }}>
        {service.desc}
      </p>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
      />
    </div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTitleVisible(true);
      },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicos"
      className="py-24 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="section-container">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="label-tag mb-6 mx-auto w-fit">
            Soluções Estratégicas
          </div>
          <h2 className="text-section-title mb-4">
            Jurídico sem{" "}
            <span className="text-gradient-orange">juridiquês.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--t-secondary)" }}
          >
            Assessoria especializada para empresas que não têm tempo a perder.
            Rápido, digital e direto ao ponto.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contato" className="btn-ghost">
            Ver todos os serviços
          </a>
        </div>
      </div>
    </section>
  );
}
