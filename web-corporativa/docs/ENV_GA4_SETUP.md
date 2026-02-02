# FASE 8: VARIABLES DE ENTORNO - SETUP GUÍA

Una vez que tengas el `MEASUREMENT_ID` de Google Analytics, aquí está cómo configurar tu entorno:

## 1. Obtener MEASUREMENT_ID de GA4

1. Ve a [https://analytics.google.com](https://analytics.google.com)
2. Selecciona tu propiedad "CUSTOM AI LAB SOLUTIONS"
3. Ve a **Administración > Detalles de la propiedad**
4. Copia el **ID de medición** (formato: `G-XXXXXXXXXX`)

## 2. Actualizar .env.local

Abre `web-corporativa/.env.local` y agrega:

```env
# Google Analytics GA4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Nota:** Reemplaza `G-XXXXXXXXXX` con tu ID real.

## 3. Reiniciar Servidor

```bash
# En la carpeta web-corporativa/
npm run dev
```

El servidor detectará automáticamente `NEXT_PUBLIC_GA_ID` y comenzará a trackear eventos.

## 4. Verificar Que Funciona

1. Abre [http://localhost:3000](http://localhost:3000)
2. Ve a [http://localhost:3000/contacto](http://localhost:3000/contacto)
3. Llena y envía el formulario
4. Ve a GA4 > **Eventos en tiempo real**
5. Deberías ver `lead_submit` en 2-3 segundos

Si no aparece:
- Verifica que `NEXT_PUBLIC_GA_ID` esté en `.env.local` (sin espacios)
- Abre DevTools (F12) > Console, busca errores
- Abre DevTools > Network, busca `google-analytics` y asegúrate que cargue

## 5. Eventos que se Trackean Automáticamente

Una vez que `NEXT_PUBLIC_GA_ID` está configurado:

- ✅ **`lead_submit`** - Cuando alguien envía el form de contacto
- ✅ **`click_calendar`** - Cuando hacen click en link de Calendly
- ✅ **`blog_view`** - Cuando ven un post del blog
- ✅ **`form_error`** - Cuando hay error de validación
- ✅ **`service_view`** - Cuando ven página de servicio
- ✅ **`click_whatsapp`** - Cuando hacen click en WhatsApp (próxima actualización)

Ver detalles en [docs/FASE_8_ANALYTICS.md](./FASE_8_ANALYTICS.md)

---

**Última actualización:** Feb 2, 2026
