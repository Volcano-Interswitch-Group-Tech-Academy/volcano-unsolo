import { useRouter } from "next/router";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between p-7 mx-3 bg-transparent ">
      <div>
        <Image
            onClick={() => {
              router.push("/");
            }}
            src="/Unsolo-logo-black-01.png" 
            alt="Unsolo Logo" 
            width={50} 
            height={30} 
            className="cursor-pointer mt-2"
          />
      </div>
      <div className="flex flex-row justify-between gap-5">
        <CiInstagram
          style={{
            fontSize: "2rem",
            cursor: "pointer",
            fontWeight: "bolder",
            color: "#E2711D",
          }}
        />
        <AiOutlineTwitter
          style={{
            fontSize: "2rem",
            cursor: "pointer",
            fontWeight: "bolder",
            color: "#E2711D",
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
