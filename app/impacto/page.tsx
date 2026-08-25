import Image from "next/image";
import { Section, Eyebrow, Display, Lead, ScrollReveal } from "@/components/ui";

export const metadata = { title: "Impacto" };

export default function ImpactoPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <Section dark bleed className="pt-[120px] pb-10">
        <div className="container-lys">
          <ScrollReveal direction="up">
            <Eyebrow light>Impacto</Eyebrow>
            <Display as="h1" light className="mt-3 text-[clamp(48px,7vw,84px)]">
              Impacto que<br />
              <span className="text-[var(--lys-rosa)]">se mede.</span>
            </Display>
            <Lead light className="mt-6 max-w-[520px]">
              Números reais, quando validados. Até lá, transparência total: sem métricas inventadas.
            </Lead>
          </ScrollReveal>
        </div>
      </Section>

      {/* Metrics */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: "—", k: "Hectares", d: "Área total e cultivável" },
            { v: "—", k: "Pessoas", d: "Equipa e famílias impactadas" },
            { v: "—", k: "Culturas", d: "Cadeias produtivas" },
            { v: "—", k: "Projectos", d: "Comunidade e ambiente" },
          ].map((s, i) => (
            <ScrollReveal key={s.k} direction="up" delay={i * 0.08}>
              <div className="rounded-[18px] border border-[var(--lys-line)] bg-white p-7">
                <p className="font-display text-[56px] leading-none tracking-[-0.05em] text-[var(--lys-verde)]">{s.v}</p>
                <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-[var(--lys-rosa)] font-semibold">{s.k}</p>
                <p className="mt-2 text-[12px] text-[var(--lys-ink-60)]">{s.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Biodiversidade */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <ScrollReveal direction="left">
            <div className="rounded-[20px] overflow-hidden bg-[var(--lys-verde-soft)] p-8">
              <Eyebrow>Biodiversidade</Eyebrow>
              <Display as="h3" className="mt-2 text-[clamp(24px,3vw,28px)]">
                A terra também é<br />um ecossistema.
              </Display>
              <Lead className="mt-3">
                Fauna, flora, água e solo — preservação como prática diária, não como discurso.
              </Lead>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <div className="rounded-[20px] overflow-hidden relative aspect-[4/3] bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80&auto=format&fit=crop"
                alt="Biodiversidade na fazenda"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}
