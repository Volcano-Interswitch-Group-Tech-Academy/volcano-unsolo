import Container from "@/components/common/layout/Container";
import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const photos = [
    "/morocco.jpg",
    "/five.jpg",
    "/six.jpg",
    "/seven.jpg",
    "/eight.jpg",
    "/one.jpg",
    "/two.jpg",
    "/three.jpg",
    "/four.jpg",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  };

  return (
      <div>
        <div className="w-full relative">
          <Slider {...sliderSettings} className=".z-negative">
            {photos?.map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-full bg-black opacity-90 hero-height"
              >
                <img
                  src={imgSrc}
                  alt={`slide-${index}`}
                  className="opacity-60 object-cover hero-height w-full"
                />

                <div className="absolute top-1/3 lg:left-10 left-3 text-white font-bold text-2xl lg:w-2/12">
                  Connect Yourself with Like-minded travellers
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex flex-col justify-center items-center">
            <div className="absolute left bg-white shadow-lg z-50">
              <div className=" flex lg:flex-row flex-col  px-8 py-5 justify-center gap-4 items-center">
                <div className="lg:border-r  border-gray-400 px-2">Flights</div>
                <div className="lg:border-r  border-gray-400 px-2">Hotels</div>
                <div>Tours and Activies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
