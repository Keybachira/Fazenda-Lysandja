export type FarmHotspot = {
  id: string;
  x: number; // 0-100
  y: number;
  label: string;
  desc: string;
};

// TODO: inserir dados oficiais — mock inicial
export const farmHotspots: FarmHotspot[] = [
  { id: "producao", x: 28, y: 34, label: "Produção", desc: "Campos cultivados com manejo regenerativo e rotação de culturas." },
  { id: "irrigacao", x: 62, y: 42, label: "Irrigação", desc: "Gestão hídrica eficiente — cada gota importa." },
  { id: "pecuaria", x: 48, y: 68, label: "Pecuária", desc: "Integração lavoura-pecuária com bem-estar animal." },
  { id: "reserva", x: 78, y: 22, label: "Reserva", desc: "Áreas de preservação — solo vivo e biodiversidade." },
];

export const farmFacts = {
  terra: "Território diverso com solo fértil, água e horizonte aberto — base para uma agricultura preparada para o futuro.",
  // TODO: substituir por métricas oficiais quando disponíveis
  statsPlaceholder: true,
};
