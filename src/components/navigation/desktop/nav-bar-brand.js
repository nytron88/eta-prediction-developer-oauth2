import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-_WGwB79yneED83NOF3CftGJW-6RNDUK-jkQuG5CC8KULB7q4GcYlgnKWdCBBlB1Qnk&usqp=CAU"
          alt="MIT Camera Culture Logo"
          width="50"
        />
      </NavLink>
    </div>
  );
};
