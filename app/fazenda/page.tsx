"use client";

import Link from "next/link";
import { farmHotspots } from "@/content/farm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";

export default function FazendaPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <div className="relative pt-[120px] pb-16 md:pb-24 bg-[var(--lys-verde)] text-white overflow-hidden grain-dark">
        <div className="container-lys relative z-10">
          <p data-reveal-accent className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]">01 &mdash; A Fazenda</p>
          <h1 data-reveal-title className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase">
            Explorar <br />
            <span className="text-[var(--lys-rosa)]">a fazenda.</span>
          </h1>
          <p data-reveal-text className="mt-6 max-w-[560px] text-[16px] leading-8 text-white/60">
            Um territorio para descobrir &mdash; producao, irrigacao, pecuaria e reserva em dialogo constante. Cada area com proposito.
          </p>
        </div>
      </div>

      {/* Mapa interativo */}
      <ScrollReveal as="section" className="section-lys">
        <div className="container-lys">
          <p data-reveal-accent className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] font-semibold">Mapa interactivo</p>
          <p data-reveal-text className="mt-2 text-[12px] text-[var(--lys-ink-40)]">TODO: substituir por imagem aerea oficial</p>

          <div data-parallax-container className="mt-8">
            <ImageReveal className="relative overflow-hidden rounded-[20px] aspect-[16/9.5] shadow-[0_8px_40px_-12px_rgba(10,15,13,0.15)]">
              <img data-parallax="-3%" src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&q=80&auto=format&fit=crop" alt="Vista aerea da fazenda" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[var(--lys-verde)]/10" />
              {farmHotspots.map((h) => (
                <div key={h.id} className="absolute -translate-x-1/2 -translate-y-1/2 group" style={{ left: `${h.x}%`, top: `${h.y}%` }}>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--lys-rosa)] text-white text-[10px] font-bold shadow-lg ring-4 ring-white/40">●</span>
                  <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--lys-verde)] px-3 py-1 text-[10px] tracking-[0.14em] uppercase text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {h.label}
                  </span>
                  <div className="absolute left-1/2 top-full mt-8 hidden group-hover:block -translate-x-1/2 w-[240px] rounded-xl bg-white p-4 shadow-xl border border-[var(--lys-line)] z-10">
                    <p className="text-[11px] tracking-[0.16em] uppercase text-[var(--lys-rosa)] font-semibold">{h.label}</p>
                    <p className="mt-1 text-[13px] leading-5 text-[var(--lys-ink-60)]">{h.desc}</p>
                  </div>
                </div>
              ))}
            </ImageReveal>
          </div>

          <div className="mt-10 grid md:grid-cols-4 gap-4">
            {farmHotspots.map((h, i) => (
              <div key={h.id} data-reveal-text data-stagger-index={i} className="card-hover card-shine rounded-[18px] border border-[var(--lys-line)] bg-white p-5">
                <p className="text-[12px] tracking-[0.22em] uppercase text-[var(--lys-rosa)] font-semibold">{h.label}</p>
                <p className="mt-2 text-[13px] leading-6 text-[var(--lys-ink-60)]">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="container-lys py-0"><div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/30 to-transparent" /></div>

      {/* Territorio */}
      <ScrollReveal as="section" className="section-lys">
        <div className="container-lys">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center">
            <div>
              <p data-reveal-accent className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] font-semibold">O Territorio</p>
              <h2 data-reveal-title className="mt-3 font-display text-[clamp(40px,5vw,72px)] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]">
                Solo vivo,<br />
                <span className="text-[var(--lys-ink-40)]">horizonte aberto.</span>
              </h2>
              <p data-reveal-text className="mt-6 max-w-[520px] text-[16px] leading-8 text-[var(--lys-ink-60)]">
                Territorio diverso com solo fertil, agua e proposito &mdash; base para uma agricultura preparada para o futuro.
              </p>
            </div>
            <div data-parallax-container>
              <ImageReveal className="relative overflow-hidden rounded-[20px] aspect-[4/3] shadow-[0_8px_40px_-12px_rgba(10,15,13,0.15)]">
                <img data-parallax="-8%" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=80&auto=format&fit=crop" alt="Territorio da fazenda" className="h-full w-full object-cover" />
              </ImageReveal>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal as="section" className="section-lys bg-[var(--lys-paper-2)]">
        <div className="container-lys flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p data-reveal-accent className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] font-semibold">Proximo</p>
            <h2 data-reveal-title className="mt-2 font-display text-[clamp(32px,4vw,56px)] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]">
              Da terra para o mundo.
            </h2>
          </div>
          <Link href="/producao" data-reveal-cta className="btn-arrow inline-flex items-center justify-center rounded-full bg-[var(--lys-verde)] px-8 py-4 text-[12px] tracking-[0.16em] uppercase font-semibold text-white hover:bg-[var(--lys-verde-mid)] transition-colors">
            Ver producao <span className="arrow" aria-hidden>&rarr;</span>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
