import { food_menu } from "@/assets/assets";
import { CartContext } from "@/contexts/CartContext";
import { useContext, useEffect, useMemo, useState } from "react";
import FoodCard from "./FoodCard";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton"; // ✅ shadcn skeleton

const FoodMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const { foodList = [], error, loading } = useContext(CartContext);

  // ✅ useMemo with correct dependencies
  const filteredFood = useMemo(() => {
    return foodList?.filter(
      (food) =>
        selectedMenu === "All" ||
        food.category.toLowerCase() === selectedMenu.toLowerCase()
    );
  }, [selectedMenu, foodList]);

  const totalPages = Math.ceil(filteredFood?.length / itemsPerPage);

  const paginatedFood = filteredFood?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // ✅ Prevent out-of-range page when category changes
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [totalPages, currentPage]);

  const handleCategoryChange = (category) => {
    setSelectedMenu(category);
    setCurrentPage(1);
  };

  return (
    <section id="our-menu" className="mt-20">
      <SectionTitle
        title={"🍽️ Our Food Menu"}
        description={`😋 Enjoy a delicious variety of dishes 🍛🍝🍕. Satisfy your cravings 😍, savor every bite 🍴🥗🌮🍰, and refresh with drinks 🥤🍹. Sweet treats 🍩🍦 included!`}
      />

      {/* Category Menu */}
      <ul className="flex justify-center items-center gap-2 mt-10 flex-wrap">
        {food_menu.map((item) => (
          <li
            key={item.id}
            onClick={() => handleCategoryChange(item.name)}
            className={`cursor-pointer border border-gray-200 rounded px-3 py-1.5 text-sm transition 
              ${
                selectedMenu === item.name
                  ? "bg-orange-400 text-white font-medium"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            <span className="mr-1">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>

      {/* ✅ Loading State */}
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {Array.from({ length: itemsPerPage }).map((_, idx) => (
            <div key={idx} className="space-y-3">
              <Skeleton className="h-40 w-full rounded-lg bg-gray-300" />
              <Skeleton className="h-4 w-2/3 bg-gray-300" />
              <Skeleton className="h-4 w-1/2 bg-gray-300" />
              <Skeleton className="h-10 w-full rounded-md bg-gray-300" />
            </div>
          ))}
        </div>
      ) : error ? (
        <p className="text-center mt-10 text-red-500 text-lg">❌ {error}</p>
      ) : paginatedFood?.length === 0 ? (
        <p className="text-center mt-10 text-gray-500 text-lg">
          😞 No Food Available in this category
        </p>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {paginatedFood?.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-10">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                variant="outline"
              >
                Prev
              </Button>
              <span className="px-4">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                variant="outline"
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default FoodMenu;
