const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info (2 columns on large screens) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center text-white font-bold text-sm shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev<span className="brand-text-gradient ml-1">Stack</span>
              </span>
            </div>
            
            <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center space-x-4 text-xs font-semibold text-slate-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#about" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#privacy" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
