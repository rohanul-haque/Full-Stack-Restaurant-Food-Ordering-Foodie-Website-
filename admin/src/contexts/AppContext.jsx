import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(null);
  const [adminDataLoading, setAdminDataLoading] = useState(false);
  const [adminDataError, setAdminDataError] = useState("");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchAdminData = async () => {
    setAdminDataLoading(true);
    setAdminDataError("");
    try {
      const { data } = await axios.get(`${backendUrl}/admin/data`, {
        headers: {
          token: localStorage.getItem("adminToken"),
        },
      });

      if (data.success) {
        setAdminData(data.adminData);
      } else {
        setAdminDataError(data.message || "Failed to fetch admin data");
      }
    } catch (error) {
      setAdminDataError("No data found");
    } finally {
      setAdminDataLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      fetchAdminData();
    }
  }, []);

  const value = {
    backendUrl,
    adminData,
    adminDataLoading,
    adminDataError,
    fetchAdminData,
    setAdminData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
