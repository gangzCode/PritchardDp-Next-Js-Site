'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


export const Navbar = () => {
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false)
  const [viewSearch,setViewSearch] = useState(false)
  
  const [data,setData] = useState([])
  const [dataReceived, setDataReceived] = useState(false)
  
  const [searchTerm,setSearchTerm] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [showSearchResult, setShowSearchResult] = useState(false)

  useEffect(() => {
    const  fetchData = async () => {
      await fetch('/api/getData')
        .then((res) => {
        return res.json();
        })
        .then((data) => {
          let data_copy = data.message
          let product_list = []

          // console.log("data" + data_copy)
          let sewn_products = data_copy.sewn_products.products
          let dye_sublimation_products = data_copy.dye_sublimation.products

          // console.log("sewn_products" + Object.values(sewn_products))
          // console.log("dye_sub" + Object.values(dye_sublimation_products))

          Object.values(sewn_products).forEach((obj) => {
            product_list.push({title: obj.title, path: obj.path})
          })

          Object.values(dye_sublimation_products).forEach((obj) => {
            product_list.push({title: obj.title, path: obj.path})
          })

          setData(product_list)
          // console.log("products"+ product_list[0].path)
          // setData(data.message); 
          setDataReceived(true)
        });
    }

      fetchData()
  }, []);

  const onSearchToggleClick = (val) => {
    clearSearch()
    setViewSearch(val)
  }

  const clearSearch = () => {
    setSearchResult([])
    setSearchTerm("")
    setShowSearchResult(false) 
  }

  const onSearchTermChange = (val) => {
    setSearchTerm(val)
  }

  const onSearchClick = () =>{
    if(searchTerm === "") return
    const result = data.filter((product) => product.title.toLowerCase().trim().includes(searchTerm.trim().toLowerCase()))
    setSearchResult(result)
    setShowSearchResult(true)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearchClick()
    }
  }

  // useEffect(() => {
  //   console.log(searchResult);
  // }, [searchResult]);

  return (
    <div className=' w-full  h-32 left-0  border-neutral-200 fixed z-20 bg-[#fafafa] '>
      <div className='px-8 w-full 2xl:w-[1440px] mx-auto h-full flex flex-row justify-between items-center z-40 border-b-2 relative mb-4'>
        <Link href="/" className='text-[#575aa7]'>PRITCHARD PAPER<br/> PRODUCTS CO. LTD  </Link>
          {/* <h1></h1> ADD FONT */}
        <div className='hidden md:flex gap-x-12 lg:gap-x-24 '>
            <Link href="/" >Home</Link>
            <Link href="/products" >Products</Link>
            <Link href="/about" >About</Link>
            <Link href="/contact" >Contact</Link>
            
            <button onClick={() => {onSearchToggleClick(!viewSearch)}}>
                <FaSearch />
            </button>
            
        </div>
        <button className='block md:hidden w-8 h-8' onClick={() =>{ 
          setPhoneMenuOpen(!phoneMenuOpen)
          
          }}>
          {
            phoneMenuOpen 
            ? <IoMdClose className='text-[#575aa7] w-full h-full'/>
            :<GiHamburgerMenu className='text-[#575aa7] w-full h-full' /> 
          }
        </button>
      </div>

      {dataReceived && viewSearch &&
      <div className='w-screen h-screen absolute top-0 z-40' onClick={() => {onSearchToggleClick(false)}}>
        <div className='p-6 bg-[#575aa7] flex flex-row items-center mt-32' onClick={(e) => {e.stopPropagation()}}>
          <div className='flex flex-row border-b border-[#ffffff80] w-full'>
            <input type='text' className='bg-[#575aa7] placeholder:italic placeholder:text-[#ffffff80] placeholder:text-4xl placeholder:font-light text-4xl text-[#ffffff] focus:outline-none active:outline-none w-full mt-auto' 
              placeholder='Search' onChange={(e) => onSearchTermChange(e.target.value)} value={searchTerm} onKeyDown={handleKeyDown}/>
            <button onClick={() => {onSearchClick()}} className='size-6 m-4'>
                <FaSearch className='text-[#ffffff80] w-full h-full' />
            </button>
          </div>
          <button onClick={() => {clearSearch()}} className='size-8 ml-8'>
            <IoMdClose className='text-[#ffffff80] w-full h-full'/>
          </button>
        </div>
        {
          viewSearch && showSearchResult && 
          <div className='flex flex-col p-8 bg-[#575aa7] mt-2 max-h-96 overflow-y-scroll'>
            {
              searchResult.length === 0 ?
              <div className='mx-auto text-[#ffffff80] text-2xl'>No items available under given name</div>
              :
              searchResult.map((element,key)=>{
                return <Link key={key} href={element.path} onClick={()=>onSearchToggleClick(false)} 
                  className='text-[#ffffff] text-2xl w-full pt-4 border-b border-[#ffffff80] mb-4'>
                  {element.title}
                </Link>
              })
            }
          </div>
        }
      </div>
        
      }
      
      <div className={`w-screen h-screen absolute bg-[#fafafa] top-0 left-0 z-0 pt-32 flex flex-col ${phoneMenuOpen ? "block md:hidden" : "hidden" }`}>
        <Link href="/products" className='py-4 border-b text-4xl text-center text-[#575aa7]' onClick={() => setPhoneMenuOpen(false)}>Products</Link>
        <Link href="/news" className='py-4 border-b text-4xl text-center text-[#575aa7]' onClick={() => setPhoneMenuOpen(false)}>News</Link>
        <Link href="/about" className='py-4 border-b text-4xl text-center text-[#575aa7]' onClick={() => setPhoneMenuOpen(false)}>About</Link>
        <Link href="/contact" className='py-4 border-b text-4xl text-center text-[#575aa7]' onClick={() => setPhoneMenuOpen(false)}>Contact</Link>
        <input type='text' className='py-4 border-b text-4xl text-center placeholder:text-[#575aa7] text-[#575aa7]' value={searchTerm} onChange={(e) => onSearchTermChange(e.target.value.trim().toLowerCase())} onKeyDown={handleKeyDown} placeholder='Search'/>
        {
        showSearchResult && 
        <div className='flex flex-col p-8 bg-[#575aa7] mt-2 max-h-96 overflow-y-scroll'>
          {
            searchResult.length === 0 ?
            <div className='mx-auto text-[#ffffff80] text-2xl'>No items available under given name</div>
            :
            searchResult.map((element,key)=>{
              return <Link key={key} href={element.path} onClick={()=>{
                onSearchToggleClick(false)
                setPhoneMenuOpen(false)
              }} 
                className='text-[#ffffff] text-2xl w-full pt-4 border-b border-[#ffffff80] mb-4'>
                {element.title}
              </Link>
            })
          }
        </div>
      }
      </div>
    </div>
  )
}
