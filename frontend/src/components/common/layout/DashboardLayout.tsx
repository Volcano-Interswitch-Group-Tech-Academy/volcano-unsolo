import SideNav from "@/components/modules/Dashboard/SideNav";
import React, { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [activeLabel, setActiveLabel] = useState<string>('Overview'); 
  return (
    <div className="flex">
      <SideNav setActiveLabel={setActiveLabel} />{" "}
      <div className="flex-1 p-10 bg-white  min-h-screen">
        <div className=" button_bg  text-white rounded-md p-3 mb-5">
          <h1>{activeLabel} Overview</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
