import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const RecentUser = ({ customerList = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 border-t pt-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">Recent Order Customer Profile</h2>
        <Button
          onClick={() => navigate("/orders")}
          className="bg-amber-300 rounded text-black hover:text-white"
          size="sm"
        >
          Orders List
        </Button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[700px] lg:min-w-full border border-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr className="text-gray-700">
              <th className="p-2 sm:p-3">Image</th>
              <th className="p-2 sm:p-3">Name</th>
              <th className="p-2 sm:p-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {[...customerList]
              .slice()
              .reverse()
              .slice(0, 10)
              .map((customer) => (
                <tr
                  key={customer._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-2 sm:p-3">
                    <img
                      src={customer.image || "/placeholder.png"}
                      alt={customer.name || "User"}
                      className="w-12 sm:w-14 h-12 sm:h-14 object-cover border rounded-full"
                    />
                  </td>
                  <td className="p-2 sm:p-3 font-medium">
                    {customer.name || "N/A"}
                  </td>
                  <td className="p-2 sm:p-3">{customer.email || "N/A"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentUser;
