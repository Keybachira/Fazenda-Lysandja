"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prevPathname = useRef(pathname);
  const [displayPath, setDisplayPath] = useState(pathname);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    if (isAnimating.current) return;

    isAnimating.current = true;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!overlay || !content) {
      isAnimating.current = false;
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (lenis) lenis.stop();

    const tl = gsap.timeline({
      onComplete: () => {
        prevPathname.current = pathname;
        isAnimating.current = false;
        if (lenis) lenis.start();
      },
    });

    // Phase 1: overlay rises + content fades
    tl.set(overlay, { clipPath: "inset(100% 0 0 0)" });
    tl.to(overlay, {
      clipPath: "inset(0% 0 0 0)",
      duration: 0.45,
      ease: "power3.inOut",
    });
    tl.to(
      content,
      {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
      },
      "<",
    );

    // Phase 2: swap content at peak
    tl.call(() => {
      setDisplayPath(pathname);
      window.scrollTo(0, 0);
    });

    // Phase 3: overlay descends + content reveals
    tl.to(overlay, {
      clipPath: "inset(0% 0% 100% 0)",
      duration: 0.45,
      ease: "power3.inOut",
    });
    tl.fromTo(
      content,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "<0.1",
    );

    // Phase 4: reset overlay
    tl.set(overlay, { clipPath: "inset(100% 0 0 0)" });
  }, [pathname]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[70] pointer-events-none"
        style={{ clipPath: "inset(100% 0 0 0)" }}
      >
        <div className="h-full w-full bg-[var(--lys-dark-warm)]" />
        {/* Madeira gold accent line at the top */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-[var(--lys-madeira)]/40" />
      </div>

      {/* Content */}
      <div ref={contentRef}>{children}</div>
    </>
  );
}
