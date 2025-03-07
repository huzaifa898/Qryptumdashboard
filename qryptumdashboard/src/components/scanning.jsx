"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export function Scanning() {
  const [progress, setProgress] = useState(0)
  const [showMissingFields, setShowMissingFields] = useState(false)
  const [showDuplicateEntries, setShowDuplicateEntries] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const firstStage = setTimeout(() => {
      setProgress(10)
      setShowMissingFields(true)
    }, 1000)

    const secondStage = setTimeout(() => {
      setProgress(30)
      setShowDuplicateEntries(true)
    }, 2500)

    const thirdStage = setTimeout(() => {
      setProgress(100)
    }, 4000)

    const finalStage = setTimeout(() => {
      setShowButton(true)
    }, 4500)

    return () => {
      clearTimeout(firstStage)
      clearTimeout(secondStage)
      clearTimeout(thirdStage)
      clearTimeout(finalStage)
    }
  }, [])

  const handleProceed = () => {
    navigate("/confirmation")
  }

  return (
    <div className="w-screen h-screen bg-[#0F2942] flex flex-col items-center justify-center px-4 md:px-0">
      <h1 className="text-white font-chakra font-semibold text-lg md:text-[24px] leading-[30.6px] tracking-[0.45px] mb-6 text-center">
        {progress < 100 ? "AI IS SCANNING YOUR DATA" : "Validation Complete!"}
      </h1>
      <div className="relative w-full max-w-[558px] h-[8px] bg-gray-700 rounded-[37.26px] border border-gray-500 mb-6">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00BBF7] to-[#0158C5] rounded-[37.26px] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full max-w-[90%] md:max-w-[558px]">
        {showMissingFields && (
          <div className="flex items-center gap-2 text-center">
            <span className="text-white font-chakra font-medium text-sm md:text-[14px] leading-[30.6px] tracking-[0.45px]">
              No missing fields detected
            </span>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
        )}

        {showDuplicateEntries && (
          <div className="flex items-center gap-2 text-center">
            <span className="text-white font-chakra font-medium text-sm md:text-[14px] leading-[30.6px] tracking-[0.45px]">
              12% duplicate entries found (non-critical)
            </span>
            <CheckCircle className="w-5 h-5 text-yellow-500" />
          </div>
        )}

        {showButton && (
          <button
            className="w-full max-w-[180px] h-[44px] bg-gradient-to-b from-[#00BBF7] to-[#0158C5] text-white rounded-full px-5 py-[10px] flex items-center justify-center gap-[10px] text-sm font-medium mt-4 hover:opacity-90 transition-opacity"
            onClick={handleProceed}
          >
            Proceed
          </button>
        )}
      </div>
    </div>
  )
}

export default Scanning
