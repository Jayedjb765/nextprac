import Sidebar from "@/components/SideBar";
import React from "react";

const Dashboardlayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default Dashboardlayout;
