import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <div className="relative pt-[120px] pb-16 md:pb-24 bg-[var(--lys-verde)] text-white overflow-hidden grain-dark">
        <div className="container-lys relative z-10">
          <p className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]">Contacto</p>
          <h1 className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase">
            Fale com<br />
            <span className="text-[var(--lys-rosa)]">a Lysandja.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[16px] leading-8 text-white/60">
            Tem um projecto? Quer conhecer nossa producao? Quer estabelecer uma parceria? Escreva-nos.
          </p>
        </div>
      </div>

      <ScrollReveal as="section" className="section-lys">
        <div className="container-lys grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">
          <form className="space-y-4" action="#" method="post">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-[12px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">Nome</span>
                <input placeholder="Seu nome" name="nome" className="rounded-xl border border-[var(--lys-line)] bg-white px-4 py-3 text-[14px] outline-none focus:border-[var(--lys-rosa)] transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[12px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">Email</span>
                <input type="email" placeholder="email@exemplo.com" name="email" className="rounded-xl border border-[var(--lys-line)] bg-white px-4 py-3 text-[14px] outline-none focus:border-[var(--lys-rosa)] transition-colors" />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-[12px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">Assunto</span>
              <input placeholder="Assunto" name="assunto" className="rounded-xl border border-[var(--lys-line)] bg-white px-4 py-3 text-[14px] outline-none focus:border-[var(--lys-rosa)] transition-colors" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[12px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">Mensagem</span>
              <textarea rows={5} placeholder="Como podemos ajudar?" name="mensagem" className="rounded-xl border border-[var(--lys-line)] bg-white px-4 py-3 text-[14px] outline-none focus:border-[var(--lys-rosa)] transition-colors resize-none" />
            </label>
            <button type="submit" className="cta-glow rounded-full bg-[var(--lys-rosa)] px-8 py-4 text-[12px] tracking-[0.16em] uppercase font-semibold text-white hover:bg-[var(--lys-rosa-deep)] transition-colors">
              Enviar mensagem &rarr;
            </button>
            <p className="text-[11px] text-[var(--lys-ink-40)]">TODO: ligar a backend / email oficial quando disponivel.</p>
          </form>

          <div className="space-y-6">
            <div className="card-hover rounded-[18px] border border-[var(--lys-line)] bg-white p-7">
              <p className="text-[12px] tracking-[0.22em] uppercase font-semibold text-[var(--lys-rosa)]">Localizacao</p>
              <p className="mt-2 text-[14px] leading-6 text-[var(--lys-ink-60)]">Angola &mdash; coordenadas e endereco oficial a confirmar.<br />TODO: inserir localizacao oficial.</p>
            </div>
            <div className="card-hover rounded-[18px] border border-[var(--lys-line)] bg-white p-7">
              <p className="text-[12px] tracking-[0.22em] uppercase font-semibold text-[var(--lys-rosa)]">Contacto</p>
              <p className="mt-2 text-[14px] leading-6 text-[var(--lys-ink-60)]">hello@lysandja.ao<br />TODO: inserir telefone oficial.</p>
            </div>
            <div className="rounded-[18px] bg-[var(--lys-verde)] p-7 text-white">
              <p className="font-display text-[24px] leading-none">Onde a terra<br />ganha proposito.</p>
              <p className="mt-3 text-[13px] leading-6 text-white/60">Respostas em ate 2 dias uteis. Para visitas a fazenda, agendamento previo necessario.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
