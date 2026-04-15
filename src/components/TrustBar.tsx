"use client";

const clients = [
  "ABEP",
  "HUB",
  "Adept",
  "ECHBA",
  "fatel",
  "eazy",
  "Paytech",
  "InvestBR",
  "DataLaw",
  "StartLegal",
];

const doubled = [...clients, ...clients];

export default function TrustBar() {
  return (
    <section
      className="py-14 overflow-hidden"
      style={{
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--b-subtle)",
      }}
    >
      <div className="section-container mb-8 text-center">
        <p
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "var(--t-muted)" }}
        >
          Grandes marcas confiam na C2R
        </p>
      </div>

      <div className="marquee-wrap overflow-hidden relative z-10">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg-surface), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg-surface), transparent)" }}
        />

        <div className="marquee-track items-center gap-16">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-4 cursor-default select-none"
            >
              <span
                className="font-semibold text-2xl tracking-tight transition-colors duration-300"
                style={{ color: "var(--t-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t-secondary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-muted)")}
              >
                {name}
              </span>
              <span
                className="w-px h-5"
                style={{ background: "var(--b-subtle)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
