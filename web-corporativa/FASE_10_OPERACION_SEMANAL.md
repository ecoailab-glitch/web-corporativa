# FASE 10: Operación Semanal - Máquina de Leads

## 🎯 Objetivo
Convertir el sitio en una máquina de generación de leads consistente mediante contenido regular y optimización basada en datos.

---

## 📋 Rutina Semanal (Cada Lunes)

### 1️⃣ GENERACIÓN DE CONTENIDO (Lunes - 2 horas)
**Responsable:** Manus (o Content Manager)

**Entregables:**
- [ ] 1 Blog Post (800-1500 palabras)
  - Tema: Basado en keywords de Search Console
  - Estructura: Intro → Problema → Solución → CTA
  - Publicar en: `app/(site)/blog/` (ruta automática)
  
- [ ] 3 Copies LinkedIn
  - Formato: Corto, provocativo, engagement-focused
  - Link a blog post o landing page
  - Publicar en horario pico (9-11am, 1-3pm)
  
- [ ] 1 Email Newsletter
  - Enviar a leads acumulados
  - Tema: Resumen semanal o case study
  - CTA: Descarga, webinar, o consulta

**Storage:**
- Blog posts → `/web-corporativa/app/(site)/blog/posts/` (MDX)
- Copies → Archivo: `docs/LINKEDIN_COPIES.md`
- Emails → Archivo: `docs/EMAIL_TEMPLATES.md`

---

### 2️⃣ REVISAR SEARCH CONSOLE (Martes - 30 min)
**Dashboard:** https://search.google.com/search-console

**Métricas a revisar:**
1. **Nuevas queries en crecimiento**
   - Filtro: últimos 28 días
   - Buscar keywords con posición 11-20 (oportunidad de subir a TOP 10)
   - Registrar en: `docs/SEO_TRACKING.md`

2. **Páginas que suben/bajan**
   - Impresiones: ↑ positivo, ↓ revisar
   - CTR: % de clicks vs impresiones
   - Posición promedio: < 5 = excelente, 5-10 = bueno, > 20 = mejorar

**Acciones:**
- Si baja una página → Revisar contenido, actualizar, agregar links internos
- Si sube una query → Crear contenido complementario

---

### 3️⃣ OPTIMIZACIÓN CRO (Miércoles - 1 hora)
**Conversion Rate Optimization**

**Revisar en GA4:**
1. Tasa de conversión por página
2. Tiempo en página
3. Bounce rate

**Si baja conversión (< 2%):**
- [ ] A/B test titular principal
- [ ] Cambiar CTA botón (color, texto, posición)
- [ ] Simplificar formulario (menos campos)
- [ ] Agregar urgency (oferta limitada, "solo 5 spots")

**Ejemplos CTA a probar:**
- "Comenzar Consulta Gratis" vs "Solicitar Demo"
- "Agendar Llamada" vs "Hablar con Experto"
- Color: Verde (conversión) vs Azul (profesional)

---

### 4️⃣ MEDIR LEADS (Jueves - 30 min)
**Tracking semanal**

**Fuentes a monitorear en GA4:**
1. **Conversiones por evento:**
   - `lead_submit`: Formulario contacto
   - `cta_click`: Botones principales
   - `calendar_click`: Agendar
   - `whatsapp_click`: WhatsApp directo

2. **Reporte semanal:**
   - Total leads: ?
   - Tasa conversión: % de visitantes → leads
   - Fuente mejor: ¿Tráfico orgánico, referral, directo?
   - Página mejor: ¿Cuál convierte más?

**Plantilla semanal:**
```
SEMANA: Lunes DD/MM - Domingo DD/MM

LEADS TOTALES: __
├─ Formulario: __
├─ WhatsApp: __
├─ Calendar: __
└─ CTA clicks: __

TRÁFICO:
├─ Visitantes: __
├─ Sesiones: __
└─ Tasa conversión: __% (leads/visitantes)

MEJOR PÁGINA:
├─ URL: __
└─ Conversiones: __

RANKING CAMBIOS:
├─ Mejoraron: __ keywords
├─ Bajaron: __ keywords
└─ Nuevas: __ keywords

ACCIONES PRÓXIMA SEMANA:
- [ ] ...
```

