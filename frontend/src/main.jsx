import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AppContextProvider } from "./contexts/AppContext";
import { CartContextProvider } from "./contexts/CartContext.jsx";
import { WishListContextProvider } from "./contexts/WishListContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <CartContextProvider>
        <WishListContextProvider>
          <App />
          <Toaster position="top-right" reverseOrder={true} />
        </WishListContextProvider>
      </CartContextProvider>
    </AppContextProvider>
  </BrowserRouter>
);
