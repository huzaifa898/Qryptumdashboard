import React from "react";

export function NetworkHealth() {
  return (
    <div className="p-4 w-[550px] h-[260px] flex flex-col justify-center rounded-[37px] border border-[#0158C5] bg-black/15 shadow-[0px_0px_70px_rgba(1,88,197,0.25)] backdrop-blur-md">
      <table className="w-full">
        {/* Title Row */}
        <thead>
          <tr>
            <th
              className="absolute w-[181px] h-[31px] top-[21px] left-[27px] text-left text-[24px] font-[600] leading-[30.6px] tracking-[0.45px] font-['Chakra_Petch'] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
            >
              Network Health
            </th>
          </tr>
        </thead>

        {/* Metrics Rows */}
        <tbody className="absolute w-[487px] h-[31px] top-[82px] left-[27px] flex flex-col space-y-3">
          {/* Active Miners */}
          <tr className="flex justify-between">
            <td className="text-gray-400 text-[16px] font-[500]">Active Miners:</td>
            <td className="text-[16px] font-[500]">65% (520 QRY)</td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="w-[512px] h-[0px] border-t border-white/30 opacity-30 transform -rotate-180"></div>
            </td>
          </tr>

          {/* Data Validation Speed */}
          <tr className="flex justify-between">
            <td className="text-gray-400 text-[16px] font-[500]">Data Validation Speed:</td>
            <td className="text-[16px] font-[500]">25% (200 QRY)</td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="w-[512px] h-[0px] border-t border-white/30 opacity-30 transform -rotate-180"></div>
            </td>
          </tr>

          {/* Quantum Security Status */}
          <tr className="flex justify-between">
            <td className="text-gray-400 text-[16px] font-[500]">Quantum Security Status:</td>
            <td className="text-[16px] font-[500]">10% (80 QRY)</td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="w-[512px] h-[0px] border-t border-white/30 opacity-30 transform -rotate-180"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
