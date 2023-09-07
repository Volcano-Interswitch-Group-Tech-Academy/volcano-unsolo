

export const validatePhoneNumberRegex = (phoneNumber: string): string | null => {
  const regex = /^(\+\d{12}|\d{11})$/;
  if (!phoneNumber.trim()) return "Phone number is required";
    if (!regex.test(phoneNumber)) return "Phone number is not valid";
    return null;
};




export const validateEmail = (email: string): string | null => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.trim()) return "Email is required";
    if (!regex.test(email)) return "Email is not valid";
    return null;
  };
  
  export const validateSignupForm = (data: any): { [key: string]: string } => {
    let errors: { [key: string]: string } = {};
  
    if (!data.firstName.trim()) errors.firstName = "First Name is required";
    if (!data.lastName.trim()) errors.lastName = "Last Name is required";
    const emailError = validateEmail(data.email);
    if (emailError) errors.email = emailError;
    if (!data.phoneNumber.trim()) errors.phoneNumber = "Phone Number is required";
    else if (!validatePhoneNumberRegex(data.phoneNumber)) errors.phoneNumber = "Phone number is not valid";
    if (!data.age.trim()) errors.age = "Age is required";
    if (!data.password.trim()) errors.password = "Password is required";
    if (data.password !== data.confirmPassword) errors.confirmPassword = "Passwords must match";
  
    return errors;
  };


export const validateLoginForm = (data: any) => {
    let errors: { [key: string]: string } = {};
  
    const emailError = validateEmail(data.email);
    if (emailError) errors.email = emailError;
    if (!data.password.trim()) errors.password = "Password is required";
  
    return errors;
  };
  
  