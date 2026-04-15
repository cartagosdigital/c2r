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
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section
      id="contato"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-elevated)" }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--b-orange) 40%, var(--b-orange) 60%, transparent)",
        }}
      />

      {/* Ambient */}
      <div
        className="absolute bottom-0 left-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "var(--c-orange-glow)",
          filter: "blur(100px)",
          transform: "translateX(-50%) translateY(30%)",
        }}
      />

      <div
        ref={sectionRef}
        className="section-container grid lg:grid-cols-2 gap-16 items-start relative z-10"
      >
        {/* Left — info */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="label-tag mb-6">Fale com a Nave</div>

          <h2 className="text-section-title mb-6">
            Pronto para{" "}
            <span className="text-gradient-orange">decolar?</span>
          </h2>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "var(--t-secondary)" }}
          >
            Quer acelerar o crescimento da sua empresa com segurança jurídica?
            Entre em contato com nossa nave — a gente descompica o juridiquês
            pra você.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-4 mb-10">
            <a
              href="https://wa.me/5548991273767"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
              style={{
                border: "1px solid var(--b-subtle)",
                background: "var(--bg-overlay)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--b-orange)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--b-subtle)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(34,197,94,0.1)" }}
              >
                <MessageCircle size={22} style={{ color: "#22c55e" }} />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "var(--t-primary)" }}>
                  WhatsApp
                </div>
                <div className="text-sm" style={{ color: "var(--t-secondary)" }}>
                  +55 (48) 9 9127-3767
                </div>
              </div>
            </a>

            <a
              href="mailto:contato@c2r.com.br"
              className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
              style={{
                border: "1px solid var(--b-subtle)",
                background: "var(--bg-overlay)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--b-orange)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--b-subtle)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,74,26,0.12)" }}
              >
                <Mail size={22} style={{ color: "var(--c-orange)" }} />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "var(--t-primary)" }}>
                  E-mail
                </div>
                <div className="text-sm" style={{ color: "var(--t-secondary)" }}>
                  contato@c2r.com.br
                </div>
              </div>
            </a>

            <div
              className="flex items-center gap-4 p-4 rounded-2xl"
              style={{
                border: "1px solid var(--b-subtle)",
                background: "var(--bg-overlay)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <MapPin size={22} style={{ color: "var(--t-secondary)" }} />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "var(--t-primary)" }}>
                  Base
                </div>
                <div className="text-sm" style={{ color: "var(--t-secondary)" }}>
                  Florianópolis, SC — 100% Digital
                </div>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-3">
            {["Resposta em até 24h", "Primeira consulta gratuita", "Sem juridiquês"].map(
              (tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "var(--bg-overlay)",
                    border: "1px solid var(--b-subtle)",
                    color: "var(--t-secondary)",
                  }}
                >
                  <CheckCircle size={11} style={{ color: "var(--c-orange)" }} />
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
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: "var(--bg-overlay)",
              border: "1px solid var(--b-visible)",
            }}
          >
            <div
              className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
              style={{ background: "var(--c-orange-glow)", filter: "blur(60px)" }}
            />

            {status === "sent" ? (
              <div className="relative z-10 text-center py-12">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, var(--c-orange), var(--c-orange-bright))",
                  }}
                >
                  <CheckCircle size={36} className="text-white" />
                </div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "var(--t-primary)" }}
                >
                  Mensagem enviada!
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t-secondary)" }}>
                  Nossa equipe entrará em contato em até 24h.
                  <br />
                  Bem-vindo à nave C2R!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
                <div
                  className="font-bold text-lg mb-2"
                  style={{ color: "var(--t-primary)" }}
                >
                  Agende uma conversa
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-xs font-medium mb-1.5 block"
                      style={{ color: "var(--t-secondary)" }}
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label
                      className="text-xs font-medium mb-1.5 block"
                      style={{ color: "var(--t-secondary)" }}
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="input-dark"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-xs font-medium mb-1.5 block"
                      style={{ color: "var(--t-secondary)" }}
                    >
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="(48) 9 9999-9999"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label
                      className="text-xs font-medium mb-1.5 block"
                      style={{ color: "var(--t-secondary)" }}
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="input-dark"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-xs font-medium mb-1.5 block"
                    style={{ color: "var(--t-secondary)" }}
                  >
                    Área de interesse *
                  </label>
                  <select
                    name="area"
                    required
                    value={form.area}
                    onChange={handleChange}
                    className="input-dark appearance-none"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" disabled>
                      Selecione uma área
                    </option>
                    {areas.map((a) => (
                      <option
                        key={a}
                        value={a}
                        style={{ background: "var(--bg-overlay)" }}
                      >
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="text-xs font-medium mb-1.5 block"
                    style={{ color: "var(--t-secondary)" }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Conta um pouco sobre sua necessidade..."
                    rows={3}
                    className="input-dark resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={
                    status !== "sending"
                      ? {
                          background:
                            "linear-gradient(90deg, var(--c-orange), var(--c-orange-bright))",
                        }
                      : undefined
                  }
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
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

                <p
                  className="text-xs text-center"
                  style={{ color: "var(--t-muted)" }}
                >
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
