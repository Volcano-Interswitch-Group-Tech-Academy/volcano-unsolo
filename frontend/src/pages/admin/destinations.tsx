import DashboardLayout from "@/components/common/layout/admin/DashboardLayout";
import AdminCreateDestinationModal from "@/components/modals/AdminCreateDestinationModal";
import AdminDestinationCard from "@/components/modules/Admin/AdminDestinationCard";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/Searchbar";

import React from "react";

const destination = () => {
  const [open, setOpen] = React.useState(false);
  const [openCreate, setOpenCreate] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlesearch = () => {};

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
    <DashboardLayout>
      <div className="flex flex-row justify-between my-5">
        <SearchBar onSearch={handlesearch} />
        <Button
          children={"Create a Destination"}
          className="button_bg text-white font-semibold p-3 rounded-sm"
          onClick={handleClickOpen}
        />
      </div>
      <div className="flex lg:flex-row flex-col flex-wrap gap-20">
        {destinations.map((data, index) => (
          // <Link to={data.route} key={index}>
          <div className="mt-10 ">
            {" "}
            <AdminDestinationCard
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
        <AdminCreateDestinationModal open={open} onClose={handleClose} />
      </div>
    </DashboardLayout>
  );
};

export default destination;
