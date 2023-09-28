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
      authorName: "Adeola Anuoluwapo",
      publishDate: "March 7th 2023",
      blogTitle: "10 things to never forget to take on a trip.",
      writeUp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a temporibus nobis fugiat necessitatibus aliquid explicabo consectetur. Libero facere vel nihil iusto magnam optio dolor dignissimos? Quod est qui delectus?",
    },
    {
      id: 2,
      authorImage: author2,
      blogPicture: asideTwo,
      authorName: "Adeola Anuoluwapo",
      publishDate: "March 7th 2023",
      blogTitle: "10 things to never forget to take on a trip.",
      writeUp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      authorImage: deola,
      blogPicture: asideOne,
      authorName: "Adeola Anuoluwapo",
      publishDate: "March 7th 2023",
      blogTitle: "10 things to never forget to take on a trip.",
      writeUp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a temporibus nobis fugiat necessitatibus aliquid explicabo consectetur. Libero facere vel nihil iusto magnam optio dolor dignissimos? Quod est qui delectus?",
    },
    {
      id: 4,
      authorImage: deola,
      blogPicture: asideOne,
      authorName: "Adeola Anuoluwapo",
      publishDate: "March 7th 2023",
      blogTitle:
        "3 Must visit plasces in casablanca and a food you should never try",
      writeUp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a temporibus nobis fugiat necessitatibus aliquid explicabo consectetur. Libero facere vel nihil iusto magnam optio dolor dignissimos? Quod est qui delectus?",
    },
    {
      id: 5,
      authorImage: deola,
      blogPicture: asideOne,
      authorName: "Adeola Anuoluwapo",
      publishDate: "March 7th 2023",
      blogTitle: "10 things to never forget to take on a trip.",
      writeUp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a temporibus nobis fugiat necessitatibus aliquid explicabo consectetur. Libero facere vel nihil iusto magnam optio dolor dignissimos? Quod est qui delectus?",
    },
    {
      id: 6,
      authorImage: author2,
      blogPicture: asideTwo,
      authorName: "Adeola Anuoluwapo",
      publishDate: "March 7th 2023",
      blogTitle: "10 things to never forget to take on a trip.",
      writeUp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    <div className={` appLayout`}>
      {isDesktop ? <Navbar /> : <MobileNav />}
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
    </div>
  );
};

export default explore;
