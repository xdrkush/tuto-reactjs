import React from "react";
import { Navigate } from "react-router-dom";

const withAdmin = (Component) => {
  const AdminRoute = () => {
    const isAdmin = localStorage.getItem("user_admin");
    if (isAdmin) {
      return <Component />;
    } else {
      return <Navigate to="/Login" />;
    }
  };

  return AdminRoute;
};

export default withAdmin;
