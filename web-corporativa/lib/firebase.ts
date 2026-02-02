import * as admin from 'firebase-admin'

// Inicializar Firebase Admin si no está ya inicializado
if (!admin.apps.length) {
  // Usar las variables de entorno del proyecto
  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Firebase credentials not found in environment variables')
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  })
}

export const db = admin.firestore()
