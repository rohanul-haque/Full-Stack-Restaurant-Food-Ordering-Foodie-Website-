import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { CartContext } from "@/contexts/CartContext";
import { WishListContext } from "@/contexts/WishListContext";
import { Heart } from "lucide-react";
import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Button } from "./ui/button";

const FoodCard = ({ food }) => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { cartItem, addToCart, removeFromCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishListContext);

  // Open modal
  const selectFoodHandler = (food) => {
    setSelectedFood(food);
    setModalOpen(true);
  };

 
  const handleAddToCart = () => {
    if (selectedFood) addToCart(selectedFood._id);
  };

  return (
    <>
      {/* Food Card */}
      <div
        onClick={() => selectFoodHandler(food)}
        className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition text-center relative overflow-hidden cursor-pointer"
      >
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-40 object-cover rounded-md"
        />
        <div className="space-y-2">
          <h3 className="mt-4 text-xl font-semibold">{food.name}</h3>
          <p className="mt-1 font-bold text-orange-500">Price: ${food.price}</p>
          <Button variant="outline" size="sm">
            See More
          </Button>
        </div>

        {/* Wishlist Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(food._id);
          }}
          className="absolute right-0 top-0 w-10 h-10 bg-orange-400 text-white shadow flex items-center justify-center rounded-bl-lg cursor-pointer"
        >
          {isInWishlist(food._id) ? (
            <FaHeart className="w-5 h-5 text-white" />
          ) : (
            <Heart className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Image */}
            <div className="sm:w-1/2">
              <img
                className="rounded-md w-full h-48 object-cover"
                src={selectedFood?.image}
                alt={selectedFood?.name}
              />
            </div>

            {/* Details */}
            <div className="sm:w-1/2 flex flex-col justify-between">
              <div>
                <DialogTitle className={"mb-2.5"}>
                  {selectedFood?.name || "Food Details"}
                </DialogTitle>
                <DialogDescription>
                  {selectedFood?.description
                    ? selectedFood.description.length > 120
                      ? selectedFood.description.slice(0, 120) + "..."
                      : selectedFood.description
                    : "No description available"}
                </DialogDescription>

                <h3 className="text-orange-600 font-bold mt-2">
                  Price: ${selectedFood?.price}
                </h3>
                <p className="mt-2">
                  <b>Category:</b> {selectedFood?.category || "N/A"}
                </p>

                {/* Quantity Control */}
                {selectedFood && (
                  <div className="flex items-center gap-2 mt-2">
                    <b>Quantity:</b>
                    <div className="border border-gray-300 px-2 py-1 flex items-center gap-2 rounded">
                      <button
                        onClick={() => removeFromCart(selectedFood._id)}
                        className="px-2 bg-gray-100 rounded disabled:opacity-50"
                        disabled={!cartItem[selectedFood._id]}
                      >
                        -
                      </button>
                      <span>{cartItem[selectedFood._id] || 0}</span>
                      <button
                        onClick={() => addToCart(selectedFood._id)}
                        className="px-2 bg-gray-100 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <Button variant="ghost" onClick={() => setModalOpen(false)}>
                  Close
                </Button>
                <Button variant="outline" onClick={handleAddToCart}>
                  🛒 Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FoodCard;
