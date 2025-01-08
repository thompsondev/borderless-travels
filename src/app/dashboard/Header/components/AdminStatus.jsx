"use client"

import React, { useState, useEffect, useRef } from 'react';
import { VscVmActive } from "react-icons/vsc";
import { BiAlarmSnooze } from "react-icons/bi";

const AdminStatus = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [status, setStatus] = useState('Active');
  const dropdownRef = useRef(null); // Ref to track the dropdown container

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); // Close the dropdown
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}> {/* Add ref to the parent container */}
      <div className='flex items-center space-x-4 cursor-pointer' onClick={toggleDropdown}>
        {status === 'Active' ? (
          <VscVmActive className='text-[#04760F] w-[30px] h-[30px]' />
        ) : (
          <BiAlarmSnooze className='text-[#FF0000] w-[30px] h-[30px]' />
        )}
        <div>
          <p className='font-font4 font-bold text-[20px]'>Hello, Angela</p>
          <p className='font-font4 text-[16px] text-[#04760F]'>{status}</p>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div
            className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3 px-6"
            onClick={() => handleStatusChange('Active')}
          >
            <VscVmActive className='text-[#04760F] w-[30px] h-[30px]' />
            <p className='font-font4 text-[16px] font-bold text-[#04760F]'>Active</p>
          </div>
          <div
            className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-3 px-6"
            onClick={() => handleStatusChange('Away')}
          >
            <BiAlarmSnooze className='text-color4 w-[30px] h-[30px]' />
            <p className='font-font4 text-[16px] font-bold text-color4'>Away</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminStatus;