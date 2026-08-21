import * as React from "react";

export function Display({
  children,
  className = "",
  as: Tag = "h2",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  light?: boolean;
}) {
  return (
    <Tag
      className={`font-display font-light uppercase leading-[0.88] tracking-[-0.04em] text-[clamp(36px,6vw,88px)] ${light ? "text-white" : "text-[var(--lys-verde)]"} ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Lead({ children, className = "", light = false }: { children: React.ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={`text-[17px] md:text-[19px] leading-8 ${light ? "text-white/70" : "text-[var(--lys-ink-60)]"} ${className}`}>
      {children}
    </p>
  );
}
