import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = localStorage.getItem("user_token");
    if (isAuth && isAuth !== 'visitor' && isAuth.length >= 10) {
      return <Component />;
    } else {
      return <Navigate to="/Login" />;
    }
  };

  return AuthRoute;
};

export default withAuth;
