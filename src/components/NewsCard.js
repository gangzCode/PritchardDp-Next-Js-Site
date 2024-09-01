import React from 'react'
import Image from 'next/image'


export const NewsCard = ({heading, date, className}) => {
  return (
    <div className={className}>
        <Image src={"https://placehold.co/600x400/png"} width={600} height={400} className='mb-8'/>
        <p className='text-xl md:mx-4 mb-4 md:mb-16'>{heading}</p>
        <p className='md:mx-5'>{date}</p>
    </div>
  )
}
