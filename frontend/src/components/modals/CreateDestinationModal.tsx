import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ModalProps } from "@/helpers/types/ui";
import Dropdown from "../ui/DropDown";
import { useState, useEffect } from "react";
import Input from "@/components/ui/input";
import {
  validateCreateDestinationForm,
  validateDropdownSelection,
} from "@/helpers/constants/validators";
import Gap from "../common/Gap";
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

  useEffect(() => {
    if (getHotel === "yes") {
      setHotelQuestions(true);
    } else {
      setHotelQuestions(false);
    }
  }, [getHotel]);

  const [formErrors, setFormErrors] = useState<{
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

  const handleBlur = (field: keyof typeof touched) => {
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

  const isFormValid =
    Object.keys(formErrors).length === 0 &&
    country &&
    city &&
    duration &&
    startDate &&
    endDate &&
    participants 

    if (hotelQuestions && (!shareRoom || !hotel)) {
      return false;
    }

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Creeat Your Desired Desitnation</DialogTitle>
        <DialogContent>
          <div className="p-5">
            <Dropdown
              defaultOption={"Choose a desired country"}
              styling={""}
              options={[
                { value: "canada", label: "Canada" },
                { value: "canada", label: "Canada" },
                { value: "canada", label: "Canada" },
                { value: "canada", label: "Canada" },
                { value: "canada", label: "Canada" },
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
                { value: "canada", label: "Canada" },
                { value: "canada", label: "Canada" },
                { value: "canada", label: "Canada" },
                { value: "canada", label: "Canada" },
              ]}
              onchange={(value) => setCountry(value)}
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
                    { value: "canada", label: "Canada" },
                    { value: "canada", label: "Canada" },
                    { value: "canada", label: "Canada" },
                    { value: "canada", label: "Canada" },
                  ]}
                  onchange={(value) => setHotel(value)}
                  defaultValue={""}
                />
                <Gap v={1} />

                <Dropdown
                  defaultOption={"Do you want to share your hotel room?"}
                  styling={""}
                  options={[
                    { value: "canada", label: "Canada" },
                    { value: "canada", label: "Canada" },
                    { value: "canada", label: "Canada" },
                    { value: "canada", label: "Canada" },
                    { value: "canada", label: "Canada" },
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
            disabled={!isFormValid}
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
