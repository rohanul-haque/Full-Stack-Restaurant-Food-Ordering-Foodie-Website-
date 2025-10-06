import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AddFood from "./pages/AddFood";
import FoodListPage from "./pages/FoodListPage";
import HomePage from "./pages/HomePage";
import PlaceOrderPage from "./pages/PlaceOrderPage";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-food" element={<AddFood />} />
        <Route path="/food-list" element={<FoodListPage />} />
        <Route path="/orders" element={<PlaceOrderPage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
