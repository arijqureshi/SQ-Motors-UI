import { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import financingOptionsImage from '../assets/images/financing-options.png';

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
            <div className="rounded-lg h-96 overflow-hidden">
              <img
                src={financingOptionsImage}
                alt="Financing options at SQ Motors"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {['application', 'requirements'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab === 'application' ? 'Apply Now' : 'Requirements'}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Save Time. Gain Peace of Mind.</h3>
                <p className="text-gray-600 mb-8">
                  Our auto financing application takes minutes to complete, which means less paperwork at the dealership.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">What you&apos;ll need</h4>
                    <p className="text-gray-600 mb-4">
                      You&apos;ll only need to supply us with this basic information:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">
                          <span className="font-semibold text-gray-900">Residence:</span> Address, time lived there, and who owns the property.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">
                          <span className="font-semibold text-gray-900">Income:</span> What type of income, with whom, your gross pay, and for how long.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">
                          <span className="font-semibold text-gray-900">SSN or ITIN:</span> Your Social Security Number or Individual Taxpayer Identification Number.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">
                          <span className="font-semibold text-gray-900">Co-Applicant:</span> You can even include a co-applicant to your application.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What to expect</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Share some details about yourself</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Get a fast credit decision</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Choose your car and close your contract at the dealership</span>
                      </li>
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
