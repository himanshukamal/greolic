import React from "react";
import GradientLineChart from "./linechart";

export default function Achievement() {
  return (
    <div>
      <div className="py-4 mt-4 ">
        <p className="text-[20px] text-[#252525] font-bold mx-4">Our</p>
        <p className="text-[36px] text-[#CA3BA1] font-bold leading-[18px] mx-4">
          Achievement
        </p>
        <div className="relative rounded-[50px] h-[408px] bg-[#252525] mt-4 shadow-2xl mx-2 overflow-hidden ">
          {/* circular bg */}
          <div className="w-[258px] h-[258px] p-14 absolute right-[-65px] top-[-107px] bg-gradient-to-br opacity-10 from-transparent to-white rounded-full">
            <div className="w-full h-full bg-[#252525] rounded-full"></div>
          </div>
          {/* circlular bg bottom */}
          <div className="w-[258px] h-[258px] p-14 absolute left-[-65px] bottom-[-107px] bg-gradient-to-br opacity-10 from-transparent to-white rounded-full">
            <div className="w-full h-full bg-[#252525] rounded-full"></div>
          </div>

          <div className="relative h-[200px] w-full">
            {/* Horizontal Dashed Line */}
            <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-[#4b3e51]"></div>
            {/* Vertical Dashed Line */}
            <div className="absolute top-0 bottom-0 left-1/2 border-l border-dashed border-[#4b3e51]"></div>

            {/* Text in the Four Quarters */}
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-1/2 h-1/2">
              <p className="text-[32px] font-bold text-white">
                150<span className="text-[#FF6CBE]">+</span>
              </p>
              <p className="text-white text-[12px]">Satisfied Patients</p>
            </div>
            <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-1/2 h-1/2">
              <p className="text-[32px] font-bold text-white">
                250<span className="text-[#FF6CBE]">+</span>
              </p>
              <p className="text-white text-[12px]">Professional Doctors</p>
            </div>
            <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-1/2 h-1/2">
              <p className="text-[32px] font-bold text-white">
                300<span className="text-[#FF6CBE]">+</span>
              </p>
              <p className="text-white text-[12px]">Successful surgery</p>
            </div>
            <div className="absolute bottom-0 right-0 flex flex-col items-center justify-center w-1/2 h-1/2">
              <p className="text-[32px] font-bold text-white">
                50<span className="text-[#FF6CBE]">+</span>
              </p>
              <p className="text-white text-[12px]">National Awards</p>
            </div>
          </div>
          <GradientLineChart />
        </div>
      </div>
    </div>
  );
}
