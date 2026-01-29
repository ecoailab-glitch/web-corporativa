# 🚀 Setup Next.js - Web Corporativa

## ⚙️ Entorno de Desarrollo

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:3000
```

### Comandos Disponibles

```bash
npm run dev          # Desarrollo (hot reload)
npm run build        # Build para producción
npm start            # Correr build de producción
npm run lint         # Verificar ESLint
npm run lint:fix     # Arreglar automáticamente errores
npm run format       # Formatear con Prettier
npm run format:check # Verificar formato
```

---

## 📁 Estructura del Proyecto

```
web-corporativa/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout (HTML, metadata)
│   ├── globals.css                   # Estilos globales
│   ├── buttons.css                   # Estilos de botones
│   └── (site)/                       # Grupo de rutas (layout wrapper)
│       ├── layout.tsx                # Layout con Header/Footer
│       ├── page.tsx                  # Home /
│       ├── servicios/
│       │   ├── page.tsx              # /servicios (índice)
│       │   ├── ia-procesos/
│       │   │   └── page.tsx          # /servicios/ia-procesos
│       │   ├── chatbots-agentes/
│       │   │   └── page.tsx          # /servicios/chatbots-agentes
│       │   └── desarrollo-web-app-ia/
│       │       └── page.tsx          # /servicios/desarrollo-web-app-ia
│       ├── sobre-nosotros/
│       │   └── page.tsx              # /sobre-nosotros
│       └── contacto/
│           └── page.tsx              # /contacto
│
├── components/                       # Componentes reusables
│   ├── Header.tsx
│   ├── Header.module.css
│   ├── Footer.tsx
│   ├── Footer.module.css
│   ├── FAQ.tsx
│   └── FAQ.module.css
│
├── docs/                             # Documentación
│   ├── SITEMAP.md
│   ├── COPY_WEB_V1.md
│   ├── SEO_RULES.md
│   ├── KEYWORDS.md
│   ├── DEFINITION_OF_DONE.md
│   └── KPIs.md
│
├── package.json                      # Dependencias
├── tsconfig.json                     # Configuración TypeScript
├── next.config.ts                    # Configuración Next.js
├── .eslintrc.json                    # ESLint
├── .prettierrc                       # Prettier
├── .gitignore
└── README.md
```

---

## 🎨 Estilos y CSS

### Sistema de Estilos
- **Global**: `app/globals.css` (variables CSS, utilidades)
- **Componentes**: CSS Modules (`*.module.css`)
- **Buttons**: `app/buttons.css` (reutilizable)

### Variables CSS Disponibles

```css
--color-primary: #0066ff        /* Azul principal */
--color-secondary: #f0f2f5      /* Gris claro */
--color-dark: #1a1a1a           /* Negro */
--color-light: #ffffff          /* Blanco */
--color-text: #333333           /* Texto oscuro */
--color-border: #e0e0e0         /* Bordes */
--spacing-xs: 0.25rem           /* 4px */
--spacing-sm: 0.5rem            /* 8px */
--spacing-md: 1rem              /* 16px */
--spacing-lg: 1.5rem            /* 24px */
--spacing-xl: 2rem              /* 32px */
--spacing-2xl: 3rem             /* 48px */
```

### Utilidades Disponibles

```html
<div class="container">            <!-- Max 1200px, centrado -->
<section class="section">           <!-- Padding vertical -->
<section class="section-light">     <!-- Fondo gris -->
<section class="section-dark">      <!-- Fondo oscuro, texto claro -->
<button class="btn btn-primary">    <!-- Botón azul -->
<button class="btn btn-secondary">  <!-- Botón gris -->
<button class="btn btn-outline">    <!-- Botón outline -->
```

---

## 🔧 Configuración

### TypeScript
- `tsconfig.json` configurado con paths: `@/*` → raíz del proyecto
- Strict mode activado

### ESLint
- Extends `next/core-web-vitals`
- React Hooks rules
- TypeScript strict

### Prettier
- Print width: 100 caracteres
- Single quotes
- Trailing commas: es5
- Semicolons: true

---

## 📝 Convenciones de Código

### Nombres de Archivos
- Componentes: `PascalCase` (Header.tsx)
- Módulos CSS: `kebab-case.module.css` (header.module.css)
- Páginas: `page.tsx` (convención Next.js)
- Layouts: `layout.tsx` (convención Next.js)

### Componentes
- `'use client'` al inicio si usan hooks/eventos
- Importar de forma relativa: `from '@/components/...'`
- Props tipadas con TypeScript

### Estructura de Páginas
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Título | EcoAI Lab',
  description: 'Descripción (160 chars)',
}

export default function PageName() {
  return (
    <div>
      {/* Contenido */}
    </div>
  )
}
```

---

## 🚀 Próximos Pasos

### Fase 1 (Ahora)
- [x] Scaffold Next.js
- [x] Estructura de carpetas
- [x] Componentes base
- [x] ESLint + Prettier

### Fase 2 (Próximo)
- [ ] Completar contenido de páginas (copy de COPY_WEB_V1.md)
- [ ] Styling avanzado
- [ ] Responsive design
- [ ] Imágenes y assets

### Fase 3
- [ ] SEO técnico (meta tags, schema.org)
- [ ] Form de contacto (backend)
- [ ] Analytics (Google Analytics 4)
- [ ] Performance optimization

### Fase 4
- [ ] Testing (unit + e2e)
- [ ] Deployment
- [ ] Monitoring
- [ ] Continuous deployment

---

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

## 🔗 Links Útiles

- **Repo**: https://github.com/ecoailab-glitch/web-corporativa
- **Copy**: [docs/COPY_WEB_V1.md](docs/COPY_WEB_V1.md)
- **SEO**: [docs/SEO_RULES.md](docs/SEO_RULES.md)
- **Keywords**: [docs/KEYWORDS.md](docs/KEYWORDS.md)

---

**Estado**: Scaffold completado ✅  
**Última actualización**: 29 de Enero de 2026
