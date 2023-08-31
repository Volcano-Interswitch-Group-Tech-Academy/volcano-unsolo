import Container from "@/components/common/layout/Container";
import Gap from "@/components/common/Gap";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import React, { useState } from "react";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");

  const handleFirstNameChange = () => {
    setFirstName(firstName);
  };
  const handleLasNatmeChange = () => {
    setLastName(lastName);
  };
  const handleEmailChange = () => {
    setEmail(email);
  };

  const handlePhoneNumberChange = () => {
    setPhoneNumber(phoneNumber);
  };
  const handleAgeChange = () => {
    setAge(age);
  };

  const handlePasswordChange = () => {
    setPassword(password);
  };

  const handleConfirmPasswordChange = () => {
    setConfrimPassword(confrimPassword);
  };
  return (
    <Container>
      <div className="">
        <h1 className="text-center mb-7 text-2xl font-semibold ">
          Sign up Here
        </h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2  lg:flex-row flex-col">
            <Input
              placeholder={"First Name"}
              styling={""}
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <Gap h={3} />
            <Input
              placeholder={"Last Name"}
              styling={""}
              value={lastName}
              onChange={handleLasNatmeChange}
            />
          </div>

          <div className="flex gap-2 lg:flex-row flex-col">
            <Input
              placeholder={"email"}
              styling={""}
              value={email}
              onChange={handleEmailChange}
            />
            <Gap h={3} />

            <Input
              placeholder={"Phone Number"}
              styling={""}
              value={firstName}
              onChange={handlePhoneNumberChange}
            />
          </div>

          <div className="flex gap-2 lg:flex-row flex-col">
            {" "}
            <Input
              placeholder={"Age"}
              styling={""}
              value={firstName}
              onChange={handleAgeChange}
            />
            <Gap h={3} />
            <Input
              placeholder={"Password"}
              styling={""}
              value={firstName}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="flex gap-2 lg:flex-row flex-col w-1/2">
            <Input
              placeholder={"Confirm Password"}
              styling={""}
              value={firstName}
              onChange={handleConfirmPasswordChange}
            />{" "}
          </div>
        </div>
        <Gap v={2} />

        <div className="flex flex-col justify-center items-center">
          <Button
            children={"Sign Up"}
            className="button_bg text-white font-semibold p-9 w-1/2  border-radius"
          />
          <Gap v={2} />
          <p>Already have an account? <span className="cocoa_yellow">Login</span></p>
        </div>
      </div>
    </Container>
  );
};

export default SignupForm;
