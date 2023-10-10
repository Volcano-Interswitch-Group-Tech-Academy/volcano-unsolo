import { AdvertProps } from "@/helpers/types/modules/explore";
import React from "react";
import Image from "next/image"

const Adverts = ({
  businessName,
  businessCountry,
  businessCity,
  businessInfo,
  businessImage,
  businessAddress
}: AdvertProps) => {
  return (
    <div className="flex flex-row justify-between  bg-white shadow-lg p-10 m-10">
      <div>
        <div>{businessName}</div>
        <div>{businessCountry}, {businessCity}</div>
        <div>{businessAddress}</div>
        <div>{businessInfo}</div>
      </div>

      <Image src = {businessImage} width = {300} height = {300} alt = {businessName}/>
    </div>
  );
};

export default Adverts;
