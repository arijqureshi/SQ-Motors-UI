import { BUSINESS, CANONICAL_HOST, FILTERED_SAME_AS_LINKS } from '../config/seo';

const hourLabelFor = (dayOfWeek: string) =>
  BUSINESS.hours.find((entry) => entry.dayOfWeek === dayOfWeek)?.label ?? 'Closed';

const fallbackFacebook = 'https://www.facebook.com/people/SQ-Motors/61574504933855/';

export const COMPANY_INFO = {
  name: BUSINESS.name,
  facebook: FILTERED_SAME_AS_LINKS[0] ?? fallbackFacebook,
  facebookPage: FILTERED_SAME_AS_LINKS[0] ?? fallbackFacebook,
  facebookMarketplace: 'https://www.facebook.com/marketplace/profile/100005505010305',
  address: BUSINESS.address,
  phone: BUSINESS.displayPhone,
  phoneE164: BUSINESS.phone,
  email: BUSINESS.email,
  website: CANONICAL_HOST,
  mapUrl: BUSINESS.mapUrl,
  hours: {
    monday: hourLabelFor('Monday'),
    tuesday: hourLabelFor('Tuesday'),
    wednesday: hourLabelFor('Wednesday'),
    thursday: hourLabelFor('Thursday'),
    friday: hourLabelFor('Friday'),
    saturday: hourLabelFor('Saturday'),
    sunday: hourLabelFor('Sunday'),
  },
} as const;
