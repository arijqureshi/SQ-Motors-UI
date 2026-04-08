import fs from 'node:fs/promises';
import path from 'node:path';
import {
  REQUIRED_GENERATED_FILES,
  ROOT_DIR,
  canonicalUrlForPath,
  markdownPathForCorePage,
  markdownPathForLocalPage,
  readSeoConfig,
  requiredCorePageIds,
  requiredLocalPageIds,
  requiredPaths,
} from './seo-shared.mjs';

const fail = (message) => {
  throw new Error(message);
};

const checkCoreAndLocalIds = (config) => {
  const coreIds = new Set(config.corePages.map((page) => page.id));
  const localIds = new Set(config.localPages.map((page) => page.id));

  for (const requiredId of requiredCorePageIds) {
    if (!coreIds.has(requiredId)) {
      fail(`Missing required core page id: ${requiredId}`);
    }
  }

  for (const requiredId of requiredLocalPageIds) {
    if (!localIds.has(requiredId)) {
      fail(`Missing required local page id: ${requiredId}`);
    }
  }
};

const checkMetadataCoverage = (config) => {
  const allPages = [...config.corePages, ...config.localPages];

  for (const page of allPages) {
    if (!page.path || !page.title || !page.description) {
      fail(`Page missing path/title/description metadata: ${page.id}`);
    }

    if (!page.title.trim() || !page.description.trim()) {
      fail(`Page metadata cannot be empty: ${page.id}`);
    }
  }

  const allPaths = new Set(allPages.map((page) => page.path));
  for (const requiredPath of requiredPaths) {
    if (!allPaths.has(requiredPath)) {
      fail(`Missing required route path in config: ${requiredPath}`);
    }
  }
};

const checkLocalLinkIntegrity = (config) => {
  const localById = new Map(config.localPages.map((page) => [page.id, page]));

  for (const page of config.localPages) {
    if (!page.nearby || page.nearby.length < 2) {
      fail(`Local page should include at least 2 nearby links: ${page.id}`);
    }

    for (const nearbyId of page.nearby) {
      if (!localById.has(nearbyId)) {
        fail(`Local page ${page.id} references unknown nearby page ${nearbyId}`);
      }
    }
  }
};

const checkCityPageUniqueness = (config) => {
  const cityBodies = config.localPages.map((page) => {
    const text = [
      page.title,
      page.description,
      page.summary,
      ...page.sections.map((section) => `${section.heading} ${section.content}`),
    ]
      .join(' ')
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (text.length < 220) {
      fail(`Local page content appears too thin: ${page.id}`);
    }

    return { id: page.id, text };
  });

  for (let i = 0; i < cityBodies.length; i += 1) {
    for (let j = i + 1; j < cityBodies.length; j += 1) {
      const a = cityBodies[i];
      const b = cityBodies[j];
      if (a.text === b.text) {
        fail(`Local pages are identical: ${a.id} and ${b.id}`);
      }
    }
  }
};

const checkGeneratedFilesExist = async () => {
  await Promise.all(
    REQUIRED_GENERATED_FILES.map(async (relativeFilePath) => {
      const absolutePath = path.join(ROOT_DIR, relativeFilePath);
      try {
        await fs.access(absolutePath);
      } catch {
        fail(`Missing generated file: ${relativeFilePath}`);
      }
    }),
  );
};

const checkSitemap = async (config) => {
  const sitemapPath = path.join(ROOT_DIR, 'public/sitemap.xml');
  const sitemapText = await fs.readFile(sitemapPath, 'utf8');
  const urls = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

  if (!urls.length) {
    fail('Sitemap has no URLs');
  }

  const invalidHost = urls.find((url) => !url.startsWith(config.canonicalHost));
  if (invalidHost) {
    fail(`Sitemap contains non-canonical URL: ${invalidHost}`);
  }

  const requiredCanonicalUrls = requiredPaths.map((pathValue) =>
    canonicalUrlForPath(config.canonicalHost, pathValue),
  );

  for (const requiredUrl of requiredCanonicalUrls) {
    if (!urls.includes(requiredUrl)) {
      fail(`Sitemap missing required URL: ${requiredUrl}`);
    }
  }
};

