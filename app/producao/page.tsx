"use client";

import Link from "next/link";
import { cultures, processo } from "@/content/production";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";

export default function ProducaoPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <div className="relative pt-[120px] pb-16 md:pb-24 bg-[var(--lys-paper-2)] overflow-hidden">
        <div className="container-lys relative z-10">
          <p
            data-reveal-accent
            className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]"
          >
            03 &mdash; Producao
          </p>
          <h1
            data-reveal-title
            className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase text-[var(--lys-verde)]"
          >
            Da terra
            <br />
            para o mundo.
          </h1>
          <p
            data-reveal-text
            className="mt-6 max-w-[560px] text-[16px] leading-8 text-[var(--lys-ink-60)]"
          >
            Cadeias produtivas com manejo responsavel, rastreabilidade e
            qualidade para ir longe &mdash; sem perder a origem.
          </p>
        </div>
      </div>

      {/* Culturas */}
      <section className="section-lys">
        <div className="container-lys space-y-16 md:space-y-24">
          {cultures.map((c, i) => (
            <ScrollReveal key={c.slug} as="div">
              <div
                id={c.slug}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div data-parallax-container>
                  <ImageReveal className="relative overflow-hidden rounded-[20px] aspect-[4/3] shadow-[0_8px_40px_-12px_rgba(10,15,13,0.15)]">
                    <img
                      data-parallax="-5%"
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] tracking-[0.16em] uppercase font-semibold text-[var(--lys-verde)]">
                      {c.kicker}
                    </span>
                  </ImageReveal>
                </div>
                <div>
                  <span
                    data-reveal-accent
                    className="font-display text-[clamp(60px,8vw,100px)] leading-none tracking-[-0.06em] text-[var(--lys-verde)]/[0.06]"
                  >
                    {c.n}
                  </span>
                  <h2
                    data-reveal-title
                    className="font-display text-[clamp(36px,5vw,64px)] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)] -mt-2 md:-mt-4"
                  >
                    {c.title}
                  </h2>
                  <p
                    data-reveal-text
                    className="mt-4 max-w-[480px] text-[16px] leading-8 text-[var(--lys-ink-60)]"
                  >
                    {c.desc}
                  </p>
                  <Link
                    href={`#${c.slug}`}
                    data-reveal-cta
                    className="mt-6 btn-arrow inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-semibold text-[var(--lys-verde)] border-b border-[var(--lys-verde)] pb-1 hover:text-[var(--lys-rosa)] hover:border-[var(--lys-rosa)] transition-colors"
                  >
                    Explorar{" "}
                    <span className="arrow" aria-hidden>
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="container-lys py-0">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/30 to-transparent" />
      </div>

      {/* Processo */}
      <ScrollReveal
        as="section"
        className="bg-[var(--lys-dark-warm)] text-white relative grain-dark"
      >
        <div className="container-lys section-lys">
          <p
            data-reveal-accent
            className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]"
          >
            Processo
          </p>
          <h2
            data-reveal-title
            className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase"
          >
            Do solo ao destino.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processo.map((p, i) => (
              <div
                key={p.n}
                data-reveal-text
                data-stagger-index={i}
                className="card-hover card-shine rounded-[18px] bg-white/[0.04] border border-white/10 p-5"
              >
                <p className="font-display text-[36px] leading-none text-[var(--lys-rosa)]">
                  {p.n}
                </p>
                <p className="mt-2 text-[12px] tracking-[0.16em] uppercase font-semibold text-white">
                  {p.title}
                </p>
                <p className="mt-3 text-[13px] leading-5 text-white/60">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[11px] text-white/35">
            TODO: scroll storytelling com GSAP ScrollTrigger.
          </p>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal as="section" className="section-lys bg-[var(--lys-paper)]">
        <div className="container-lys flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p
              data-reveal-accent
              className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] font-semibold"
            >
              Proximo
            </p>
            <h2
              data-reveal-title
              className="mt-2 font-display text-[clamp(32px,4vw,56px)] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]"
            >
              Conheca o impacto.
            </h2>
          </div>
          <Link
            href="/impacto"
            data-reveal-cta
            className="btn-arrow inline-flex items-center justify-center rounded-full bg-[var(--lys-verde)] px-8 py-4 text-[12px] tracking-[0.16em] uppercase font-semibold text-white hover:bg-[var(--lys-verde-mid)] transition-colors"
          >
            Ver impacto{" "}
            <span className="arrow" aria-hidden>
              &rarr;
            </span>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
