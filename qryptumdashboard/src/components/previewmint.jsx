import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PreviewMint() {
  const navigate = useNavigate();

  const handleMint = () => {
    console.log("Minting contract...");
    navigate("/mintconfirmed");
  };

  return (
    <div className="flex h-screen w-screen bg-[#0F2942] justify-center items-center px-4">
      {/* Main Content Box */}
      <div className="w-full max-w-[724px] bg-[#0A1929] border border-[#1A3A5A] rounded-[37.26px] p-6 sm:p-8 flex flex-col items-center">
        
        {/* Heading */}
        <h1 className="text-white font-['Chakra_Petch'] font-bold text-[20px] sm:text-[24px] leading-[30.6px] tracking-[0.45px] mb-6 text-center">
          Preview & Mint
        </h1>

        {/* Contract Details */}
        <div className="w-full space-y-4">
          {[
            { label: "Contract:", value: "Lung_CT_Scan_Access_2024" },
            { label: "Access:", value: "Doctors, Radiologists" },
            { label: "Usage:", value: "Diagnostics only" },
            { label: "Expires:", value: "20 Nov 2024" },
            { label: "Security:", value: "Quantum-Encrypted", icon: <Lock className="w-4 h-4" /> }
          ].map(({ label, value, icon }, index) => (
            <div key={index} className="grid grid-cols-[auto,1fr] gap-2 sm:gap-4 w-full max-w-[500px]">
              <span className="text-[#8F9BB3] text-[16px] sm:text-[18px] font-medium text-right">
                {label}
              </span>
              <span className="text-white text-[14px] sm:text-[16px] font-medium flex items-center gap-1 text-left">
                {value} {icon}
              </span>
            </div>
          ))}
        </div>

        {/* Mint Button */}
        <div className="mt-6 w-full flex justify-center">
          <button
            onClick={handleMint}
            className="w-full max-w-[180px] h-[44px] rounded-[896px] bg-gradient-to-b from-[#00BBF7] to-[#0158C5] text-white text-[16px] font-medium"
          >
            Mint Contract
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewMint;
