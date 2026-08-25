import Image from "next/image";
import { Section, Eyebrow, Display, Lead, ScrollReveal } from "@/components/ui";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <Section bleed className="pt-[120px] pb-10 bg-[var(--lys-paper-2)] border-b border-[var(--lys-line)]">
        <div className="container-lys">
          <ScrollReveal direction="up">
            <Eyebrow>Contacto</Eyebrow>
            <Display as="h1" className="mt-3 text-[clamp(48px,7vw,84px)]">
              Fale<br />
              <span className="text-[var(--lys-rosa)]">connosco.</span>
            </Display>
            <Lead className="mt-6 max-w-[480px]">
              Perguntas, parcerias ou visitas — estamos aqui para responder.
            </Lead>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--lys-rosa)] font-semibold">Email</p>
                <a href="mailto:info@fazendalysandja.co.ao" className="mt-1 block font-display text-[24px] text-[var(--lys-verde)] hover:text-[var(--lys-rosa)] transition-colors">
                  info@fazendalysandja.co.ao
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--lys-rosa)] font-semibold">Telefone</p>
                <p className="mt-1 font-display text-[24px] text-[var(--lys-verde)]">+244 XXX XXX XXX</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--lys-rosa)] font-semibold">Morada</p>
                <p className="mt-1 text-[14px] leading-6 text-[var(--lys-ink-60)]">
                  Fazenda Lysandja<br />
                  Cuanza Sul, Angola
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <form className="rounded-[20px] border border-[var(--lys-line)] bg-white p-7 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)] font-semibold">Nome</label>
                  <input type="text" className="mt-2 w-full rounded-lg border border-[var(--lys-line)] bg-[var(--lys-paper)] px-4 py-3 text-[14px] focus:outline-none focus:border-[var(--lys-rosa)] transition-colors" />
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)] font-semibold">Email</label>
                  <input type="email" className="mt-2 w-full rounded-lg border border-[var(--lys-line)] bg-[var(--lys-paper)] px-4 py-3 text-[14px] focus:outline-none focus:border-[var(--lys-rosa)] transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)] font-semibold">Assunto</label>
                <input type="text" className="mt-2 w-full rounded-lg border border-[var(--lys-line)] bg-[var(--lys-paper)] px-4 py-3 text-[14px] focus:outline-none focus:border-[var(--lys-rosa)] transition-colors" />
              </div>
              <div>
                <label className="text-[11px] tracking-[0.14em] uppercase text-[var(--lys-ink-60)] font-semibold">Mensagem</label>
                <textarea rows={5} className="mt-2 w-full rounded-lg border border-[var(--lys-line)] bg-[var(--lys-paper)] px-4 py-3 text-[14px] focus:outline-none focus:border-[var(--lys-rosa)] transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full rounded-full bg-[var(--lys-verde)] text-white py-3 text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[var(--lys-verde-deep)] transition-colors">
                Enviar mensagem
              </button>
            </form>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}
