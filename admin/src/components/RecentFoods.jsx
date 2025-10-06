import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const RecentFoods = ({ foodList = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 border-t pt-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">Recent Add Foods</h2>
        <Button
          onClick={() => navigate("/add-food")}
          className="bg-amber-300 rounded text-black hover:text-white"
          size="sm"
        >
          Add New Food
        </Button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[700px] lg:min-w-full border border-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr className="text-gray-700">
              <th className="p-2 sm:p-3">Image</th>
              <th className="p-2 sm:p-3">Name</th>
              <th className="p-2 sm:p-3">Description</th>
              <th className="p-2 sm:p-3 text-center">Price</th>
              <th className="p-2 sm:p-3 text-center">Category</th>
            </tr>
          </thead>
          <tbody>
            {[...foodList]
              .reverse()
              .slice(0, 10)
              .map((food) => (
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
                    {food.description?.slice(0, 50) || ""}....
                  </td>
                  <td className="p-2 sm:p-3 text-center">${food.price ?? 0}</td>
                  <td className="p-2 sm:p-3 font-semibold text-center">
                    {food.category}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentFoods;
