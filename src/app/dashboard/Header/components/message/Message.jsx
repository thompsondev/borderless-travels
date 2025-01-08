import React from 'react'
import image1 from "../../../../assets/jarret.png"
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";


const Messages = () => {
  return (
    <div>
                    <div className='flex items-center justify-between gap-x-4 hover:bg-[#EFEFEF] px-3 py-2 rounded-lg mb-2'>
                        <div className='bg-[#B5E4CA] rounded-full flex items-center justify-center overflow-hidden'>
                            <Image src={image1} alt='jarret' width={56} height={56} objectFit='cover'/>
                        </div>
                        <div className=' w-full'>
                            <div className='flex items-center justify-between pb-2'>
                                <p className='font-bold font-font2 text-[15px] text-black'>Jarret Waelchi</p>
                                <div className='flex items-center space-x-3'>
                                    <p className='font-font2 text-[13px] text-color4 flex gap-x-5'>03:30PM 
                                        <span>
                                            <GoDotFill  className='text-color2' size={20}/>
                                         </span>
                                    </p>
                                </div>
                            </div>
                            <p className='font-font2 text-[14px] text-color4'>When do you release the coded...</p>
                        </div>
                    </div>
    </div>
  )
}

export default Messages