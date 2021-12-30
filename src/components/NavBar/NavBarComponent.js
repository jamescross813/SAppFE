import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink 
        to="/"
        exact
        >
          Home
        </NavLink>
        <NavLink 
        to="/projects"
        exact
        >
          Projects
        </NavLink>
        <NavLink 
        to="/to_dos"
        exact
        >
          To Do
        </NavLink>
    </div>
  );
};

export default NavBar;
