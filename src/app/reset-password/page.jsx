"use client"

import Image from 'next/image'
import React, { useState, useEffect} from 'react'
import logo1 from "../assets/Boarderless logo.png"
import logo2 from "../assets/Borderless logo B with background.png"
import background1 from "../assets/background-1.png"
import background2 from "../assets/background.png"
import TextSlider from '../Login/components/TextSlider'

const ResetPassword = () => {

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
                        <h2 className='text-color2 text-[30px] font-[700]'>Reset Password</h2>
                        <p className='text-[#667085] font-font3 pt-2 text-[14px]'>Create your new password</p>
                    </div>
                    <form action="">
                        <div>
                            <label htmlFor="email" className='text-[#919499] text-[14px] font-medium font-font3'>Email</label><br/>
                            <input type="text" placeholder='Email'  className='p-3 border-2 w-full rounded-[14px] my-4'/>
                        </div>
                        <div>
                            <label htmlFor="email" className='text-[#919499] text-[14px] font-medium font-font3'>New Password</label><br/>
                            <input type="text" placeholder='New Password'  className='p-3 border-2 w-full rounded-[14px] my-4'/>
                        </div>
                        <div>
                            <label htmlFor="email" className='text-[#919499] text-[14px] font-medium font-font3'>Comfirm Password</label><br/>
                            <input type="text" placeholder='Comfirm Password'  className='p-3 border-2 w-full rounded-[14px] my-4'/>
                        </div>
                        
                        <button type='submit' className=' mt-4 w-full  p-4 bg-[#660476] text-white rounded-xl text-[20px] font-bold'>Reset Password</button>

                    </form>

                </div>

            </div>
        </div>
    </div>
  )
}

export default ResetPassword