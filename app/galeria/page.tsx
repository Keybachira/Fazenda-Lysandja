"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryImages } from "@/content/gallery";
import { Section, Eyebrow, Display, ScrollReveal } from "@/components/ui";

const aspectClasses = [
  "aspect-[4/5]",
  "aspect-[16/11]",
  "aspect-[3/4]",
];

export default function GaleriaPage() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((a) => (a !== null ? (a - 1 + galleryImages.length) % galleryImages.length : null)), []);
  const next = useCallback(() => setActive((a) => (a !== null ? (a + 1) % galleryImages.length : null)), []);

  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Header */}
      <Section bleed className="pt-[120px] pb-8 bg-[var(--lys-paper-2)] border-b border-[var(--lys-line)]">
        <div className="container-lys">
          <ScrollReveal direction="up">
            <Eyebrow>Galeria</Eyebrow>
            <Display as="h1" className="mt-3 text-[clamp(48px,7vw,84px)]">
              Uma exposição<br />fotográfica.
            </Display>
          </ScrollReveal>
        </div>
      </Section>

      {/* Masonry grid */}
      <Section>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, i) => (
            <ScrollReveal key={`${src}-${i}`} direction="up" delay={i * 0.05}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-[14px] border border-[var(--lys-line)] text-left"
              >
                <div className={`w-full ${aspectClasses[i % 3]}`}>
                  <Image
                    src={src}
                    alt={`Galeria Lysandja ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] tracking-[0.12em] uppercase font-semibold text-[var(--lys-verde)] opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  Ver →
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-[var(--lys-verde)]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 h-10 w-10 rounded-full bg-white text-[var(--lys-verde)] grid place-items-center text-[14px] font-bold hover:bg-[var(--lys-paper)] transition-colors z-10"
            aria-label="Fechar"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 text-white grid place-items-center text-[18px] hover:bg-white/40 transition-colors z-10"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 text-white grid place-items-center text-[18px] hover:bg-white/40 transition-colors z-10"
            aria-label="Próxima"
          >
            ›
          </button>
          <div className="relative max-h-[86vh] max-w-[92vw] aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[active]}
              alt={`Galeria Lysandja ${active + 1}`}
              fill
              sizes="92vw"
              className="object-contain rounded-xl shadow-2xl"
              priority
            />
          </div>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-[12px] tracking-[0.12em] uppercase">
            {active + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </div>
  );
}
