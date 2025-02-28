import React from "react";

export function QuickActions() {
  return (
    <div className="w-[1176px] h-[176px] flex-shrink-0 rounded-[37.26px] border border-[#0158C5] p-6 flex justify-between items-center bg-[#0F2942]">
      
      {/* Left Side: Title + Info */}
      <div className="flex flex-col space-y-4 w-[400px]">
        {/* Info Section with Title Aligned */}
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold tracking-[0.45px] leading-[30.6px] font-[Chakra Petch] bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Quick Actions
          </h2>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-400 text-sm">Total QRY Earned (This Month):</p>
          <p className="text-lg font-medium text-white">420 QRY</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm">Pending Validations:</p>
          <p className="text-lg font-medium text-white">2 datasets</p>
        </div>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex flex-col space-y-4">
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
          Create Data Contract
        </button>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
          Upload New Data
        </button>
      </div>
    </div>
  );
}
