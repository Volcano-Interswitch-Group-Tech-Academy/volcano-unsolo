import Container from '@/components/common/layout/Container'
import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";


const Card = () => {
  const router = useRouter();

  const cardDetails = [
    {
      image: "/pool.svg",
      title: "Pools",
      color: "bg-white",
      url: "/",
      number: "You have 3 pending trips "
    },

    {
      image: "/history.svg",
      title: "Trip History",
      color: "bg-white",
      url: "/",
      number: "You have gone on 11 trips "

    },

    {
      image: "/wallet.svg",
      title: "Wallet",
      color: "bg-white",
      url: "/",
      number: "You have ₦3,000,000 in your wallet "

    },
  ]
  return (
    <>
        <div className=" flex flex-row gap-4 my-4 ">
        {cardDetails.map((details, index) => (
        <Link href={`${router.pathname}${details.url}`} className="w-full md:w-1/3" passHref>
          <div
            className={`flex items-center justify-center gap-5 p-2 ${details.color} w-full h-[150px] cursor-pointer shadow-lg`}
            key={index + details.title.split(" ")[0]}
          >
            <div className="">
              <div className="">
                <Image width={50} height={50} src={details.image} alt={details.image} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col justify-center h-2/3 w-full gap-2 text-black">
                <h1 className="font-bold">{details.title}</h1>
                <p className='light-black-font'>{details.number}</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Card