'use client'

import Link from 'next/link'
import { useState } from 'react'

interface ServiceCardProps {
  href: string
  title: string
  description: string
}

export default function ServiceCardHover({ href, title, description }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div
        style={{
          padding: '2rem',
          background: isHovered ? 'rgba(30, 41, 59, 0.8)' : 'rgba(30, 41, 59, 0.6)',
          border: isHovered ? '1px solid rgba(0, 212, 255, 0.3)' : '1px solid rgba(100, 116, 139, 0.3)',
          borderRadius: '16px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: isHovered ? '0 8px 16px rgba(0, 212, 255, 0.15)' : 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  )
}
