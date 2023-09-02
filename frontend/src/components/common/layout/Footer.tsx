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
        {/* Replace <h1> with <Image> */}
        <Image
            onClick={() => {
              router.push("/");
            }}
            src="/Unsolo-logo-black-01.png" // Set the path to your logo image
            alt="Unsolo Logo" // Provide an alt text for accessibility
            width={120} // Set the desired width
            height={30} // Set the desired height
            className="cursor-pointer"
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
