import React from 'react'
import logo from '../../assets/Boarderless logo.png'
import Image from 'next/image'
import { IoMdSettings } from "react-icons/io";
import Language from './components/Language';
import Message from './components/message/Page';
import Notifications from './components/notification/Notifications';
import Profile from './components/Profile';
import AdminStatus from './components/AdminStatus';



const Navbar = () => {
  return (
    <div>
      <div className='flex'>
        <div className='bg-color1 w-[250px] h-[80px] flex justify-center items-center'>
          <Image src={logo} alt="Logo" width={195} height={57} />
        </div>
        <div className='bg-white w-full h-[80px] flex items-center justify-between space-x-4 px-7'>
          <div className='flex items-center justify-center space-x-8'>
            <AdminStatus/>
            <div>
              <IoMdSettings  className='text-color1 w-[30px] h-[30px]'/>
            </div>
          </div>
          <div>
            <div className='bg-color5 w-[333px] h-[48px] rounded-lg flex items-center justify-center'>
              <p className='text-color1 text-[20px] font-font1'>August 8th 2022 . 09:00 AM</p>
            </div>
          </div>
          <div className='flex items-center space-x-8'>
            <div>
              <Language/>
            </div>
            <div>
              <Message/>
            </div>
            <div>
              <Notifications/>
            </div>
            <div>
              <Profile/>
            </div>
          </div>
          


        </div>

      </div>
    </div>
  )
}

export default Navbar