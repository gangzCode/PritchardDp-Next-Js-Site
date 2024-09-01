"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { SlArrowLeft, SlArrowRight  } from "react-icons/sl";

export const Carousel = ({className}) => {
  const [index, setIndex] = useState(0)


  const images = [
    <Image src={"/banner_0.jpg"} fill objectFit='cover'  key={0}/>,
    <Image src={"/banner_1.jpg"} fill objectFit='cover'  key={1} />,
    <Image src={"/banner_2.jpg"} fill objectFit='cover'  key={2} />
  ]

  const texts = [
    "Master Converter & Distributor for Neenah Coldenhove Digital Printing Papers in Canada",
    "The Largest Purchaser & Converter of Protection Tissue in the World",
    "State of the Art Converters of Dye Sublimation Papers & Protection Tissue"
  ]

  const onNavButtonClick = (value) => {
    // console.log(value)
    setIndex(value)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % 3);
    }, 4000);

    //Clearing the interval
    return () => clearInterval(interval);
}, [index]);

  return (
    <div className={className}>
      <div className='flex flex-row h-2 w-full justify-between'>
        <button className={`flex-1 mr-1 ${index == 0 ? "bg-[#575aa7]" : "bg-[#e0e0e0]"}`} onClick={() => onNavButtonClick(0)}></button>
        <button className={`flex-1 mr-1 ${index == 1 ? "bg-[#575aa7]" : "bg-[#e0e0e0]"}`} onClick={() => onNavButtonClick(1)}></button>
        <button className={`flex-1 ${index == 2 ? "bg-[#575aa7]" : "bg-[#e0e0e0]"}`} onClick={() => onNavButtonClick(2)}></button>
      </div>
      <div className='w-full h-full absolute'>
        {images[index]}
      </div>  
      <div className='absolute w-full h-full'>
        <div className='flex flex-row w-full justify-between mt-5'>
          <button className='size-10 ml-4' onClick={() => {onNavButtonClick((index - 1 + 3) % 3)} }>
            <SlArrowLeft className='text-white size-5 m-auto' />
          </button>
          <button className='size-10 mr-4' onClick={() => {onNavButtonClick((index + 1) % 3)}}>
            <SlArrowRight className='text-white size-5 m-auto' />
          </button>
        </div>
        {/* <h1 className='bottom-20 mx-6 text-4xl md:text-5xl lg:w-[40%] font-semibold text-[#000] leading-tight absolute text-left'>
          {texts[index]}
        </h1> */}
      </div>
    </div>
  )
}

