
import { Playfair_Display } from "next/font/google";
import Link from 'next/link'
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { VideoCard } from "@/components/VideoCard";

const playfair = Playfair_Display({ subsets: ['latin'] })


export default function About() {
    return (
      <main className="flex flex-col mt-32 mb-8">
        <header className="py-3 pl-7 w-full bg-[#575aa7]">
          <p className="text-xs text-[#fafafa]"><Link href="/">Home</Link> / <strong>About</strong></p>
        </header>
        <h1 className={"text-4xl mt-10 mb-6 mx-4 justify-left " + playfair.className}>About Pritchard Paper</h1>
        <section>
          <p className='mx-4 text-xl mb-8'>Pritchard Paper Products was founded in 1970 in Toronto-Ontario-Canada. It has been an independent family business for almost fifty years and we are very proud of that. It enabled us to grow into what we are today: a state-of-the-art, fully automated paper converter that is known for its innovative products. Pritchard Paper also referred to as PPP serves customers all over the world. Our product portfolio ranges from traditional paper grades of high quality & innovative performance products for the sewn products industry to patented high-tech digital sublimation transfer paper & protection tissue. With a clear focus on specific markets PPP remains a leading converter in the paper industry.</p>
          <div className='w-full h-[390px] mb-10 relative 2xl:mx-0'>
            <ImageWithFallback
              fill 
              objectFit='cover'
              alt=""
              src={`/about_2.png`}
              fallbackSrc="https://placehold.co/1440x380/png"
            />
          </div>
        </section>
        <section className="flex flex-col mx-4 md:flex-row">
          <div className="basis-1/2 pr-4">
           <div className=' mb-4'>
              <h1 className={'text-2xl mb-4 text-[#575aa7] ' + playfair.className}>History</h1>
              <p className='text-xl'>Pritchard Paper Products (PPP) is a diverse company. A lot has changed since 1970 when founder Michael Pritchard (AKA Micky) borrowed a bundle of corrugated cartons from his boss & lent them to a friend who urgently needed to get the Friday deliveries out. That bundle of cartons was instrumental to Micky, triggering the opening of Pritchard Paper Products when the owner of his friends business tipped him a few bucks for the favour. Those few bucks were the beginning of what proved to be a viable corrugated carton business. Within months, Mickey scrapped, borrowed and pulled together enough money to purchase a few thousand cartons and first month’s rent in the heart of Toronto’s garment district.What started as a distribution business for the sewn products industry in Toronto Canada turned into a fully automated paper converting company who&apos;s products now reach the shores of Colombia & Australia.</p>
            </div>
            <div className=' mb-4'>
              <h1 className={'text-2xl mb-4 text-[#575aa7] ' + playfair.className}>Our Growth</h1>
              <p className='text-xl'>After the purchase of our first paper rewinder, PPP quickly gained strength & moved into different markets. Inevitably, our suppliers became our customers & new opportunities quickly emerged. Today, PPP converts paper for more markets than we could have ever imagined while supplies & revenues extend around the world in almost every time zone. With recent investment into newer more automated equipment, PPP is capable of converting hundreds of millions of square feet of paper per month.</p>
            </div>
            <div className=' mb-4'>
              <h1 className={'text-2xl mb-4 text-[#575aa7] ' + playfair.className}>Fifty Years Later</h1>
              <p className='text-xl'>PPP converts goods with eight paper rewinders & three perforators, distributing these goods from warehouses in many countries. PPP has evolved into a major supplier of thousands of different sku’s for markets including sewn products, dye sublimation, industrial, manufacturing, converting, warehousing, distribution and retail.</p>
            </div>
          </div>
          <div className="md:basis-1/2 relative h-[420px] md:h-auto">
            <ImageWithFallback
                fill 
                objectFit='cover'
                alt=""
                src={`/about_1.png`}
                className="h-[420px] md:h-auto"
                fallbackSrc="https://placehold.co/685x980/png"
              />
          </div>
        </section>
        <section className="mx-4">
          <h1 className={"text-4xl mt-10 mb-6 justify-left " + playfair.className}>Our Equipment</h1>
          <div className="flex flex-col md:flex-row justify-around items-center md:items-stretch gap-10">
            <VideoCard className="w-full md:w-1/2 shrink" videoURL="https://www.youtube.com/embed/kS3UHK4Xhlw?si=Lb8W60EwLiZLQ2kg" heading="JLS 73"/>
            <VideoCard className="w-full md:w-1/2 shrink" videoURL="https://www.youtube.com/embed/ohWl7zaucis?si=B9NqR4gn57AQYeSY" heading="JLS 135"/>
          </div>
        </section>
      </main>
    )
  }