import React, { useState } from "react";
import DashboardLayout from "@/components/common/layout/DashboardLayout";
import Image from "next/image";
import EllipsisBtn from "../../../../public/ellipsis-vertical-svgrepo-com.svg";
import { dividerClasses } from "@mui/material";
import Link from "next/link";

const Target = () => {
  const td_style = "text-center h-5 py-5 light-font";
  const [display, setDisplay] = useState(false);
  const [btnIdx, setBtnIdx] = useState(0);

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
      blank: "",
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
    },
  ];
  const btnPopUp = [
    { title: "Lock Target", url: "/" },
    { title: "Withdraw to Flex", url: "/" },
    { title: "Top Up", url: "/" },
  ];
  const activatePopUp = (idx: number) => {
    setDisplay(!display);
    setBtnIdx(idx);
  };
  return (
    <DashboardLayout>
      <div className="mt-7 font-bold">List of your targeted savings</div>
      <div className="overflow-x-auto mt-7 h-screen">
        <table className="min-w-full w-full h-auto table-fixed">
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
                className=" text-center even:bg-[#f3f3f3] odd:bg-white h-5"
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
                <td className={`relative ${td_style} font-medium text-lg text-black`}>
                  <Image
                    src={EllipsisBtn}
                    alt="view more"
                    className="h-4 cursor-pointer"
                    onClick={() => activatePopUp(idx)}
                  />
                  {display && btnIdx == idx && (
                    <div className="absolute z-10 flex flex-col text-left font-semibold border border-slate-200 bg-white -top-6 -left-10 max-w-[150px]">
                      {btnPopUp.map((item, index) => (
                        <Link href={item.url} key={item.title + index}>
                          <p className="px-2 py-1 hover:bg-[#f3f3f3]">
                            {item.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Target;
