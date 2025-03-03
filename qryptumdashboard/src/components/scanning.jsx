import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export function Scanning() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 20;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);
  }, []);

  const handleProceed = () => {
    navigate('/confirmation');
  };

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex flex-col items-center justify-center">
      <h1 className="text-white font-chakra font-semibold text-[24px] leading-[30.6px] tracking-[0.45px] mb-6">
        {progress < 100 ? "AI IS SCANNING YOUR DATA" : "Validation Complete!"}
      </h1>
      <div className="relative w-[558px] h-[8px] bg-gray-700 rounded-[37.26px] border border-gray-500 mb-6">
        <div 
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-[37.26px]" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex flex-col items-center gap-4">
        {progress >= 20 && (
          <div className="flex items-center gap-2">
            <span className="text-white font-chakra font-medium text-[14px] leading-[30.6px] tracking-[0.45px]">
              No missing fields detected
            </span>
            <span className="text-green-500">✔</span>
          </div>
        )}
        <p className="text-white font-chakra font-medium text-[14px] leading-[30.6px] tracking-[0.45px]">
          12% duplicate entries found (non-critical).
        </p>
        {progress === 100 && (
          <button 
            className="w-[180px] h-[44px] bg-gradient-to-b from-[#00BBF7] to-[#0158C5] text-white rounded-[896px] px-5 py-[15px] flex items-center justify-center gap-[10px] text-sm font-medium"
            onClick={handleProceed}
          >
            Proceed
          </button>
        )}
      </div>
    </div>
  );
}