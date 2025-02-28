import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const activities = [
  { id: 1, name: "Hospital_CT_Scans", type: "Healthcare", date: "20 Aug 2024", status: "Approved", earned: "+80 QRY" },
  { id: 2, name: "NYC_Retail_Sales", type: "Finance", date: "18 Aug 2024", status: "Rejected", earned: "0 QRY" },
  { id: 3, name: "IoT_Device_Logs", type: "Supply Chain", date: "18 Aug 2024", status: "Validating", earned: "-" },
];

export function RecentActivity() {
  return (
    <div className="p-5 flex flex-col justify-between w-[1176px] h-[270px] rounded-[37px] border border-[#0158C5] bg-black/15 shadow-lg shadow-blue-500/25 backdrop-blur-md">
      
      {/* Title */}
      <h2 className="font-['Chakra_Petch'] font-semibold text-[20px] leading-[26px] tracking-[0.5px] bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-left mb-2">
        Recent Activity & Validation Status
      </h2>

      {/* Table */}
      <div className="flex-1 overflow-hidden">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="h-6">
              {["DATASET NAME", "TYPE", "DATE", "STATUS", "QRY EARNED"].map((head) => (
                <TableHead
                  key={head}
                  className="text-gray-400 text-left font-['Chakra_Petch'] font-medium text-[14px] leading-[18px] tracking-[0.4px] pb-1"
                >
                  {head}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id} className="h-6">
                <TableCell className="text-left font-['Chakra_Petch'] font-medium text-[14px] leading-[18px] tracking-[0.4px] p-2">
                  {activity.name}
                </TableCell>
                <TableCell className="text-left font-['Chakra_Petch'] font-medium text-[14px] leading-[18px] tracking-[0.4px] p-2">
                  {activity.type}
                </TableCell>
                <TableCell className="text-left font-['Chakra_Petch'] font-medium text-[14px] leading-[18px] tracking-[0.4px] p-2">
                  {activity.date}
                </TableCell>
                <TableCell className="text-left font-['Chakra_Petch'] font-medium text-[14px] leading-[18px] tracking-[0.4px] p-2">
                  <Badge
                    variant="outline"
                    className={`border px-2 py-1 text-[12px] ${
                      activity.status === "Approved"
                        ? "bg-green-500/10 text-green-500 border-green-500"
                        : activity.status === "Rejected"
                        ? "bg-red-500/10 text-red-500 border-red-500"
                        : "bg-yellow-500/10 text-yellow-500 border-yellow-500"
                    }`}
                  >
                    {activity.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-left font-['Chakra_Petch'] font-medium text-[14px] leading-[18px] tracking-[0.4px] p-2">
                  {activity.earned}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
