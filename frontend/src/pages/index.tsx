import PageHead from "@/components/common/PageHead";
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
    <div className="primary_bg full-height">
      <div className=" secondary_bg full-height">

        <div> {isDesktop ? <Navbar /> : <MobileNav />}</div>
        
      </div>
      <div className="flex-end bg-transparent">
          <Footer/>
        </div>
    </div>
  );
};

export default Home;
