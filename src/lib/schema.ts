import { site } from '../data/site';
import { areas } from '../data/areas';
import { services } from '../data/services';

const areaServed = [
  ...areas.map((area) => ({
    '@type': 'City',
    name: area.name,
    containedInPlace: { '@type': 'AdministrativeArea', name: area.county },
  })),
  { '@type': 'AdministrativeArea', name: 'South Yorkshire' },
  { '@type': 'AdministrativeArea', name: 'West Yorkshire' },
  { '@type': 'Country', name: 'United Kingdom' },
];

export function businessSchema() {
  return {
    '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    image: `${site.url}/og.jpg`,
    logo: `${site.url}/favicon.svg`,
    telephone: site.phoneTel,
    email: site.email,
    priceRange: '££',
    currenciesAccepted: 'GBP',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.town,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: site.socials.map((item) => item.href),
    identifier: site.companyNumber,
    description: site.description,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Carpentry, handyman and property services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.summary,
          url: `${site.url}/services/${service.slug}`,
          areaServed,
          provider: { '@id': `${site.url}/#business` },
        },
      })),
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function serviceSchema(service: { name: string; summary: string; slug: string }) {
  return {
    '@type': 'Service',
    name: service.name,
    description: service.summary,
    url: `${site.url}/services/${service.slug}`,
    provider: { '@id': `${site.url}/#business` },
    areaServed,
    serviceType: service.name,
  };
}
