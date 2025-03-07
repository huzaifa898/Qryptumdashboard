"use client"

import { useState, useCallback } from "react"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Fake map component to use without an API key
const FakeGoogleMap = ({ markers, onMapClick }) => {
  return (
    <div className="w-full h-full bg-[#0F2942] rounded-[12px] relative overflow-hidden">
      {/* Fake map background with grid lines */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="border border-[#1A3A5A] opacity-30"></div>
        ))}
      </div>

      {/* Fake roads */}
      <div className="absolute top-1/2 left-0 right-0 h-[10px] bg-[#38414e] opacity-50"></div>
      <div className="absolute top-1/4 left-0 right-0 h-[6px] bg-[#38414e] opacity-50"></div>
      <div className="absolute bottom-1/3 left-0 right-0 h-[8px] bg-[#38414e] opacity-50"></div>
      <div className="absolute left-1/2 top-0 bottom-0 w-[10px] bg-[#38414e] opacity-50"></div>
      <div className="absolute left-1/4 top-0 bottom-0 w-[6px] bg-[#38414e] opacity-50"></div>
      <div className="absolute right-1/3 top-0 bottom-0 w-[8px] bg-[#38414e] opacity-50"></div>

      {/* Fake water */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[150px] bg-[#17263c] rounded-tl-[100px] opacity-70"></div>

      {/* Fake markers */}
      {markers.map((marker, index) => {
        // Convert lat/lng to relative positions in the container
        const x = ((marker.lng + 180) / 360) * 100
        const y = ((90 - marker.lat) / 180) * 100

        return (
          <div
            key={index}
            className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="w-6 h-6 rounded-full bg-[#FF5555] flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
                  fill="#FF5555"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle cx="12" cy="10" r="3" fill="white" />
              </svg>
            </div>
          </div>
        )
      })}

      {/* Fake city names */}
      <div className="absolute top-1/4 left-1/4 text-[#d59563] text-xs opacity-70">Mexico City</div>
      <div className="absolute top-1/3 right-1/3 text-[#d59563] text-xs opacity-70">Puebla</div>
      <div className="absolute bottom-1/4 left-1/3 text-[#d59563] text-xs opacity-70">Cuernavaca</div>

      {/* Click handler overlay */}
      <div
        className="absolute inset-0 cursor-crosshair"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          // Convert to fake lat/lng
          const lng = (x / rect.width) * 360 - 180
          const lat = 90 - (y / rect.height) * 180

          onMapClick({
            latLng: {
              lat: () => lat,
              lng: () => lng,
            },
          })
        }}
      ></div>
    </div>
  )
}

export function SetParameters() {
  const [markers, setMarkers] = useState([
    { lat: 19.432608, lng: -99.133209 },
    { lat: 19.436, lng: -99.143 },
    { lat: 19.425, lng: -99.123 },
  ])
  const navigate = useNavigate()

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    ])
  }, [])

  return (
    <div className="bg-[#0A1929] border border-gray-600 rounded-[25px] md:rounded-[37.26px] w-[95%] md:w-[1176px] h-[600px] md:h-[684px] p-3 md:p-8 mx-auto overflow-hidden relative mt-[40px] md:mt-[78px]">
      {/* Header Section */}
      <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
        <button className="w-[24px] h-[24px] transform rotate-120" onClick={() => navigate(-1)}>
          <ArrowLeft className="text-white w-full h-full" />
        </button>
        <h1 className="text-white font-chakra text-lg md:text-[24px] font-semibold leading-tight md:leading-[30.6px] tracking-[0.45px] md:w-[182px] w-auto">
          Set Parameters
        </h1>
      </div>

      {/* Time Period Section */}
      <div className="mb-2 md:mb-8">
        <h2 className="text-white mb-1 md:mb-4 font-chakra text-base md:text-[18px] font-medium leading-tight md:leading-[18px] w-full md:w-[341px]">
          Time Period:
        </h2>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="flex flex-col gap-1 md:gap-2 w-full md:w-auto">
            <label className="text-white font-chakra text-xs md:text-[14px] font-medium leading-tight md:leading-[18px] w-full md:w-[341px]">
              From
            </label>
            <input
              type="text"
              className="w-full md:w-[341px] h-[35px] md:h-[41px] rounded-[48px] border border-gray-300 bg-[#FFFFFF] text-[#0A1929] px-[12px] py-[8px] md:py-[11px] font-chakra text-xs md:text-sm"
              placeholder="Type here..."
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-2 w-full md:w-auto">
            <label className="text-white font-chakra text-xs md:text-[14px] font-medium leading-tight md:leading-[18px] w-full md:w-[341px]">
              To
            </label>
            <input
              type="text"
              className="w-full md:w-[341px] h-[35px] md:h-[41px] rounded-[48px] border border-gray-300 bg-[#FFFFFF] text-[#0A1929] px-[12px] py-[8px] md:py-[11px] font-chakra text-xs md:text-sm"
              placeholder="Type here..."
            />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mb-2 md:mb-8">
        <label className="text-white block mb-1 md:mb-2 font-chakra text-xs md:text-[14px] font-medium leading-tight md:leading-[18px]">
          Location
        </label>
        <div className="relative w-full md:w-[1120px] h-[180px] md:h-[276px] border border-gray-600 rounded-[12px]">
          <FakeGoogleMap markers={markers} onMapClick={onMapClick} />

          <div className="absolute top-2 right-2 z-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Location..."
                className="w-[120px] md:w-[300px] h-[30px] md:h-[41px] rounded-[48px] border border-gray-300 pl-8 md:pl-10 pr-2 md:pr-3 bg-[#FFFFFF] text-[#0A1929] px-[8px] md:px-[12px] py-[6px] md:py-[11px] font-chakra text-xs md:text-sm"
              />
              <div className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-4 md:h-4"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="#0A1929"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-[277px] py-[6px] md:py-[9px] z-10">
            <button
              className="w-full md:w-[565px] h-[25px] md:h-[31px] rounded-[896px] text-white flex items-center justify-center bg-gradient-to-b from-[#00BBF7] to-[#0158C5] px-[10px] md:px-[20px] py-[10px] md:py-[15px] text-xs md:text-base"
              onClick={() => navigate("/scanning")}
            >
              Done
            </button>
          </div>
        </div>
      </div>

      {/* Renewal Section */}
      <div className="flex flex-col gap-1 md:gap-2 mb-2 md:mb-4">
        <label className="text-white font-chakra text-xs md:text-[14px] font-medium leading-tight md:leading-[18px]">
          Renewal
        </label>
        <input
          type="text"
          className="w-full md:w-[341px] h-[35px] md:h-[41px] rounded-[48px] border border-gray-300 bg-[#FFFFFF] text-[#0A1929] px-[12px] py-[8px] md:py-[11px] font-chakra text-xs md:text-sm"
          defaultValue="Auto-expire after 3 months."
        />
      </div>

      {/* Next Button - Fixed positioning */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8">
        <button
          className="w-[100px] md:w-[132px] h-[35px] md:h-[40px] rounded-[896px] text-white flex items-center justify-center bg-gradient-to-b from-[#00BBF7] to-[#0158C5] px-[10px] md:px-[20px] py-[10px] md:py-[15px] text-xs md:text-base"
          onClick={() => navigate("/encryption-security")}
        >
          Next <ArrowLeft className="ml-1 md:ml-2 transform rotate-180 w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  )
}

export default SetParameters

