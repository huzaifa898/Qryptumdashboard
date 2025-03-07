import React from "react";
import { Progress } from "./ui/progress";

export function MonthlyGoal() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center rounded-[30px] px-4 sm:px-6 py-3 sm:py-4 relative">
      {/* Monthly Goal Title */}
      <h2 className="font-[600] text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[26px] md:leading-[30.6px] tracking-[0.4px] sm:tracking-[0.45px] text-white font-chakra text-center md:text-left">
        Monthly Goal:
      </h2>

      {/* Goal Value */}
      <span className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2 md:mt-0 text-center md:text-left">
        500/1,000 QRY (50% Complete)
      </span>

      {/* Progress Bar Below */}
      <div className="absolute bottom-[-12px] w-full h-[8px] sm:h-[10px] rounded-[30px] border border-[#0158C5] overflow-hidden">
        <Progress 
          value={50} 
          className="h-full bg-[#1E3A5F]" 
          indicatorClassName="bg-[#0084FF]" 
        />
      </div>
    </div>
  );
}
