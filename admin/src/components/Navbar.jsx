import { assets } from "@/assets/assets";
import { AppContext } from "@/contexts/AppContext";
import {
  ChevronDown,
  DiamondPlus,
  LayoutDashboard,
  LogOut,
  Menu,
  ShoppingCart,
  X,
} from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaListOl } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const { adminData, adminDataLoading, setAdminData } = useContext(AppContext);

  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const navigate = useNavigate();

  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-l-md text-gray-700 hover:bg-orange-400 hover:text-white transition-all";
  const activeLinkClass = "bg-orange-500 text-white font-medium";

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    const handleEsc = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [mobileMenuOpen]);

  // Close dropdowns if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAdminLogout = () => {
    console.log("click");
    localStorage.removeItem("adminToken");
    setAdminData(null);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
    setMobileMenuOpen(false);
    toast.success("Logout Successful");
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-gray-300 py-4">
      <nav
        className="container mx-auto flex items-center justify-between"
        role="navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={assets.logo} alt="Company Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          {
            adminDataLoading ? (
              <div className="animate-spin border-2 border-orange-500 border-t-transparent rounded-full w-7 h-7"></div>
            ) : adminData ? (
              <div className="relative" ref={desktopDropdownRef}>
                <button
                  className="flex items-center gap-1"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      className="rounded-full"
                      src={adminData.image}
                      alt={adminData.name}
                    />
                  </Avatar>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-6 w-44 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
                    <button
                      className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-100"
                      onClick={handleAdminLogout}
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : null /* Remove Create Account button */
          }
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          {adminDataLoading ? (
            <div className="animate-spin border-2 border-orange-500 border-t-transparent rounded-full w-8 h-8"></div>
          ) : (
            adminData && (
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={adminData.image}
                alt="User Avatar"
              />
            )
          )}
          {adminData && (
            <button
              className="text-gray-700"
              aria-label="Open Menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      {adminData && (
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col border-r overflow-auto`}
        >
          {/* Header: Logo + Close */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src={assets.logo}
                alt="Company Logo"
                className="h-10 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav Links */}
          <ul
            className="flex flex-col mt-4 gap-4 px-4"
            role="menu"
            aria-label="Mobile Navigation"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeLinkClass : ""}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-food"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeLinkClass : ""}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                <DiamondPlus className="w-5 h-5" />
                Add Food
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/food-list"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeLinkClass : ""}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaListOl className="w-5 h-5" />
                Food List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeLinkClass : ""}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingCart className="w-5 h-5" />
                Orders
              </NavLink>
            </li>
          </ul>

          {/* Mobile User Section */}
          <div className="flex flex-col gap-4 mt-6 px-4">
            <div className="relative" ref={mobileDropdownRef}>
              <button
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-orange-100 transition w-full"
                onClick={() => setMobileDropdownOpen((prev) => !prev)}
              >
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={adminData.image}
                  alt="User Avatar"
                />
                <span>{adminData.name}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {mobileDropdownOpen && (
                <div className="relative mt-2 w-full bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
                  <button
                    className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-100"
                    onClick={handleAdminLogout}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
