import { Route, Routes } from "react-router-dom";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import AddFood from "./pages/AddFood";
import FoodListPage from "./pages/FoodListPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";

const App = () => {
  return (
    <Routes>
      <Route element={<AdminProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-food" element={<AddFood />} />
          <Route path="/food-list" element={<FoodListPage />} />
          <Route path="/orders" element={<PlaceOrderPage />} />
        </Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
