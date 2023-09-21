import * as React from "react";
import { JoinDestinationModalProps } from "@/helpers/types/ui";
import Dropdown from "../ui/DropDown";
import Button from "../ui/Button";
import { useState, useEffect } from "react";
import { validateJoinDestinationForm } from "@/helpers/constants/validators";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Gap from "../common/Gap";

const CreateDestinationModal: React.FC<JoinDestinationModalProps> = ({
  onOpen,
  close,
}) => {
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
    getHotel?: string;
    shareRoom?: string;
    hotel?: string;
  }>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      getHotel,
      ...(hotelQuestions && {
        shareRoom,
        hotel,
      }),
    };

    const errors = validateJoinDestinationForm(formData);
    setFormErrors(errors);

    // Only check form validity after setting errors
    if (Object.keys(errors).length === 0) {
      console.log("Form is valid! Do your submit logic here.");
    }
  };

  const isFormValid = () => {
    if (hotelQuestions && (!shareRoom || !hotel)) {
      return false;
    }

    return getHotel && !Object.values(formErrors).some(Boolean);
};
  return (
    <div>
      <Dialog open={onOpen} onClose={close}>
        <DialogTitle>Creeat Your Desired Desitnation</DialogTitle>
        <DialogContent>
          <div className="p-5">
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
            children={"Join Destination"}
            disabled={!isFormValid}
            className="button_bg text-white font-bold lg:ml-16 ml-12 w-2/3 text-center"
          />

          <Gap v={1} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateDestinationModal;
