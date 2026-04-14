"use client";

const clients = [
  { name: "ABEP", abbr: true },
  { name: "HUB", abbr: true },
  { name: "Adept", abbr: false },
  { name: "ECHBA", abbr: true },
  { name: "fatel", abbr: false },
  { name: "eazy", abbr: false },
  { name: "Paytech", abbr: false },
  { name: "InvestBR", abbr: false },
  { name: "DataLaw", abbr: false },
  { name: "StartLegal", abbr: false },
];

// Duplicate for seamless marquee
const doubled = [...clients, ...clients];

export default function TrustBar() {
  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-gray-400 text-sm font-medium tracking-widest uppercase">
          Grandes marcas confiam na C2R
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 opacity-30 hover:opacity-70 transition-opacity duration-300 cursor-default"
            >
              {/* Logo placeholder — styled text */}
              <div
                className={`font-black text-2xl tracking-tight text-[#122E39] ${
                  client.abbr ? "uppercase" : ""
                }`}
              >
                {client.name}
              </div>
              <div className="w-px h-6 bg-gray-200 ml-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
