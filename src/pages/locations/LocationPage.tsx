import { Link, Navigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
import FaqSection from '../../components/seo/FaqSection';
import InternalLinksPanel from '../../components/seo/InternalLinksPanel';
import LastUpdated from '../../components/seo/LastUpdated';
import SeoHead from '../../components/seo/SeoHead';
import ServiceAreaBlock from '../../components/seo/ServiceAreaBlock';
import { COMPANY_INFO } from '../../constants';
import {
  HOME_BREADCRUMB,
  LOCAL_PAGE_BY_ID,
  LOCAL_PAGES,
  getLocalPageById,
} from '../../config/seo';

const slugToLocalPage = new Map(
  LOCAL_PAGES.map((page) => [page.path.split('/').filter(Boolean).at(-1), page]),
);

const springfieldPage = getLocalPageById('springfield');

const LocationPage = () => {
  const { citySlug } = useParams();
  const localPage = citySlug ? slugToLocalPage.get(citySlug) : undefined;

  if (!localPage) {
    return <Navigate to={springfieldPage.path} replace />;
  }

  const nearbyPages = localPage.nearby
    .map((nearbyId) => LOCAL_PAGE_BY_ID.get(nearbyId))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));

  const breadcrumbs = [
    HOME_BREADCRUMB,
    { label: 'Locations', path: '/locations' },
    { label: localPage.city, path: localPage.path },
  ];

  const isSpringfield = localPage.id === 'springfield';

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title={localPage.title}
        description={localPage.description}
        path={localPage.path}
        breadcrumbs={breadcrumbs}
        faqItems={localPage.faq ?? []}
        includeBusinessSchema={isSpringfield}
      />

      <div className="max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Used Car Dealership Near {localPage.city}, Missouri
          </h1>
          <p className="text-lg text-gray-600 mb-3">{localPage.description}</p>
          <p className="text-gray-700">SQ Motors is a used car dealership serving the Springfield, Missouri area.</p>
        </header>

        <ServiceAreaBlock className="mb-8" />

        <section className="grid gap-5 mb-8">
          {localPage.sections.map((section) => (
            <article key={section.heading} className="rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{section.heading}</h2>
              <p className="text-gray-600">{section.content}</p>
            </article>
          ))}
        </section>

        <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Plan Your Next Step</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <Link className="text-red-600 hover:text-red-700 font-semibold" to="/inventory">Browse Inventory</Link>
            <Link className="text-red-600 hover:text-red-700 font-semibold" to="/financing">Explore Financing</Link>
            <Link className="text-red-600 hover:text-red-700 font-semibold" to="/trade-in">Start Trade-In</Link>
            <Link className="text-red-600 hover:text-red-700 font-semibold" to="/contact">Contact SQ Motors</Link>
          </div>
        </section>

        <section className="rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Nearby Areas</h2>
          <div className="flex flex-wrap gap-3">
            {nearbyPages.map((page) => (
              <Link
                key={page.id}
                to={page.path}
                className="inline-flex px-4 py-2 rounded-md border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
              >
                {page.city}
              </Link>
            ))}
          </div>
          {!isSpringfield && (
            <div className="mt-4">
              <Link className="text-sm font-semibold text-red-600 hover:text-red-700" to={springfieldPage.path}>
                Go to Springfield hub
              </Link>
            </div>
          )}
        </section>

        <section className="rounded-lg border border-gray-200 bg-white p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Business Facts</h2>
          <p className="text-gray-700 mb-2">Address: {COMPANY_INFO.address}</p>
          <p className="text-gray-700 mb-2">Phone: {COMPANY_INFO.phone}</p>
          <p className="text-gray-700 mb-2">Hours: Monday-Saturday {COMPANY_INFO.hours.monday} to {COMPANY_INFO.hours.saturday}</p>
          <a href={COMPANY_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:text-red-700">
            Open map directions
          </a>
        </section>

        <LastUpdated contextLabel={`${localPage.city} page`} className="mb-8" />

        {localPage.faq && localPage.faq.length > 0 && (
          <FaqSection title={`${localPage.city} FAQ`} items={localPage.faq} className="mb-8" />
        )}

        <InternalLinksPanel
          title="Helpful Pages"
          links={[
            { to: '/inventory', label: 'View Inventory', description: 'Browse currently listed vehicles and updates.' },
            { to: '/financing', label: 'Financing Options', description: 'Review financing requirements and apply online.' },
            { to: '/trade-in', label: 'Trade-In Form', description: 'Share your current vehicle for evaluation.' },
            { to: '/reviews', label: 'Customer Reviews', description: 'Read recent customer experiences.' },
          ]}
        />
      </div>
    </div>
  );
};

export default LocationPage;
