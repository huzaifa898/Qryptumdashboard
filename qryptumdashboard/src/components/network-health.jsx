import React from "react";

export function NetworkHealth() {
  return (
    <div className="p-4 w-full h-auto flex flex-col justify-center rounded-[30px] border border-[#0158C5] bg-black/15 shadow-[0px_0px_70px_rgba(1,88,197,0.25)] backdrop-blur-md">
      
      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.4px] sm:tracking-[0.45px] leading-[22px] sm:leading-[24px] md:leading-[30.6px] font-chakra bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center md:text-left">
        Network Health
      </h2>

      {/* Metrics Table */}
      <table className="w-full mt-4">
        <tbody className="w-full flex flex-col space-y-3">
          
          {/* Active Miners */}
          <tr className="flex justify-between items-center">
            <td className="text-gray-400 text-xs sm:text-sm md:text-[16px] font-medium">Active Miners:</td>
            <td className="text-white text-xs sm:text-sm md:text-[16px] font-medium">65% (520 QRY)</td>
          </tr>
          <tr><td colSpan="2" className="border-t border-white/30 opacity-30"></td></tr>

          {/* Data Validation Speed */}
          <tr className="flex justify-between items-center">
            <td className="text-gray-400 text-xs sm:text-sm md:text-[16px] font-medium">Data Validation Speed:</td>
            <td className="text-white text-xs sm:text-sm md:text-[16px] font-medium">25% (200 QRY)</td>
          </tr>
          <tr><td colSpan="2" className="border-t border-white/30 opacity-30"></td></tr>

          {/* Quantum Security Status */}
          <tr className="flex justify-between items-center">
            <td className="text-gray-400 text-xs sm:text-sm md:text-[16px] font-medium">Quantum Security Status:</td>
            <td className="text-white text-xs sm:text-sm md:text-[16px] font-medium">10% (80 QRY)</td>
          </tr>
          <tr><td colSpan="2" className="border-t border-white/30 opacity-30"></td></tr>

        </tbody>
      </table>

    </div>
  );
}
