import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { cultures } from "@/content/production";
import { Section, Eyebrow, SectionNumber, Display, Lead, ButtonLink, ScrollReveal } from "@/components/ui";

export default function Home() {
  return (
    <div className="bg-[var(--lys-paper)]">
      <Hero />

      {/* ── 01 — UMA FAZENDA. UM ECOSSISTEMA. ── */}
      <Section className="overflow-hidden">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <ScrollReveal direction="left" className="flex items-start gap-6">
            <SectionNumber n="01" />
            <div className="pt-3 md:pt-6">
              <Eyebrow>Manifesto</Eyebrow>
              <Display as="h2" className="mt-3 text-[clamp(40px,5vw,56px)]">
                Uma fazenda.
                <br />
                <span className="text-[var(--lys-rosa)]">Um ecossistema.</span>
              </Display>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="mt-8 md:mt-0">
              <Lead className="max-w-[520px]">
                Muito mais do que produzir. A Lysandja conecta terra, pessoas, tecnologia e conhecimento para construir uma agricultura preparada para o futuro.
              </Lead>
              <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-[var(--lys-ink-60)]">
                Cada talhão é observado, cada decisão é medida pelo impacto no solo, na água e nas pessoas que fazem a fazenda acontecer. Produção e preservação não são escolhas — são o mesmo caminho.
              </p>
              <Link
                href="/fazenda"
                className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-semibold text-[var(--lys-verde)] border-b border-[var(--lys-verde)] pb-1 hover:text-[var(--lys-rosa)] hover:border-[var(--lys-rosa)] transition-colors"
              >
                Conheça a fazenda <span>→</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="relative">
            <div className="relative overflow-hidden rounded-[18px] bg-neutral-200 aspect-[4/3.2]">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80&auto=format&fit=crop"
                alt="Trabalhadores no campo — mãos na terra"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-[10px] tracking-[0.22em] uppercase text-white/70">Vida na fazenda</p>
                <p className="font-display text-[18px] text-white leading-none mt-1">Onde o trabalho ganha forma</p>
              </div>
            </div>

            {/* overlapped secondary */}
            <div className="absolute -bottom-8 -left-6 md:-left-10 w-[56%] overflow-hidden rounded-[14px] border-[6px] border-[var(--lys-paper)] shadow-xl hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format&fit=crop"
                alt="Detalhe de folhagem e luz natural"
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="hidden lg:flex absolute -right-6 top-10 flex-col gap-3">
              <span className="h-20 w-[1px] bg-[var(--lys-line)] mx-auto" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[var(--lys-ink-40)] [writing-mode:vertical-lr]">
                Terra · Pessoas · Tecnologia
              </span>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── 02 — A NOSSA TERRA ── */}
      <Section dark bleed className="overflow-hidden">
        <div className="container-lys section-lys">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-14">
              <div>
                <Eyebrow light>02 — Território</Eyebrow>
                <Display as="h2" light className="mt-3 text-[clamp(46px,6vw,72px)]">
                  A nossa <span className="text-[var(--lys-rosa)]">terra</span>
                </Display>
              </div>
              <Lead light className="max-w-[420px] self-end text-[14px]">
                Uma paisagem de horizonte aberto, solo vivo e água que precisa ser honrada. A geografia não é cenário — é condição.
              </Lead>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-6">
            <ScrollReveal direction="left" className="relative overflow-hidden rounded-[20px] aspect-[16/11] bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1400&q=80&auto=format&fit=crop"
                alt="Vista aérea de campos agrícolas"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div>
                  <p className="text-[11px] tracking-[0.18em] uppercase text-white/70">Paisagem</p>
                  <p className="font-display text-[22px] text-white">Horizonte sem fim</p>
                </div>
                <span className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--lys-verde)]">↗</span>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 md:gap-6">
              <ScrollReveal direction="right" delay={0.1} className="relative overflow-hidden rounded-[20px] aspect-[4/3] bg-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80&auto=format&fit=crop"
                  alt="Solo fértil e textura da terra"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">Solo vivo</p>
                  <p className="font-display text-white">Cada centímetro importa</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2} className="rounded-[20px] bg-[var(--lys-rosa)] p-7 md:p-8 flex flex-col justify-between min-h-[180px]">
                <p className="text-[11px] tracking-[0.22em] uppercase text-white/80">Compromisso</p>
                <p className="font-display text-[clamp(22px,3vw,28px)] leading-[0.95] text-white">
                  Produzir<br /> preservando.
                </p>
                <Link href="/sustentabilidade" className="mt-4 inline-flex text-[11px] tracking-[0.16em] uppercase font-semibold text-white border-b border-white/40 pb-1 w-fit">
                  Sustentabilidade →
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 03 — PRODUÇÃO ── */}
      <Section className="overflow-hidden">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <Eyebrow>03 — Produção</Eyebrow>
              <Display as="h2" className="mt-3 text-[clamp(40px,5.5vw,64px)]">
                Da terra <span className="text-[var(--lys-madeira-deep)]">para o mundo.</span>
              </Display>
            </div>
            <ButtonLink href="/producao" variant="outline" size="md">
              Ver produção
            </ButtonLink>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {cultures.map((c, i) => (
            <ScrollReveal key={c.slug} direction="up" delay={i * 0.1}>
              <Link
                href={`/producao#${c.slug}`}
                className="group relative overflow-hidden rounded-[18px] bg-white border border-[var(--lys-line)] block"
              >
                <div className="aspect-[4/3.2] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-ink-40)]">{c.kicker}</p>
                  <h3 className="mt-2 font-display text-[clamp(22px,3vw,28px)] leading-none tracking-[-0.03em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[var(--lys-ink-60)] line-clamp-3">{c.desc}</p>
                  <span className="mt-4 inline-flex text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)] group-hover:gap-2 gap-1 transition-all">
                    Explorar <span>→</span>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── 04 — PESSOAS ── */}
      <Section className="overflow-hidden" id="pessoas">
        <div className="bg-[var(--lys-paper-2)] -mx-[24px] md:-mx-[40px] lg:-mx-[48px] xl:-mx-[64px] px-[24px] md:px-[40px] lg:px-[48px] xl:px-[64px] py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left" className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[20px] aspect-[4/4.6]">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=80&auto=format&fit=crop"
                  alt="Pessoas — equipa da fazenda"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-display text-[20px]">Gente que cultiva futuro</p>
                  <p className="text-white/70 text-[12px]">Histórias reais · Mãos na terra</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-[var(--lys-madeira)] text-[var(--lys-verde)] font-display text-[11px] tracking-[0.14em] uppercase leading-none text-center">
                Por trás de<br />cada<br />colheita
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15} className="order-1 lg:order-2">
              <Eyebrow>04 — Pessoas</Eyebrow>
              <Display as="h2" className="mt-3 text-[clamp(42px,5vw,56px)]">
                Por trás de<br />
                cada colheita
                <br />
                <span className="text-[var(--lys-ink-40)]">existem pessoas.</span>
              </Display>
              <Lead className="mt-6 max-w-[480px]">
                Técnica, cuidado e saberes passados entre gerações. A Lysandja existe porque há gente que acorda cedo, observa o tempo e respeita a terra.
              </Lead>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">Saber local</span>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">Formação contínua</span>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">Respeito</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* ── 05 — IMPACTO ── */}
      <Section dark>
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
            <div>
              <Eyebrow light>05 — Impacto</Eyebrow>
              <Display as="h2" light className="mt-3 text-[clamp(40px,5vw,56px)]">
                Medir para
                <br />
                melhorar.
              </Display>
            </div>
            <Lead light className="max-w-[420px] text-[13px] self-end">
              Números oficiais em actualização. Todo indicador apresentado será validado pela gestão da Fazenda Lysandja antes de publicação.
            </Lead>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { k: "Hectares", v: "—", sub: "Território cultivável e reserva", accent: "var(--lys-rosa)" },
            { k: "Pessoas", v: "—", sub: "Equipa directa e famílias", accent: "var(--lys-madeira)" },
            { k: "Culturas", v: "—", sub: "Cadeias produtivas activas", accent: "white" },
            { k: "Projectos", v: "—", sub: "Sustentabilidade e comunidade", accent: "var(--lys-rosa)" },
          ].map((s, i) => (
            <ScrollReveal key={s.k} direction="up" delay={i * 0.08}>
              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-6 md:p-7">
                <p className="font-display text-[42px] md:text-[52px] leading-none tracking-[-0.05em]" style={{ color: s.accent as string }}>
                  {s.v}
                </p>
                <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-white/70">{s.k}</p>
                <p className="mt-3 text-[12px] leading-5 text-white/45">{s.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-[var(--lys-rosa)]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--lys-rosa)] via-[var(--lys-rosa)]/90 to-[var(--lys-rosa)]/40" />
        <div className="relative container-lys py-16 md:py-24">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <p className="text-[11px] tracking-[0.28em] uppercase text-white/80">Descubra</p>
                <h2 className="mt-3 font-display text-[clamp(36px,8vw,72px)] leading-[0.85] tracking-[-0.04em] uppercase text-white">
                  Descubra
                  <br />a Lysandja.
                </h2>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <p className="max-w-[360px] text-[14px] leading-6 text-white/85 lg:text-right">
                  Entre no território, conheça a produção e acompanhe as histórias que nascem da terra.
                </p>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <ButtonLink href="/fazenda" variant="primary" size="lg" className="bg-white text-[var(--lys-verde)] hover:bg-[var(--lys-paper)]">
                    Explorar a fazenda
                  </ButtonLink>
                  <ButtonLink href="/contacto" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-[var(--lys-rosa)]">
                    Fale connosco
                  </ButtonLink>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
