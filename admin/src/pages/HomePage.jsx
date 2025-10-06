import Loader from "@/components/Loader";
import { OrderBarChart } from "@/components/OrderBarChart";
import RecentFoods from "@/components/RecentFoods";
import RecentUser from "@/components/RecentUser";
import Sidebar from "@/components/Sidebar";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const HomePage = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { backendUrl } = useContext(AppContext);

  const formatDate = (date) => {
    if (!date) return "—";
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) return "Invalid Date";

    const options = { month: "short", day: "numeric", year: "numeric" };
    return parsedDate.toLocaleDateString("en-US", options);
  };

  const fetchDashboardData = async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get(`${backendUrl}/dashboard/data`);

      if (data.success) {
        const formattedOrders = (data.orderList || [])
          .reverse()
          .slice(0, 10)
          .map((order) => ({
            amount: order.amount || 0,
            date: formatDate(order.date || order.createdAt || new Date()),
          }));

        setOrdersData(formattedOrders);
        setFoodList(data.foodList);
        setCustomerList(data.customerList);
      } else {
        setError("Dashboard data not found.");
      }
    } catch (err) {
      setError("Error fetching dashboard data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [backendUrl]);

  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block lg:w-1/6 border-r bg-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:pl-4 pt-4">
        {loading && <Loader />}
        {!loading && error && (
          <p className="text-red-600 text-center my-6">{error}</p>
        )}
        {!loading && !error && (
          <>
            <OrderBarChart ordersData={ordersData} />
            <RecentFoods foodList={foodList} />
            <RecentUser customerList={customerList} />
          </>
        )}
      </div>
    </section>
  );
};

export default HomePage;
