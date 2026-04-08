import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import SeoHead from '../components/seo/SeoHead';
import ServiceAreaBlock from '../components/seo/ServiceAreaBlock';
import { COMPANY_INFO } from '../constants';
import { HOME_BREADCRUMB, getCorePageById, getLocalPageById } from '../config/seo';

const inventoryPage = getCorePageById('inventory');
const springfieldPage = getLocalPageById('springfield');

const Inventory = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-16">
      <SeoHead
        title={inventoryPage.title}
        description={inventoryPage.description}
        path={inventoryPage.path}
        breadcrumbs={[HOME_BREADCRUMB, { label: 'Inventory', path: inventoryPage.path }]}
        faqItems={inventoryPage.faq ?? []}
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[HOME_BREADCRUMB, { label: 'Inventory', path: inventoryPage.path }]} />

        <div className="rounded-lg border border-gray-200 bg-white p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Used Car Inventory</h1>
          <p className="text-gray-700 mb-2">SQ Motors is a used car dealership serving the Springfield, Missouri area.</p>
          <p className="text-gray-600">
            We publish our latest available vehicles directly on Facebook. Use the links below to browse inventory and reach out when you find a vehicle you like.
          </p>
        </div>

        <ServiceAreaBlock className="mb-8" />

        <section className="grid md:grid-cols-3 gap-5 mb-10">
          <article className="rounded-lg border border-gray-200 bg-white p-6 md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Browse Current Inventory on Facebook</h2>
            <p className="text-gray-600 mb-5">
              Inventory listings are hosted on our Facebook page so you can see the most current available vehicles in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={COMPANY_INFO.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
              >
                View Inventory on Facebook
              </a>
              <a
                href={COMPANY_INFO.facebookMarketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
              >
                Open Marketplace Profile
              </a>
            </div>
          </article>

          <article className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Help Fast?</h3>
            <p className="text-gray-600 mb-4">Call us with the listing you found and we can confirm current availability.</p>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center px-5 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </article>
        </section>

        <section className="grid sm:grid-cols-2 gap-3 mb-8">
          <article className="rounded-md border border-gray-200 bg-white p-4">
            <h2 className="text-base font-semibold text-gray-900 mb-1">Types of Vehicles We Carry</h2>
            <p className="text-gray-600">Our selection usually includes used cars, trucks, and SUVs chosen for reliability, value, and everyday driving in Southwest Missouri.</p>
          </article>
          <article className="rounded-md border border-gray-200 bg-white p-4">
            <h2 className="text-base font-semibold text-gray-900 mb-1">How Often Inventory Updates</h2>
            <p className="text-gray-600">Inventory updates regularly as vehicles are added and sold. Check our Facebook inventory page for the latest availability.</p>
          </article>
          <article className="rounded-md border border-gray-200 bg-white p-4">
            <h2 className="text-base font-semibold text-gray-900 mb-1">What To Expect When Buying</h2>
            <p className="text-gray-600">Browse listings, contact us with your top picks, then visit for details, test drives, and purchase guidance.</p>
          </article>
          <article className="rounded-md border border-gray-200 bg-white p-4">
            <h2 className="text-base font-semibold text-gray-900 mb-1">Financing Options</h2>
            <p className="text-gray-600">If you need financing, you can review options and apply online before finalizing your purchase in person.</p>
          </article>
        </section>

        <section className="rounded-lg border border-gray-200 bg-white p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How To Shop Inventory With SQ Motors</h2>
          <ol className="grid md:grid-cols-3 gap-4 text-sm">
            <li className="rounded-md border border-gray-100 p-4">
              <p className="font-semibold text-gray-900 mb-1">1. Browse Facebook Listings</p>
              <p className="text-gray-600">View our current posts and save vehicles that match your goals.</p>
            </li>
            <li className="rounded-md border border-gray-100 p-4">
              <p className="font-semibold text-gray-900 mb-1">2. Contact Our Team</p>
              <p className="text-gray-600">Send us the listing or call us so we can confirm availability and details.</p>
            </li>
            <li className="rounded-md border border-gray-100 p-4">
              <p className="font-semibold text-gray-900 mb-1">3. Visit and Finalize</p>
              <p className="text-gray-600">Test drive, review options, and complete your purchase with financing or trade-in support.</p>
            </li>
          </ol>
        </section>

        <section className="rounded-lg border border-gray-200 bg-white p-5 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Inventory FAQ</h2>
          <div className="space-y-2">
            {(inventoryPage.faq ?? []).map((item) => (
              <details key={item.question} className="rounded-md border border-gray-100 p-3">
                <summary className="cursor-pointer text-sm font-semibold text-gray-900">{item.question}</summary>
                <p className="text-sm text-gray-600 mt-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-gray-200 bg-white p-5 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Pages</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link className="text-red-600 font-semibold hover:text-red-700" to="/financing">Financing</Link>
            <Link className="text-red-600 font-semibold hover:text-red-700" to="/trade-in">Trade-In</Link>
            <Link className="text-red-600 font-semibold hover:text-red-700" to="/contact">Contact</Link>
            <Link className="text-red-600 font-semibold hover:text-red-700" to={springfieldPage.path}>Springfield Service Hub</Link>
          </div>
        </section>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
