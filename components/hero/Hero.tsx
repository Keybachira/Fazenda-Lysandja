"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set("[data-hero-reveal]", { opacity: 1, y: 0, clipPath: "inset(0)" });
        gsap.set("[data-hero-bg]", { scale: 1, opacity: 1 });
        gsap.set("[data-hero-mark]", { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Background image fades in + scales from 1.12 → 1
      tl.fromTo(
        "[data-hero-bg]",
        { scale: 1.12, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" },
        0
      );

      // 2. Lysandja mark fades in
      tl.fromTo(
        "[data-hero-mark]",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.3
      );

      // 3. Kicker "Fazenda Lysandja" clip-path reveal
      tl.fromTo(
        "[data-hero-kicker]",
        { clipPath: "inset(100% 0 0 0)" },
        { clipPath: "inset(0% 0 0 0)", duration: 0.6, ease: "power3.out" },
        0.8
      );

      // 4. Title lines stagger in — "ONDE A TERRA" then "GANHA"
      tl.fromTo(
        "[data-hero-line-1]",
        { clipPath: "inset(100% 0 0 0)", y: 20 },
        { clipPath: "inset(0% 0 0 0)", y: 0, duration: 0.7, ease: "power3.out" },
        1.0
      );
      tl.fromTo(
        "[data-hero-line-2]",
        { clipPath: "inset(100% 0 0 0)", y: 20 },
        { clipPath: "inset(0% 0 0 0)", y: 0, duration: 0.7, ease: "power3.out" },
        1.15
      );

      // 5. PROPÓSITO — the star — enters with emphasis
      tl.fromTo(
        "[data-hero-proposito]",
        { clipPath: "inset(100% 0 0 0)", y: 30, scale: 0.95 },
        { clipPath: "inset(0% 0 0 0)", y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
        1.35
      );

      // 6. CTA + description
      tl.fromTo(
        "[data-hero-cta]",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        1.7
      );

      // 7. Meta bar
      tl.fromTo(
        "[data-hero-meta]",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        1.9
      );

      // 8. Scroll indicator
      tl.fromTo(
        "[data-hero-scroll]",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        2.1
      );

      // === PARALLAX ON SCROLL ===

      // Background image parallax (scrub)
      gsap.to("[data-hero-bg]", {
        y: "-15%",
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content fades out on scroll
      gsap.to("[data-hero-content]", {
        y: "-8%",
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "30% top",
          end: "70% top",
          scrub: 1,
        },
      });

      // Scroll indicator fades
      gsap.to("[data-hero-scroll]", {
        opacity: 0,
        y: -10,
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "80px top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[620px] overflow-hidden bg-[var(--lys-dark)]">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          data-hero-bg
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2000&q=80&auto=format&fit=crop"
          alt="Paisagem agrícola angolana ao nascer do sol — campos abertos e horizonte"
          className="h-full w-full object-cover opacity-0"
          style={{ filter: "saturate(0.85) contrast(1.05)" }}
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--lys-dark)] via-[var(--lys-dark)]/40 to-[var(--lys-dark)]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--lys-dark)]/30 to-transparent" />
        {/* Warm rosa wash */}
        <div className="absolute inset-0 bg-[var(--lys-rosa)]/6 mix-blend-multiply" />
      </div>

      {/* Vignette */}
      <div className="vignette absolute inset-0 pointer-events-none" />

      {/* Top editorial bar */}
      <div className="absolute top-[84px] md:top-[96px] inset-x-0 z-20">
        <div className="container-lys flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-white/50">
          <span data-hero-meta className="opacity-0">Angola · Agricultura premium</span>
          <span data-hero-meta className="hidden md:inline opacity-0">Est. — Terra · Pessoas · Futuro</span>
        </div>
      </div>

      {/* Lysandja mark — top left */}
      <div className="absolute top-[84px] md:top-[96px] left-6 md:left-10 lg:left-[max(64px,5vw)] z-20">
        <Link href="/" aria-label="Lysandja — Home" data-hero-mark className="opacity-0">
          <span className="font-display text-[18px] md:text-[22px] tracking-[0.12em] uppercase text-white/80">
            Lysandja
          </span>
        </Link>
      </div>

      {/* Content */}
      <div data-hero-content className="relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
        <div className="container-lys">
          {/* Kicker */}
          <p
            data-hero-kicker
            className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] mb-6 will-reveal"
          >
            Fazenda Lysandja
          </p>

          {/* Title — line by line */}
          <h1 className="font-display font-light uppercase text-white">
            <span
              data-hero-line-1
              className="block text-[clamp(56px,11vw,200px)] leading-[0.78] tracking-[-0.05em] will-reveal"
            >
              Onde a terra
            </span>
            <span
              data-hero-line-2
              className="block text-[clamp(56px,11vw,200px)] leading-[0.78] tracking-[-0.05em] text-white/90 will-reveal"
            >
              ganha
            </span>
          </h1>

          {/* PROPÓSITO — the expressive element */}
          <div className="mt-2 md:mt-3" data-hero-proposito>
            <span className="font-display font-light uppercase text-[clamp(56px,11vw,200px)] leading-[0.78] tracking-[-0.05em] text-[var(--lys-rosa)] will-reveal">
              propósito.
            </span>
          </div>

          {/* CTA + description */}
          <div data-hero-cta className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 opacity-0">
            <Link
              href="/fazenda"
              className="btn-arrow inline-flex items-center justify-center gap-3 rounded-full bg-[var(--lys-rosa)] px-8 py-4 text-[12px] tracking-[0.16em] uppercase font-semibold text-white hover:bg-[var(--lys-rosa-deep)] transition-colors"
            >
              Explorar a fazenda <span className="arrow" aria-hidden>→</span>
            </Link>
            <p className="max-w-[380px] text-[14px] leading-7 text-white/70">
              Muito mais do que produzir — conectamos terra, pessoas, tecnologia e conhecimento para uma agricultura preparada para o futuro.
            </p>
          </div>

          {/* Scroll indicator */}
          <div
            data-hero-scroll
            className="mt-12 flex items-center gap-4 text-white/40 opacity-0"
          >
            <span className="h-[1px] w-12 bg-white/20" />
            <span className="text-[10px] tracking-[0.3em] uppercase scroll-pulse">Scroll</span>
          </div>
        </div>
      </div>

      {/* Film grain */}
      <div className="grain-hero absolute inset-0 pointer-events-none z-10" />
    </section>
  );
}
