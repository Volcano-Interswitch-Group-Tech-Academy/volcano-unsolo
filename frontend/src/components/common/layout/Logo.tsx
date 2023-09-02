import Image from "next/image";
import React from "react";
import Link from "next/link";
import Container from "./Container";

const Logo = () => {
  return (
    <Container>
      <Link href="/">
        <Image
          height={100}
          className="cursor-pointer"
          width={100}
          src="/Unsolo-logo-black-01.png"
          alt="logo"
        />
      </Link>
    </Container>
  );
};

export default Logo;
