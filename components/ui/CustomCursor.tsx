"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const ctx = gsap.context(() => {
      // Track mouse position
      const pos = { x: 0, y: 0 };
      const mouse = { x: 0, y: 0 };

      const onMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };

      const onDown = () => setClicking(true);
      const onUp = () => setClicking(false);

      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mousedown", onDown);
      window.addEventListener("mouseup", onUp);

      // Smooth follow with GSAP ticker
      gsap.ticker.add(() => {
        pos.x += (mouse.x - pos.x) * 0.15;
        pos.y += (mouse.y - pos.y) * 0.15;

        gsap.set(dot, { x: mouse.x, y: mouse.y, xPercent: -50, yPercent: -50 });
        gsap.set(ring, { x: pos.x, y: pos.y, xPercent: -50, yPercent: -50 });
      });

      // Hover detection
      const onOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest("a, button, [data-cursor-hover]")) {
          setHovering(true);
        }
      };
      const onOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest("a, button, [data-cursor-hover]")) {
          setHovering(false);
        }
      };

      document.addEventListener("mouseover", onOver);
      document.addEventListener("mouseout", onOut);

      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mousedown", onDown);
        window.removeEventListener("mouseup", onUp);
        document.removeEventListener("mouseover", onOver);
        document.removeEventListener("mouseout", onOut);
      };
    }, dot);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden>
      {/* Inner dot — sparkle */}
      <div
        ref={dotRef}
        className={`absolute rounded-full transition-transform duration-200 ${
          clicking
            ? "w-2 h-2 bg-[var(--lys-rosa)]"
            : hovering
              ? "w-3 h-3 bg-[var(--lys-rosa)]"
              : "w-2 h-2 bg-[var(--lys-verde)]"
        }`}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`absolute rounded-full border transition-all duration-300 ${
          hovering
            ? "w-12 h-12 border-[var(--lys-rosa)]/50 bg-[var(--lys-rosa)]/5"
            : clicking
              ? "w-8 h-8 border-[var(--lys-rosa)]/60"
              : "w-8 h-8 border-[var(--lys-verde)]/30"
        }`}
      />

      {/* Hover sparkle particles */}
      {hovering && (
        <>
          <div className="absolute w-1 h-1 rounded-full bg-[var(--lys-rosa)]/40 animate-ping" style={{ left: "50%", top: "50%" }} />
          <div className="absolute w-0.5 h-0.5 rounded-full bg-[var(--lys-madeira)]/60 animate-pulse" style={{ left: "30%", top: "40%" }} />
          <div className="absolute w-0.5 h-0.5 rounded-full bg-[var(--lys-rosa)]/30 animate-pulse" style={{ left: "70%", top: "60%" }} />
        </>
      )}
    </div>
  );
}
