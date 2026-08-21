"use client";
import { useState } from "react";
import { galleryImages } from "@/content/gallery";

export default function GaleriaPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-[var(--lys-paper)]">
      <div className="pt-[120px] pb-8">
        <div className="container-lys">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--lys-rosa)] font-semibold">Galeria</p>
          <h1 className="mt-3 font-display text-[48px] md:text-[72px] leading-[0.85] tracking-[-0.04em] uppercase text-[var(--lys-verde)]">
            Uma exposição<br />fotográfica.
          </h1>
        </div>
      </div>

      <div className="container-lys pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, i) => (
            <button
              key={`${src}-${i}`}
              onClick={() => setActive(src)}
              className="group relative block w-full overflow-hidden rounded-[14px] border border-[var(--lys-line)] text-left"
            >
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src={src}
                alt={`Galeria Lysandja ${i + 1}`}
                className={`w-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[16/11]" : "aspect-[3/4]"}`}
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] tracking-[0.12em] uppercase font-semibold text-[var(--lys-verde)] opacity-0 group-hover:opacity-100 transition-opacity">
                Ver →
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[60] bg-[var(--lys-verde)]/95 backdrop-blur flex items-center justify-center p-4 md:p-8" onClick={() => setActive(null)}>
          <button
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 h-10 w-10 rounded-full bg-white text-[var(--lys-verde)] grid place-items-center"
            aria-label="Fechar"
          >
            ✕
          </button>
          {/* eslint-disable @next/next/no-img-element */}
          <img src={active} alt="Imagem ampliada" className="max-h-[86vh] max-w-[92vw] object-contain rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
