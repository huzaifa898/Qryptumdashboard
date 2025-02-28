import React from "react";
import { Progress } from "./ui/progress";

export function MonthlyGoal() {
  return (
    <div className="w-[1176px] h-[31px] flex justify-between items-center rounded-[37px] px-4 relative">
      {/* Monthly Goal Title */}
      <h2 className="font-[600] text-[24px] leading-[30.6px] tracking-[0.45px] text-white font-[Chakra Petch]">
        Monthly Goal:
      </h2>

      {/* Goal Value */}
      <span className="text-sm text-gray-400">500/1,000 QRY (50% Complete)</span>

      {/* Progress Bar Below the Box */}
      <div className="absolute bottom-[-14px] w-[1150px] h-[10px] rounded-[37.26px] border border-[#0158C5] gap-[10px] overflow-hidden">
        <Progress 
          value={50} 
          className="h-full bg-[#1E3A5F]" 
          indicatorClassName="bg-[#0084FF]" 
        />
      </div>
    </div>
  );
}
