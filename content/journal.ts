export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Agricultura"
    | "Pessoas"
    | "Tecnologia"
    | "Sustentabilidade"
    | "Vida na Fazenda";
  date: string;
  image: string;
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "antes-da-colheita",
    title: "Antes da colheita",
    excerpt:
      "Um dia dentro da operação Lysandja — do nascer do sol à leitura dos talhões.",
    category: "Vida na Fazenda",
    date: "2026-04-12",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "agua-que-conta",
    title: "A água que conta",
    excerpt:
      "Como gerir cada gota quando o clima muda e a responsabilidade aumenta.",
    category: "Sustentabilidade",
    date: "2026-03-28",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "maos-da-terra",
    title: "Mãos da terra",
    excerpt: "Histórias de quem cultiva — rostos, saberes e futuro.",
    category: "Pessoas",
    date: "2026-03-10",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop",
  },
];
