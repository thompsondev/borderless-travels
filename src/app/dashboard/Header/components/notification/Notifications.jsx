"use client"



import React, { useState, useEffect, useRef } from 'react';
import { BsFillBellFill } from "react-icons/bs";
import { BiSolidMessageDetail } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import Messages from "../message/Message"
import SingleNotification from './SingleNotification';


const Notifications = () => {

   // State to manage the visibility of the message
    const [showNotification, setShowNotification] = useState(false);
  
    // Ref to track the dropdown element
    const dropdownRef = useRef(null);
  
    // Function to toggle the message visibility
    const toggleNotification = () => {
      setShowNotification(!showNotification);
    };
  
    // Effect to handle clicks outside the dropdown
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowNotification(false);
        }
      };
  
      // Attach the event listener
      document.addEventListener("mousedown", handleClickOutside);
  
      // Cleanup the event listener on component unmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Icon */}
      <BsFillBellFill className='w-[30px] h-[30px] text-color1' onClick={toggleNotification}/>

      {/* Yellow Circle (Notification Indicator) */}
      <div className="absolute top-1 right-2 w-[13px] h-[13px] border-white border-2 bg-yellow-400 rounded-full transform translate-x-1/2 -translate-y-1/2" />
      {showNotification && (
        <div className="absolute top-[45px] left-[-50px] w-[365px] py-4 h-[580px] bg-white rounded-lg shadow-lg flex flex-col justify-between">
          <div className='flex items-center justify-between px-4'>
                <h2 className="text-lg font-bold">Notification </h2>
                <div className='bg-[#EFEFEF] rounded-full'>
                    <HiDotsHorizontal className='rounded-full p-3 h-10 w-10' />
                </div>
          </div>
          <div className='px-2'>
            <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/>
            <SingleNotification/>  
          </div>
          <div className='w-full px-4'>
            <button className='bg-color1 text-center w-full py-4 rounded-lg text-[15px] font-font2 font-extrabold text-white'>See all notifications</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;