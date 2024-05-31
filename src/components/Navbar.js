import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
      <li>
      <NavLink to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
    </li>
        <li>
          <NavLink to="/courses" className="nav-link" activeClassName="active">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className="nav-link"
            activeClassName="active"
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
