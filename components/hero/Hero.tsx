"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-line]",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        "[data-hero-meta]",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.9, ease: "power2.out" }
      );
      gsap.fromTo(
        "[data-hero-bg]",
        { scale: 1.08 },
        { scale: 1, duration: 1.8, ease: "power2.out" }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[620px] overflow-hidden bg-[var(--lys-verde)]">
      {/* Background */}
      <div className="absolute inset-0">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          data-hero-bg
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2000&q=80&auto=format&fit=crop"
          alt="Paisagem agrícola angolana ao nascer do sol — campos abertos e horizonte"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--lys-verde)] via-[var(--lys-verde)]/35 to-black/10" />
        <div className="absolute inset-0 bg-[var(--lys-rosa)]/10 mix-blend-multiply" />
      </div>

      {/* Top editorial bar */}
      <div className="absolute top-[84px] md:top-[96px] inset-x-0">
        <div className="container-lys flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-white/60">
          <span data-hero-meta>Angola · Agricultura premium</span>
          <span data-hero-meta className="hidden md:inline">Est. — Terra · Pessoas · Futuro</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-10 md:pb-14">
        <div className="container-lys">
          <p data-hero-line className="text-[11px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] mb-4">
            Fazenda Lysandja
          </p>

          <h1 className="font-display font-light uppercase leading-[0.82] tracking-[-0.05em] text-white">
            <span data-hero-line className="block text-[clamp(44px,9vw,148px)]">Onde a terra</span>
            <span data-hero-line className="block text-[clamp(44px,9vw,148px)] text-white/90">
              ganha <em className="not-italic text-[var(--lys-rosa)] font-[300]">propósito.</em>
            </span>
          </h1>

          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <Link
              href="/fazenda"
              data-hero-line
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--lys-rosa)] px-8 py-4 text-[12px] tracking-[0.16em] uppercase font-semibold text-white hover:bg-[var(--lys-rosa-deep)] transition-colors"
            >
              Explorar a fazenda <span aria-hidden>→</span>
            </Link>
            <p data-hero-line className="max-w-[380px] text-[13px] leading-6 text-white/70">
              Muito mais do que produzir — conectamos terra, pessoas, tecnologia e conhecimento para uma agricultura preparada para o futuro.
            </p>
          </div>

          <div data-hero-meta className="mt-10 flex items-center gap-4 text-white/60">
            <span className="h-[1px] w-10 bg-white/30" />
            <span className="text-[10px] tracking-[0.24em] uppercase">Scroll</span>
            <span className="text-[11px]">↓</span>
          </div>
        </div>
      </div>

      {/* subtle grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />
    </section>
  );
}
