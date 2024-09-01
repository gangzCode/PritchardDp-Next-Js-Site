"use client"

import React, { useEffect, useRef, useState } from 'react'
import { ProductCard } from './ProductCard'
import { Playfair_Display } from "next/font/google";
import { MdFilterList } from "react-icons/md";
import { Slider } from 'antd';
import { Checkbox, Divider } from 'antd';
import { MdOutlineInventory2 } from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";
import { RxWidth } from "react-icons/rx";

const playfair = Playfair_Display({ subsets: ['latin'] })



export const ProductsListWithFilter = ({productKey, dataProp}) => {
    
    const filter = useRef({
        min:19,
        max:140,
        manufacturers:{sappi:true,coldenhove:true,ahlstrom:true},
        endUse:"all products",
        prodType:"all products",
        sort:"alphabetical",
        availability:"all"
    })

    const inInventory = [
        "jet_protect_tissue",
        "transjet_boost",
        "jetcol_htr3500",
        "jet_x",
        "jetcol_xtreme_sports",
        "jetcol_xtreme_dry",
        "jet_pro_one"   
    ]

    const canRequest = [
        "transjet_eco",
        "transjet_industrial",
        "jetcol_extreme"
    ]

    const prodsWithImageContain = [
        "transjet_boost",
        "transjet_drive",
        "transjet_eco",
        "transjet_industrial",
        "transjet_sportsline",
        "transjet_sportsline_ht"
    ]

    // const [data, setData] = useState(dataProp)

    const [productList, setProductList] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const [viewFilter, setViewFilter] = useState(false)

    // const [minGsm, setMinGsm] = useState(45)
    // const [maxGsm, setMaxGsm] = useState(140)
    


    const onFilterChange = () => {
        console.log('filter changed');

        var filteredResult = productList.filter((product) =>{
            // var product = element
    
            var productGSM = product.gsm
            var minGsm = filter.current.min
            var maxGsm = filter.current.max
            for (let index = 0; index < productGSM.length; index++) {
                const gsm = productGSM[index];
                
                if(gsm >= minGsm && gsm <= maxGsm) return true
                else continue
            }
            
            return false

        })
        
        console.log(filteredResult)

        filteredResult = filteredResult.filter((product) => {
            // console.log(product)
            // console.log(filter.current.manufacturers[product.manufacturer])
            return filter.current.manufacturers[product.manufacturer]
        })



        filteredResult = filteredResult.filter((product) => {
            console.log(product);
            
            if("all products" ===  filter.current.endUse) return true
            
            var endUses = product.endUse
            // console.log(endUses);


            for (let index = 0; index < endUses.length; index++) {
                const endUse = endUses[index];
                
                console.log(endUse);
                if(endUse ===  filter.current.endUse) {
                    console.log("Matches");
                    return true
                }
                else continue
            }

            // return false

        })


        filteredResult = filteredResult.filter((product) => {
            // console.log(product);

            if("all products" ===  filter.current.prodType) return true

            var prodTypes = product.prodType
            // if(prodTypes == undefined) return false
            // console.log(endUses);

            for (let index = 0; index < prodTypes.length; index++) {
                const prodType = prodTypes[index];
                
                if(prodType ===  filter.current.prodType) return true
                else continue
            }

            // return false

        })

        filteredResult = filteredResult.filter((product) => {
            if(filter.current.availability === "all") return true
            else {
                if(inInventory.includes(product.itemKey) || canRequest.includes(product.itemKey)) return true
                else return false
            }
        })

        if(filter.current.sort === "alphabetical"){
            filteredResult.sort((a,b) => {
                // console.log(a);
                // console.log(b);
                if(a.title.trim().toUpperCase() < b.title.trim().toUpperCase()) return -1
                if(a.title.trim().toUpperCase() > b.title.trim().toUpperCase()) return 1
                return 0
            })
        }
        else if (filter.current.sort === "popularity"){
            filteredResult.sort((a,b) => {
                return a.pop - b.pop;
            })
        }

        console.log(filteredResult)

        setFilteredProducts(filteredResult)

    }

    const onGSMFilterChange = (value) => {
        filter.current.min = value[0]
        filter.current.max = value[1]
        onFilterChange()
    }

    const onCheckboxClick = (e, manufacturer) => {
        filter.current.manufacturers[manufacturer] = e.target.checked
        // console.log(filter.current.manufacturers)
        onFilterChange()
    }

    const onEndUseChange = (val) => {
        filter.current.endUse = val
        // console.log(val);
        onFilterChange()
    }

    const onProdTypeChange = (val) => {
        filter.current.prodType = val
        // console.log(val);
        onFilterChange()

    }

    const onSortChange = (val)=> {
        filter.current.sort = val
        onFilterChange();
    }
    
    const onAvailabiltyChange = (val)=> {
        filter.current.availability = val
        onFilterChange();
    }

    useEffect(() => {
        const sortedProducts = Object.keys(dataProp.products).map((itemKey) => {return {...dataProp.products[itemKey], itemKey: itemKey}})
        // const sortedProducts = 

        sortedProducts.sort((a,b) => {
            // console.log(a);
            // console.log(b);
            if(a.title.trim().toUpperCase() < b.title.trim().toUpperCase()) return -1
            if(a.title.trim().toUpperCase() > b.title.trim().toUpperCase()) return 1
            return 0
        })

        setProductList(sortedProducts)
    },[dataProp])

    useEffect(() => {
        setFilteredProducts(productList)
    }, [productList]);

    // useEffect(() => {
    //     console.log(filteredProducts)
    // },[filteredProducts])

    // const CheckboxGroup = Checkbox.Group;


    return (
        <div className='relative'>
            <div className='flex flex-row justify-between items-center mt-10 mb-4 '>
                <h1 className={"text-4xl mx-4 " + playfair.className}>{dataProp != null && dataProp.title}</h1>
                <div className='flex flex-row items-center'>
                    <div className='hidden lg:flex flex-row mr-8 items-center'>
                        <MdOutlineInventory2 className='text-[#575aa7]'/><RxWidth className='text-[#575aa7]'/> - 126&quot; In Inventory 
                        <BsClipboardCheck className='text-[#575aa7] ml-4'/><RxWidth className='text-[#575aa7]'/> - 126&quot; Available upon request
                    </div>
                    {productKey === 'dye_sublimation' && filteredProducts.length > 0 && <button onClick={() => {setViewFilter(!viewFilter)}} className='text-[#575aa7] mr-10 flex-row flex items-center text-xl gap-2'>Filter <MdFilterList className='w-10 h-10  text-[#575aa7]'/></button>}
                </div>
            </div>
            <div className='flex lg:hidden flex-col md:flex-row items-center w-full justify-end mb-4 pr-10'>
                <div className='flex flex-row items-center'><MdOutlineInventory2 className='text-[#575aa7]'/><RxWidth className='text-[#575aa7]'/> - 126&quot; In Inventory </div>
                <div className='flex flex-row items-center'><BsClipboardCheck className='text-[#575aa7] ml-4'/><RxWidth className='text-[#575aa7]'/> - 126&quot; Available upon request</div>
            </div>
            {
                viewFilter && 
                <div className='bg-[#575aa7] md:absolute md:top-22 md:right-10 flex flex-col gap-4 text-[#fafafa] p-8 rounded-3xl z-10 w-full md:w-96 mb-6'>
                    <h1 className='font-bold'>Filters</h1>
                    <div>
                        <h1 className='font-bold'>Grammage</h1>
                        <Slider
                            range
                            min={19}
                            max={140}
                            defaultValue={[19, 140]}
                            autoAdjustOverflow
                            onChangeComplete={onGSMFilterChange}
                        />
                    </div>
                    <div>
                        <h1 className='font-bold'>Manufacturers</h1>
                        {/* <CheckboxGroup options={["Sappi","Coldenhove","Texcol","Ahlstrom"]} defaultValue={["Sappi","Coldenhove","Texcol","Ahlstrom"]} style={{color:"#fafafa"}} className='flex flex-col'/> */}
                        <div className='flex flex-col'>
                            <div><input className='accent-[#575aa7] mr-2' type='checkbox' onChange={e => onCheckboxClick(e,"sappi")} name="sappi" id='sappi' defaultChecked={filter.current.manufacturers["sappi"]}/> <label for="sappi">Sappi</label></div>
                            <div><input className='accent-[#575aa7] mr-2' type='checkbox' onChange={e => onCheckboxClick(e,"coldenhove")} name="coldenhove" id='coldenhove' defaultChecked={filter.current.manufacturers["coldenhove"]}/> <label for="coldenhove">Coldenhove</label></div>
                            {/* <div><input className='accent-[#575aa7] mr-2' type='checkbox' onChange={e => onCheckboxClick(e,"texcol")} name="texcol" id='texcol' defaultChecked={filter.current.manufacturers["texcol"]}/> <label for="texcol">Texcol</label></div> */}
                            <div><input className='accent-[#575aa7] mr-2' type='checkbox' onChange={e => onCheckboxClick(e,"ahlstrom")} name="ahlstrom" id='ahlstrom' defaultChecked={filter.current.manufacturers["ahlstrom"]}/> <label for="ahlstrom">Ahlstrom</label></div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold'>End usage</h1>
                        <select className='text-[#000000]' onChange={e => onEndUseChange(e.target.value.trim().toLowerCase())}>
                            <option>All Products</option>
                            <option>Fashion</option>
                            <option>Home Furnishing</option>
                            <option>Sportswear</option>
                            <option>Signage</option>
                            <option>Hard Substrates</option>
                        </select>
                    </div>
                    <div>
                        <h1 className='font-bold'>Product type</h1>
                        <select className='text-[#000000]' onChange={e => onProdTypeChange(e.target.value.trim().toLowerCase())}>
                            <option>All Products</option>
                            <option>Uncalendered</option>
                            <option>Coated</option>
                        </select>
                    </div>
                    <div>
                        <h1 className='font-bold'>Sort By</h1>
                        <div className='flex flex-row'>
                            <button onClick={()=> onSortChange('alphabetical')} className={`p-2 rounded-l-lg border-l-2 border-t-2 border-b-2 border-[#fafafa] ${filter.current.sort === "alphabetical" ? "bg-[#575aa7] text-[#fafafa]" : "bg-[#fafafa] text-[#575aa7]"}`}>Alphabetical</button>
                            <button onClick={()=> onSortChange('popularity')} className={`p-2 rounded-r-lg border-r-2 border-t-2 border-b-2 border-[#fafafa] ${filter.current.sort === "popularity" ? "bg-[#575aa7] text-[#fafafa]" : "bg-[#fafafa] text-[#575aa7]"}`}>Popularity</button>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold'>Availability</h1>
                        <div className='flex flex-row'>
                            <button onClick={()=> onAvailabiltyChange('all')} className={`p-2 rounded-l-lg border-l-2 border-t-2 border-b-2 px-9 border-[#fafafa] ${filter.current.availability === "all" ? "bg-[#575aa7] text-[#fafafa]" : "bg-[#fafafa] text-[#575aa7]"}`}>All</button>
                            <button onClick={()=> onAvailabiltyChange('126')} className={`p-2 rounded-r-lg border-r-2 border-t-2 border-b-2 border-[#fafafa] ${filter.current.availability === "126" ? "bg-[#575aa7] text-[#fafafa]" : "bg-[#fafafa] text-[#575aa7]"}`}>126&quot; width</button>
                        </div>
                    </div>

                </div>
            }
            <div className={`flex flex-col md:flex-row mx-auto md:mx-4 md:flex-wrap justify-center w-fit gap-7 gap-y-12 z-0`}>
                {
                    // data != null &&
                    filteredProducts.length > 0 &&
                    // filteredProducts.map((element, key) => {
                    //     // console.log(element)

                    //     return <ProductCard
                    //         key={key} 
                    //         className={`md:shrink-0 max-w-[450px] mx-4 md:mx-0` }
                    //         imgSrc={`/products/${element}.png`}
                    //         fallbackSrc={"https://placehold.co/450x320/png"}
                    //         title={element.title} 
                    //         body={element.card_desc} 
                    //         path={element.path}/>
                    //     })
                    filteredProducts.map((element, key) => {
                        return <ProductCard
                            key={element.itemKey} 
                            className={`md:shrink-0 max-w-[450px] mx-4 md:mx-0` }
                            imgSrc={`/products/${element.itemKey}.png`}
                            fallbackSrc={"https://placehold.co/450x320/png"}
                            title={element.title} 
                            body={element.card_desc} 
                            path={element.path}
                            gsm={element.gsm}
                            inInventory={inInventory.includes(element.itemKey)}
                            canRequest={canRequest.includes(element.itemKey)}
                            imageContain={prodsWithImageContain.includes(element.itemKey)}
                            />
                            
                            
                    })
                    // Object.keys(data[productKey].products).map((element, key) => {
                    //     return <ProductCard
                    //         key={key} 
                    //         className={`md:shrink-0 max-w-[450px] mx-4 md:mx-0` }
                    //         imgSrc={`/products/${element}.png`}
                    //         fallbackSrc={"https://placehold.co/450x320/png"}
                    //         title={data[productKey].products[element].title} 
                    //         body={data[productKey].products[element].card_desc} 
                    //         path={data[productKey].products[element].path}/>
                    // })
                }
            </div>
        </div>
    )
}
