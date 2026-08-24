"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { galleryImages } from "@/content/gallery";

export default function GaleriaPage() {
  const [active, setActive] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const img = imgRef.current;
    const btn = btnRef.current;
    if (!overlay || !img || !btn) return;

    if (active) {
      gsap.set(overlay, { opacity: 0 });
      gsap.set(img, { scale: 0.92, opacity: 0 });
      gsap.set(btn, { opacity: 0, y: -10 });

      const tl = gsap.timeline();
      tl.to(overlay, { opacity: 1, duration: 0.35, ease: "power2.out" });
      tl.to(img, { scale: 1, opacity: 1, duration: 0.45, ease: "power2.out" }, "<0.1");
      tl.to(btn, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "<0.15");
    }
  }, [active]);

  const close = () => {
    const overlay = overlayRef.current;
    const img = imgRef.current;
    if (!overlay || !img) {
      setActive(null);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => setActive(null),
    });
    tl.to(img, { scale: 0.92, opacity: 0, duration: 0.3, ease: "power2.in" });
    tl.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.in" }, "<");
  };

  return (
    <div className="bg-[var(--lys-paper)]">
      {/* Hero */}
      <div className="relative pt-[120px] pb-12 md:pb-16 bg-[var(--lys-paper-2)] overflow-hidden">
        <div className="container-lys relative z-10">
          <p className="text-[12px] tracking-[0.32em] uppercase text-[var(--lys-madeira)]">Galeria</p>
          <h1 className="mt-3 font-display text-[clamp(48px,7vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase text-[var(--lys-verde)]">
            Uma exposicao<br />fotografica.
          </h1>
        </div>
      </div>

      <div className="container-lys py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, i) => (
            <button
              key={`${src}-${i}`}
              onClick={() => setActive(src)}
              className="card-hover card-shine group relative block w-full overflow-hidden rounded-[14px] border border-[var(--lys-line)] text-left"
            >
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src={src}
                alt={`Galeria Lysandja ${i + 1}`}
                className={`w-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[16/11]" : "aspect-[3/4]"}`}
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] tracking-[0.12em] uppercase font-semibold text-[var(--lys-verde)] opacity-0 group-hover:opacity-100 transition-opacity">
                Ver &rarr;
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[60] bg-[var(--lys-dark-warm)]/95 backdrop-blur flex items-center justify-center p-4 md:p-8"
          onClick={close}
        >
          <button
            ref={btnRef}
            onClick={close}
            className="absolute right-6 top-6 h-10 w-10 rounded-full bg-white text-[var(--lys-verde)] grid place-items-center"
            aria-label="Fechar"
          >
            ✕
          </button>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={active}
            alt="Imagem ampliada"
            className="max-h-[86vh] max-w-[92vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
