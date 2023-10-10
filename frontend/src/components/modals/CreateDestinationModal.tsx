import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { ModalProps } from "@/helpers/types/ui";
import Gap from "../common/Gap";
import Input from "../ui/input";
import Button from "../ui/Button";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { getLocalStorage } from "@/utils/localStorage";
import { useGetData } from "@/helpers/hooks/useQueryHooks";
import { UserDataProps } from "@/helpers/types/auth";
import { usePostData } from "@/helpers/hooks/useMutationtHook";
import { CreateDestinationRequestType, CreateDestinationResponseType } from "@/helpers/types/modules/destination";

const defaultValues = {
  country: "",
  city: "",
  duration: "" ,
  startDate: "",
  endDate: "",
  participants: "",
  shareRoom: "",
  hotel: "",
  getHotel: "",
  description: "",
  cost: "",
};


const CreateDestinationModal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [startDatePickerDate, setStartDatePickerDate] = useState<Date | null>(
    null
  );
  const [endDatePickerDate, setEndDatePickerDate] = useState<Date | null>(null);

  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    mode: "all",
  });

  const values = watch();
  const getHotelValue = values.getHotel;

  const countryErrorMessage = errors?.country?.message;
  const cityErrorMessage = errors?.city?.message;
  const endDate = errors?.endDate?.message;
  const startDate = errors?.startDate?.message;
  const durationMessage = errors?.duration?.message;
  const participants = errors?.participants?.message;
  const shareRoom = errors?.shareRoom?.message;
  const descriptionMessage = errors?.description?.message;

  console.log(errors);

  const onSubmit = (value: any) => {
    const postData = {
      country: value.country,
      city: value.city,
      duration: Number(value.duration), 
      startDate: value.startDate,
      endDate: value.endDate,
      maxNoOfPersons: Number(value.participants), 
      tripDescription: value.description,
      cost: Number(value.cost),  
      noOfRegisterPersons: Number(value.participants)}

      console.log("postData: ", postData)

    createDestinationMutation.mutate(postData, {
      onSuccess: (data) => {
      },
      onError: (error) => {
      }
    });
};


  const token = getLocalStorage("token")!;
  const { data: userData } = useGetData<UserDataProps>(
    "http://localhost:8060/api/users",
    token
  );
  const isUserLoggedIn = userData && userData.id; 

  const createDestinationMutation = usePostData<CreateDestinationRequestType, CreateDestinationResponseType>(`destinations/newDest/${isUserLoggedIn? userData.id : null}`, token);

  return (
    <div>
      <Dialog open={open} onClose={onClose}> 
        <p className="text-center font-bold text-2xl mt-5">
          Create Your Desired Destination
        </p>
        <DialogContent>
          <div>
            <select
              {...register("country", { required: "Country is required" })}
              className="input"
              required
              key="country"
            >
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

            {countryErrorMessage && (
              <p className="text-red-500 text-sm">{countryErrorMessage}</p>
            )}

            <Gap v={1} />
            <select
              {...register("city", { required: "City is required" })}
              className="input"
              required
              key="city"
            >
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

            {cityErrorMessage && (
              <p className="text-red-500 text-sm">{cityErrorMessage}</p>
            )}

            <Gap v={1} />

            <Controller
              key="duration"
              name="duration"
              control={control}
              defaultValue=""
              rules={{ required: "Duration is required" }}
              render={({ field }) => (
                <Input
                  placeholder="Duration"
                  styling=""
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={() => field.onBlur()}
                  type="text"
                  error={durationMessage}
                />
              )}
            />
            {/* {durationMessage && (
              <p className="text-red-500 text-sm">{durationMessage}</p>
            )} */}

            <Gap v={1} />
            <Controller
              key="participants"
              name="participants"
              control={control}
              defaultValue=""
              rules={{ required: "Participant is required" }}
              render={({ field }) => (
                <Input
                  placeholder="How many participants would you like?"
                  styling=""
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={() => field.onBlur()}
                  type="text"
                  error={participants}
                />
              )}
            />

            
            {/* {participants && (
              <p className="text-red-500 text-sm">{participants}</p>
            )} */}

            <Gap v={1} />
            <div className="flex flex-row">
              <Controller
                key="startDate"
                name="startDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <DatePicker
                    selected={startDatePickerDate}
                    onChange={(date) => {
                      setStartDatePickerDate(date);
                      field.onChange(date);
                    }}
                    placeholderText=" Pick a Start Date"
                    dateFormat="yyyy/MM/dd"
                    className="input"
                  />
                )}
              />

              <Gap h={5} />

              <Controller
                key="endDate"
                name="endDate"
                control={control}
                defaultValue=""
                rules={{
                  validate: (value) =>
                    new Date(value) >= new Date(watch("startDate")) ||
                    "End date should be greater than or equal to start date",
                }}
                render={({ field }) => (
                  <DatePicker
                    selected={endDatePickerDate}
                    onChange={(date) => {
                      setEndDatePickerDate(date);
                      field.onChange(date);
                    }}
                    placeholderText="Pick an End Date"
                    dateFormat="yyyy/MM/dd"
                    className="input"
                  />
                )}
              />
              {endDate && <p className="text-red-500 text-sm">{endDate}</p>}
            </div>

            <Gap v={1} />

            <Controller
              name="description"
              rules={{ required: "A trip description is required" }}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Trip description"
                  style={{ width: "100%", height: "100px", padding: "10px" }}
                  className="input"
                ></textarea>
              )}
            />

            <Gap v={1} />

            <select
              {...register("getHotel", {
                required: "your must select a response",
              })}
              className="input"
              required
              key="getHotel"
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
