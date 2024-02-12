import "@fontsource/league-spartan";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Footer() {
  return (
    <div className="bg-[#E7C985] h-[761px] rounded-tr-[45px] text-center pt-[50px]">
      <p className="text-[20px] font-black text-[#372F62]">Company</p>
      <p className="text-[12px] text-[#372F62] p-4 px-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus.
      </p>
      <div className="flex justify-row justify-center gap-4 mt-4">
        <div className="w-[48px] h-[48px] bg-[#352E60] rounded-full flex justify-center items-center">
          <LazyLoadImage src="/instagram.svg" alt="instagram logo" />
        </div>
        <div className="w-[48px] h-[48px] bg-[#352E60] rounded-full flex justify-center items-center">
          <LazyLoadImage src="/twitter.svg" alt="twitter logo" />
        </div>
        <div className="w-[48px] h-[48px] bg-[#352E60] rounded-full flex justify-center items-center">
          <LazyLoadImage src="/facebook.svg" alt="facebook logo" />
        </div>
      </div>
      <div className="mt-10 flex justify-center align-center">
        <LazyLoadImage src="line 5.svg" alt="line" />
      </div>
      {/* links */}
      <div className="flex space-y-4 flex-col mt-8">
        <p className="text-[24px] font-black text-[#372F62]">Home</p>
        <p className="text-[24px] font-black text-[#372F62]">Booking</p>
        <p className="text-[24px] font-black text-[#372F62]">Top Doctors</p>
        <p className="text-[24px] font-black text-[#372F62]">Our Services</p>
        <p className="text-[24px] font-black text-[#372F62]">Reviews</p>
        <p className="text-[24px] font-black text-[#372F62]">Insurance</p>
      </div>
      <div className="flex flex-row justify-center gap-2 mt-[50px]">
        <p className="text-[16px] border-r-2 border-[#372F62] text-[#372F62] pr-2 font-black">
          About
        </p>
        <p className="text-[16px] border-r-2 border-[#372F62] text-[#372F62] pr-2 font-black">
          Privacy Policy
        </p>
        <p className="text-[16px] border-r-2 border-[#372F62] text-[#372F62] pr-2 font-black">
          Terms and Condition
        </p>
      </div>
      <div className="p-2 border-t border-white flex items-center justify-center mt-4">
        <p className="text-[#372F62] text-[14px]">
          Copyright 2024.All rights reserved
        </p>
      </div>
    </div>
  );
}
