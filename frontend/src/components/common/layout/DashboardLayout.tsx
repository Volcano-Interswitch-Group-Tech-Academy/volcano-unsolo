import SideNav from "@/components/modules/Dashboard/SideNav";
import React, { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [activeLabel, setActiveLabel] = useState<string>("Overview");
  return (
    <div className="flex">
      <SideNav setActiveLabel={setActiveLabel} />{" "}
      <div className="flex-1 p-10 bg-white  min-h-screen ">
        <div className=" relative ">
          <h1 className="button_bg text-white rounded-md p-3 mb-2 absolute top-0 left-0 min-w-full z-10">
            {activeLabel} Overview
          </h1>
        </div>
        <div className="mt-16 overflow-y-auto no-scrollbar" style={{ maxHeight: "80vh" }}>
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
