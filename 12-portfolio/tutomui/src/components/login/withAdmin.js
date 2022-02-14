import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'

export default function withAdmin (Component) {
  const AdminRoute = () => {
    const token = jwt_decode(localStorage.getItem("user_admin"));
    if (token.isAdmin === true) return <Component />;
    else return <Navigate to="/Login" />;
  };

  return AdminRoute;
};
