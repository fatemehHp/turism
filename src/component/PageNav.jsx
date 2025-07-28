import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className="bg-[#F0FDF9] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          {/* navbar */}
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) => {
                  return isActive
                    ? "text-white bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-full shadow-md font-semibold scale-105 transition duration-300"
                    : "text-[#0E7490] hover:text-[#115E59] font-medium transition duration-200";
                }}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) => {
                  return isActive
                    ? "text-white bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-full shadow-md font-semibold scale-105 transition duration-300"
                    : "text-[#0E7490] hover:text-[#115E59] font-medium transition duration-200";
                }}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return isActive
                    ? "text-white bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-full shadow-md font-semibold scale-105 transition duration-300"
                    : "text-[#0E7490] hover:text-[#115E59] font-medium transition duration-200";
                }}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
