import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Contact, CookingPot, Home, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent cursor-pointer"
            >
              Halith MM
            </Link>
            <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-black font-medium transition-colors duration-300 cursor-pointer relative group"
            >
              <Home className="w-15 h-7" /> 
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-black font-medium transition-colors duration-300 cursor-pointer relative group"
            >
              <User className="w-15 h-7" /> 
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-black font-medium transition-colors duration-300 cursor-pointer relative group"
            >
              <WorkOutlineOutlinedIcon className="w-15 h-7" /> 
            </Link>
            <Link
              to="projectss"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-black font-medium transition-colors duration-300 cursor-pointer relative group"
            >
              <CookingPot className="w-15 h-6" />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-gray-700 to-black text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Contact className="w-15 h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className={`p-2 rounded-lg transition-all duration-300 ${
                isOpen
                  ? "bg-gray-100 text-blue-600"
                  : "text-gray-700 hover:text-black"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pt-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-black font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-black font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-black font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              Career
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-black font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
