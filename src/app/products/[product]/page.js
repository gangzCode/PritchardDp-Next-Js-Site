import { ProductCard } from "@/components/ProductCard";
import { promises as fs } from 'fs';
import { Playfair_Display } from "next/font/google";
import data from '../../../../public/data.json'
import Link from 'next/link'
import { ProductsListWithFilter } from "@/components/ProductsListWithFilter";

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function Page({ params }) {
  // console.log(process.cwd())
  // const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  // const data = JSON.parse(file);
  
  // console.log("asdasd",data[params.product])

  return (
    <div>
      <main className="flex flex-col mt-32 mb-12">
        <header className="py-3 pl-7 w-full bg-[#575aa7]">
          <p className="text-xs text-[#fafafa]"><Link href="/">Home</Link> / <Link href="/products">Products</Link> / <strong>{data[params.product] != null && data[params.product].title}</strong></p>
        </header>
        {<ProductsListWithFilter productKey={params.product} dataProp={data[params.product]}/>}
      </main>
    </div>
  
  )
}