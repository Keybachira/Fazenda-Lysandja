"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function Counter({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: end,
        duration,
        ease: "power2.out",
        snap: { val: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          el.textContent = `${prefix}${decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val)}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [end, suffix, prefix, decimals, duration, prefersReducedMotion]);

  // If reduced motion, just show the final value immediately
  const displayValue = prefersReducedMotion
    ? `${prefix}${decimals > 0 ? end.toFixed(decimals) : end}${suffix}`
    : `${prefix}0${suffix}`;

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
