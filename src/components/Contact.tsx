"use client";

import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, Mail, MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Assessoria para Startup",
  "LGPD & Proteção de Dados",
  "Direito Financeiro",
  "Contratos Digitais",
  "Estruturação Societária",
  "Direito Trabalhista",
  "Propriedade Intelectual",
  "Outro",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    area: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate submission — replace with actual API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fff5f2] pointer-events-none" />

      {/* Top orange geometric accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#E3531F] to-[#F0861C]" />

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative z-10"
      >
        {/* Left — info */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#E3531F]/10 border border-[#E3531F]/20 text-[#E3531F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            Fale com a Nave
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-[#122E39] leading-tight mb-6">
            Pronto para{" "}
            <span className="text-gradient-orange">decolar?</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Quer acelerar o crescimento da sua empresa com segurança jurídica?
            Entre em contato com nossa nave — a gente descompica o juridiquês
            pra você.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-5 mb-10">
            <a
              href="https://wa.me/5548991273767"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#E3531F]/30 hover:bg-[#E3531F]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <MessageCircle size={22} className="text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-[#122E39] text-sm">WhatsApp</div>
                <div className="text-gray-500 text-sm">+55 (48) 9 9127-3767</div>
              </div>
            </a>

            <a
              href="mailto:contato@c2r.com.br"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#E3531F]/30 hover:bg-[#E3531F]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#E3531F]/10 rounded-xl flex items-center justify-center group-hover:bg-[#E3531F]/20 transition-colors">
                <Mail size={22} className="text-[#E3531F]" />
              </div>
              <div>
                <div className="font-semibold text-[#122E39] text-sm">E-mail</div>
                <div className="text-gray-500 text-sm">contato@c2r.com.br</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-[#122E39]/10 rounded-xl flex items-center justify-center">
                <MapPin size={22} className="text-[#122E39]" />
              </div>
              <div>
                <div className="font-semibold text-[#122E39] text-sm">Base</div>
                <div className="text-gray-500 text-sm">Florianópolis, SC — 100% Digital</div>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-3">
            {["Resposta em até 24h", "Primeira consulta gratuita", "Sem juridiquês"].map(
              (tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  <CheckCircle size={11} className="text-[#E3531F]" />
                  {tag}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right — form */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="bg-[#0d2530] rounded-3xl p-8 border border-white/8 relative overflow-hidden">
            {/* Orange glow */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#E3531F]/15 rounded-full blur-[60px]" />

            {status === "sent" ? (
              <div className="relative z-10 text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E3531F] to-[#F0861C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={36} className="text-white" />
                </div>
                <h3 className="text-white text-2xl font-black mb-3">
                  Mensagem enviada!
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Nossa equipe entrará em contato em até 24h.
                  <br />
                  Bem-vindo à nave C2R! 🚀
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
                <div className="text-white font-bold text-lg mb-2">
                  Agende uma conversa
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full bg-white/8 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E3531F]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-white/8 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E3531F]/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="(48) 9 9999-9999"
                      className="w-full bg-white/8 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E3531F]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="w-full bg-white/8 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E3531F]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs font-medium mb-1.5 block">
                    Área de interesse *
                  </label>
                  <select
                    name="area"
                    required
                    value={form.area}
                    onChange={handleChange}
                    className="w-full bg-white/8 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E3531F]/60 transition-colors appearance-none"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" disabled>
                      Selecione uma área
                    </option>
                    {areas.map((a) => (
                      <option key={a} value={a} className="bg-[#0d2530]">
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-white/50 text-xs font-medium mb-1.5 block">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Conta um pouco sobre sua necessidade..."
                    rows={3}
                    className="w-full bg-white/8 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E3531F]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#E3531F] to-[#F0861C] text-white py-3.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-[#E3531F]/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Enviar mensagem
                    </>
                  )}
                </button>

                <p className="text-white/30 text-xs text-center">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
