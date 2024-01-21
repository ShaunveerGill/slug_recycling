import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full mx-auto bg-white text-md py-4 shadow-lg">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <h1 className="flex-none text-xl font-semibold dark:text-blue-500">Slug Recycling</h1>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <NavLink to="/" className="font-medium text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md transition-all">Home</NavLink>
          <NavLink to="/learn" className="font-medium text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md transition-all" >Learn More</NavLink>
          <a href="https://github.com/ShaunveerGill/slug_recycling/tree/main" target="_blank" rel="noopener noreferrer">
            <img className="w-10 h-10" src="../../g.svg" alt="GitHub Logo" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
