import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";

const AdminRoute = () => {
  const [admin] = UseAdmin();
  const location = useLocation();
  if (!admin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default AdminRoute;
