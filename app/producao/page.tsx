import Image from "next/image";
import { Section, Eyebrow, SectionNumber, Display, Lead, ScrollReveal } from "@/components/ui";
import { cultures, processo } from "@/content/production";

export const metadata = { title: "Produção" };

export default function ProducaoPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <Section bleed className="pt-[120px] pb-10 bg-[var(--lys-paper-2)] border-b border-[var(--lys-line)]">
        <div className="container-lys">
          <ScrollReveal direction="up">
            <Eyebrow>Produção</Eyebrow>
            <Display as="h1" className="mt-3 text-[clamp(48px,7vw,88px)]">
              Da terra<br />para o mundo.
            </Display>
            <Lead className="mt-6 max-w-[560px]">
              Cadeias produtivas com manejo responsável, rastreabilidade e qualidade para ir longe — sem perder a origem.
            </Lead>
          </ScrollReveal>
        </div>
      </Section>

      {/* Culturas */}
      <Section>
        <div className="space-y-12">
          {cultures.map((c, i) => (
            <ScrollReveal key={c.slug} direction={i % 2 === 0 ? "left" : "right"} delay={0.1}>
              <div
                id={c.slug}
                className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-[18px] aspect-[4/3] bg-neutral-200">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] tracking-[0.16em] uppercase font-semibold text-[var(--lys-verde)] z-10">
                    {c.kicker}
                  </span>
                </div>
                <div>
                  <SectionNumber n={c.n} />
                  <Display as="h2" className="-mt-4 text-[clamp(32px,5vw,56px)]">
                    {c.title}
                  </Display>
                  <Lead className="mt-4 max-w-[480px]">
                    {c.desc}
                  </Lead>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Processo */}
      <Section dark>
        <ScrollReveal direction="up">
          <Eyebrow light>Processo</Eyebrow>
          <Display as="h2" light className="mt-3 text-[clamp(40px,5.5vw,64px)]">
            Do solo ao destino.
          </Display>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {processo.map((p, i) => (
            <ScrollReveal key={p.n} direction="up" delay={i * 0.06}>
              <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5">
                <p className="font-display text-[32px] leading-none text-[var(--lys-rosa)]">{p.n}</p>
                <p className="mt-2 text-[12px] tracking-[0.16em] uppercase font-semibold text-white">{p.title}</p>
                <p className="mt-3 text-[12px] leading-5 text-white/60">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
