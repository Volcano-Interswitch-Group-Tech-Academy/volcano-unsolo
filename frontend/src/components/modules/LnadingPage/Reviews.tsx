import React, { useState } from "react";
import { ArrowLeftIcon } from "../../../../public/svgs/icons";
import Button from "@/components/ui/Button";
import useMediaQuery from "@/components/common/layout/useMediaQuey";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Container from "@/components/common/layout/Container";

const Reviews = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      customer: "Sogo",
      description:
      " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
      image: "/woman.jpg",
    },
    {
      customer: "Tolani",
      description:
      " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
      image: "/man.jpg",
    },
    {
      customer: "Olubunmi",
      description:
      " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
      image: "/woman2.jpg",
    },
    {
      customer: "Deola",
      description:
      " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
      image: "/unnamed.jpg",
    },
  ];

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(reviews.length - 3);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNextClick = () => {
    if (currentIndex === reviews.length - 3) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const reviewPairs = [];
  for (let i = 0; i < reviews.length; i += 2) {
    reviewPairs.push(reviews.slice(i, i + 2));
  }

  return (
    <Container>
      <div className="lg:mt-14 lg:ml-32 mx-10">
      <div className="flex lg:flex-row flex-col justify-between ">
        <div className="lg:w-2/4 mt-5 mb-5">
          <h1 className="font-bold text-3xl">Travelers Really</h1>
          <h1 className="font-bold text-3xl">Love Unsolo!!!!</h1>
          <p className="light-black-font mt-2">
            See what some of our users have to say.
          </p>
          {isDesktop && (
            <Button
              children={"Explore Unsolo"}
              icon={<ArrowLeftIcon />}
              iconPosition="end"
              className="button_bg text-white flex flex-row justify-center items-center font-bold rounded-md mt-3"
            />
          )}
        </div>
        <div className=" w-full">
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            stopOnHover
            selectedItem={currentIndex}
          >
            {reviewPairs.map((pair, index) => (
              <div key={index} className="flex gap-6 justify-center">
                {pair.map((review, idx) => (
                  <div
                    key={idx}
                    className="button_bg p-4 rounded-2xl  w-2/3 mb-5 lg:mb-0 text-left"
                  >
                    <img
                      src={review.image}
                      alt={review.customer}
                      className="rounded-full"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <p className="text-white mt-2 white-light-font">{review.description}</p>
                    <h3 className="mt-2 font-bold text-white">
                      {review.customer}
                    </h3>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
          <div className="mt-5 flex justify-center lg:justify-left">
            <div onClick={handlePrevClick} className="cursor-pointer mr-10">
              <img src="prevv.svg" alt="previous" className="w-10" />
            </div>
            <div onClick={handleNextClick} className="cursor-pointer">
              <img src="/nextt.svg" alt="next" className="w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
    
  );
};

export default Reviews;
