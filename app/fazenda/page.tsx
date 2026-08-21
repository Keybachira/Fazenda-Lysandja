import Link from "next/link";
import { farmHotspots } from "@/content/farm";

export const metadata = { title: "A Fazenda" };

export default function FazendaPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Header */}
      <div className="pt-[120px] pb-10 bg-[var(--lys-verde)] text-white">
        <div className="container-lys">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-madeira)]">Fazenda · Território</p>
          <h1 className="mt-3 font-display text-[48px] md:text-[84px] leading-[0.85] tracking-[-0.04em] uppercase">
            Explorar <br />
            <span className="text-[var(--lys-rosa)]">a fazenda.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-white/60">
            Um território para descobrir — produção, irrigação, pecuária e reserva em diálogo constante. Cada área com propósito.
          </p>
        </div>
      </div>

      {/* Mapa interativo */}
      <section className="section-lys">
        <div className="container-lys">
          <div className="flex items-center justify-between mb-6">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--lys-ink-40)]">Mapa interactivo · em actualização</p>
            <p className="text-[11px] text-[var(--lys-ink-40)]">TODO: substituir por imagem aérea oficial</p>
          </div>

          <div className="relative overflow-hidden rounded-[20px] border border-[var(--lys-line)] bg-[var(--lys-paper-2)] aspect-[16/9.5]">
            <img
              src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&q=80&auto=format&fit=crop"
              alt="Vista aérea da fazenda — placeholder"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[var(--lys-verde)]/10" />

            {farmHotspots.map((h) => (
              <div
                key={h.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
              >
                <div className="relative">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--lys-rosa)] text-white text-[10px] font-bold shadow-lg ring-4 ring-white/40">
                    ●
                  </span>
                  <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--lys-verde)] px-3 py-1 text-[10px] tracking-[0.14em] uppercase text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {h.label}
                  </span>
                  {/* tooltip card on hover */}
                  <div className="absolute left-1/2 top-full mt-8 hidden group-hover:block -translate-x-1/2 w-[240px] rounded-xl bg-white p-4 shadow-xl border border-[var(--lys-line)] z-10">
                    <p className="text-[11px] tracking-[0.16em] uppercase text-[var(--lys-rosa)] font-semibold">{h.label}</p>
                    <p className="mt-1 text-[13px] leading-5 text-[var(--lys-ink-60)]">{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {farmHotspots.map((h) => (
              <div key={h.id} className="rounded-2xl border border-[var(--lys-line)] bg-white p-5">
                <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--lys-rosa)] font-semibold">{h.label}</p>
                <p className="mt-2 text-[13px] leading-6 text-[var(--lys-ink-60)]">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-lys flex justify-between items-center border-t border-[var(--lys-line)] pt-8">
          <p className="text-[12px] text-[var(--lys-ink-40)]">Próximo: Produção · Da terra para o mundo</p>
          <Link href="/producao" className="rounded-full bg-[var(--lys-verde)] px-6 py-3 text-[11px] tracking-[0.16em] uppercase text-white font-semibold hover:bg-[var(--lys-verde-mid)] transition-colors">
            Ver produção →
          </Link>
        </div>
      </section>
    </div>
  );
}
