import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/firebase'

interface LeadData {
  name: string
  email: string
  company: string
  phone?: string
  auditType: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, auditType, message } = body as LeadData

    // Validación básica
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Nombre, email, empresa y mensaje son requeridos' },
        { status: 400 }
      )
    }

    // Validar email formato
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // Crear documento en Firestore
    const leadRef = await db.collection('leads').add({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      phone: phone?.trim() || '',
      auditType: auditType || 'ia-procesos',
      message: message.trim(),
      status: 'new',
      createdAt: new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Lead creado exitosamente',
        leadId: leadRef.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating lead:', error)

    // Si es un error de Firebase (credenciales, etc)
    if (error instanceof Error && error.message.includes('credentials')) {
      return NextResponse.json(
        { error: 'Error de configuración del servidor. Contacta al administrador.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ error: 'Error al crear el lead' }, { status: 500 })
  }
}

// Endpoint GET para testing (retorna total de leads)
export async function GET() {
  try {
    const snapshot = await db.collection('leads').count().get()
    return NextResponse.json({
      totalLeads: snapshot.data().count,
    })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json({ error: 'Error al obtener leads' }, { status: 500 })
  }
}
