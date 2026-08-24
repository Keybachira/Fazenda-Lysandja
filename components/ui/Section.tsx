import * as React from "react";

export function Section({
  children,
  className = "",
  id,
  dark = false,
  bleed = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-[var(--lys-verde)] text-white" : "bg-[var(--lys-paper)] text-[var(--lys-ink)]"} ${bleed ? "" : "section-lys"} ${className}`}
    >
      {bleed ? children : <div className="container-lys">{children}</div>}
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[10px] md:text-[11px] tracking-[0.24em] uppercase font-semibold ${light ? "text-[var(--lys-rosa)]" : "text-[var(--lys-rosa)]"}`}>
      {children}
    </p>
  );
}

export function SectionNumber({ n, light = false }: { n: string; light?: boolean }) {
  return (
    <span
      aria-hidden
      className={`font-display text-[84px] md:text-[120px] leading-none tracking-[-0.06em] ${light ? "text-white/10" : "text-[var(--lys-verde)]/[0.07]"}`}
    >
      {n}
    </span>
  );
}

/* ── Ghost word — large background typography ── */
export function GhostWord({
  children,
  color = "verde",
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  color?: "verde" | "paper" | "madeira" | "rosa" | "dark";
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={`ghost-word ghost-word--${color} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
