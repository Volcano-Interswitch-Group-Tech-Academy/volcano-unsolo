import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ModalProps } from "@/helpers/types/ui";
import Dropdown from "../ui/DropDown";
import { useState } from "react";
import Input from "@/components/ui/input";
import { validateCreateDestinationForm } from "@/helpers/constants/validators";


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

  const [formErrors, setFormErrors] = useState<{
    country?: string;
    city?: string;
    duration?: string;
    startDate?: string;
    EndDate?: string;
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
    EndDate?: string;
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
    participants &&
    getHotel &&
    shareRoom &&
    hotel;

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Creeat Your Desired Desitnation</DialogTitle>
        <DialogContent>
          <p className="cocoa_yellow cursor-pointer">
            If your desired destination isn’t on the list, click here to suggest
            it to us
          </p>
          <div>
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

            <Input
              placeholder={"Duration"}
              type={"text"}
              styling={""}
              value={duration}
              onChange={(e) => handleChange(e, "duration", setDuration)}
              onBlur={() => handleBlur("duration")}
              error={touched.duration ? formErrors.duration : ""}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateDestinationModal;
