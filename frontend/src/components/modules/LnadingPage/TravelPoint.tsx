import React from "react";
import Image from "next/image";
import Gap from "@/components/common/Gap";
import Button from "@/components/ui/Button";
import { ArrowLeftIcon } from "../../../../public/svgs/icons";
import { useRouter } from "next/router";
import Container from "@/components/common/layout/Container";

const TravelPoint = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="lg:mx-32 mx-10 mt-20 flex lg:flex-row flex-col">
        <Image
          src={"/travelPoint.png"}
          alt={"travel"}
          width={350}
          height={100}
        />
        <Gap h={5} />
        <div className="mt-14">
          <div className="text-left">
            <h1 className="mt-10 font-extrabold text-2xl primary_text_color">
              Travel Point
            </h1>
            <p className="lg:w-2/3 mt-2">
              We are helping you connect to people who share the same travel
              desires as you.
            </p>
            <p className="light-black-font mt-3 ">
            We're your bridge to fellow travelers who share your wanderlust and desires. Explore the world with those who understand your passion. Join us in connecting kindred adventurers from across the globe.
            </p>
          </div>
          <Button
            children={"Let's get you a desination"}
            icon={<ArrowLeftIcon />}
            iconPosition="end"
            className="button_bg text-white flex flex-row justify-center items-center font-bold rounded-md mt-5 "
            onClick={() => {
              router.push("/destinations");
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default TravelPoint;