const checkLlmsFile = async (config) => {
  const llmsPath = path.join(ROOT_DIR, 'public/llms.txt');
  const llmsText = await fs.readFile(llmsPath, 'utf8');

  const requiredLinks = [
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
    ...config.localPages.map((page) => page.path),
  ].map((pathValue) => canonicalUrlForPath(config.canonicalHost, pathValue));

  const markdownLinks = [
    ...config.corePages
      .filter((page) => page.generateMarkdown)
      .map((page) => canonicalUrlForPath(config.canonicalHost, markdownPathForCorePage(page))),
    ...config.localPages
      .filter((page) => page.generateMarkdown)
      .map((page) => canonicalUrlForPath(config.canonicalHost, markdownPathForLocalPage(page))),
    canonicalUrlForPath(config.canonicalHost, '/llm/index.md'),
  ];

  for (const requiredLink of [...requiredLinks, ...markdownLinks]) {
    if (!llmsText.includes(requiredLink)) {
      fail(`llms.txt missing required link: ${requiredLink}`);
    }
  }

  const wellKnownPath = path.join(ROOT_DIR, 'public/.well-known/llms.txt');
  const wellKnownText = await fs.readFile(wellKnownPath, 'utf8');
  if (wellKnownText !== llmsText) {
    fail('public/.well-known/llms.txt must match public/llms.txt');
  }
};

const checkMarkdownMirrors = async (config) => {
  const markdownPages = [
    ...config.corePages
      .filter((page) => page.generateMarkdown)
      .map((page) => ({ path: markdownPathForCorePage(page), canonicalPagePath: page.path })),
    ...config.localPages
      .filter((page) => page.generateMarkdown)
      .map((page) => ({ path: markdownPathForLocalPage(page), canonicalPagePath: page.path })),
    { path: '/llm/index.md', canonicalPagePath: null },
  ];

  for (const page of markdownPages) {
    const absolutePath = path.join(ROOT_DIR, 'public', page.path.replace(/^\//, ''));
    const content = await fs.readFile(absolutePath, 'utf8');

    if (page.canonicalPagePath) {
      const canonicalLine = `Canonical URL: ${canonicalUrlForPath(config.canonicalHost, page.canonicalPagePath)}`;
      if (!content.includes(canonicalLine)) {
        fail(`Markdown page missing canonical URL line: ${page.path}`);
      }
    }

    if (content.includes('http://')) {
      fail(`Markdown page includes non-https URL: ${page.path}`);
    }
  }
};

const checkJsonLdShape = (config) => {
  const openingHoursSpecification = config.business.hours
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
        name: config.business.name,
        url: canonicalUrlForPath(config.canonicalHost, '/'),
      },
      {
        '@type': 'LocalBusiness',
        name: config.business.name,
        openingHoursSpecification,
      },
      {
        '@type': 'AutoDealer',
        name: config.business.name,
        areaServed: config.serviceAreas,
      },
    ],
  };

  try {
    JSON.parse(JSON.stringify(graph));
  } catch {
    fail('Failed to serialize JSON-LD graph');
  }
};

const run = async () => {
  const config = await readSeoConfig();

  if (!config.canonicalHost.startsWith('https://www.sqmotorsllc.com')) {
    fail(`Canonical host must start with https://www.sqmotorsllc.com. Found: ${config.canonicalHost}`);
  }

  checkCoreAndLocalIds(config);
  checkMetadataCoverage(config);
  checkLocalLinkIntegrity(config);
  checkCityPageUniqueness(config);
  checkJsonLdShape(config);

  await checkGeneratedFilesExist();
  await checkSitemap(config);
  await checkLlmsFile(config);
  await checkMarkdownMirrors(config);

  console.log('SEO validation checks passed.');
};

run().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
