export const SEO_BUILD_ISO_DATE = '2026-04-08';

export const SEO_BUILD_READABLE_DATE = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date(`2026-04-08T00:00:00Z`));
