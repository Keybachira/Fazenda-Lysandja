import * as React from "react";

/* ── Display — 48–120px — Hero/section headlines ── */
export function Display({
  children,
  className = "",
  as: Tag = "h2",
  light = false,
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  light?: boolean;
  size?: "lg" | "xl" | "hero";
}) {
  const sizeClasses = {
    hero: "text-[clamp(56px,11vw,200px)] leading-[0.78] tracking-[-0.05em]",
    xl: "text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em]",
    lg: "text-[clamp(36px,6vw,88px)] leading-[0.85] tracking-[-0.04em]",
  };

  return (
    <Tag
      className={`font-display font-light uppercase ${sizeClasses[size]} ${light ? "text-white" : "text-[var(--lys-verde)]"} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ── Editorial — 32–64px — Subheadings, card titles ── */
export function Editorial({
  children,
  className = "",
  as: Tag = "h3",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  light?: boolean;
}) {
  return (
    <Tag
      className={`font-display font-normal uppercase text-[clamp(24px,4vw,48px)] leading-[0.95] tracking-[-0.03em] ${light ? "text-white" : "text-[var(--lys-verde)]"} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ── Utility — 10–14px — Labels, kickers, meta ── */
export function Utility({
  children,
  className = "",
  as: Tag = "p",
  variant = "kicker",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
  variant?: "kicker" | "label" | "meta";
}) {
  const variantClasses = {
    kicker:
      "text-[12px] tracking-[0.32em] uppercase font-semibold text-[var(--lys-madeira)]",
    label:
      "text-[10px] tracking-[0.24em] uppercase font-medium text-[var(--lys-ink-40)]",
    meta: "text-[11px] tracking-[0.18em] uppercase font-medium text-[var(--lys-ink-60)]",
  };

  return (
    <Tag className={`font-sans ${variantClasses[variant]} ${className}`}>
      {children}
    </Tag>
  );
}

/* ── Lead — body-level intro ── */
export function Lead({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[17px] md:text-[19px] leading-8 ${light ? "text-white/70" : "text-[var(--lys-ink-60)]"} ${className}`}
    >
      {children}
    </p>
  );
}
