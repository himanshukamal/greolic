import React from "react";
import "@fontsource/league-spartan";
// import pinkStar from "../../public/pinkStar.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional, for blur-up effect

export default function TopAdvertisement() {
  return (
    <div className="h-[30px] bg-[#252525] flex overflow-hidden w-full items-center">
      <div className="flex items-center animate-marquee">
        <LazyLoadImage
          src="/pinkStar.svg"
          alt="My Image"
          className="w-[10px] h-[10px]"
          // effect="blur" // Optional, for blur-up effect
        />
        <p className="text-[14px] text-[#ffffff] font-semibold  ml-2 whitespace-nowrap">
          Limited-time offer!{" "}
          <span className="text-[#E12D5B]">Get 50% off</span> on your first
          treatment and take control of your health today
        </p>
      </div>
    </div>
  );
}
