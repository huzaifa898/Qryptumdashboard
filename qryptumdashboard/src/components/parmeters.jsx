import React from "react";
import { Sidebar } from "./sidebar"; // Adjust path as needed
import {Header} from "./header"; // Adjust path as needed
 function parmeters ({ children }) {
  return (
    <div className="flex h-screen w-screen bg-[#0F2942]">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <Header />
        
        {/* Main Content Box */}
        <div 
          className="bg-[#0A1929] border border-gray-600 rounded-[37.26px] w-[1176px] h-[674px] mx-auto mt-[78px]"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default parmeters;