import fs from 'node:fs/promises';
import path from 'node:path';
import {
  GENERATED_BUILD_TS,
  LLM_DIR,
  PUBLIC_DIR,
  WELL_KNOWN_DIR,
  canonicalUrlForPath,
  ensureDir,
  getIndexableCorePages,
  markdownPathForCorePage,
  markdownPathForLocalPage,
  readSeoConfig,
} from './seo-shared.mjs';

const now = new Date();
const isoBuildDate = now.toISOString().slice(0, 10);

const formatReadableDate = (isoDate) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T00:00:00Z`));

const markdownForPage = ({ page, canonicalUrl, config, readableDate, isLocal }) => {
  const nearbySection = isLocal
    ? `\n## Nearby Service Areas\n\n${(page.nearby ?? [])
        .map((nearbyId) => {
          const nearbyPage = config.localPages.find((localPage) => localPage.id === nearbyId);
          if (!nearbyPage) {
            return null;
          }
          return `- [${nearbyPage.city}](${canonicalUrlForPath(config.canonicalHost, nearbyPage.path)})`;
        })
        .filter(Boolean)
        .join('\n')}\n`
    : '';

  const faqSection = page.faq?.length
    ? `\n## Frequently Asked Questions\n\n${page.faq
        .map((item) => `### ${item.question}\n\n${item.answer}`)
        .join('\n\n')}\n`
    : '';

  const sections = page.sections
    .map((section) => `## ${section.heading}\n\n${section.content}`)
    .join('\n\n');

  return [
    `# ${page.title}`,
    '',
    `Canonical URL: ${canonicalUrl}`,
    '',
    `Last updated: ${readableDate}`,
    '',
    '## Summary',
    '',
    page.summary,
    '',
    '## Key Business Facts',
    '',
    `- Business: ${config.business.name}`,
    `- Business type: ${config.businessTypeLine}`,
    `- Address: ${config.business.address}`,
    `- Phone: ${config.business.displayPhone}`,
    `- Email: ${config.business.email}`,
    `- Service area: ${config.serviceAreaLine}`,
    '',
    sections,
    faqSection,
    nearbySection,
    '## Contact SQ Motors',
    '',
    `- Call: ${config.business.displayPhone}`,
    `- Email: ${config.business.email}`,
    `- Contact page: ${canonicalUrlForPath(config.canonicalHost, '/contact')}`,
    `- Inventory page: ${canonicalUrlForPath(config.canonicalHost, '/inventory')}`,
    '',
  ]
    .join('\n')
    .replace(/\n{3,}/g, '\n\n');
};

const llmsText = ({ config, corePages, localPages, markdownCorePages, markdownLocalPages }) => {
  const coreLinks = corePages
    .filter((page) => ['home', 'about', 'inventory', 'financing', 'trade-in', 'inspections', 'reviews', 'contact', 'locations', 'sitemap'].includes(page.id))
    .map((page) => `- ${page.title}: ${canonicalUrlForPath(config.canonicalHost, page.path)}`)
    .join('\n');

  const springfieldHub = localPages.find((page) => page.id === 'springfield');

  const localLinks = localPages
    .map((page) => `- ${page.city}: ${canonicalUrlForPath(config.canonicalHost, page.path)}`)
    .join('\n');

  const markdownLinks = [
    ...markdownCorePages.map((page) => {
      const markdownPath = markdownPathForCorePage(page);
      return `- ${page.title}: ${canonicalUrlForPath(config.canonicalHost, markdownPath)}`;
    }),
    ...markdownLocalPages.map((page) => {
      const markdownPath = markdownPathForLocalPage(page);
      return `- ${page.city}: ${canonicalUrlForPath(config.canonicalHost, markdownPath)}`;
    }),
  ].join('\n');

  return [
    '# SQ Motors LLM Discovery',
    '',
    `Canonical host: ${config.canonicalHost}`,
    '',
    '## Core Website Pages',
    '',
    coreLinks,
    '',
    '## Springfield Hub',
    '',
    springfieldHub
      ? `- Springfield Service Area: ${canonicalUrlForPath(config.canonicalHost, springfieldHub.path)}`
      : '- Springfield Service Area: missing',
    '',
    '## Service Area Pages',
    '',
    localLinks,
    '',
    '## Markdown Mirrors',
    '',
    markdownLinks,
    '',
    '## Machine Readable Indexes',
    '',
    `- HTML sitemap: ${canonicalUrlForPath(config.canonicalHost, '/sitemap')}`,
    `- XML sitemap: ${canonicalUrlForPath(config.canonicalHost, '/sitemap.xml')}`,
    `- Markdown index: ${canonicalUrlForPath(config.canonicalHost, '/llm/index.md')}`,
    '',
  ].join('\n');
};

