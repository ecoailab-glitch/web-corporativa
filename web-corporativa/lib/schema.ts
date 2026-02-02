// Convert markdown to HTML
export function organizationSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CUSTOM AI LAB SOLUTIONS',
    url: 'https://customailab.com',
    logo: 'https://customailab.com/logo.png',
    description: 'Soluciones IA para empresas. Automatización, chatbots, desarrollo web.',
    sameAs: [
      'https://linkedin.com/company/customailab',
      'https://twitter.com/customailab',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+34 912 345 678',
      email: 'hola@customailab.es',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida Principal 123',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      postalCode: '28001',
      addressCountry: 'ES',
    },
  }
}

export function serviceSchema(
  name: string,
  description: string,
  url: string,
  image?: string
): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    image,
    provider: {
      '@type': 'Organization',
      name: 'CUSTOM AI LAB SOLUTIONS',
      url: 'https://customailab.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'ES',
    },
    priceRange: 'Contactar',
  }
}

export function faqPageSchema(
  faqs: Array<{
    question: string
    answer: string
  }>
): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(
  items: Array<{
    name: string
    url: string
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
