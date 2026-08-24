import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Standard easing ── */
export const EASE = {
  editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
  smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
  out: "power3.out",
  outSoft: "power2.out",
} as const;

export const DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  reveal: 0.8,
} as const;

/* ── Reveal: title by clipPath ── */
export function revealTitle(
  el: Element,
  trigger: Element,
  opts?: Partial<gsap.TweenVars>
) {
  return gsap.fromTo(
    el,
    { clipPath: "inset(100% 0 0 0)" },
    {
      clipPath: "inset(0% 0 0 0)",
      duration: DURATION.reveal,
      ease: EASE.out,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      ...opts,
    }
  );
}

/* ── Reveal: text by y + opacity ── */
export function revealText(
  el: Element,
  trigger: Element,
  opts?: Partial<gsap.TweenVars>
) {
  return gsap.fromTo(
    el,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: DURATION.slow,
      ease: EASE.outSoft,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      ...opts,
    }
  );
}

/* ── Reveal: accent (kicker/number) by fade + scale ── */
export function revealAccent(
  el: Element,
  trigger: Element,
  opts?: Partial<gsap.TweenVars>
) {
  return gsap.fromTo(
    el,
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: DURATION.normal,
      ease: EASE.outSoft,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      ...opts,
    }
  );
}

/* ── Reveal: CTA by y + opacity ── */
export function revealCTA(
  el: Element,
  trigger: Element,
  opts?: Partial<gsap.TweenVars>
) {
  return gsap.fromTo(
    el,
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: DURATION.normal,
      ease: EASE.outSoft,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      ...opts,
    }
  );
}

/* ── Parallax: scrub y translation ── */
export function parallaxY(
  el: Element,
  container: Element,
  offset = "-8%"
) {
  return gsap.to(el, {
    y: offset,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
}

/* ── Image reveal: clipPath + scale ── */
export function imageReveal(
  el: Element,
  trigger: Element,
  opts?: {
    from?: string;
    to?: string;
    scale?: [number, number];
    duration?: number;
  }
) {
  const { from = "inset(100% 0 0 0)", to = "inset(0% 0 0 0)", scale = [1.1, 1], duration = DURATION.reveal } = opts || {};

  return gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  }).fromTo(el, { clipPath: from, scale: scale[0] }, { clipPath: to, scale: scale[1], duration, ease: EASE.out });
}

/* ── Image depth: subtle scale + translate on scroll ── */
export function imageDepth(
  el: Element,
  container: Element,
  opts?: { scale?: [number, number]; y?: string }
) {
  const { scale = [1, 1.08], y = "-30px" } = opts || {};

  return gsap.fromTo(
    el,
    { scale: scale[0], y: "0px" },
    {
      scale: scale[1],
      y,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );
}

/* ── Ghost word parallax ── */
export function ghostWordParallax(el: Element, container: Element, speed = "15%") {
  return gsap.to(el, {
    y: speed,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
  });
}

/* ── Section entrance — staggered children ── */
export function sectionEntrance(
  container: Element,
  selector: string,
  opts?: Partial<gsap.TweenVars>
) {
  const els = container.querySelectorAll(selector);
  if (!els.length) return;

  return gsap.fromTo(
    els,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: DURATION.slow,
      stagger: 0.08,
      ease: EASE.out,
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      ...opts,
    }
  );
}

/* ── Horizontal scroll — GSAP ScrollTrigger pin ── */
export function horizontalScroll(
  container: Element,
  track: Element,
  opts?: { snap?: boolean }
) {
  const totalWidth = (track as HTMLElement).scrollWidth;
  const viewportWidth = window.innerWidth;

  return gsap.to(track, {
    x: -(totalWidth - viewportWidth),
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => `+=${totalWidth - viewportWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      ...(opts?.snap ? { snap: 1 / (totalWidth / viewportWidth - 1) } : {}),
    },
  });
}
