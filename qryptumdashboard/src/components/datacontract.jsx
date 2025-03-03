import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Sidebar } from './sidebar';
import { Header } from './header';
import { ArrowLeft } from 'lucide-react'; // Changed to ArrowLeft for back functionality
import { ArrowRight } from 'lucide-react'; // Added ArrowRight for next functionality

export function Datacontract() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNextClick = () => {
    navigate("/parmeters"); // Navigate to parameters page
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-[1576px] w-full h-[355px] bg-[#0A1929] border border-[#0158C5] rounded-[37.26px] flex flex-col p-4">
            {/* Back Arrow and Define Rules Heading */}
            <div className="flex items-center mb-4">
              <button className="text-white hover:text-gray-300 mr-4" onClick={handleBackClick}>
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-white font-chakra font-semibold text-[24px] leading-[30.6px] tracking-[0.45px] w-[153px] h-[31px]">
                Define Rules
              </h1>
            </div>

            {/* Input Fields with Labels in One Line */}
            <div className="flex flex-wrap gap-4 mb-4">
              {/* Contract Name Label and Input */}
              <div className="flex flex-col w-full md:w-[341px]">
                <label className="text-white font-chakra font-medium text-[14px] leading-[20px] tracking-[0.2px] mb-2 w-full md:w-[341px] h-[20px]">
                  Contract Name
                </label>
                <div className="w-full md:w-[341px] h-[41px] bg-[#1E2A3A] border border-[#0158C5] rounded-[48px] flex items-center px-[12px] py-[11px] gap-[10px]">
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="bg-transparent text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] outline-none w-full"
                  />
                </div>
              </div>

              {/* Industry Label and Dropdown */}
              <div className="flex flex-col w-full md:w-[341px]">
                <label className="text-white font-chakra font-medium text-[14px] leading-[20px] tracking-[0.2px] mb-2 w-full md:w-[341px] h-[20px]">
                  Industry
                </label>
                <div className="w-full md:w-[341px] h-[41px] bg-[#1E2A3A] border border-[#0158C5] rounded-[48px] flex items-center px-[12px] py-[11px] gap-[10px]">
                  <select
                    className="bg-transparent text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] outline-none w-full appearance-none"
                  >
                    <option value="" disabled selected>Healthcare</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                  </select>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Allowed Roles Label and Dropdown */}
              <div className="flex flex-col w-full md:w-[341px]">
                <label className="text-white font-chakra font-medium text-[14px] leading-[20px] tracking-[0.2px] mb-2 w-full md:w-[341px] h-[20px]">
                  Allowed Roles
                </label>
                <div className="w-full md:w-[341px] h-[41px] bg-[#1E2A3A] border border-[#0158C5] rounded-[48px] flex items-center px-[12px] py-[11px] gap-[10px]">
                  <select
                    className="bg-transparent text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] outline-none w-full appearance-none"
                  >
                    <option value="" disabled selected>Doctors</option>
                    <option value="doctors">Doctors</option>
                    <option value="nurses">Nurses</option>
                  </select>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Usage Restrictions Label and Dropdown */}
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex flex-col">
                <label className="text-white font-chakra font-medium text-[14px] leading-[20px] tracking-[0.2px] mb-2 w-[341px] h-[20px]">
                  Usage Restrictions
                </label>
                <div className="w-[341px] h-[41px] bg-[#1E2A3A] border border-[#0158C5] rounded-[48px] flex items-center px-[12px] py-[11px] gap-[10px]">
                  <select
                    className="bg-transparent text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] outline-none w-full appearance-none"
                  >
                    <option value="" disabled selected>Diagnostics only</option>
                    <option value="diagnostics">Diagnostics only</option>
                    <option value="commercial">Commercial use</option>
                  </select>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#0158C5] bg-[#1E2A3A] border border-[#0158C5] rounded focus:ring-0"
              />
              <label className="text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] ml-2">
                Allow anonymized data for research?
              </label>
            </div>

            {/* Next Button Inside Box on Right Side */}
            <div className="flex justify-end mt-auto">
              <button className="bg-[#0158C5] text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] rounded-[48px] px-6 py-2 flex items-center gap-2" onClick={handleNextClick}>
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Datacontract;