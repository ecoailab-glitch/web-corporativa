// Google Analytics 4 (GA4) Utilities

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Enviar pageview a GA4
export const pageview = (url: string) => {
  if (!GA_ID || typeof window === 'undefined') return

  window.gtag?.('config', GA_ID, {
    page_path: url,
    page_title: document.title,
  })
}

// Eventos personalizados
interface EventParams {
  [key: string]: string | number | boolean | string[]
}

export const event = (action: string, params?: EventParams) => {
  if (!GA_ID || typeof window === 'undefined') return

  window.gtag?.('event', action, {
    ...params,
  })
}

// Evento: Lead submitted
export const trackLeadSubmit = (data: {
  email: string
  company: string
  auditType: string
}) => {
  event('lead_submit', {
    email_provided: true,
    company: data.company,
    audit_type: data.auditType,
    timestamp: new Date().toISOString(),
  })
}

// Evento: Click WhatsApp
export const trackWhatsAppClick = (source: string) => {
  event('click_whatsapp', {
    source: source,
    timestamp: new Date().toISOString(),
  })
}

// Evento: Click Calendar/Calendly
export const trackCalendarClick = (source: string) => {
  event('click_calendar', {
    source: source,
    timestamp: new Date().toISOString(),
  })
}

// Evento: Service viewed
export const trackServiceView = (serviceId: string, serviceName: string) => {
  event('service_view', {
    service_id: serviceId,
    service_name: serviceName,
    timestamp: new Date().toISOString(),
  })
}

// Evento: CTA clicked
export const trackCTAClick = (ctaText: string, location: string) => {
  event('cta_click', {
    cta_text: ctaText,
    location: location,
    timestamp: new Date().toISOString(),
  })
}

// Evento: Blog post viewed
export const trackBlogView = (slug: string, title: string, category: string) => {
  event('blog_view', {
    post_slug: slug,
    post_title: title,
    post_category: category,
    timestamp: new Date().toISOString(),
  })
}

// Evento: Form error
export const trackFormError = (formName: string, errorMessage: string) => {
  event('form_error', {
    form_name: formName,
    error_message: errorMessage,
    timestamp: new Date().toISOString(),
  })
}

// Evento: External link click
export const trackExternalLink = (url: string, label: string) => {
  event('external_link_click', {
    url: url,
    label: label,
    timestamp: new Date().toISOString(),
  })
}

// Declare global window.gtag type
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void
  }
}
