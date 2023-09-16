import Container from "@/components/common/layout/Container";
import Gap from "@/components/common/Gap";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  validateEmail,
  validatePhoneNumberRegex,
  validateSignupForm,
} from "@/helpers/constants/validators";

const SignupForm = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    age?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [touched, setTouched] = useState<{
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    age?: boolean;
    password?: boolean;
    confirmPassword?: boolean;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof formErrors,
    setStateFunction: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setStateFunction(e.target.value);
    if (field === "email" && !validateEmail(e.target.value)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is not valid",
      }));
    } else if (field === "phoneNumber" && !validatePhoneNumberRegex(e.target.value)) {
      setFormErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Phone number is not valid"
      }));
  } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [field]: undefined,
      }));
    }
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
    const errors = validateSignupForm({
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      password,
      confirmPassword,
    });
    setFormErrors(errors);
  };

  const isFormValid =
    Object.keys(formErrors).length === 0 &&
    firstName &&
    lastName &&
    email &&
    phoneNumber &&
    age &&
    password &&
    confirmPassword;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validateSignupForm({
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      password,
      confirmPassword,
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form is valid! Do your submit logic here.");
    }
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
              type={"text"}
              styling={""}
              value={firstName}
              onChange={(e) => handleChange(e, "firstName", setFirstName)}
              onBlur={() => handleBlur("firstName")}
              error={touched.firstName ? formErrors.firstName : ""}
            />
            <Gap h={3} />
            <Input
              placeholder={"Last Name"}
              type={"text"}
              styling={""}
              value={lastName}
              onChange={(e) => handleChange(e, "lastName", setLastName)}
              onBlur={() => handleBlur("lastName")}
              error={touched.lastName ? formErrors.lastName : ""}
            />
          </div>

          <div className="flex gap-2 lg:flex-row flex-col">
            <Input
              placeholder={"email"}
              type={"text"}
              styling={""}
              value={email}
              onChange={(e) => handleChange(e, "email", setEmail)}
              onBlur={() => handleBlur("email")}
              error={touched.email ? formErrors.email : ""}
            />
            <Gap h={3} />

            <Input
              placeholder={"Phone Number"}
              styling={""}
              type={"text"}
              value={phoneNumber}
              onChange={(e) => handleChange(e, "phoneNumber", setPhoneNumber)}
              onBlur={() => handleBlur("phoneNumber")}
              error={touched.phoneNumber ? formErrors.phoneNumber : ""}
            />
          </div>

          <div className="flex gap-2 lg:flex-row flex-col">
            {" "}
            <Input
              placeholder={"Age"}
              type={"text"}
              styling={""}
              value={age}
              onChange={(e) => handleChange(e, "age", setAge)}
              onBlur={() => handleBlur("age")}
              error={touched.age ? formErrors.age : ""}
            />
            <Gap h={3} />
            <Input
              placeholder={"Password"}
              type={"password"}
              styling={""}
              value={password}
              onChange={(e) => handleChange(e, "password", setPassword)}
              onBlur={() => handleBlur("password")}
              error={touched.password ? formErrors.password : ""}
            />
          </div>

          <div className="flex gap-2 lg:flex-row flex-col">
            <Input
              placeholder={"Confirm Password"}
              type={"password"}
              styling={""}
              value={confirmPassword}
              onChange={(e) => handleChange(e, "confirmPassword", setConfirmPassword)}
              onBlur={() => handleBlur("confirmPassword")}
              error={touched.confirmPassword ? formErrors.confirmPassword : ""}
            />
            <div className="w-full mr-9"></div>
          </div>
        </div>
        <Gap v={2} />

        <div className="flex flex-col justify-center items-center">
          <Button
            onClick={handleSubmit}
            children={"Sign Up"}
            className="button_bg text-white font-semibold p-9 w-1/2  border-radius"
            disabled={!isFormValid}
          />
          <Gap v={2} />
          <p>
            Already have an account?{" "}
            <span
              className="cocoa_yellow cursor-pointer"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SignupForm;
function validatePhoneNumber(value: string) {
  throw new Error("Function not implemented.");
}
