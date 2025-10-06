import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyPage = () => {
  const [searchParems, setSearchParems] = useSearchParams();

  const success = searchParems.get("success");
  const orderId = searchParems.get("orderId");

  const navigate = useNavigate();

  const { backendUrl } = useContext(AppContext);

  console.log(success, orderId);

  const verifyPayment = async () => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/order/verify`,
        {
          orderId,
          success,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      if (data.success) {
        navigate("/my-orders");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error();
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="h-[50vh] w-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-orange-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default VerifyPage;
