import { createContext, useState } from "react";

export const WishListContext = createContext();

export const WishListContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add or remove item from wishlist
  const toggleWishlist = (itemId) => {
    setWishlist((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Check if item is in wishlist
  const isInWishlist = (itemId) => wishlist.includes(itemId);

  // Get total items in wishlist
  const totalWishlistItems = wishlist.length;

  const value = { toggleWishlist, isInWishlist, totalWishlistItems, wishlist };

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};
