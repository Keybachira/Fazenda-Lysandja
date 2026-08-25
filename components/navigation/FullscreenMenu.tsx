"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface FullscreenMenuProps {
  open: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { href: "/fazenda", label: "A Fazenda", kicker: "Território", number: "01" },
  { href: "/producao", label: "Produção", kicker: "Culturas", number: "02" },
  { href: "/impacto", label: "Impacto", kicker: "Números", number: "03" },
  {
    href: "/sustentabilidade",
    label: "Sustentabilidade",
    kicker: "Futuro",
    number: "04",
  },
  { href: "/journal", label: "Journal", kicker: "Histórias", number: "05" },
  { href: "/galeria", label: "Galeria", kicker: "Imagens", number: "06" },
  {
    href: "/contacto",
    label: "Contacto",
    kicker: "Fale connosco",
    number: "07",
  },
];

export function FullscreenMenu({ open, onClose }: FullscreenMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (open) {
        const tl = gsap.timeline();

        tl.set(el, { visibility: "visible" })
          .fromTo(
            "[data-menu-overlay]",
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: "power2.out" },
            0,
          )
          .fromTo(
            "[data-menu-bg]",
            { y: "-100%" },
            { y: "0%", duration: 0.6, ease: "power3.out" },
            0,
          )
          .fromTo(
            "[data-menu-item]",
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.04,
              ease: "power3.out",
            },
            0.3,
          )
          .fromTo(
            "[data-menu-meta]",
            { opacity: 0 },
            { opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
            0.5,
          );
      } else {
        const tl = gsap.timeline({
          onComplete: () => gsap.set(el, { visibility: "hidden" }),
        });

        tl.to(
          "[data-menu-item]",
          {
            x: 40,
            opacity: 0,
            duration: 0.3,
            stagger: 0.02,
            ease: "power2.in",
          },
          0,
        )
          .to("[data-menu-meta]", { opacity: 0, duration: 0.2 }, 0)
          .to(
            "[data-menu-overlay]",
            { opacity: 0, duration: 0.3, ease: "power2.in" },
            0.1,
          )
          .to(
            "[data-menu-bg]",
            { y: "100%", duration: 0.5, ease: "power3.in" },
            0.1,
          );
      }
    }, el);

    return () => ctx.revert();
  }, [open, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[60] hidden lg:block"
      style={{ visibility: "hidden" }}
      aria-hidden={!open}
    >
      {/* overlay */}
      <div
        data-menu-overlay
        className="absolute inset-0 bg-[var(--lys-dark)]/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* panel */}
      <div
        data-menu-bg
        className="absolute right-0 top-0 bottom-0 w-[720px] bg-[var(--lys-paper)] shadow-[-20px_0_60px_rgba(0,0,0,0.15)]"
      >
        <div className="h-full flex flex-col justify-between p-10 md:p-14">
          {/* header */}
          <div className="flex items-start justify-between mb-10">
            <p
              data-menu-meta
              className="text-[10px] tracking-[0.24em] uppercase text-[var(--lys-ink-40)]"
            >
              Navegação
            </p>
            <button
              onClick={onClose}
              aria-label="Fechar menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--lys-line)] hover:border-[var(--lys-rosa)] hover:text-[var(--lys-rosa)] transition-colors"
            >
              <span className="relative block h-3.5 w-4">
                <span className="absolute left-0 top-0 h-[1.5px] w-4 rotate-45 bg-current" />
                <span className="absolute left-0 top-[6px] h-[1.5px] w-4 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          {/* nav items */}
          <nav
            className="flex-1 flex flex-col justify-center"
            aria-label="Menu principal"
          >
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                data-menu-item
                className="group flex items-baseline justify-between border-b border-[var(--lys-line)] py-5 hover:border-[var(--lys-rosa)] transition-colors"
              >
                <span className="font-display text-[42px] md:text-[52px] leading-none tracking-[-0.04em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">
                  {item.label}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-ink-40)] group-hover:text-[var(--lys-rosa)] transition-colors">
                  {item.number}
                </span>
              </Link>
            ))}
          </nav>

          {/* footer meta */}
          <div className="flex items-center justify-between mt-8">
            <p
              data-menu-meta
              className="text-[11px] tracking-[0.12em] text-[var(--lys-ink-40)]"
            >
              © {new Date().getFullYear()} Fazenda Lysandja · Angola
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@lysandja.ao"
                data-menu-meta
                className="text-[12px] tracking-[0.18em] uppercase text-[var(--lys-madeira)] hover:text-[var(--lys-rosa)] transition-colors"
              >
                hello@lysandja.ao
              </a>
              <span
                data-menu-meta
                className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-ink-40)]"
              >
                Huambo · Bié
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
