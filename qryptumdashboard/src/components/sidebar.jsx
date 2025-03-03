import React, { useState } from "react";
import { Home, Database, Award, History, Settings, LogOut } from 'lucide-react';
import { cn } from "../lib/utils";
import logo from '../images/logo.png';

const navigation = [
  { name: "Home", href: "#", icon: Home, current: false },
  { name: "Data", href: "#", icon: Database, current: false },
  { name: "Rewards", href: "#", icon: Award, current: false },
  { name: "History", href: "#", icon: History, current: false },
  { name: "Settings", href: "#", icon: Settings, current: false },
];

export function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className={`fixed md:relative z-40 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
      <div className="flex flex-col w-[230px] h-full md:h-[880px] flex-shrink-0 bg-[#0A1929] border border-[#2088FF] rounded-[40px] mt-5">
        <div className="flex-1 flex flex-col items-center min-h-0">
          <div className="flex items-center justify-center h-16 w-full mt-[30px] mb-[80px]">
            <div className="flex items-center gap-2 w-[154px] h-[39px]">
              <img src={logo || "/placeholder.svg"} alt="Qryptum Logo" className="h-[39px]" />
              <span className="text-xl font-bold text-white whitespace-nowrap font-chakra">QRYPTUM</span>
            </div>
          </div>
          <nav className="w-[142px] h-[311px] flex flex-col space-y-[25px]">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  item.current ? "bg-[#1E2D3D] text-white" : "text-[#5D7290]",
                  "flex items-center w-[87px] h-[31px] px-2 text-sm font-medium rounded-md font-chakra"
                )}
              >
                <div className="flex items-center gap-[17px]">
                  <item.icon
                    className={cn(
                      item.current ? "text-[#0084FF]" : "text-[#5D7290]",
                      "flex-shrink-0 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                  <span>{item.name}</span>
                </div>
              </a>
            ))}
            <a
              href="#"
              className="flex items-center w-[87px] h-[31px] px-2 text-sm font-medium rounded-md text-[#FF3B3B] font-chakra"
            >
              <div className="flex items-center gap-[17px]">
                <LogOut className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span>Logout</span>
              </div>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
