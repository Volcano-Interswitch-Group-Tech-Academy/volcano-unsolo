import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ModalProps } from "@/helpers/types/ui";
import { useState } from "react";
import { validateCreateDestinationForm } from "@/helpers/constants/validators";
import Gap from "../common/Gap";
import Dropdown from "../ui/DropDown";
import Input from "../ui/input";
import Button from "../ui/Button";

const CreateDestinationModal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [participants, setParticipants] = useState("");
  const [getHotel, setGetHotel] = useState("");
  const [shareRoom, setShareRoom] = useState("");
  const [hotel, setHotel] = useState("");
  const [hotelQuestions, setHotelQuestions] = useState(false);

  React.useEffect(() => {
    if (getHotel === "yes") {
      setHotelQuestions(true);
    } else {
      setHotelQuestions(false);
    }
  }, [getHotel]);

  

  type FormErrorKeys =
    | "country"
    | "city"
    | "duration"
    | "startDate"
    | "endDate"
    | "participants"
    | "getHotel"
    | "shareRoom"
    | "hotel";

  const [formErrors, setFormErrors] = useState<
    Record<FormErrorKeys, string | undefined>
  >({
    country: undefined,
    city: undefined,
    duration: undefined,
    startDate: undefined,
    endDate: undefined,
    participants: undefined,
    getHotel: undefined,
    shareRoom: undefined,
    hotel: undefined,
  });

  React.useEffect(() => {
    console.log('country:', country, 'Error:', formErrors.country);
    console.log('city:', city, 'Error:', formErrors.city);
    console.log('duration:', duration, 'Error:', formErrors.duration);
    console.log('startDate:', startDate, 'Error:', formErrors.startDate);
    console.log('endDate:', endDate, 'Error:', formErrors.endDate);
    console.log('participants:', participants, 'Error:', formErrors.participants);
    console.log('getHotel:', getHotel, 'Error:', formErrors.getHotel);
    console.log('shareRoom:', shareRoom, 'Error:', formErrors.shareRoom);
    console.log('hotel:', hotel, 'Error:', formErrors.hotel);
  }, [country, city, duration, startDate, endDate, participants, getHotel, shareRoom, hotel, formErrors]);
  
  const [touched, setTouched] = useState<{
    country?: string;
    city?: string;
    duration?: string;
    startDate?: string;
    endDate?: string;
    participants?: string;
    getHotel?: string;
    shareRoom?: string;
    hotel?: string;
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

  const handleBlur = (field: FormErrorKeys) => {
    setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
    const errors = validateCreateDestinationForm({
      country,
      city,
      duration,
      startDate,
      endDate,
      participants,
      getHotel,
      shareRoom,
      hotel,
    });
    setFormErrors(errors);
  };

  const isFormValid = () => {
    console.log("Errors:", formErrors);
    console.log("Fields:", {
      country,
      city,
      duration,
      startDate,
      endDate,
      participants,
      getHotel,
      shareRoom,
      hotel,
    });
  
    if (
      Object.keys(formErrors).some((key) => {formErrors[key as FormErrorKeys]
        console.log("formerrors arrays", formErrors)
        return formErrors[key as FormErrorKeys]
        
      })
    )
    {
      return false;
    }
    if (
      !country ||
      !city ||
      !duration ||
      !startDate ||
      !endDate ||
      !participants
    ) {
      return false;
    }
  
    if (getHotel === "yes" && (!shareRoom || !hotel)) {
      return false;
    }
  
    return true;
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create Your Desired Destination</DialogTitle>
        <DialogContent>
          <div>
            <Dropdown
              defaultOption={"Choose a desired country"}
              styling={""}
              options={[
                { value: "canada", label: "Canada" },
                { value: "uk", label: "UK" },
              ]}
              onchange={(value) => setCountry(value)}
              defaultValue={""}
            />
            <Gap v={1} />
            <Dropdown
              defaultOption={"Choose a desired city"}
              styling={""}
              options={[
                { value: "canada", label: "Canada" },
                { value: "uk", label: "UK" },
              ]}
              onchange={(value) => setCity(value)}
              defaultValue={""}
            />
            <Gap v={1} />

            <Input
              placeholder={"Duration"}
              type={"text"}
              styling={""}
              value={duration}
              onChange={(e) => handleChange(e, "duration", setDuration)}
              onBlur={() => handleBlur("duration")}
              error={touched.duration ? formErrors.duration : ""}
            />
            <Gap v={1} />

            <Input
              placeholder={"How many participants would you like?"}
              type={"text"}
              styling={""}
              value={participants}
              onChange={(e) => handleChange(e, "participants", setParticipants)}
              onBlur={() => handleBlur("participants")}
              error={touched.participants ? formErrors.participants : ""}
            />
            <Gap v={1} /> 

            <Input
              placeholder={"Start Date"}
              type={"date"}
              styling={""}
              value={startDate}
              onChange={(e) => handleChange(e, "startDate", setStartDate)}
              onBlur={() => handleBlur("startDate")}
              error={touched.startDate ? formErrors.startDate : ""}
            />
            <Gap v={1} />
            <Input
              placeholder={"End Date"}
              type={"date"}
              styling={""}
              value={endDate}
              onChange={(e) => handleChange(e, "endDate", setEndDate)}
              onBlur={() => handleBlur("endDate")}
              error={touched.endDate ? formErrors.endDate : ""}
            />
            <Gap v={1} />

            <Dropdown
              defaultOption={"Do you want to get an hotel with us?"}
              styling={""}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              onchange={(value) => setGetHotel(value)}
              defaultValue={""}
            />
            <Gap v={1} />
            {hotelQuestions ? (
              <>
                <Dropdown
                  defaultOption={"Choose from our list of hotels?"}
                  styling={""}
                  options={[
                    { value: "canada", label: "Canada" },
                    { value: "uk", label: "UK" },
                  ]}
                  onchange={(value) => setHotel(value)}
                  defaultValue={""}
                />
                <Gap v={1} />

                <Dropdown
                  defaultOption={"Do you want to share your hotel room?"}
                  styling={""}
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  onchange={(value) => setShareRoom(value)}
                  defaultValue={""}
                />
              </>
            ) : null}
          </div>

          <Gap v={1} />

          <Button
            children={"Create trip"}
            disabled={!isFormValid()}
            className="button_bg text-white font-bold lg:ml-20 ml-12 w-2/3 text-center"
          />

          <Gap v={1} />

          <p className="cocoa_yellow cursor-pointer ml">
            If your desired destination isn’t on the list, click here to suggest
            it to us
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateDestinationModal;
