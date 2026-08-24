"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const SECTIONS = [
  { id: "manifesto", label: "01 — Manifesto" },
  { id: "territorio", label: "02 — Território" },
  { id: "producao", label: "03 — Produção" },
  { id: "pessoas", label: "04 — Pessoas" },
  { id: "impacto", label: "05 — Impacto" },
];

export function SectionIndicator() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      SECTIONS.forEach((section, i) => {
        const target = document.getElementById(section.id);
        if (!target) return;

        ScrollTrigger.create({
          trigger: target,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    }, el);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={ref}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4"
      aria-label="Seções da página"
    >
      {SECTIONS.map((section, i) => (
        <button
          key={section.id}
          onClick={() => {
            const target = document.getElementById(section.id);
            target?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex items-center gap-3"
          aria-label={section.label}
          aria-current={i === active ? "true" : undefined}
        >
          <span
            className={`block rounded-full transition-all duration-500 ${
              i === active
                ? "w-8 h-[2px] bg-[var(--lys-rosa)]"
                : "w-3 h-[2px] bg-[var(--lys-verde)]/30 group-hover:bg-[var(--lys-verde)]/60"
            }`}
          />
          <span
            className={`text-[10px] tracking-[0.18em] uppercase transition-all duration-500 ${
              i === active
                ? "opacity-100 text-[var(--lys-verde)]"
                : "opacity-0 group-hover:opacity-100 text-[var(--lys-ink-40)]"
            }`}
          >
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
}
