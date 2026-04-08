import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { LOCAL_PAGES, SERVICE_AREA_LINE } from '../config/seo';
import logoTransparent from '../assets/sq-motors-logo-transparent.png';

const topLinks = [
  { to: '/inventory', label: 'Inventory' },
  { to: '/financing', label: 'Financing' },
  { to: '/trade-in', label: 'Trade-In' },
  { to: '/contact', label: 'Contact' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/sitemap', label: 'Sitemap' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logoTransparent} alt="SQ Motors Logo" className="h-10 mr-3" />
              <span className="text-xl font-semibold">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-gray-300 mb-4">SQ Motors is a used car dealership serving the Springfield, Missouri area.</p>
            <p className="text-gray-300 mb-4">{SERVICE_AREA_LINE}</p>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>{COMPANY_INFO.address}</p>
              <p>{COMPANY_INFO.phone}</p>
              <p>{COMPANY_INFO.email}</p>
              <p>Mon-Wed: {COMPANY_INFO.hours.monday}</p>
              <p>Thursday: {COMPANY_INFO.hours.thursday}</p>
              <p>Fri-Sat: {COMPANY_INFO.hours.friday}</p>
              <p>Sunday: {COMPANY_INFO.hours.sunday}</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <a href={COMPANY_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
                Map & Directions
              </a>
              <a href={COMPANY_INFO.facebookPage} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Main Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {topLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-red-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {LOCAL_PAGES.map((page) => (
                <li key={page.id}>
                  <Link to={page.path} className="hover:text-red-400 transition-colors">{page.city}, MO</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
