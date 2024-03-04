import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Testimonial() {
  return (
    <div>
      <p className="text-[20px] text-[#252525] font-bold mx-4 pt-4">Our</p>
      <p className="text-[36px] text-[#CA3BA1] font-bold leading-[18px] mx-4">
        Testimony
      </p>
      {/* card1 */}
      <div className=" rounded-[40px] bg-[#F3EDF4] p-4 mt-4 mx-4">
        <div className="flex items-center justify-center bg-[#F0D4F5] px-4 rounded-full w-fit">
          <p className=" text-[#CA41E1]  font-bold text-center">Root Canal</p>
        </div>

        <p className="mt-2 text-[#252525] text-[14px] font-semibold">
          I was nervous about getting a root canal, but Dr. Smith really helped
          me out.
        </p>
        <p className="text-[10px] text-[#252525] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit.
        </p>
        <div className="flex align-center justify-between mt-2">
          <div className="flex items-center">
            {" "}
            <LazyLoadImage src="avatarboy.svg" alt="avatarimage" />
            <p className="text-[#CA3BA1] text-[14px] font-bold ml-2">
              Rodolph Grey
            </p>
          </div>

          <LazyLoadImage src="starbutton.svg" alt="avatarimage" />
        </div>
      </div>
      {/* card2 */}
      <div className=" rounded-[40px] bg-[#F3EDF4] p-4 mt-4 mx-4 mb-8">
        <div className="flex items-center justify-center bg-[#F0D4F5] px-4 rounded-full w-fit">
          <p className=" text-[#CA41E1]  font-bold text-center">Root Canal</p>
        </div>

        <p className="mt-2 text-[#252525] text-[14px] font-semibold">
          I was nervous about getting a root canal, but Dr. Smith really helped
          me out.
        </p>
        <p className="text-[10px] text-[#252525] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit.
        </p>
        <div className="flex align-center justify-between mt-2">
          <div className="flex items-center">
            {" "}
            <LazyLoadImage src="avatarboy.svg" alt="avatarimage" />
            <p className="text-[#CA3BA1] text-[14px] font-bold ml-2">
              Rodolph Grey
            </p>
          </div>

          <LazyLoadImage src="starbutton.svg" alt="avatarimage" />
        </div>
      </div>
    </div>
  );
}
