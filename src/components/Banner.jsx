import bannerStackImg from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="brand-text-gradient">Development Stack</span>
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#technologies"
                className="brand-gradient brand-gradient-hover text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all text-sm sm:text-base inline-flex items-center gap-2"
              >
                Explore Technologies
              </a>
              <button
                type="button"
                className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-medium px-6 py-3 rounded-lg shadow-2xs transition-all text-sm sm:text-base"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <img
                src={bannerStackImg}
                alt="Dev Stack Illustration"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
