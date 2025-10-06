import { assets, nav_links } from "@/assets/assets";
import { AppContext } from "@/contexts/AppContext";
import { CartContext } from "@/contexts/CartContext";
import { WishListContext } from "@/contexts/WishListContext";
import {
  ChevronDown,
  Heart,
  LogOut,
  Menu,
  ShoppingBasket,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const { getTotalCartAmount } = useContext(CartContext);
  const { totalWishlistItems } = useContext(WishListContext);
  const { userData, userDataLoader, setUserData } = useContext(AppContext);

  const cartCount = getTotalCartAmount();
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const navigate = useNavigate();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";

    const handleEsc = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [mobileMenuOpen]);

  // Close desktop dropdown if click outside
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

  const handleUserLogout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
    setMobileMenuOpen(false);
    toast.success("Logout Successful");
    navigate("/");
  };

  return (
    <header className="sticky top-0 left-0 z-50 bg-white border-b border-gray-300 py-4">
      <nav
        className="container mx-auto flex items-center justify-between"
        role="navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={assets.logo} alt="Company Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {nav_links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Wishlist */}
          <div className="relative">
            <Link to="/wish-list">
              <Heart className="cursor-pointer text-gray-700 hover:text-red-500 transition-colors" />
            </Link>
            {totalWishlistItems > 0 && (
              <span className="absolute -top-2.5 -right-1 h-2 w-2 bg-orange-500 rounded-full" />
            )}
          </div>

          {/* Cart */}
          <div className="relative">
            <Link to="/cart">
              <ShoppingBasket className="cursor-pointer text-gray-700 hover:text-orange-500 transition-colors" />
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2.5 -right-1 h-2 w-2 bg-orange-500 rounded-full" />
            )}
          </div>

          {/* User / Login */}
          {userDataLoader ? (
            <div className="animate-spin border-2 border-orange-500 border-t-transparent rounded-full w-7 h-7"></div>
          ) : userData ? (
            <div className="relative" ref={desktopDropdownRef}>
              <button
                className="flex items-center gap-1"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={userData.image}
                  alt="User Avatar"
                />
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Desktop Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-6 w-44 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <User size={16} /> Profile
                  </Link>
                  <Link
                    to="/my-orders"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <ShoppingCart size={16} /> My Orders
                  </Link>
                  <button
                    className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-100"
                    onClick={handleUserLogout}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button variant="destructive" onClick={() => navigate("/signup")}>
              Create Account
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          {userDataLoader ? (
            <div className="animate-spin border-2 border-orange-500 border-t-transparent rounded-full w-8 h-8"></div>
          ) : (
            userData && (
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={userData.image}
                alt="User Avatar"
              />
            )
          )}
          <button
            className="text-gray-700"
            aria-label="Open Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col border-r`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={assets.logo} alt="Company Logo" className="h-10 w-auto" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className="flex flex-col mt-6 gap-4 px-4"
          role="menu"
          aria-label="Mobile Navigation"
        >
          {nav_links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className="block text-gray-700 py-2 px-2 rounded hover:bg-orange-100 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Buttons Section */}
        <div className="flex flex-col gap-4 mt-6 px-4">
          {/* Wishlist + Cart */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <Link to="/wish-list" onClick={() => setMobileMenuOpen(false)}>
                <Heart className="cursor-pointer text-gray-700 hover:text-red-500 transition-colors" />
              </Link>
              {totalWishlistItems > 0 && (
                <span className="absolute -top-2.5 -right-1 h-2 w-2 bg-orange-500 rounded-full" />
              )}
            </div>
            <div className="relative">
              <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
                <ShoppingBasket className="cursor-pointer text-gray-700 hover:text-orange-500 transition-colors" />
              </Link>
              {cartCount > 0 && (
                <span className="absolute -top-2.5 -right-1 h-2 w-2 bg-orange-500 rounded-full" />
              )}
            </div>
          </div>

          {/* Mobile User Section */}
          {userDataLoader ? (
            <div className="animate-spin border-2 border-orange-500 border-t-transparent rounded-full w-5 h-5"></div>
          ) : userData ? (
            <div className="relative" ref={mobileDropdownRef}>
              <button
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-orange-100 transition w-full"
                onClick={() => setMobileDropdownOpen((prev) => !prev)}
              >
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={userData.image}
                  alt="User Avatar"
                />
                <span>{userData.name}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {mobileDropdownOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setMobileDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <User size={16} /> Profile
                  </Link>
                  <Link
                    to="/my-orders"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setMobileDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <ShoppingCart size={16} /> My Orders
                  </Link>
                  <button
                    className="flex items-center gap-2 w-full text-left px-3 py-2 hover:bg-gray-100"
                    onClick={handleUserLogout}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="destructive"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/signup");
              }}
            >
              Create Account
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
