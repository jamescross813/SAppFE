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
        to="/user//projects"
        exact
        >
          Projects
        </NavLink>
        {/* add in a calendar link later" */}
    </div>
  );
};

export default NavBar;
