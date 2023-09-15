import Logo from "@/components/common/layout/Logo";
import React from "react";
import Image from "next/image";

const NavHeader = () => {
  return (
    <div>
      <div className="border-b">
        <div className="py-3">
          <Logo />
        </div>
      </div>

      <div className="border-b flex flex-col justify-center items-center py-3">
        <Image
          height={100}
          className="cursor-pointer rounded-full"
          width={100}
          src="/unnamed.jpg"
          alt="dp"
        />

        <div className="mt-2">
          <h1 className="text-center ">Becca09</h1>
          <p className="text-center light-font">adeolaadefuye@gmail.com</p>
          <div className = "flex gap-2 justify-center items-center mt-2">
            <Image
              height={20}
              className="cursor-pointer "
              width={20}
              src="/Edit.svg"
              alt="dp"
            />
            <Image
              height={20}
              className="cursor-pointer "
              width={20}
              src="/Notifications.svg"
              alt="notification"
            />
            <Image
              height={20}
              className="cursor-pointer"
              width={20}
              src="/Logout.svg"
              alt="logout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
