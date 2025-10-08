import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const FoodListPage = () => {
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { backendUrl } = useContext(AppContext);

  const fetchFoodList = async () => {
    setLoading(true);
    setError("");

    try {
      const { data } = await axios.get(`${backendUrl}/food/list`);

      if (data.success) {
        setFoodList(data.foodList);
      } else {
        setFoodList([]);
        setError("No food found");
      }
    } catch (err) {
      setFoodList([]);
      setError("Food list not found");
    } finally {
      setLoading(false);
    }
  };

  const deleteFood = async (id) => {
    try {
      const { data } = await axios.delete(`${backendUrl}/food/${id}`);

      if (data.success) {
        toast.success(data.message);
        fetchFoodList();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Food Delete Failed 🥲");
    }
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      <div className="hidden lg:block lg:w-1/6 border-r bg-white">
        <Sidebar />
      </div>

      <div className="flex-1 lg:pl-4 pt-4 pb-5">
        {loading ? (
          <Loader />
        ) : foodList && foodList.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[700px] lg:min-w-full border border-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr className="text-gray-700">
                  <th className="p-2 sm:p-3">Image</th>
                  <th className="p-2 sm:p-3">Name</th>
                  <th className="p-2 sm:p-3">Description</th>
                  <th className="p-2 sm:p-3 text-center">Price</th>
                  <th className="p-2 sm:p-3 text-center">Category</th>
                  <th className="p-2 sm:p-3 text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                {foodList.reverse().map((food) => (
                  <tr
                    key={food._id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-2 sm:p-3">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-12 sm:w-14 h-12 sm:h-14 object-cover rounded-lg border"
                      />
                    </td>
                    <td className="p-2 sm:p-3 font-medium">{food.name}</td>
                    <td className="p-2 sm:p-3 max-w-[250px] lg:max-w-[400px] whitespace-normal break-words">
                      {food.description.slice(0, 50)}....
                    </td>
                    <td className="p-2 sm:p-3 text-center">${food.price}</td>
                    <td className="p-2 sm:p-3 font-semibold text-center">
                      {food.category}
                    </td>
                    <td className="p-2 sm:p-3 text-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteFood(food._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 sm:w-5 h-4 sm:h-5" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500 text-lg font-medium">
              🍽️ {error || "No food available"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodListPage;
