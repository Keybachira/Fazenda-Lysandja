import Image from "next/image";
import { Section, Eyebrow, Display, Lead, ScrollReveal } from "@/components/ui";
import { farmHotspots, farmFacts } from "@/content/farm";

export const metadata = { title: "A Fazenda" };

export default function FazendaPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <Section bleed className="pt-[120px] pb-10 bg-[var(--lys-paper-2)] border-b border-[var(--lys-line)]">
        <div className="container-lys">
          <ScrollReveal direction="up">
            <Eyebrow>A Fazenda</Eyebrow>
            <Display as="h1" className="mt-3 text-[clamp(48px,7vw,84px)]">
              O território<br />
              <span className="text-[var(--lys-rosa)]">vivo.</span>
            </Display>
            <Lead className="mt-6 max-w-[520px]">
              Explore o mapa interactivo, conheça os pontos de interesse e descubra onde a tradição encontra o futuro.
            </Lead>
          </ScrollReveal>
        </div>
      </Section>

      {/* Map */}
      <Section>
        <ScrollReveal direction="up">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div className="relative overflow-hidden rounded-[20px] aspect-[4/3] bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1400&q=80&auto=format&fit=crop"
                alt="Vista aérea da Fazenda Lysandja"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              {/* Hotspot pins */}
              {farmHotspots.map((pin, i) => (
                <div
                  key={pin.id}
                  className="absolute group"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--lys-rosa)] text-white text-[11px] font-bold cursor-pointer hover:scale-110 transition-transform shadow-lg z-10 relative">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 rounded-lg bg-white shadow-xl border border-[var(--lys-line)] p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <p className="font-semibold text-[12px] text-[var(--lys-verde)]">{pin.label}</p>
                    <p className="text-[11px] text-[var(--lys-ink-60)] mt-1">{pin.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Display as="h2" className="text-[clamp(32px,4vw,40px)]">
                A nossa fazenda
              </Display>
              <Lead className="mt-4">
                {farmFacts.terra}
              </Lead>
              <div className="mt-8 space-y-4">
                {farmHotspots.map((pin, i) => (
                  <ScrollReveal key={pin.id} direction="right" delay={i * 0.06}>
                    <div className="flex gap-3 items-start">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--lys-rosa)] text-white text-[10px] font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold text-[var(--lys-verde)]">{pin.label}</p>
                        <p className="text-[12px] text-[var(--lys-ink-60)]">{pin.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
}
