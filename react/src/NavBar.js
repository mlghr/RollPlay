import React from "react";
import { NavLink } from "react-router-dom";
import SignUp from "./SignUp"
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/users">
        Users
      </NavLink>
      <NavLink exact to="/users/:username">
        Users
      </NavLink>
      <NavLink exact to="/auth/login">
        Login
      </NavLink>
      <NavLink exact to="/auth/register">
        Register
      </NavLink>
      <NavLink exact to="/auth/register">
        <SignUp />
      </NavLink>
    </nav>
  );
}

export default NavBar;