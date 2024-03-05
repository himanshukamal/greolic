import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useWindowSize } from "@react-hook/window-size";

export default function DoctorInfoCard() {
  const [isChecked, setIsChecked] = useState(false);
  const [width, height] = useWindowSize();

  const handleRadioChange = () => {
    console.log("you are in handleradio");
    setIsChecked(!isChecked);
  };

  return (
    <div className="">
      <div className="flex items-center p-4">
        <LazyLoadImage src="avataricon.svg" alt="avatar" />
        <div className="ml-4">
          <p className="text-[10px] text-gray-600">Dental Specialist</p>
          <p className="text-[#252525] font-bold text-[20px]">Dr. Johnathan</p>
          <p className="text-[#252525] font-bold text-[20px] leading-[10px]">
            Gray
            <span className="text-[9px]">( BDS, MDS )</span>
          </p>
        </div>
      </div>
      {/* rating div */}
      <div className="flex justify-between mt-4 mx-2">
        <button className="rounded-tl-[48px] rounded-bl-[48px] rounded-br-[72px] bg-[#FCF2FD] text-[#C14FCD] font-bold px-6 py-2 flex">
          <LazyLoadImage src="cal-icon.svg" alt="calender" className="mr-2" />
          6+
        </button>
        <button className="rounded-full py-2 bg-[#FCF2FD] text-[#C14FCD] font-bold flex px-6">
          <LazyLoadImage src="star-icon.svg" alt="badge" className="mr-2" />
          4.5
        </button>
        <button className="rounded-bl-[72px] rounded-tr-[40px] rounded-br-[40px] bg-[#FCF2FD] text-[#C14FCD] font-bold px-6 py-2 flex">
          <LazyLoadImage src="badge-icon.svg" alt="star" className="mr-2" />
          20+
        </button>
      </div>
      <p className="mt-4 mx-4 text-[#252525] font-bold text-[16px]">About</p>
      <p className="mt-2 mx-4 text-gray-600 text-[12px]">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus.
      </p>
      <p className="mt-4 mx-4 text-[#252525] font-bold text-[16px]">Ratings</p>
      <div className="flex justify-between flex-wrap mt-2 mx-2">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[80px] h-[80px] bg-[#F3EDF4] grid place-items-center rounded-full">
            <div className="bg-gradient-to-br from-[#fff] via-[#B335CF] to-[#EC2B3F] w-[54px] h-[54px] rounded-full p-[1px]">
              <div
                className="w-full h-full  rounded-full grid place-items-center drop-shadow-xl shadow-2xl  shadow-rose-400"
                style={{
                  backgroundImage: "url('/ratingbg.svg')",
                  backgroundPosition: "center",
                }}
              >
                <p className="font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
                  4.5
                </p>
              </div>
              {/* Your content here */}
            </div>
          </div>
          <p className="text-[10px] font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
            Attention
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[80px] h-[80px] bg-[#F3EDF4] grid place-items-center rounded-full">
            <div className="bg-gradient-to-br from-[#fff] via-[#B335CF] to-[#EC2B3F] w-[54px] h-[54px] rounded-full p-[1px]">
              <div
                className="w-full h-full  rounded-full grid place-items-center drop-shadow-xl shadow-2xl  shadow-rose-400"
                style={{
                  backgroundImage: "url('/ratingbg.svg')",
                  backgroundPosition: "center",
                }}
              >
                <p className="font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
                  4.5
                </p>
              </div>
              {/* Your content here */}
            </div>
          </div>
          <p className="text-[10px] font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
            Dedication
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[80px] h-[80px] bg-[#F3EDF4] grid place-items-center rounded-full">
            <div className="bg-gradient-to-br from-[#fff] via-[#B335CF] to-[#EC2B3F] w-[54px] h-[54px] rounded-full p-[1px]">
              <div
                className="w-full h-full  rounded-full grid place-items-center drop-shadow-xl shadow-2xl  shadow-rose-400"
                style={{
                  backgroundImage: "url('/ratingbg.svg')",
                  backgroundPosition: "center",
                }}
              >
                <p className="font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
                  4.5
                </p>
              </div>
              {/* Your content here */}
            </div>
          </div>
          <p className="text-[10px] font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
            Passion
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[80px] h-[80px] bg-[#F3EDF4] grid place-items-center rounded-full">
            <div className="bg-gradient-to-br from-[#fff] via-[#B335CF] to-[#EC2B3F] w-[54px] h-[54px] rounded-full p-[1px]">
              <div
                className="w-full h-full  rounded-full grid place-items-center drop-shadow-xl shadow-2xl  shadow-rose-400"
                style={{
                  backgroundImage: "url('/ratingbg.svg')",
                  backgroundPosition: "center",
                }}
              >
                <p className="font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
                  4.5
                </p>
              </div>
              {/* Your content here */}
            </div>
          </div>
          <p className="text-[10px] font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
            Skill
          </p>
        </div>
      </div>
      {/* coupon component */}
      <div className="h-[376px] bg-[#252525] mt-8">
        <p className="text-[20px] text-gray-600 font-bold mx-4 pt-4">Your</p>
        <p className="text-[36px] text-white font-bold leading-[18px] mx-4 ">
          Coupons
        </p>

        <div className="flex flex-col justify-center rounded-2xl backdrop-blur-2xl bg-[#3b3b3b] mx-4 p-4 mt-6 relative h-[110px]">
          <input
            type="radio"
            id="consult100"
            checked={isChecked}
            onClick={handleRadioChange}
            className="sr-only"
          />
          <label
            htmlFor="consult100"
            className="block uppercase text-[24px] font-bold bg-gradient-to-br from-[#E29FFF] to-[#FF515F] text-transparent bg-clip-text relative z-10 cursor-pointer"
          >
            consult100
            <span className="absolute top-0 left-0 w-full h-full">
              <span
                className={`rounded-full absolute top-[0.9rem] right-2 w-[30px] h-[30px] transition-all duration-300 border-4 border-[#252525] ${
                  isChecked
                    ? "bg-gradient-to-br from-pink-500 to-red-500 shadow-sm shadow-rose-500"
                    : "bg-[#3b3b3b]"
                }`}
              ></span>
            </span>
          </label>
          <p className="text-white text-[10px]">
            Get Rs. 100 OFF Discount On Technology Fee
          </p>
          <div className="border border-dashed border-black h-full absolute top-0 left-[80%]"></div>
        </div>
        <div className="flex flex-col justify-center rounded-2xl backdrop-blur-2xl bg-[#3b3b3b] mx-4 p-4 mt-4 relative h-[110px]">
          <input
            type="radio"
            id="consult100"
            checked={isChecked}
            onClick={handleRadioChange}
            className="sr-only"
          />
          <label
            htmlFor="consult100"
            className="block uppercase text-[24px] font-bold bg-gradient-to-br from-[#E29FFF] to-[#FF515F] text-transparent bg-clip-text relative z-10 cursor-pointer"
          >
            Health100
            <span className="absolute top-0 left-0 w-full h-full">
              <span
                className={`rounded-full absolute top-[0.9rem] right-2 w-[30px] h-[30px] transition-all duration-300 border-4 border-[#252525] ${
                  isChecked
                    ? "bg-gradient-to-br from-pink-500 to-red-500 shadow-sm shadow-rose-500"
                    : "bg-[#3b3b3b]"
                }`}
              ></span>
            </span>
          </label>
          <p className="text-white text-[10px]">
            Get Rs. 100 OFF Discount On Technology Fee
          </p>
          <div className="border border-dashed border-black h-full absolute top-0 left-[80%]"></div>
        </div>
      </div>

      <div className="min-h-[261px] bg-[#ECC0D9] flex relative">
        <div className="p-4">
          <p className="text-[#252525] text-[24px] font-bold max-w-[234px] leading-[26px]">
            Our App Is Now Available To Download,{" "}
            <span className="bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
              Hurry Up!!
            </span>
          </p>
          <p className="text-[8px] text-gray-600 max-w-[234px]">
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
    </div>
  );
}
