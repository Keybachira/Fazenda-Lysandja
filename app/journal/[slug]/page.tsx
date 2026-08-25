import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/content/journal";
import { Section, Eyebrow, Display, Lead, ScrollReveal } from "@/components/ui";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Journal" };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <article className="bg-[var(--lys-paper)]">
      <Section bleed className="pt-[112px] pb-10 bg-[var(--lys-paper-2)] border-b border-[var(--lys-line)]">
        <div className="container-lys">
          <ScrollReveal direction="up">
            <Link href="/journal" className="text-[11px] tracking-[0.16em] uppercase text-[var(--lys-ink-40)] hover:text-[var(--lys-verde)] transition-colors">
              ← Voltar ao Journal
            </Link>
            <Eyebrow className="mt-6">{post.category} · {post.date}</Eyebrow>
            <Display as="h1" className="mt-3 text-[clamp(42px,6vw,64px)] max-w-[800px]">
              {post.title}
            </Display>
            <Lead className="mt-4 max-w-[640px]">{post.excerpt}</Lead>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <ScrollReveal direction="up">
          <div className="overflow-hidden rounded-[20px] aspect-[16/9] bg-neutral-200 relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>
        <div className="prose prose-neutral max-w-[720px] mx-auto mt-10 pb-16">
          <p className="text-[15px] leading-8 text-[var(--lys-ink-60)]">
            Conteúdo completo em preparação editorial. Esta estrutura já suporta CMS futuro (Supabase / headless). Por enquanto, demonstra tipografia, ritmo e hierarquia Lysandja.
          </p>
          <p className="text-[13px] text-[var(--lys-ink-40)] mt-6">
            TODO: integrar conteúdo oficial do Journal Lysandja.
          </p>
        </div>
      </Section>
    </article>
  );
}
