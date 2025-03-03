import React from "react";
import { useNavigate } from 'react-router-dom';

export function Confirmation() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/payment-confirmed');
  };

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex items-center justify-center">
      {/* Main Container */}
      <div 
        className="bg-[#0A1929] border border-[#0158C5] rounded-[37.26px] flex flex-col items-center pt-8 w-[724px] h-[384px]"
      >
        {/* Content Wrapper */}
        <div className="flex flex-col w-[496px]">
          {/* Confirmation & Gas Fee Heading */}
          <h1 
            className="text-white font-chakra font-bold text-[24px] leading-[30.6px] tracking-[0.45px] mb-4 self-start w-[277px] h-[31px]"
          >
            Confirmation & Gas Fee
          </h1>

          {/* Gas Fee Calculation */}
          <p 
            className="text-white font-chakra font-medium text-[18px] leading-[30.6px] tracking-[0.45px] opacity-60 mb-2 w-[496px] h-[31px]"
          >
            Gas Fee Calculation
          </p>

          {/* Formula */}
          <p 
            className="text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] mb-4 w-[496px] h-[30px]"
          >
            Base Fee (0.01) × Qd(1.2) × Pd(1.5) = 0.018
          </p>

          {/* Horizontal Line */}
          <div
            className="border-t border-[#0158C5] opacity-30 w-[512px] h-0 rotate-180 mb-4"
          />

          {/* QRY Token Cost */}
          <p 
            className="text-white font-chakra font-medium text-[18px] leading-[30.6px] tracking-[0.45px] mb-2"
          >
            QRY TOKEN COST
          </p>

          {/* Token Amount */}
          <p 
            className="text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] mb-4"
          >
            0.018 QRY (auto-converted from USD)
          </p>

          {/* Confirm and Pay Button */}
          <button 
            className="text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] bg-gradient-to-b from-[#00BBF7] to-[#0158C5] rounded-[896px] px-5 py-2 self-start"
            onClick={handleConfirm}
          >
            Confirm and Pay
          </button>
        </div>
      </div>
    </div>
  );
}