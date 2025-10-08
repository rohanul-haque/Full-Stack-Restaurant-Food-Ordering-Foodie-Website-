import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AppContext } from "./AppContext";

export const WishListContext = createContext();

export const WishListContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const { backendUrl } = useContext(AppContext);

  const toggleWishlist = async (itemId) => {
    const token = localStorage.getItem("token");

    let action = "";

    setWishlist((prev) => {
      if (prev.includes(itemId)) {
        action = "removed";
        return prev.filter((id) => id !== itemId);
      } else {
        action = "added";
        return [...prev, itemId];
      }
    });

    toast.success(
      action === "added"
        ? "Wishlist added successfully"
        : "Removed from wishlist"
    );

    if (!token) return;

    try {
      const { data } = await axios.get(
        `${backendUrl}/wishlist/toggle/${itemId}`,
        {
          headers: { token },
        }
      );

      if (data.success) {
        setWishlist(data.wishlist || []);
      } else {
        toast.error(data.message || "Failed to update wishlist");
      }
    } catch (error) {
      toast.error("Wishlist update failed");
    } finally {
      setLoading(false);
    }
  };

  const fetchWishListData = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const { data } = await axios.get(`${backendUrl}/wishlist/list`, {
        headers: { token },
      });

      if (data.success) setWishlist(data.wishlist);
    } catch (error) {
      console.error("Fetch wishlist error:", error);
    }
  };

  useEffect(() => {
    fetchWishListData();
  }, []);

  const isInWishlist = (itemId) => wishlist.includes(itemId);
  const totalWishlistItems = wishlist.length;

  const value = {
    toggleWishlist,
    isInWishlist,
    totalWishlistItems,
    wishlist,
  };

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};
