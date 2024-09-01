import { Carousel } from "@/components/Carousel";
import { ReviewCard } from "@/components/ReviewCard";
import { PiHoodieLight } from "react-icons/pi";
import { LuSofa } from "react-icons/lu";
import { BsHSquare } from "react-icons/bs";
import { RiFirstAidKitLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
import { TbParachute, TbSailboat } from "react-icons/tb";
import Image from "next/image";
import { ProductSummary } from "@/components/ProductSummary";
import Link from "next/link";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="mt-32">
        <Carousel className="w-full h-[600px] md:h-[730px] absolute left-0" />
      </section>

      <section className="mx-4 md:mx-9 shadow-[0_0_20px_2px_#00000021] bg-[#fafafa]  px-12 pb-14 mb-32 mt-[570px] md:mt-[700px] rounded-xl relative z-10 overflow-clip">
        <div className=" lg:w-7/12 relative z-10">
          <h1
            className={"pt-16 pb-12 text-4xl font-bold " + playfair.className}
          >
            Roll with us
          </h1>
          <p className="text-xl">
            At Pritchard Paper Products we convert all of our own papers
            allowing you direct access to the most competitive pricing
            available. With eight paper rewinding machines, many of them state
            of the art high-speed pieces of equipment we are capable of
            converting tens of millions of lineal feet per month. Specializing
            in sewn products we convert many grades of plotter papers,
            separating tissues, perforated krafts, underlay papers, pattern
            papers, marking papers & poly overlays for manufacturers in the
            apparel, furniture, and automotive upholstery industries, as well as
            uniforms & military. Roll with us, you’ll be happy you did.
          </p>
          <br />
          <p className="text-xl pb-12">
            The variety of applications our technology can deliver is only
            limited by the creativity of the user. With the ability to print on
            hard or soft surfaces, our digital sublimation transfer printing
            services provides vivid, eye-catching results in every finished
            product. Pritchard Paper additionally converts a full line of dye
            sublimation protection tissues that are used for the blanket
            protection of rotary heat presses. Our tissues are capable of
            withstanding heavy ink applications, and are ideal in the
            safeguarding against ghosting.
          </p>
          <div className="flex flex-col md:flex-row w-full gap-6">
            <Link
              className="text-xl font-semibold text-center px-8 py-3 bg-[#575aa7] text-white rounded-full w-full md:w-fit"
              href={"/products/dye_sublimation"}
            >
              Dye Sublimation
            </Link>
            <Link
              className="text-xl font-semibold text-center px-8 py-3 bg-[#575aa7] text-white rounded-full w-full md:w-fit"
              href={"/products/sewn_products"}
            >
              Sewn Products
            </Link>
          </div>
        </div>
        <div className="absolute w-full h-full z-0 hidden lg:block right-0 left-0 top-0 bottom-0">
          <Image
            src={"/bg_1.png"}
            fill
            className="object-cover rounded-xl left-auto -right-20"
          />
        </div>
      </section>

      <section className="mx-4 md:mx-9 mb-20">
        <h1 className={"text-4xl mb-5 " + playfair.className}>
          Products that suit your need.
        </h1>
        <h2 className="my-5 text-xl">
          We stand behind our products and offer a quality guarantee across our
          entire line of Paper Conversion Products.
        </h2>
        <ProductSummary />
      </section>

      <section className="w-full bg-[#575aa7] mb-20 overflow-clip ">
        <div className="absolute left-0 w-full">
          <div className="my-80 mx-9 md:w-1/2 relative z-10">
            <h1
              className={"text-[#fafafa] text-4xl mb-5 " + playfair.className}
            >
              Experience. Service. Quality.
            </h1>
            <p className="text-[#fafafa] text-xl mb-5">
              Our commitment to quality is backed by an extensive history and
              knowledge of the Paper Conversion Industry, ensuring reliable
              customer service, quick turnaround, and a steadfast quality
              guarantee across our entire product line.
            </p>
            <Link
              className="mx-0 w-full md:w-fit ml-auto py-3 px-7 bg-[#fafafa] text-[#575aa7] font-bold rounded-full"
              href={"/products"}
            >
              Learn more
            </Link>
          </div>
          <Image
            src={"/bg_2.jpg"}
            fill
            objectFit="cover"
            className="z-0 left-18 w-full"
          />
        </div>
      </section>

      {/* <section className="mx-4 md:mx-9 mb-28 mt-[850px]">
        <h1 className={"text-4xl mb-20 " + playfair.className}>Hear what our customer have to say.</h1>
        <div className="flex flex-col lg:flex-row md:mx-9 h-fit lg:h-[390px]">
          <ReviewCard className="flex-1 md:mx-4 h-full" content="We have been working with Pritchard Paper for over 25 Years. The best in the business." clientName="Sample client 1"/>
          <ReviewCard className="flex-1 md:mx-4 h-full" content="Service and high quality paper products. We continue to work with the team at Pritchard Paper Product" clientName="Sample client 2"/>
          <ReviewCard className="flex-1 md:mx-4 h-full" content="They shipped right to our door here in Central America" clientName="Sample client 3"/>
        </div>
      </section> */}

      <section className="mx-4 md:mx-9 mb-32 hidden lg:block mt-[850px]">
        <h1 className={"text-4xl mb-20 " + playfair.className}>
          Our products are everywhere.
        </h1>
        <div className="flex flex-row mx-10 justify-between">
          <div>
            <PiHoodieLight className="h-20 w-full md:" />
            <p className="w-full text-center font-bold text-sm">Apparel</p>
          </div>
          <div>
            <LuSofa className="h-20 w-full" />
            <p className="w-full text-center font-bold text-sm">Furniture</p>
          </div>
          <div>
            <BsHSquare className="h-20 w-full" />
            <p className="w-full text-center font-bold text-sm">
              Hard Substrates
            </p>
          </div>
          <div>
            <RiFirstAidKitLine className="h-20 w-full" />
            <p className="w-full text-center font-bold text-sm">Healthcare</p>
          </div>
          <div>
            <IoBedOutline className="h-20 w-full" />
            <p className="w-full text-center font-bold text-sm">
              Home Furnishings
            </p>
          </div>
          <div>
            <TbParachute className="h-20 w-full" />
            <p className="w-full text-center font-bold text-sm">Military</p>
          </div>
          <div>
            <TbSailboat className="h-20 w-full" />
            <p className="w-full text-center font-bold text-sm">Recreational</p>
          </div>
        </div>
      </section>

      <section className="mx-4 md:mx-9 mb-32 mt-[950px] lg:mt-0">
        <h1 className={"text-4xl mb-16 " + playfair.className}>
          Associations.
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <Image
            src="/association_1.jpg"
            width={300}
            height={109}
            alt="association 1"
          />
          <Image
            src="/association_2.jpg"
            width={300}
            height={109}
            alt="association 2"
          />
          <Image
            src="/association_3.png"
            width={300}
            height={109}
            alt="association 3"
          />
        </div>
      </section>

      {/* <section className="mx-4 md:mx-9 mb-16">
        <h1 className={"text-4xl mb-6 " + playfair.className}>Things we&apos;ve been up to.</h1>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch">
          <NewsCard heading={"This is the place holder text for the new article heading."} date={"Friday, November 10, 2023"} className="md:w-[440px] mr-0 md:mr-4 mb-4 md:mb-0"/>
          <NewsCard heading={"This is the place holder text for the new article heading."} date={"Wednesday, November 8, 2023"} className="md:w-[440px] mr-0 md:mr-4 mb-4 md:mb-0"/>
          <NewsCard heading={"This is the place holder text for the new article heading."} date={"Monday, November 6, 2023"} className="md:w-[440px]"/>
        </div>
      </section> */}
    </main>
  );
}
