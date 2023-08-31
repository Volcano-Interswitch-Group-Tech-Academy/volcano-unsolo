import { useRouter } from "next/router";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between p-7 mx-3 bg-transparent ">
      <div>
        <h1
          onClick={() => {
            router.push("/");
          }}
          className="font_bold secondary_text_color text-3xl cursor-pointer"
        >
          Unsolo
        </h1>
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
