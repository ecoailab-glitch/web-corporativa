import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'

export async function GET() {
  try {
    // Intentar contar documentos en Firestore
    const snapshot = await db.collection('leads').count().get()
    const count = snapshot.data().count

    return NextResponse.json({
      status: 'connected',
      message: 'Firebase Firestore conectado correctamente',
      totalLeads: count,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Firebase connection error:', error)
    return NextResponse.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Error conectando a Firestore',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      },
      { status: 500 }
    )
  }
}
