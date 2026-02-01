import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Inventory = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Facebook component - clean, aesthetic */}
      <div className="max-w-md mx-auto px-4 pt-12 pb-8">
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
      </div>

      {/* Under construction - minimal, aesthetic */}
      <section className="bg-gray-900 px-4 py-16 rounded-t-3xl">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-800 mb-6 border border-gray-700">
            <svg className="w-10 h-10 text-red-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Inventory page coming soon</h2>
          <p className="text-gray-400 text-sm mb-8">
            We&apos;re building a full inventory experience. In the meantime, visit our Facebook page above.
          </p>
          <Link
            to="/home"
            className="text-sm font-medium text-red-500 hover:text-red-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Inventory;
