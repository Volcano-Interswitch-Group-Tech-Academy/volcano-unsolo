import React from "react";
import PageHead from "@/components/common/PageHead";
import MobileNav from "@/components/common/layout/MobileNav";
import Navbar from "@/components/common/layout/Navbar";
import { NextPage } from "next";
import LoginForm from "@/components/modules/Authentication/LoginForm";
import Footer from "@/components/common/layout/Footer";
import AppLayout from "@/components/common/layout/AppLayout";

const Login: NextPage = () => {
  <PageHead title="Login" description="Login Page" />;
  return (
    <>
      <AppLayout className={"primary_bg"}>
        <div className="authentication-glass mt-12">
          <div className="app-inner">
            <LoginForm />
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Login;
