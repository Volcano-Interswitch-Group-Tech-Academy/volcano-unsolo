import React from "react";
import Button from "../ui/Button";

const WalletCard = () => {
  //   ["#3587A4", "#E2711D", "#000000"];

  const cardDetails = [
    {
      image: "../../../total_savings.png",
      title: "Total Savings",
      amount: "₦ 3,000,000",
      color: "bg-[#3587A4]",
    },
    {
      image: "../../../target_savings.png",
      title: "Target Savings",
      amount: "₦ 3,000,000",
      color: "bg-[#E2711D]",
    },
    {
      image: "../../../flex_acct_icon.png",
      title: "Flex Account",
      amount: "₦ 3,000,000",
      color: "bg-[#000000]",
    },
  ];

  return (
    <div>
      <div className="flex w-full my-4 justify-end items-center py-2">
        <Button className="button_bg text-white rounded-md w-1/6">
          <div className="flex justify-between items-center gap-2">
            <img
              src="../../../plus_icon.png"
              alt="plus icon"
              className=" w-4 h-4"
            />
            <p>Quick Save</p>
          </div>
        </Button>
      </div>

      {/* upper colored card section*/}
      <div className=" flex flex-col md:flex-row gap-4 my-4">
        {cardDetails.map((details, index) => (
          <div
            className={`flex px-2 ${details.color} w-1/3 h-[150px]`}
            key={index + details.title.split(" ")[0]}
          >
            <div className="flex items-center p-1 w-1/3">
              <div className="">
                <img src={details.image} alt="flex account icon" />
              </div>
            </div>
            <div className="flex items-center w-2/3">
              <div className="flex flex-col justify-center h-2/3 w-full px-2 gap-2 text-white">
                <h1 className="font-bold">{details.title}</h1>
                <p>{details.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletCard;
