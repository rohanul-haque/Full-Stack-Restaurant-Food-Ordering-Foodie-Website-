import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userDataLoader, setUserDataLoader] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchUserData = async () => {
    setUserDataLoader(true);
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(`${backendUrl}/user/data`, {
        headers: {
          token,
        },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message || "Failed to fetch user data");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setUserDataLoader(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) fetchUserData();
  }, []);

  const value = {
    backendUrl,
    userData,
    setUserData,
    userDataLoader,
    fetchUserData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
