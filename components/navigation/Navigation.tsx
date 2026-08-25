"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/fazenda", label: "A Fazenda" },
  { href: "/producao", label: "Produção" },
  { href: "/impacto", label: "Impacto" },
  { href: "/journal", label: "Journal" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll when menu open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6 md:py-8"
        }`}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? "bg-[var(--lys-paper)]/90 backdrop-blur-xl shadow-[0_1px_0_0_var(--lys-line)]"
              : "bg-transparent"
          }`}
        />

        <div className="container-lys relative flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center gap-3"
            aria-label="Lysandja — Home"
          >
            <span className="font-display text-[22px] md:text-[26px] font-[300] tracking-[0.18em] text-[var(--lys-verde)]">
              LYSANDJA
            </span>
            <span className="hidden sm:inline-block h-[1px] w-8 bg-[var(--lys-rosa)] opacity-60 group-hover:w-12 transition-all duration-500" />
            <span className="hidden lg:inline text-[10px] tracking-[0.24em] text-[var(--lys-ink-40)] uppercase">
              Onde a terra ganha propósito
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-[11px] tracking-[0.18em] uppercase text-[var(--lys-verde)] font-medium py-2
                           after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--lys-rosa)] after:transition-all after:duration-300
                           hover:after:w-full after:origin-left"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[var(--lys-verde)] px-6 py-[10px]
                         text-[11px] tracking-[0.16em] uppercase text-white font-semibold
                         hover:bg-[var(--lys-verde-mid)] transition-colors duration-300"
            >
              Contactar
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--lys-line)] bg-white/60 backdrop-blur"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-4 bg-[var(--lys-verde)] transition-all duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[1.5px] w-4 bg-[var(--lys-verde)] transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-[1.5px] w-4 bg-[var(--lys-verde)] transition-all duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "visible" : "invisible"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-[var(--lys-verde)] transition-opacity duration-500 ${open ? "opacity-[0.96]" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-0 flex flex-col bg-[var(--lys-paper)] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* header spacer */}
          <div className="h-[72px] shrink-0" />

          <div className="flex flex-1 flex-col px-6 py-8">
            <div className="flex-1">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--lys-rosa)] mb-8">Navegação</p>
              <nav className="flex flex-col">
                {NAV_LINKS.map((l, i) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between border-b border-[var(--lys-line)] py-5"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="font-display text-[34px] leading-none tracking-[-0.03em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">
                      {l.label}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-ink-40)]">0{i + 1}</span>
                  </Link>
                ))}
                {/* extra links discovered via content */}
                <Link href="/galeria" onClick={() => setOpen(false)} className="group flex items-baseline justify-between border-b border-[var(--lys-line)] py-5">
                  <span className="font-display text-[34px] leading-none tracking-[-0.03em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">Galeria</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-ink-40)]">05</span>
                </Link>
                <Link href="/sustentabilidade" onClick={() => setOpen(false)} className="group flex items-baseline justify-between border-b border-[var(--lys-line)] py-5">
                  <span className="font-display text-[34px] leading-none tracking-[-0.03em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">Sustentabilidade</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-ink-40)]">06</span>
                </Link>
              </nav>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--lys-rosa)] px-8 py-4 text-[12px] tracking-[0.16em] uppercase text-white font-semibold"
              >
                Fale com a Lysandja →
              </Link>
              <p className="text-center text-[10px] tracking-[0.18em] uppercase text-[var(--lys-ink-40)]">Angola · Agricultura premium · Desde a terra</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
