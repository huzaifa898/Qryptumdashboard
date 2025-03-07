import React from "react";
import { useNavigate } from 'react-router-dom'; 

export function QuickActions() {
  const navigate = useNavigate(); 

  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-between rounded-[30px] border border-[#0158C5] p-4 sm:p-6 bg-[#0F2942]">
      
      {/* Left Side: Title + Info */}
      <div className="w-full md:w-[400px] flex flex-col space-y-3 sm:space-y-4">
        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.4px] sm:tracking-[0.45px] leading-[22px] sm:leading-[24px] md:leading-[30.6px] font-chakra bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center md:text-left">
          Quick Actions
        </h2>

        {/* Info */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm">Total QRY Earned (This Month):</p>
          <p className="text-white font-chakra font-medium text-xs sm:text-sm md:text-[16px] leading-[22px] sm:leading-[30.6px] tracking-[0.4px] sm:tracking-[0.45px]">
            420 QRY
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm">Pending Validations:</p>
          <p className="text-white font-chakra font-medium text-xs sm:text-sm md:text-[16px] leading-[22px] sm:leading-[30.6px] tracking-[0.4px] sm:tracking-[0.45px]">
            2 datasets
          </p>
        </div>
      </div>

      {/* Right Side: Buttons */}
      <div className="w-full md:w-auto flex flex-col space-y-3 mt-4 md:mt-0">
        <button 
          className="w-full sm:w-[180px] h-[42px] sm:h-[44px] rounded-full bg-gradient-to-r from-[#00BBF7] to-[#0158C5] text-white font-chakra font-medium text-sm leading-[20px] sm:leading-[21.5px] tracking-[0.4px] sm:tracking-[0.45px] text-center shadow-[0px_5px_40px_-10px_#5566FF] hover:opacity-90 transition-all flex items-center justify-center"
          onClick={() => navigate('/datacontract')}
        >
          Create Data Contract
        </button>
        <button 
          className="w-full sm:w-[180px] h-[42px] sm:h-[44px] rounded-full bg-gradient-to-r from-[#00BBF7] to-[#0158C5] text-white font-chakra font-medium text-sm leading-[20px] sm:leading-[21.5px] tracking-[0.4px] sm:tracking-[0.45px] text-center shadow-[0px_5px_40px_-10px_#5566FF] hover:opacity-90 transition-all flex items-center justify-center"
          onClick={() => navigate('/upload')}
        >
          Upload New Data
        </button>
      </div>
    </div>
  );
}
