import React, { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}
const Layout = () => {
  return (
    <div className="flex flex-col h-screen relative overflow-hidden bg-white ">
      <Navbar></Navbar>
      <main className="flex-1 flex flex-col p-4 max-h-[calc(100%-50px)] text-white">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
