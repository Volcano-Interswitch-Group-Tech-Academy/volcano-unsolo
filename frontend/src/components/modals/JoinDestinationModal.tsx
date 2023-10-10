import * as React from "react";
import { JoinDestinationModalProps } from "@/helpers/types/ui";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Gap from "../common/Gap";
import Button from "../ui/Button";
import { useForm, Controller } from "react-hook-form";

const defaultValues = {
  shareRoom: "",
  hotel: "",
  getHotel: "",
};

const JoinDestinationModal: React.FC<JoinDestinationModalProps> = ({
  onOpen,
  close,
}) => {
  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
  });

  const values = watch();
  const getHotelValue = values.getHotel;
  const shareRoom = errors?.shareRoom?.message;
  const hotelMessage = errors?.hotel?.message;
  const getHotelMessage = errors?.getHotel?.message;

  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <div>
      <Dialog open={onOpen} onClose={close}>
        <p className="text-center font-bold text-2xl mt-5">Join Destination</p>
        <DialogContent>
          <div className="p-5">
            <select
              {...register("getHotel", {
                required: "your must select a response",
              })}
              className="input"
              required
            >
              <option disabled selected value="">
                Do you want to get an hotel with us?
              </option>
              {[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ].map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
            <Gap v={1} />

            {getHotelMessage && (
              <p className="text-red-500 text-sm">{getHotelMessage}</p>
            )}
            {getHotelValue && getHotelValue == "yes" ? (
              <>
                <select
                  {...register("hotel", {
                    required: "your must select a response",
                  })}
                  className="input"
                >
                  <option disabled selected value="">
                    Choose from our list of hotels?
                  </option>
                  {[
                    { value: "canada", label: "Canada" },
                    { value: "uk", label: "UK" },
                  ].map((item) => (
                    <option value={item.value}>{item.label}</option>
                  ))}
                </select>
                {hotelMessage && (
                  <p className="text-red-500 text-sm">{hotelMessage}</p>
                )}

                <Gap v={1} />
                <select
                  {...register("shareRoom", {
                    required: "your must select a response",
                  })}
                  className="input"
                >
                  <option disabled selected value="">
                    Do you want to share your hotel room?
                  </option>
                  {[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ].map((item) => (
                    <option value={item.value}>{item.label}</option>
                  ))}
                </select>
                {shareRoom && (
                  <p className="text-red-500 text-sm">{shareRoom}</p>
                )}
              </>
            ) : null}
          </div>

          <Gap v={1} />

          <Button
            children={"Join Destination"}
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid}
            className="button_bg text-white font-bold lg:ml-12 ml-12 w-2/3 text-center"
          />

          <Gap v={1} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JoinDestinationModal;
