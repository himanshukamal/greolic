import React, { useState } from "react";

const ChooseServices = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative ">
      <div className="mt-6 relative bg-[#FCF2FD] bottom-6 max-h-[268px] noscrollbar my-4 p-4 rounded-3xl">
        <div className="flex flex-col space-y-2">
          <h3
            className={`text-[16px] text-[#AD648D] font-semibold border-b border-[#F5D3E7] p-1 pb-2 ${
              selectedOption === "Dental Braces"
                ? " p-1 text-[20px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text font-extrabold"
                : ""
            }`}
            onClick={() => handleOptionClick("Dental Braces")}
          >
            Dental Braces
          </h3>
          <h3
            className={`text-[16px] text-[#AD648D] font-semibold border-b border-[#F5D3E7] p-1 pb-2 ${
              selectedOption === "Dental Crown"
                ? " p-1 text-[20px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text font-extrabold"
                : ""
            }`}
            onClick={() => handleOptionClick("Dental Crown")}
          >
            Dental Crown
          </h3>
          <div className="flex justify-between items-center border-b border-[#F5D3E7] pb-2">
            <h3
              className={` text-[#AD648D] font-semibold ${
                selectedOption === "Tooth Extraction"
                  ? " p-1 text-[20px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text font-extrabold"
                  : ""
              }`}
              onClick={() => handleOptionClick("Tooth Extraction")}
            >
              Tooth Extraction
            </h3>
            <div className="flex flex-col justify-center py-2 text-white w-[66px] h-[24px] rounded-[20px] bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B]  drop-shadow shadow-md shadow-rose-400">
              <h3 className="text-[10px] font-black text-center">Rs.300</h3>
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-[#F5D3E7] pb-2">
            <h3
              className={` text-[#AD648D] font-semibold ${
                selectedOption === "Root Canal"
                  ? " p-1 text-[20px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text font-extrabold"
                  : ""
              }`}
              onClick={() => handleOptionClick("Root Canal")}
            >
              Root Canal
            </h3>
            <div className="flex flex-col justify-center py-2 text-white w-[66px] h-[24px] rounded-[20px] bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B]  drop-shadow shadow-md shadow-rose-400">
              <h3 className="text-[10px] font-black text-center">Rs.300</h3>
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-[#F5D3E7] pb-2">
            <h3
              className={` text-[#AD648D] font-semibold ${
                selectedOption === "Whitening"
                  ? " p-1 text-[20px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text font-extrabold"
                  : ""
              }`}
              onClick={() => handleOptionClick("Whitening")}
            >
              Whitening
            </h3>
            <div className="flex flex-col justify-center py-2 text-white w-[66px] h-[24px] rounded-[20px] bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B]  drop-shadow shadow-md shadow-rose-400">
              <h3 className="text-[10px] font-black text-center">Rs.300</h3>
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-[#F5D3E7] pb-2">
            <h3
              className={` text-[#AD648D] font-semibold ${
                selectedOption === "Tooth Straightening"
                  ? " p-1 text-[20px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text font-extrabold"
                  : ""
              }`}
              onClick={() => handleOptionClick("Tooth Straightening")}
            >
              Tooth Straightening
            </h3>
            <div className="flex flex-col justify-center py-2 text-white w-[66px] h-[24px] rounded-[20px] bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B]  drop-shadow shadow-md shadow-rose-400">
              <h3 className="text-[10px] font-black text-center">Rs.300</h3>
            </div>
          </div>
          {/* Repeat for other options */}
        </div>
      </div>
    </div>
  );
};

export default ChooseServices;
