import { Link, Navigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/seo/Breadcrumbs';
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

        <section className="rounded-lg border border-gray-200 bg-white p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">For {localPage.city} Shoppers</h2>
          <p className="text-gray-600 mb-3">{localPage.summary}</p>
          <p className="text-gray-600">{localPage.sections[0]?.content ?? 'Browse inventory, connect with our team, and plan your next visit with confidence.'}</p>
        </section>

        <section className="rounded-lg border border-gray-200 bg-gray-50 p-5 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Plan Your Next Step</h2>
          <div className="flex flex-wrap gap-3 text-sm">
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

        <section className="rounded-lg border border-gray-200 bg-white p-5 mb-8">
          <p className="text-sm text-gray-700 mb-2">{COMPANY_INFO.address} | {COMPANY_INFO.phone}</p>
          <p className="text-sm text-gray-700 mb-2">Mon-Sat hours available on contact page.</p>
          <a href={COMPANY_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-red-600 font-semibold hover:text-red-700">
            Open map directions
          </a>
        </section>
      </div>
    </div>
  );
};

export default LocationPage;
