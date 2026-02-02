# 🎯 FASE 8: CHECKLIST Y PLAN DE ACCIÓN

## STATUS: 🟡 EN PROGRESO (70% completo)

---

## ✅ YA IMPLEMENTADO

### 1. Infraestructura GA4 (100% ✅)
- [x] Crear `lib/gtag.ts` con 8 funciones de tracking
  - `trackLeadSubmit()` - Leads capturados
  - `trackWhatsAppClick()` - Clicks en WhatsApp
  - `trackCalendarClick()` - Clicks en Calendly
  - `trackServiceView()` - Vistas de servicios
  - `trackBlogView()` - Vistas de blog posts
  - `trackCTAClick()` - Clicks en CTAs
  - `trackFormError()` - Errores de validación
  - `trackExternalLink()` - Links externos

- [x] Agregar GA4 script a `app/layout.tsx`
  - Script `gtag.js` inyectado automáticamente
  - Inicialización condicional con `NEXT_PUBLIC_GA_ID`
  - Flag `anonymize_ip` habilitado por defecto

### 2. Event Integration (80% ✅)
- [x] **Form de contacto** - `trackLeadSubmit()` + `trackFormError()`
- [x] **Blog posts** - `trackBlogView()` en `/blog/[slug]`
- [x] **Service pages** - `trackServiceView()` con wrapper
- [x] **Calendly links** - `trackCalendarClick()` en contacto
- [ ] **WhatsApp buttons** - `trackWhatsAppClick()` (pendiente: scan all files)
- [ ] **Otras páginas** - Otros CTAs secundarios

### 3. Documentación (100% ✅)
- [x] `docs/FASE_8_ANALYTICS.md` - Guía completa (850+ líneas)
  - Setup GA4 step-by-step
  - Catálogo de eventos
  - Integración en código
  - Search Console setup
  - Troubleshooting
  - Dashboard recommendations

- [x] `docs/ENV_GA4_SETUP.md` - Setup rápido variables de entorno

### 4. Components Helpers (100% ✅)
- [x] `components/ServicePageWrapper.tsx` - HOC para tracking de servicios
- [x] `components/TrackingLink.tsx` - Helper para links con tracking

### 5. Git (100% ✅)
- [x] Commit "Fase 8: Analítica GA4 - Event tracking infrastructure completo"

---

## ⏳ PRÓXIMOS PASOS (Usuario + Agent)

### PASO 1: Setup GA4 (Tu acción - 5 min) 🔴 BLOQUEANTE
**Status:** Esperando tu acción

