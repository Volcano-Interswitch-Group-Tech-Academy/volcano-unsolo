export const validateEmail = (email: string): string | null => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.trim()) return "Email is required";
    if (!regex.test(email)) return "Email is not valid";
    return null;
  };

  export const validatePhoneNumberRegex = (phoneNumber: string): string | null => {
    const regex = /^\d{11}$/;
    if (!phoneNumber.trim()) return "Phone number is required";
    if (!regex.test(phoneNumber)) return "Phone number is not valid";
    return null;
};

  
  
  export const validateSignupForm = (data: any): { [key: string]: string |undefined } => {
    let errors: { [key: string]: string | undefined } = {};
  
    if (!data.firstName.trim()) errors.firstName = "First Name is required";
    if (!data.lastName.trim()) errors.lastName = "Last Name is required";
    const emailError = validateEmail(data.email);
    if (emailError) errors.email = emailError;
    if (!data.phoneNumber.trim()) errors.phoneNumber = "Phone Number is required";
    // else if (!validatePhoneNumberRegex(data.phoneNumber)) errors.phoneNumber = "Phone number is not valid";
    if (!data.age) errors.age = "Age is required";
    if (!data.userName.trim()) errors.userName = "A Username is required";
    if (!data.password.trim()) errors.password = "Password is required";
    if (data.password !== data.confirmPassword) errors.confirmPassword = "Passwords must match";
    if (!data.gender) errors.gender = "Gender is required";

  
    return errors;
  };

  const MINIMUM_AGE = 18;

 export  function validateAge(date: Date | null): string | undefined {
    if (!date) return "Age is required";
  
    const currentYear = new Date().getFullYear();
    const birthYear = date.getFullYear();
    const age = currentYear - birthYear;
  
    if (age < MINIMUM_AGE) {
      return `You must be at least ${MINIMUM_AGE} years old to sign up.`;
    }
  
    if (date > new Date()) {
      return "Invalid birth date. Please select a date in the past.";
    }
  
    return undefined; 
  }
  
export const validateLoginForm = (data: any) => {
    let errors: { [key: string]: string } = {};
  
    const emailError = validateEmail(data.email);
    if (emailError) errors.email = emailError;
    if (!data.password.trim()) errors.password = "Password is required";
  
    return errors;
  };

  export const validateDropdownSelection = (value: string, defaultValue: string): string | null => {
    if (value === defaultValue || value === "") {
        return "Please select a valid option.";
    }
    return null;
};


export type FormErrorKeys = "country" | "city" | "duration" | "startDate" | "endDate" | "participants" | "getHotel" | "shareRoom" | "hotel";
export const validateCreateDestinationForm = (data: {
  country: string;
  city: string;
  duration: string;
  startDate: string;
  endDate: string;
  participants: string;
  getHotel: string;
  shareRoom: string;
  hotel: string;
}): Record<FormErrorKeys, string | undefined> => {
  let errors: Record<FormErrorKeys, string | undefined> = {
    country: undefined,
    city: undefined,
    duration: undefined,
    startDate: undefined,
    endDate: undefined,
    participants: undefined,
    getHotel: undefined,
    shareRoom: undefined,
    hotel: undefined
  };
  if (!data.city.trim()) errors.city = "City is required";
  if (!data.duration.trim()) errors.duration = "Duration is required";
  if (!data.startDate.trim()) errors.startDate = "Start Date is required";
  if (!data.endDate.trim()) errors.endDate = "End Date is required";
  if (new Date(data.startDate) > new Date(data.endDate)) {
    errors.startDate = "Start date should be before the end date.";
    errors.endDate = "End date should be after the start date.";
  }
  if (!data.participants.trim()) errors.participants = "Participants are required";
  if (data.getHotel === "yes") {
    if (!data.shareRoom.trim()) errors.shareRoom = "Room sharing option is required";
    if (!data.hotel.trim()) errors.hotel = "Hotel is required";
}  if (!data.shareRoom.trim()) errors.shareRoom = "Room sharing option is required";
  if (!data.hotel.trim()) errors.hotel = "Hotel is required";

  Object.keys(errors).forEach((key) => {
    if (!errors[key as FormErrorKeys]) {
      delete errors[key as FormErrorKeys];
    }
  });
  return errors;
};

type JoinDestinationFormData = {
  getHotel: string;
  shareRoom?: string;
  hotel?: string;
};
export const validateJoinDestinationForm = (data: JoinDestinationFormData) => {
  let errors: Partial<JoinDestinationFormData> = {};

  if (!data.getHotel?.trim()) errors.getHotel = "Hotel option is required";
  if (!data.shareRoom?.trim()) errors.shareRoom = "Room sharing option is required";
  if (!data.hotel?.trim()) errors.hotel = "Hotel is required";

  return errors;
};

