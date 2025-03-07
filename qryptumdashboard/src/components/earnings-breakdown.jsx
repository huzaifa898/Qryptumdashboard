import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Healthcare", value: 65, color: "#0084FF" },
  { name: "Finance", value: 25, color: "#00C853" },
  { name: "SupplyChain", value: 10, color: "#FFB547" },
];

export function EarningsBreakdown() {
  return (
    <div className="relative p-4 w-full flex flex-col md:flex-row items-center md:items-center justify-between rounded-[37px] border border-[#0158C5] bg-black/15 shadow-[0px_0px_70px_rgba(1,88,197,0.25)] backdrop-blur-md">
      
      {/* Title - Center on Mobile, Left on Desktop */}
      <h2 className="absolute top-[21px] left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 text-center md:text-left text-[20px] md:text-[24px] font-[600] tracking-[0.45px] font-chakra bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent whitespace-nowrap">
        Earnings Breakdown
      </h2>

      {/* Wrapper - Adjusting layout properly */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full px-4 md:px-6 mt-14 md:mt-10">

        {/* Legend Section - Left on Desktop, Top on Mobile */}
        <div className="w-full md:w-auto flex flex-col justify-center items-center md:items-start space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span className="opacity-[0.62] font-chakra font-medium text-[10px] md:text-[12px] tracking-wide">
                {item.name}:
              </span>
              <span className="font-chakra font-semibold text-[10px] md:text-[14px] tracking-wide">
                {item.value}% ({item.value * 8} QRY)
              </span>
            </div>
          ))}
        </div>

        {/* Pie Chart - Right on Desktop, Bottom on Mobile */}
        <div className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] mt-6 md:mt-0 flex justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius="50%" outerRadius="90%" dataKey="value" stroke="none">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))} 
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
