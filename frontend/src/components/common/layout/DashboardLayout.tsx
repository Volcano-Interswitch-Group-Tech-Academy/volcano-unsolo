import SideNav from "@/components/modules/Dashboard/SideNav";
import React, { useState } from "react";
import { useRouter } from "next/router";


interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();
  const [activeLabel, setActiveLabel] = useState<string>("Overview");
  const getLabelFromPath = (path: string) => {
    if (path === "/dashboard") {
      return "Dashboard";
    }
    if (path === "/dashboard/pools") {
      return "Pools";
    }
    if (path === "/dashboard/history") {
      return "History";
    }
    if (path === ('/dashboard/wallet')) {
      return "Wallet";
    }
    if (path === ('/dashboard/wallet/target')) {
      return "Target";
    }
   
    return "Overview"; // Default case
  };
  
  
  const labelForHeader = getLabelFromPath(router.pathname);
  return (
    <div className="flex">
      <SideNav setActiveLabel={setActiveLabel} />{" "}
      <div className="flex-1 p-10 bg-white  min-h-screen ">
        <div className=" relative ">
          <h1 className="button_bg text-white rounded-md p-3 mb-2 absolute top-0 left-0 min-w-full z-10">
            {labelForHeader} Overview
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
