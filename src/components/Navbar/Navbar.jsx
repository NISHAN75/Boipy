import { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-10">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tighter text-black tk-playfair-display">
          Boipy
        </Link>

        {/* Desktop Navigation (Visible on md and above) */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <NavLink
            to="/"
            className="px-5 py-2 border border-[#23BE0A] text-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white transition-all duration-300"
          >
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-[#23BE0A] transition">
            About
          </NavLink>
          <NavLink to="/listed-books" className="hover:text-[#23BE0A] transition">
            Listed Books
          </NavLink>
          <NavLink to="/page-to-read" className="hover:text-[#23BE0A] transition">
            Pages to Read
          </NavLink>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="px-6 py-2.5 bg-[#23BE0A] text-white font-semibold rounded-lg hover:bg-[#1fa808] transition shadow-sm text-center">
            Sign In
          </a>
          <a href="#" className="px-6 py-2.5 bg-[#59C6D2] text-white font-semibold rounded-lg hover:bg-[#4ab5c1] transition shadow-sm text-center">
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button (Visible only on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-gray-800 focus:outline-none p-2">
            {isOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* --- Mobile Responsive Side Drawer --- */}

      {/* 1. Glassmorphism Overlay (কাঁচের মতো ব্যাকগ্রাউন্ড) */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-xs z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* 2. Side Menu Content (স্লাইড এনিমেশন সহ) */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white/80 backdrop-blur-lg z-50 shadow-2xl transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out md:hidden border-r border-white/20`}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-10">
            <span className="text-2xl font-bold text-black">Boipy</span>
            <button onClick={toggleMenu} className="text-3xl text-gray-800">
              <IoClose />
            </button>
          </div>
          
          {/* Mobile Links */}
          <div className="flex flex-col space-y-6 text-gray-700 font-semibold">
            <NavLink to="/" onClick={toggleMenu} className="text-[#23BE0A] text-lg bg-[#23BE0A]/10 px-4 py-2 rounded-lg">Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="hover:text-[#23BE0A] transition pl-4">About</NavLink>
            <NavLink to="/listed-books" onClick={toggleMenu} className="hover:text-[#23BE0A] transition pl-4">Listed Books</NavLink>
            <NavLink to="/page-to-read" onClick={toggleMenu} className="hover:text-[#23BE0A] transition pl-4">Pages to Read</NavLink>

            {/* Mobile Buttons */}
            <div className="pt-8 flex flex-col space-y-4">
              <NavLink to="/sign-in" onClick={toggleMenu} className="w-full text-center py-3 bg-[#23BE0A] text-white font-bold rounded-xl shadow-lg">
                Sign In
              </NavLink>
              <NavLink to="/sign-up" onClick={toggleMenu} className="w-full text-center py-3 bg-[#59C6D2] text-white font-bold rounded-xl shadow-lg">
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;