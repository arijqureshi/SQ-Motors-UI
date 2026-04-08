import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import SeoHead from '../components/seo/SeoHead';
import ServiceAreaBlock from '../components/seo/ServiceAreaBlock';
import { HOME_BREADCRUMB, LOCAL_PAGES, getCorePageById } from '../config/seo';

const locationsPage = getCorePageById('locations');

const Locations = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title={locationsPage.title}
        description={locationsPage.description}
        path={locationsPage.path}
        breadcrumbs={[HOME_BREADCRUMB, { label: 'Locations', path: locationsPage.path }]}
      />

      <div className="max-w-6xl mx-auto">
        <Breadcrumbs items={[HOME_BREADCRUMB, { label: 'Locations', path: locationsPage.path }]} />

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Springfield Metro Service Areas</h1>
          <p className="text-lg text-gray-600">Browse local pages for communities SQ Motors currently serves.</p>
        </header>

        <ServiceAreaBlock showBusinessType className="mb-8" />

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {LOCAL_PAGES.map((location) => (
            <article key={location.id} className="rounded-lg border border-gray-200 p-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{location.city}, Missouri</h2>
              <p className="text-sm text-gray-600 mb-4">{location.summary}</p>
              <Link to={location.path} className="font-semibold text-red-600 hover:text-red-700">
                View {location.city} page
              </Link>
            </article>
          ))}
        </section>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Quick Links</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            <li><Link className="text-red-600 hover:text-red-700" to="/inventory">Inventory</Link></li>
            <li><Link className="text-red-600 hover:text-red-700" to="/financing">Financing</Link></li>
            <li><Link className="text-red-600 hover:text-red-700" to="/trade-in">Trade-In</Link></li>
            <li><Link className="text-red-600 hover:text-red-700" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Locations;
