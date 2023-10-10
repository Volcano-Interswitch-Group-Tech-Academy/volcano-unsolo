import Logo from "@/components/common/layout/Logo";
import React,{useEffect} from "react";
import {useRouter} from 'next/router';
import Image from "next/image";import { signOut } from "next-auth/react";
import { useUser } from "@/store/context";
import { removeLocalStorage,getLocalStorage } from "@/utils/localStorage";
import { useGetData } from "@/helpers/hooks/useQueryHooks";
import { UserDataProps } from "@/helpers/types/auth";



const NavHeader = () => {
  const { isLoggedIn, setIsLoggedIn } = useUser();
    const token = getLocalStorage('token')!;
  const router = useRouter();


  
  function handleLogout() {
    removeLocalStorage('token');
    setIsLoggedIn(false)
    router.push('/login')
}

const { data: userData } = useGetData<UserDataProps>(
  "http://localhost:8060/api/users",
  token
);

const isUserLoggedIn = userData && userData.userName && userData.email; 

useEffect(()=>{
  if(token){
    setIsLoggedIn(true)
  }
},[token])

  return (
    <div>
      <div className="border-b">
        <div className="py-3">
          <Logo />
        </div>
      </div>

      <div className="border-b flex flex-col justify-center items-center py-3">
        <Image
          height={100}
          className="cursor-pointer rounded-full"
          width={100}
          src="/unnamed.jpg"
          alt="dp"
        />

        <div className="mt-2">
          <h1 className="text-center "> {isUserLoggedIn? userData.userName : "nill"}</h1>
          <p className="text-center light-font">{isUserLoggedIn? userData.email : "nill"}</p>
          <div className = "flex gap-2 justify-center items-center mt-2">
            <Image
              height={20}
              className="cursor-pointer "
              width={20}
              src="/Edit.svg"
              alt="dp"
            />
            <Image
              height={20}
              className="cursor-pointer "
              width={20}
              src="/Notifications.svg"
              alt="notification"
            />
            <Image
              height={20}
              className="cursor-pointer"
              width={20}
              src="/Logout.svg"
              alt="logout"
              onClick={() => handleLogout()
              }

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
