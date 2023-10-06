import DashboardLayout from "@/components/common/layout/DashboardLayout";
import BlogForm from "@/components/modules/Dashboard/Home/BlogForm";
import Card from "@/components/modules/Dashboard/Home/Card";
import React from "react";
import { requireAuth } from "@/utils/auth";
import { GetServerSidePropsContext } from "next/types";


const index = () => {


  
  return (
      <DashboardLayout>
        <Card />
        <BlogForm />
      </DashboardLayout>
  );
};

export default index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await requireAuth(context);
}
