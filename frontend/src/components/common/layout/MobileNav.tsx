import router, { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "./Container";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Logo from "./Logo";

const Navbar = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  return (
    <Container>
      <div>
        <div className="flex flex-row py-7 justify-between relative ">
         <div><Logo/></div>
          <div className="mobile-nav">
            <div className="flex justify-end mt-8">
              {showNav ? (
                <AiOutlineCloseCircle
                  onClick={() => setShowNav(false)}
                  style={{
                    marginLeft:"8rem",
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
                    router.push("/login");
                  }}
                  className="orange-border-bottom cursor-pointer "
                >
                  Login
                </li>
                <li
                  onClick={() => {
                    setShowNav(false);
                    router.push("/signup");
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
