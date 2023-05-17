import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      {window.location.pathname === "/home" ? (
        <div className="flex flex-auto ">{children}</div>
      ) : (
        <div className="flex flex-auto ">
          <Sidebar />
          <div className="grow w-64">
            <Navbar />
            <div className="m-5">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
