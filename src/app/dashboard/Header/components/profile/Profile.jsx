"use client"



import React, { useState, useEffect, useRef } from 'react';
import image from "../../../../assets/angela.png"
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import LogoutModal from './LogoutModal';

const Profile = () => {

  // State to manage the visibility of the message
      const [showProfile, setShowProfile] = useState(false);
      const [showLogoutModal, setShowLogoutModal] = useState(false); // State to control the visibility of the logout modal

    
      // Ref to track the dropdown element
      const dropdownRef = useRef(null);
    
      // Function to toggle the message visibility
      const toggleProfile = () => {
        setShowProfile(!showProfile);
      };

      const handleLogoutClick = () => {
        alert("logout clicked")
        setShowLogoutModal(true); // Show the logout modal when logout is clicked
      };

      const handleLogoutConfirm = () => {
        // Perform logout logic here
        alert("User  logged out");
        setShowLogoutModal(false); // Close the modal after logout
      };

      const handleLogoutCancel = () => {
        setShowLogoutModal(false); // Close the modal if user cancels
      };


    
      // Effect to handle clicks outside the dropdown
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowProfile(false);
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
    <div>
            <div className='flex items-center space-x-4 px-5 border-l-2 border-[#C2C2C2]' ref={dropdownRef} onClick={toggleProfile}>
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
             {showProfile && (
                <div className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                           <div
                              className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3 px-6"
                            >
                              <RiProfileLine className='text-black w-[30px] h-[30px]' />
                              <p className='font-font4 text-[16px] font-bold text-black'>My Profile</p>
                            </div>
                            <div
                              className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3 px-6"
                              onClick={handleLogoutClick} // Trigger the logout modal

                            >
                              <IoIosLogOut className='text-color4 w-[30px] h-[30px]' />
                              <p className='font-font4 text-[16px] font-bold text-color4'>Logout</p>
                            </div>
  
                  
                </div>
              )}

              {/* Render the LogoutModal if showLogoutModal is true */}
              {showLogoutModal && (
                console.log("Rendering LogoutModal"),
                <LogoutModal
                  onConfirm={handleLogoutConfirm} // Pass the confirm handler
                  onCancel={handleLogoutCancel}   // Pass the cancel handler
                />
              )}
    </div>
    
  )
}

export default Profile