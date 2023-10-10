import Container from "@/components/common/layout/Container";
import { ExploreProps } from "@/helpers/types/modules/explore";
import React, { useState } from "react";
import Image from "next/image";

const Blogs = ({
  user,
  userNmae,
  blogDate,
  blogTitle,
  blogPost,
  blogImage,
}: ExploreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Container>
      <div className="p-5  ">
        <div className="flex flex-row gap-6 p-3 border border-b-gray-300">
          <Image
            src={user}
            width={70}
            height={100}
            alt="userImage"
            className="w-20 h-20  rounded-full"
          />
          <div>
            <div className="flex flex-row gap-7 mb-2">
              <div className="font-bold">{userNmae}</div>
              <div className = "post-light-black-font">{blogDate}</div>
            </div>
            <div className = "font-bold text-2xl mb-2" >{blogTitle}</div>
            <div className="mb-1">
              {!isExpanded && (
                <div className="post-light-black-font ">
                  {blogPost.substring(0, 200)}...
                  <button
                    onClick={toggleDescription}
                    className=" primary_text_color"
                  >
                    See More
                  </button>
                </div>
              )}

              {isExpanded && (
                <div className="post-light-black-font">
                  {blogPost}.
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
          </div>
          <Image src={blogImage} width={180} height={180} alt="userImage" />
        </div>
        <div className="flex flex-row justify-center items-center mt-7">
          <Image src="/svgs/love.svg" width={20} height={20} alt="like" className = "mx-2" />
          <Image src="/svgs/upload.svg" width={20} height={20} alt="update" className = "mx-2"  />
          <Image src="/svgs/delete.svg" width={20} height={20} alt="delet" className = "mx-2"  />
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
