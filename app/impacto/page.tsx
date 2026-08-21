export const metadata = { title: "Impacto" };

export default function ImpactoPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      <div className="pt-[120px] pb-10 bg-[var(--lys-verde)] text-white">
        <div className="container-lys">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-madeira)]">Impacto</p>
          <h1 className="mt-3 font-display text-[48px] md:text-[84px] leading-[0.85] tracking-[-0.04em] uppercase">
            Impacto que<br />
            <span className="text-[var(--lys-rosa)]">se mede.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-white/60">
            Números reais, quando validados. Até lá, transparência total: sem métricas inventadas.
          </p>
        </div>
      </div>

      <section className="section-lys">
        <div className="container-lys">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: "—", k: "Hectares", d: "Área total e cultivável" },
              { v: "—", k: "Pessoas", d: "Equipa e famílias impactadas" },
              { v: "—", k: "Culturas", d: "Cadeias produtivas" },
              { v: "—", k: "Projectos", d: "Comunidade e ambiente" },
            ].map((s) => (
              <div key={s.k} className="rounded-[18px] border border-[var(--lys-line)] bg-white p-7">
                <p className="font-display text-[56px] leading-none tracking-[-0.05em] text-[var(--lys-verde)]">{s.v}</p>
                <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-[var(--lys-rosa)] font-semibold">{s.k}</p>
                <p className="mt-2 text-[12px] text-[var(--lys-ink-60)]">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] tracking-[0.14em] text-[var(--lys-ink-40)]">TODO: inserir métricas oficiais validadas pela Lysandja.</p>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="rounded-[20px] overflow-hidden bg-[var(--lys-verde-soft)] p-8">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--lys-verde)] font-semibold">Biodiversidade</p>
              <h3 className="mt-2 font-display text-[28px] leading-none text-[var(--lys-verde)]">A terra também é<br />um ecossistema.</h3>
              <p className="mt-3 text-[13px] leading-6 text-[var(--lys-ink-60)]">Fauna, flora, água e solo — preservação como prática diária, não como discurso.</p>
            </div>
            <div className="rounded-[20px] overflow-hidden relative aspect-[4/3] bg-neutral-200">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80&auto=format&fit=crop" alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
