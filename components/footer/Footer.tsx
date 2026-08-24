"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-footer-reveal]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        "[data-footer-wordmark]",
        { y: "20%" },
        {
          y: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: "[data-footer-wordmark]",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [prefersReducedMotion]);
  return (
    <footer ref={ref} className="bg-[var(--lys-dark-warm)] text-white overflow-hidden">
      {/* madeira accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/40 to-transparent" />

      {/* top editorial line */}
      <div className="container-lys pt-14 md:pt-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-[520px]" data-footer-reveal>
            <p className="font-display text-[42px] md:text-[54px] leading-[0.9] tracking-[-0.04em] uppercase">
              LYSANDJA
            </p>
            <p className="mt-3 text-[12px] tracking-[0.28em] uppercase text-[var(--lys-madeira)]/70">
              Onde a terra ganha propósito.
            </p>
            <p className="mt-6 max-w-[420px] text-[14px] leading-7 text-white/70">
              Uma marca agrícola angolana que conecta terra, pessoas, tecnologia e futuro. Produção com responsabilidade, escala humana e visão de longo prazo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm md:gap-16" data-footer-reveal>
            <nav aria-label="Footer navegação" className="flex flex-col gap-3">
              <p className="text-[10px] tracking-[0.22em] uppercase text-[var(--lys-rosa)] mb-2">Explorar</p>
              <Link href="/fazenda" className="text-white/70 hover:text-white transition-colors">A Fazenda</Link>
              <Link href="/producao" className="text-white/70 hover:text-white transition-colors">Produção</Link>
              <Link href="/impacto" className="text-white/70 hover:text-white transition-colors">Impacto</Link>
              <Link href="/sustentabilidade" className="text-white/70 hover:text-white transition-colors">Sustentabilidade</Link>
            </nav>
            <nav aria-label="Footer editorial" className="flex flex-col gap-3">
              <p className="text-[10px] tracking-[0.22em] uppercase text-[var(--lys-rosa)] mb-2">Journal</p>
              <Link href="/journal" className="text-white/70 hover:text-white transition-colors">Journal Lysandja</Link>
              <Link href="/galeria" className="text-white/70 hover:text-white transition-colors">Galeria</Link>
              <Link href="/contacto" className="text-white/70 hover:text-white transition-colors">Contacto</Link>
              <a href="mailto:hello@lysandja.ao" className="text-white/70 hover:text-[var(--lys-madeira)] transition-colors">hello@lysandja.ao</a>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/10 pt-6" data-footer-reveal>
          <p className="text-[11px] tracking-[0.12em] text-white/45">
            © {new Date().getFullYear()} Fazenda Lysandja · Angola. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-[11px] tracking-[0.16em] uppercase text-white/50">
            <span>Huambo · Bié · Angola</span>
            <span className="hidden sm:inline h-3 w-[1px] bg-white/15" />
            <span className="text-[var(--lys-madeira)]">Terra · Pessoas · Futuro</span>
          </div>
        </div>
      </div>

      {/* giant wordmark */}
      <div className="select-none overflow-hidden border-t border-white/5 mt-10">
        <p data-footer-wordmark className="font-display whitespace-nowrap text-[22vw] leading-none tracking-[-0.06em] text-white/[0.06] -mb-[0.12em]">
          LYSANDJA
        </p>
      </div>
    </footer>
  );
}
