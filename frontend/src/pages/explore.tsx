import React, { useState } from "react";
import useMediaQuery from "@/components/common/layout/useMediaQuey";
import Navbar from "@/components/common/layout/Navbar";
import MobileNav from "@/components/common/layout/MobileNav";
import shareImg from "../../public/share-img.png";
import thankYouImg from "../../public/thankyou.png";
import deleteImg from "../../public/delete-img.png";
import asideOne from "../../public/aside-img-one.png";
import deola from "../../public/unnamed.jpg";
import author2 from "../../public/author2.png";
import advertImg from "../../public/advert_img.png";
import asideTwo from "../../public/blogImg_two.png";
import Image from "next/image";
import Slider from "react-slick";
import AppLayout from "@/components/common/layout/AppLayout";

const explore = () => {
  const [visible, setVisible] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const blogContent = [
    {
      id: 1,
      authorImage: deola,
      blogPicture: asideOne,
      authorName: "Adeola",
      publishDate: "March 7th 2023",
      blogTitle: "Solo Travel vs. Group Adventures: Finding Your Perfect Match",
      writeUp:
        "Are you torn between solo exploration and group escapades? In this blog, we'll help you navigate the pros and cons of each travel style, empowering you to choose the perfect adventure that suits your wanderlust.",
    },
    {
      id: 2,
      authorImage: author2,
      blogPicture: asideTwo,
      authorName: "Tolani",
      publishDate: "May 21st 2023",
      blogTitle: "Hidden Gems: Off-the-Beaten-Path Destinations You Must Discover.",
      writeUp:
        "Get ready to uncover the world's best-kept secrets! We'll guide you through enchanting destinations that often go unnoticed by mainstream travelers, offering unique experiences and unforgettable memories.",
    },
    {
      id: 3,
      // authorImage: deola,
      blogPicture: asideOne,
      authorName: "Jordan",
      publishDate: "July 9th 2023",
      blogTitle: "Traveling Sustainably: How to Explore the World Responsibly.",
      writeUp:
        "Sustainable travel is more than a trend; it's a responsibility. Join us as we explore eco-friendly practices, ethical tourism, and the positive impact you can make on the environment and local communities during your journeys.",
    },
    {
      id: 4,
      // authorImage: deola,
      blogPicture: asideOne,
      authorName: "Faith",
      publishDate: "August 18th 2023",
      blogTitle:
        "Foodie Adventures: Exploring Culinary Delights Around the Globe.",
      writeUp:
        "Embark on a mouthwatering journey around the world! From street food stalls in Bangkok to Michelin-starred restaurants in Paris, we'll tantalize your taste buds and inspire your culinary wanderlust.",
    },
    {
      id: 5,
      // authorImage: deola,
      blogPicture: asideOne,
      authorName: "Indica",
      publishDate: "September 30th 2023",
      blogTitle: "Traveling with a Purpose: Volunteering Abroad and Making a Difference.",
      writeUp:
        "Traveling isn't just about sightseeing; it's also an opportunity to give back. Discover the world of volunteer travel, where you can immerse yourself in local cultures while contributing to meaningful causes.",
    },
    {
      id: 6,
      // authorImage: author2,
      blogPicture: asideTwo,
      authorName: "Kelly",
      publishDate: "August 10th 2023",
      blogTitle: "Solo Female Travel: Empowering Adventures and Safety Tips.",
      writeUp:
        "Ladies, this one's for you! Join us as we celebrate the empowering experiences of solo female travel. We'll share inspiring stories and essential safety tips to help you embark on fearless adventures.",
    },
  ];
  const imgObj = [
    {
      image: thankYouImg,
      altText: "Like button",
    },
    {
      image: shareImg,
      altText: "Share button",
    },
    {
      image: deleteImg,
      altText: "delete button",
    },
  ];

  const ads = [
    {
      adImg: deola,
      adText: {
        title: "Taste of Heaven Dinning",
        country: "Casablanca, Morocco",
        street: "9, Jakeson street",
        subTitle: "Book A reservation :",
        contact: "0909090909090, tasteofheaven@gmail.com",
      },
    },
    // {
    //   adImg: advertImg,
    //   adText: {
    //     title: "Java Language",
    //     country: "Casablanca, Morocco",
    //     street: "9, Jakeson street",
    //     subTitle: "Book A reservation :",
    //     contact: "0909090909090, tasteofheaven@gmail.com",
    //   },
    // },
    // {
    //   adImg: asideTwo,
    //   adText: {
    //     title: "Just In Time",
    //     country: "Casablanca, Morocco",
    //     street: "9, Jakeson street",
    //     subTitle: "Book A reservation :",
    //     contact: "0909090909090, tasteofheaven@gmail.com",
    //   },
    // },
  ];

  const switchVisible = () => {
    setVisible(() => !visible);
  };

  return (
    <AppLayout  className={""}>
      <div className={`relative flex flex-col ${visible ? "mb-32" : "mb-5"} justify-center items-align w-full`}>
        {blogContent.map((blogObj, index) => (
          <div
            className={`border ${
              index === blogContent.length - 1
                ? "border-none"
                : "border-b-slate-200"
            }`}
          >
            <div
              className="md:flex bg-white p-8 md:p-0 md:mx-10"
              key={blogObj.id}
            >
              <Image
                className="w-full h-28 md:hidden"
                src={blogObj.blogPicture}
                alt=""
                width="384"
                height="512"
              />
              <Image
                className="w-24 h-24 rounded-full m-4 hidden md:block"
                src={blogObj.authorImage}
                alt=""
                width="384"
                height="512"
              />
              <div className="pt-6 p-2 md:p-8 md:pb-0 md:text-left space-y-4 border border-slate-300 md:border-none rounded-b-lg">
                <div className="flex items-center justify-left">
                  <Image
                    className="w-12 h-12 md:hidden md:h-auto rounded-full mr-4"
                    src={blogObj.authorImage}
                    alt=""
                  />
                  <div className="font-medium text-left md:grid md:grid-cols-3 ">
                    <div className="text-black font-medium md:col-span-2">
                      {blogObj.authorName}
                    </div>
                    <div className="text-slate-500">{blogObj.publishDate}</div>
                  </div>
                </div>

                <h1 className="font-bold text-lg">{blogObj.blogTitle}</h1>
                <p className="text-lg font-medium">{blogObj.writeUp}</p>
                <div className="flex items-center justify-between p-2 md:py-2 md:px-0">
                  {imgObj.map(({ image, altText }, index) => (
                    <Image
                      src={image}
                      alt={altText}
                      className=" w-5 h-5 cursor-pointer"
                      key={altText + index}
                    />
                  ))}
                </div>
              </div>
              <Image
                className="w-24 h-24 hidden md:block md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src={blogObj.blogPicture}
                alt=""
                width="384"
                height="512"
              />
            </div>
          </div>
        ))}

        {/* <Slider {...sliderSettings} className="z-50"> */}
        {visible && (
          <div className="fixed bottom-0 right-0 left-0">
            <div className="text-right" onClick={switchVisible}>
              <button className="rounded-xl h-5 w-5 hover:bg-black hover:text-white flex items-center justify-center  border ">
                &times;
              </button>
            </div>
            {ads?.map(({ adImg, adText }, index) => (
              <div className=" w-full bg-white  flex justify-between py-4 px-2 md:p-4 ad-shadow">
                <div className=" h-20 text-xs overflow-auto">
                  <h3 className="font-bold">{adText.title}</h3>
                  <p>{adText.country}</p>
                  <p>{adText.street}</p>
                  <p>{adText.subTitle}</p>
                  <p>{adText.contact}</p>
                </div>

                <div className="flex items-center">
                  <div key={index}>
                    <Image
                      src={adImg}
                      alt={`slide-${index}`}
                      className="w-72 md:w-80 h-20"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* </Slider> */}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default explore;
