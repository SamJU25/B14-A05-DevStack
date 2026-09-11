import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Mobile: Hamburger Button (Left) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Brand Logo (Desktop: Left | Mobile: Center) */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg brand-gradient flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-sm">
              DS
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 flex items-center">
              Dev<span className="brand-text-gradient ml-1">Stack</span>
            </span>
          </div>

          {/* Desktop Nav Links (Center) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.active
                    ? 'brand-text-gradient font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth Action Buttons (Right) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              type="button"
              className="text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 px-2 sm:px-3 py-1.5 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              className="brand-gradient brand-gradient-hover text-white text-xs sm:text-sm font-medium px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 py-3 px-2 space-y-1 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  link.active
                    ? 'bg-orange-50 brand-text-gradient font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
