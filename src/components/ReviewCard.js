import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";




export const ReviewCard = ({clientName, content, className}) => {
  return (
    <div className={className + " flex flex-col justify-between"}>
        <RiDoubleQuotesL className='size-20 mb-8 text-[#a8aad0]'/>
        <div className='md:mx-7'>
          <p className='md:mx-auto mb-5 text-xl'>{content}</p>
          <h2 className='md:mx-auto text-xl'>{clientName}</h2>
        </div>
        <RiDoubleQuotesR className='size-20 ml-auto mt-8 text-[#a8aad0]'/>
    </div>
  )
}
