import React from "react";
import { NavLink } from "react-router-dom";

const navLinkStyles =
  "transition-colors duration-300 cursor-pointer px-3 py-1 rounded-md";
const activeClass = "text-white bg-blue-500 shadow-md";
const inactiveClass = "text-gray-700 hover:text-blue-500";

const AppNav = () => {
  return (
    <nav className="bg-white p-4 shadow-lg rounded-xl  mt-4">
      <ul className="flex justify-center gap-6 text-lg font-semibold">
        <li>
          <NavLink
            to="countries"
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Countries
          </NavLink>
        </li>
        <li>
          <NavLink
            to="cities"
            className={({ isActive }) =>
              `${navLinkStyles} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Cities
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