1. Ve a [https://analytics.google.com](https://analytics.google.com)
2. Crea propiedad nueva: "CUSTOM AI LAB SOLUTIONS"
3. Copia el **MEASUREMENT_ID** (formato: `G-XXXXXXXXXX`)
4. Responde en el chat con el ID

**Por qué es crítico:** Sin este ID, GA4 no puede trackear nada.

---

### PASO 2: Configurar Entorno (Tu acción - 1 min)
**Status:** Después de tener MEASUREMENT_ID

En `.env.local` (archivo local en tu máquina):
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Reinicia servidor:
```bash
npm run dev
```

---

### PASO 3: Verificar Eventos (Tu acción - 2 min)
**Status:** Después de configurar env

1. Abre [http://localhost:3000/contacto](http://localhost:3000/contacto)
2. Llena y envía el formulario
3. Abre GA4 > **Eventos en tiempo real**
4. Deberías ver `lead_submit` en 2-3 segundos

Si no aparece → Ver troubleshooting en docs/FASE_8_ANALYTICS.md

---

### PASO 4: WhatsApp Tracking (Agent - 5 min)
**Status:** Pendiente después de PASO 1

Agent debe:
1. Buscar todos los botones/links de WhatsApp en el sitio
2. Agregar `onClick={() => trackWhatsAppClick('source')}`
3. Identificar fuentes: header, footer, hero, service-page, blog, etc.

**Files que probablemente necesiten actualización:**
- components/Header.tsx (si existe nav con WhatsApp)
- components/Footer.tsx
- app/(site)/page.tsx (hero)
- app/(site)/servicios/page.tsx
- Otras páginas principales

---

### PASO 5: Google Search Console Setup (Tu acción - 10 min)
**Status:** Después de PASO 2 (no bloqueante para GA4)

1. Ve a [https://search.google.com/search-console](https://search.google.com/search-console)
2. Crea propiedad URL: `https://customailab.com`
3. Verifica ownership (HTML tag o archivo)
4. Envía sitemap: `https://customailab.com/sitemap.xml`
5. Monitorea "Cobertura" e "Indexación"

**Ver guía completa en:** docs/FASE_8_ANALYTICS.md sección 5

---

### PASO 6: Monitorear & Optimizar (Ongoing)
**Status:** Continuo

**Semana 1:**
- [ ] Verificar que GA4 captura eventos
- [ ] Monitorear Real-Time para ver si hay leads
- [ ] Revisar Search Console: ¿Qué URLs indexó Google?

**Semana 2:**
- [ ] Crear Dashboard personalizado en GA4
- [ ] Identificar qué servicios generan más interés
- [ ] Identificar qué blog posts tienen mejor engagement

**Semana 3+:**
- [ ] Reportes semanales de conversiones
- [ ] Optimizar CTAs basado en datos de clicks
- [ ] Mejorar SEO basado en Search Console insights

---

## 📋 CHECKLIST PARA EL USUARIO

```
FASE 8: ANALYTICS

[ ] Paso 1: Crear propiedad GA4 en Google Analytics
    └─ Obtener MEASUREMENT_ID (G-XXXXXXXXXX)
    └─ Enviar ID al Agent

[ ] Paso 2: Agregar NEXT_PUBLIC_GA_ID a .env.local
    └─ Reiniciar servidor (npm run dev)

[ ] Paso 3: Verificar events en GA4 Real-Time
    └─ Submit form de contacto
    └─ Verificar que aparece "lead_submit"

[ ] Paso 4: Crear propiedad en Google Search Console
    └─ Agregar https://customailab.com
    └─ Verificar ownership
    └─ Enviar sitemap.xml

[ ] Paso 5: Monitorear resultados
    └─ Leads en Firestore + GA4
    └─ URLs indexadas en Search Console
    └─ CTAs más clickeados
```

---

## 📊 MÉTRICAS ESPERADAS (TARGETS)

### GA4 (Después de 30 días)
| Métrica | Target | Realista |
|---------|--------|----------|
| Sesiones únicas | 100+ | Mes 1: 50+ |
| Usuarios nuevos | 80+ | Mes 1: 40+ |
| Lead submissions | 5+ | Depende de tráfico |
| Conversion rate | >2% | Mes 1: 0.5% |
| Avg session duration | 1m 30s+ | Mes 1: 45s |

### Search Console (Después de 30 días)
| Métrica | Target | Realista |
|---------|--------|----------|
| Impresiones | 200+ | Mes 1: 50+ |
| Clicks | 10+ | Mes 1: 2-5 |
| CTR | >3% | Depende de posición |
| Posición promedio | 5-15 | Mes 1: 20+ |
| URLs indexadas | 80%+ | Mes 1: 60-70% |

---

## 🔗 ARCHIVOS CLAVE

**Documentación:**
- [docs/FASE_8_ANALYTICS.md](../../docs/FASE_8_ANALYTICS.md) - Guía completa (850+ líneas)
- [docs/ENV_GA4_SETUP.md](../../docs/ENV_GA4_SETUP.md) - Setup variables de entorno

**Código:**
- [lib/gtag.ts](../../lib/gtag.ts) - 8 funciones de tracking
- [app/layout.tsx](../../app/layout.tsx) - GA4 script injection
- [components/ServicePageWrapper.tsx](../../components/ServicePageWrapper.tsx) - Wrapper para servicios
- [components/TrackingLink.tsx](../../components/TrackingLink.tsx) - Helper para links

**Integración:**
- [app/(site)/contacto/contacto-client.tsx](../../app/(site)/contacto/contacto-client.tsx) - Form tracking
- [app/blog/[slug]/page.tsx](../../app/blog/[slug]/page.tsx) - Blog tracking
- [app/(site)/servicios/ia-procesos/page.tsx](../../app/(site)/servicios/ia-procesos/page.tsx) - Service tracking

---

## 🚨 BLOQUEOS Y RIESGOS

### Bloqueante
- ❌ **MEASUREMENT_ID no configurado** - Sin esto, GA4 no trackea nada
  - **Mitigación:** Usuario debe crear propiedad GA4 (5 min)
  - **Impact:** Sin datos de conversión

### No bloqueante
- ⚠️ **WhatsApp tracking no integrado** - No sabemos cuántos clics hay en botones
  - **Mitigación:** Agent completará en próxima sesión (5 min)
  - **Impact:** Data incompleta de funnel (pero leads capturados OK)

- ⚠️ **Search Console no configurado** - No sabemos indexación
  - **Mitigación:** Usuario puede hacer después (10 min)
  - **Impact:** No monitoreamos SEO, pero sitio funciona normal

---

## 📈 PRÓXIMA FASE

**Fase 9 (Tentativa):** Optimización & Escalabilidad
- [ ] Integrar HubSpot o Pipedrive para CRM
- [ ] Slack notifications cuando llega lead
- [ ] Email automático de followup
- [ ] Retargeting con Facebook/Google Ads
- [ ] Heatmap (Hotjar) para entender UX
- [ ] A/B testing de CTAs y copy

---

**Última actualización:** Feb 2, 2026  
**Status:** Fase 8 en progreso (70% completo)  
**Próxima revisión:** Cuando usuario configure MEASUREMENT_ID
