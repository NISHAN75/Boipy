import bannerImg from '../../assets/banner/banner-img.png';

const Banner = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-center">
          <div className="relative bg-[#f5f5f5] rounded-3xl p-8 md:p-16 lg:px-20 lg:py-24 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between overflow-hidden shadow-sm">
            <div className="z-10 text-center md:text-left md:w-1/2 lg:w-3/5">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-[#1a1a1a] leading-tight mb-8 lg:mb-12">
                Books to freshen up <br className="hidden lg:block" /> your bookshelf
              </h1>
              
              <div className="flex justify-center md:justify-start">
                <a 
                  href="#" 
                  className="btn btn-success lg:btn-lg bg-[#22c55e] hover:bg-[#16a34a] border-none text-white font-bold py-3 px-8 lg:px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  View The List
                </a>
              </div>
            </div>
            {/* Right Image Section */}
            <div className="mt-12 md:mt-0 md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
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