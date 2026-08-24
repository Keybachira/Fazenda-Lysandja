"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export function LinhaDaTerra() {
  const lineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const line = lineRef.current;
    if (!line || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate the line's width from 0% to 100% as you scroll
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 h-[2px] pointer-events-none origin-left"
      aria-hidden
    >
      <div
        ref={lineRef}
        className="h-full will-change-transform"
        style={{
          background: "linear-gradient(90deg, var(--lys-verde) 0%, var(--lys-rosa) 50%, var(--lys-madeira) 100%)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
