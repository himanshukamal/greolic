import React, { useState } from "react";

const DateSelector = ({ onSelectDate }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    onSelectDate(DateData[index].date); // Pass the selected date to the parent component
  };

  return (
    <div className="flex gap-x-4 pb-6 pt-1 noscrollbar max-w-[360px] overflow-y-scroll">
      {DateData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center text-${
            activeIndex === index ? "white" : "black"
          } 
                      min-w-[86px] h-[53px] rounded-[20px] ${
                        activeIndex === index
                          ? "bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] drop-shadow-lg shadow-lg shadow-rose-400"
                          : "bg-white"
                      }`}
          onClick={() => handleButtonClick(index)}
        >
          <h3
            className={`text-[13px] ${
              activeIndex === index ? "font-black" : ""
            }`}
          >
            {item.date}
          </h3>
          <p
            className={`text-[10px] ${
              activeIndex === index ? "font-black" : "text-[#895472]"
            }`}
          >
            {item.day}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DateSelector;

const DateData = [
  { date: "12 Dec", day: "Mon" },
  { date: "13 Dec", day: "Tue" },
  { date: "14 Dec", day: "Wed" },
  { date: "15 Dec", day: "Thr" },
];
