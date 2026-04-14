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
    color: "from-[#E3531F] to-[#F0861C]",
  },
  {
    icon: ShieldCheck,
    title: "LGPD & Privacidade",
    subtitle: "Proteção de Dados",
    desc: "Adequação completa à Lei Geral de Proteção de Dados. Diagnóstico, implementação e treinamento para sua equipe.",
    tag: null,
    color: "from-[#244C99] to-[#3F6DC1]",
  },
  {
    icon: DollarSign,
    title: "Direito Financeiro",
    subtitle: "Fintechs & Crédito",
    desc: "Regulação para fintechs, correspondentes bancários, emissoras de cartão e empresas de crédito consignado.",
    tag: null,
    color: "from-[#122E39] to-[#335E6A]",
  },
  {
    icon: FileText,
    title: "Contratos Digitais",
    subtitle: "B2B & B2C",
    desc: "Elaboração e revisão de contratos digitais, SaaS, licenciamento de software e termos de serviço.",
    tag: null,
    color: "from-[#F3B01C] to-[#F0861C]",
  },
  {
    icon: Building2,
    title: "Estruturação Societária",
    subtitle: "Societário",
    desc: "Abertura, reestruturação e gestão jurídica de empresas. Shareholder agreements e vesting para fundadores.",
    tag: null,
    color: "from-[#E3531F] to-[#B23619]",
  },
  {
    icon: Users,
    title: "Direito Trabalhista",
    subtitle: "CLT & PJ",
    desc: "Compliance trabalhista, contratos de prestação de serviço, acordos e gestão de equipes híbridas e remotas.",
    tag: null,
    color: "from-[#244C99] to-[#122E39]",
  },
  {
    icon: Globe,
    title: "Propriedade Intelectual",
    subtitle: "Marcas & Patentes",
    desc: "Registro de marcas, proteção de software, contratos de licenciamento e propriedade intelectual para startups.",
    tag: null,
    color: "from-[#F0861C] to-[#F3B01C]",
  },
  {
    icon: Gavel,
    title: "Litígios & Contencioso",
    subtitle: "Resolução de Conflitos",
    desc: "Mediação, arbitragem e litígios especializados em direito empresarial, trabalhista e digital.",
    tag: null,
    color: "from-[#122E39] to-[#244C99]",
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
          setTimeout(() => setVisible(true), index * 80);
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
      className={`card-glow group relative bg-[#0d2530] rounded-2xl p-6 border border-white/8 cursor-pointer transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Tag */}
      {service.tag && (
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#E3531F] to-[#F0861C] text-white text-xs font-bold px-3 py-1 rounded-full">
          {service.tag}
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={22} className="text-white" />
      </div>

      {/* Content */}
      <div className="text-[10px] font-semibold text-[#F0861C] tracking-widest uppercase mb-1">
        {service.subtitle}
      </div>
      <h3 className="text-white font-bold text-lg mb-2 leading-tight">
        {service.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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
    <section id="servicos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#E3531F]/10 border border-[#E3531F]/20 text-[#E3531F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            Soluções Estratégicas
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#122E39] mb-4">
            Jurídico sem{" "}
            <span className="text-gradient-orange">juridiquês.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border-2 border-[#E3531F] text-[#E3531F] hover:bg-[#E3531F] hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300"
          >
            Ver todos os serviços
          </a>
        </div>
      </div>
    </section>
  );
}
