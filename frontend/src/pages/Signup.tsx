import React from "react";
import PageHead from "@/components/common/PageHead";
import { NextPage } from "next";
import SignupForm from "@/components/modules/Authentication/SignupForm";
import AppLayout from "@/components/common/layout/AppLayout";

const Signup: NextPage = () => {
  <PageHead title="Home" description="Sign up Page" />;

  return (
    <>
      <AppLayout className={"primary_bg"}>
        <div className="authentication-glass">
          <div className="app-inner">
            <SignupForm />
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Signup;
