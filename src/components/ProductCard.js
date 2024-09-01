import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Playfair_Display } from "next/font/google";
import { ImageWithFallback } from './ImageWithFallback';
import { SpecIcon } from './SpecIcon';
import { MdOutlineInventory2 } from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";
import { RxWidth } from "react-icons/rx";


const playfair = Playfair_Display({ subsets: ['latin'] })

export const ProductCard = ({imgSrc, fallbackSrc, title, body, path, gsm = null, className, inInventory = false, canRequest = false, imageContain = false }) => {
  return (
    <Link href={path} className={className + " rounded-2xl shadow-[0_0_20px_2px_#00000021] bg-[#fafafa] flex flex-col"}>
      <div className='relative h-[300px] w-full shrink-0 flex items-center'>
       {/* <Image src={imgSrc} fill objectFit='cover' className='rounded-t-2xl'/> */}
       <ImageWithFallback
            fill 
            alt=""
            className={`rounded-t-2xl  ${imageContain ? "object-contain": "object-cover"}`}
            src={imgSrc}
            fallbackSrc={fallbackSrc}
          />

      </div>
      <div className='flex flex-col justify-between'>
        <div className=''>
          <div className={'w-full text-2xl flex flex-row justify-between p-7 items-center ' + playfair.className}>
            <h1 className=''>{title}</h1>
            <div className=' text-[#575aa7] flex flex-row gap-x-2'>
              {inInventory && <MdOutlineInventory2 />}
              {canRequest && <BsClipboardCheck />}
              {(inInventory || canRequest) && <RxWidth />}</div>
            
          </div>
          <p className='mx-7 mb-4 line-clamp-3'>{body}</p>
          {gsm != null && <div className='flex flex-row mx-5 items-center mb-4'><SpecIcon iconKey={"grammage"} className="w-8 h-full"/><p className='ml-6'><span className='font-bold'>GSM : </span>{gsm.join(', ')}</p></div>}
        </div>
        <div className='m-7 mb-8 mt-auto'>
            <p className='text-[#575aa7] font-bold'>Learn more</p>
          </div>
      </div>
      
      
    </Link>
  )
}
