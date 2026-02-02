# Fase 7: Sistema de Leads (CRM Mínimo + Automatización)

**Objetivo**: Capturar leads desde /contacto, validarlos, guardarlos en Firestore y mantener un pipeline en Google Sheets.

**Status**: ✅ Fase 1 (Validación + Firestore) → Implementada  
**Próximos**: Fase 2 (Email) → Fase 3 (Google Sheets Sync)

---

## 1. Formulario Actualizado (`/contacto`)

### Cambios
- ✅ Agregué campo **"Tipo de Auditoría"** (select)
- ✅ Empresa ahora es **obligatoria**
- ✅ Teléfono permanece opcional
- ✅ Form envía a `/api/leads` POST

### Campos del Formulario
```
- Nombre * (required)
- Email * (required, validado)
- Empresa * (required)
- Teléfono (optional)
- Tipo de Auditoría * (select, default: "ia-procesos")
  - IA en Procesos
  - Chatbots y Agentes
  - Desarrollo Web/App + IA
  - Otro (explica en mensaje)
- Mensaje * (required, textarea)
```

### Validación Frontend
- Email formato válido
- Campos obligatorios validados
- UX: Loading state, error messages, success confirmation

---

## 2. Endpoint `/api/leads` (POST)

### URL
```
POST /api/leads
Content-Type: application/json
```

### Body Esperado
```json
{
  "name": "Juan García",
  "email": "juan@empresa.com",
  "company": "Tech Corp",
  "phone": "+34 666 777 888",
  "auditType": "ia-procesos",
  "message": "Queremos automatizar nuestros procesos de validación..."
}
```

### Validación Backend
- Email formato válido (regex)
- Campos requeridos: name, email, company, message
- Trim y lowercase en strings
- Captura IP + User-Agent para tracking

### Response (Success)
```json
{
  "success": true,
  "message": "Lead creado exitosamente",
  "leadId": "ABC123DEF456"
}
```
**Status**: 201 Created

### Response (Error)
```json
{
  "error": "Nombre, email, empresa y mensaje son requeridos"
}
```
**Status**: 400 / 500

---

## 3. Firestore Collection: `leads`

### Schema
```typescript
{
  name: string                    // Juan García
  email: string (lowercase)       // juan@empresa.com
  company: string                 // Tech Corp
  phone: string                   // Optional
  auditType: string               // "ia-procesos" | "chatbots-agentes" | "desarrollo-web-app-ia" | "otro"
  message: string                 // Full message
  status: string                  // "new" | "contacted" | "qualified" | "won" | "lost"
  createdAt: Timestamp            // ISO string
  ipAddress: string               // Para tracking
  userAgent: string               // Browser info
}
```

### Índices Recomendados
1. `status` (ascending) → Filtrar por estado
2. `createdAt` (descending) → Ordenar por fecha
3. `email` (ascending) → Buscar duplicados

---

## 4. Configuración Firebase

