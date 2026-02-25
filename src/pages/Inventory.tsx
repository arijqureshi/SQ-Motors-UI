import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Inventory = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-16">
      <div className="max-w-2xl mx-auto">
        
        {/* Facebook Component - Centered */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Browse Our Current Inventory</h3>
          <p className="text-gray-600">See our latest arrivals and available vehicles on Facebook</p>
        </div>
        
        <a
          href={COMPANY_INFO.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-red-900/10 hover:border-red-600/30 transition-all duration-300 overflow-hidden border border-gray-200 group"
        >
          <div className="flex items-center gap-4 p-5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0">
              <img
                src="/src/assets/sq-motors-logo-transparent.png"
                alt="SQ Motors"
                className="w-9 h-9 object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900">SQ Motors LLC</p>
              <p className="text-sm text-gray-500">View our inventory on Facebook</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <div className="px-5 pb-5">
            <div className="rounded-xl bg-gray-50 border border-gray-100 overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center border-b border-gray-100">
                <svg className="w-14 h-14 text-red-600/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">facebook.com</p>
                <p className="font-medium text-gray-900">Browse our latest vehicles</p>
                <p className="text-sm text-red-600 mt-0.5">Cars, trucks & SUVs — updated frequently</p>
              </div>
            </div>
          </div>
        </a>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-blue-900">Why Facebook?</p>
              <p className="text-xs text-blue-700 mt-1">
                Our Facebook page is updated in real-time with our latest arrivals, pricing, and vehicle details. It's the best way to see what's currently available.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link
            to="/home"
            className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
