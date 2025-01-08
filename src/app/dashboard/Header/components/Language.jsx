"use client"

import React, { useState, useEffect, useRef } from 'react';

const Language = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default language
  const dropdownRef = useRef(null); // Ref to the dropdown container

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language); // Update the selected language
    setIsLanguageDropdownOpen(false); // Close the dropdown
  };

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false); // Close the dropdown
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleLanguageDropdown}
          className="text-color2 text-[20px] font-font1 border-2 rounded-lg border-color6 px-5 py-1"
        >
          {selectedLanguage}
        </button>
        {isLanguageDropdownOpen && (
          <div className="absolute top-full mt-2 bg-color3 text-white rounded-lg shadow-lg z-50">
            <ul>
              <li
                className="pl-4 py-2 pr-16 cursor-pointer"
                onClick={() => handleLanguageSelect('EN')}
              >
                English
              </li>
              <li
                className="pl-4 py-2 pr-16 cursor-pointer"
                onClick={() => handleLanguageSelect('ES')}
              >
                Spanish
              </li>
              <li
                className="pl-4 py-2 pr-16 cursor-pointer"
                onClick={() => handleLanguageSelect('FR')}
              >
                French
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Language;