"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#numeros" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
        style={
          scrolled
            ? {
                background: "rgba(8,8,8,0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid var(--b-subtle)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.5)",
              }
            : {
                background: "transparent",
                borderBottom: "1px solid transparent",
              }
        }
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center group relative z-10">
            <Image
              src="/logo.png"
              alt="C2R Advocacia"
              width={140}
              height={56}
              priority
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-wide transition-colors duration-200 relative group"
                style={{ color: "var(--t-secondary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--t-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--t-secondary)")
                }
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--c-orange)" }}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4 relative z-10">
            <a
              href="https://wa.me/5548991273767"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium transition-colors duration-200"
              style={{ color: "var(--t-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--t-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--t-secondary)")
              }
            >
              WhatsApp
            </a>
            <a href="#contato" className="btn-primary text-[13px]">
              Fale com a Nave
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 transition-colors relative z-10"
            style={{ color: "var(--t-primary)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-6 py-4 flex flex-col gap-1 border-t"
          style={{
            background: "rgba(8,8,8,0.95)",
            backdropFilter: "blur(20px)",
            borderColor: "var(--b-subtle)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-base font-medium border-b transition-colors duration-200"
              style={{
                color: "var(--t-secondary)",
                borderColor: "var(--b-subtle)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="btn-primary justify-center mt-3"
          >
            Fale com a Nave
          </a>
        </div>
      </div>
    </header>
  );
}
