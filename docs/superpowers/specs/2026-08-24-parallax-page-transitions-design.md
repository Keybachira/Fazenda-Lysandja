# Design: Parallax Cinematográfico + Transições de Página

**Data:** 2026-08-24
**Estado:** Aprovado
**Stack:** GSAP + ScrollTrigger + Lenis (já instalados)

---

## Resumo

Upgrade da UI/UX do site Fazenda Lysandja com parallax profundo em todas as secções, scroll-triggered reveals, transições cinematográficas entre páginas, e micro-interações melhoradas. Foco em experiência cinematográfica premium, assumindo hardware moderno.

---

## 1. Hero — Parallax de fundo + reveal de conteúdo

### Comportamento
- **Imagem de fundo:** `y: 0 → -15%` ao longo de todo o viewport (parallax lento via `scrub: true`)
- **Título:** surge linha a linha com `y: 60 → 0` + `opacity: 0 → 1`, stagger 0.1s
- **CTA + parágrafo:** surge após o título com fade suave, delay 0.6s
- **Scroll indicator:** pulse contínuo no opacity, fade out ao scrollar 100px

### Técnica
- Um `ScrollTrigger` no `<section>` do Hero com `scrub: 1` para parallax da imagem
- Timeline separada no `useEffect` para reveal inicial (sem scroll, só mount)
- Integrar com Lenis: usar `lenis.on('scroll', ScrollTrigger.update)` e `ScrollTrigger.addEventListener('refresh', lenis.resize)`

### Ficheiros
- `components/hero/Hero.tsx` — adicionar ScrollTrigger ao existing gsap.context

---

## 2. Scroll Reveals — Padrão por secção

### Padrão geral (todas as secções da homepage)
| Elemento | Animação | Duração | Delay |
|----------|----------|---------|-------|
| Títulos (h2) | `clipPath: inset(100% 0 0 0) → inset(0% 0 0 0)` | 0.8s | 0 |
| Parágrafos | `y: 40 → 0` + `opacity: 0 → 1` | 0.6s | 0.1s |
| Números de secção (01, 02...) | `opacity: 0 → 1` + `scale: 0.9 → 1` | 0.5s | 0 |
| Kicker labels (rosa) | `opacity: 0 → 1` | 0.4s | 0 |
| Links/CTAs | `y: 20 → 0` + `opacity: 0 → 1` | 0.5s | 0.2s |

### Configuração ScrollTrigger
```
start: "top 80%"
toggleActions: "play none none reverse"
```

### Ficheiros
- `app/page.tsx` — cada secção (`<section>`) recebe um ref + ScrollTrigger

---

## 3. Image Parallax

### Valores por contexto
| Contexto | Offset Y | Sensação |
|----------|----------|----------|
| Imagens principais (secções 01, 02) | `-8%` | Suave, elegante |
| Imagens secundárias (overlapped) | `-12%` | Profundidade |
| Imagem vertical secção 04 (Pessoas) | `-15%` | Drama, escala |
| Cards de produção (secção 03) | `-5%` | Subtil |
| Footer wordmark | `+20% → 0` | Peso, elegância |

### Técnica
- Cada imagem com `data-parallax` attribute
- ScrollTrigger com `scrub: 1` para suavidade ligada ao scroll
- `will-change: transform` apenas durante animação (remover após)

---

## 4. Secção 05 — Impacto: Counter Animation

### Comportamento
- Números animam de `0` para o valor final quando a secção entra no viewport
- Formato: `1.200` → animação de 1.5s com easing `power2.out`
- Quando não há dado (`"—"`), manter como está (placeholder)
- Quando houver dados reais, animar com `gsap.to` num counter object

### Técnica
- `ScrollTrigger` com `once: true` para disparar só na primeira vez
- `gsap.to` com `snap: { innerText: 1 }` para counter inteiro

---

## 5. Transições de Página — Cinematográficas

