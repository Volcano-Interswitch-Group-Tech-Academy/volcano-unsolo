import PageHead from "@/components/common/PageHead";
import AppLayout from "@/components/common/layout/AppLayout";
import CreateDestinationModal from "@/components/modals/CreateDestinationModal";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/Searchbar";
import { useMediaQuery } from "@mui/material";
import { NextPage } from "next/types";
import React from "react";

const Destination: NextPage = () => {
  const handlesearch = () => {};
  <PageHead title="Destinations" description="List of destinations" />;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppLayout className={""}>
      <div className="px-10 mt-7">
        <div className=" flex flex-col lg:flex-row w-full justify-between">
          <div className="w-full">
            <SearchBar onSearch={handlesearch} />
          </div>
          <div className="flex lg:flex-row w-full flex-col  justify-end lg:gap-10 gap-2">
            <p className = "mt-2 ">No desired destination?</p>
            <Button
              children={"Create Destination"}
              className="button_bg text-white font-semibold p-3  border-radius"
              onClick={handleClickOpen}
            />
          </div>
        </div>
        <CreateDestinationModal open={open} onClose={handleClose}/>
      </div>
    </AppLayout>
  );
};

export default Destination;