### Step 1: Crear Proyecto Firebase
1. Ir a [Firebase Console](https://console.firebase.google.com)
2. Crear nuevo proyecto: `custom-ai-lab-leads`
3. Habilitar Firestore Database

### Step 2: Service Account
1. Project Settings > Service Accounts
2. Generate private key (JSON)
3. Copiar valores:
   - `project_id`
   - `client_email`
   - `private_key`

### Step 3: Variables de Entorno
Crear `.env.local`:
```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-email@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

⚠️ **Importante**: El `private_key` debe conservar `\n` en lugar de saltos reales.

---

## 5. Pipeline en Google Sheets (Manual v1)

### Estructura de la Hoja
```
| Nombre       | Email              | Empresa    | Teléfono      | Auditoría     | Fecha       | Estado      |
|------------- |------------------- |----------- |--------------- |-------------- |------------ |------------|
| Juan García  | juan@empresa.com   | Tech Corp  | +34 666 777 888| IA Procesos   | 2026-02-02  | new        |
| María López  | maria@startup.com  | StartupXYZ | +34 999 888 777| Chatbots      | 2026-02-02  | contacted  |
```

### Estados
- **new** → Lead acaba de entrar, sin contacto aún
- **contacted** → Ya contactamos (email, call, etc)
- **qualified** → Cliente mostró interés real
- **won** → Ganamos el proyecto / Firma propuesta
- **lost** → Cliente decidió no continuar

### Cómo Usar
1. Crear Google Sheet privado
2. Llenar manualmente los datos desde Firestore (v1)
3. Actualizar estado según pipeline interno

---

## 6. Flujo Completo (v1)

```
Usuario llena /contacto
        ↓
Frontend valida campos
        ↓
POST /api/leads
        ↓
Backend valida email, requeridos
        ↓
Guardar en Firestore collection "leads"
        ↓
Retornar 201 + leadId
        ↓
Frontend muestra success toast
        ↓
Reset formulario
        ↓
🎯 Lead capturado, status: "new"
```

---

## 7. Próximos Pasos (v2+)

### Fase 7.2: Email Automático
- [ ] Enviar email de confirmación al lead
- [ ] Enviar notificación al equipo CUSTOM AI LAB
- [ ] Usar Resend o SendGrid

**Código estimado**:
```typescript
// En /api/leads POST
const response = await resend.emails.send({
  from: 'noreply@customailab.com',
  to: formData.email,
  subject: 'Auditoría IA gratuita - CUSTOM AI LAB',
  html: template(formData.name),
})
```

### Fase 7.3: Google Sheets Sync
- [ ] Webhook que sincronice Firestore → Google Sheets
- [ ] Script Apps que actualice status automáticamente
- [ ] Dashboard en Sheets mostrando conversión de pipeline

**Servicio**: Zapier / Make (automatización low-code)

### Fase 7.4: Validación Avanzada
- [ ] Detectar emails duplicados (evitar spam)
- [ ] Rate limiting (máx 5 leads por IP/día)
- [ ] reCAPTCHA v3 (prevenir bots)

---

## 8. Testing

### Test Endpoint Localmente
```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Corp",
    "auditType": "ia-procesos",
    "message": "Test message"
  }'
```

### Expected Response
```json
{
  "success": true,
  "message": "Lead creado exitosamente",
  "leadId": "ABC123..."
}
```

### Verificar en Firestore
1. Firebase Console > Firestore Database
2. Colección: `leads`
3. Debe aparecer el documento

---

## 9. Troubleshooting

### Error: "Firebase credentials not found"
→ Verificar `.env.local` tiene las 3 variables correctas

### Error: "Email inválido"
→ Cliente envía email malformado (valida en frontend)

### Error: "Firestore permission denied"
→ Firestore rules no permiten writes. Configurar:
```
match /leads/{document=**} {
  allow create: if request.auth == null;  // Permitir públicos
  allow read: if request.auth.uid != null; // Solo autenticados
}
```

### Leads no aparecen en Firestore
→ Verificar Network tab en DevTools (POST /api/leads devuelve 201?)

---

## 10. Métricas a Monitorear

- **Leads por semana** (KPI principal)
- **Conversion rate**: Contacted / Total
- **Qualified rate**: Qualified / Contacted
- **Tiempo respuesta** (24h objetivo)
- **Fuente más común** (Blog, Inicio, Servicios)

---

## Archivos Modificados/Creados

```
✅ app/(site)/contacto/contacto-client.tsx (updated)
✅ app/(site)/contacto/contacto.module.css (updated)
✅ app/api/leads/route.ts (created)
✅ lib/firebase.ts (created)
✅ .env.local.example (created)
✅ docs/FASE_7_LEADS.md (this file)
```

---

## Deploy Checklist

- [ ] Crear Firebase project
- [ ] Guardar credenciales en `.env.local` (production)
- [ ] Probar /api/leads localmente
- [ ] Crear Google Sheet pipeline
- [ ] Deploy a producción
- [ ] Monitorear primeros 5 leads
- [ ] Responder en < 24h

---

**Status**: ✅ Fase 7.1 Completa | 🟡 Fase 7.2 Pendiente | ⚪ Fase 7.3 Futuro
