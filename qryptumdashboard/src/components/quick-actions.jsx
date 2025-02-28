import React from "react";

export function QuickActions() {
  return (
    <div className="w-[1176px] h-[176px] flex-shrink-0 rounded-[37.26px] border border-[#0158C5] p-6 flex justify-between items-center bg-[#0F2942]">
      
      {/* Left Side: Title + Info */}
      <div className="flex flex-col space-y-4 w-[400px]">
        {/* Title */}
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold tracking-[0.45px] leading-[30.6px] font-[Chakra Petch] bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Quick Actions
          </h2>
        </div>

        {/* Info */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">Total QRY Earned (This Month):</p>
          <p className="w-[66px] h-[31px] text-white font-[Chakra Petch] font-medium text-[16px] leading-[30.6px] tracking-[0.45px] text-center">
            420 QRY
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">Pending Validations:</p>
          <p className="w-[66px] h-[31px] text-white font-[Chakra Petch] font-medium text-[16px] leading-[30.6px] tracking-[0.45px] text-center whitespace-nowrap">
            2 datasets
          </p>
        </div>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex flex-col space-y-[10px]">
        <button className="w-[180px] h-[44px] rounded-[896px] bg-gradient-to-r from-[#00BBF7] to-[#0158C5] text-white font-[Chakra Petch] font-medium text-sm leading-[21.5px] tracking-[0.45px] text-center shadow-[0px_7px_80px_-12px_#5566FF] hover:opacity-90 transition-all flex items-center justify-center">
          Create Data Contract
        </button>
        <button className="w-[180px] h-[44px] rounded-[896px] bg-gradient-to-r from-[#00BBF7] to-[#0158C5] text-white font-[Chakra Petch] font-medium text-sm leading-[21.5px] tracking-[0.45px] text-center shadow-[0px_7px_80px_-12px_#5566FF] hover:opacity-90 transition-all flex items-center justify-center">
          Upload New Data
        </button>
      </div>
    </div>
  );
}
