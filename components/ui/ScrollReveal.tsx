"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { EASE, DURATION } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside" | "main" | "nav" | "header" | "footer";
  id?: string;
}

export function ScrollReveal({ children, className = "", as = "div", id }: ScrollRevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Titles: clipPath reveal
      const titles = el.querySelectorAll("[data-reveal-title]");
      if (titles.length) {
        gsap.fromTo(
          titles,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: DURATION.reveal,
            stagger: 0.05,
            ease: EASE.out,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Paragraphs: y + opacity
      const paragraphs = el.querySelectorAll("[data-reveal-text]");
      if (paragraphs.length) {
        gsap.fromTo(
          paragraphs,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: DURATION.slow,
            stagger: 0.08,
            ease: EASE.outSoft,
            delay: 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Section numbers + kickers: fade + scale
      const accents = el.querySelectorAll("[data-reveal-accent]");
      if (accents.length) {
        gsap.fromTo(
          accents,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: DURATION.normal,
            stagger: 0.05,
            ease: EASE.outSoft,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Links/CTAs: y + opacity
      const ctas = el.querySelectorAll("[data-reveal-cta]");
      if (ctas.length) {
        gsap.fromTo(
          ctas,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: DURATION.normal,
            stagger: 0.06,
            ease: EASE.outSoft,
            delay: 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Images: parallax (scrub y)
      const images = el.querySelectorAll("[data-parallax]");
      images.forEach((img: Element) => {
        const htmlEl = img as HTMLElement;
        const offset = htmlEl.dataset.parallax || "-8%";
        gsap.to(htmlEl, {
          y: offset,
          ease: "none",
          scrollTrigger: {
            trigger: htmlEl.closest("[data-parallax-container]") || htmlEl.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Image depth: subtle scale + translate on scroll
      const depthImages = el.querySelectorAll("[data-image-depth]");
      depthImages.forEach((img: Element) => {
        const htmlEl = img as HTMLElement;
        const container = htmlEl.closest("[data-parallax-container]") || htmlEl.parentElement;
        if (!container) return;
        const scaleMax = parseFloat(htmlEl.dataset.imageDepth || "1.08");
        gsap.fromTo(
          htmlEl,
          { scale: 1, y: "0px" },
          {
            scale: scaleMax,
            y: "-30px",
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // Ghost word parallax
      const ghostWords = el.querySelectorAll("[data-ghost-parallax]");
      ghostWords.forEach((word: Element) => {
        const htmlEl = word as HTMLElement;
        const speed = htmlEl.dataset.ghostParallax || "15%";
        gsap.to(htmlEl, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const Tag = as;

  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
