'use client'

import { useEffect, ReactNode } from 'react'
import { trackServiceView } from '@/lib/gtag'

interface ServicePageWrapperProps {
  serviceId: string
  serviceName: string
  children: ReactNode
}

export default function ServicePageWrapper({
  serviceId,
  serviceName,
  children,
}: ServicePageWrapperProps) {
  useEffect(() => {
    trackServiceView(serviceId, serviceName)
  }, [serviceId, serviceName])

  return <>{children}</>
}
