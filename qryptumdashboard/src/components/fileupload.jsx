import React from "react";
import { ArrowLeft, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export function FileUpload() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/metadata');
  };

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="w-full max-w-[1576px] min-h-[407px] bg-[#0A1929] rounded-[37.26px] border border-[#0158C5] p-4 sm:p-6 lg:p-8 relative mx-auto">
            {/* Back Button and Title */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <button 
                className="text-white hover:text-gray-300"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <h1 className="text-xl sm:text-2xl font-semibold text-white font-chakra">Upload File</h1>
            </div>

            {/* Upload Box */}
            <div className="w-full h-full min-h-[200px] border border-dashed border-[#0158C5] rounded-[11.61px] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
              <div className="w-full max-w-[176px] flex flex-col items-center justify-center gap-4 sm:gap-6">
                <div className="rounded-full bg-[#0158C5]/10 p-3 sm:p-4">
                  <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-[#0084FF]" />
                </div>
                <div className="text-center">
                  <p className="text-white font-medium mb-2">Browse files Here</p>
                  <p className="text-gray-400 text-sm">Or drag & drop</p>
                </div>
              </div>
            </div>

            {/* Supported Formats Text */}
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-4">
              Supported formats listed here...
            </p>

            {/* Next Button */}
            <div className="mt-6 flex justify-end">
              <button 
                className="w-[132px] h-[40px] bg-gradient-to-b from-[#00BBF7] to-[#0158C5] text-white rounded-[896px] px-5 py-[15px] flex items-center justify-center gap-[10px] shadow-[0px_7px_80px_-12px_#5566FF] text-sm font-medium"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}