"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import logo1 from "../assets/Boarderless logo.png"
import logo2 from "../assets/Borderless logo B with background.png"
import background1 from "../assets/background-1.png"
import background2 from "../assets/background.png"
import TextSlider from '../Login/components/TextSlider'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";




const ForgetPassword = () => {

    const [showEmailField, setShowEmailField] = useState(false);
  const [showPhoneField, setShowPhoneField] = useState(false);

  const handleEmailClick = () => {
    setShowEmailField(true);
    setShowPhoneField(false);
  };

  const handlePhoneClick = () => {
    setShowPhoneField(true);
    setShowEmailField(false);
  };

  return (
    <div>
        <div className='flex '>
            <div className='hidden lg:block bg-[#040876] w-full h-[100vh] p-5'>
                <Image src={logo1} alt='logo'/>
                <div className='flex flex-col items-center justify-center pt-20 relative'>
                    <div className='flex flex-col items-center space-y-4'>
                        <Image src={background2} alt='background2' className='relative' />
                        <Image src={background1} alt='background1' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                        
                    </div>
                    
                    <div className='absolute top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <Image src={logo2} alt='logo' />
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-[24px] font-bold text-white font-font1'>Admin Dashboard</h3>
                        </div>
                        <TextSlider/>

                    </div> 
                    
               
                </div>
            </div>
            <div className='bg-white w-full h-[100vh] lg:p-20 p-4 flex flex-col items-center justify-center '>
                <div className=' w-full h-auto shadow-md rounded-lg lg:px-20 px-4 py-8'>
                    <div className='text-center mb-5'>
                        <h2 className='text-color3 text-[30px] font-[700]'>Forgot Password</h2>
                        <p className='text-[#667085] font-font3 pt-2 text-[14px]'>Please select option to send link reset password</p>
                    </div>
                    <form action="">
                        <div 
                            className={`border-2 p-7 rounded-xl ${showEmailField ? 'border-color2' : 'border-[#C4C4C480]'}`} 
                            onClick={handleEmailClick}
                        >                            
                        <div className='flex items-center space-x-4'>
                        <div className={`w-12 h-12 ${showEmailField ? 'bg-color2' : 'bg-[#98A0B233]' }  rounded-full flex justify-center items-center`}>
                            <MdEmail className={`${showEmailField ? 'text-white' : 'text-black'} text-white`}/>
                            </div>
                                <div>
                                    <p className={`font-font3 text-[18px] font-bold ${showEmailField ? 'text-color3' : 'text-[#98A0B2]' }  `}>Reset via Email</p>
                                    <p className='text-color4 text-[14px] font-medium'>We will send a link to reset your password</p>
                                </div>
                            </div>
                            {showEmailField && (
                                <input type="text" placeholder='Email' className='p-3 border-2 w-full rounded-[14px] mt-5 bg-[#F5F7FB] border-[#C4C4C480]' />
                            )}
                        </div>
                        <div 
                             className={`border-2 p-7 rounded-xl ${showPhoneField ? 'border-color2' : 'border-[#C4C4C480]'} mt-7`} 
                             onClick={handlePhoneClick}
                        >
                            <div className='flex items-center space-x-4'>
                            <div className={`w-12 h-12 ${showPhoneField ? 'bg-color2' : 'bg-[#98A0B233]' }  rounded-full flex justify-center items-center`}>
                                 <FaPhoneAlt className={`${showPhoneField ? 'text-white' : 'text-black'} text-white`}/>
                            </div>
                                <div>
                                    <p className={`font-font3 text-[18px] font-bold ${showPhoneField ? 'text-color3' : 'text-[#98A0B2]' }  `}>Reset via SMS</p>
                                    <p className='text-color4 text-[14px] font-medium'>We will send a link to reset your phone</p>
                                </div>
                            </div>
                            {showPhoneField && (
                                <input type="text" placeholder='Phone Number' className='p-3 border-2 w-full rounded-[14px] mt-5 bg-[#F5F7FB] border-[#C4C4C480]' />
                            )}      
                        </div>
                    
                        <button type='submit' className=' mt-7 w-full  p-4 bg-[#660476] text-white rounded-xl text-[20px] font-bold'>Send Link to Reset Password</button>
                    </form>
                    <Link href="/">
                        <div className='flex items-center gap-x-2'>
                            <TiArrowBack className='mt-3' />
                            <p className='text-color4 font-font3 text-[14px] pt-4'>Back to sign in</p>
                        </div>
                    </Link>

                </div>

            </div>
        </div>
    </div>
  )
}

export default ForgetPassword