const markdownIndexText = ({ config, markdownCorePages, markdownLocalPages }) => {
  const core = markdownCorePages
    .map((page) => `- [${page.title}](${canonicalUrlForPath(config.canonicalHost, markdownPathForCorePage(page))})`)
    .join('\n');

  const local = markdownLocalPages
    .map((page) => `- [${page.city}](${canonicalUrlForPath(config.canonicalHost, markdownPathForLocalPage(page))})`)
    .join('\n');

  return [
    '# SQ Motors Markdown Index',
    '',
    `Canonical host: ${config.canonicalHost}`,
    '',
    '## Core Mirrors',
    '',
    core,
    '',
    '## Service Area Mirrors',
    '',
    local,
    '',
  ].join('\n');
};

const sitemapXml = ({ config, pages, markdownCorePages, markdownLocalPages, lastmod }) => {
  const urls = [
    ...pages.map((page) => canonicalUrlForPath(config.canonicalHost, page.path)),
    ...markdownCorePages.map((page) => canonicalUrlForPath(config.canonicalHost, markdownPathForCorePage(page))),
    ...markdownLocalPages.map((page) => canonicalUrlForPath(config.canonicalHost, markdownPathForLocalPage(page))),
    canonicalUrlForPath(config.canonicalHost, '/llm/index.md'),
  ];

  const urlsetEntries = [...new Set(urls)]
    .map(
      (url) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsetEntries}\n</urlset>\n`;
};

const robotsText = (config) => `User-agent: *\nAllow: /\n\nSitemap: ${canonicalUrlForPath(config.canonicalHost, '/sitemap.xml')}\n`;

const buildFileText = `export const SEO_BUILD_ISO_DATE = '${isoBuildDate}';\n\nexport const SEO_BUILD_READABLE_DATE = new Intl.DateTimeFormat('en-US', {\n  year: 'numeric',\n  month: 'long',\n  day: 'numeric',\n}).format(new Date(\`${isoBuildDate}T00:00:00Z\`));\n`;

const generate = async () => {
  const config = await readSeoConfig();
  const corePages = getIndexableCorePages(config);
  const localPages = config.localPages;
  const markdownCorePages = corePages.filter((page) => page.generateMarkdown);
  const markdownLocalPages = localPages.filter((page) => page.generateMarkdown);

  await ensureDir(PUBLIC_DIR);
  await fs.rm(LLM_DIR, { recursive: true, force: true });
  await ensureDir(LLM_DIR);
  await ensureDir(path.join(LLM_DIR, 'locations'));
  await ensureDir(WELL_KNOWN_DIR);

  for (const page of markdownCorePages) {
    const markdownPath = path.join(PUBLIC_DIR, markdownPathForCorePage(page));
    const content = markdownForPage({
      page,
      canonicalUrl: canonicalUrlForPath(config.canonicalHost, page.path),
      config,
      readableDate: formatReadableDate(isoBuildDate),
      isLocal: false,
    });
    await fs.writeFile(markdownPath, content, 'utf8');
  }

  for (const page of markdownLocalPages) {
    const markdownPath = path.join(PUBLIC_DIR, markdownPathForLocalPage(page));
    const content = markdownForPage({
      page,
      canonicalUrl: canonicalUrlForPath(config.canonicalHost, page.path),
      config,
      readableDate: formatReadableDate(isoBuildDate),
      isLocal: true,
    });
    await fs.writeFile(markdownPath, content, 'utf8');
  }

  const llms = llmsText({
    config,
    corePages,
    localPages,
    markdownCorePages,
    markdownLocalPages,
  });

  await fs.writeFile(path.join(PUBLIC_DIR, 'robots.txt'), robotsText(config), 'utf8');
  await fs.writeFile(
    path.join(PUBLIC_DIR, 'sitemap.xml'),
    sitemapXml({
      config,
      pages: [...corePages, ...localPages],
      markdownCorePages,
      markdownLocalPages,
      lastmod: isoBuildDate,
    }),
    'utf8',
  );
  await fs.writeFile(path.join(PUBLIC_DIR, 'llms.txt'), llms, 'utf8');
  await fs.writeFile(path.join(WELL_KNOWN_DIR, 'llms.txt'), llms, 'utf8');
  await fs.writeFile(
    path.join(LLM_DIR, 'index.md'),
    markdownIndexText({ config, markdownCorePages, markdownLocalPages }),
    'utf8',
  );

  await fs.writeFile(GENERATED_BUILD_TS, buildFileText, 'utf8');

  console.log('Generated SEO assets: robots, sitemap, llms, markdown mirrors, and build date file.');
};

generate().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
