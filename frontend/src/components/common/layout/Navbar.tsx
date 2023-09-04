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
          <div className={`sm:block ${showNav ? "hidden" : " mt-4"}`}>
            <ul className="flex flex-row gap-7">
              <li
                onClick={() => {
                  setShowNav(false);
                  router.push("");
                }}
                className=" cursor-pointer"
              >
                Packages
              </li>
              <li
                onClick={() => {
                  setShowNav(false);
                  router.push("");
                }}
                className="cursor-pointer "
              >
                Destinations
              </li>
              <li
                onClick={() => {
                  setShowNav(false);
                  router.push("");
                }}
                className="cursor-pointer "
              >
                Gallery
              </li>
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
