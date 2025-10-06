import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyOrderPage from "./pages/MyOrderPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import SignupPage from "./pages/SignupPage";
import VerifyPage from "./pages/VerifyPage";
import WishListPage from "./pages/WishListPage";

const App = () => {
  return (
    <Routes>
      {/* Main Layout → Navbar + Footer থাকবে */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/wish-list" element={<WishListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/place-order" element={<PlaceOrderPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/my-orders" element={<MyOrderPage />} />
      </Route>

      {/* Auth Layout → Navbar/Footer ছাড়া */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
    </Routes>
  );
};

export default App;
