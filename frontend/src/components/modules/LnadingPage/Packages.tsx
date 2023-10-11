import Container from "@/components/common/layout/Container";
import Button from "@/components/ui/Button";
import { PacakgesProp } from "@/helpers/types/modules/landingPage";
import React from "react";

const Packages = ({
  buttonText,
  packageDescription,
  packageName,
}: PacakgesProp) => {
  return (
    <Container>
      <div className="button_bg white-light-font text-white text-center py-6 px-5 rounded-2xl">
        <h1 className="text-2xl font-bold mb-2">{packageName}</h1>
        <p>
        {packageDescription}
        </p>
        <Button
          children={buttonText}
          className="bg-white text-black mt-5 font-bold rounded"
        />
      </div>
    </Container>
  );
};

export default Packages;
