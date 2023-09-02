import React from "react";
import PageHead from "@/components/common/PageHead";
import MobileNav from "@/components/common/layout/MobileNav";
import Navbar from "@/components/common/layout/Navbar";
import useMediaQuery from "@/components/common/layout/useMediaQuey";
import { NextPage } from "next";
import LoginForm from "@/components/modules/Authentication/LoginForm";
import Footer from "@/components/common/layout/Footer";

const Login: NextPage = () => {
  <PageHead title="Home" description="Landing Page" />;
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
      <PageHead title="Login" description="Login Page" />
      <div className="primary_bg full-height">
        {isDesktop ? <Navbar /> : <MobileNav />}
        <div className="authentication-glass">
          <div className="app-inner">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="primary_bg">
        <Footer />
      </div>
    </>
  );
};

export default Login;
