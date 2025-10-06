import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const MyOrderPage = () => {
  const [orderList, setOrderList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { backendUrl } = useContext(AppContext);

  const fetchOrdersList = async () => {
    setLoading(true);
    setError("");

    try {
      const { data } = await axios.get(`${backendUrl}/order/user-order-list`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      if (data.success) {
        setOrderList(data.orderList);
      } else {
        setError("Orders not found");
      }
    } catch (err) {
      setError("🥲 No orders found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) fetchOrdersList();
  }, []);

  if (loading) {
    return (
      <section className="mt-10 space-y-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-3 md:grid-cols-[50px_1.5fr_100px_100px_150px_100px] items-center p-4 border border-gray-300 rounded"
          >
            <Skeleton className="w-10 h-10 rounded-md bg-gray-300" />
            <Skeleton className="h-4 w-full md:w-3/4 bg-gray-300" />
            <Skeleton className="h-4 w-16 bg-gray-300" />
            <Skeleton className="h-4 w-20 bg-gray-300" />
            <Skeleton className="h-4 w-24 bg-gray-300" />
            <Skeleton className="h-8 w-24 rounded-md bg-gray-300" />
          </div>
        ))}
      </section>
    );
  }

  if (error) return <p className="text-red-500 flex items-center justify-center min-h-[50vh]">{error}</p>;

  return (
    <section className="mt-10">
      <div className="grid gap-4">
        {orderList.reverse().map((order) => (
          <div
            key={order._id}
            className="grid grid-cols-1 gap-2.5 md:gap-0 md:grid-cols-[50px_1.5fr_100px_100px_150px_100px] items-center p-4 border border-gray-300 rounded"
          >
            <img className="w-10 h-10" src={assets.parcel_icon} alt="parcel" />

            <p>
              {order.items.map((item, index) => (
                <span key={index}>
                  {item.name} x {item.quantity}
                  {index !== order.items.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>

            <p>${order.amount}</p>
            <p>Items: {order.items.length}</p>

            <p className="flex items-center gap-1">
              <span className="w-2 h-2 bg-orange-500 inline-block rounded-full"></span>
              <span className="capitalize text-gray-700">{order.status}</span>
            </p>

            <Button
              className="bg-amber-300 rounded font-normal text-black hover:text-white cursor-pointer"
              size="sm"
              onClick={fetchOrdersList}
            >
              Track Order
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyOrderPage;
