"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";

export default function ImpactoPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <div className="relative pt-[120px] pb-16 md:pb-24 bg-[var(--lys-verde)] text-white overflow-hidden grain-dark">
        <div className="container-lys relative z-10">
          <p
            data-reveal-accent
            className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]"
          >
            05 &mdash; Impacto
          </p>
          <h1
            data-reveal-title
            className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase"
          >
            Impacto que
            <br />
            <span className="text-[var(--lys-rosa)]">se mede.</span>
          </h1>
          <p
            data-reveal-text
            className="mt-6 max-w-[520px] text-[16px] leading-8 text-white/60"
          >
            Numeros reais, quando validados. Ate la, transparencia total: sem
            metricas inventadas.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <ScrollReveal as="section" className="section-lys">
        <div className="container-lys">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                v: "\u2014",
                k: "Hectares",
                d: "Area total e cultivavel",
                accent: "var(--lys-rosa)",
              },
              {
                v: "\u2014",
                k: "Pessoas",
                d: "Equipa e familias impactadas",
                accent: "var(--lys-madeira)",
              },
              {
                v: "\u2014",
                k: "Culturas",
                d: "Cadeias produtivas",
                accent: "var(--lys-verde)",
              },
              {
                v: "\u2014",
                k: "Projectos",
                d: "Comunidade e ambiente",
                accent: "var(--lys-rosa)",
              },
            ].map((s, i) => (
              <div
                key={s.k}
                data-reveal-text
                data-stagger-index={i}
                className="card-hover card-shine rounded-[18px] border border-[var(--lys-line)] bg-white p-7"
              >
                <p
                  className="font-display text-[48px] md:text-[56px] leading-none tracking-[-0.05em]"
                  style={{ color: s.accent }}
                >
                  {s.v}
                </p>
                <p className="mt-2 text-[12px] tracking-[0.22em] uppercase text-[var(--lys-ink-40)]">
                  {s.k}
                </p>
                <p className="mt-3 text-[13px] leading-5 text-[var(--lys-ink-60)]">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] tracking-[0.14em] text-[var(--lys-ink-40)]">
            TODO: inserir metricas oficiais validadas pela Lysandja.
          </p>
        </div>
      </ScrollReveal>

      <div className="container-lys py-0">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/30 to-transparent" />
      </div>

      {/* Biodiversidade */}
      <ScrollReveal as="section" className="section-lys">
        <div className="container-lys">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p
                data-reveal-accent
                className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] font-semibold"
              >
                Biodiversidade
              </p>
              <h2
                data-reveal-title
                className="mt-3 font-display text-[clamp(40px,5vw,72px)] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]"
              >
                A terra tambem e<br />
                <span className="text-[var(--lys-ink-40)]">
                  um ecossistema.
                </span>
              </h2>
              <p
                data-reveal-text
                className="mt-6 max-w-[480px] text-[16px] leading-8 text-[var(--lys-ink-60)]"
              >
                Fauna, flora, agua e solo &mdash; preservacao como practica
                diaria, nao como discurso. Cada area da fazenda contribui para a
                biodiversidade local.
              </p>
              <div className="mt-8 flex flex-wrap gap-3" data-reveal-cta>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[12px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">
                  Fauna
                </span>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[12px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">
                  Flora
                </span>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[12px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">
                  Agua
                </span>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[12px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">
                  Solo
                </span>
              </div>
            </div>
            <div data-parallax-container>
              <ImageReveal className="relative overflow-hidden rounded-[20px] aspect-[4/3] shadow-[0_8px_40px_-12px_rgba(10,15,13,0.15)]">
                <img
                  data-parallax="-8%"
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80&auto=format&fit=crop"
                  alt="Biodiversidade na fazenda"
                  className="h-full w-full object-cover"
                />
              </ImageReveal>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="container-lys py-0">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/30 to-transparent" />
      </div>

      {/* Sustentabilidade CTA */}
      <ScrollReveal
        as="section"
        className="section-lys bg-[var(--lys-paper-2)]"
      >
        <div className="container-lys">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <p
                data-reveal-accent
                className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] font-semibold"
              >
                Sustentabilidade
              </p>
              <h2
                data-reveal-title
                className="mt-3 font-display text-[clamp(40px,5vw,72px)] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]"
              >
                Produzir
                <br />
                <span className="text-[var(--lys-rosa)]">preservando.</span>
              </h2>
              <p
                data-reveal-text
                className="mt-6 max-w-[480px] text-[16px] leading-8 text-[var(--lys-ink-60)]"
              >
                Cada decisao na Lysandja considers o impacto no solo, na agua e
                nas comunidades. A sustentabilidade nao e uma frase &mdash; e um
                metodo.
              </p>
              <Link
                href="/sustentabilidade"
                data-reveal-cta
                className="mt-8 btn-arrow inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-semibold text-[var(--lys-verde)] border-b border-[var(--lys-verde)] pb-1 hover:text-[var(--lys-rosa)] hover:border-[var(--lys-rosa)] transition-colors"
              >
                Saber mais{" "}
                <span className="arrow" aria-hidden>
                  &rarr;
                </span>
              </Link>
            </div>
            <div className="rounded-[20px] bg-[var(--lys-verde)] p-8 md:p-10 text-white">
              <p
                data-reveal-accent
                className="text-[11px] tracking-[0.22em] uppercase text-[var(--lys-madeira)]"
              >
                Compromisso
              </p>
              <p
                data-reveal-title
                className="mt-3 font-display text-[32px] leading-[0.95] text-white"
              >
                Transparencia total.
              </p>
              <p
                data-reveal-text
                className="mt-4 text-[14px] leading-7 text-white/60"
              >
                Publicamos apenas dados validados. Sem metricas infladas, sem
                objectivos ficticiosos.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
