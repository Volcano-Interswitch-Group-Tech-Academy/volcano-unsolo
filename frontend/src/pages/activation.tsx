import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const SuccessfulSignup: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:8060/api/users/verifyRegistration`, {
          params: { token },
        })
        .then((_response) => {
          router.push("/login");
        })
        .catch((_error) => {
            alert("error verifying your account")
        });
    }
  }, [token]);

  return (
    <div className="flex justify-center h-screen items-center w-full">
      <div className="flex flex-col items-center p-5 w-3/4 md:w-1/2 gap-5">
        <p className="font-bold text-lg text-center">
          Verifying your account...
        </p>
      </div>
    </div>
  );
};

export default SuccessfulSignup;
