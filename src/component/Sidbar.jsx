import React from "react";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-1/2 min-h-screen bg-gradient-to-b from-cyan-700 to-cyan-900 text-white p-6 shadow-lg flex flex-col gap-8">
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </aside>
  );
};

export default Sidebar;
