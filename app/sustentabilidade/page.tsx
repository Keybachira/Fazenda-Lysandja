"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";

export default function SustentabilidadePage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <div className="relative pt-[120px] pb-16 md:pb-24 bg-[var(--lys-paper-2)] overflow-hidden">
        <div className="container-lys relative z-10">
          <p
            data-reveal-accent
            className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]"
          >
            04 &mdash; Sustentabilidade
          </p>
          <h1
            data-reveal-title
            className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase text-[var(--lys-verde)]"
          >
            Cada gota
            <br />
            <span className="text-[var(--lys-rosa)]">importa.</span>
          </h1>
        </div>
      </div>

      {/* Agua · Solo · Futuro */}
      <ScrollReveal as="section" className="section-lys">
        <div className="container-lys grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <p
              data-reveal-accent
              className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] font-semibold"
            >
              Agua &middot; Solo &middot; Futuro
            </p>
            <h2
              data-reveal-title
              className="mt-3 font-display text-[clamp(36px,4.5vw,64px)] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]"
            >
              Cada gota
              <br />
              conta.
            </h2>
            <p
              data-reveal-text
              className="mt-6 max-w-[520px] text-[16px] leading-8 text-[var(--lys-ink-60)]"
            >
              Irrigacao, gestao hidrica, monitorizacao e eficiencia &mdash; sem
              affirmar tecnologias nao confirmadas. A linguagem permanece
              honesta e aberta a dados oficiais futuros.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3" data-reveal-text>
              {[
                "Sensores",
                "Monitorizacao",
                "Irrigacao",
                "Dados",
                "Maquinas",
                "Gestao",
              ].map((t, i) => (
                <span
                  key={t}
                  data-stagger-index={i}
                  className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-3 text-center text-[12px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)] hover:border-[var(--lys-rosa)] hover:text-[var(--lys-rosa)] transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div data-parallax-container>
            <ImageReveal className="relative overflow-hidden rounded-[20px] aspect-[4/3] shadow-[0_8px_40px_-12px_rgba(10,15,13,0.15)]">
              <img
                data-parallax="-6%"
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000&q=80&auto=format&fit=crop"
                alt="Irrigacao sustentavel"
                className="h-full w-full object-cover"
              />
            </ImageReveal>
          </div>
        </div>
      </ScrollReveal>

      <div className="container-lys py-0">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/30 to-transparent" />
      </div>

      {/* Tecnologia */}
      <ScrollReveal
        as="section"
        className="bg-[var(--lys-dark-warm)] text-white relative grain-dark"
      >
        <div className="container-lys section-lys">
          <p
            data-reveal-accent
            className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]"
          >
            Tecnologia
          </p>
          <h2
            data-reveal-title
            className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase"
          >
            A agricultura
            <br />
            tambem evolui.
          </h2>
          <p
            data-reveal-text
            className="mt-6 max-w-[520px] text-[16px] leading-8 text-white/60"
          >
            Tecnologia discreta, integrada a natureza &mdash; nunca um
            dashboard. Ferramentas a servico da terra e das pessoas.
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
              O impacto real.
            </h2>
          </div>
          <a
            href="/impacto"
            data-reveal-cta
            className="btn-arrow inline-flex items-center justify-center rounded-full bg-[var(--lys-verde)] px-8 py-4 text-[12px] tracking-[0.16em] uppercase font-semibold text-white hover:bg-[var(--lys-verde-mid)] transition-colors"
          >
            Ver impacto{" "}
            <span className="arrow" aria-hidden>
              &rarr;
            </span>
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
