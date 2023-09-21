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
        " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
      buttonText: "Join Destination",
    },
    {
      packageName: "Unsolo for Groups",
      packageDescription:
        " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
      buttonText: "Crete Trip",
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
