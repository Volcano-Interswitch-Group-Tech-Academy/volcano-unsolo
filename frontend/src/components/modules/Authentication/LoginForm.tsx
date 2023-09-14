import Container from "@/components/common/layout/Container";
import Gap from "@/components/common/Gap";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { validateLoginForm } from "@/helpers/constants/validators";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    phoneNumber?: string;
    password?: string;
  }>({});
  const [touched, setTouched] = useState<{
    email?: string;
    phoneNumber?: string;
    password?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof formErrors,
    setStateFunction: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setStateFunction(e.target.value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [field]: undefined,
    }));
  };
  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
    const errors = validateLoginForm({
      email,
      password,
    });
    setFormErrors(errors);
  };

  const isFormValid = Object.keys(formErrors).length === 0 && email && password;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validateLoginForm({
      email,
      password,
    });
    if (Object.keys(errors).length === 0) {
      console.log("Form is valid! Do your submit logic here.");
    }
  };

  return (
    <Container>
      <div className="">
        <h1 className="text-center mb-7 text-2xl font-semibold">Login</h1>
        <div className="flex flex-col gap-3">
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
          </div>
          <Gap h={3} />

          <div className="flex gap-2 lg:flex-row flex-col">
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
          <Gap h={3} />

          <div className="flex flex-col justify-center items-center">
            <Button
              children={"Login"}
              className="button_bg text-white font-semibold p-3 w-1/2 border-radius"
              onClick={handleSubmit}
              disabled={!isFormValid}
            />
            <Gap v={2} />
            <p>
              Don't have an account?{" "}
              <span
                className="cocoa_yellow cursor-pointer"
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
