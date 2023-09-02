import router, { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "./Container";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  return (
    <Container>
      <div>
        <div className="flex flex-row  py-7 justify-between ">
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
                    router.push("/Login");
                  }}
                  className="orange-border-bottom cursor-pointer "
                >
                  Login
                </li>
                <li
                  onClick={() => {
                    setShowNav(false);
                    router.push("/Signup");
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
