import { DiamondPlus, LucideLayoutDashboard, ShoppingCart } from "lucide-react";
import { FaListOl } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-l-md text-gray-700 hover:bg-orange-400 hover:text-white transition-all";

  const activeLinkClass = "bg-orange-500 text-white font-medium";

  return (
    <aside>
      <ul className="mt-3 flex flex-col gap-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ""}`
            }
          >
            <LucideLayoutDashboard className="w-5 h-5" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-food"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ""}`
            }
          >
            <DiamondPlus className="w-5 h-5" />
            Add Food
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/food-list"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ""}`
            }
          >
            <FaListOl className="w-5 h-5" />
            Food List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ""}`
            }
          >
            <ShoppingCart className="w-5 h-5" />
            Orders
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
