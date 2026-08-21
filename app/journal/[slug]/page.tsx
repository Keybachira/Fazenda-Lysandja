import { posts } from "@/content/journal";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <article className="bg-[var(--lys-paper)]">
      <div className="pt-[112px]">
        <div className="container-lys">
          <Link href="/journal" className="text-[11px] tracking-[0.16em] uppercase text-[var(--lys-ink-40)] hover:text-[var(--lys-verde)]">
            ← Voltar ao Journal
          </Link>
          <p className="mt-6 text-[11px] tracking-[0.22em] uppercase text-[var(--lys-rosa)] font-semibold">{post.category} · {post.date}</p>
          <h1 className="mt-3 font-display text-[42px] md:text-[64px] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)] max-w-[800px]">
            {post.title}
          </h1>
          <p className="mt-4 max-w-[640px] text-[16px] leading-7 text-[var(--lys-ink-60)]">{post.excerpt}</p>
        </div>
      </div>

      <div className="container-lys mt-8">
        <div className="overflow-hidden rounded-[20px] aspect-[16/9] bg-neutral-200">
          {/* eslint-disable @next/next/no-img-element */}
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        </div>
        <div className="prose prose-neutral max-w-[720px] mx-auto mt-10 pb-16">
          <p className="text-[15px] leading-8 text-[var(--lys-ink-60)]">
            Conteúdo completo em preparação editorial. Esta estrutura já suporta CMS futuro (Supabase / headless). Por enquanto, demonstra tipografia, ritmo e hierarquia Lysandja.
          </p>
          <p className="text-[13px] text-[var(--lys-ink-40)] mt-6">
            TODO: integrar conteúdo oficial do Journal Lysandja.
          </p>
        </div>
      </div>
    </article>
  );
}
