import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function MintConfirmed() {
  const pathRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect(); // Trigger a layout so styles are applied
    path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 2s ease-in-out";
    path.style.strokeDashoffset = "0";

    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex items-center justify-center px-4">
      {/* Main Container */}
      <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] bg-transparent flex flex-col items-center justify-center gap-6 p-4">
        
        {/* Animated Tick */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-500 sm:w-12 sm:h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Confirmation Text */}
        <h1 className="text-white font-['Chakra_Petch'] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold leading-tight text-center">
          Contract Mint Confirmed!
        </h1>
      </div>
    </div>
  );
}

export default MintConfirmed;
