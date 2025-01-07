import React, { useState, useEffect } from 'react';

const TextSlider = () => {
  const words = [
    { id: 0, value: "Everything you need in an easily customizable dashboard" },
    { id: 1, value: "Everything you need" },
    { id: 2, value: "easily customizable dashboard" },
    
  ];

  const [currentWord, setCurrentWord] = useState(words[0].value);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      const nextIndex = (currentIndex + 1) % words.length;
      setCurrentIndex(nextIndex);
      setCurrentWord(words[nextIndex].value);
    }, 2000); // Change word every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, words]);

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="text-[12px] font-normal text-white mb-4  mt-3">
         {currentWord} 
      </div>
      <div className="flex space-x-4 text-white">
        {words.map((word, index) => (
          <div
            key={word.id}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TextSlider;