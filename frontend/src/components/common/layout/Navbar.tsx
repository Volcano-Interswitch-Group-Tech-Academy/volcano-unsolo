import router, { useRouter } from "next/router";

import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  return (
    <Container>
      <div>
        <div className="flex flex-row  py-3 justify-between ">
        
         <Image
            onClick={() => {
              router.push("/");
            }}
            src="/Unsolo-logo-black-01.png" 
            alt="Unsolo Logo" 
            width={120}
            height={30} 
            className="cursor-pointer"
          />
          <div className={`sm:block ${showNav ? "hidden" : " mt-4"}`}>
            <ul className="flex flex-row gap-7">
              {/* <li
                onClick={() => {
                  setShowNav(false);
                  router.push("");
                }}
                className=" cursor-pointer"
              >
                Packages
              </li> */}
              <li
                onClick={() => {
                  setShowNav(false);
                  router.push("/destinations");
                }}
                className="cursor-pointer "
              >
                Destinations
              </li>
              {/* <li
                onClick={() => {
                  setShowNav(false);
                  router.push("");
                }}
                className="cursor-pointer "
              >
                Gallery
              </li> */}
              <li
                onClick={() => {
                  setShowNav(false);
                  router.push("");
                }}
                className="cursor-pointer "
              >
                Explore
              </li>
              <li
                onClick={() => {
                  setShowNav(false);
                  router.push("");
                }}
                className="cursor-pointer "
              >
                Contact
              </li>
            </ul>
          </div>

          <div className={`sm:block ${showNav ? "hidden" : " mt-4"}`}>
            <ul className="flex flex-row gap-5">
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
                className=" orange-border-bottom cursor-pointer"
              >
                Signup
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
