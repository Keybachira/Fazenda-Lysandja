export const metadata = { title: "Sustentabilidade" };

export default function SustentabilidadePage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      <div className="pt-[120px] pb-10 bg-[var(--lys-paper-2)] border-b border-[var(--lys-line)]">
        <div className="container-lys">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-rosa)] font-semibold">Sustentabilidade · Tecnologia</p>
          <h1 className="mt-3 font-display text-[48px] md:text-[84px] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]">
            Cada gota<br />
            <span className="text-[var(--lys-rosa)]">importa.</span>
          </h1>
        </div>
      </div>

      <section className="section-lys">
        <div className="container-lys grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-[34px] leading-none tracking-[-0.03em] text-[var(--lys-verde)]">Água · Solo · Futuro</h2>
            <p className="mt-4 text-[15px] leading-7 text-[var(--lys-ink-60)]">
              Irrigação, gestão hídrica, monitorização e eficiência — sem afirmar tecnologias não confirmadas. A linguagem permanece honesta e aberta a dados oficiais futuros.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Sensores", "Monitorização", "Irrigação", "Dados", "Máquinas", "Gestão"].map((t) => (
                <span key={t} className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-3 text-center text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-neutral-200">
            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000&q=80&auto=format&fit=crop" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--lys-verde)] text-white">
        <div className="container-lys section-lys">
          <h2 className="font-display text-[40px] md:text-[56px] leading-[0.85] tracking-[-0.04em] uppercase">
            A agricultura<br />também evolui.
          </h2>
          <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-white/60">
            Tecnologia discreta, integrada à natureza — nunca um dashboard. Ferramentas a serviço da terra e das pessoas.
          </p>
        </div>
      </section>
    </div>
  );
}
