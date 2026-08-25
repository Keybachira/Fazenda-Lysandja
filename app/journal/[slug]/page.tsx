import { posts } from "@/content/journal";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <article className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <div className="relative pt-[112px] pb-12 md:pb-16 overflow-hidden">
        <div className="container-lys relative z-10">
          <Link
            href="/journal"
            className="editorial-underline text-[12px] tracking-[0.16em] uppercase text-[var(--lys-ink-40)] hover:text-[var(--lys-verde)]"
          >
            &larr; Voltar ao Journal
          </Link>
          <p className="mt-6 text-[12px] tracking-[0.22em] uppercase text-[var(--lys-rosa)] font-semibold">
            {post.category} &middot; {post.date}
          </p>
          <h1 className="mt-3 font-display text-[clamp(36px,5.5vw,72px)] leading-[0.85] tracking-[-0.05em] uppercase text-[var(--lys-verde)] max-w-[800px]">
            {post.title}
          </h1>
          <p className="mt-4 max-w-[640px] text-[16px] leading-7 text-[var(--lys-ink-60)]">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="container-lys mt-4">
        <div className="overflow-hidden rounded-[20px] aspect-[16/9] bg-neutral-200">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="prose prose-neutral max-w-[720px] mx-auto mt-12 pb-20">
          <p className="text-[16px] leading-8 text-[var(--lys-ink-60)]">
            Conteudo completo em preparacao editorial. Esta estrutura ja suporta
            CMS futuro (Supabase / headless). Por enquanto, demonstra
            tipografia, ritmo e hierarquia Lysandja.
          </p>
          <p className="text-[13px] text-[var(--lys-ink-40)] mt-6">
            TODO: integrar conteudo oficial do Journal Lysandja.
          </p>
        </div>
      </div>
    </article>
  );
}
