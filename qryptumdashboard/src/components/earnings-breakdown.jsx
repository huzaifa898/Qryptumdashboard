import React from "react";
import graph from "../images/graph.png"; // Ensure the path is correct

const data = [
  { name: "Healthcare", value: 65, color: "#0084FF" },
  { name: "Finance", value: 25, color: "#00C853" },
  { name: "SupplyChain", value: 10, color: "#FFB547" }, // Ensuring one-line text
];

export function EarningsBreakdown() {
  return (
    <div className="relative p-4 w-[550px] h-[260px] flex flex-col justify-center rounded-[37px] border border-[#0158C5] bg-black/15 shadow-[0px_0px_70px_rgba(1,88,197,0.25)] backdrop-blur-md">
      {/* Fixed Title */}
      <h2 className="absolute top-[21px] left-[27px] w-[238px] h-[31px] text-[24px] font-[600] leading-[30.6px] tracking-[0.45px] font-['Chakra_Petch'] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
        Earnings Breakdown
      </h2>

      {/* Content Wrapper */}
      <div className="flex items-center justify-between mt-16 px-6">
        {/* Legend Section - Centered Properly */}
        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-start space-x-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              {/* Category Name - Aligned Properly */}
              <span className="w-[68px] opacity-[0.62] font-['Chakra_Petch'] font-medium text-[12px] leading-[30.6px] tracking-[0.45px] text-left">
                {item.name}:
              </span>
              {/* Value - Aligned Properly */}
              <span className="w-[111px] font-['Chakra_Petch'] font-semibold text-[14px] leading-[30.6px] tracking-[1px] text-left">
                {item.value}% ({item.value * 8} QRY)
              </span>
            </div>
          ))}
        </div>

        {/* Image Section  */}
        <div className="w-[190px] h-[190px] rounded-[10px] flex justify-center mb-8 items-center overflow-hidden">
          <img
            src={graph}
            alt="Earnings Breakdown"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
