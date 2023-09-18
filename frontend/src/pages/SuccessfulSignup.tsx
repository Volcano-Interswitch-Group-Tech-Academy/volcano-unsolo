"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SuccessfulSignup: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center h-screen items-center w-full">
      <div className="flex flex-col items-center p-5 w-1/2 gap-5">
        <p className="font-bold text-lg">
          You have successfully signed up on Unsolo
        </p>
        <div className="flex justify-center w-full">
          <Link href="/login" className="w-1/3">
            <Button
              className="button_bg w-full text-white rounded-sm font-semibold"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulSignup;
