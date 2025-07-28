import React from "react";
import Map from "../component/Map";
import Sidebar from "../component/Sidbar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] text-slate-800 font-sans p-6 md:p-10">
      <div className=" mx-auto flex ">
        <Sidebar />
        <Map />
      </div>
    </div>
  );
};

export default AppLayout;
