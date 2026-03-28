import { useState } from 'react';
import MuxVideo from '@mux/mux-video-react';

const INSPECTION_PLAYBACK_ID = 'MrWt01JtYWT8Hr5lIY5Ao4lb36c9WtEgXIOwh1WpK7Dg';

const Inspections = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Vehicle Inspection</h1>
          <p className="text-lg text-gray-600">
            Every vehicle we sell goes through a structured multi-point inspection before it reaches our lot
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Prepare Each Vehicle</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We inspect each vehicle for safety, drivability, and overall condition before it is offered for sale.
              </p>
              <p>
                Our process helps identify items that need attention and gives buyers a clearer picture of the vehicle&apos;s condition.
              </p>
              <p>
                During your visit, ask our team to walk you through the checks completed on the vehicle you&apos;re considering.
              </p>
            </div>
          </div>
          <div>
            <div className="relative bg-gray-200 rounded-lg aspect-video w-full overflow-hidden">
              <MuxVideo
                playbackId={INSPECTION_PLAYBACK_ID}
                className="w-full h-full object-cover cursor-pointer"
                style={{ width: '100%', height: '100%', border: 'none', aspectRatio: '16 / 9' }}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                controls={false}
                preload="metadata"
                onClick={() => setIsMuted((prev) => !prev)}
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

        {/* Multi-Point Inspection */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Checks We Perform</h3>
          <p className="text-gray-600 mb-8 text-center">
            Our team reviews these key areas before a vehicle is listed:
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

        {/* Inspection Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h4>
            <p className="text-gray-600">Critical systems are checked before the vehicle is made available.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Fewer Surprises</h4>
            <p className="text-gray-600">Multi-point checks help catch common issues before you buy.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Clear Expectations</h4>
            <p className="text-gray-600">Our team can review inspection details so you can buy with confidence.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-red-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want Inspection Details On A Specific Car?</h3>
          <p className="text-gray-600 mb-6">
            Contact our team and we&apos;ll walk you through the inspection points for available inventory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/inventory"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              View Inventory
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

export default Inspections;
