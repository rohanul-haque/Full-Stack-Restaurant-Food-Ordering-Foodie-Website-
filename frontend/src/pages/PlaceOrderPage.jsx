import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppContext } from "@/contexts/AppContext";
import { CartContext } from "@/contexts/CartContext";
import axios from "axios";
import { Loader2 } from "lucide-react"; // 🌀 added loader icon
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PlaceOrderPage = () => {
  const { getTotalCartAmount, foodList, cartItem, clearCart } =
    useContext(CartContext);
  const { backendUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderItems = [];

    foodList.forEach((item) => {
      if (cartItem[item._id]) {
        orderItems.push({ ...item, quantity: cartItem[item._id] });
      }
    });

    if (orderItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const orderData = {
      address: deliveryInfo,
      items: orderItems,
      amount: total,
    };

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const { data } = await axios.post(
        `${backendUrl}/order/place`,
        orderData,
        {
          headers: {
            token: `${token}`, // ✅ standardized header
          },
        }
      );

      if (data.success) {
        if (clearCart) clearCart();
        window.location.replace(data.session_url);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-16">
      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        onSubmit={handleSubmit}
      >
        {/* Delivery Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Delivery Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="firstName"
              value={deliveryInfo.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <Input
              name="lastName"
              value={deliveryInfo.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <Input
            name="email"
            type="email"
            value={deliveryInfo.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <Input
            name="street"
            value={deliveryInfo.street}
            onChange={handleChange}
            placeholder="Street Address"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="city"
              value={deliveryInfo.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
            <Input
              name="state"
              value={deliveryInfo.state}
              onChange={handleChange}
              placeholder="State/Province"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="zip"
              value={deliveryInfo.zip}
              onChange={handleChange}
              placeholder="Zip Code"
              required
            />
            <Input
              name="country"
              value={deliveryInfo.country}
              onChange={handleChange}
              placeholder="Country"
              required
            />
          </div>
          <Input
            name="phone"
            type="tel"
            value={deliveryInfo.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Cart Summary */}
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
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
              type="submit"
              variant="destructive"
              disabled={subtotal === 0 || loading}
              className="w-full flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Placing Order..." : "Proceed to Payment"}
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PlaceOrderPage;
