"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import logo1 from "../assets/Boarderless logo.png"
import logo2 from "../assets/Borderless logo B with background.png"
import background1 from "../assets/background-1.png"
import background2 from "../assets/background.png"
import TextSlider from './components/TextSlider'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons


const Login = () => {

    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the visibility state
  };

  return (
    <div>
        <div className='flex '>
            <div className='hidden lg:block bg-[#040876] w-full h-[100vh] p-5'>
                <Image src={logo1} alt='logo' loading='lazy'/>
                <div className='flex flex-col items-center justify-center pt-20 relative'>
                    <div className='flex flex-col items-center space-y-4'>
                        <Image src={background2} alt='background2' loading='lazy' className='relative' />
                        <Image src={background1} alt='background1' loading='lazy' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                        
                    </div>
                    
                    <div className='absolute top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'> {/* Centered overlay */}
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
                    <h2 className='text-[#660476] text-[24px] lg:text-[32px] font-[700]'>Login as <span className='text-[#040876]'>Administrator</span></h2>
                    <p className='text-[#667085] font-font3'>Welcome back! Please enter your details.</p>
                    </div>
                    <form action="">
                        <div>
                            <label htmlFor="email" className='text-[#919499] text-[14px] font-medium font-font3'>Email/Username/Phone</label><br/>
                            <input type="text" placeholder='Email'  className='p-3 border-2 w-full rounded-[14px] my-4'/>
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className='text-[#919499] text-[14px] font-medium font-font3'>Password</label><br/>
                            <input 
                                type={showPassword ? "text" : "password"} // Toggle input type
                                placeholder='New Password'  
                                className='p-3 border-2 w-full rounded-[14px] my-4'
                            />  
                            <span 
                                className='absolute right-4 top-[60%] transform -translate-y-1/2 cursor-pointer'
                                onClick={togglePasswordVisibility} // Toggle visibility on click
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle eye icon */}
                            </span>                      
                        </div>
                        <div className='flex lg:justify-betweeen justify-between items-center my-4'>
                            <div className='flex items-center space-x-2'>
                                <input type="checkbox" id="remember" name="remember" value="remember-me"/>
                                <p className='lg:text-[20px] sm:text-[12px] font-medium text-[#48505E] font-font3'>Remember for 30 days</p>
                            </div>
                            <div>
                                <Link href="/reset-password">
                                    <p className='lg:text-[20px] sm:text-[12px] text-[#ED6300] font-medium font-font3'>Forgot password</p>
                                </Link>
                            </div>
                        </div>
                        <Link href="/dashboard">
                            <button type='submit' className=' mt-4 w-full  p-4 bg-color1 text-white rounded-xl text-[20px] font-bold'>Sign in</button>
                        </Link>

                    </form>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Login