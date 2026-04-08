export const SEO_BUILD_ISO_DATE = '2026-04-07';

export const SEO_BUILD_READABLE_DATE = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'America/Chicago',
}).format(new Date(`2026-04-07T12:00:00Z`));
