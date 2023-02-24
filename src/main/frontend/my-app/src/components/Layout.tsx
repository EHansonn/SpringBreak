import React, { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}
const Layout = () => {
  return (
    <div className="flex flex-col  h-screen relative bg-slate-800 text-white">
      <Navbar></Navbar>
      <main className="flex-1 flex flex-col p-4 max-h-[calc(100%-50px)]">
        <Outlet></Outlet>
      </main>
      <div className="text-blue-600"></div>
    </div>
  );
};

export default Layout;
