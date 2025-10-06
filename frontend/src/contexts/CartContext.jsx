import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AppContext } from "./AppContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [foodList, setFoodList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [cartItem, setCartItem] = useState({});

  const { backendUrl } = useContext(AppContext);

  const addToCart = async (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (localStorage.getItem("token")) {
      try {
        await axios.post(
          `${backendUrl}/cart/add/${itemId}`,
          {},
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
      } catch (error) {
        toast.error("Cart add failed");
      }
    }

    toast.success("Cart added successfully");
  };

  const removeFromCart = async (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (localStorage.getItem("token")) {
      try {
        await axios.delete(`${backendUrl}/cart/remove/${itemId}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });
      } catch (error) {
        toast.error("Cart remove failed");
      }
    }

    toast.success("Cart remove successfully");
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = foodList?.find((food) => food._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[item];
        }
      }
    }

    return totalAmount;
  };

  const fetchFoodList = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(`${backendUrl}/food/list`);

      if (data.success) {
        setFoodList(data.foodList);
      } else {
        setError("Failed to load food list");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong while fetching food list"
      );
    } finally {
      setLoading(false);
    }
  };

  const loadCartData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/cart/list`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      if (data.success) {
        setCartItem(data.cartList);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchFoodList();

    if (localStorage.getItem("token")) loadCartData();
  }, []);

  const value = {
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    foodList,
    error,
    loading,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
