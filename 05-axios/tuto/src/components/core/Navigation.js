import "./Navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const { title, link } = props;

  return (
    <div className="navigation">
      {/* Title */}
      <a href={"/"}>{title}</a>
      {/* Item-list */}
      <ul className="row">
        {link.map((link) => {
          return (
            <NavLink key={link} exact="true" to={ "/" + link } activeclassname="active">
              { link }
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
