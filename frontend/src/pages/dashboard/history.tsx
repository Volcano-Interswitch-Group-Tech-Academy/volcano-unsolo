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
      city: "Rabat",
      dob: "12/7/23",
      price: 600_000,
      days: "3",
      blank: "View details",
    },
    {
      country: "South Africa",
      city: "Cape Town",
      dob: "10/03/23",
      price: 900_000,
      days: "7",
      blank: "View details",
    },
    {
      country: "Brazil",
      city: "Brasília",
      dob: "30/6/23",
      price: 1_000_000,
      days: "4",
      blank: "View details",
    },
    {
      country: "Maldives",
      city: "Malé",
      dob: "13/5/23",
      price: 1_500_000,
      days: "5",
      blank: "View details",
    },
    {
      country: "Canada",
      city: "Toronto",
      dob: "17/8/23",
      price: 1_300_000,
      days: "7",
      blank: "View details",
    },
    {
      country: "United Kingdom",
      city: "Peckham",
      dob: "12/7/23",
      price: 1_700_000,
      days: "7",
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
