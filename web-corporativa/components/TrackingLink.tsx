'use client'

import Link from 'next/link'
import { trackWhatsAppClick, trackCalendarClick } from '@/lib/gtag'

interface TrackingLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  type: 'whatsapp' | 'calendar' | 'default'
  source?: string
}

export default function TrackingLink({
  href,
  children,
  className,
  type,
  source = 'general',
}: TrackingLinkProps) {
  const handleClick = () => {
    if (type === 'whatsapp') {
      trackWhatsAppClick(source)
    } else if (type === 'calendar') {
      trackCalendarClick(source)
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
