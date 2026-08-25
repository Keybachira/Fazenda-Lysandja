# Fazenda Lysandja — Informações Pendentes para o Site

Data de verificação: 2026-08-25

---

## 1. DADOS DE CONTACTO (app/contacto/page.tsx)

| Campo | Estado Actual | O que falta |
|-------|--------------|-------------|
| Email | `info@fazendalysandja.co.ao` | ✅ Pode manter ou actualizar |
| Telefone | `+244 XXX XXX XXX` | ❌ **Número real necessário** |
| Morada | `Cuanza Sul, Angola` | ⚠️ Completar com endereço detalhado (distrito, km, etc.) |

---

## 2. MÉTRICAS / NÚMEROS DA FAZENDA

### Homepage — Secção 05 (Impacto)
| Métrica | Estado Actual | O que falta |
|---------|--------------|-------------|
| Hectares | `—` | ❌ Número oficial de hectares cultiváveis |
| Pessoas | `—` | ❌ Número de pessoas na equipa + famílias |
| Culturas | `—` | ❌ Número de cadeias produtivas (actualmente 3: milho, feijão, soja) |
| Projectos | `—` | ❌ Número de projectos de sustentabilidade/comunidade |

### Página Impacto (app/impacto/page.tsx)
| Métrica | Estado Actual | O que falta |
|---------|--------------|-------------|
| Hectares | `—` | ❌ Idêntico acima |
| Pessoas | `—` | ❌ Idêntico acima |
| Culturas | `—` | ❌ Idêntico acima |
| Projectos | `—` | ❌ Idêntico acima |

---

## 3. CONTEÚDO DAS CULTURAS (content/production.ts)

| Cultura | Kicker | Descripção actual | Notas |
|---------|--------|-------------------|-------|
| Milho | `01 / Cultura` | OK editorial | Verificar se há mais culturas para adicionar |
| Feijão | `02 / Cultura` | OK editorial | Verificar dados reais (variedades, área, produção) |
| Soja | `03 / Cultura` | OK editorial | Verificar dados reais |

**TODO no ficheiro:** `// TODO: substituir por dados oficiais. Mock editorial para desenhar layout.`

---

## 4. MAPA DA FAZENDA (content/farm.ts)

| Hotspot | Descripção actual | O que falta |
|---------|-------------------|-------------|
| Produção | "Campos cultivados com manejo regenerativo" | ⚠️ Verificar coordenadas (x%, y%) no mapa |
| Irrigação | "Gestão hídrica eficiente" | ⚠️ Verificar coordenadas |
| Pecuária | "Integração lavoura-pecuária" | ⚠️ Verificar coordenadas |
| Reserva | "Áreas de preservação" | ⚠️ Verificar coordenadas |

**TODO no ficheiro:** `// TODO: inserir dados oficiais — mock inicial`

### Factos da fazenda
- Descripção: "Território diverso com solo fértil, água e horizonte aberto"
- **TODO:** `// TODO: substituir por métricas oficiais quando disponíveis`

---

## 5. JOURNAL / ARTIGOS (content/journal.ts)

| Artigo | Categoria | Estado |
|--------|-----------|--------|
| Antes da colheita | Vida na Fazenda | ✅ Placeholder editorial OK |
| A água que conta | Sustentabilidade | ✅ Placeholder editorial OK |
| Mãos da terra | Pessoas | ✅ Placeholder editorial OK |

**TODO no [slug]:** `TODO: integrar conteúdo oficial do Journal Lysandja.`

**Futuro:** Integrar CMS (Supabase / headless) para gestão dinâmica dos artigos.

---

## 6. METADATA / SEO (app/layout.tsx)

| Campo | Estado Actual | Verificar |
|-------|--------------|-----------|
| Título | `Fazenda Lysandja — Onde a terra ganha propósito.` | ✅ |
| Descrição | `agricultura moderna, natureza angolana...` | ✅ |
| metadataBase | `https://lysandja.ao` | ⚠️ Confirmar domínio correcto |
| OpenGraph | Configurado | ⚠️ Falta OG image (adicionar `/og.png` ou similar) |
| Favicon | Usando default do Next.js | ⚠️ Adicionar favicon personalizado |

---

## 7. IMAGENS

| Item | Estado | Acção |
|------|--------|-------|
| Logo principal (`public/logo.png`) | Existe | ✅ |
| Logo France (`public/logo-fr.png`) | Existe | ✅ |
| Logo full (`public/logo-full.jpeg`) | Existe | ✅ |
| Favicon | Falta | ❌ Criar e colocar em `public/favicon.ico` |
| OG Image | Falta | ❌ Criar `public/og.png` (1200x630px) |
| Imagens de conteúdo | Unsplash (externas) | ⚠️ Trocar por fotos reais da fazenda quando disponíveis |

---

## 8. CONTACTO / FORMULÁRIO

O formulário em `/contacto` está visualmente pronto mas **não tem backend**:
- ❌ Integrar serviço de envio (EmailJS, Resend, API própria, etc.)
- ❌ Adicionar validação server-side
- ❌ Adicionar confirmação de envio ao utilizador

---

## 9. DOMÍNIO / HOSTING

| Item | Estado |
|------|--------|
| Domínio | `lysandja.ao` (em metadataBase) |
| Hosting | Não configurado |
| SSL | Não configurado |
| Deploy | Não configurado |

---

## 10. CHECKLIST GERAL

- [ ] Telefone real
- [ ] Endereço completo
- [ ] Métricas (hectares, pessoas, projectos)
- [ ] Favicon personalizado
- [ ] OG Image
- [ ] Confirmar domínio `lysandja.ao`
- [ ] Integrar formulário de contacto
- [ ] Fotos reais da fazenda (substituir Unsplash)
- [ ] Conteúdo oficial do Journal
- [ ] Configurar hosting + deploy
- [ ] Testar em mobile (responsividade)
- [ ] Adicionar Google Analytics / Plausible
