import Container from "@/components/common/layout/Container";
import Gap from "@/components/common/Gap";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import React, { useState } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import { validateAge, validateEmail, validatePhoneNumberRegex, validateSignupForm,} from "@/helpers/constants/validators";
import { notification } from "antd";

const SignupForm = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState<Date | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


  const [formErrors, setFormErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    age?: string;
    password?: string;
    confirmPassword?: string;
    userName?: string;
    gender?: string;

  }>({});
  const [touched, setTouched] = useState<{
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    age?: boolean;
    password?: boolean;
    confirmPassword?: boolean;
    userName?: boolean;
    gender?: boolean;

  }>({});

  function range(start: number, end: number, step = 1) {
    let output = [];
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
    return output;
  }
  const years = range(1990, new Date().getFullYear() + 1, 1);
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
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
    } else if (
      field === "phoneNumber" &&
      !validatePhoneNumberRegex(e.target.value)
    ) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number is not valid",
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
      userName,
      gender,
    });

    if (field === "age") {
      errors.age = validateAge(age);
    }

    setFormErrors(errors);
  };

  const isFormValid =
  !Object.values(formErrors).some(error => error) &&
  firstName &&
  lastName &&
  email &&
  phoneNumber &&
  age &&
  password &&
  confirmPassword &&
  userName &&
  gender;


    const handleSubmit = async (e: any) => {
      e.preventDefault();
  
      const errors = validateSignupForm({
          firstName,
          lastName,
          email,
          phoneNumber,
          age,
          password,
          confirmPassword,
          userName,
          gender,
      });
  
      setFormErrors(errors);
  
      if (Object.keys(errors).length === 0) {
          setLoading(true);
  
          const payload = {
              firstName,
              lastName,
              email,
              phoneNumber,
              gender,
              userName,
              password,
              dateOfBirth: age?.toISOString().split('T')[0],
          };
  
          try {
              const response = await fetch('http://localhost:8060/api/users/sign-up', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(payload),
              });
  
              // const data = await response.json();

              console.log("data : " , response)
  
              if (response.ok) {
                  notification.success({
                      message: 'Signup Successful',
                      description: 'Your account has been created. Please check your email to activate your account.',
                  });
                  router.push('/successfulSignup');
              } else {
                const errorData = await response.json();
                throw new Error(errorData.errorMessage);  
              }
          }catch (error) {
            let errorMessage = 'An unexpected error occurred during registration.';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            notification.error({
                message: 'Signup Failed',
                description: errorMessage,
            });
        } finally {
            setLoading(false);
        }
      }
  };
  


  
  return (
    <Container>
      <div className="">
        <h1 className="text-center mb-7 text-2xl font-semibold ">
          Sign up Here
        </h1>
        <div className="flex flex-col gap-3">
            <Input
              placeholder={"First Name"}
              type={"text"}
              styling={"flex-1"}
              value={firstName}
              onChange={(e) => handleChange(e, "firstName", setFirstName)}
              onBlur={() => handleBlur("firstName")}
              error={touched.firstName ? formErrors.firstName : ""}
            />
            <Gap h={1} />
            <Input
              placeholder={"Last Name"}
              type={"text"}
              styling={"flex-1"}
              value={lastName}
              onChange={(e) => handleChange(e, "lastName", setLastName)}
              onBlur={() => handleBlur("lastName")}
              error={touched.lastName ? formErrors.lastName : ""}
            />

            <Input
              placeholder={"email"}
              type={"text"}
              styling={""}
              value={email}
              onChange={(e) => handleChange(e, "email", setEmail)}
              onBlur={() => handleBlur("email")}
              error={touched.email ? formErrors.email : ""}
            />
            <Gap h={1} />

            <select
              id="gender"
              value={gender || ""}
              onChange={(e) => setGender(e.target.value)}
              onBlur={() => handleBlur("gender")}
              className="input"
              required

            >
              <option  disabled selected value = "">
                Select Gender
              </option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>


            <Gap h={1} />

            <Input
              placeholder={"Phone Number"}
              styling={"flex-1"}
              type={"text"}
              value={phoneNumber}
              onChange={(e) => handleChange(e, "phoneNumber", setPhoneNumber)}
              onBlur={() => handleBlur("phoneNumber")}
              error={touched.phoneNumber ? formErrors.phoneNumber : ""}
            />

            <Input
              placeholder={"Username"}
              styling={"flex-1"}
              type={"text"}
              value={userName}
              onChange={(e) => handleChange(e, "userName", setUserName)}
              onBlur={() => handleBlur("userName")}
              error={touched.userName ? formErrors.userName : ""}
            />
            <DatePicker
              placeholderText=" Age"
              dateFormat="yyyy/MM/dd"
              className="input"
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    {"<"}
                  </button>
                  <select
                    value={date.getFullYear()}
                    onChange={({ target: { value } }) =>
                      changeYear(parseInt(value))
                    }
                  >
                    {years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <select
                    value={months[date.getMonth()]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                    className="input"

                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    {">"}
                  </button>
                </div>
              )}
              selected={age}
              onChange={(date) => setAge(date)}
            />
            <Gap h={1} />

            <Input
              placeholder={"Password"}
              type={"password"}
              styling={""}
              value={password}
              onChange={(e) => handleChange(e, "password", setPassword)}
              onBlur={() => handleBlur("password")}
              error={touched.confirmPassword ? formErrors.confirmPassword : ""}
            />
            <Input
              placeholder={"Confirm Password"}
              type={"password"}
              styling={""}
              value={confirmPassword}
              onChange={(e) =>
                handleChange(e, "confirmPassword", setConfirmPassword)
              }
              onBlur={() => handleBlur("confirmPassword")}
              error={touched.confirmPassword ? formErrors.confirmPassword : ""}
            />
        </div>
        <Gap h={1} />

        <div className="flex flex-col justify-center items-center">
          <Button
            onClick={handleSubmit}
            children={"Sign Up"}
            className="button_bg text-white font-semibold p-9 w-1/2  border-radius"
            disabled={!isFormValid}
            isLoading = {loading}
            
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
