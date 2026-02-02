# 🎯 QUICK START - FASE 8 ANALYTICS

## ⚡ 3 PASOS PARA ACTIVAR GA4

### 1️⃣ CREAR PROPIEDAD GA4 (5 min)
```
→ Ir a https://analytics.google.com
→ Crear propiedad: "CUSTOM AI LAB SOLUTIONS"
→ Copiar MEASUREMENT_ID (G-XXXXXXXXXX)
→ Enviarme el ID en el chat
```

### 2️⃣ CONFIGURAR ENTORNO (1 min)
```bash
# En tu archivo .env.local local:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Reiniciar servidor:
npm run dev
```

### 3️⃣ VERIFICAR (2 min)
```
→ Abrir http://localhost:3000/contacto
→ Llenar y enviar formulario
→ Ir a GA4 → Eventos en tiempo real
→ Debería aparecer "lead_submit" en 2-3 segundos
```

**✅ ¡LISTO!** Ahora estás midiendo conversiones.

---

## 📊 QUÉ SE TRACKEA AUTOMÁTICAMENTE

| Evento | Dónde | Parámetros |
|--------|-------|-----------|
| `lead_submit` | Form contacto | email_provided, company, audit_type |
| `click_calendar` | Link Calendly | source (contact-form) |
| `blog_view` | Post del blog | slug, title, category |
| `service_view` | Página servicio | service_id, service_name |
| `form_error` | Validación fallida | form_name, error_message |

---

## 🔗 DOCUMENTACIÓN COMPLETA

- **Setup detallado:** [docs/FASE_8_ANALYTICS.md](./FASE_8_ANALYTICS.md) (850+ líneas)
- **Variables de env:** [docs/ENV_GA4_SETUP.md](./ENV_GA4_SETUP.md)
- **Checklist:** [docs/FASE_8_CHECKLIST.md](./FASE_8_CHECKLIST.md)

---

## 🚨 TROUBLESHOOTING

### "No aparece lead_submit en GA4"
1. Verifica que `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` en `.env.local`
2. Reinicia servidor: `npm run dev`
3. Abre DevTools (F12) → Console, busca errores
4. Abre DevTools → Network, busca `google-analytics` debe cargar

### "¿Cómo verifico que el script cargó?"
```javascript
// En DevTools Console:
window.gtag('event', 'test_event')
// Debería aparecer en GA4 en 2-3 segundos
```

---

**¡Adelante! El sistema está 100% listo. Solo falta tu MEASUREMENT_ID.**
