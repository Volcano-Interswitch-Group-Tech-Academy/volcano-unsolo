import AppLayout from "@/components/common/layout/AppLayout";
import Adverts from "@/components/modules/explore/Adverts";
import Blogs from "@/components/modules/explore/Blogs";
import React, { useState } from "react";
import Slider from "react-slick";

const explore = () => {
  const [showAdvert, setShowAdvert] = useState(true);

  const blogContent = [
    {
      id: 1,
      authorImage: "/unnamed.jpg",
      blogPicture: "/aside-img-one.png ",
      authorName: "Adeola",
      publishDate: "March 7th 2023",
      blogTitle: "Solo Travel vs. Group Adventures: Finding Your Perfect Match",
      writeUp:
        "Are you torn between solo exploration and group escapades? In this blog, we'll help you navigate the pros and cons of each travel style, empowering you to choose the perfect adventure that suits your wanderlust.",
    },
    {
      id: 2,
      authorImage: "/woman.jpg",
      blogPicture: "/seven.jpg",
      authorName: "Tolani",
      publishDate: "May 21st 2023",
      blogTitle:
        "Hidden Gems: Off-the-Beaten-Path Destinations You Must Discover.",
      writeUp:
        "Get ready to uncover the world's best-kept secrets! We'll guide you through enchanting destinations that often go unnoticed by mainstream travelers, offering unique experiences and unforgettable memories.",
    },
    {
      id: 3,
      authorImage: "/woman.jpg",
      blogPicture: "/seven.jpg",
      authorName: "Jordan",
      publishDate: "July 9th 2023",
      blogTitle: "Traveling Sustainably: How to Explore the World Responsibly.",
      writeUp:
        "Sustainable travel is more than a trend; it's a responsibility. Join us as we explore eco-friendly practices, ethical tourism, and the positive impact you can make on the environment and local communities during your journeys.",
    },
    {
      id: 4,
      authorImage: "/unnamed.jpg",
      blogPicture: "/aside-img-one.png ",
      authorName: "Faith",
      publishDate: "August 18th 2023",
      blogTitle:
        "Foodie Adventures: Exploring Culinary Delights Around the Globe.",
      writeUp:
        "Embark on a mouthwatering journey around the world! From street food stalls in Bangkok to Michelin-starred restaurants in Paris, we'll tantalize your taste buds and inspire your culinary wanderlust.",
    },
    {
      id: 5,
      authorImage: "/woman.jpg",
      blogPicture: "/seven.jpg",
      authorName: "Indica",
      publishDate: "September 30th 2023",
      blogTitle:
        "Traveling with a Purpose: Volunteering Abroad and Making a Difference.",
      writeUp:
        "Traveling isn't just about sightseeing; it's also an opportunity to give back. Discover the world of volunteer travel, where you can immerse yourself in local cultures while contributing to meaningful causes.",
    },
    {
      id: 6,
      authorImage: "/woman.jpg",
      blogPicture: "/seven.jpg",
      authorName: "Kelly",
      publishDate: "August 10th 2023",
      blogTitle: "Solo Female Travel: Empowering Adventures and Safety Tips.",
      writeUp:
        "Ladies, this one's for you! Join us as we celebrate the empowering experiences of solo female travel. We'll share inspiring stories and essential safety tips to help you embark on fearless adventures.",
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const adverts = [
    {
      name: "Taste of Heaven Dinning",
      country: "Nigeria",
      city: "Lagos",
      address: "17B Ikeja Streets",
      image: "/restaurant.png",
      info: "we make the best Meals",
    },
    {
      name: "Taste of Heaven Dinning",
      country: "Nigeria",
      city: "Lagos",
      address: "17B Ikeja Streets",
      image: "/restaurant.png",
      info: "we make the best Meals",
    },
    {
      name: "Taste of Heaven Dinning",
      country: "Nigeria",
      city: "Lagos",
      address: "17B Ikeja Streets",
      image: "/restaurant.png",
      info: "we make the best Meals",
    },
    {
      name: "Taste of Heaven Dinning",
      country: "Nigeria",
      city: "Lagos",
      address: "17B Ikeja Streets",
      image: "/restaurant.png",
      info: "we make the best Meals",
    },
  ];
  return (
    <AppLayout className="bg-white">
      <div
        className={`relative flex flex-col justify-center items-center w-full`}
      >
        <div className="w-full mb-8">
          {blogContent.map((blogObj, index) => (
            <Blogs
              key={blogObj.id}
              user={blogObj.authorImage}
              userNmae={blogObj.authorName}
              blogDate={blogObj.publishDate}
              blogTitle={blogObj.blogTitle}
              blogPost={blogObj.writeUp}
              blogImage={blogObj.blogPicture}
            />
          ))}
        </div>
        {showAdvert && (
          <div className="fixed bottom-12 left-0 w-full">
            <Slider {...sliderSettings}>
              {adverts.map((ad, index) => (
                <Adverts
                  businessName={ad.name}
                  businessCountry={ad.country}
                  businessCity={ad.city}
                  businessInfo={ad.info}
                  businessImage={ad.image}
                  businessAddress={ad.address}
                />
              ))}
            </Slider>
          </div>
        )}

        {/* Toggle Advert Visibility Button */}
        <button
          onClick={() => setShowAdvert(!showAdvert)}
          className="fixed bottom-4 right-4 p-2 button_bg text-white rounded"
        >
          {showAdvert ? "Close Adverts" : "Show Adverts"}
        </button>
      </div>
    </AppLayout>
  );
};

export default explore;
