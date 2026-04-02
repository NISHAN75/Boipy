import { useContext, useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router";
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthContext/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Logout handler
  const handleLogOut = async () => {
    try {
      await logOut();
      Swal.fire({
        title: "Logged Out!",
        text: "You have been logged out successfully.",
        icon: "success",
        confirmButtonColor: "#23BE0A",
        timer: 2000,
        timerProgressBar: true,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "px-5 py-2 border border-[#23BE0A] text-[#23BE0A] rounded-lg font-semibold transition-all duration-500 ease-linear opacity-100"
      : "px-5 py-2 border rounded-lg border-transparent hover:border-[#23BE0A] hover:text-[#23BE0A] transition-all duration-500 ease-linear opacity-80 hover:opacity-100";

  return (
    <nav className="relative z-10">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tighter text-black tk-playfair-display">
          Boipy
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/listed-books" className={navLinkClass}>Listed Books</NavLink>
          <NavLink to="/page-to-read" className={navLinkClass}>Pages to Read</NavLink>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            // ✅ Logged in state
            <div className="flex items-center gap-3">
              {/* User Avatar */}
              <div className="relative group">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-10 h-10 rounded-full border-2 border-[#23BE0A] object-cover cursor-pointer"
                    title={user.displayName || user.email}
                  />
                ) : (
                  <div
                    className="w-10 h-10 rounded-full border-2 border-[#23BE0A] bg-[#23BE0A] text-white flex items-center justify-center font-bold cursor-pointer"
                    title={user.displayName || user.email}
                  >
                    {(user.displayName || user.email)?.[0]?.toUpperCase()}
                  </div>
                )}
                {/* ✅ Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  {user.displayName || user.email}
                </div>
              </div>

              {/* Logout Button */}
              <button
              type="button"
                onClick={handleLogOut}
                className="px-6 py-2.5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition shadow-sm cursor-pointer"
              >
                Log Out
              </button>
            </div>
          ) : (
            // ✅ Logged out state
            <>
              <NavLink
                to="/sing-in"
                className="px-6 py-2.5 bg-[#23BE0A] text-white font-semibold rounded-lg hover:bg-[#1fa808] transition shadow-sm text-center"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/sing-up"
                className="px-6 py-2.5 bg-[#59C6D2] text-white font-semibold rounded-lg hover:bg-[#4ab5c1] transition shadow-sm text-center"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-gray-800 focus:outline-none p-2">
            {isOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-xs z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Side Drawer */}
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

            {/* ✅ Mobile Auth Buttons */}
            <div className="pt-8 flex flex-col space-y-4">
              {user ? (
                <>
                  {/* User info */}
                  <div className="flex items-center gap-3 px-2 py-3 bg-gray-50 rounded-xl">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="user"
                        className="w-10 h-10 rounded-full border-2 border-[#23BE0A] object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#23BE0A] text-white flex items-center justify-center font-bold">
                        {(user.displayName || user.email)?.[0]?.toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-bold text-gray-800">{user.displayName || "User"}</p>
                      <p className="text-xs text-gray-500 truncate w-36">{user.email}</p>
                    </div>
                  </div>

                  {/* Logout */}
                  <button
                    onClick={() => { handleLogOut(); toggleMenu(); }}
                    className="w-full text-center py-3 bg-red-500 text-white font-bold rounded-xl shadow-lg hover:bg-red-600 transition"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/sing-in" onClick={toggleMenu} className="w-full text-center py-3 bg-[#23BE0A] text-white font-bold rounded-xl shadow-lg">
                    Sign In
                  </NavLink>
                  <NavLink to="/sing-up" onClick={toggleMenu} className="w-full text-center py-3 bg-[#59C6D2] text-white font-bold rounded-xl shadow-lg">
                    Sign Up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;