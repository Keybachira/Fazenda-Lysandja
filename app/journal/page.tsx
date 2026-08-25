"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { posts, type Post } from "@/content/journal";
import { Section, Eyebrow, Display, Lead, ScrollReveal } from "@/components/ui";

const categories = ["Todas", "Agricultura", "Pessoas", "Tecnologia", "Sustentabilidade", "Vida na Fazenda"] as const;

export default function JournalPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("Todas");

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const filtered = active === "Todas" ? posts : posts.filter((p) => p.category === active);
  const rest = filtered.filter((p) => p.slug !== featured.slug);

  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Header */}
      <Section bleed className="pt-[120px] pb-10 border-b border-[var(--lys-line)] bg-[var(--lys-paper-2)]">
        <div className="container-lys flex flex-col md:flex-row md:items-end justify-between gap-6">
          <ScrollReveal direction="left">
            <Eyebrow>Journal Lysandja</Eyebrow>
            <Display as="h1" className="mt-3 text-[clamp(48px,7vw,84px)]">
              Histórias<br />da terra.
            </Display>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.12em] uppercase font-semibold transition-all ${
                    active === c
                      ? "border-[var(--lys-verde)] bg-[var(--lys-verde)] text-white"
                      : "border-[var(--lys-line)] bg-white text-[var(--lys-ink-60)] hover:border-[var(--lys-rosa)] hover:text-[var(--lys-rosa)]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <section className="section-lys">
        <div className="container-lys">
          {/* Featured post */}
          {filtered.includes(featured) && (
            <ScrollReveal direction="up">
              <Link href={`/journal/${featured.slug}`} className="group grid lg:grid-cols-[1.2fr_0.8fr] gap-6 rounded-[20px] overflow-hidden border border-[var(--lys-line)] bg-white">
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-200">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="p-7 md:p-8 flex flex-col justify-center">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-rosa)] font-semibold">{featured.category}</p>
                  <h2 className="mt-2 font-display text-[32px] leading-none tracking-[-0.03em] text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">{featured.title}</h2>
                  <p className="mt-3 text-[14px] leading-6 text-[var(--lys-ink-60)]">{featured.excerpt}</p>
                  <span className="mt-4 text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">Ler artigo →</span>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Grid */}
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <ScrollReveal key={p.slug} direction="up" delay={i * 0.08}>
                <Link href={`/journal/${p.slug}`} className="group rounded-[18px] overflow-hidden border border-[var(--lys-line)] bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] tracking-[0.18em] uppercase text-[var(--lys-ink-40)]">{p.category}</p>
                    <h3 className="mt-2 font-display text-[22px] leading-none text-[var(--lys-verde)] group-hover:text-[var(--lys-rosa)] transition-colors">{p.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-[var(--lys-ink-60)] line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[var(--lys-ink-40)] text-[14px]">Nenhum artigo nesta categoria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
