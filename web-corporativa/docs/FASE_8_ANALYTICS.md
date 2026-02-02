# 📊 FASE 8: ANALÍTICA - GA4 + SEARCH CONSOLE

**Objetivo:** Medir conversiones (leads) y mejorar SEO en tiempo real.

---

## 1. SETUP GA4 (Google Analytics)

### 1.1 Crear Propiedad GA4

1. Ve a [https://analytics.google.com](https://analytics.google.com)
2. Haz clic en **"Crear propiedad"**
3. Llena los datos:
   - **Nombre de propiedad:** `CUSTOM AI LAB SOLUTIONS`
   - **Zona horaria:** `America/Buenos_Aires` (o tu zona)
   - **Divisa:** `USD`
4. En la siguiente pantalla, crea una **Stream Web**:
   - **URL:** `https://customailab.com`
   - **Nombre:** `Web Principal`
5. Google te generará un **MEASUREMENT_ID** (formato: `G-XXXXXXXXXX`)
6. **Copia ese ID**

### 1.2 Agregar MEASUREMENT_ID a Variables de Entorno

En tu archivo `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Reinicia el servidor:**
```bash
npm run dev
```

---

## 2. EVENTOS CONFIGURADOS

Todos los eventos se tracking automáticamente en `lib/gtag.ts`. Aquí está la lista:

### 📋 Catálogo de Eventos

| Evento | Dónde se trackea | Parámetros | Propósito |
|--------|------------------|-----------|----------|
| **`lead_submit`** | Form contacto (submit exitoso) | email_provided, company, audit_type | Medir leads capturados |
| **`click_whatsapp`** | Botones "Contactar por WhatsApp" | source (header/footer/page), label | Top-of-funnel awareness |
| **`click_calendar`** | Links a Calendly | source (página, CTA) | Engagement avanzado |
| **`service_view`** | Páginas `/servicios/*` | service_id, service_name | Entender qué servicios interesan |
| **`click_cta`** | Botones principales CTA | cta_text, location | Medir conversiones globales |
| **`blog_view`** | Posts `/blog/[slug]` | slug, title, category | Content engagement |
| **`form_error`** | Validaciones fallidas en form | form_name, error_message | Diagnosticar fricciones |
| **`external_link`** | Links a otros sitios (blogs, etc.) | url, label | Entender salidas |

---

## 3. INTEGRACIÓN EN CÓDIGO

### 3.1 Trackear Lead Submit (✅ HECHO)

**Archivo:** `app/(site)/contacto/contacto-client.tsx`

Cuando el formulario se envía exitosamente:

```typescript
import { trackLeadSubmit, trackFormError } from '@/lib/gtag'

// En el handleSubmit:
if (error) {
  trackFormError('contacto', errorMsg)
}

// Después de POST exitoso:
trackLeadSubmit({
  email: formData.email,
  company: formData.company,
  auditType: formData.auditType,
})
```

**Resultado en GA4:** El evento `lead_submit` aparecerá con:
- `email_provided: true`
- `company: [valor]`
- `audit_type: [ia-procesos|chatbots|desarrollo-web|...]`

---

### 3.2 Trackear WhatsApp Clicks

Agregar a cualquier botón WhatsApp:

```typescript
import { trackWhatsAppClick } from '@/lib/gtag'

<a 
  href="https://wa.me/YOUR_NUMBER"
  onClick={() => trackWhatsAppClick('hero')}
>
  Contactar por WhatsApp
</a>
```

Fuentes sugeridas: `hero`, `header`, `footer`, `service-page`, `blog`, `cta-section`

---

### 3.3 Trackear Calendar Clicks

```typescript
import { trackCalendarClick } from '@/lib/gtag'

<a 
  href="https://calendly.com/ecoailab/15min"
  onClick={() => trackCalendarClick('contact-form')}
>
  Agendar Call
</a>
```

---

### 3.4 Trackear Service Views

En `app/(site)/servicios/[service]/page.tsx`:

```typescript
'use client'

import { useEffect } from 'react'
import { trackServiceView } from '@/lib/gtag'

export default function ServicePage({ params }) {
  useEffect(() => {
    trackServiceView(
      params.service,
      'Automatización de Procesos con IA' // Título del servicio
    )
  }, [params.service])

  return (/* content */)
}
```

---

### 3.5 Trackear Blog Views

En `app/blog/[slug]/page.tsx`:

```typescript
'use client'

import { useEffect } from 'react'
import { trackBlogView } from '@/lib/gtag'

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)

  useEffect(() => {
    if (post) {
      trackBlogView(post.slug, post.title, post.category)
    }
  }, [post])

  return (/* content */)
}
```

---

## 4. VERIFICAR EVENTOS EN GA4

### 4.1 Real-Time Monitoring

1. En GA4 dashboard, ve a **Eventos en tiempo real**
2. Abre tu sitio en navegador
3. Submit el form de contacto
4. Deberías ver `lead_submit` aparecer en ~2-3 segundos

### 4.2 Verificar Event Parameters

1. Ve a **Administración > Eventos personalizados**
2. Busca `lead_submit`
3. Verifica que capture: `email_provided`, `company`, `audit_type`

---

## 5. GOOGLE SEARCH CONSOLE

### 5.1 Crear Propiedad

1. Ve a [https://search.google.com/search-console](https://search.google.com/search-console)
2. Haz clic en **"Agregar propiedad"**
3. Selecciona **Propiedad URL** (no dominio)
4. Ingresa: `https://customailab.com`

### 5.2 Verificar Ownership

Opciones (en orden de preferencia):

