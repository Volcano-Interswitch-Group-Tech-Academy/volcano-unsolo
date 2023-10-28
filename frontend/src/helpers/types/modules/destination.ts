import { MouseEventHandler } from "react";

export type CardProps = {
  images?: string[];
  countryName: string;
  cityName: string;
  daysOfTrip: string | number;
  depatureDate: string | number;
  returnDate: string | number;
  participants: string | number;
  totalParticipant: string | number;
  availableSlots: string | number;
  price: string;
  description: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type CreateDestinationRequestType = {
  country: string;
  city: string;
  duration: number;
  startDate: string;
  endDate: string;
  maxNoOfPersons: number;
  tripDescription: "string";
  noOfRegisterPersons: number;
  cost?: number
};

export type CreateDestinationResponseType = {
    country: string;
    city: string;
    duration: string;
    startDate: string;
    endDate: string;
    maxNoOfPersons: number;
    tripDescription: "string";
    cost?: number
    status: string
    message: string
  };
  