import { useEffect, useMemo } from 'react';
import {
  BUSINESS,
  CANONICAL_HOST,
  DEFAULT_OG_IMAGE_PATH,
  FILTERED_SAME_AS_LINKS,
  SITE_NAME,
  SERVICE_AREAS,
  canonicalUrlForPath,
  type BreadcrumbItem,
  type FaqItem,
} from '../../config/seo';

type SeoHeadProps = {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  faqItems?: FaqItem[];
  includeBusinessSchema?: boolean;
  noIndex?: boolean;
};

const setNamedMeta = (name: string, content: string): void => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setPropertyMeta = (property: string, content: string): void => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setCanonicalLink = (href: string): void => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const setJsonLdScript = (id: string, payload: unknown): void => {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
};

const removeJsonLdScript = (id: string): void => {
  const script = document.getElementById(id);
  script?.remove();
};

const buildBusinessGraph = () => {
  const canonicalHomeUrl = canonicalUrlForPath('/');
  const logoUrl = `${CANONICAL_HOST}${BUSINESS.logoPath}`;

  const openingHoursSpecification = BUSINESS.hours
    .filter((entry) => !entry.closed)
    .map((entry) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: entry.dayOfWeek,
      opens: entry.opens,
      closes: entry.closes,
    }));

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${canonicalHomeUrl}#organization`,
        name: BUSINESS.name,
        url: canonicalHomeUrl,
        logo: logoUrl,
        sameAs: FILTERED_SAME_AS_LINKS,
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${canonicalHomeUrl}#localbusiness`,
        name: BUSINESS.name,
        url: canonicalHomeUrl,
        image: logoUrl,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.streetAddress,
          addressLocality: BUSINESS.addressLocality,
          addressRegion: BUSINESS.addressRegion,
          postalCode: BUSINESS.postalCode,
          addressCountry: BUSINESS.addressCountry,
        },
        openingHoursSpecification,
        areaServed: SERVICE_AREAS,
        sameAs: FILTERED_SAME_AS_LINKS,
      },
      {
        '@type': 'AutoDealer',
        '@id': `${canonicalHomeUrl}#autodealer`,
        name: BUSINESS.name,
        url: canonicalHomeUrl,
        image: logoUrl,
        telephone: BUSINESS.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.streetAddress,
          addressLocality: BUSINESS.addressLocality,
          addressRegion: BUSINESS.addressRegion,
          postalCode: BUSINESS.postalCode,
          addressCountry: BUSINESS.addressCountry,
        },
        openingHoursSpecification,
        areaServed: SERVICE_AREAS,
        sameAs: FILTERED_SAME_AS_LINKS,
      },
    ],
  };

  return graph;
};

const buildBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.label,
    item: canonicalUrlForPath(crumb.path),
  })),
});

const buildFaqSchema = (faqItems: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

const SeoHead = ({
  title,
  description,
  path,
  breadcrumbs = [],
  faqItems = [],
  includeBusinessSchema = false,
  noIndex = false,
}: SeoHeadProps) => {
  const canonicalUrl = useMemo(() => canonicalUrlForPath(path), [path]);
  const ogImageUrl = `${CANONICAL_HOST}${DEFAULT_OG_IMAGE_PATH}`;

  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    setNamedMeta('description', description);
    setNamedMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    setPropertyMeta('og:title', `${title} | ${SITE_NAME}`);
    setPropertyMeta('og:description', description);
    setPropertyMeta('og:type', 'website');
    setPropertyMeta('og:url', canonicalUrl);
    setPropertyMeta('og:site_name', SITE_NAME);
    setPropertyMeta('og:image', ogImageUrl);

    setNamedMeta('twitter:card', 'summary_large_image');
    setNamedMeta('twitter:title', `${title} | ${SITE_NAME}`);
    setNamedMeta('twitter:description', description);
    setNamedMeta('twitter:image', ogImageUrl);

    setCanonicalLink(canonicalUrl);

    if (includeBusinessSchema) {
      setJsonLdScript('sq-business-schema', buildBusinessGraph());
    } else {
      removeJsonLdScript('sq-business-schema');
    }

    if (breadcrumbs.length > 0) {
      setJsonLdScript('sq-breadcrumb-schema', buildBreadcrumbSchema(breadcrumbs));
    } else {
      removeJsonLdScript('sq-breadcrumb-schema');
    }

    if (faqItems.length > 0) {
      setJsonLdScript('sq-faq-schema', buildFaqSchema(faqItems));
    } else {
      removeJsonLdScript('sq-faq-schema');
    }
  }, [
    breadcrumbs,
    canonicalUrl,
    description,
    faqItems,
    includeBusinessSchema,
    noIndex,
    ogImageUrl,
    title,
  ]);

  return null;
};

export default SeoHead;
