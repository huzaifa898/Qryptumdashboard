import { ArrowLeft } from "lucide-react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { useNavigate } from "react-router-dom";

export function EncryptionSecurity() {
  const navigate = useNavigate();

  // Function to handle going back to the previous page
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page in history
  };

  // Function to handle going to the next page
  const handleNext = () => {
    navigate("/previewmint"); // Navigate to the next step page
  };

  return (
    <div className="flex h-screen w-screen bg-[#0F2942] flex-col md:flex-row">
      <Sidebar className="hidden md:block" />
      <div className="flex flex-col flex-grow">
        <Header />

        {/* Main Content Box */}
        <div className="flex justify-center mt-6 md:mt-[78px] px-4 md:px-0">
          <div className="w-full max-w-[1176px] bg-[#0A1929] border border-gray-600 rounded-[20px] md:rounded-[37.26px] p-6 md:p-8">
            {/* Header with Back Arrow */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <button
                className="w-6 h-6 transform rotate-120 hover:opacity-80 transition-opacity"
                onClick={handleBack}
              >
                <ArrowLeft className="text-white w-full h-full" />
              </button>
              <h1 className="text-white font-['Chakra_Petch'] text-lg md:text-2xl font-semibold w-full md:w-[369px]">
                Encryption & Quantum Security
              </h1>
            </div>

            {/* Encryption Level Input with Checkbox */}
            <div className="mb-4 md:mb-6">
              <label className="block text-white font-['Chakra_Petch'] text-sm md:text-base font-medium leading-[18px] mb-2">
                Encryption Level 🔒
              </label>
              <div className="relative w-full md:w-[341px]">
                <input
                  type="text"
                  value="Quantum-Secure (QSP)"
                  readOnly
                  className="w-full h-[41px] rounded-[48px] border border-gray-300 bg-[#FFFFFF] text-[#0A1929] px-4 py-[11px] font-['Chakra_Petch'] pr-10"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <input
                    type="checkbox"
                    id="qsp-enabled"
                    defaultChecked
                    className="w-4 h-4 text-[#0158C5] bg-[#1E2A3A] rounded focus:ring-0"
                  />
                </div>
              </div>
            </div>

            {/* Warning Message */}
            <div className="flex items-center">
              <p className="text-red-500 font-['Chakra_Petch'] text-xs md:text-sm font-medium tracking-[0.45px]">
                Warning: "Do not disable QSP for sensitive data"
              </p>
            </div>

            {/* Next Button */}
            <div className="flex justify-end mt-4 md:mt-6">
              <button
                className="w-full md:w-[132px] h-[40px] rounded-[896px] bg-gradient-to-b from-[#00BBF7] to-[#0158C5] text-white font-['Chakra_Petch'] flex items-center justify-center gap-2.5 px-5 py-[15px] hover:opacity-90 transition-opacity"
                onClick={handleNext}
              >
                Next <ArrowLeft className="w-4 h-4 transform -rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EncryptionSecurity;
