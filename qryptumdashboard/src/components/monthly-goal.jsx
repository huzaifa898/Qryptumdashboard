import React from "react";
import { Progress } from "./ui/progress";

export function MonthlyGoal() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center rounded-[37px] px-4 relative">
      {/* Monthly Goal Title */}
      <h2 className="font-[600] text-[20px] md:text-[24px] leading-[26px] md:leading-[30.6px] tracking-[0.45px] text-white font-chakra">
        Monthly Goal:
      </h2>

      {/* Goal Value */}
      <span className="text-sm text-gray-400 mt-2 md:mt-0">500/1,000 QRY (50% Complete)</span>

      {/* Progress Bar Below the Box */}
      <div className="absolute bottom-[-14px] w-full h-[10px] rounded-[37.26px] border border-[#0158C5] gap-[10px] overflow-hidden">
        <Progress 
          value={50} 
          className="h-full bg-[#1E3A5F]" 
          indicatorClassName="bg-[#0084FF]" 
        />
      </div>
    </div>
  );
}
