import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

export default function withAuth (Component) {
  const AuthRoute = () => {
    const token = jwt_decode(localStorage.getItem("user_token"));
    if (token.isVerified === true) return <Component />;
    else return <Navigate to="/Login" />;
  };

  return AuthRoute;
};

