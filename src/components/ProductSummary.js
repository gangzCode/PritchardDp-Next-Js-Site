"use client"
// import data from "/data.json"
import Link from 'next/link'

import React, { useEffect, useState } from 'react'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ['latin'] })

export const  ProductSummary = () => {
    const [currentProduct, setCurrentProduct] = useState("dye_sublimation")
    const [currentSubproduct, setCurrentSubproduct] = useState(0)
    const [showAccordianCard, setShowAccordianCard] = useState(false)

    const [data,setData] = useState({})
    const [dataReceived, setDataReceived] = useState(false)
    
    useEffect(() => {
        const  fetchData = async () => {
            await fetch('/api/getData')
                .then((res) => {
                return res.json();
                })
                .then((data) => {
                // console.log(data.message[currentProduct].products)
                setData(data.message);
                setDataReceived(true)
                });
        }

        fetchData()
    }, []);
    

    
    

    const onProductButtonClicked = (productKey) => {
        setCurrentSubproduct(0)
        setShowAccordianCard(false)
        setCurrentProduct(productKey)
    }

    const onSubproductButtonClicked = (index) =>{
        setCurrentSubproduct(index)
        setShowAccordianCard(true)
    }

    return (
        dataReceived ? <>
            {/* <div>{JSON.stringify(data[currentProduct])}</div> */}
            <div className="flex flex-row my-6 w-full md:w-auto">
                <button className={`rounded-l-xl border border-[#575aa7] py-2 px-3 w-1/2 md:w-auto ${currentProduct === "dye_sublimation" ? "bg-[#575aa7] text-[#fafafa]" : "bg-[#fafafa] text-[#575aa7]"} `} 
                    onClick={() => {onProductButtonClicked("dye_sublimation")}}>Dye Sublimation</button>
                <button className={`rounded-r-xl border border-[#575aa7] py-2 px-3 w-1/2 md:w-auto ${currentProduct === "sewn_products" ? "bg-[#575aa7] text-[#fafafa]" : "bg-[#fafafa] text-[#575aa7]"} `} 
                    onClick={() => {onProductButtonClicked("sewn_products")}}>Sewn Products</button>
            </div>
            <div className="my-4 flex flex-row shadow-[0_0_20px_2px_#00000021] rounded-xl">
                <div className="basis-full md:basis-5/12 lg:basis-4/12 pt-20 pb-14 mt-2 flex flex-col items-center">
                    <Link className="text-[#949494] mb-3 font-light" href={`/products/${currentProduct}`}>{currentProduct === "dye_sublimation" ? "Dye Sublimation" : "Sewn Products"}</Link>
                    <ul className="flex flex-col items-center w-full">
                        {Object.values(data[currentProduct].products).map((element, index) => {
                            return <li className="border-t-2 w-full items-center flex flex-col" key={index}>
                                <button className={`w-full py-3 font-bold ${currentSubproduct === index ? "bg-[#575aa7] text-[#fafafa] " : "bg-[#fafafa] text-[#575aa7]"}`}
                                    onClick={() => {onSubproductButtonClicked(index)}}>{element.title}</button>
                                <div className={`${showAccordianCard && currentSubproduct === index? "block md:hidden": "hidden"} bg-[#575aa7] text-[#fafafa] border-t border-[#fafafa] p-4 pb-8`}>
                                    <p className='text-xl font-normal pb-8'>
                                        {Object.values(data[currentProduct].products)[currentSubproduct].profile.main_desc[0]}
                                    </p>
                                    <Link href={element.path} className="w-full  py-3 px-7 bg-[#fafafa] text-[#575aa7] font-bold rounded-full">Learn More</Link>    
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="basis-7/12 lg:basis-9/12 pt-20 pb-14 px-6 bg-[#575aa7] text-white rounded-r-xl hidden md:flex justify-between flex-col ">
                    <div className="w-auto">
                        <h1 className={"text-4xl pb-6 mb-4 border-b border-[#fafafa] " + playfair.className}>{Object.values(data[currentProduct].products)[currentSubproduct].title}</h1>
                        <p className="text-xl font-light mb-8">
                            {Object.values(data[currentProduct].products)[currentSubproduct].profile.main_desc[0]}
                        </p>
                        <div className='ml-auto w-fit'><Link href={Object.values(data[currentProduct].products)[currentSubproduct].path} className="w-fit py-3 px-7 bg-[#fafafa] text-[#575aa7] font-bold rounded-full">Learn More</Link></div>
                        
                    </div>
                </div>
            </div>
        </>
        :
        <div>Loading...</div>
    )
}
