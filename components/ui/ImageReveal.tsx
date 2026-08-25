"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  clipPath?: string;
  scale?: [number, number];
  duration?: number;
  as?: "div" | "figure";
}

export function ImageReveal({
  children,
  className = "",
  clipPath = "inset(100% 0 0 0)",
  scale = [1.12, 1],
  duration = 0.8,
  as = "div",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath, scale: scale[0] },
        {
          clipPath: "inset(0% 0 0 0)",
          scale: scale[1],
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [prefersReducedMotion, clipPath, scale, duration]);

  const Tag = as;

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      {children}
    </Tag>
  );
}
