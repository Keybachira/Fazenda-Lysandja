import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] grid place-items-center bg-[var(--lys-paper)] pt-[80px]">
      <div className="text-center px-6">
        <p className="font-display text-[88px] leading-none tracking-[-0.06em] text-[var(--lys-verde)]/[0.08]">
          404
        </p>
        <h1 className="font-display text-[32px] uppercase tracking-[-0.03em] text-[var(--lys-verde)] -mt-2">
          Página não encontrada
        </h1>
        <p className="mt-3 text-[14px] text-[var(--lys-ink-60)]">
          O caminho que procura ainda não foi cultivado.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-[var(--lys-verde)] px-7 py-3 text-[11px] tracking-[0.16em] uppercase font-semibold text-white"
        >
          Voltar à home
        </Link>
      </div>
    </div>
  );
}
