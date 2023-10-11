import PageHead from "@/components/common/PageHead";
import AppLayout from "@/components/common/layout/AppLayout";
import CreateDestinationModal from "@/components/modals/CreateDestinationModal";
import Card from "@/components/modules/Destination/Card";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/Searchbar";
import { useMediaQuery } from "@mui/material";
import { NextPage } from "next/types";
import React from "react";
import JoinDestinationModal from './../components/modals/JoinDestinationModal';

const Destination: NextPage = () => {
  <PageHead title="Destinations" description="List of destinations" />;

  const [open, setOpen] = React.useState(false);
  const [openJoin, setOpenJoin] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
      city: "Rabat",
      depature: "21-Dec-2023",
      return: "28-Dec-2023",
      days: "5",
      participant: "7",
      totalParticipant: "10",
      slot: "3",
      des: "Morocco is a captivating destination known for its rich history, stunning landscapes, and vibrant culture. From the bustling markets of Marrakech to the serene Sahara Desert, this North African gem offers a diverse range of experiences. Explore ancient cities, savor flavorful cuisine, and immerse yourself in the warmth of Moroccan hospitality.",
      price: "600,000",
    },

    {
      photos: [
        "/morocco.jpg",
        "/one.jpg",
        "/two.jpg",
        "/three.jpg",
        "/four.jpg",
      ],
      country: "South Africa",
      city: "Cape town",
      depature: "21-Dec-2023",
      return: "28-Dec-2023",
      days: "5",
      participant: "7",
      totalParticipant: "10",
      slot: "3",
      des: "South Africa is a country of remarkable contrasts, where you can encounter wildlife in Kruger National Park, relax on stunning beaches, and explore vibrant cities like Cape Town. It's known for its diverse landscapes, wildlife safaris, and a blend of cultures.",
      price: "900,000",
    },
    {
      photos: [
        "/morocco.jpg",
        "/one.jpg",
        "/two.jpg",
        "/three.jpg",
        "/four.jpg",
      ],
      country: "Brazil",
      city: "Brasília",
      depature: "21-Dec-2023",
      return: "28-Dec-2023",
      days: "5",
      participant: "7",
      totalParticipant: "10",
      slot: "3",
      des: "Brazil is a land of natural wonders and vibrant festivities. From the iconic Christ the Redeemer statue overlooking Rio de Janeiro to the Amazon rainforest's biodiversity, Brazil offers an array of experiences. Enjoy samba music, pristine beaches, and the world's largest Carnival celebration.",
      price: "1,000,000",
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
      city: "Malé",
      depature: "21-Dec-2023",
      return: "28-Dec-2023",
      days: "5",
      participant: "7",
      totalParticipant: "10",
      slot: "3",
      des: "The Maldives is an idyllic tropical paradise with crystal-clear waters, overwater bungalows, and coral reefs teeming with marine life. It's a top destination for honeymooners and those seeking luxurious beach getaways.",
      price: "1,500,000",
    },
    {
      photos: [
        "/morocco.jpg",
        "/one.jpg",
        "/two.jpg",
        "/three.jpg",
        "/four.jpg",
      ],
      country: "Canada",
      city: "Toronto",
      depature: "21-Dec-2023",
      return: "28-Dec-2023",
      days: "5",
      participant: "7",
      totalParticipant: "10",
      slot: "3",
      des: "Canada is renowned for its stunning natural beauty, including the Rocky Mountains, pristine lakes, and vast wilderness. It's a destination for outdoor enthusiasts, offering opportunities for hiking, skiing, and wildlife viewing. Explore vibrant cities like Toronto and Vancouver.",
      price: "1,300,000",
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
        <CreateDestinationModal open={open} onClose={handleClose} />
        <JoinDestinationModal onOpen = {openJoin} close={handleCloseJoin}/>
      </div>
    </AppLayout>
  );
};

export default Destination;
