"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useMenu } from "./FullscreenMenuProvider";

const NAV_LINKS = [
  { href: "/fazenda", label: "A Fazenda" },
  { href: "/producao", label: "Produção" },
  { href: "/impacto", label: "Impacto" },
  { href: "/journal", label: "Journal" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { toggle: toggleMenu } = useMenu();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  // Animate indicator to active link
  useEffect(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    if (!nav || !indicator) return;

    const activeLink = nav.querySelector(
      `a[href="${pathname}"]`,
    ) as HTMLElement | null;
    if (!activeLink) {
      gsap.to(indicator, { opacity: 0, duration: 0.2 });
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    gsap.to(indicator, {
      x: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [pathname]);

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
              ? "bg-[var(--lys-paper)]/90 backdrop-blur-xl shadow-[0_1px_0_0_var(--lys-madeira)]/20"
              : "bg-transparent"
          }`}
        />

        <div className="container-lys relative flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="group relative flex items-center gap-3"
            aria-label="Lysandja — Home"
          >
            <span
              className={`font-display text-[20px] md:text-[24px] tracking-[0.12em] uppercase transition-colors duration-500 ${
                scrolled ? "text-[var(--lys-verde)]" : "text-white/90"
              }`}
            >
              Lysandja
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-8 relative"
            aria-label="Principal"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[11px] tracking-[0.18em] uppercase font-medium py-2 transition-colors duration-300 ${
                  pathname === l.href
                    ? scrolled
                      ? "text-[var(--lys-rosa)]"
                      : "text-[var(--lys-rosa)]"
                    : scrolled
                      ? "text-[var(--lys-verde)] hover:text-[var(--lys-rosa)]"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <span
              ref={indicatorRef}
              className="absolute bottom-0 left-0 h-[1px] bg-[var(--lys-rosa)] opacity-0"
              style={{ willChange: "transform, width" }}
            />
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              className={`hidden sm:inline-flex items-center justify-center rounded-full px-6 py-[10px]
                         text-[11px] tracking-[0.16em] uppercase font-semibold transition-all duration-300 ${
                           scrolled
                             ? "bg-[var(--lys-verde)] text-white hover:bg-[var(--lys-madeira)]"
                             : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                         }`}
            >
              Contactar
            </Link>

            {/* Menu toggle — opens fullscreen menu on desktop, mobile panel on mobile */}
            <button
              onClick={() => {
                // Desktop: open fullscreen menu. Mobile: open mobile panel.
                if (window.innerWidth >= 1024) {
                  toggleMenu();
                } else {
                  setMobileOpen((v) => !v);
                }
              }}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur transition-colors duration-300 ${
                scrolled
                  ? "border-[var(--lys-line)] bg-white/60"
                  : "border-white/20 bg-white/10"
              }`}
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-4 transition-all duration-300 ${
                    mobileOpen
                      ? "translate-y-[6px] rotate-45 bg-white"
                      : scrolled
                        ? "bg-[var(--lys-verde)]"
                        : "bg-white"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[1.5px] w-4 transition-opacity duration-200 ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  } ${scrolled ? "bg-[var(--lys-verde)]" : "bg-white"}`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-[1.5px] w-4 transition-all duration-300 ${
                    mobileOpen
                      ? "-translate-y-[6px] -rotate-45 bg-white"
                      : scrolled
                        ? "bg-[var(--lys-verde)]"
                        : "bg-white"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-[var(--lys-verde)] transition-opacity duration-500 ${mobileOpen ? "opacity-[0.96]" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute inset-0 flex flex-col bg-[var(--lys-paper)] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* header spacer */}
          <div className="h-[72px] shrink-0" />

          <div className="flex flex-1 flex-col px-6 py-8">
            <div className="flex-1">
              <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--lys-rosa)] mb-8">
                Navegação
              </p>
              <nav className="flex flex-col">
                {NAV_LINKS.map((l, i) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-baseline justify-between border-b border-[var(--lys-line)] py-5"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="font-display text-[34px] leading-none tracking-[-0.03em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">
                      {l.label}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-ink-40)]">
                      0{i + 1}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/galeria"
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-baseline justify-between border-b border-[var(--lys-line)] py-5"
                >
                  <span className="font-display text-[34px] leading-none tracking-[-0.03em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">
                    Galeria
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-ink-40)]">
                    05
                  </span>
                </Link>
                <Link
                  href="/sustentabilidade"
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-baseline justify-between border-b border-[var(--lys-line)] py-5"
                >
                  <span className="font-display text-[34px] leading-none tracking-[-0.03em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">
                    Sustentabilidade
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-ink-40)]">
                    06
                  </span>
                </Link>
              </nav>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="btn-arrow inline-flex w-full items-center justify-center rounded-full bg-[var(--lys-rosa)] px-8 py-4 text-[12px] tracking-[0.16em] uppercase text-white font-semibold"
              >
                Fale com a Lysandja{" "}
                <span className="arrow" aria-hidden>
                  →
                </span>
              </Link>
              <p className="text-center text-[10px] tracking-[0.18em] uppercase text-[var(--lys-ink-40)]">
                Angola · Agricultura premium · Desde a terra
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
