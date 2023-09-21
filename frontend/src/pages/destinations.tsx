import PageHead from "@/components/common/PageHead";
import AppLayout from "@/components/common/layout/AppLayout";
import CreateDestinationModal from "@/components/modals/CreateDestinationModal";
import Card from "@/components/modules/Destination/Card";
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

  const destinations = [
    {
      photos: [
        "/morocco.jpg",
        "/one.jpg",
        "/two.jpg",
        "/three.jpg",
        "/four.jpg",
      ],
      country: "Morocco",
      city: "Casablanca",
      depature: "21-Dec-2023",
      return: "28-Dec-2023",
      days: "5",
      participant: "7",
      totalParticipant: "10",
      slot: "3",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum",
      price: "₦3,000,000",
    },

    {
      photos: [
        "/morocco.jpg",
        "/one.jpg",
        "/two.jpg",
        "/three.jpg",
        "/four.jpg",
      ],
      country: "Morocco",
      city: "Casablanca",
      depature: "21-Dec-2023",
      return: "28-Dec-2023",
      days: "5",
      participant: "7",
      totalParticipant: "10",
      slot: "3",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum",
      price: "₦3,000,000",
    },
    {
      photos: [
        "/morocco.jpg",
        "/one.jpg",
        "/two.jpg",
        "/three.jpg",
        "/four.jpg",
      ],
      country: "Morocco",
      city: "Casablanca",
      depature: "21-Dec-2023",
      return: "28-Dec-2023",
      days: "5",
      participant: "7",
      totalParticipant: "10",
      slot: "3",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum",
      price: "₦3,000,000",
    },
    {
      photos: [
        "/morocco.jpg",
        "/one.jpg",
        "/two.jpg",
        "/three.jpg",
        "/four.jpg",
      ],
      country: "Morocco",
      city: "Casablanca",
      depature: "21-Dec-2023",
      return: "28-Dec-2023",
      days: "5",
      participant: "7",
      totalParticipant: "10",
      slot: "3",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum",
      price: "₦3,000,000",
    },
    {
      photos: [
        "/morocco.jpg",
        "/one.jpg",
        "/two.jpg",
        "/three.jpg",
        "/four.jpg",
      ],
      country: "Maldives",
      city: "Casablanca",
      depature: "21-Dec-2023",
      return: "28-Dec-2023",
      days: "5",
      participant: "7",
      totalParticipant: "10",
      slot: "3",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum",
      price: "₦3,000,000",
    },
  ];
  return (
    <AppLayout className={""}>
      <div className="px-10 mt-7">
        <div className=" flex flex-col lg:flex-row w-full justify-between">
          <div className="w-full">
            <SearchBar onSearch={handlesearch} />
          </div>
          <div className="flex lg:flex-row w-full flex-col  justify-end lg:gap-10 gap-2">
            <p className="mt-2 ">No desired destination?</p>
            <Button
              children={"Create Destination"}
              className="button_bg text-white font-semibold p-3  border-radius"
              onClick={handleClickOpen}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-10 flex-wrap mt-10 content-between">
          {destinations.map((data, index) => (
            // <Link to={data.route} key={index}>
            <div className="">
              {" "}
              <Card
                images={data.photos}
                countryName={data.country}
                cityName={data.city}
                daysOfTrip={data.days}
                depatureDate={data.depature}
                returnDate={data.return}
                participants={data.participant}
                totalParticipant={data.totalParticipant}
                availableSlots={data.slot}
                price={data.price}
                description={data.des}
              />
            </div>

            // </Link>
          ))}
        </div>
        <CreateDestinationModal open={open} onClose={handleClose} />
      </div>
    </AppLayout>
  );
};

export default Destination;
