import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
      <NavLink className="navbar-brand" to="/">
        useContext
      </NavLink>
      <div className="" id="base">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
