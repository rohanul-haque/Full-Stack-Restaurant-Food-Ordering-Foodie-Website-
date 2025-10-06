import { assets } from "@/assets/assets";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border-b">
      <nav className="flex items-center justify-between py-3">
        {/* Logo */}
        <Link to={"/"} className="flex items-center">
          <img className="h-12 w-auto" src={assets.logo} alt="logo" />
        </Link>

        {/* Profile */}
        <div className="relative flex items-center gap-2" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
              src="https://avatars.githubusercontent.com/u/136685761?v=4"
              alt="Profile"
            />
            <ChevronDown
              className={`w-4 h-4 text-gray-700 transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Fixed Dropdown */}
          {dropdownOpen && (
            <div className="fixed top-18 right-4 md:right-12 w-48 bg-white border rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-out scale-100 opacity-100 overflow-hidden">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                My Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Settings
              </Link>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setDropdownOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
