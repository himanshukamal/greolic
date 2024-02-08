import React, { useState } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";
import "@fontsource/league-spartan";

const data = [
  { name: "A", value: 40, color: "#E6AD6D" },
  { name: "B", value: 5, color: "#A98AFF" },
  { name: "C", value: 10, color: "#E957C9" },
];

const CustomTooltip = () => {
  return (
    <div className=" drop-shadow-lg custom-tooltip rounded-lg   bg-[transparent]  w-[118px] h-[58px] backdrop-blur-2xl flex justify-start items-center">
      <div className="w-fit rotate-[-90deg]">
        <p className="text-[#E4AC6E] text-[10px] font-semibold border-b border-dashed">
          this Month
        </p>
      </div>

      <div className=" flex flex-col items-center">
        <h3 className="mb-[0.2em] text-[26px] font-black leading-4 text-white">
          5K+
        </h3>
        <p className="text-[12px] leading-4 text-white font-bold">patients</p>
      </div>
    </div>
  );
};

const Statchart = () => {
  const [activeBar, setActiveBar] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleBarClick = (entry, event, index) => {
    setActiveBar(index);
    const { clientX, clientY } = event;
    setTooltipPosition({ x: clientX, y: clientY });
  };

  const handleChartLeave = () => {
    setActiveBar(null);
  };

  return (
    <div style={{ display: "flex", width: "208px", height: "175px" }}>
      {data.map((entry, index) => (
        <div key={`bar-${index}`} style={{ height: "175px", width: "100px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[entry]} onMouseLeave={handleChartLeave}>
              <defs>
                <linearGradient
                  id={`colorGradient-${index}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={entry.color} stopOpacity={1} />
                  <stop offset="95%" stopColor={entry.color} stopOpacity={0} />
                </linearGradient>
              </defs>
              {/* <Tooltip content={<CustomTooltip />} /> */}
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Bar
                dataKey="value"
                fill={`url(#colorGradient-${index})`}
                radius={[30, 30, 0, 0]}
                barSize={57}
                onClick={(event) => handleBarClick(entry, event, index)}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default Statchart;
