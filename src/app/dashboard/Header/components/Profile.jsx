import React from 'react'
import image from "../../../assets/angela.png"
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md";


const Profile = () => {
  return (
    <div className='flex items-center space-x-4 px-5 border-l-2 border-[#C2C2C2]'>
        <div>
            <Image src={image} alt='angela'/>
        </div>
        <div>
            <h2 className='text-color3 text-[20px] font-bold'>Angela L.</h2>
            <p className='text-[#64748B] text-[16px] font-font2'>Admin Lvl 3</p>
        </div>
        <div>
            <MdKeyboardArrowDown className='text-color4 text-[20px]' />

        </div>
    </div>
  )
}

export default Profile