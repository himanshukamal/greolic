import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GradientProgressBar from "./GradientProgressbar";
import ProgressDemo from "./GradientProgressbar";
import { useWindowSize } from "@react-hook/window-size";

export default function Services() {
  const [width, height] = useWindowSize();
  return (
    <div>
      <p className="text-[20px] text-[#252525] font-bold mx-4">Our</p>
      <p className="text-[36px] text-[#CA3BA1] font-bold leading-[18px] mx-4">
        Services
      </p>
      {/* div */}
      <div className="h-[100px] flex bg-[#F3EDF4] rounded-bl-[45px] mt-4">
        <div className="flex items-center justify-around w-full px-4">
          <div className="flex flex-start">
            <p className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text mr-2">
              01
            </p>
            <div>
              <p className="leading-[20px] text-[20px] font-black bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                Dental
              </p>
              <p className="text-[32px] font-black leading-[24px] bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                Braces
              </p>
            </div>
          </div>

          <p className="text-[#252525] text-[8px] max-w-[138px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </p>
        </div>
      </div>
      <div
        className="h-[100px] flex bg-cover bg-center bg-no-repeat rounded-bl-[45px] mt-2 relative"
        style={{ backgroundImage: "url('/bracesbg.png')" }}
      >
        <div className="flex items-center justify-around w-full px-4">
          <div className="flex flex-start">
            <p className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text mr-2">
              02
            </p>
            <div>
              <p className="leading-[20px] text-[20px] font-black text-white">
                Dental
              </p>
              <p className="text-[32px] font-black leading-[24px] text-white">
                Decay
              </p>
            </div>
          </div>

          <p className="text-[#fff] text-[8px] max-w-[138px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </p>
        </div>
      </div>
      <div className="h-[100px] flex bg-[#F3EDF4] rounded-bl-[45px] mt-2">
        <div className="flex items-center justify-around w-full px-4">
          <div className="flex flex-start">
            <p className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text mr-2">
              03
            </p>
            <div>
              <p className="leading-[20px] text-[20px] font-black bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                Root
              </p>
              <p className="text-[32px] font-black leading-[24px] bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                Canal
              </p>
            </div>
          </div>

          <p className="text-[#252525] text-[8px] max-w-[138px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </p>
        </div>
      </div>

      <div className="min-h-[261px] bg-[#252525] mt-8 flex relative">
        <div className="p-4">
          <p className="text-white text-[24px] font-bold max-w-[234px] leading-[26px]">
            Our App Is Now Available To Download,{" "}
            <span className="bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
              Hurry Up!!
            </span>
          </p>
          <p className="text-[8px] text-white max-w-[234px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </p>
          <div className="flex mt-4">
            <LazyLoadImage src="appstore.svg" alt="apple" className="mr-2" />
            <LazyLoadImage src="playstoreicon.svg" alt="apple" />
          </div>
        </div>
        <div className="overflow-visible">
          {/* <LazyLoadImage
            src="/Holding-Hand-Smart-Phone-Mockup-PhotoRoom.svg"
            alt="phone"
            className="absolute top-[-103px] right-0"
          /> */}
          <LazyLoadImage
            src="/Holding-Hand-Smart-Phone-Mockup-PhotoRoom.svg"
            alt="phone"
            className={`absolute  right-0 ${
              width <= 320 ? "w-[7em] top-[-81px]" : "top-[-103px]" // Set width to 150px for screens <= 320px
            }`}
          />
        </div>
      </div>

      <div className="h-[731px] bg-[#F3EDF4]">
        <p className="text-[20px] text-[#252525] font-bold mx-4 pt-4">Why</p>
        <p className="text-[36px] text-[#CA3BA1] font-bold leading-[18px] mx-4">
          Choose us
        </p>

        <div
          className="h-[261px] rounded-[50px] bg-cover bg-center bg-no-repeat mx-2 mt-4"
          style={{ backgroundImage: "url('/Rectangledoc.svg')" }}
        ></div>
        <p className="text-[14px] mt-4 mx-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit.
        </p>
        <div className="mx-4 mt-8">
          <div className="flex justify-between">
            <p className="text-[#252525] text-[14px] font-bold">
              Dental prevention
            </p>
            <p className="text-[#252525] text-[14px] font-bold">80%</p>
          </div>
          <ProgressDemo />
        </div>
        <div className="mx-4 my-4">
          <div className="flex justify-between">
            <p className="text-[#252525] text-[14px] font-bold">Shiny Smiles</p>
            <p className="text-[#252525] text-[14px] font-bold">80%</p>
          </div>
          <ProgressDemo />
        </div>
        <div className="mx-4 my-4">
          <div className="flex justify-between">
            <p className="text-[#252525] text-[14px] font-bold">Patients</p>
            <p className="text-[#252525] text-[14px] font-bold">80%</p>
          </div>
          <ProgressDemo />
        </div>
        <div className="mx-4 my-4">
          <div className="flex justify-between">
            <p className="text-[#252525] text-[14px] font-bold">Dental care</p>
            <p className="text-[#252525] text-[14px] font-bold">80%</p>
          </div>
          <ProgressDemo />
        </div>
      </div>
    </div>
  );
}
