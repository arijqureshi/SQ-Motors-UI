import { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Financing = () => {
  const [activeTab, setActiveTab] = useState('application');

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Financing Options</h1>
          <p className="text-lg text-gray-600">
            Flexible financing solutions to help you drive away in your dream car
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Easy & Affordable Financing</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At SQ Motors, we believe that everyone deserves access to reliable transportation. 
                That's why we offer flexible financing options to fit your budget and lifestyle.
              </p>
              <p>
                Our team works with multiple lenders to secure the best rates and terms for our customers. 
                Whether you have excellent credit or are working to rebuild it, we have options available for you.
              </p>
              <p>
                Get pre-approved in minutes and drive away the same day! Our simple application process 
                and quick approvals make car buying hassle-free.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500">Financing Options</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {['application', 'requirements', 'options'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab === 'application' ? 'Apply Now' : tab === 'requirements' ? 'Requirements' : 'Financing Options'}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            {activeTab === 'application' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick & Easy Application</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get pre-approved in minutes with our secure online financing application. 
                  Click below to start your journey toward driving away in your dream car!
                </p>
                <a
                  href="https://sqmotors.startyourcreditapproval.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Apply Now - Secure Application
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Application opens in a new window • Takes 5 minutes • No impact on credit score
                </p>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Financing Requirements</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Requirements</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Minimum age of 18 years</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Valid driver's license</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Proof of income (pay stubs, tax returns)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Proof of residence (utility bill, lease)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Minimum monthly income of $1,500</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Documents Needed</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-600">Government-issued ID</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-600">Recent pay stubs (3 months)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-600">Bank statements (2 months)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-600">Proof of auto insurance</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-600">References (personal/professional)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'options' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Financing Options</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="text-red-600 mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Traditional Auto Loan</h4>
                    <p className="text-gray-600 mb-4">Fixed rates with terms from 24 to 84 months. Best for those with good to excellent credit.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Rates as low as 3.9% APR</li>
                      <li>• Up to 84 months</li>
                      <li>• No prepayment penalties</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="text-red-600 mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Buy Here Pay Here</h4>
                    <p className="text-gray-600 mb-4">In-house financing for all credit types. We approve almost everyone!</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All credit types welcome</li>
                      <li>• Quick approval</li>
                      <li>• Flexible payment schedules</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="text-red-600 mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Lease-to-Own</h4>
                    <p className="text-gray-600 mb-4">Low monthly payments with option to own at the end of term.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Lower monthly payments</li>
                      <li>• Option to buy later</li>
                      <li>• Flexible terms</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose SQ Motors Financing?</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">5 Min</div>
              <div className="text-gray-300">Application Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-300">Approval Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">Same Day</div>
              <div className="text-gray-300">Drive Away</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-300">Lender Partners</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-red-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions About Financing?</h3>
          <p className="text-gray-600 mb-6">
            Our financing experts are here to help you find the best option for your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              Contact Us
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financing;
