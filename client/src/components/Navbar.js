import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <NavLink to="/home" activeClassName="active-link" className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        Home
      </NavLink>
      <NavLink to="/demo" activeClassName="active-link" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        Demo
      </NavLink>
      <NavLink to="/learn" activeClassName="active-link" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        Learn
      </NavLink>
    </header>
  );
};

export default Navbar;
