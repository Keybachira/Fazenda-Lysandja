import Image from "next/image";
import { Section, Eyebrow, Display, Lead, ScrollReveal } from "@/components/ui";

export const metadata = { title: "Sustentabilidade" };

export default function SustentabilidadePage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <Section bleed className="pt-[120px] pb-10 bg-[var(--lys-paper-2)] border-b border-[var(--lys-line)]">
        <div className="container-lys">
          <ScrollReveal direction="up">
            <Eyebrow>Sustentabilidade · Tecnologia</Eyebrow>
            <Display as="h1" className="mt-3 text-[clamp(48px,7vw,84px)]">
              Cada gota<br />
              <span className="text-[var(--lys-rosa)]">importa.</span>
            </Display>
          </ScrollReveal>
        </div>
      </Section>

      {/* Content */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal direction="left">
            <Display as="h2" className="text-[clamp(28px,3.5vw,34px)]">
              Água · Solo · Futuro
            </Display>
            <Lead className="mt-4">
              Irrigação, gestão hídrica, monitorização e eficiência — sem afirmar tecnologias não confirmadas. A linguagem permanece honesta e aberta a dados oficiais futuros.
            </Lead>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Sensores", "Monitorização", "Irrigação", "Dados", "Máquinas", "Gestão"].map((t, i) => (
                <ScrollReveal key={t} direction="up" delay={i * 0.05}>
                  <span className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-3 text-center text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)] block">
                    {t}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-neutral-200 relative">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000&q=80&auto=format&fit=crop"
                alt="Sustentabilidade e tecnologia agrícola"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Dark statement */}
      <Section dark>
        <ScrollReveal direction="up">
          <Display as="h2" light className="text-[clamp(40px,5vw,56px)]">
            A agricultura<br />também evolui.
          </Display>
          <Lead light className="mt-4 max-w-[520px]">
            Tecnologia discreta, integrada à natureza — nunca um dashboard. Ferramentas a serviço da terra e das pessoas.
          </Lead>
        </ScrollReveal>
      </Section>
    </div>
  );
}
