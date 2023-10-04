"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SuccessfulSignup: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center h-screen items-center w-full">
      <div className="flex flex-col items-center p-5 w-3/4 md:w-1/2 gap-5">
        <p className="font-bold text-lg text-center">
          You have successfully signed up on Unsolo,
        </p>
        <p>Kindly check your mail to get activated</p>
        
      </div>
    </div>
  );
};

export default SuccessfulSignup;
