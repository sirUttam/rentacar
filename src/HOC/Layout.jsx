import React from "react";
import { Outlet } from "react-router-dom";
import Toolbar from "../components/navigations/Toolbar";
import Footer from "../components/navigations/Footer";

function Layout() {
  return (
    <div className="">
      <Toolbar />
      <div className="pb-10 ">
        <Outlet />
      </div>
      <Footer />  
    </div>
  );
}

export default Layout;
