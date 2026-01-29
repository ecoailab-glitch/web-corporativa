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

## 📐 Estructura H1/H2 Específica por Página

### Home (/)
```
H1: Automatiza tu empresa con IA. Reduce costos, genera ingresos.
  H2: El problema: Tu empresa se queda atrás con procesos manuales
  H2: Nuestra solución: IA que funciona. Desde el día 1.
  H2: Cómo funciona: 3 pasos hacia la transformación
  H2: Resultado: Qué consigues implementando IA con nosotros
  H2: Servicios: Nuestro expertise
  H2: Por qué EcoAI Lab: Casos de éxito
  H2: Preguntas frecuentes
  H2: ¿Listo para empezar?
```

### /servicios (Índice)
```
H1: Servicios de IA para empresas
  H2: 1. Automatización inteligente de procesos
  H2: 2. Agentes IA conversacionales 24/7
  H2: 3. Desarrollo web y app con IA integrada
  H2: Por qué elegir EcoAI Lab
  H2: Proceso: De la idea a la producción
  H2: Preguntas frecuentes
```

### /servicios/ia-procesos
```
H1: Automatiza procesos empresariales con IA
  H2: El problema: Tareas manuales que consumen recursos
  H2: Nuestra solución: Automación inteligente 24/7
  H2: Beneficios principales
  H2: Cómo funciona: Integración sin complejidad
  H2: Casos de éxito (o sector-específicos)
  H2: Resultados: ROI medible en 90 días
  H2: Preguntas frecuentes
  H2: ¿Listo para empezar? → CTA Auditoría
```

### /servicios/chatbots-agentes
```
H1: Agentes IA que atienden tu negocio 24/7
  H2: El problema: Saturación de tickets, costo por contacto alto
  H2: Nuestra solución: Agentes conversacionales que resuelven realmente
  H2: Beneficios principales
  H2: Cómo funciona: Integración con tu CRM/API
  H2: Casos de éxito (o industria-específicos)
  H2: Resultados: 60-80% de consultas resueltas automáticamente
  H2: Preguntas frecuentes
  H2: ¿Listo para empezar? → CTA Demostración
```

### /servicios/desarrollo-web-app-ia
```
H1: Aplicaciones inteligentes. Desde cero o en tu producto.
  H2: El problema: Competidores con IA ya te llevan ventaja
  H2: Nuestra solución: IA embedded en tu aplicación
  H2: Beneficios principales
  H2: Cómo funciona: Stack moderno, deployment en 4-6 semanas
  H2: Casos de éxito (o ejemplos de features IA)
  H2: Resultados: Users happier, retention +30-50%
  H2: Preguntas frecuentes
  H2: ¿Listo para empezar? → CTA Consulta
```

### /sobre-nosotros
```
H1: Equipo especializado en IA práctica
  H2: Nuestra historia
  H2: Misión y valores
  H2: El equipo: Quiénes somos
  H2: Experiencia y casos
  H2: Por qué confiar en nosotros
  H2: Contacto
```

### /casos (o /metodologia)
```
H1: Casos de éxito: Cómo implementamos IA
  H2: Metodología: De la auditoría a la producción
  H2: Caso 1: [Sector] - Resultado X
  H2: Caso 2: [Sector] - Resultado X
  H2: Caso 3: [Sector] - Resultado X
  H2: Próximos pasos
```

### /contacto
```
H1: Solicita tu auditoría IA gratuita (15 min)
  H2: Cómo te ayudamos
  H2: Formulario de contacto (form)
  H2: Información de contacto (email, teléfono)
  H2: Preguntas frecuentes
```

---

## Tracking y Analytics
- ✅ Google Analytics 4
- ✅ Google Search Console
- ✅ Seguimiento de CTAs
- ✅ Eventos: clicks en CTA, formularios, downloads

