"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Sidebar } from "./sidebar"
import { Header } from "./header"

export function Metadata() {
  const navigate = useNavigate()

  // State for dropdown values and visibility
  const [dataType, setDataType] = useState("Medical")
  const [dataTypeOpen, setDataTypeOpen] = useState(false)

  const [tags, setTags] = useState("Medical Imaging")
  const [tagsOpen, setTagsOpen] = useState(false)

  const handleNext = () => {
    navigate("/scanning")
  }

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="w-full max-w-[1576px] h-auto lg:h-[398px] bg-[#0A1929] rounded-[37.26px] border border-[#0158C5] p-4 sm:p-6 lg:p-8 relative mx-auto">
            {/* Back Button and Title */}
            <div className="flex items-center gap-2 mb-6">
              <button className="text-white hover:text-gray-300" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-xl sm:text-2xl font-semibold text-white font-chakra">Add Metadata</h1>
            </div>

            {/* Input Fields Container */}
            <div className="flex flex-col space-y-6">
              {/* Row of 3 inputs */}
              <div className="flex flex-wrap gap-[10px] md:gap-4">
                {/* Dataset Name Input */}
                <div className="flex flex-col w-full md:flex-1">
                  <label className="text-white font-chakra font-medium text-sm sm:text-[14px] mb-2">
                    Dataset Name
                  </label>
                  <div className="w-full h-[41px] rounded-[48px] border border-gray-300 bg-[#FFFFFF] flex items-center px-[12px] py-[11px]">
                    <input
                      type="text"
                      placeholder="Type Here"
                      className="bg-transparent text-[#0A1929] font-chakra font-medium text-[16px] outline-none w-full"
                    />
                  </div>
                </div>

                {/* Data Type Dropdown */}
                <div className="flex flex-col w-full md:flex-1">
                  <label className="text-white font-chakra font-medium text-sm sm:text-[14px] mb-2">
                    Data Type
                  </label>
                  <div className="relative">
                    <div
                      className="w-full h-[41px] bg-[#FFFFFF] rounded-[48px] flex items-center px-[12px] py-[11px] cursor-pointer"
                      onClick={() => setDataTypeOpen(!dataTypeOpen)}
                    >
                      <div className="bg-[#0158C5] text-white px-2 py-0.5 rounded-md font-chakra font-medium text-[16px]">
                        {dataType}
                      </div>
                      <div className="flex-grow"></div>
                      <ChevronDown className="w-5 h-5 text-[#0A1929]" />
                    </div>

                    {dataTypeOpen && (
                      <div className="absolute top-[45px] left-0 w-full bg-[#0A1929] border border-[#0158C5] rounded-md shadow-lg z-10">
                        <div
                          className="px-4 py-2 text-white hover:bg-[#0158C5] cursor-pointer transition-colors duration-150"
                          onClick={() => {
                            setDataType("Medical")
                            setDataTypeOpen(false)
                          }}
                        >
                          Medical
                        </div>
                        <div
                          className="px-4 py-2 text-white hover:bg-[#0158C5] cursor-pointer transition-colors duration-150"
                          onClick={() => {
                            setDataType("Financial")
                            setDataTypeOpen(false)
                          }}
                        >
                          Financial
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tags Input */}
                <div className="flex flex-col w-full md:flex-1">
                  <label className="text-white font-chakra font-medium text-sm sm:text-[14px] mb-2">Tags</label>
                  <div className="relative">
                    <div
                      className="w-full h-[41px] bg-[#FFFFFF] rounded-[48px] flex items-center px-[12px] py-[11px] cursor-pointer"
                      onClick={() => setTagsOpen(!tagsOpen)}
                    >
                      <div className="bg-[#0158C5] text-white px-2 py-0.5 rounded-md font-chakra font-medium text-[16px]">
                        {tags}
                      </div>
                      <div className="flex-grow"></div>
                      <ChevronDown className="w-5 h-5 text-[#0A1929]" />
                    </div>

                    {tagsOpen && (
                      <div className="absolute top-[45px] left-0 w-full bg-[#0A1929] border border-[#0158C5] rounded-md shadow-lg z-10">
                        <div
                          className="px-4 py-2 text-white hover:bg-[#0158C5] cursor-pointer transition-colors duration-150"
                          onClick={() => {
                            setTags("Medical Imaging")
                            setTagsOpen(false)
                          }}
                        >
                          Medical Imaging
                        </div>
                        <div
                          className="px-4 py-2 text-white hover:bg-[#0158C5] cursor-pointer transition-colors duration-150"
                          onClick={() => {
                            setTags("Other")
                            setTagsOpen(false)
                          }}
                        >
                          Other
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Description Textarea */}
              <div className="flex flex-col">
                <label className="text-white font-chakra font-medium text-sm sm:text-[14px] mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Type Here"
                  className="w-full h-[120px] rounded-[11.61px] border border-gray-300 bg-[#FFFFFF] text-[#0A1929] p-3 font-chakra font-medium text-[16px] focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Next Button */}
            <div className="w-full flex justify-end mt-4">
              <button
                className="w-[132px] h-[40px] bg-gradient-to-b from-[#00BBF7] to-[#0158C5] text-white rounded-[896px] mb-3 px-5 py-[15px] flex items-center justify-center gap-[10px] shadow-lg text-sm font-medium"
                onClick={handleNext}
              >
                Next <ArrowRight className="w-5 h-5 rotate-60" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Metadata
