import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink className="Nav-Item" exact to="/users">
        Users
      </NavLink>
      <NavLink className="Nav-Item" exact to="/users/:username">
        Single User
      </NavLink>
      <NavLink className="Nav-Item" exact to="/auth/login">
        Login
      </NavLink>
      <NavLink className="Nav-Item" exact to="/auth/register">
        Register
      </NavLink>
    </nav>
  );
}

export default NavBar;