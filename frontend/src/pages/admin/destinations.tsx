import DashboardLayout from "@/components/common/layout/admin/DashboardLayout";
import SearchBar from "@/components/ui/Searchbar";
import { Button } from "antd";
import React from "react";

const destination = () => {
  
  const [open, setOpen] = React.useState(false);
  const [openCreate, setOpenCreate] = React.useState(false);

  const handlesearch = () => {};

  const handleClickOpen = () => {
    setOpen(true);
  }

  return (
    <DashboardLayout>
      <div className="lg:px-10 mt-7">
        <div className=" px-10 flex flex-col lg:flex-row w-full justify-between">
          <div className="w-full">
            <SearchBar onSearch={handlesearch} />
          </div>
            <Button
              children={"Create a Trip"}
              className="button_bg text-white font-semibold p-3  border-radius"
              onClick={handleClickOpen}
            />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default destination;
