import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const token = localStorage.getItem("adminToken");

  if (!token) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default AdminProtectedRoute;
