import React, { useState } from "react";
import {
  Home,
  Database,
  Award,
  History,
  Settings,
  LogOut,
  ChevronRight,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";
import logo from "../images/logo.png";

const navigation = [
  { name: "Home", href: "#", icon: Home, current: false },
  { name: "Data", href: "#", icon: Database, current: false },
  { name: "Rewards", href: "#", icon: Award, current: false },
  { name: "History", href: "#", icon: History, current: false },
  { name: "Settings", href: "#", icon: Settings, current: false },
];

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Fancy Mobile Toggle Button (Not Fixed on Scroll) */}
      <div className="md:hidden absolute top-5 left-5 z-50">
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-full shadow-lg transition-all duration-300 ${
            isSidebarOpen ? "bg-red-500" : "bg-[#2088FF]"
          }`}
        >
          <ChevronRight
            size={22}
            className={`text-white transition-transform duration-300 ${
              isSidebarOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`absolute md:relative z-50 md:z-40 left-0 top-0 w-[230px] bg-[#0A1929] border border-[#2088FF] rounded-[40px] mt-5 transition-transform md:translate-x-0
          ${isSidebarOpen ? "translate-x-0 h-[90vh] overflow-y-auto" : "-translate-x-full h-[90vh]"} 
          md:block md:h-[880px] md:overflow-visible`}
      >
        <div className="flex flex-col items-center relative">
          {/* Close Button (Mobile Only) */}
          <button
            onClick={toggleSidebar}
            className="md:hidden absolute top-3 right-3 bg-[#FF3B3B] text-white p-1 rounded-full shadow-md"
          >
            <X size={20} />
          </button>

          {/* Logo */}
          <div className="flex items-center justify-center h-16 w-full mt-[30px] mb-[40px]">
            <div className="flex items-center gap-2 w-[154px] h-[39px]">
              <img src={logo || "/placeholder.svg"} alt="Qryptum Logo" className="h-[39px]" />
              <span className="text-xl font-bold text-white whitespace-nowrap font-chakra">
                QRYPTUM
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="w-[142px] flex flex-col space-y-[25px]">
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
            {/* Logout */}
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
    </>
  );
}
