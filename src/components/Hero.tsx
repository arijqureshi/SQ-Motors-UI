import { useState } from 'react';
import { Link } from 'react-router-dom';
import HighlightsSection from './HighlightsSection';
import heroVideo from '../assets/videos/SQ Motors Hero.mp4';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);

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
                Premium Used Cars, Flexible Buying Options
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
                <div className="relative bg-gray-800 border border-gray-700 rounded-xl aspect-video w-full overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    src={heroVideo}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <button
                    type="button"
                    onClick={() => setIsMuted((prev) => !prev)}
                    className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-black/80 transition-colors"
                  >
                    {isMuted ? 'Tap for Sound' : 'Mute'}
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Video Placeholder */}
            <div className="hidden md:block">
              <div className="relative bg-gray-800 border border-gray-700 rounded-xl aspect-video w-full overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={heroVideo}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                />
                <button
                  type="button"
                  onClick={() => setIsMuted((prev) => !prev)}
                  className="absolute bottom-3 right-3 bg-black/70 text-white text-sm font-medium px-3 py-2 rounded-md hover:bg-black/80 transition-colors"
                >
                  {isMuted ? 'Tap for Sound' : 'Mute'}
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
