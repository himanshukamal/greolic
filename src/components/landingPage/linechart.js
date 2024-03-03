import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
  defs,
  linearGradient,
  stop,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const GradientLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart data={data}>
        <defs>
          <linearGradient id="gradientUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EE2B3B" stopOpacity={1} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="gradientPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#AD37E0" stopOpacity={1} />
            <stop offset="95%" stopColor="#EE2B3B" stopOpacity={1} />
          </linearGradient>
        </defs>
        {/* <Line
          type="monotone"
          dataKey="uv"
          stroke="url(#gradientUv)"
          strokeWidth={4} // Thick line
          dot={false} // Hide dots
        /> */}
        <Line
          type="monotone"
          dataKey="pv"
          stroke="url(#gradientPv)"
          strokeWidth={4} // Thick line
          dot={false} // Hide dots
        />
        <Tooltip />
        {/* <Legend /> */}
      </LineChart>
      <div className="flex justify-evenly">
        <p className="text-white font-semibold text-[12px]">Jan</p>
        <p className="text-white font-semibold text-[12px]">Feb</p>
        <p className="text-white font-semibold text-[12px]">Mar</p>
        <p className="text-white font-semibold text-[12px]">Apr</p>
        <p className="text-white font-semibold text-[12px]">May</p>
        <p className="text-white font-semibold text-[12px]">Jun</p>
      </div>
    </ResponsiveContainer>
  );
};

export default GradientLineChart;
