import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ROOT_DIR = path.resolve(__dirname, '..');
export const CONFIG_PATH = path.join(ROOT_DIR, 'src/config/seo.config.json');
export const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
export const LLM_DIR = path.join(PUBLIC_DIR, 'llm');
export const WELL_KNOWN_DIR = path.join(PUBLIC_DIR, '.well-known');
export const GENERATED_BUILD_TS = path.join(ROOT_DIR, 'src/generated/seoBuild.ts');

export const REQUIRED_GENERATED_FILES = [
  'public/robots.txt',
  'public/sitemap.xml',
  'public/llms.txt',
  'public/.well-known/llms.txt',
  'public/llm/index.md',
  'src/generated/seoBuild.ts',
];

export const normalizePath = (value) => {
  if (!value || value === '/') {
    return '/';
  }

  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash.slice(0, -1) : withLeadingSlash;
};

export const canonicalUrlForPath = (canonicalHost, pathname) => {
  const host = canonicalHost.replace(/\/$/, '');
  const normalizedPath = normalizePath(pathname);

  if (normalizedPath === '/') {
    return `${host}/`;
  }

  return `${host}${normalizedPath}`;
};

export const markdownPathForCorePage = (corePage) => `/llm/${corePage.id}.md`;

export const markdownPathForLocalPage = (localPage) => {
  const slug = localPage.path.split('/').filter(Boolean).at(-1);
  return `/llm/locations/${slug}.md`;
};

export const markdownAbsoluteUrlForCorePage = (config, corePage) =>
  canonicalUrlForPath(config.canonicalHost, markdownPathForCorePage(corePage));

export const markdownAbsoluteUrlForLocalPage = (config, localPage) =>
  canonicalUrlForPath(config.canonicalHost, markdownPathForLocalPage(localPage));

export const readSeoConfig = async () => {
  const raw = await fs.readFile(CONFIG_PATH, 'utf8');
  return JSON.parse(raw);
};

export const getIndexableCorePages = (config) =>
  config.corePages.filter((page) => page.id !== 'home-alias');

export const requiredPaths = [
  '/',
  '/about-us',
  '/inventory',
  '/financing',
  '/trade-in',
  '/inspections',
  '/reviews',
  '/contact',
  '/locations',
  '/sitemap',
  '/locations/springfield-mo',
  '/locations/ozark-mo',
  '/locations/nixa-mo',
  '/locations/republic-mo',
  '/locations/battlefield-mo',
  '/locations/rogersville-mo',
];

export const requiredCorePageIds = [
  'home',
  'about',
  'inventory',
  'financing',
  'trade-in',
  'inspections',
  'reviews',
  'contact',
  'sitemap',
  'locations',
];

export const requiredLocalPageIds = [
  'springfield',
  'ozark',
  'nixa',
  'republic',
  'battlefield',
  'rogersville',
];

export const uniqueStrings = (values) => [...new Set(values)];

export const markdownSection = (heading, body) => `## ${heading}\n\n${body}\n`;

export const ensureDir = async (dirPath) => {
  await fs.mkdir(dirPath, { recursive: true });
};
