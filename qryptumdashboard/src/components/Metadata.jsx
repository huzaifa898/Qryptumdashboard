import React from "react";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export function Metadata() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="w-full max-w-[1576px] h-[383px] bg-[#0A1929] rounded-[37.26px] border border-[#0158C5] p-4 sm:p-6 lg:p-8 relative mx-auto">
            {/* Back Button and Title */}
            <div className="flex items-center gap-2 mb-6">
              <button 
                className="text-white hover:text-gray-300"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="w-[162px] h-[31px] text-2xl font-semibold text-white font-chakra">Add Metadata</h1>
            </div>

            {/* Input Fields Container */}
            <div className="flex flex-col space-y-6">
              {/* Row of 3 inputs */}
              <div className="flex flex-wrap gap-[10px]">
                {/* Dataset Name Input */}
                <div className="flex flex-col flex-1">
                  <label className="text-white font-chakra font-medium text-[14px] leading-[18px] mb-2">Dataset Name</label>
                  <input
                    type="text"
                    placeholder="type Here"
                    className="w-full h-[41px] rounded-[48px] border border-[#0158C5]  text-black px-[12px] py-[11px] focus:outline-none focus:border-[#00BBF7]"
                  />
                </div>
                
                {/* Data Type Dropdown */}
                <div className="flex flex-col flex-1">
                  <label className="text-white font-chakra font-medium text-[14px] leading-[18px] mb-2">Data Type</label>
                  <select
                    className="w-full h-[41px] rounded-[48px] border border-[#0158C5]  text-black px-[12px] py-[11px] focus:outline-none focus:border-[#00BBF7] appearance-none"
                  >
                    <option value="">type here</option>
                    <option value="medical">Medical</option>
                    <option value="financial">Financial</option>
                  </select>
                </div>

                {/* Tags Input */}
                <div className="flex flex-col flex-1">
                  <label className="text-white font-chakra font-medium text-[14px] leading-[18px] mb-2">Tags</label>
                  <select
                    className="w-full h-[41px] rounded-[48px] border border-[#0158C5]  text-black px-[12px] py-[11px] focus:outline-none focus:border-[#00BBF7] appearance-none"
                  >
                    <option value="medical-imaging">Medical Imaging</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Description Textarea */}
              <div className="flex flex-col">
                <label className="text-white font-chakra font-medium text-[14px] leading-[18px] mb-2">Description</label>
                <textarea
                  placeholder="Type Here"
                  className="w-full h-[120px] rounded-[11.61px] border border-[#0158C5]  text-black p-3 focus:outline-none focus:border-[#00BBF7] resize-none"
                />
              </div>
            </div>

            {/* Next Button */}
            <div className="absolute bottom-1 right-8">
              <button className="w-[132px] h-[40px] bg-gradient-to-b from-[#00BBF7] to-[#0158C5] text-white rounded-[896px] px-5 py-[15px] flex items-center justify-center gap-[10px] shadow-[0px_7px_80px_-12px_#5566FF] text-sm font-medium">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}