import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main className="container mx-auto px-4 lg:px-8 overflow-hidden">
        <Navbar />
        <Outlet />
      </main>
      <Footer />
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-2.5 bg-orange-400 text-white rounded-md shadow-lg hover:bg-orange-500 transition"
          title="Scroll to top"
        >
          <Link to={"/"}>
            <ChevronUp size={24} />
          </Link>
        </button>
      )}
    </>
  );
};

export default MainLayout;
