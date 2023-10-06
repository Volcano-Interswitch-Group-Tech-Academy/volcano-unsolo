import React from "react";
import WalletCard from "@/components/modules/Dashboard/Wallet/WalletCard";
import DashboardLayout from "@/components/common/layout/DashboardLayout";
import OutlineHistory from "../../../../public/outline_history.png";
import Image from "next/image";
import { requireAuth } from "@/utils/auth";
import { GetServerSidePropsContext } from "next/types";

const wallet = () => {
  const transaction = [
    {
      trxnType: "credit",
      message: "Flex account credited",
      time: "6 Hours ago",
      amount: 3_000_000,
    },
    {
      trxnType: "debit",
      message: "Flex account debited",
      time: "6 Hours ago",
      amount: 3_000_000,
    },
  ];
  return (
    <DashboardLayout>
      <WalletCard />
      {/* debit credit card section*/}
      <div>
        <div className="my-4">
          <p className="text-black font-bold">Recent Activities</p>
        </div>
        {transaction.map((trxn, index) => (
          <div
            className="flex customBorder p-2 my-3 rounded-md"
            key={trxn.trxnType + index}
          >
            <div className="flex items-center pr-2">
              <div className="px-2">
                <Image
                  src={OutlineHistory}
                  alt="outline history icon"
                  className="h-8 w-8"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between p-2 gap-2 w-full ">
              <div className="">
                <div className="font-bold">{trxn.message}</div>
                <p className="font-medium">{trxn.time}</p>
              </div>
              <div className="">
                <p
                  className={`${
                    trxn.trxnType == "credit"
                      ? "text-green-500"
                      : "text-red-500"
                  } font-semibold`}
                >
                  {trxn.trxnType == "credit"
                    ? `+₦${trxn.amount}`
                    : `-₦${trxn.amount}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default wallet;


export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await requireAuth(context);
}