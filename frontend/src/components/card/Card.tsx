import React from "react";
import flex_acct_icon from "./../../../public/flex_acct_icon.svg";
import Button from "../ui/Button";

const Card = () => {
  ["#3587A4", "#E2711D", "#000000"];
  return (
    <div>
      <div className="flex w-full my-4 justify-end items-center py-2">
        <Button className="button_bg text-white rounded-md">Quick Save</Button>
      </div>

      {/* upper colored card section*/}
      <div className=" flex flex-col md:flex-row gap-4 my-4">
        <div className="flex px-2 bg-[#3587A4] w-1/3 h-[150px]">
          <div className="flex items-center p-1 w-1/3">
            <div className="">
              <img src="../../../total_savings.png" alt="flex account icon" />
            </div>
          </div>
          <div className="flex items-center w-2/3">
            <div className="flex flex-col justify-center h-2/3 w-full px-2 gap-2 text-white">
              <h1 className="font-bold">Total Savings</h1>
              <p>₦ 3,000,000</p>
            </div>
          </div>
        </div>
        <div className="flex px-2 bg-[#E2711D] w-1/3 h-[150px]">
          <div className="flex items-center p-1 w-1/3">
            <div className="">
              <img src="../../../target_savings.png" alt="flex account icon" />
            </div>
          </div>
          <div className="flex items-center w-2/3">
            <div className="flex flex-col justify-center h-2/3 w-full px-2 gap-2 text-white">
              <h1 className="font-bold">Target Savings</h1>
              <p>₦ 3,000,000</p>
            </div>
          </div>
        </div>
        <div className="flex px-2 bg-black w-1/3 h-[150px]">
          <div className="flex items-center p-1 w-1/3">
            <div className="">
              <img src="../../../flex_acct_icon.png" alt="flex account icon" />
            </div>
          </div>
          <div className="flex items-center w-2/3">
            <div className="flex flex-col justify-center h-2/3 w-full px-2 gap-2 text-white">
              <h1 className="font-bold">Flex Account</h1>
              <p>₦ 3,000,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* debit credit card section*/}
      <div>
        <div className="my-4">
          <p className="text-black font-bold">Recent Activities</p>
        </div>
        <div className="flex customBorder p-2 my-3 rounded-md">
          <div className="flex items-center  pr-2">
            <div className="px-2">
              <img
                src="../../../outline_history.png"
                alt="outline history icon"
                className="h-8 w-8"
              />
            </div>
          </div>
          <div className=" flex items-center justify-between p-2 gap-2 w-full ">
            <div className="">
              <div className="font-bold">Flex account credited</div>
              <p className="font-medium">6 Hours ago</p>
            </div>
            <div className="">
              <p className="text-green-500 font-semibold">+₦3,000,000</p>
            </div>
          </div>
        </div>
        <div className="flex customBorder p-2 my-3 rounded-md">
          <div className="flex items-center  pr-2">
            <div className="px-2">
              <img
                src="../../../outline_history.png"
                alt="outline history icon"
                className="h-8 w-8"
              />
            </div>
          </div>
          <div className=" flex items-center justify-between p-2 gap-2 w-full ">
            <div className="">
              <div className="font-bold">Flex account debited</div>
              <p className="font-medium">6 Hours ago</p>
            </div>
            <div className="">
              <p className="text-red-500 font-semibold">-₦3,000,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;