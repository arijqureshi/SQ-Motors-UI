import Breadcrumbs from '../components/seo/Breadcrumbs';
import SeoHead from '../components/seo/SeoHead';
import { HOME_BREADCRUMB, getCorePageById } from '../config/seo';

const tradeInPage = getCorePageById('trade-in');

const TradeIn = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title={tradeInPage.title}
        description={tradeInPage.description}
        path={tradeInPage.path}
        breadcrumbs={[HOME_BREADCRUMB, { label: 'Trade-In', path: tradeInPage.path }]}
      />

      <div className="max-w-5xl mx-auto">
        <Breadcrumbs items={[HOME_BREADCRUMB, { label: 'Trade-In', path: tradeInPage.path }]} />

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trade-In</h1>
          <p className="text-lg text-gray-600">
            Tell us about your current vehicle and we&apos;ll provide a fair trade-in evaluation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 sm:p-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScP6Dltgvv7AJE683KhAnAyfLQMCOoh3bQNu7AWqQCauL7sDg/viewform?embedded=true"
            title="SQ Motors Trade-In Form"
            className="w-full rounded-md"
            height="2262"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading...
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default TradeIn;
