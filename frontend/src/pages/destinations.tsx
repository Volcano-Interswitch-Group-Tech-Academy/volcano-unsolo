import PageHead from "@/components/common/PageHead";
import AppLayout from "@/components/common/layout/AppLayout";
import CreateDestinationModal from "@/components/modals/CreateDestinationModal";
import Card from "@/components/modules/Destination/Card";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/Searchbar";
import { NextPage } from "next/types";
import React from "react";
import JoinDestinationModal from "./../components/modals/JoinDestinationModal";
import { useUser } from "@/store/context";
import { notification } from "antd";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

const Destination: NextPage = () => {
  <PageHead title="Destinations" description="List of destinations" />;

  const [open, setOpen] = React.useState(false);
  const [openJoin, setOpenJoin] = React.useState(false);

  const { data: session } = useSession();

  console.log(session, "session");

  const { isLoggedIn } = useUser();

  const handleClickOpen = () => {
    console.log("Is user logged in:", isLoggedIn);
    if (isLoggedIn) {
      setOpen(true);
    } else {
      notification.error({
        message: "Unable to open",
        description: "Please login to create a destination.",
      });
    }
  };

  const handlesearch = () => {};

  const handlOpenJoinClick = () => {
    setOpenJoin(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseJoin = () => {
    setOpenJoin(false);
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
      price: "3,000,000",
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
      price: "3,000,000",
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
      price: "3,000,000",
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
      price: "3,000,000",
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
      price: "3,000,000",
    },
  ];
  return (
    <AppLayout className={""}>
      <div className="lg:px-10 mt-7">
        <div className=" px-10 flex flex-col lg:flex-row w-full justify-between">
          <div className="w-full">
            <SearchBar onSearch={handlesearch} />
          </div>
          <div className="flex lg:flex-row w-full flex-col  justify-end lg:gap-10 gap-2">
            <p className="mt-2 ">No desired destination?</p>
            <Button
              children={"Create a Trip"}
              className="button_bg text-white font-semibold p-3  border-radius"
              onClick={handleClickOpen}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col flex-wrap mt-10">
          {destinations.map((data, index) => (
            // <Link to={data.route} key={index}>
            <div className="mt-10">
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
                onClick={handlOpenJoinClick}
              />
            </div>

            // </Link>
          ))}
        </div>
        {isLoggedIn ? (
          <CreateDestinationModal open={open} onClose={handleClose} />
        ) : null}
        <JoinDestinationModal onOpen={openJoin} close={handleCloseJoin} />
      </div>
    </AppLayout>
  );
};

export default Destination;

// export async function getServerSideProps(context:any) {
//   const session = await getSession(context);
//   console.log(session);
//   return { props: {} };
// }
