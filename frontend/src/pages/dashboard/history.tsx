import DashboardLayout from "@/components/common/layout/DashboardLayout";
import Table from "@/components/table/Table";
import { TableProps } from "@/helpers/types/table";
import React from "react";
import { requireAuth } from "@/utils/auth";
import { GetServerSidePropsContext } from "next/types";

const history = () => {
  const caption = "Go down memory lane";
  const THEAD = ["Country", "City", "D.O.D", "Price", "No of Days", ""];
  // replace with array Object
  const TBODY: TableProps["tableBody"] = [
    {
      country: "Morocco",
      city: "Casablanca",
      dob: "12/7/23",
      price: 3_000_000,
      days: "5",
      blank: "View details",
    },
    {
      country: "Morocco",
      city: "Casablanca",
      dob: "12/7/23",
      price: 3_000_000,
      days: "5",
      blank: "View details",
    },
    {
      country: "Morocco",
      city: "Casablanca",
      dob: "12/7/23",
      price: 3_000_000,
      days: "5",
      blank: "View details",
    },
    {
      country: "Morocco",
      city: "Casablanca",
      dob: "12/7/23",
      price: 3_000_000,
      days: "5",
      blank: "View details",
    },
    {
      country: "Morocco",
      city: "Casablanca",
      dob: "12/7/23",
      price: 3_000_000,
      days: "5",
      blank: "View details",
    },
    {
      country: "Morocco",
      city: "Casablanca",
      dob: "12/7/23",
      price: 3_000_000,
      days: "5",
      blank: "View details",
    },
  ];
  return (
    <DashboardLayout>
      <div className="mt-7 font-bold">
        Go down memory lane
      </div>
      <Table tableHead={THEAD} tableBody={TBODY} />
    </DashboardLayout>
  );
};

export default history;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await requireAuth(context);
}