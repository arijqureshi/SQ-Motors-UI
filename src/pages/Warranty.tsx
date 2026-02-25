import { COMPANY_INFO } from '../constants';

const Warranty = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ASC Warranty Protection</h1>
          <p className="text-lg text-gray-600">
            Drive with confidence knowing your vehicle is protected by comprehensive warranty coverage
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose ASC Warranty?</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                SQ Motors offers ASC Warranty with our vehicles. As a car buyer, having ASC Warranty adds an extra layer of confidence to every purchase.
              </p>
              <p>
                Every eligible vehicle also goes through a comprehensive 10-point inspection process to ensure quality and reliability. This structured evaluation helps confirm vehicles meet high standards before coverage is activated.
              </p>
              <p>
                With ASC Warranty, you can drive with peace of mind knowing that your investment is protected by one of the most trusted warranty providers in the industry.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-gray-500">Warranty Protection Video</p>
              </div>
            </div>
          </div>
        </div>

        {/* 10-Point Inspection */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Comprehensive 10-Point Inspection</h3>
          <p className="text-gray-600 mb-8 text-center">
            Every eligible vehicle undergoes a thorough inspection process covering:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              'Engine performance',
              'Transmission function',
              'Electrical systems',
              'Braking components',
              'Suspension integrity',
              'Steering response',
              'Cooling system operation',
              'Drivetrain condition',
              'Fluid levels and leaks',
              'Overall safety features'
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Peace of Mind</h4>
            <p className="text-gray-600">Drive confidently knowing your vehicle is protected against unexpected repairs.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Financial Protection</h4>
            <p className="text-gray-600">Avoid costly repair bills and budget more effectively with predictable coverage.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
            <p className="text-gray-600">Only vehicles passing our rigorous inspection qualify for warranty coverage.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-red-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Coverage Options</h3>
          <p className="text-gray-600 mb-6">
            To explore coverage options and enrollment details, visit the ASC Warranty website
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ascwarranty.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              Visit ASC Warranty
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
