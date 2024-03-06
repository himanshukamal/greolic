import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";

export default function Basefooter() {
  return (
    <div className="relative">
      <div className="h-[194px] bg-[#FCE7F3] ">
        <div className="flex p-4 justify-between">
          <LazyLoadImage src="/coloredlogo.svg" alt="colord logo" />
          <div className="flex gap-2">
            <div className="bg-[#F6D9EA] w-[30px] h-[30px] rounded-full grid place-items-center">
              <LazyLoadImage src="/instagrampinkinsta.svg" alt="insta" />
            </div>
            <div className="bg-[#F6D9EA] w-[30px] h-[30px] rounded-full grid place-items-center">
              <LazyLoadImage src="pinkfacebook.svg" alt="facebook" />
            </div>
            <div className="bg-[#F6D9EA] w-[30px] h-[30px] rounded-full grid place-items-center">
              <LazyLoadImage src="twitterpinktwitter.svg" alt="facebook" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-4">
          <div className="flex flex-col">
            <p className="text-[#93607D] uppercase font-semibold my-1">Home</p>
            <p className="text-[#93607D] uppercase font-semibold my-1">
              Booking
            </p>
            <p className="text-[#93607D] uppercase font-semibold my-1">
              Top Doctors
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#93607D] uppercase font-bold my-1">
              Our Services
            </p>
            <p className="text-[#93607D] uppercase font-bold my-1">Reviews</p>
            <p className="text-[#93607D] uppercase font-bold my-1">Insurance</p>
          </div>
        </div>
      </div>
      <div className="bg-[#ecc0d9] h-[30px] flex justify-around items-center mb-[75px]">
        <p className="text-[10px] text-[#93607D] font-bold">Privacy Policy</p>
        <p className="text-[10px] text-[#93607D] font-bold">
          2022. All rights reserved.
        </p>
        <p className="text-[10px] text-[#93607D] font-bold">
          Terms & Conditions
        </p>
      </div>
      {/* fixed footer */}
      <div className=" fixed bottom-0 max-w-[425px] mx-auto left-0 right-0 z-49 bg-gradient-to-br from-[#E0379E] to-[#EE2B3B] p-[0.8rem] flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <LazyLoadImage
            src="/homeicon.svg"
            alt="footer home"
            width="30"
            height="30"
          />
          <p className="text-white text-[10px] font-bold">Home</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <LazyLoadImage
            src="/Bill.svg"
            alt="footer home"
            width="30"
            height="30"
          />
          <p className="text-white text-[10px] font-bold">Booking</p>
        </div>
        <div className="flex flex-col items-center">
          <LazyLoadImage
            src="/Doctordoc.svg"
            alt="footer home"
            width="30"
            height="30"
          />
          <p className="text-white text-[10px] font-bold">Doctors</p>
        </div>
        <button className="h-[50px] flex items-center justify-center bg-white rounded-full shadow-lg">
          <span
            className="text-[16px] px-4 font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text uppercase"
            style={{
              backgroundImage: "linear-gradient(to right, #FF6CBE, #FF6666)",
            }}
          >
            Proceed
          </span>
        </button>
      </div>
    </div>
  );
}
