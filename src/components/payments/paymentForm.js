import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useWindowSize } from "@react-hook/window-size";
import Basefooter from "../landingPage/basefooter";

export default function PaymentForm() {
  const [width, height] = useWindowSize();
  return (
    <div className="">
      <div className=" backdrop-blur-md bg-gradient-to-br from-[#C133AE] to-[#EE2B3B] rounded-bl-[45px] pl-2 pb-2 ">
        <p className="pt-[150px] text-[20px] text-[#fff] opacity-25 font-bold ml-2  leading-[18px] mx-4 pl-2">
          Your
        </p>
        <p className="text-[36px] text-[#fff] font-bold leading-[40px] ml-2 mx-4 pl-2 pb-6">
          Card
        </p>
      </div>
      <div
        className={`max-w-[425px] relative  mx-auto right-0 left-0 ${
          width < 321 ? `top-[-1.5em]` : "top-[-1.5em]"
        }`}
      >
        <LazyLoadImage
          src="/creditcard.svg"
          alt="creditcard"
          className={`left-0 top-3 mt-4 mx-auto shadow-lg rounded-[40px]`}
        />
        <div className=" mx-auto mt-4">
          <p className="text-[20px] text-[#252525] font-bold ml-2  leading-[18px] mx-4 pl-2">
            Payment
          </p>
          <p className="text-[36px] text-[#CA3BA1] font-bold leading-[40px] ml-2 mx-4 pl-2">
            Methods
          </p>
          {/* payment box */}
        </div>
      </div>
      <div className=" mt-4 flex gap-2 overflow-x-auto noscrollbar mx-auto py-4 w-[100%] max-w-[425px]">
        <div className="text-center font-bold text-[14px] text-white w-[142px] h-[142px] min-w-[142px] rounded-[40px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] grid place-items-center shadow-lg shadow-rose-500 p-8">
          <LazyLoadImage
            src="/icons/moneywithdrawal.svg"
            alt="money-withdrawal"
          />
          Pay Cash
        </div>
        <div className="text-center font-bold text-[14px] text-[#252525] w-[142px] h-[142px] rounded-[40px] bg-[#FCE7F3] grid place-items-center p-8">
          <LazyLoadImage src="/icons/Credit Card.svg" alt="credit card" />
          Credit/Debit Card
        </div>
        <div className=" text-center font-bold text-[14px] text-[#252525] w-[142px] h-[142px] rounded-[40px] bg-[#FCE7F3] grid place-items-center p-8">
          <LazyLoadImage src="/icons/google-pay-icon.svg" alt="gpay" />
          UPI Payments
        </div>
      </div>
      <div className="min-h-[200px] bg-[#252525] mt-8 flex relative">
        <div className="p-4">
          <p className="text-white text-[24px] font-bold max-w-[234px] leading-[26px]">
            Let Your Smile{" "}
            <span className="bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
              Shine Bright
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
            src="/femaledoc.svg"
            alt="phone"
            className={`absolute  right-0 ${
              width <= 320
                ? "w-[7em] top-[-54px]"
                : "top-[-23px] w-[225px] h-[223px]" // Set width to 150px for screens <= 320px
            }`}
          />
        </div>
      </div>
      {/* <Basefooter /> */}
    </div>
  );
}
