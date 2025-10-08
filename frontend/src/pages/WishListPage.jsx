import FoodCard from "@/components/FoodCard";
import { Skeleton } from "@/components/ui/skeleton";
import { CartContext } from "@/contexts/CartContext";
import { WishListContext } from "@/contexts/WishListContext";
import { useContext } from "react";

const WishListPage = () => {
  const { foodList } = useContext(CartContext);
  const { wishlist } = useContext(WishListContext);

  const isLoading = !foodList || !wishlist;

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="space-y-2 border border-gray-200 rounded-md p-4"
          >
            <Skeleton className="w-full h-40 rounded-md bg-gray-200" />
            <Skeleton className="w-3/4 h-5 rounded bg-gray-200" />
            <Skeleton className="w-1/2 h-5 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    );
  }

  // Filter only foods that are in the wishlist
  const wishlistFoods = foodList.filter((food) => wishlist.includes(food._id));

  // If no items in wishlist
  if (wishlistFoods.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center text-gray-500">
        <h3 className="text-lg font-semibold">No items in your wishlist 😢</h3>
      </div>
    );
  }

  // Render wishlist foods
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {wishlistFoods.map((food) => (
        <FoodCard key={food._id} food={food} />
      ))}
    </div>
  );
};

export default WishListPage;
