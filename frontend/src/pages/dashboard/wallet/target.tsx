import DashboardLayout from "@/components/common/layout/DashboardLayout";
import React from "react";

const Target = () => {
  const td_style = "text-center h-5 py-5 light-font";
  const tableHead = [
    "Country",
    "City",
    "Target date",
    "Total",
    "Current amount",
    "",
  ];
  const tableBody = [
    {
      country: "Morocco",
      city: "Casablanca",
      targetDate: "12/7/23",
      total: 3_000_000,
      currentAmt: 1_000_000,
      blank: "⋮",
    },
    {
      country: "Morocco",
      city: "Casablanca",
      targetDate: "12/7/23",
      total: 3_000_000,
      currentAmt: 1_000_000,
      blank: "⋮",
    },
    {
      country: "Morocco",
      city: "Casablanca",
      targetDate: "12/7/23",
      total: 3_000_000,
      currentAmt: 1_000_000,
      blank: "⋮",
    }
  ];
  return (
    <DashboardLayout>
      <div className="mt-7 font-bold">List of your targeted savings</div>
      <div className="overflow-x-auto mt-7">
        <table className="min-w-full w-full table-fixed">
          <thead>
            <tr className="odd:bg-[#f3f3f3]">
              {tableHead.map((elem, index) => (
                <th key={index} className="h-5 py-2 ">
                  {elem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((elem, idx) => (
              <tr
                key={idx}
                className="text-center even:bg-[#f3f3f3] odd:bg-white h-5"
              >
                <td className={td_style}>{elem.country}</td>
                <td className={td_style}>{elem.city}</td>
                <td className={td_style}>{elem.targetDate}</td>
                <td className={td_style}>
                  {elem.total ? `₦${elem.total}` : null}
                </td>
                <td className={td_style}>
                  {elem.currentAmt ? `₦${elem.currentAmt}` : null}
                </td>
                <td className={`${td_style} font-medium text-lg text-black`}>{elem.blank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Target;
