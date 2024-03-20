import React, { useState } from "react";

export default function ChooseConsultation({ onSelectConsultation }) {
  const [selectedConsultation, setSelectedConsultation] = useState(null);

  const handleConsultationSelect = (consultation) => {
    setSelectedConsultation(consultation); // Update the selected consultation in the local state
    onSelectConsultation(consultation); // Pass the selected consultation to the parent component
  };

  return (
    <div>
      <div className="bg-[#FCF2FD] bottom-6  max-h-[268px] noscrollbar my-4 p-4 rounded-3xl  ">
        {/* <h3 className="text-[16px] text-[#AD648D] font-semibold border-b border-[#F5D3E7] my-1 p-1 pb-2 ">
          Video Call
        </h3>
        <h3 className="text-[16px] text-[#AD648D] font-semibold border-b border-[#F5D3E7] my-1 p-1 pb-2 ">
          Voice Call
        </h3>
        <h3 className="text-[20px]  bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text font-extrabold  my-1 p-1  ">
          Clinic Consultation
        </h3> */}
        <h3
          className={`text-[16px] font-semibold border-b border-[#F5D3E7] my-1 p-1 pb-2 cursor-pointer ${
            selectedConsultation === "Video Call" ? "text-[#AD648D]" : ""
          }`}
          onClick={() => handleConsultationSelect("Video Call")}
        >
          Video Call
        </h3>
        <h3
          className={`text-[16px] font-semibold border-b border-[#F5D3E7] my-1 p-1 pb-2 cursor-pointer ${
            selectedConsultation === "Voice Call" ? "text-[#AD648D]" : ""
          }`}
          onClick={() => handleConsultationSelect("Voice Call")}
        >
          Voice Call
        </h3>
        <h3
          className={`text-[20px] font-extrabold my-1 p-1 cursor-pointer ${
            selectedConsultation === "Clinic Consultation"
              ? "text-[#AD37E0]"
              : ""
          }`}
          onClick={() => handleConsultationSelect("Clinic Consultation")}
        >
          Clinic Consultation
        </h3>
      </div>
    </div>
  );
}
