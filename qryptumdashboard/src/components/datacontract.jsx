"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react"

export function Datacontract() {
  const navigate = useNavigate()

  // State for selected values
  const [industry, setIndustry] = useState("Healthcare")
  const [roles, setRoles] = useState("Doctors")
  const [restrictions, setRestrictions] = useState("Diagnostics only")

  // State for dropdown visibility
  const [industryOpen, setIndustryOpen] = useState(false)
  const [rolesOpen, setRolesOpen] = useState(false)
  const [restrictionsOpen, setRestrictionsOpen] = useState(false)

  const handleNextClick = () => {
    navigate("/parmeters")
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-[1576px] w-full h-auto bg-[#0A1929] border border-[#0158C5] rounded-[37.26px] flex flex-col p-4">
            <div className="flex items-center mb-4">
              <button className="text-white hover:text-gray-300 mr-4" onClick={handleBackClick}>
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-white font-chakra font-semibold text-[24px] leading-[30.6px] tracking-[0.45px]">
                Define Rules
              </h1>
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex flex-col w-full md:w-[341px]">
                <label className="text-white font-chakra font-medium text-[14px] leading-[20px] tracking-[0.2px] mb-2">
                  Contract Name
                </label>
                <div className="w-full h-[41px] bg-[#FFFFFF] rounded-[48px] flex items-center px-[12px] py-[11px] gap-[10px]">
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="bg-transparent text-[#0A1929] font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] outline-none w-full"
                  />
                </div>
              </div>

              {/* Custom Industry Dropdown */}
              <div className="flex flex-col w-full md:w-[341px]">
                <label className="text-white font-chakra font-medium text-[14px] leading-[20px] tracking-[0.2px] mb-2">
                  Industry
                </label>
                <div className="relative">
                  <div
                    className="w-full h-[41px] bg-[#FFFFFF] rounded-[48px] flex items-center px-[12px] py-[11px] gap-[10px] cursor-pointer"
                    onClick={() => setIndustryOpen(!industryOpen)}
                  >
                    <div className="bg-[#0158C5] text-white px-2 py-0.5 rounded-md font-chakra font-medium text-[16px]">
                      {industry}
                    </div>
                    <div className="flex-grow"></div>
                    <ChevronDown className="w-5 h-5 text-[#0A1929]" />
                  </div>

                  {industryOpen && (
                    <div className="absolute top-[45px] left-0 w-full bg-[#0A1929] border border-[#0158C5] rounded-md shadow-lg z-10">
                      <div
                        className="px-4 py-2 text-white hover:bg-[#0158C5] cursor-pointer transition-colors duration-150"
                        onClick={() => {
                          setIndustry("Healthcare")
                          setIndustryOpen(false)
                        }}
                      >
                        Healthcare
                      </div>
                      <div
                        className="px-4 py-2 text-white hover:bg-[#0158C5] cursor-pointer transition-colors duration-150"
                        onClick={() => {
                          setIndustry("Finance")
                          setIndustryOpen(false)
                        }}
                      >
                        Finance
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Custom Roles Dropdown */}
              <div className="flex flex-col w-full md:w-[341px]">
                <label className="text-white font-chakra font-medium text-[14px] leading-[20px] tracking-[0.2px] mb-2">
                  Allowed Roles
                </label>
                <div className="relative">
                  <div
                    className="w-full h-[41px] bg-[#FFFFFF] rounded-[48px] flex items-center px-[12px] py-[11px] gap-[10px] cursor-pointer"
                    onClick={() => setRolesOpen(!rolesOpen)}
                  >
                    <div className="bg-[#0158C5] text-white px-2 py-0.5 rounded-md font-chakra font-medium text-[16px]">
                      {roles}
                    </div>
                    <div className="flex-grow"></div>
                    <ChevronDown className="w-5 h-5 text-[#0A1929]" />
                  </div>

                  {rolesOpen && (
                    <div className="absolute top-[45px] left-0 w-full bg-[#0A1929] border border-[#0158C5] rounded-md shadow-lg z-10">
                      <div
                        className="px-4 py-2 text-white hover:bg-[#0158C5] cursor-pointer transition-colors duration-150"
                        onClick={() => {
                          setRoles("Doctors")
                          setRolesOpen(false)
                        }}
                      >
                        Doctors
                      </div>
                      <div
                        className="px-4 py-2 text-white hover:bg-[#0158C5] cursor-pointer transition-colors duration-150"
                        onClick={() => {
                          setRoles("Nurses")
                          setRolesOpen(false)
                        }}
                      >
                        Nurses
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              {/* Custom Restrictions Dropdown */}
              <div className="flex flex-col w-full md:w-[341px]">
                <label className="text-white font-chakra font-medium text-[14px] leading-[20px] tracking-[0.2px] mb-2">
                  Usage Restrictions
                </label>
                <div className="relative">
                  <div
                    className="w-full h-[41px] bg-[#FFFFFF] rounded-[48px] flex items-center px-[12px] py-[11px] gap-[10px] cursor-pointer"
                    onClick={() => setRestrictionsOpen(!restrictionsOpen)}
                  >
                    <div className="bg-[#0158C5] text-white px-2 py-0.5 rounded-md font-chakra font-medium text-[16px]">
                      {restrictions}
                    </div>
                    <div className="flex-grow"></div>
                    <ChevronDown className="w-5 h-5 text-[#0A1929]" />
                  </div>

                  {restrictionsOpen && (
                    <div className="absolute top-[45px] left-0 w-full bg-[#0A1929] border border-[#0158C5] rounded-md shadow-lg z-10">
                      <div
                        className="px-4 py-2 text-white hover:bg-[#0158C5] cursor-pointer transition-colors duration-150"
                        onClick={() => {
                          setRestrictions("Diagnostics only")
                          setRestrictionsOpen(false)
                        }}
                      >
                        Diagnostics only
                      </div>
                      <div
                        className="px-4 py-2 text-white hover:bg-[#0158C5] cursor-pointer transition-colors duration-150"
                        onClick={() => {
                          setRestrictions("Commercial use")
                          setRestrictionsOpen(false)
                        }}
                      >
                        Commercial use
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <input type="checkbox" className="w-4 h-4 text-[#0158C5] bg-[#1E2A3A] rounded focus:ring-0" />
              <label className="text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] ml-2">
                Allow anonymized data for research?
              </label>
            </div>

            <div className="flex justify-end mt-auto">
              <button
                className="bg-gradient-to-b from-[#00BBF7] to-[#0158C5] w-[132px] h-[40px] text-white font-chakra font-medium text-[16px] leading-[30.6px] tracking-[0.45px] rounded-[48px] px-[20px] py-[15px] flex items-center justify-center gap-2"
                onClick={handleNextClick}
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Datacontract

