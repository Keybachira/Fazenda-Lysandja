import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { cultures } from "@/content/production";

export default function Home() {
  return (
    <div className="bg-[var(--lys-paper)]">
      <Hero />

      {/* ── 01 — UMA FAZENDA. UM ECOSSISTEMA. ── */}
      <section className="section-lys overflow-hidden">
        <div className="container-lys">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex items-start gap-6">
                <span className="font-display text-[88px] md:text-[132px] leading-none tracking-[-0.06em] text-[var(--lys-verde)]/[0.08]">
                  01
                </span>
                <div className="pt-3 md:pt-6">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-rosa)] font-semibold">Manifesto</p>
                  <h2 className="mt-3 font-display text-[40px] md:text-[56px] leading-[0.9] tracking-[-0.04em] uppercase text-[var(--lys-verde)]">
                    Uma fazenda.
                    <br />
                    <span className="text-[var(--lys-rosa)]">Um ecossistema.</span>
                  </h2>
                </div>
              </div>

              <div className="mt-8 md:mt-10 max-w-[520px] space-y-5">
                <p className="text-[18px] md:text-[20px] leading-8 text-[var(--lys-ink-60)]">
                  Muito mais do que produzir. A Lysandja conecta terra, pessoas, tecnologia e conhecimento para construir uma agricultura preparada para o futuro.
                </p>
                <p className="text-[14px] leading-7 text-[var(--lys-ink-60)]">
                  Cada talhão é observado, cada decisão é medida pelo impacto no solo, na água e nas pessoas que fazem a fazenda acontecer. Produção e preservação não são escolhas — são o mesmo caminho.
                </p>
                <Link
                  href="/fazenda"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-semibold text-[var(--lys-verde)] border-b border-[var(--lys-verde)] pb-1 hover:text-[var(--lys-rosa)] hover:border-[var(--lys-rosa)] transition-colors"
                >
                  Conheça a fazenda <span>→</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[18px] bg-neutral-200 aspect-[4/3.2]">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80&auto=format&fit=crop"
                  alt="Trabalhadores no campo — mãos na terra"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-white/70">Vida na fazenda</p>
                  <p className="font-display text-[18px] text-white leading-none mt-1">Onde o trabalho ganha forma</p>
                </div>
              </div>

              {/* overlapped secondary */}
              <div className="absolute -bottom-8 -left-6 md:-left-10 w-[56%] overflow-hidden rounded-[14px] border-[6px] border-[var(--lys-paper)] shadow-xl hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format&fit=crop"
                  alt="Detalhe de folhagem e luz natural"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="hidden lg:flex absolute -right-6 top-10 flex-col gap-3">
                <span className="h-20 w-[1px] bg-[var(--lys-line)] mx-auto" />
                <span className="text-[10px] tracking-[0.24em] uppercase text-[var(--lys-ink-40)] [writing-mode:vertical-lr]">
                  Terra · Pessoas · Tecnologia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 — A NOSSA TERRA ── */}
      <section className="bg-[var(--lys-verde)] text-white overflow-hidden">
        <div className="container-lys section-lys">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-14">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-madeira)]">02 — Território</p>
              <h2 className="mt-3 font-display text-[46px] md:text-[72px] leading-[0.85] tracking-[-0.04em] uppercase">
                A nossa <span className="text-[var(--lys-rosa)]">terra</span>
              </h2>
            </div>
            <p className="max-w-[420px] text-[14px] leading-7 text-white/60">
              Uma paisagem de horizonte aberto, solo vivo e água que precisa ser honrada. A geografia não é cenário — é condição.
            </p>
          </div>

          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-6">
            <div className="relative overflow-hidden rounded-[20px] aspect-[16/11] bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1400&q=80&auto=format&fit=crop"
                alt="Vista aérea de campos agrícolas"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div>
                  <p className="text-[11px] tracking-[0.18em] uppercase text-white/70">Paisagem</p>
                  <p className="font-display text-[22px] text-white">Horizonte sem fim</p>
                </div>
                <span className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--lys-verde)]">↗</span>
              </div>
            </div>
            <div className="grid gap-4 md:gap-6">
              <div className="relative overflow-hidden rounded-[20px] aspect-[4/3] bg-white/5">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80&auto=format&fit=crop"
                  alt="Solo fértil e textura da terra"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">Solo vivo</p>
                  <p className="font-display text-white">Cada centímetro importa</p>
                </div>
              </div>
              <div className="rounded-[20px] bg-[var(--lys-rosa)] p-7 md:p-8 flex flex-col justify-between min-h-[180px]">
                <p className="text-[11px] tracking-[0.22em] uppercase text-white/80">Compromisso</p>
                <p className="font-display text-[28px] leading-[0.95] text-white">
                  Produzir<br /> preservando.
                </p>
                <Link href="/sustentabilidade" className="mt-4 inline-flex text-[11px] tracking-[0.16em] uppercase font-semibold text-white border-b border-white/40 pb-1 w-fit">
                  Sustentabilidade →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 — PRODUÇÃO ── */}
      <section className="section-lys bg-[var(--lys-paper)]">
        <div className="container-lys">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-rosa)] font-semibold">03 — Produção</p>
              <h2 className="mt-3 font-display text-[40px] md:text-[64px] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]">
                Da terra <span className="text-[var(--lys-madeira-deep)]">para o mundo.</span>
              </h2>
            </div>
            <Link
              href="/producao"
              className="inline-flex items-center justify-center rounded-full border border-[var(--lys-verde)] px-7 py-3 text-[11px] tracking-[0.16em] uppercase font-semibold text-[var(--lys-verde)] hover:bg-[var(--lys-verde)] hover:text-white transition-colors"
            >
              Ver produção
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {cultures.map((c) => (
              <Link
                key={c.slug}
                href={`/producao#${c.slug}`}
                className="group relative overflow-hidden rounded-[18px] bg-white border border-[var(--lys-line)]"
              >
                <div className="aspect-[4/3.2] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-ink-40)]">{c.kicker}</p>
                  <h3 className="mt-2 font-display text-[28px] leading-none tracking-[-0.03em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[var(--lys-ink-60)] line-clamp-3">{c.desc}</p>
                  <span className="mt-4 inline-flex text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)] group-hover:gap-2 gap-1 transition-all">
                    Explorar <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 — PESSOAS ── */}
      <section className="relative overflow-hidden bg-[var(--lys-paper-2)]">
        <div className="container-lys section-lys">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[20px] aspect-[4/4.6]">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&q=80&auto=format&fit=crop"
                  alt="Pessoas — equipa da fazenda"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-display text-[20px]">Gente que cultiva futuro</p>
                  <p className="text-white/70 text-[12px]">Histórias reais · Mãos na terra</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-[var(--lys-madeira)] text-[var(--lys-verde)] font-display text-[11px] tracking-[0.14em] uppercase leading-none text-center">
                Por trás de<br />cada<br />colheita
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-rosa)] font-semibold">04 — Pessoas</p>
              <h2 className="mt-3 font-display text-[42px] md:text-[56px] leading-[0.88] tracking-[-0.04em] uppercase text-[var(--lys-verde)]">
                Por trás de<br />
                cada colheita
                <br />
                <span className="text-[var(--lys-ink-40)]">existem pessoas.</span>
              </h2>
              <p className="mt-6 max-w-[480px] text-[16px] leading-7 text-[var(--lys-ink-60)]">
                Técnica, cuidado e saberes passados entre gerações. A Lysandja existe porque há gente que acorda cedo, observa o tempo e respeita a terra.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">Saber local</span>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">Formação contínua</span>
                <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)]">Respeito</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 — IMPACTO ── */}
      <section className="bg-[var(--lys-verde)] text-white">
        <div className="container-lys section-lys">
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-madeira)]">05 — Impacto</p>
              <h2 className="mt-3 font-display text-[40px] md:text-[56px] leading-[0.9] tracking-[-0.04em] uppercase">
                Medir para
                <br />
                melhorar.
              </h2>
            </div>
            <p className="max-w-[420px] text-[13px] leading-7 text-white/60 self-end">
              {/* Não inventar métricas — placeholder honesto */}
              Números oficiais em actualização. Todo indicador apresentado será validado pela gestão da Fazenda Lysandja antes de publicação.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { k: "Hectares", v: "—", sub: "Território cultivável e reserva", accent: "var(--lys-rosa)" },
              { k: "Pessoas", v: "—", sub: "Equipa directa e famílias", accent: "var(--lys-madeira)" },
              { k: "Culturas", v: "—", sub: "Cadeias produtivas activas", accent: "white" },
              { k: "Projectos", v: "—", sub: "Sustentabilidade e comunidade", accent: "var(--lys-rosa)" },
            ].map((s) => (
              <div key={s.k} className="rounded-[18px] border border-white/10 bg-white/[0.04] p-6 md:p-7">
                <p className="font-display text-[42px] md:text-[52px] leading-none tracking-[-0.05em]" style={{ color: s.accent as string }}>
                  {s.v}
                </p>
                <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-white/70">{s.k}</p>
                <p className="mt-3 text-[12px] leading-5 text-white/45">{s.sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[11px] tracking-[0.12em] text-white/35">TODO: inserir métricas oficiais validadas.</p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative overflow-hidden bg-[var(--lys-rosa)]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--lys-rosa)] via-[var(--lys-rosa)]/90 to-[var(--lys-rosa)]/40" />
        <div className="relative container-lys py-16 md:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-white/80">Descubra</p>
              <h2 className="mt-3 font-display text-[44px] md:text-[72px] leading-[0.85] tracking-[-0.04em] uppercase text-white">
                Descubra
                <br />a Lysandja.
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <p className="max-w-[360px] text-[14px] leading-6 text-white/85 lg:text-right">
                Entre no território, conheça a produção e acompanhe as histórias que nascem da terra.
              </p>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/fazenda"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] tracking-[0.16em] uppercase font-semibold text-[var(--lys-verde)] hover:bg-[var(--lys-paper)] transition-colors"
                >
                  Explorar a fazenda
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-[11px] tracking-[0.16em] uppercase font-semibold text-white hover:bg-white hover:text-[var(--lys-rosa)] transition-colors"
                >
                  Fale connosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
