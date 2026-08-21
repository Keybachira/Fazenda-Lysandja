import Link from "next/link";
import { posts } from "@/content/journal";

export const metadata = { title: "Journal" };

export default function JournalPage() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <div className="bg-[var(--lys-paper)]">
      <div className="pt-[120px] pb-10 border-b border-[var(--lys-line)]">
        <div className="container-lys flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-rosa)] font-semibold">Journal Lysandja</p>
            <h1 className="mt-3 font-display text-[48px] md:text-[72px] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]">
              Histórias<br />da terra.
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Todas", "Agricultura", "Pessoas", "Tecnologia", "Sustentabilidade", "Vida na Fazenda"].map((c) => (
              <span key={c} className="rounded-full border border-[var(--lys-line)] bg-white px-4 py-2 text-[11px] tracking-[0.12em] uppercase text-[var(--lys-ink-60)]">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="section-lys">
        <div className="container-lys">
          {/* featured */}
          <Link href={`/journal/${featured.slug}`} className="group grid lg:grid-cols-[1.2fr_0.8fr] gap-6 rounded-[20px] overflow-hidden border border-[var(--lys-line)] bg-white">
            <div className="aspect-[16/11] overflow-hidden">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <div className="p-7 md:p-8 flex flex-col justify-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--lys-rosa)] font-semibold">{featured.category}</p>
              <h2 className="mt-2 font-display text-[32px] leading-none tracking-[-0.03em] text-[var(--lys-verde)]">{featured.title}</h2>
              <p className="mt-3 text-[14px] leading-6 text-[var(--lys-ink-60)]">{featured.excerpt}</p>
              <span className="mt-4 text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--lys-verde)]">Ler artigo →</span>
            </div>
          </Link>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link key={p.slug} href={`/journal/${p.slug}`} className="group rounded-[18px] overflow-hidden border border-[var(--lys-line)] bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[var(--lys-ink-40)]">{p.category}</p>
                  <h3 className="mt-2 font-display text-[22px] leading-none text-[var(--lys-verde)]">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[var(--lys-ink-60)] line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
