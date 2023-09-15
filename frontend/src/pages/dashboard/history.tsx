import DashboardLayout from "@/components/common/layout/DashboardLayout";
import Table from "@/components/table/Table";
import { TableProps } from "@/helpers/types/table";
import React from "react";

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
      <Table caption={caption} tableHead={THEAD} tableBody={TBODY} />
    </DashboardLayout>
  );
};

export default history;
