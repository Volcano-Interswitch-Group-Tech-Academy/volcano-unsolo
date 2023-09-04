import Container from "@/components/common/layout/Container";
import Gap from "@/components/common/Gap";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import React, { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = () => {
    setEmail(email);
  };

  const handlePasswordChange = () => {
    setPassword(password);
  };

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container>
      <div className="">
        <h1 className="text-center mb-7 text-2xl font-semibold">Login</h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 lg:flex-row flex-col">
            <Input
              placeholder={"Email"}
              styling={""}
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="flex gap-2 lg:flex-row flex-col">
            <Input
              placeholder={"Password"}
              styling={""}
              value={password}
              onChange={handlePasswordChange}
            />

          </div>



          <div className="flex flex-col justify-center items-center">
            <Button
              children={"Login"}
              className="button_bg text-white font-semibold p-3 w-1/2 border-radius"
              onClick={handleLogin}
            />
            <Gap v={2} />
            <p>
              Don't have an account?{" "}
              <span className="cocoa_yellow cursor-pointer" onClick={() => {router.push("/signup")}}>Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
