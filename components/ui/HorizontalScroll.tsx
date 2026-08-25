"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  snap?: boolean;
}

export function HorizontalScroll({
  children,
  className = "",
  snap = false,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(track, {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth - viewportWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          ...(snap
            ? { snap: 1 / ((totalWidth - viewportWidth) / viewportWidth) }
            : {}),
        },
      });
    }, container);

    return () => ctx.revert();
  }, [prefersReducedMotion, snap]);

  if (prefersReducedMotion) {
    return (
      <div className={`overflow-x-auto ${className}`}>
        <div className="flex gap-6 p-6">{children}</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex gap-6 will-change-transform"
        style={{ width: "max-content" }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Individual horizontal card ── */
interface HorizontalCardProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
}

export function HorizontalCard({
  children,
  className = "",
  width = "520px",
}: HorizontalCardProps) {
  return (
    <div className={`shrink-0 ${className}`} style={{ width }}>
      {children}
    </div>
  );
}
