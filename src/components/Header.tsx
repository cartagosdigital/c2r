"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

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
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d2530]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo SVG */}
        <a href="#hero" className="flex items-center gap-3 group">
          <svg
            width="52"
            height="52"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-105"
          >
            {/* C shape - left curved parallelogram */}
            <path
              d="M18 35 L52 20 L52 50 L18 65 Z"
              fill="none"
              stroke="#E3531F"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M18 65 Q8 75 18 85 L52 70 L52 50 L18 65 Z"
              fill="none"
              stroke="#E3531F"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {/* 2 / arrow shapes */}
            <path
              d="M60 20 L90 35 L90 52 L60 37 Z"
              fill="#F0861C"
              opacity="0.9"
            />
            <path
              d="M60 52 L90 67 L90 84 L60 69 Z"
              fill="#E3531F"
              opacity="0.9"
            />
            {/* R shape - right triangle */}
            <path
              d="M98 20 L110 35 L98 50 L86 35 Z"
              fill="none"
              stroke="#E3531F"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M98 50 L110 65 L98 80"
              fill="none"
              stroke="#E3531F"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <div className="text-white font-black text-xl leading-none tracking-tight">
              C2R
            </div>
            <div className="text-[#F0861C] text-[10px] font-medium tracking-widest uppercase">
              advocacia
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#F0861C] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E3531F] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/5548991273767"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <Phone size={14} />
            WhatsApp
          </a>
          <a
            href="#contato"
            className="bg-gradient-to-r from-[#E3531F] to-[#F0861C] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Fale com a Nave
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d2530] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-[#F0861C] text-base font-medium py-2 border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-[#E3531F] to-[#F0861C] text-white px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2"
          >
            Fale com a Nave
          </a>
        </div>
      </div>
    </header>
  );
}
