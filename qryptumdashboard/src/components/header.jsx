import React from "react";
import { ChevronDown, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import gift from "../images/gift.png";

export function Header() {
  return (
    <header className="border-b border-gryptum-card h-16 flex items-center px-3 sm:px-4 md:px-6 lg:px-8 ml-0 md:ml-64 transition-all duration-300">
      <div className="flex-1 flex justify-end">
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          {/* QRY Balance Card */}
          <div className="bg-gryptum-card border border-[#2088FF] rounded-[40px] px-2 sm:px-3 md:px-4 py-1 flex items-center space-x-1 sm:space-x-2 w-[110px] sm:w-[140px] md:w-[176px] h-[36px] sm:h-[40px] md:h-[48px]">
            <img
              src={gift}
              alt="Gift Icon"
              className="w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5"
            />
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-gray-400">
                QRY Balance
              </span>
              <span className="text-[9px] sm:text-[11px] md:text-[12px] font-chakra">
                1,201 QRY = $1,450 USD
              </span>
            </div>
          </div>

          {/* Notification Icon */}
          <div className="relative bg-gryptum-card border border-[#2088FF] rounded-[40px] flex items-center justify-center w-[36px] sm:w-[40px] md:w-[48px] h-[36px] sm:h-[40px] md:h-[48px]">
            <Bell className="text-gray-400 w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5" />
            <span className="absolute top-1 right-1 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-red-500 rounded-full"></span>
          </div>

          {/* Profile Button */}
          <Button
            variant="ghost"
            className="flex items-center space-x-1 bg-gryptum-card border border-[#2088FF] rounded-[40px] px-2 sm:px-3 md:px-4 py-1 w-[110px] sm:w-[140px] md:w-[176px] h-[36px] sm:h-[40px] md:h-[48px]"
          >
            <Avatar className="h-5 sm:h-6 md:h-8 w-5 sm:w-6 md:w-8">
              <AvatarImage
                src="https://via.placeholder.com/32"
                alt="Dr. Zaid Ali"
              />
              <AvatarFallback>ZA</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="text-[10px] sm:text-xs md:text-sm font-medium">
                Dr. Zaid Ali
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400">
                Verified Data Miner
              </span>
            </div>
            <ChevronDown className="h-3 sm:h-4 md:h-4 w-3 sm:w-4 md:w-4 text-gray-400" />
          </Button>
        </div>
      </div>
    </header>
  );
}
