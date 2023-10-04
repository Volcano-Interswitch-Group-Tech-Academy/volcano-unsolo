import Container from "@/components/common/layout/Container";
import Gap from "@/components/common/Gap";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { validateLoginForm } from "@/helpers/constants/validators";
import { getSession, signIn } from "next-auth/react";
import { notification } from "antd";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
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

  const isFormValid =
    !Object.values(formErrors).some((error) => error) && email && password;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errors = validateLoginForm({
      email,
      password,
    });
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.ok) {
        const session = await getSession();

        setLoading(false);
        notification.success({
          message: "Successfully Logged in",
          description: "Welcome back to Unsolo.",
        });
        if (session?.user?.roles === "USER") {
          router.push("/dashboard");
        } else {
          router.push("/admin");
        }
      } else {
        setLoading(false);
        notification.error({
          message: "Login Failed",
          description: "Please check your credentials.",
        });
      }
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
              isLoading={loading}
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
