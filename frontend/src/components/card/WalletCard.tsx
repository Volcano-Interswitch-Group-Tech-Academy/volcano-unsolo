import React from "react";
import Button from "../ui/Button";
import Plus from "../../../public/plus_icon.png";
import TotalSavings from "../../../public/total_savings.png";
import TargetSavings from "../../../public/target_savings.png";
import FlexAcctSavings from "../../../public/flex_acct_icon.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const WalletCard = () => {
  const router = useRouter();

  const cardDetails = [
    {
      image: TotalSavings,
      title: "Total Savings",
      amount: "₦ 3,000,000",
      color: "bg-[#3587A4]",
      url: "/total-savings",
    },
    {
      image: TargetSavings,
      title: "Target Savings",
      amount: "₦ 3,000,000",
      color: "bg-[#E2711D]",
      url: "/target"
    },
    {
      image: FlexAcctSavings,
      title: "Flex Account",
      amount: "₦ 3,000,000",
      color: "bg-[#000000]",
      url: "/flex-account-savings"
    },
  ];

  return (
    <>
      <div className="flex w-full my-4 justify-end items-center py-2">
        <Button className="button_bg text-white rounded-md w-1/6">
          <div className="flex justify-between items-center gap-2">
            <Image src={Plus} alt="plus icon" className=" w-4 h-4" />
            <p>Quick Save</p>
          </div>
        </Button>
      </div>

      {/* upper colored card section*/}
      <div className=" flex flex-col md:flex-row gap-4 my-4 cursor-pointer">
        {cardDetails.map((details, index) => (
        <Link href={`${router.pathname}${details.url}`} className="w-full md:w-1/3" passHref>
          <div
            className={`flex px-2 ${details.color} w-full h-[150px] cursor-pointer `}
            key={index + details.title.split(" ")[0]}
          >
            <div className="flex items-center p-1 w-1/3">
              <div className="">
                <Image src={details.image} alt="flex account icon" />
              </div>
            </div>
            <div className="flex items-center w-2/3">
              <div className="flex flex-col justify-center h-2/3 w-full px-2 gap-2 text-white">
                <h1 className="font-bold">{details.title}</h1>
                <p>{details.amount}</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default WalletCard;
