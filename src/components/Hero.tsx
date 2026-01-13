const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              SQ MOTORS LLC
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
              Premium Used Cars with ASC Warranty
            </p>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex space-x-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Cars
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Apply for Financing
              </button>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="md:hidden space-y-3 mb-8">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Available Cars
              </button>
              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Schedule A Test Drive
              </button>
            </div>

            {/* Mobile Feature Buttons */}
            <div className="md:hidden grid grid-cols-2 gap-3">
              <button className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                About Us
              </button>
              <button className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Our Warranty
              </button>
            </div>
          </div>

          {/* Right Content - Car Image Placeholder */}
          <div className="relative">
            <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500">Car Image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Feature Highlights */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Warranty Included</h3>
            <p className="text-gray-600 text-sm">All vehicles come with comprehensive ASC warranty coverage</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Financing Available</h3>
            <p className="text-gray-600 text-sm">Flexible financing options for all credit types</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Certified Vehicles</h3>
            <p className="text-gray-600 text-sm">Thoroughly inspected and certified pre-owned cars</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
