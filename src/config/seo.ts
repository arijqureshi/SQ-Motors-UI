import rawSeoConfig from './seo.config.json';

export type FaqItem = {
  question: string;
  answer: string;
};

export type MarkdownSection = {
  heading: string;
  content: string;
};

export type BasePageConfig = {
  id: string;
  path: string;
  title: string;
  description: string;
  summary: string;
  generateMarkdown: boolean;
  sections: MarkdownSection[];
  faq?: FaqItem[];
};

export type CorePageConfig = BasePageConfig;

export type LocalPageConfig = BasePageConfig & {
  city: string;
  nearby: string[];
};

export type SeoConfig = {
  canonicalHost: string;
  siteName: string;
  defaultOgImagePath: string;
  business: {
    name: string;
    address: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
    phone: string;
    displayPhone: string;
    email: string;
    mapUrl: string;
    logoPath: string;
    hours: Array<{
      dayOfWeek: string;
      opens?: string;
      closes?: string;
      closed?: boolean;
      label: string;
    }>;
  };
  businessTypeLine: string;
  serviceAreaLine: string;
  serviceAreas: string[];
  sameAs: {
    facebook?: string;
    googleBusinessProfile?: string;
    yelp?: string;
    carsCom?: string;
    carGurus?: string;
  };
  corePages: CorePageConfig[];
  localPages: LocalPageConfig[];
};

const parsedConfig = rawSeoConfig as SeoConfig;

if (!parsedConfig.canonicalHost.startsWith('https://')) {
  throw new Error('Canonical host must start with https://');
}

export const SEO_CONFIG = parsedConfig;
export const CANONICAL_HOST = parsedConfig.canonicalHost.replace(/\/$/, '');
export const SITE_NAME = parsedConfig.siteName;
export const BUSINESS = parsedConfig.business;
export const SERVICE_AREAS = parsedConfig.serviceAreas;
export const BUSINESS_TYPE_LINE = parsedConfig.businessTypeLine;
export const SERVICE_AREA_LINE = parsedConfig.serviceAreaLine;
export const DEFAULT_OG_IMAGE_PATH = parsedConfig.defaultOgImagePath;

export const CORE_PAGES = parsedConfig.corePages;
export const LOCAL_PAGES = parsedConfig.localPages;

export const CORE_PAGE_BY_ID = new Map(CORE_PAGES.map((page) => [page.id, page]));
export const CORE_PAGE_BY_PATH = new Map(CORE_PAGES.map((page) => [page.path, page]));

export const LOCAL_PAGE_BY_ID = new Map(LOCAL_PAGES.map((page) => [page.id, page]));
export const LOCAL_PAGE_BY_PATH = new Map(LOCAL_PAGES.map((page) => [page.path, page]));

export const SPRINGFIELD_PAGE = LOCAL_PAGE_BY_ID.get('springfield');
if (!SPRINGFIELD_PAGE) {
  throw new Error('Missing springfield local page in SEO config');
}

export const OTHER_LOCAL_PAGES = LOCAL_PAGES.filter((page) => page.id !== 'springfield');

export const FILTERED_SAME_AS_LINKS = Object.values(parsedConfig.sameAs).filter(
  (value): value is string => Boolean(value && value.startsWith('http')),
);

export const normalizePath = (value: string): string => {
  if (!value) {
    return '/';
  }

  const normalized = value.startsWith('/') ? value : `/${value}`;
  if (normalized !== '/' && normalized.endsWith('/')) {
    return normalized.slice(0, -1);
  }

  return normalized;
};

export const canonicalUrlForPath = (path: string): string => {
  const normalized = normalizePath(path);
  if (normalized === '/') {
    return `${CANONICAL_HOST}/`;
  }

  return `${CANONICAL_HOST}${normalized}`;
};

export const fullMarkdownUrl = (relativePath: string): string => {
  const normalized = normalizePath(relativePath);
  return `${CANONICAL_HOST}${normalized}`;
};

export const ALL_INDEXABLE_PAGES = [...CORE_PAGES, ...LOCAL_PAGES];

export const getCorePageById = (id: string): CorePageConfig => {
  const page = CORE_PAGE_BY_ID.get(id);
  if (!page) {
    throw new Error(`Missing core page config: ${id}`);
  }
  return page;
};

export const getLocalPageById = (id: string): LocalPageConfig => {
  const page = LOCAL_PAGE_BY_ID.get(id);
  if (!page) {
    throw new Error(`Missing local page config: ${id}`);
  }
  return page;
};

export const REQUIRED_PAGE_IDS = {
  core: ['home', 'about', 'inventory', 'financing', 'trade-in', 'inspections', 'reviews', 'contact', 'locations', 'sitemap'],
  local: ['springfield', 'ozark', 'nixa', 'republic', 'battlefield', 'rogersville'],
};

export type BreadcrumbItem = {
  label: string;
  path: string;
};

export const HOME_BREADCRUMB: BreadcrumbItem = {
  label: 'Home',
  path: '/',
};
