import DashboardLayout from "@/components/common/layout/DashboardLayout";
import Table from "@/components/table/Table";
import { TableProps } from "@/helpers/types/table";

const pools = () => {
  const THEAD = ["Country", "City", "D.O.D", "Price", "No of Days", ""];
  // replace with array Object
  const TBODY: TableProps["tableBody"] = [
    {
      country: "Switzerland",
      city: "Geneva",
      dob: "12/10/23",
      price: 2_700_000,
      days: "5",
      blank: "View details",
    },
    {
      country: "Portugal",
      city: "Lisbon",
      dob: "17/10/23",
      price: 794_579,
      days: "3",
      blank: "View details",
    },
    {
      country: "France",
      city: "Paris",
      dob: "5/1/23",
      price: 922_953,
      days: "4",
      blank: "View details",
    },
    {
      country: "Spain",
      city: "Barcelona",
      dob: "15/11/23",
      price: 791_463,
      days: "5",
      blank: "View details",
    },
    {
      country: "Spain",
      city: "Madrid",
      dob: "21/11/23",
      price: 789_213,
      days: "5",
      blank: "View details",
    },
    {
      country: "Italy",
      city: "Rome",
      dob: "5/12/23",
      price: 814_666,
      days: "5",
      blank: "View details",
    },
    {
      country: "Germany",
      city: "Berlin",
      dob: "10/12/23",
      price: 875_881,
      days: "2",
      blank: "View details",
    },
  ];

  return (
    <DashboardLayout>
      <div className="mt-7 font-bold">Here is a pool of your upcoming trips</div>
      <Table tableHead={THEAD} tableBody={TBODY} />
    </DashboardLayout>
  );
};

export default pools;
