import PageHead from "@/components/common/PageHead";
import AppLayout from "@/components/common/layout/AppLayout";
import useMediaQuery from "@/components/common/layout/useMediaQuey";
import Hero from "@/components/modules/LnadingPage/Hero";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  <PageHead title="Home" description="Landing Page" />;

  return (
    <AppLayout className="">
        <Hero/>
    </AppLayout>
  );
};

export default Home;
