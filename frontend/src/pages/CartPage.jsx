import { Input } from "@/components/ui/input";
import { CartContext } from "@/contexts/CartContext";
import { SlideRigth } from "@/hooks/Animation";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const CartPage = () => {
  const { cartItem, removeFromCart, getTotalCartAmount, foodList } =
    useContext(CartContext);

  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const hasItems = cartItem && Object.values(cartItem).some((qty) => qty > 0);

  if (!hasItems) {
    return (
      <section className="mt-20 text-center">
        <p className="text-gray-500 text-lg italic">🛒 Your cart is empty</p>
      </section>
    );
  }

  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  return (
    <section className="mt-10">
      {/* Cart Table */}
      <motion.div
        variants={SlideRigth(0.5)}
        initial="hidden"
        whileInView="visible"
        className="overflow-x-auto"
      >
        <table className="w-full min-w-[600px] border border-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr className="text-gray-700">
              <th className="p-2 sm:p-3">Item</th>
              <th className="p-2 sm:p-3">Title</th>
              <th className="p-2 sm:p-3 text-center">Price</th>
              <th className="p-2 sm:p-3 text-center">Quantity</th>
              <th className="p-2 sm:p-3 text-center">Total</th>
              <th className="p-2 sm:p-3 text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {foodList?.map((food) => {
              if (cartItem[food._id] > 0) {
                return (
                  <tr
                    key={food._id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-2 sm:p-3">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-12 sm:w-14 h-12 sm:h-14 object-cover rounded-lg border"
                      />
                    </td>
                    <td className="p-2 sm:p-3 font-medium">{food.name}</td>
                    <td className="p-2 sm:p-3 text-center">${food.price}</td>
                    <td className="p-2 sm:p-3 text-center">
                      {cartItem[food._id]}
                    </td>
                    <td className="p-2 sm:p-3 font-semibold text-center">
                      ${food.price * cartItem[food._id]}
                    </td>
                    <td className="p-2 sm:p-3 text-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(food._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 sm:w-5 h-4 sm:h-5" />
                      </Button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </motion.div>

      {/* Checkout & Promo */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mt-10">
        {/* Cart Summary */}
        <motion.div
          variants={SlideRigth(0.6)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/2 p-6 rounded-lg space-y-4"
        >
          <h3 className="text-xl font-semibold pb-2">Cart Total</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600 border-b pb-1">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span className="font-medium">${deliveryFee}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold border-t pt-2">
              <span>Total</span>
              <span className="text-green-600">${total}</span>
            </div>
          </div>
          <Button
            onClick={() => navigate("/place-order")}
            variant="destructive"
            disabled={subtotal === 0}
            className="w-full"
          >
            Proceed to Checkout
          </Button>
        </motion.div>

        {/* Promo Code Section */}
        <motion.div
          variants={SlideRigth(0.8)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/2 p-6 rounded-lg space-y-3"
        >
          <p className="text-gray-600">
            If you have a promo code, enter it here:
          </p>
          <div className="flex gap-2">
            <Input type="text" placeholder="Enter Promo Code" />
            <Button>Apply</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CartPage;
