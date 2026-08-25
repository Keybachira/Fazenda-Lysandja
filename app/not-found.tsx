import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] grid place-items-center overflow-hidden bg-[var(--lys-paper)] pt-[80px]">
      {/* textura de terra, muito subtil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--lys-verde) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative text-center px-6 max-w-md">
        {/* sulco: linhas de arado que terminam abruptamente */}
        <svg
          viewBox="0 0 200 64"
          className="mx-auto mb-6 w-[180px] h-auto motion-safe:animate-[furrow_1.2s_ease-out]"
          aria-hidden="true"
        >
          {[10, 22, 34, 46, 58].map((y, i) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2={100 - i * 6}
              y2={y}
              stroke="var(--lys-verde)"
              strokeOpacity={0.16}
              strokeWidth="1.5"
              strokeDasharray="3 4"
              strokeLinecap="round"
            />
          ))}
          {/* rebento no ponto onde o sulco para */}
          <g transform="translate(100 34)">
            <path
              d="M0 14 C0 6 -6 2 -6 -4 C-6 2 0 4 0 14Z"
              fill="var(--lys-verde)"
              fillOpacity="0.7"
            />
            <path
              d="M0 14 C0 6 6 2 6 -4 C6 2 0 4 0 14Z"
              fill="var(--lys-verde)"
              fillOpacity="0.9"
            />
            <line
              x1="0"
              y1="14"
              x2="0"
              y2="22"
              stroke="var(--lys-verde)"
              strokeWidth="1.5"
            />
          </g>
        </svg>

        <h1 className="font-display text-[28px] uppercase tracking-[-0.03em] text-[var(--lys-verde)]">
          Página não encontrada
        </h1>
        <p className="mt-3 text-[14px] leading-relaxed text-[var(--lys-ink-60)]">
          O caminho que procura ainda não foi cultivado.
          <br />
          Volte à terra conhecida.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-[var(--lys-verde)] px-7 py-3 text-[11px] tracking-[0.16em] uppercase font-semibold text-white transition-transform duration-200 hover:scale-[1.03] hover:brightness-110"
        >
          Voltar à home
        </Link>
      </div>

      <style jsx global>{`
        @keyframes furrow {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
