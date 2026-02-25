import { Link } from 'react-router-dom';
import HighlightsSection from './HighlightsSection';

const Hero = () => {
  return (
    <>
      <section className="bg-gray-900 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Link to="/inventory" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  View Cars
                </Link>
                <Link to="/financing" className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  Apply for Financing
                </Link>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="md:hidden space-y-3 mb-8">
                <Link to="/contact" className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors text-center block">
                  Schedule A Test Drive
                </Link>
                <Link to="/inventory" className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center block">
                  View Available Cars
                </Link>
              </div>

              {/* Mobile Feature Buttons */}
              <div className="md:hidden grid grid-cols-2 gap-3">
                <Link to="/about-us" className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center block">
                  About Us
                </Link>
                <Link to="/financing" className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center block">
                  Financing Options
                </Link>
              </div>

              {/* Mobile Video Placeholder */}
              <div className="md:hidden mt-4">
                <div className="bg-gray-800 border border-gray-700 rounded-xl aspect-video w-full flex items-center justify-center px-4">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                    </svg>
                    <p className="text-gray-300 font-medium">Video Placeholder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Video Placeholder */}
            <div className="hidden md:block">
              <div className="bg-gray-800 border border-gray-700 rounded-xl aspect-video w-full flex items-center justify-center px-4">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                  </svg>
                  <p className="text-gray-300 font-medium">Video Placeholder</p>
                </div>
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
