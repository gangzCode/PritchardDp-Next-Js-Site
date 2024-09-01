'use client'
import Swal from 'sweetalert2'
import React, { useState } from 'react'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ['latin'] })
export const ContactForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [inquiry, setInquiry] = useState("")
    // const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e) => { 
        e.preventDefault()

        // if(submitted) return
        
        if(firstName === "") return
        if(email === "") return
        if(country === "") return

        // console.log('Sending')
        let data = {
            firstName,
            lastName,
            company,
            email,
            country,
            inquiry
        }
        await fetch('/api/sendEmail/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            // console.log('Response received')
            if (res.status === 200) {
                Swal.fire({
                    title: 'Success',
                    text: 'Message has been submitted',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
                setFirstName("")
                setLastName("")
                setCompany("")
                setEmail("")
                setCountry("")
                setInquiry("")
                // console.log('Response succeeded!')
                // if(!submitted) setSubmitted(true)
            } else {
                Swal.fire({
                    title: 'Failed',
                    text: 'Could not submit your message',
                    icon: 'error',
                    confirmButtonText: 'Done',
                    confirmButtonColor: '#575aa7',
                  })
                // console.log('Response failed!')
            }
        })
    }

    const trimInput = (val) => {
        // console.log(val)
        return val.trim()
    }


    return (
        <>
            <div className='flex-1 mt-4 px-8'>
                <h1 className={'text-4xl mb-4 ' + playfair.className}>We&apos;re here for you.</h1>
                <p className='text-xl mb-4 '>Let us know how we can help you with your business needs.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.099406056353!2d-79.5335378234627!3d43.81229744212582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f11fd700729%3A0x243ab6c484fd72d7!2sPritchard%20Paper%20Products!5e0!3m2!1sen!2slk!4v1706103098327!5m2!1sen!2slk" 
                    className="border-0 w-full h-[400px] md:h-[680px] mb-10 mr-10 " allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex-1 mt-4 px-8'>
                <form className=''>
                <div className='flex flex-row mb-6 justify-between'>
                    <div className='flex flex-col flex-1  md:w-auto'>
                    <label className='mb-3 font-light mr-auto w-11/12'>First name<span className='text-red-500'>*</span></label>
                    <input className='h-[39px] text-black mr-auto w-11/12' type="text" value={firstName} onChange={(val) => {setFirstName(trimInput(val.target.value))}}/>
                    </div>
                    <div className='flex flex-col flex-1  md:w-auto'>
                    <label className='mb-3 font-light ml-auto w-11/12'>Last name</label>
                    <input className='h-[39px] text-black ml-auto w-11/12' type="text" value={lastName} onChange={(val) => {setLastName(trimInput(val.target.value))}}/>
                    </div>
                </div>
                <div className='flex flex-col mb-6'>
                    <label className='mb-3 font-light'>Company</label>
                    <input className='h-[39px] text-black' type="text" value={company} onChange={(val) => {setCompany(trimInput(val.target.value))}}/>
                </div>
                <div className='flex flex-col mb-6'>
                    <label className='mb-3 font-light'>Email<span className='text-red-500'>*</span></label>
                    <input className='h-[39px] text-black' type="text" value={email} onChange={(val) => {setEmail(trimInput(val.target.value))}}/>
                </div>
                <div className='flex flex-col mb-6'>
                    <label className='mb-3 font-light'>Country<span className='text-red-500'>*</span></label>
                    <input className='h-[39px] text-black' type="text" value={country} onChange={(val) => {setCountry(trimInput(val.target.value))}}/>
                </div>
                <div className='flex flex-col mb-12'>
                    <label className='mb-3 font-light'>What are you inquiring about?</label>
                    <textarea className='h-[140px] text-black' type="text" value={inquiry} onChange={(val) => {setInquiry(trimInput(val.target.value))}}/>
                </div>
                <button className="w-fit ml-auto mr-8 py-3 px-7 bg-[#fafafa] text-[#575aa7] font-bold rounded-full" type="submit" onClick={(e) => {handleSubmit(e)}}>Submit</button>
                </form>
            </div>
        </>
    )
}
