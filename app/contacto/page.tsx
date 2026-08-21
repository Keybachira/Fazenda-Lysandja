export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      <div className="pt-[120px] pb-10 bg-[var(--lys-verde)] text-white">
        <div className="container-lys">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-madeira)]">Contacto</p>
          <h1 className="mt-3 font-display text-[48px] md:text-[84px] leading-[0.85] tracking-[-0.04em] uppercase">
            Fale com<br />
            <span className="text-[var(--lys-rosa)]">a Lysandja.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-white/60">
            Tem um projecto? Quer conhecer nossa produção? Quer estabelecer uma parceria? Escreva-nos.
          </p>
        </div>
      </div>

      <section className="section-lys">
        <div className="container-lys grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">
          <form className="space-y-4" action="#" method="post">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">Nome</span>
                <input placeholder="Seu nome" name="nome" className="rounded-xl border border-[var(--lys-line)] bg-white px-4 py-3 text-[14px] outline-none focus:border-[var(--lys-rosa)]" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">Email</span>
                <input type="email" placeholder="email@exemplo.com" name="email" className="rounded-xl border border-[var(--lys-line)] bg-white px-4 py-3 text-[14px] outline-none focus:border-[var(--lys-rosa)]" />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">Assunto</span>
              <input placeholder="Assunto" name="assunto" className="rounded-xl border border-[var(--lys-line)] bg-white px-4 py-3 text-[14px] outline-none focus:border-[var(--lys-rosa)]" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">Mensagem</span>
              <textarea rows={5} placeholder="Como podemos ajudar?" name="mensagem" className="rounded-xl border border-[var(--lys-line)] bg-white px-4 py-3 text-[14px] outline-none focus:border-[var(--lys-rosa)] resize-none" />
            </label>
            <button type="submit" className="rounded-full bg-[var(--lys-rosa)] px-8 py-4 text-[11px] tracking-[0.16em] uppercase font-semibold text-white hover:bg-[var(--lys-rosa-deep)] transition-colors">
              Enviar mensagem →
            </button>
            <p className="text-[11px] text-[var(--lys-ink-40)]">TODO: ligar a backend / email oficial quando disponível.</p>
          </form>

          <div className="space-y-6">
            <div className="rounded-[18px] border border-[var(--lys-line)] bg-white p-7">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[var(--lys-rosa)]">Localização</p>
              <p className="mt-2 text-[14px] leading-6 text-[var(--lys-ink-60)]">Angola — coordenadas e endereço oficial a confirmar.<br />TODO: inserir localização oficial.</p>
            </div>
            <div className="rounded-[18px] border border-[var(--lys-line)] bg-white p-7">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[var(--lys-rosa)]">Contacto</p>
              <p className="mt-2 text-[14px] leading-6 text-[var(--lys-ink-60)]">hello@lysandja.ao<br />TODO: inserir telefone oficial.</p>
            </div>
            <div className="rounded-[18px] bg-[var(--lys-verde)] p-7 text-white">
              <p className="font-display text-[22px] leading-none">Onde a terra<br />ganha propósito.</p>
              <p className="mt-3 text-[12px] leading-6 text-white/60">Respostas em até 2 dias úteis. Para visitas à fazenda, agendamento prévio necessário.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
