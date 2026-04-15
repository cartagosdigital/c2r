"use client";

import Image from "next/image";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const links = {
  Serviços: [
    { label: "Startups & Tech", href: "#servicos" },
    { label: "LGPD & Privacidade", href: "#servicos" },
    { label: "Direito Financeiro", href: "#servicos" },
    { label: "Contratos Digitais", href: "#servicos" },
    { label: "Societário", href: "#servicos" },
  ],
  Empresa: [
    { label: "Sobre a C2R", href: "#sobre" },
    { label: "DNA de Marca", href: "#sobre" },
    { label: "Resultados", href: "#numeros" },
    { label: "Blog C2R", href: "#" },
    { label: "Trabalhe conosco", href: "#contato" },
  ],
  Legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "LGPD", href: "#" },
  ],
};

const socials = [
  { Icon: InstagramIcon, href: "https://instagram.com/c2radvocacia", label: "Instagram" },
  { Icon: LinkedinIcon, href: "https://linkedin.com/company/c2r", label: "LinkedIn" },
  { Icon: YoutubeIcon, href: "https://youtube.com/@c2r", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-base)" }}>
      {/* CTA strip */}
      <div
        className="section-container mt-16 mb-20"
      >
      <div
        className="py-12 px-8 md:px-12 rounded-3xl"
        style={{
          background: "linear-gradient(90deg, var(--c-orange), var(--c-orange-bright))",
        }}
      >
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-semibold mb-1">
              Pronto para decolar?
            </h3>
            <p className="text-white/80 text-sm">
              Primeira consulta sem custo. Sem juridiquês.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/5548991273767"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "white",
                color: "var(--c-orange)",
              }}
            >
              WhatsApp agora
            </a>
            <a
              href="#contato"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:bg-white/10"
              style={{ border: "2px solid rgba(255,255,255,0.4)" }}
            >
              Formulário
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Main footer */}
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="C2R Advocacia"
              width={180}
              height={72}
              className="h-14 w-auto mb-6"
            />

            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "var(--t-muted)" }}
            >
              Parceira jurídica de empresas inovadoras. Tecnologia acima de
              burocracia. 100% digital, ágil e descomplicada.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "var(--bg-overlay)",
                    color: "var(--t-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--c-orange)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-overlay)";
                    (e.currentTarget as HTMLElement).style.color = "var(--t-secondary)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <div
                className="font-semibold text-sm mb-4"
                style={{ color: "var(--t-primary)" }}
              >
                {title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--t-muted)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--t-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--t-muted)")
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--b-subtle)" }}
        >
          <p className="text-xs" style={{ color: "var(--t-muted)" }}>
            © {new Date().getFullYear()} C2R Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: "var(--t-muted)" }}>
            OAB/SC · Florianópolis, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
