// import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";
import { promises as fs } from "fs";
import { Playfair_Display } from "next/font/google";
import data from "../../../../../public/data.json";
import Link from "next/link";
import { SpecIcon } from "@/components/SpecIcon";
import { ImageWithFallback } from "@/components/ImageWithFallback";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Page({ params }) {
  // const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  // const data = JSON.parse(file);
  const subproduct = data[params.product].products[params.subproduct];

  const data_test = {
    superwhite_plotter_paper: {
      title: "Super White Plotter Paper",
      parent_product: "Sewn Products",
    },
  };

  return (
    <div>
      <main className="flex flex-col mt-32">
        <header className="py-3 pl-7 w-full bg-[#575aa7]">
          <p className="text-xs text-[#fafafa]">
            <Link href="/">Home</Link> / <Link href="/products">Products</Link>{" "}
            /{" "}
            <Link href={`/products/${params.product}`}>
              {data[params.product].title}
            </Link>{" "}
            / <strong>{subproduct.title}</strong>
          </p>
        </header>
        <h1 className={"text-4xl mt-10 mb-10 mx-4 " + playfair.className}>
          {subproduct.title}
        </h1>
        {subproduct.profile.main_desc.map((element, key) => {
          return (
            <p className="mx-4  text-xl mb-10" key={key}>
              {element}
            </p>
          );
        })}

        <div className="w-full h-[180px] sm:h-[210px] md:h-[390px] lg:h-[440px] mb-10 relative 2xl:mx-0">
          {/* <Image src={"https://placehold.co/1440x380/png"} fill objectFit='cover'/> */}
          <ImageWithFallback
            fill
            className="object-cover"
            alt=""
            src={`/products/${params.subproduct}.png`}
            fallbackSrc="https://placehold.co/1440x380/png"
          />
        </div>

        <div>
          {"sub_texts" in subproduct.profile &&
            subproduct.profile.sub_texts.map((element, key) => {
              return key % 2 === 0 ? (
                <div className="flex flex-col lg:flex-row mb-10 mx-4" key={key}>
                  <div className="lg:mr-4 mb-10 lg:mb-0">
                    <h1
                      className={
                        "text-2xl mb-3 text-[#575aa7] " + playfair.className
                      }
                    >
                      {element.title}
                    </h1>
                    <p className="text-xl">{element.content}</p>
                  </div>
                  <div className="w-full sm:w-[585px] h-[275px] relative mx-auto sm:shrink-0">
                    <Image
                      src={"https://placehold.co/585x275/png"}
                      fill
                      objectFit="cover"
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="flex flex-col-reverse lg:flex-row mb-10 mx-4"
                  key={key}
                >
                  <div className="w-full sm:w-[585px] h-[275px] relative mx-auto sm:shrink-0">
                    <Image
                      src={"https://placehold.co/585x275/png"}
                      fill
                      objectFit="cover"
                    />
                  </div>
                  <div className="lg:ml-4 mb-10 lg:mb-0 lg:w-7/12">
                    <h1
                      className={
                        "text-2xl mb-3 text-[#575aa7] " + playfair.className
                      }
                    >
                      {element.title}
                    </h1>
                    <p className="text-xl">{element.content}</p>
                  </div>
                </div>
              );
            })}

          {"features" in subproduct.profile && (
            <div className="mb-10 mx-4 ">
              <h1
                className={"text-2xl mb-3 text-[#575aa7] " + playfair.className}
              >
                Specifications
              </h1>
              <div className="text-lg ml-4">
                {subproduct.profile.features.map((element, key) => {
                  // console.log(Array.isArray(element.content))

                  return (
                    <div className=" mb-4 flex flex-row" key={key}>
                      <SpecIcon
                        iconKey={element.icon_key}
                        className={"mr-10 w-10 h-full"}
                      />
                      <div className="flex flex-col">
                        <p className="w-full mb-1 font-bold">
                          {element.title} :
                        </p>
                        {Array.isArray(element.content) ? (
                          <ul className="pl-6 list-disc list-inside">
                            {element.content.map((item, key) => {
                              return (
                                <li
                                  key={key}
                                  className="w-full block text-base"
                                >
                                  - {item}
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <p className="w-full mb-1 pl-6 text-base">
                            {element.content}
                          </p>
                        )}
                        {"sub_content" in element && (
                          <p className="text-base pl-10 text-[#757575]">
                            * {element.sub_content}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
