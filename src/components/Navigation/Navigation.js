import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  color: "black",
  fontWeight: "bold"
};

const Navigation = () => {
  return (
    <nav>
      <NavLink activeStyle={style} exact to="/">
        Home
      </NavLink>
      <NavLink activeStyle={style} to="/about">
        About
      </NavLink>
      <NavLink activeStyle={style} to="/contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
