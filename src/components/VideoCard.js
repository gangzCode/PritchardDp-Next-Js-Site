import React from 'react'
// import Image from 'next/image'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ['latin'] })

export const VideoCard = (
  {
    videoURL="https://www.youtube-nocookie.com/embed/a3ICNMQW7Ok?si=tNGTOgSGyNHBGAcu&amp;controls=0",
    heading="Sample heading", 
    className = ""
  }) => {
  return (
    <div className={className}>
        <iframe width="100%" src={videoURL} className='aspect-video' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <Image src={"https://placehold.co/600x400/png"} width={600} height={400} className='mb-8'/> */}
        {/* src="https://www.youtube-nocookie.com/embed/a3ICNMQW7Ok?si=tNGTOgSGyNHBGAcu&amp;controls=0" */}
        <p className={'text-xl mt-6 ' + playfair.className}>{heading}</p>
    </div>
  )
}
