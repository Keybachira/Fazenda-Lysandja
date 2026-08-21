export type Culture = {
  slug: string;
  n: string;
  title: string;
  kicker: string;
  desc: string;
  image: string;
};

// TODO: substituir por dados oficiais. Mock editorial para desenhar layout.
export const cultures: Culture[] = [
  {
    slug: "milho",
    n: "01",
    title: "Milho",
    kicker: "01 / Cultura",
    desc: "Base da produção — manejo preciso, sementes adaptadas ao clima angolano e colheita no tempo certo. Da terra para a mesa e para o mundo.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "feijao",
    n: "02",
    title: "Feijão",
    kicker: "02 / Cultura",
    desc: "Proteína da terra. Ciclos curtos, fixação de nitrogênio e rotação que regenera o solo.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "soja",
    n: "03",
    title: "Soja",
    kicker: "03 / Cultura",
    desc: "Escala e qualidade para cadeias de alto padrão — com rastreabilidade do campo ao destino.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80&auto=format&fit=crop",
  },
];

export const processo = [
  { n: "01", title: "Preparar", desc: "Solo vivo: análise, correção e cobertura. O futuro começa abaixo da superfície." },
  { n: "02", title: "Plantar", desc: "Janela certa, densidade certa, sementes certas — tecnologia a serviço do tempo da natureza." },
  { n: "03", title: "Cuidar", desc: "Irrigação, monitorização e manejo integrado. Cada talhão observado com atenção." },
  { n: "04", title: "Colher", desc: "Colheita no ponto ótimo — respeito ao grão, à fibra e à fibra humana que a torna possível." },
  { n: "05", title: "Transformar", desc: "Beneficiamento e armazenamento com padrão de qualidade para chegar longe." },
  { n: "06", title: "Entregar", desc: "Da nossa terra para o mundo — com origem, confiança e propósito." },
] as const;
