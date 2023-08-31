import React from "react";
import PageHead from "@/components/common/PageHead";
import MobileNav from "@/components/common/layout/MobileNav";
import Navbar from "@/components/common/layout/Navbar";
import useMediaQuery from "@/components/common/layout/useMediaQuey";
import { NextPage } from "next";
import SignupForm from "@/components/modules/Authentication/SignupForm";
import Footer from "@/components/common/layout/Footer";

const Signup: NextPage = () => {
  <PageHead title="Home" description="Landing Page" />;
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <>
      <div className="primary_bg full-height">
        {isDesktop ? <Navbar /> : <MobileNav />}
        <div className="authentication-glass">
          <div className="app-inner">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="primary_bg">
        <Footer />
      </div>
    </>
  );
};

export default Signup;