**Opción A: Etiqueta HTML (Más rápido)**
1. Google te da: `<meta name="google-site-verification" content="..."/>`
2. Agrégala en `app/layout.tsx` dentro del `<head>`
3. Click "Verificar"

**Opción B: Archivo HTML**
1. Descarga el archivo
2. Colócalo en `public/` (root del proyecto)
3. Click "Verificar"

### 5.3 Enviar Sitemap

1. Dentro de Search Console, ve a **Sitemaps**
2. Ingresa: `https://customailab.com/sitemap.xml`
3. Click "Enviar"
4. Espera 24-48h para que Google crawlee

### 5.4 Monitorear Indexación

Después de enviar sitemap:

1. Ve a **Cobertura** en Search Console
2. Verifica que todas las URLs de tu sitio aparezcan en:
   - ✅ "Válido con advertencias" o "Válido" (OK)
   - ❌ "Excluido" (revisar por qué)
   - ❌ "Error" (arreglar urgente)

URLs esperadas:
- `/`
- `/sobre-nosotros`
- `/servicios`
- `/servicios/ia-procesos`
- `/servicios/chatbots-agentes`
- `/servicios/desarrollo-web-app-ia`
- `/casos`
- `/blog`
- `/blog/post-1`
- `/blog/post-2`
- ... (todas las posts)
- `/contacto`

### 5.5 Monitorear Rendimiento

En Search Console > **Rendimiento**:

- **Impresiones:** Cuántas veces apareció tu sitio en búsquedas
- **Clicks:** Cuántos clics recibiste
- **CTR (Click-Through Rate):** Porcentaje de impresiones que generaron clicks
- **Posición promedio:** En qué posición apareció (2.0 = primer resultado, 5.0 = página 1 posición 5)

**Targets para CUSTOM AI LAB:**
- Mes 1: 50+ impresiones
- Mes 2: 200+ impresiones
- Mes 3: 500+ impresiones

---

## 6. DASHBOARD DE MÉTRICAS

### En GA4, crea un Dashboard personalizado para monitorear:

**Conversiones:**
- Lead Submissions (últimos 7 días)
- Conversion Rate (leads / sesiones)
- Email Validation Errors (form_error)

**Engagement:**
- WhatsApp Clicks (por fuente: hero, header, footer)
- Calendar Clicks
- Service Views (cuál es el servicio más visto)
- Blog Views (qué post genera más tráfico)

**Technical:**
- Sesiones únicas
- Usuarios nuevos
- Bounce Rate
- Session Duration

---

## 7. INTEGRACIONES FUTURAS

### En Roadmap (NO IMPLEMENTAR AÚN):

- [ ] CRM connector: Auto-crear contacto en HubSpot/Pipedrive cuando llega lead
- [ ] Email trigger: Enviar correo interno cuando llega lead
- [ ] Slack notification: Notificar en Slack cuando hay lead
- [ ] Retargeting: Pixel de Facebook/Google Ads para re-enganche
- [ ] Heatmap: Hotjar/Clarity para ver dónde hacen click

---

## 8. CHECKLIST IMPLEMENTACIÓN

### Fase 8.1: Infrastructure (✅ DONE)
- [x] Crear `lib/gtag.ts` con 8 tracking functions
- [x] Agregar GA4 script a `app/layout.tsx`
- [x] Agregar `NEXT_PUBLIC_GA_ID` a `.env.local`

### Fase 8.2: Events Integration (🔄 IN PROGRESS)
- [x] `lead_submit` en contacto form
- [ ] `click_whatsapp` en todos los botones WhatsApp
- [ ] `click_calendar` en todos los links Calendly
- [ ] `service_view` en páginas de servicios
- [ ] `blog_view` en posts del blog
- [ ] `form_error` en validaciones (✅ YA EN FORM)

### Fase 8.3: Search Console (⏳ TODO)
- [ ] Crear propiedad en Search Console
- [ ] Verificar ownership
- [ ] Enviar sitemap.xml
- [ ] Monitorear cobertura e indexación

### Fase 8.4: Monitoring & Optimization (⏳ TODO)
- [ ] Verificar eventos en GA4 Real-Time
- [ ] Crear Dashboard personalizado
- [ ] Establecer alerts para anomalías
- [ ] Reportes semanales de leads & engagement

---

## 9. TROUBLESHOOTING

### GA4 no trackea eventos

**Problema:** Submit el form pero no aparece `lead_submit` en Real-Time

**Soluciones:**
1. Verifica que `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` en `.env.local`
2. Reinicia servidor: `npm run dev`
3. Abre DevTools (F12) > Console, busca errores
4. Verifica que `gtag.js` está cargado: busca `google-analytics.com` en Network tab
5. En Console, ejecuta: `window.gtag('event', 'test_event')` - debería aparecer en GA4 en 2-3s

### Eventos trackean pero no aparecen parámetros

**Problema:** Ver `lead_submit` pero sin `email_provided`, `company`, etc.

**Solución:** GA4 puede tardar 24h en procesar parámetros nuevos. Mientras tanto:
1. Ve a **Administración > Eventos personalizados**
2. Crea evento personalizado manualmente
3. Mapea parámetros al evento

---

## 10. RECURSOS

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Event Builder](https://ga-dev-tools.web.app/ga4/event-builder/)
- [Search Console Help](https://support.google.com/webmasters)
- [Next.js gtag Integration](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)

---

**Última actualización:** Feb 2, 2026  
**Estado:** Fase 8 en progreso  
**Próximo paso:** Integrar tracking en todas las páginas y Search Console setup
