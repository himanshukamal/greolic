import React, { useState } from "react";

const TimeSelector = ({ onSelectTime }) => {
  const [activePeriod, setActivePeriod] = useState("morning");
  const [activeTime, setActiveTime] = useState(null);

  const handleButtonClick = (period, time) => {
    setActivePeriod(period);
    setActiveTime(time);
    onSelectTime(time); // Pass the selected time to the parent component
  };

  const renderTimeButtons = (period, timeData) => {
    return timeData.map((time, index) => (
      <div
        key={index}
        className={`flex flex-col justify-center items-center text-black bg-${
          activePeriod === period && activeTime === time
            ? "[#FCF2FD]"
            : "[#FCF2FD]"
        } w-[70px] h-[30px] rounded-[20px] ${
          activePeriod === period && activeTime === time
            ? "bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] drop-shadow-lg shadow-lg shadow-rose-400"
            : ""
        }`}
        onClick={() => handleButtonClick(period, time)}
      >
        <h3
          className={`text-[10px] ${
            activePeriod === period && activeTime === time
              ? "text-white font-black"
              : "text-[#CCA5CF] font-black"
          }`}
        >
          {time}
        </h3>
      </div>
    ));
  };

  const timeData = {
    morning: ["09:00 am", "10:00 am", "11:00 am"],
    afternoon: ["01:00 pm", "02:00 pm", "03:00 pm"],
    evening: ["06:00 pm", "07:00 pm", "08:00 pm"],
  };

  return (
    <div className="bg-[#fff] bottom-6 max-w-[368px] min-h-[271px] my-2 py-4 px-4 rounded-3xl">
      <h3 className="mt-2 mb-2 mx-2 text-[13px] font-bold text-[#895472] ">
        Time
      </h3>

      {/* Morning */}
      <>
        <h3 className="mt-2 mb-2 mx-2 text-[13px] font-bold text-[#895472] ">
          Morning
        </h3>
        <div className="flex flex-wrap gap-2 p-1">
          {renderTimeButtons("morning", timeData.morning)}
        </div>
      </>

      {/* Afternoon */}
      <>
        <h3 className="mt-2 mb-2 mx-2 text-[13px] font-bold text-[#895472] ">
          Afternoon
        </h3>
        <div className="flex flex-wrap gap-2 p-1">
          {renderTimeButtons("afternoon", timeData.afternoon)}
        </div>
      </>

      {/* Evening */}
      <>
        <h3 className="mt-2 mb-2 mx-2 text-[13px] font-bold text-[#895472] ">
          Evening
        </h3>
        <div className="flex flex-wrap gap-2 p-1">
          {renderTimeButtons("evening", timeData.evening)}
        </div>
      </>
    </div>
  );
};

export default TimeSelector;
