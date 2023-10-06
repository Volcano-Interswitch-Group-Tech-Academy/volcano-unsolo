import Gap from "@/components/common/Gap";
import PageHead from "@/components/common/PageHead";
import AppLayout from "@/components/common/layout/AppLayout";
import FAQ from "@/components/modules/LnadingPage/FAQ";
import Hero from "@/components/modules/LnadingPage/Hero";
import Packages from "@/components/modules/LnadingPage/Packages";
import Reviews from "@/components/modules/LnadingPage/Reviews";
import TravelPoint from "@/components/modules/LnadingPage/TravelPoint";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const packageOffers = [
    {
      packageName: "Unsolo for Individuals",
      packageDescription:
        "Unsolo celebrates the traveler's spirit. With Unsolo for Individuals, embark on your personal journey and craft your unforgettable story. Discover new places, meet like-minded explorers, and embrace the beauty of not traveling alone.",
      buttonText: "Join Destination",
    },
    {
      packageName: "Unsolo for Groups",
      packageDescription:
        " Discover the magic of group travel with Unsolo for Groups. Whether you're planning a family adventure, a friends' getaway, or a team-building retreat, Unsolo brings you closer to the world and each other. Explore, bond, and create unforgettable memories together.",
      buttonText: "Create Trip",
    },
  ];

  <PageHead title="Home" description="Landing Page" />;

  return (
    <AppLayout className="">
      <Hero />
      <Gap v={3} />
      <div className="mt-20">
        <h1 className="text-center mb-8 text-3xl font-semibold">Packages</h1>
        <div className="flex lg:flex-row flex-col mx-14 lg:mx-60  justify-center items-center gap-10">
          {packageOffers.map((pacakages, index) => (
            <div>
              <Packages
                buttonText={pacakages.buttonText}
                packageName={pacakages.packageName}
                packageDescription={pacakages.packageDescription}
              />
            </div>
          ))}
        </div>
      </div>
      <Gap v={3} />

      <TravelPoint />
      <Gap v={3} />

      <Reviews />

      <Gap v={3} />

      <FAQ />
    </AppLayout>
  );
};

export default Home;