**Storage:** Google Sheet con historial semanal

---

## 📊 DASHBOARDS RECOMENDADOS

### Google Analytics 4 - Vistas recomendadas:
1. **Adquisición → Resumen orgánico**
   - Keywords que traen tráfico

2. **Compromiso → Páginas**
   - Cuáles generan más tiempo en página

3. **Conversiones → Eventos**
   - Total `lead_submit` por semana
   - Fuente del lead

### Google Search Console - Reportes:
1. **Rendimiento**
   - Impresiones, clicks, CTR, posición
   
2. **Cobertura**
   - Errores de indexación

---

## 🎬 PUBLICACIÓN DE BLOG POST

### Proceso técnico:

1. **Crear archivo MDX:**
   ```
   /app/(site)/blog/posts/[slug].mdx
   ```

2. **Estructura front-matter:**
   ```mdx
   ---
   title: "Título del Post"
   slug: "slug-del-post"
   date: "2026-02-02"
   category: "IA" || "Automatización" || "Procesos"
   excerpt: "Resumen corto para preview"
   image: "/images/blog/post.jpg"
   author: "Manus"
   ---
   
   # Contenido aquí
   ```

3. **Push a GitHub:**
   ```bash
   git add app/(site)/blog/posts/
   git commit -m "Blog: Nuevo post - [Título]"
   git push
   ```

4. **Vercel:** Auto-deploy en 2-3 min
5. **GA4:** Trackea automáticamente como `blog_view`

---

## 📈 KPIs OBJETIVO (Fase 10)

| Métrica | Objetivo | Frecuencia |
|---------|----------|-----------|
| Leads/semana | ≥ 5 | Semanal |
| Tasa conversión | ≥ 2% | Semanal |
| Tráfico orgánico | +10% MoM | Mensual |
| Ranking (top 10) | 5+ keywords | Mensual |
| Engagement blog | > 2 min | Semanal |

---

## 🔄 CICLO DE OPTIMIZACIÓN

```
SEMANA 1: Blog + LinkedIn + Email
   ↓
SEMANA 2: Revisar datos + Optimizar
   ↓
SEMANA 3: A/B test nuevo CTA
   ↓
SEMANA 4: Análisis mensual + Ajustes estrategia
   ↓
Repetir → Crecer
```

---

## ⚠️ CHECKLIST SEMANAL

```markdown
# Semana del [FECHA]

## Lunes (Contenido)
- [ ] Blog post escrito y publicado
- [ ] 3 copies LinkedIn programadas
- [ ] Email enviado a lista

## Martes (Search Console)
- [ ] Analizar top queries
- [ ] Identificar keywords en posición 11-20
- [ ] Actualizar `SEO_TRACKING.md`

## Miércoles (CRO)
- [ ] Revisar GA4 conversiones
- [ ] A/B test en ejecución
- [ ] Documentar cambios

## Jueves (Medición)
- [ ] Contar leads totales
- [ ] Completar reporte semanal
- [ ] Actualizar Google Sheet

## Viernes (Planificación)
- [ ] Revisar lecciones aprendidas
- [ ] Planificar semana siguiente
```

---

## 📁 ARCHIVOS PARA MANTENER

1. **`docs/SEO_TRACKING.md`** - Keywords por posición
2. **`docs/LINKEDIN_COPIES.md`** - Banco de copies
3. **`docs/EMAIL_TEMPLATES.md`** - Templates de email
4. **Google Sheet** - Historial semanal de leads
5. **Vercel Analytics** - Tráfico por página

---

## 🎯 PRÓXIMAS FASES

**FASE 11:** Reportes GA4 avanzados + Dashboards personalizados
**FASE 12:** Campañas pagadas (Google Ads, LinkedIn Ads)
**FASE 13:** Automatización de leads (CRM + email sequences)
