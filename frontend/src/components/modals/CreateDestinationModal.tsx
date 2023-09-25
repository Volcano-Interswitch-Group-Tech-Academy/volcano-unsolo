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
import { useForm, Controller } from "react-hook-form";


const defaultValues = {
  country: '',
  city: '',
  duration: '',
  startDate: '',
  endDate: '',
  participants: '',
  shareRoom: '',
  hotel: '',
  getHotel: '',

}

const CreateDestinationModal: React.FC<ModalProps> = ({ open, onClose }) => {


  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors ,isValid},
  } = useForm({
    defaultValues,
  });

  const values = watch()
  const getHotelValue = values.getHotel


 

  // errors messages start

  const countryErrorMessage = errors?.country?.message
  const cityErrorMessage = errors?.city?.message
  const endDate = errors?.endDate?.message
  const startDate = errors?.startDate?.message
  const durationMessage = errors?.duration?.message
  const participants = errors?.participants?.message
  const shareRoom = errors?.shareRoom?.message
  const hotelMessage = errors?.hotel?.message

  // error message end




// call to action function
  const onSubmit = (value: any) => {
    console.log(value)
  }

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create Your Desired Destination</DialogTitle>
        <DialogContent>
          <div>
            <select {...register("country", { required: "Country is required" })}>
              <option disabled selected value="">
                Choose a desired country
              </option>
              {[
                { value: "canada", label: "Canada" },
                { value: "uk", label: "UK" },
              ].map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
            <Gap v={1} />
            <select {...register("city", { required: "City is required" })}>
              <option disabled selected value="">
                Choose a desired city
              </option>
              {[
                { value: "canada", label: "Canada" },
                { value: "uk", label: "UK" },
              ].map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>


            <Gap v={1} />

            <Controller
              name="duration"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  placeholder="Duration"
                  styling=""
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={() => field.onBlur()} type={undefined}                />
              )}
            />

            <Gap v={1} />
            <Controller
              name='participants'
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  placeholder="How many participants would you like?"
                  styling=""
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={() => field.onBlur()} type={undefined}                />
              )}
            />

            <Gap v={1} />
            <Controller
              name='startDate'
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  placeholder="Start Date?"
                  styling=""
                  type="date"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={() => field.onBlur()}
                  error=""
                />
              )}
            />

            <Gap v={1} />
            <Controller
              name='endDate'
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  placeholder="End Date"
                  styling=""
                  type="date"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={() => field.onBlur()}
                  error=""
                />
              )}
            />

            <Gap v={1} />

            <select {...register('getHotel', { required: "your must select a response" })}>
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
            {getHotelValue && getHotelValue == 'yes' ? (
              <>
                <select {...register('hotel')}>
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

                <Gap v={1} />
                <select {...register('shareRoom')}>
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
              </>
            ) : null}
          </div>

          <Gap v={1} />

          <Button
            children={"Create trip"}
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid}
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