import { cultures, processo } from "@/content/production";

export const metadata = { title: "Produção" };

export default function ProducaoPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      <div className="pt-[120px] pb-10 bg-[var(--lys-paper-2)] border-b border-[var(--lys-line)]">
        <div className="container-lys">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-rosa)] font-semibold">Produção</p>
          <h1 className="mt-3 font-display text-[48px] md:text-[88px] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]">
            Da terra<br />para o mundo.
          </h1>
          <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-[var(--lys-ink-60)]">
            Cadeias produtivas com manejo responsável, rastreabilidade e qualidade para ir longe — sem perder a origem.
          </p>
        </div>
      </div>

      {/* Culturas — horizontal feeling stacked */}
      <section className="section-lys">
        <div className="container-lys space-y-12">
          {cultures.map((c, i) => (
            <div
              key={c.slug}
              id={c.slug}
              className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-[18px] aspect-[4/3] bg-neutral-200">
                {/* eslint-disable @next/next/no-img-element */}
                <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] tracking-[0.16em] uppercase font-semibold text-[var(--lys-verde)]">
                  {c.kicker}
                </span>
              </div>
              <div>
                <p className="font-display text-[88px] leading-none tracking-[-0.06em] text-[var(--lys-verde)]/[0.07]">{c.n}</p>
                <h2 className="font-display text-[44px] leading-none tracking-[-0.04em] uppercase text-[var(--lys-verde)] -mt-4">{c.title}</h2>
                <p className="mt-4 max-w-[480px] text-[15px] leading-7 text-[var(--lys-ink-60)]">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processo */}
      <section className="bg-[var(--lys-verde)] text-white">
        <div className="container-lys section-lys">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-madeira)]">Processo</p>
          <h2 className="mt-3 font-display text-[40px] md:text-[64px] leading-[0.85] tracking-[-0.04em] uppercase">
            Do solo ao destino.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processo.map((p) => (
              <div key={p.n} className="rounded-2xl bg-white/[0.06] border border-white/10 p-5">
                <p className="font-display text-[32px] leading-none text-[var(--lys-rosa)]">{p.n}</p>
                <p className="mt-2 text-[12px] tracking-[0.16em] uppercase font-semibold text-white">{p.title}</p>
                <p className="mt-3 text-[12px] leading-5 text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[11px] text-white/35">Experiência de scroll storytelling com GSAP ScrollTrigger prevista — estrutura pronta para animação.</p>
        </div>
      </section>
    </div>
  );
}
