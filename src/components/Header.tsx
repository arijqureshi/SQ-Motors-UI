import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" ref={mobileMenuRef}>
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-auto">
            <img 
              src="/src/assets/sq-motors-logo-transparent.png" 
              alt="SQ Motors Logo" 
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 ml-8">
            <Link to="/home" className="text-white hover:text-red-600 transition-colors">Home</Link>
            <Link to="/about-us" className="text-white hover:text-red-600 transition-colors">About Us</Link>
            <Link to="/financing" className="text-white hover:text-red-600 transition-colors">Financing</Link>
            <Link to="/inventory" className="text-white hover:text-red-600 transition-colors">Inventory</Link>
            <Link to="/reviews" className="text-white hover:text-red-600 transition-colors">Reviews</Link>
            <Link to="/contact" className="text-white hover:text-red-600 transition-colors">Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-white ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link to="/home" className="text-white hover:text-red-600 transition-colors" onClick={handleLinkClick}>Home</Link>
              <Link to="/about-us" className="text-white hover:text-red-600 transition-colors" onClick={handleLinkClick}>About Us</Link>
              <Link to="/financing" className="text-white hover:text-red-600 transition-colors" onClick={handleLinkClick}>Financing</Link>
              <Link to="/inventory" className="text-white hover:text-red-600 transition-colors" onClick={handleLinkClick}>Inventory</Link>
              <Link to="/reviews" className="text-white hover:text-red-600 transition-colors" onClick={handleLinkClick}>Reviews</Link>
              <Link to="/contact" className="text-white hover:text-red-600 transition-colors" onClick={handleLinkClick}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
