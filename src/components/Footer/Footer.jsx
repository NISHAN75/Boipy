import {
  FaEnvelope, FaGlobe, FaInstagram, FaRegEnvelope, FaTwitter
} from 'react-icons/fa';
import {
  SiAmericanexpress, SiMastercard, SiPaypal, SiVisa
} from 'react-icons/si';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] pt-12 md:pt-16 pb-8 text-gray-700 ">
      <div className="container px-6 mx-auto">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 border-b border-gray-300 pb-12">
          
          {/* Contact Section */}
          <div className="space-y-6">
            <h6 className="text-3xl font-bold tracking-tighter text-black">Boipy</h6>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Us Free</p>
              <p className="text-2xl font-bold text-black">1800 68 68</p>
            </div>
            <div className="text-sm space-y-2 text-gray-500 leading-relaxed">
              <p>Address: 1234 Heaven Stress, USA.</p>
              <p>Email: info@example.com</p>
              <p>Fax: (+100) 123 456 7890</p>
            </div>
          </div>

          {/* Links Sections (Reusable Layout) */}
          {[
            { title: "Info", links: ["Custom Service", "F.A.Q.'s", "Ordering Tracking", "Contact Us", "Events", "Popular"] },
            { title: "Services", links: ["Sitemap", "Privacy Policy", "Your Account", "Advanced Search", "Term & Condition", "Contact Us"] },
            { title: "Account", links: ["About Us", "Delivery Information", "Privacy Policy", "Discount", "Custom Service", "Term & Condition"] }
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold uppercase mb-6 text-black tracking-[0.2em]">{section.title}</h3>
              <ul className="text-sm space-y-4 text-gray-500">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-black transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold uppercase mb-6 text-black tracking-[0.2em]">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Share contact information, store details, and brand content with your customers.
            </p>
            <div className="flex mb-8 group">
              <input 
                type="email" 
                placeholder="Your email address..." 
                className="bg-transparent border border-gray-300 border-r-0 px-4 py-3 w-full focus:outline-none focus:border-black transition-all text-sm"
              />
              <button className="bg-black text-white px-5 py-3 hover:bg-gray-800 transition-colors flex items-center justify-center">
                <FaRegEnvelope size={18} />
              </button>
            </div>
            <div className="flex space-x-3">
              {[FaInstagram, FaEnvelope, FaGlobe, FaTwitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:border-black hover:text-black hover:bg-white transition-all duration-300 shadow-sm">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-gray-500">
          <div className="text-center md:text-left order-2 md:order-1">
            © Copyright 2024 | <span className="text-black font-semibold">Boipy</span> By <span className="text-black font-semibold">devnishan</span>
          </div>
          
          <div className="flex items-center space-x-5 grayscale opacity-50 hover:opacity-100 transition-opacity order-1 md:order-2">
            <SiMastercard size={32} />
            <SiAmericanexpress size={32} />
            <SiVisa size={32} />
            <SiPaypal size={28} />
          </div>
        </div>
        <ScrollToTop></ScrollToTop>
      </div>
    </footer>
  );
};

export default Footer;