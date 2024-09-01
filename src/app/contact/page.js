import { Playfair_Display } from "next/font/google";
import Link from 'next/link'

import { PiMapPinLight } from "react-icons/pi";
import { FiSmartphone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function Contact() {
    return (
      <main className="flex flex-col mt-32 mb-8">
        <header className="py-3 pl-7 w-full bg-[#575aa7]">
          <p className="text-xs text-[#fafafa]"><Link href="/">Home</Link> / <strong>Contact</strong></p>
        </header>
        <h1 className={"text-4xl mt-10 mb-10 mx-4 " + playfair.className}>Contact Us</h1>
        

        <div className="flex flex-col md:flex-row w-full justify-around">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <PiMapPinLight className="text-[#575AA7] w-32 h-32 mb-4" />
            <p>1-77 Courtland Ave.</p>
            <p>Concord, Ontario</p>
            <p>Canada L4K 3S9</p>
          </div>
          <div className="flex flex-col items-center  mb-6 md:mb-0">
            <FiSmartphone className="text-[#575AA7] w-32 h-32 mb-4"/>
            <p>Phone : 905-660-8883</p>
            <p>Fax : 905-660-4449</p>
          </div>
          <div className="flex flex-col items-center  mb-6 md:mb-0">
            <CiMail className="text-[#575AA7] w-32 h-32 mb-4"/>
            <p>info@pritchardpaper.com</p>
          </div>
        </div>
      </main>
    )
  }