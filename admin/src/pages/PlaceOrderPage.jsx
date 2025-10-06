import { assets } from "@/assets/assets";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const PlaceOrderPage = () => {
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { backendUrl } = useContext(AppContext);
  const [error, setError] = useState("");

  const fetchOrdersList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${backendUrl}/order/list`);
      if (data.success) setOrderList(data.orderList);
      else setOrderList([]);
    } catch (error) {
      setError("No orders found 😕");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrdersList();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const { data } = await axios.put(`${backendUrl}/order/status-change`, {
        orderId,
        status: newStatus,
      });

      if (data.success) {
        toast.success(data.message);
        fetchOrdersList();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block lg:w-1/6 border-r bg-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:pl-4 pt-4">
        {loading ? (
          <Loader />
        ) : orderList.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No orders found 😕</p>
        ) : (
          <div className="grid gap-4">
            {[...orderList].reverse().map((order) => (
              <div
                key={order._id}
                className="grid grid-cols-1 md:grid-cols-[50px_2fr_100px_100px_180px] gap-3 p-4 border border-gray-300 rounded"
              >
                {/* Image */}
                <img
                  className="w-14 h-14 object-contain"
                  src={assets.parcel_icon}
                  alt="parcel"
                />

                {/* Address & Items */}
                <div className="space-y-1">
                  <p className="font-medium text-gray-800">
                    {order.items.map((item, index) => (
                      <span key={index}>
                        {item.name} x {item.quantity}
                        {index !== order.items.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {order.address.street}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {order.address.city}, {order.address.state},{" "}
                    {order.address.zip}
                  </p>
                  <p className="text-gray-600 text-sm">
                    📞 {order.address.phone}
                  </p>
                  <p className="text-gray-600 text-sm">
                    📧 {order.address.email}
                  </p>
                </div>

                {/* Amount */}
                <p className="font-semibold text-gray-700">${order.amount}</p>

                {/* Total Items */}
                <p className="text-gray-700">Items: {order.items.length}</p>

                {/* Status Selector */}
                <div className="w-full md:w-[180px]">
                  <Select
                    defaultValue={order.status}
                    onValueChange={(value) =>
                      handleStatusChange(order._id, value)
                    }
                  >
                    <SelectTrigger className="w-full capitalize">
                      <SelectValue placeholder={order.status} />
                    </SelectTrigger>
                    <SelectContent className="capitalize">
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="out for delivery">
                        Out for delivery
                      </SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlaceOrderPage;
