import router, { useRouter } from "next/router";

import React, { useState } from "react";
import Container from "./Container";

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
          <div className={`sm:block ${showNav ? "hidden" : ""}`}>
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

          <div className={`sm:block ${showNav ? "hidden" : ""}`}>
            <ul className="flex flex-row gap-5">
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
