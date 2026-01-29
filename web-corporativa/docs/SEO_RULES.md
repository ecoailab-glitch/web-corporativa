# SEO RULES - Web Corporativa v1

## Reglas Generales

### Estructura de Contenido
- ✅ **1 H1 por página** (es el título principal)
- ✅ H2, H3... solo para subsecciones
- ✅ Máximo 1 H1, mínimo 1 H1 (obligatorio)

### URLs y Slugs
- ✅ Slugs en **minúsculas**
- ✅ Separador: **guión** `-` (no guion bajo `_`)
- ✅ URLs amigables: `/servicios/ia-procesos` ❌ `/servicios/IA_Procesos`
- ✅ Rutas cortas y descriptivas
- ✅ Sin stopwords innecesarios

### Meta Tags
- ✅ **Title**: 50-60 caracteres (incluir keyword principal)
- ✅ **Description**: 150-160 caracteres (CTR, keyword, CTA implícita)
- ✅ **Keywords**: 3-5 keywords relevantes (secundario)
- ✅ **Open Graph**: og:title, og:description, og:image, og:url

### Imágenes
- ✅ **Alt text** en TODAS las imágenes
- ✅ Alt text descriptivo (SEO + accesibilidad)
- ✅ Optimizar peso (< 200KB para web)
- ✅ Formato: WebP o JPEG (no PNG para fotos)

### Contenido
- ✅ **Keyword principal** en H1
- ✅ **Keyword principal** en los primeros 100 palabras
- ✅ **Densidad keyword**: 1-2% (natural)
- ✅ **Largo mínimo**: 300 palabras (mejor 600+)
- ✅ **Headings**: estructura jerárquica clara

### Schema.org
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EcoAI Lab",
  "url": "https://www.ecoailab.com",
  "logo": "URL_LOGO",
  "description": "Descripción corta",
  "sameAs": [
    "https://linkedin.com/...",
    "https://twitter.com/...",
    "https://github.com/..."
  ]
}
```

**Por página de servicio**: Schema de `Service` o `Product`
**Por blog post**: Schema de `Article` con author, datePublished, etc.

### Enlaces Internos
- ✅ Anclas descriptivas (no "click aquí")
- ✅ Enlazando palabras clave relevantes
- ✅ Máximo 5-7 enlaces internos por página
- ✅ Links a páginas relacionadas

### Performance (Core Web Vitals)
- ✅ **LCP (Largest Contentful Paint)**: < 2.5s
- ✅ **FID (First Input Delay)**: < 100ms
- ✅ **CLS (Cumulative Layout Shift)**: < 0.1
- Verificar con Google PageSpeed Insights

### Robots y Crawlabilidad
- ✅ robots.txt configurado
- ✅ sitemap.xml actualizado
- ✅ No bloquear con noindex accidentalmente
- ✅ Canonicales si hay contenido duplicado

---

## Checklist por Tipo de Página

### 📄 Páginas Estáticas (Home, Servicios, Sobre)
- [ ] 1 H1
- [ ] 2-3 H2
- [ ] Meta title (50-60 caracteres)
- [ ] Meta description (150-160 caracteres)
- [ ] Mínimo 300 palabras
- [ ] CTA visible (arriba, centro, pie)
- [ ] Schema.org (Organization o Service)
- [ ] Imágenes con alt text
- [ ] Enlaces internos (3-5)

### 📝 Blog Posts
- [ ] 1 H1 (el título)
- [ ] Keyword principal en H1
- [ ] 800-2000 palabras
- [ ] H2 para secciones (3-5)
- [ ] Imágenes (1 cada 300 palabras)
- [ ] Schema Article
- [ ] Meta description con keyword
- [ ] Enlaces internos (5-10)
- [ ] CTA al final (contacto, suscribir)
- [ ] Date published (visible)

### 🎯 Páginas de Servicios
- [ ] 1 H1
- [ ] Propuesta de valor clara (primeros 100 palabras)
- [ ] Beneficios (H2)
- [ ] Casos de uso (H2)
- [ ] Precios o próximos pasos (H2)
- [ ] CTA principal visible (mín 2 lugares)
- [ ] Schema Service/Product
- [ ] Meta description con CTA implícita

---

## Tracking y Analytics
- ✅ Google Analytics 4
- ✅ Google Search Console
- ✅ Seguimiento de CTAs
- ✅ Eventos: clicks en CTA, formularios, downloads

