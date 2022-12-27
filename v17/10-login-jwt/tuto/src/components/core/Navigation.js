import "./Navigation.css";
import React from "react";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = (props) => {
  const { title, link } = props;
  const navigate = useNavigate();
  const userToken = localStorage.getItem("user_token");
  const userAdmin = localStorage.getItem("user_admin");
  const user = useSelector((state) => state.login.user);

  const logout = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_verified");
    localStorage.removeItem("user_admin");
    window.location.reload();
    navigate("/");
  };

  const checkLoggedIn = (link) => {
    switch (link) {
      case "Login":
        if (userToken === "visitor")
          return (
            <NavLink
              key={link}
              exact="true"
              to={"/" + link}
              activeclassname="active"
            >
              {link}
            </NavLink>
          );
        else
          return (
            <button key={link} className="button is-black" onClick={logout}>
              Log out
            </button>
          );

      case "Admin":
        if (!userAdmin) {
          return;
        } else
          return (
            <NavLink
              key={link}
              exact="true"
              to={"/" + link}
              activeclassname="active"
            >
              {link}
            </NavLink>
          );
      case "Profile":
        if (userToken === "visitor") {
          return;
        } else
          return (
            <NavLink
              key={link}
              exact="true"
              to={{pathname: "/Profile/" + user.name, state: user}}
              activeclassname="active"
            >
              {link} : {user.name}
            </NavLink>
          );
      default:
        return (
          <NavLink
            key={link}
            exact="true"
            to={"/" + link}
            activeclassname="active"
          >
            {link}
          </NavLink>
        );
    }
  };

  return (
    <div className="navigation">
      {/* Title */}
      <a href={"/"}>{title}</a>
      {/* Item-list */}
      <ul className="row">
        {link.map((link) => {
          return checkLoggedIn(link);
        })}
      </ul>
    </div>
  );
};

export default Navigation;
