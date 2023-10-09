import Container from "@/components/common/layout/Container";
import Gap from "@/components/common/Gap";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { validateLoginForm } from "@/helpers/constants/validators";
import { getSession, signIn } from "next-auth/react";
import { notification } from "antd";
import { usePostData } from "@/helpers/hooks/useMutationtHook";
import { setLocalStorage } from "@/utils/localStorage";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);
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

  type LoginProps = {
    email: string;
    password: string;
  }

  type ReturnedProps = {
    status: string;
    object: any;
    message: string;

  }

  const {mutate:loginUser,isLoading,data,isError,isSuccess,error} = usePostData<LoginProps,ReturnedProps>('auth/login',)

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
      loginUser({
        email,
        password
      })
    }
  };


  const handleSuccessCallback = () => {
    if(data?.status === 'OK'){
           notification.success({
           message: "Successfully Logged in",
           description: "Welcome back to Unsolo.",
      })
     
      
       setTimeout(()=>{
         const [header, payload, signature] = data?.object?.split('.');

         const decodedPayload = JSON.parse(atob(payload)) as {roles:string,sub:string};
        if(decodedPayload.roles === 'USER'){
           router.push("/dashboard");
        }else {
           router.push("/admin");
        }
       },1000)
       setLocalStorage('token',data?.object)
       
     } 
       if(data?.status === 'UNAUTHORIZED'){
           notification.error({
           message: data?.message,
           description: "Email and Password not correct.",
       });
      }
    }


  useEffect(()=>{
   
    if(isSuccess){
     handleSuccessCallback()
    }
  },[isSuccess,data])


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
              isLoading={isLoading}
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

export default LoginForm
