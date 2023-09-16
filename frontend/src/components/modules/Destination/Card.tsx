import { CardProps } from "@/helpers/types/modules/destination";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Slider from "react-slick";

const Card: React.FC<CardProps> = ({
  countryName,
  cityName,
  depatureDate,
  returnDate,
  images,
  participants,
  totalParticipant,
  daysOfTrip,
  availableSlots,
  price,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className=" w-[320px] rounded-lg border border-gray-400 bg-white shadow-md">
      <h1 className="p-5 font-bold text-2xl">Morocco</h1>
      <div className="w-full">
        <Slider {...sliderSettings}>
          {images?.map((imgSrc, index) => (
            <div key={index}>
              <Image
                width={320}
                height={70}
                src={imgSrc}
                alt={`slide-${index}`}
              />
            </div>
          ))}
        </Slider>
        
      </div>
      <div className="p-3">
        <div className="flex flex-row">
          <svg
            width="31"
            height="29"
            viewBox="0 0 39 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.4131 4.85803C24.6235 3.50782 22.2061 2.73751 19.6751 2.71094H19.5792C17.048 2.73712 14.6302 3.50718 12.8402 4.85729C11.0502 6.20741 10.0292 8.03102 9.99452 9.94019C9.96337 11.2957 10.469 12.6277 11.4466 13.7663L18.9898 25.3024H20.2669L27.8077 13.7663C28.7877 12.6277 29.2933 11.2957 29.2598 9.94019C29.2246 8.03117 28.2033 6.20784 26.4131 4.85803ZM19.4474 4.51825L19.6439 4.53632L19.8212 4.51825C21.7036 4.58009 23.483 5.18346 24.7938 6.20435C26.1045 7.22523 26.8469 8.58605 26.8684 10.0071C26.8867 11.0156 26.4963 12.0043 25.7494 12.8409L25.7015 12.9024L25.6607 12.9656L19.6271 22.192L13.596 12.9747L13.5552 12.9042L13.5073 12.8427C12.7604 12.0061 12.37 11.0174 12.3883 10.0089C12.4087 8.58621 13.152 7.22367 14.465 6.20212C15.7779 5.18058 17.5604 4.57787 19.445 4.51825H19.4474ZM20.9139 8.43832C20.6522 8.30635 20.3587 8.21456 20.05 8.16816C19.7413 8.12177 19.4236 8.12169 19.1148 8.16792C18.8061 8.21416 18.5125 8.30581 18.2507 8.43763C17.9889 8.56946 17.7642 8.73888 17.5892 8.93623C17.4142 9.13358 17.2925 9.35499 17.231 9.58781C17.1695 9.82064 17.1694 10.0603 17.2307 10.2932C17.292 10.526 17.4135 10.7475 17.5883 10.9449C17.7631 11.1424 17.9877 11.3119 18.2493 11.4439C18.7778 11.7104 19.4249 11.8076 20.0484 11.7143C20.6719 11.6209 21.2207 11.3445 21.574 10.946C21.9274 10.5474 22.0563 10.0593 21.9325 9.58902C21.8087 9.11874 21.4423 8.70482 20.9139 8.43832ZM16.9195 6.93463C17.4423 6.65743 18.0334 6.4619 18.6579 6.35955C19.2824 6.2572 19.9277 6.25009 20.5559 6.33865C21.1841 6.42721 21.7825 6.60964 22.3158 6.87521C22.8491 7.14078 23.3067 7.48413 23.6615 7.88505C24.0162 8.28597 24.2611 8.73636 24.3817 9.20973C24.5023 9.68309 24.4961 10.1699 24.3636 10.6414C24.2311 11.113 23.9748 11.5597 23.6099 11.9555C23.2451 12.3512 22.7789 12.6879 22.239 12.9458C21.182 13.4505 19.9053 13.6235 18.6815 13.4278C17.4578 13.2321 16.3839 12.6832 15.6894 11.8985C14.995 11.1137 14.7348 10.1552 14.9647 9.22767C15.1945 8.30018 15.896 7.47724 16.9195 6.93463Z"
              fill="#5ADBFF"
            />
          </svg>

          <p className="light-font mt-2">
            {countryName}, {cityName}
          </p>
        </div>
        <div className="p-2">
          <div className="average-font mb-1">
            {depatureDate}{" "}
            <span className="font-bold primary_text_color ">To</span>{" "}
            {returnDate}{" "}
          </div>
          <div className="average-font  mb-1">
            <span className="font-bold primary_text_color ">{daysOfTrip}</span>{" "}
            Days Trip
          </div>
          <div className="average-font  mb-1">
            <span className="font-bold primary_text_color ">
              {participants}
            </span>{" "}
            of{" "}
            <span className="font-bold primary_text_color ">
              {totalParticipant}
            </span>
            Participants (
            <span className="font-bold primary_text_color">
              {availableSlots}
            </span>{" "}
            More slots available )
          </div>

          <div className="mb-1">
            {!isExpanded && (
              <div className="light-font">
                {description.substring(0, 200)}...
                <button
                  onClick={toggleDescription}
                  className="ml-2 primary_text_color"
                >
                  See More
                </button>
              </div>
            )}

            {/* If the description is expanded, show the entire content */}
            {isExpanded && (
              <div className="light-font">
                {description}.
                <button
                  onClick={toggleDescription}
                  className="ml-1 primary_text_color"
                >
                  {" "}
                  See Less
                </button>
              </div>
            )}
          </div>

          <div className="text-2xl font-bold secondary_text_color">{price}</div>
          <div>
            <Button
              children={"Join Destination"}
              className="button_bg rounded-md mt-3 text-white font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
