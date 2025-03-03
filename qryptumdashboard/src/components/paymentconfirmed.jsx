import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function PaymentConfirmed() {
  const pathRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect(); // Trigger a layout so styles are calculated & the browser picks up the starting position
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
    path.style.strokeDashoffset = '0';

    const timer = setTimeout(() => {
      navigate("/");
    }, 2000); // Duration of the animation

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex items-center justify-center">
      {/* Main Container */}
      <div 
        className=" rounded-[37.26px] flex flex-col items-center justify-center w-[240px] h-[133px] gap-[33px]"
      >
        {/* Ellipse with Green Tick */}
        <div 
          className="w-[69px] h-[69px] bg-white rounded-full flex items-center justify-center"
        >
          <svg 
            className="w-8 h-8 text-green-500" 
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

        {/* Payment Confirmed Text */}
        <h1 
          className="text-white font-chakra font-bold text-[24px] leading-[30.6px] tracking-[0.45px]"
        >
          Payment Confirmed
        </h1>
      </div>
    </div>
  );
}