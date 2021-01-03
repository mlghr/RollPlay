import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar-container">
      <nav className="NavBar">
        <NavLink className="NavLink-home" exact to="/">
          Home
        </NavLink>
        <NavLink className="NavLink" exact to="/match">
          Find Matches
        </NavLink>
        <NavLink className="NavLink" exact to="/login">
          Login
        </NavLink>
        <NavLink className="NavLink" exact to="/register">
          Register
        </NavLink>
        <NavLink className="NavLink-Chat" exact to="/join">
          Join
        </NavLink>
      </nav>
    </div>
    
  );
}

export default NavBar;