import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-_WGwB79yneED83NOF3CftGJW-6RNDUK-jkQuG5CC8KULB7q4GcYlgnKWdCBBlB1Qnk&usqp=CAU"
          alt="MIT Camera Culture Logo"
          width="40"
        />
      </NavLink>
    </div>
  );
};
