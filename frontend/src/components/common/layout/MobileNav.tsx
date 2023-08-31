import router, { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "./Container";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  return (
    <Container>
      <div>
        <div className="flex flex-row  py-7 justify-between ">
          <h1
            onClick={() => {
              router.push("/");
            }}
            className="font_bold secondary_text_color text-3xl cursor-pointer"
          >
            Unsolo
          </h1>
          <div className="z-10">
            <div className="flex flex-row">
              {showNav ? (
                <AiOutlineCloseCircle
                  onClick={() => setShowNav(false)}
                  style={{
                    fontSize: "2rem",
                    cursor: "pointer",
                    fontWeight: "bolder",
                    color: "#E2711D",

                  }}
                />
              ) : (
                <GiHamburger
                  onClick={() => setShowNav(true)}
                  style={{
                    fontSize: "2rem",
                    cursor: "pointer",
                    fontWeight: "bolder",
                    color: "#E2711D",
                  }}
                />
              )}
            </div>
            {showNav ? (
              <ul className="flex flex-col gap-7 mt-5 bg-white border-radius p-10">
                <li
                  onClick={() => {
                    setShowNav(false);
                    router.push("");
                  }}
                  className="orange-border-bottom cursor-pointer "
                >
                  Packages
                </li>
                <li
                  onClick={() => {
                    setShowNav(false);
                    router.push("");
                  }}
                  className="orange-border-bottom cursor-pointer "
                >
                  Destinations
                </li>
                <li
                  onClick={() => {
                    setShowNav(false);
                    router.push("");
                  }}
                  className="orange-border-bottom cursor-pointer "
                >
                  Gallery
                </li>
                <li
                  onClick={() => {
                    setShowNav(false);
                    router.push("");
                  }}
                  className="orange-border-bottom cursor-pointer "
                >
                  Explore
                </li>
                <li
                  onClick={() => {
                    setShowNav(false);
                    router.push("");
                  }}
                  className="orange-border-bottom cursor-pointer "
                >
                  Contact
                </li>
                <li
                  onClick={() => {
                    setShowNav(false);
                    router.push("");
                  }}
                  className="orange-border-bottom cursor-pointer "
                >
                  Login
                </li>
                <li
                  onClick={() => {
                    setShowNav(false);
                    router.push("");
                  }}
                  className=" orange-border-bottom cursor-pointer "
                >
                  Signup
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
