import React from "react";
import { TableProps } from "@/helpers/types/table";

const Table: React.FC<TableProps> = ({
  tableHead,
  tableBody,
}): JSX.Element => {
  const td_style = "text-center h-5 py-5 light-font";
  return (
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
              <td className={td_style}>{elem.dob}</td>
              <td className={td_style}>
                {elem.price ? "₦" + elem.price : null}
              </td>
              <td className={td_style}>{elem.days}</td>
              <td className={td_style}>{elem.blank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
