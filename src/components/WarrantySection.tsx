import { Link } from 'react-router-dom';

const WarrantySection = () => {
  return (
    <section id="warranty" className="bg-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Buying Support & Protection Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From financing to trade-in guidance, we make the process simple. Ask about optional ASC warranty plans on eligible vehicles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Financing Info Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Financing Info</h3>
            <p className="text-gray-600 mb-4">
              Get pre-approved for financing in minutes. We work with multiple lenders to find you the best rates and terms for your budget.
            </p>
            <Link to="/financing" className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center">
              Learn More →
            </Link>
          </div>

          {/* Trade-in Tips Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trade-in Tips</h3>
            <p className="text-gray-600 mb-4">
              Maximize your trade-in value with our expert guidance. We offer fair market values and hassle-free trade-in processes.
            </p>
            <Link to="/trade-in" className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center">
              Learn More →
            </Link>
          </div>

          {/* Contact Us Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-gray-600 mb-4">
              Have questions? Our knowledgeable staff is here to help. Reach out via phone, email, or visit our showroom today.
            </p>
            <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;
