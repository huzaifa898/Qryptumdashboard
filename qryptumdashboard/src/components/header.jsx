import React from "react";
import { ChevronDown, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import gift from "../images/gift.png"
export function Header() {
  return (
    <header className="border-b border-gryptum-card h-16 flex items-center px-4 md:px-6 ml-0 md:ml-64">
      <div className="flex-1 flex justify-end">
        <div className="flex items-center space-x-4">
          {/* QRY Balance Card with Border */}
          <div className="bg-gryptum-card border border-[#2088FF] rounded-[40px] px-4 py-2 flex items-center w-[176px] h-[48px] space-x-2">
            {/* Uploaded Gift Icon */}
            <img src={gift} alt="Gift Icon" className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">QRY Balance</span>
              <span className="text-[12px] font-medium">1,201 QRY = $1,450 USD</span>
            </div>
          </div>

          {/* Notification Icon with Red Dot */}
          <div className="relative bg-gryptum-card border border-[#2088FF] rounded-[40px] flex items-center justify-center w-[48px] h-[48px]">
            <Bell className="text-gray-400 w-5 h-5" />
            {/* Red Notification Dot */}
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>

          {/* Profile Button with Border */}
          <Button variant="ghost" className="flex items-center space-x-2 bg-gryptum-card border border-[#2088FF] rounded-[40px] px-4 py-2 w-[176px] h-[48px]">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://via.placeholder.com/32" alt="Dr. Zaid Ali" />
              <AvatarFallback>ZA</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">Dr. Zaid Ali</span>
              <span className="text-xs text-gray-400">Verified Data Miner</span>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </Button>
        </div>
      </div>
    </header>
  );
}
