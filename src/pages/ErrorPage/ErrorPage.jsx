import errorImage from '../../assets/error/error-bg.jpg';

const ErrorPage = () => {
  return (
    <div 
      className="min-h-screen text-white flex flex-col items-center justify-center font-sans px-6 bg-black"
      style={{ 
        // Linear Gradient এবং Image একসাথে ব্যবহার করা হয়েছে
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${errorImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
        {/* Error Message Text */}
        <h1 className="text-[6rem] md:text-[8rem] font-black tracking-tighter text-white leading-none opacity-90">
          404-error
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white uppercase">
          PAGE NOT FOUND
        </h2>
        
        <p className="text-gray-300 text-base md:text-lg mb-10 max-w-md text-center leading-relaxed">
          Your search has ventured beyond the known universe.
        </p>
        
        {/* 'Back To Home' Button */}
        <a 
          href="/" 
          className="px-8 py-3 bg-[#23BE0A] text-white font-bold rounded-full hover:bg-[#1fa808] transition-all duration-300 shadow-[0px_0px_20px_rgba(35,190,10,0.4)]"
        >
          Back To Home
        </a>
     
    </div>
  );
};

export default ErrorPage;