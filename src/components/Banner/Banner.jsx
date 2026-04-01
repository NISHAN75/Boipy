import bannerImg from '../../assets/banner/banner-img.png';

const Banner = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-center">
          <div className="relative bg-[#f5f5f5] rounded-3xl p-8 md:p-16 lg:px-20 lg:py-24 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between overflow-hidden shadow-sm">
            <div className="z-5 text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-bold text-[#1a1a1a] leading-tight mb-8 lg:mb-12">
                Books to freshen up <br className="hidden lg:block" /> your bookshelf
              </h1>
              
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="#" 
                  className="px-6 py-2.5 bg-[#23BE0A] text-white font-semibold rounded-lg hover:bg-[#1fa808] transition shadow-sm text-center"
                >
                  View The List
                </a>
              </div>
            </div>
            {/* Right Image Section */}
            <div className="mt-12 lg:mt-0 md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
              <img 
                src={bannerImg} 
                alt="Bookshelf Banner" 
                className="w-full max-w-xs md:max-w-sm lg:max-w-md drop-shadow-2xl object-contain transition-transform duration-500 hover:scale-105" 
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;