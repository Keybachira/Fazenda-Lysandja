"use client";

import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GhostWord } from "@/components/ui/Section";
import { ImageReveal } from "@/components/ui/ImageReveal";
import {
  HorizontalScroll,
  HorizontalCard,
} from "@/components/ui/HorizontalScroll";
import { cultures } from "@/content/production";

export default function Home() {
  return (
    <div className="bg-[var(--lys-paper)]">
      <Hero />

      {/* 01 - MANIFESTO */}
      <ScrollReveal
        as="section"
        id="manifesto"
        className="section-lys overflow-hidden relative paper-texture"
      >
        <GhostWord
          color="verde"
          className="text-[clamp(120px,20vw,360px)] -top-[10%] left-1/2 -translate-x-1/2"
          style={{ width: "max-content" }}
        >
          TERRA
        </GhostWord>
        <div className="container-lys relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex items-start gap-6">
                <span
                  data-reveal-accent
                  className="font-display text-[clamp(80px,12vw,160px)] leading-none tracking-[-0.06em] text-[var(--lys-verde)]/[0.06]"
                >
                  01
                </span>
                <div className="pt-3 md:pt-6">
                  <p
                    data-reveal-accent
                    className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] font-semibold"
                  >
                    Manifesto
                  </p>
                  <h2
                    data-reveal-title
                    className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase text-[var(--lys-verde)]"
                  >
                    Uma fazenda.
                    <br />
                    <span className="text-[var(--lys-rosa)]">
                      Um ecossistema.
                    </span>
                  </h2>
                </div>
              </div>
              <div className="mt-8 md:mt-10 max-w-[520px] space-y-5">
                <p
                  data-reveal-text
                  className="text-[18px] md:text-[20px] leading-8 text-[var(--lys-ink-60)]"
                >
                  Muito mais do que produzir. A Lysandja conecta terra, pessoas,
                  tecnologia e conhecimento para construir uma agricultura
                  preparada para o futuro.
                </p>
                <p
                  data-reveal-text
                  className="text-[16px] leading-7 text-[var(--lys-ink-60)]"
                >
                  Cada talhao e observado, cada decisao e medida pelo impacto no
                  solo, na agua e nas pessoas que fazem a fazenda acontecer.
                </p>
                <Link
                  href="/fazenda"
                  data-reveal-cta
                  className="btn-arrow inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-semibold text-[var(--lys-verde)] border-b border-[var(--lys-verde)] pb-1 hover:text-[var(--lys-rosa)] hover:border-[var(--lys-rosa)] transition-colors"
                >
                  Conheca a fazenda{" "}
                  <span className="arrow" aria-hidden>
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative" data-parallax-container>
              <ImageReveal className="relative overflow-hidden rounded-[18px] bg-neutral-200 aspect-[4/3.2] shadow-[0_8px_40px_-12px_rgba(10,15,13,0.25)]">
                <img
                  data-parallax="-8%"
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80&auto=format&fit=crop"
                  alt="Trabalhadores no campo"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-white/70">
                    Vida na fazenda
                  </p>
                  <p className="font-display text-[20px] text-white leading-none mt-1">
                    Onde o trabalho ganha forma
                  </p>
                </div>
              </ImageReveal>
              <div className="absolute -bottom-8 -left-6 md:-left-10 w-[56%] overflow-hidden rounded-[14px] border-[6px] border-[var(--lys-paper)] shadow-xl hidden sm:block">
                <img
                  data-parallax="-12%"
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format&fit=crop"
                  alt="Folhagem"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="hidden lg:flex absolute -right-6 top-10 flex-col gap-3">
                <span className="h-20 w-[1px] bg-[var(--lys-madeira)]/30 mx-auto" />
                <span className="text-[10px] tracking-[0.24em] uppercase text-[var(--lys-ink-40)] [writing-mode:vertical-lr]">
                  Terra &middot; Pessoas &middot; Tecnologia
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="container-lys py-0">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/30 to-transparent" />
      </div>

      {/* 02 - A NOSSA TERRA */}
      <ScrollReveal
        as="section"
        id="territorio"
        className="bg-[var(--lys-verde)] text-white overflow-hidden relative grain-dark"
      >
        <div className="container-lys section-lys">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-14">
            <div>
              <p
                data-reveal-accent
                className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]"
              >
                02 &mdash; Territorio
              </p>
              <h2
                data-reveal-title
                className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase"
              >
                A nossa <span className="text-[var(--lys-rosa)]">terra</span>
              </h2>
            </div>
            <p
              data-reveal-text
              className="max-w-[420px] text-[14px] leading-7 text-white/60"
            >
              Uma paisagem de horizonte aberto, solo vivo e agua que precisa ser
              honrada.
            </p>
          </div>
          <div className="mb-10">
            <HorizontalScroll className="py-4">
              {[
                {
                  img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1400&q=80&auto=format&fit=crop",
                  kicker: "Paisagem",
                  title: "Horizonte sem fim",
                  desc: "Mais de 10.000 hectares de horizonte aberto.",
                },
                {
                  img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80&auto=format&fit=crop",
                  kicker: "Solo vivo",
                  title: "Cada centimetro importa",
                  desc: "Solo fertil e bem gerido, com praticas regenerativas.",
                },
                {
                  img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop",
                  kicker: "Agua",
                  title: "Recursos que precisam ser honrados",
                  desc: "Sistemas de irrigacao eficientes e gestao responsavel.",
                },
                {
                  img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format&fit=crop",
                  kicker: "Biodiversidade",
                  title: "Preservar e produzir",
                  desc: "Areas de preservacao permanente integradas a producao.",
                },
              ].map((card, i) => (
                <HorizontalCard key={i} width="520px">
                  <div className="relative overflow-hidden rounded-[20px] aspect-[16/11] bg-white/5 shadow-[0_8px_40px_-12px_rgba(10,15,13,0.25)]">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-6">
                      <p className="text-[10px] tracking-[0.22em] uppercase text-white/70">
                        {card.kicker}
                      </p>
                      <p className="font-display text-[28px] text-white leading-none mt-1">
                        {card.title}
                      </p>
                      <p className="mt-3 text-[13px] leading-5 text-white/60 max-w-[400px]">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </HorizontalCard>
              ))}
            </HorizontalScroll>
          </div>
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-6">
            <div
              className="relative overflow-hidden rounded-[20px] aspect-[16/11] bg-white/5 shadow-[0_8px_40px_-12px_rgba(10,15,13,0.25)]"
              data-parallax-container
            >
              <img
                data-parallax="-8%"
                src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1400&q=80&auto=format&fit=crop"
                alt="Campos agricolas"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div>
                  <p className="text-[11px] tracking-[0.18em] uppercase text-white/70">
                    Paisagem
                  </p>
                  <p className="font-display text-[24px] text-white">
                    Horizonte sem fim
                  </p>
                </div>
                <span className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--lys-verde)]">
                  &#8599;
                </span>
              </div>
            </div>
            <div className="grid gap-4 md:gap-6">
              <div
                className="relative overflow-hidden rounded-[20px] aspect-[4/3] bg-white/5 shadow-[0_8px_40px_-12px_rgba(10,15,13,0.25)]"
                data-parallax-container
              >
                <img
                  data-parallax="-8%"
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80&auto=format&fit=crop"
                  alt="Solo fertil"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">
                    Solo vivo
                  </p>
                  <p className="font-display text-[20px] text-white">
                    Cada centimetro importa
                  </p>
                </div>
              </div>
              <div className="rounded-[20px] bg-[var(--lys-rosa)] p-7 md:p-8 flex flex-col justify-between min-h-[180px]">
                <p
                  data-reveal-accent
                  className="text-[12px] tracking-[0.22em] uppercase text-white/80"
                >
                  Compromisso
                </p>
                <p
                  data-reveal-title
                  className="font-display text-[32px] leading-[0.95] text-white"
                >
                  Produzir
                  <br /> preservando.
                </p>
                <Link
                  href="/sustentabilidade"
                  data-reveal-cta
                  className="mt-4 inline-flex text-[12px] tracking-[0.16em] uppercase font-semibold text-white border-b border-white/40 pb-1 w-fit"
                >
                  Sustentabilidade &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="container-lys py-0">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/30 to-transparent" />
      </div>

      {/* 03 - PRODUCAO */}
      <ScrollReveal
        as="section"
        id="producao"
        className="section-lys bg-[var(--lys-paper)] relative paper-texture"
      >
        <div className="container-lys">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p
                data-reveal-accent
                className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] font-semibold"
              >
                03 &mdash; Producao
              </p>
              <h2
                data-reveal-title
                className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase text-[var(--lys-verde)]"
              >
                Da terra{" "}
                <span className="text-[var(--lys-madeira-deep)]">
                  para o mundo.
                </span>
              </h2>
            </div>
            <Link
              href="/producao"
              data-reveal-cta
              className="inline-flex items-center justify-center rounded-full border border-[var(--lys-verde)] px-7 py-3 text-[12px] tracking-[0.16em] uppercase font-semibold text-[var(--lys-verde)] hover:bg-[var(--lys-verde)] hover:text-white transition-colors"
            >
              Ver producao
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {cultures.map((c, i) => (
              <Link
                key={c.slug}
                href={`/producao#${c.slug}`}
                data-reveal-text
                data-stagger-index={i}
                className="card-hover group relative overflow-hidden rounded-[18px] bg-white border border-[var(--lys-line)] shadow-[0_8px_40px_-12px_rgba(10,15,13,0.1)]"
              >
                <div
                  className="aspect-[4/3.2] overflow-hidden img-zoom"
                  data-parallax-container
                >
                  <img
                    data-parallax="-5%"
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-madeira)]">
                    {c.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-[32px] leading-none tracking-[-0.03em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-[var(--lys-ink-60)] line-clamp-3">
                    {c.desc}
                  </p>
                  <span className="mt-4 inline-flex text-[12px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)] group-hover:gap-2 gap-1 transition-all">
                    Explorar <span>&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="container-lys py-0">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/30 to-transparent" />
      </div>

      {/* 04 - PESSOAS */}
      <ScrollReveal
        as="section"
        id="pessoas"
        className="relative overflow-hidden bg-[var(--lys-paper-2)]"
      >
        <div className="container-lys section-lys">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div
              className="relative order-2 lg:order-1"
              data-parallax-container
            >
              <ImageReveal className="relative overflow-hidden rounded-[20px] aspect-[4/4.6] shadow-[0_8px_40px_-12px_rgba(10,15,13,0.2)]">
                <img
                  data-parallax="-15%"
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=80&auto=format&fit=crop"
                  alt="Equipa da fazenda"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <p className="text-white font-display text-[22px]">
                    Gente que cultiva futuro
                  </p>
                  <p className="text-white/70 text-[12px]">
                    Historias reais &middot; Maos na terra
                  </p>
                </div>
              </ImageReveal>
              <div className="absolute -top-4 -right-4 hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-[var(--lys-madeira)] text-[var(--lys-verde)] font-display text-[11px] tracking-[0.14em] uppercase leading-none text-center">
                Por tras de
                <br />
                cada
                <br />
                colheita
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p
                data-reveal-accent
                className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)] font-semibold"
              >
                04 &mdash; Pessoas
              </p>
              <h2
                data-reveal-title
                className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase text-[var(--lys-verde)]"
              >
                Por tras de
                <br />
                cada colheita
                <br />
                <span className="text-[var(--lys-ink-40)]">
                  existem pessoas.
                </span>
              </h2>
              <p
                data-reveal-text
                className="mt-6 max-w-[480px] text-[16px] leading-8 text-[var(--lys-ink-60)]"
              >
                Tecnica, cuidado e saberes passados entre geracoes. A Lysandja
                existe porque ha gente que acorda cedo, observa o tempo e
                respeita a terra.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4" data-reveal-text>
                {[
                  {
                    name: "Manuel",
                    role: "Tecnico agricola",
                    years: "12 anos",
                  },
                  { name: "Ana", role: "Engenheira agronoma", years: "8 anos" },
                  {
                    name: "Carlos",
                    role: "Coordenador de campo",
                    years: "15 anos",
                  },
                  {
                    name: "Teresa",
                    role: "Gestora de sustentabilidade",
                    years: "6 anos",
                  },
                ].map((person) => (
                  <div
                    key={person.name}
                    className="rounded-[14px] border border-[var(--lys-line)] bg-white p-4"
                  >
                    <p className="font-display text-[20px] text-[var(--lys-verde)]">
                      {person.name}
                    </p>
                    <p className="text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-40)] mt-1">
                      {person.role}
                    </p>
                    <p className="text-[10px] tracking-[0.12em] text-[var(--lys-madeira)] mt-2">
                      {person.years}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3" data-reveal-cta>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[12px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">
                  Saber local
                </span>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[12px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">
                  Formacao continua
                </span>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[12px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">
                  Respeito
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="container-lys py-0">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--lys-madeira)]/30 to-transparent" />
      </div>

      {/* 05 - IMPACTO */}
      <ScrollReveal
        as="section"
        id="impacto"
        className="bg-[var(--lys-dark-warm)] text-white relative grain-dark"
      >
        <div className="container-lys section-lys">
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
            <div>
              <p
                data-reveal-accent
                className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]"
              >
                05 &mdash; Impacto
              </p>
              <h2
                data-reveal-title
                className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase"
              >
                Medir para
                <br />
                melhorar.
              </h2>
            </div>
            <p
              data-reveal-text
              className="max-w-[420px] text-[14px] leading-7 text-white/60 self-end"
            >
              Numeros oficiais em actualizacao.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                k: "Hectares",
                v: "\u2014",
                sub: "Territorio cultivavel e reserva",
                accent: "var(--lys-rosa)",
              },
              {
                k: "Pessoas",
                v: "\u2014",
                sub: "Equipa directa e familias",
                accent: "var(--lys-madeira)",
              },
              {
                k: "Culturas",
                v: "\u2014",
                sub: "Cadeias produtivas activas",
                accent: "white",
              },
              {
                k: "Projectos",
                v: "\u2014",
                sub: "Sustentabilidade e comunidade",
                accent: "var(--lys-rosa)",
              },
            ].map((s, i) => (
              <div
                key={s.k}
                data-reveal-text
                data-stagger-index={i}
                className="card-hover card-shine rounded-[18px] border border-white/10 bg-white/[0.04] p-6 md:p-7"
              >
                <p
                  className="font-display text-[42px] md:text-[52px] leading-none tracking-[-0.05em]"
                  style={{ color: s.accent }}
                >
                  {s.v}
                </p>
                <p className="mt-2 text-[12px] tracking-[0.22em] uppercase text-white/70">
                  {s.k}
                </p>
                <p className="mt-3 text-[13px] leading-5 text-white/45">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[11px] tracking-[0.12em] text-white/35">
            TODO: inserir metricas oficiais validadas.
          </p>
        </div>
      </ScrollReveal>

      {/* CTA FINAL */}
      <ScrollReveal
        as="section"
        className="relative overflow-hidden bg-[var(--lys-verde)]"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--lys-verde)] via-[var(--lys-verde)]/90 to-[var(--lys-dark)]/60" />
        <div className="grain-dark absolute inset-0 pointer-events-none" />
        <div className="relative container-lys py-16 md:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p
                data-reveal-accent
                className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]"
              >
                Descubra
              </p>
              <h2
                data-reveal-title
                className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase text-white"
              >
                Descubra
                <br />a Lysandja.
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <p
                data-reveal-text
                className="max-w-[360px] text-[14px] leading-7 text-white/85 lg:text-right"
              >
                Entre no territorio, conheca a producao e acompanhe as historias
                que nascem da terra.
              </p>
              <div
                className="flex flex-wrap gap-3 lg:justify-end"
                data-reveal-cta
              >
                <Link
                  href="/fazenda"
                  className="btn-arrow cta-glow inline-flex items-center justify-center rounded-full bg-[var(--lys-rosa)] px-8 py-4 text-[12px] tracking-[0.16em] uppercase font-semibold text-white hover:bg-[var(--lys-rosa-deep)] transition-colors"
                >
                  Explorar a fazenda{" "}
                  <span className="arrow" aria-hidden>
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="/contacto"
                  className="cta-glow inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-[12px] tracking-[0.16em] uppercase font-semibold text-white hover:bg-white hover:text-[var(--lys-verde)] transition-colors"
                >
                  Fale connosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
