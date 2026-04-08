import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import MobileFeatures from '../components/MobileFeatures';
import InspectionsSection from '../components/InspectionsSection';
import FaqSection from '../components/seo/FaqSection';
import InternalLinksPanel from '../components/seo/InternalLinksPanel';
import ReviewsPreview from '../components/seo/ReviewsPreview';
import SeoHead from '../components/seo/SeoHead';
import ServiceAreaBlock from '../components/seo/ServiceAreaBlock';
import { OTHER_LOCAL_PAGES, getCorePageById, getLocalPageById } from '../config/seo';

const homePage = getCorePageById('home');
const springfieldPage = getLocalPageById('springfield');

const Home = () => {
  const topCityLinks = OTHER_LOCAL_PAGES.slice(0, 3);

  return (
    <>
      <SeoHead
        title={homePage.title}
        description={homePage.description}
        path={homePage.path}
        faqItems={homePage.faq ?? []}
        includeBusinessSchema
      />

      <Hero />
      <MobileFeatures />
      <About />
      <InspectionsSection />

      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Used Cars, Financing, and Trade-Ins in Springfield, Missouri</h2>
            <p className="text-gray-700 mb-2">SQ Motors is a used car dealership serving the Springfield, Missouri area.</p>
            <p className="text-gray-600">
              Browse inventory, discuss financing options, and get trade-in support from a local dealership focused on straightforward buying guidance.
            </p>
          </div>

          <ServiceAreaBlock />

          <InternalLinksPanel
            title="Explore Local Pages"
            links={[
              {
                to: springfieldPage.path,
                label: 'Springfield Service Hub',
                description: 'Start with the Springfield overview and local buying pathways.',
              },
              ...topCityLinks.map((city) => ({
                to: city.path,
                label: `${city.city} Buyers Page`,
                description: city.summary,
              })),
            ]}
          />

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Start Shopping</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/inventory" className="inline-flex items-center px-5 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700">
                View Inventory
              </Link>
              <Link to="/financing" className="inline-flex items-center px-5 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800">
                Explore Financing
              </Link>
              <Link to="/trade-in" className="inline-flex items-center px-5 py-3 rounded-md border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50">
                Trade-In Options
              </Link>
            </div>
          </div>

          <ReviewsPreview />

          <FaqSection title="Frequently Asked Questions" items={homePage.faq ?? []} />
        </div>
      </section>
    </>
  );
};

export default Home;
