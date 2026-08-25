"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 300);
      return () => clearTimeout(timer);
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onComplete?.();
      },
    });

    // 1. LYSANDJA letters clip-path reveal
    tl.fromTo(
      "[data-preloader-text]",
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power3.out" },
      0,
    );

    // 2. Subtle line accent appears
    tl.fromTo(
      "[data-preloader-line]",
      { scaleX: 0 },
      { scaleX: 1, duration: 0.6, ease: "power2.out" },
      0.4,
    );

    // 3. Hold for a beat
    tl.to({}, { duration: 0.5 });

    // 4. Everything fades out
    tl.to(el, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [prefersReducedMotion, onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--lys-dark)]"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4">
        <p
          data-preloader-text
          className="font-display text-[clamp(36px,6vw,72px)] tracking-[0.12em] uppercase text-white/90"
          style={{ clipPath: "inset(0 0 100% 0)" }}
        >
          Lysandja
        </p>
        <div
          data-preloader-line
          className="h-[1px] w-16 bg-[var(--lys-madeira)]"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}
