import HighlightsSection from './HighlightsSection';

const Hero = () => {
  return (
    <>
      {/* Main Hero Section with Car Background */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hellcat-hero.png" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                SQ MOTORS <span className="text-red-600">LLC</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-600 mb-8">
                Premium Used Cars with ASC Warranty
              </p>
              
              {/* Desktop CTA Buttons */}
              <div className="hidden md:flex space-x-4 mb-12">
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  View Cars
                </button>
                <button className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  Apply for Financing
                </button>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="md:hidden space-y-3 mb-8">
                <button className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  Schedule A Test Drive
                </button>
                <button className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  View Available Cars
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

          </div>
        </div>
      </section>

      <HighlightsSection />
    </>
  );
};

export default Hero;
