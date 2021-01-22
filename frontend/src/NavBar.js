import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar-container">
      <nav className="NavBar">
        <NavLink className="NavLink-home" exact to="/home">
          Home
        </NavLink>
        <NavLink className="NavLink" exact to="/match">
          Find Matches
        </NavLink>
        <NavLink className="NavLink" exact to="/matchboard">
          View Matches
        </NavLink>
        <NavLink className="NavLink" exact to="/login">
          Login
        </NavLink>
        <NavLink className="NavLink" exact to="/register">
          Register
        </NavLink>
        <NavLink className="NavLink-Chat" exact to="/">
          Join Chat
        </NavLink>
      </nav>
    </div>
    
  );
}

export default NavBar;