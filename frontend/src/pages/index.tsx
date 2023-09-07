import PageHead from "@/components/common/PageHead";
import AppLayout from "@/components/common/layout/AppLayout";
import Footer from "@/components/common/layout/Footer";
import MobileNav from "@/components/common/layout/MobileNav";
import Navbar from "@/components/common/layout/Navbar";
import useMediaQuery from "@/components/common/layout/useMediaQuey";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  <PageHead title="Home" description="Landing Page" />;

  return (
    <AppLayout className="">
      <div>

      </div>
    </AppLayout>
  );
};

export default Home;
