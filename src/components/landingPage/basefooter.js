import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";

export default function Basefooter() {
  return (
    <div>
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
      <div className="bg-[#ecc0d9] h-[30px] flex justify-around items-center ">
        <p className="text-[10px] text-[#93607D] font-bold">Privacy Policy</p>
        <p className="text-[10px] text-[#93607D] font-bold">
          2022. All rights reserved.
        </p>
        <p className="text-[10px] text-[#93607D] font-bold">
          Terms & Conditions
        </p>
      </div>
    </div>
  );
}
