"use client"

import React, { useState, useEffect, useRef } from 'react';
import { BiSolidMessageDetail } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import Messages from "./Message"



const Message = () => {
  // State to manage the visibility of the message
  const [showMessage, setShowMessage] = useState(false);

  // Ref to track the dropdown element
  const dropdownRef = useRef(null);

  // Function to toggle the message visibility
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMessage(false);
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
      {/* Icon with onClick event to toggle message */}
      <BiSolidMessageDetail 
        className='w-[30px] h-[30px] text-color1 cursor-pointer' 
        onClick={toggleMessage} 
      />
      
      {/* Conditionally render the message with absolute positioning */}
      {showMessage && (
        <div className="absolute top-[45px] w-[383px] py-4 h-[580px] bg-white rounded-lg shadow-lg flex flex-col justify-between">
          <div className='flex items-center justify-between px-4'>
                <h2 className="text-lg font-bold">Message </h2>
                <div className='bg-[#EFEFEF] rounded-full'>
                    <HiDotsHorizontal className='rounded-full p-3 h-10 w-10' />
                </div>
          </div>
          <div className='px-2'>
            <Messages/>
            <Messages/>
            <Messages/>
            <Messages/>
            <Messages/>
            <Messages/>

            
          </div>
          <div className='w-full px-4'>
            <button className='bg-color2 text-center w-full py-4 rounded-lg text-[15px] font-font2 font-extrabold text-white'>View in message center</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;