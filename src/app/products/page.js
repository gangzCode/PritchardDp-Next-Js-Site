import { ProductCard } from "@/components/ProductCard";
import { Playfair_Display } from "next/font/google";
import Link from 'next/link'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function Products() {
    return (
      <main className="flex flex-col mt-32">
        <header className="py-3 pl-7 w-full bg-[#575aa7]">
          <p className="text-xs text-[#fafafa]"><Link href="/">Home</Link> / <strong>Products</strong></p>
        </header>
        <h1 className={"text-4xl mt-10 mb-4 mx-4 " + playfair.className}>Products</h1>
        <div className="flex flex-col xl:flex-row mx-4 xl:mx-4 xl:flex-wrap justify-around items-center">
          <ProductCard className="xl:shrink-0 w-full md:w-[600px] mb-10 xl:mx-0 xl:mr-5" imgSrc={"/products/dye_sublimation.png"} fallbackSrc={"https://placehold.co/800x300/png"} title={"Dye Sublimation"} body={"The variety of applications our technology can deliver is only limited by the creativity of the user."} path={"/products/dye_sublimation"}/>
          <ProductCard className="xl:shrink-0 w-full md:w-[600px] mb-10 xl:mx-0" imgSrc={"/products/superwhite_plotter_paper.png"} fallbackSrc={"https://placehold.co/800x300/png"} title={"Sewn Products"} body={"At Pritchard Paper Products we convert all of our papers allowing you direct access to the most competitive pricing available."} path={"/products/sewn_products"}/>
        </div>
      </main>
    )
  }