### Comportamento
1. Utilizador clica num link de navegação
2. Overlay escuro (`var(--lys-verde)`) sobe de baixo para cima: `clipPath: inset(100% 0 0 0) → inset(0% 0 0 0)` em 0.5s
3. Conteúdo antigo: `opacity: 1 → 0` em simultâneo
4. Navegação Next.js muda a rota
5. Overlay desce: `clipPath: inset(0% 0 0 0) → inset(0% 100% 0 0)` em 0.5s
6. Conteúdo novo faz reveal (título primeiro, depois body)

### Técnica
- Componente `<PageTransition>` no `app/layout.tsx`
- Usar `usePathname()` para detectar mudanças de rota
- GSAP timeline controlada por state
- Lenis: pausar durante transição (`lenis.stop()` / `lenis.start()`)

### Ficheiros
- `components/PageTransition.tsx` (novo)
- `app/layout.tsx` — envolver `{children}` com `<PageTransition>`

---

## 6. Cards — Hover + Stagger Reveal

### Cards de produção (secção 03)
- **Hover:** imagem `scale(1.02)`, link "Explorar →" ganha `gap: 1 → 2`
- **Reveal:** cards surgem com stagger 0.08s entre cada um

### Cards de journal
- **Hover:** sombra suave (`box-shadow` transition), imagem `scale(1.03)`
- **Reveal:** stagger 0.1s

### Técnica
- CSS transitions para hover (já existe parcialmente)
- GSAP ScrollTrigger para reveal com `stagger` no `.fromTo` dos cards

---

## 7. Navegação — Indicator animado

### Comportamento
- Underline rosa que se move entre links activos
- Animação de `left` + `width` com GSAP
- Scroll: transição de background mais suave

### Técnica
- `gsap.to` no indicator element baseado no link activo
- Detectar link activo com `usePathname()`

### Ficheiros
- `components/navigation/Navigation.tsx` — adicionar indicator animado

---

## 8. Galeria — Lightbox melhorado

### Comportamento
- **Abertura:** imagem expande de thumbnail com `fromTo` no position/size
- **Fechamento:** reverso da animação
- **Navegação:** setas + swipe gestures (mobile)
- **Teclado:** Escape para fechar, setas para navegar

### Técnica
- GSAP para animação de abertura/fechamento
- Touch events para swipe
- `keydown` listener para teclado

### Ficheiros
- `app/galeria/page.tsx` — refatorar lightbox existente

---

## 9. Footer — Reveal + Parallax

### Comportamento
- Conteúdo do footer faz `opacity: 0 → 1` quando entra no viewport
- Wordmark gigante "LYSANDJA" tem parallax lento `y: 20% → 0`

### Ficheiros
- `components/footer/Footer.tsx` — adicionar ScrollTrigger

---

## Integração com Lenis

### Padrão (aplicar em todos os componentes)
```tsx
// No useEffect de cada componente com ScrollTrigger
useEffect(() => {
  const lenis = (window as any).__lenis;
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update);
    ScrollTrigger.addEventListener('refresh', () => lenis.resize());
  }
  return () => {
    if (lenis) {
      lenis.off('scroll', ScrollTrigger.update);
    }
  };
}, []);
```

---

## Performance

- Usar `will-change: transform` apenas durante animação
- Preferir `transform` e `opacity` (GPU-accelerated)
- Evitar `width`/`height` animations
- `scrup: 1` para suavidade (interpolação entre frames)
- `ScrollTrigger.config({ limitCallbacks: true })` para reduzir callbacks

---

## Redução de movimento

Respeitar `prefers-reduced-motion: reduce` — desactivar todas as animações de scroll e parallax, manter apenas reveals básicos com fade.

---

## Ordem de implementação

1. Configurar ScrollTrigger + Lenis integration (foundação)
2. Hero parallax + reveal
3. Scroll reveals nas secções da homepage
4. Image parallax
5. Counter animation (secção 05)
6. Cards hover + stagger
7. Navegação indicator
8. Page transitions
9. Galeria lightbox
10. Footer reveal
