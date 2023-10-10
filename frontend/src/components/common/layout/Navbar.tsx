import router, { useRouter } from "next/router";

import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { getLocalStorage, removeLocalStorage } from "@/utils/localStorage";
import { useGetData } from "@/helpers/hooks/useQueryHooks";
import { UserDataProps } from "@/helpers/types/auth";
import { useUser } from "@/store/context";

const Navbar = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useUser();


 

  const token = getLocalStorage("token")!;
  const { data: userData } = useGetData<UserDataProps>(
    "http://localhost:8060/api/users",
    token
  );

  const isUserLoggedIn = userData && userData.userName; 

  function handleLogout() {
    removeLocalStorage('token');
    setIsLoggedIn(false)
    router.push('/login').then(() => window.location.reload());
}

  return (
    <Container>
      <div>
        <div className="flex flex-row  py-3 justify-between ">
          <Link href="/">
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
          </Link>
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
                  router.push("/explore");
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
              {isUserLoggedIn ? (
                <>
                  <li className="orange-border-bottom cursor-pointer font-bold">
                    user: <span className="cocoa_yellow"> {userData.userName}</span>   {/* Display user's name */}
                  </li>

                  <li onClick={() => {
                      setShowNav(false);
                      router.push("/dashboard");
                    }}>Dashboard</li>

<Image
              height={20}
              className="cursor-pointer"
              width={20}
              src="/Logout.svg"
              alt="logout"
              onClick={() => handleLogout()
              }

            />


                </>
              ) : (
                <>
                  <li
                    onClick={() => {
                      setShowNav(false);
                      router.push("/login");
                    }}
                    className="orange-border-bottom cursor-pointer"
                  >
                    Login
                  </li>
                  <li
                    onClick={() => {
                      setShowNav(false);
                      router.push("/signup");
                    }}
                    className="orange-border-bottom cursor-pointer"
                  >
                    Signup
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
