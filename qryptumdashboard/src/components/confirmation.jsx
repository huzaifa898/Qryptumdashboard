import React from "react";
import { useNavigate } from 'react-router-dom';

export function Confirmation() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/payment-confirmed');
  };

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex items-center justify-center px-4">
      {/* Main Container */}
      <div className="bg-[#0A1929] border border-[#0158C5] rounded-[20px] md:rounded-[37.26px] flex flex-col items-center pt-6 md:pt-8 w-full max-w-[724px] h-auto md:h-[384px] pb-6 md:pb-0">
        {/* Content Wrapper */}
        <div className="flex flex-col w-full max-w-[512px] px-4">
          {/* Confirmation & Gas Fee Heading */}
          <h1 className="text-white font-chakra font-bold text-lg md:text-[24px] leading-[28px] md:leading-[30.6px] tracking-[0.45px] mb-3 md:mb-4">
            Confirmation & Gas Fee
          </h1>

          {/* Gas Fee Calculation */}
          <p className="text-white font-chakra font-medium text-base md:text-[18px] leading-[24px] md:leading-[30.6px] tracking-[0.45px] opacity-60 mb-2">
            Gas Fee Calculation
          </p>

          {/* Formula */}
          <p className="text-white font-chakra font-medium text-sm md:text-[16px] leading-[24px] md:leading-[30.6px] tracking-[0.45px] mb-4">
            Base Fee (0.01) × Qd(1.2) × Pd(1.5) = 0.018
          </p>

          {/* Horizontal Line */}
          <div className="border-t border-[#0158C5] opacity-30 w-full mb-4" />

          {/* QRY Token Cost */}
          <p className="text-white font-chakra font-medium text-base md:text-[18px] leading-[24px] md:leading-[30.6px] tracking-[0.45px] mb-2">
            QRY TOKEN COST
          </p>

          {/* Token Amount */}
          <p className="text-white font-chakra font-medium text-sm md:text-[16px] leading-[24px] md:leading-[30.6px] tracking-[0.45px] mb-6">
            0.018 QRY (auto-converted from USD)
          </p>

          {/* Confirm and Pay Button - Left Aligned */}
          <button 
            className="text-white font-chakra font-medium text-base md:text-[16px] leading-[24px] md:leading-[30.6px] tracking-[0.45px] bg-gradient-to-b from-[#00BBF7] to-[#0158C5] rounded-full px-5 py-3 md:py-2 w-fit"
            onClick={handleConfirm}
          >
            Confirm and Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
