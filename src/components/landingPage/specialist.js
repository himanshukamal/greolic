import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Specialist() {
  return (
    <div className="h-[542px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B]">
      <p className="text-[20px] text-[#c95dc8] font-bold mx-4 pt-4">Our</p>
      <p className="text-[36px] text-[#fff] font-bold leading-[18px] mx-4">
        Specialist
      </p>
      {/* specialist carousel */}
      <div className="flex justify-center">
        <div className="w-[268px] h-[386px] rounded-[134px] bg-[#fff] p-8 mt-4">
          <div
            className="w-[208px] h-[208px] rounded-full"
            style={{ backgroundImage: "url('/specialist1.svg')" }}
          ></div>
          <div className="">
            <p className="text-[#bebebe] font-bold text-[11px] uppercase text-center mt-8">
              BDS, MDS
            </p>
            <p className="text-center text-[20px] font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              Dr. Brian Stanley
            </p>
            <p className="text-center text-[11px] font-bold text-[#252525]">
              Dental Specialist
            </p>
            <div className="flex justify-center mt-2">
              <LazyLoadImage src="starbutton.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
