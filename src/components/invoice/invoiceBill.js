import React from "react";

export default function InvoiceBill() {
  return (
    <div className=" ">
      <div className="bg-gradient-to-br from-[#C133AE] to-[#EE2B3B] rounded-bl-[45px] pb-4 ">
        <div
          style={{
            backgroundImage:
              "url('/Rectangle 1716.svg'),url('/Rectangle 1713.svg')",
            backgroundPosition: "top left,top right",
            backgroundRepeat: "no-repeat,no-repeat",
          }}
        >
          <p className=" pt-[150px] text-[20px] text-[#fff] opacity-25 font-bold ml-2  leading-[18px] mx-4 pl-2">
            Your
          </p>
          <p className="text-[36px] text-[#fff] font-bold leading-[40px] ml-2 mx-4 pl-2">
            Invoice
          </p>
        </div>
      </div>

      <div className="mx-2">
        {/* <p className="text-[20px] text-[#252525] font-bold mx-4 pt-4">Your</p>
        <p className="text-[36px] text-[#CA3BA1] font-bold leading-[18px] mx-4 ">
          Invoice
        </p> */}
        <div className="rounded-[40px] bg-[#FCE7F3] p-4 mt-4 mx-2">
          <div className="flex justify-between text-[14px] font-semibold">
            <p className="text-[#252525]">consultation fee</p>
            <p className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              Rs 1000
            </p>
          </div>
          <div className="flex justify-between text-[14px] font-semibold">
            <p className="text-[#252525]">service fee</p>
            <p className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              Rs 300
            </p>
          </div>
          <div className="flex justify-between text-[14px] font-semibold">
            <p className="text-[#252525]">Technology fee</p>
            <p className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              Rs100
            </p>
          </div>
          <div className="flex justify-between text-[14px] font-semibold">
            <p className="text-[#252525]">test</p>
            <p className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              Rs 100
            </p>
          </div>
          <div className="flex justify-between text-[14px] font-semibold">
            <p className="text-[#252525]">surgery</p>
            <p className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              Rs 0
            </p>
          </div>
          <div className="flex justify-between text-[14px] font-semibold">
            <p className="text-[#252525]">medicine</p>
            <p className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              Rs 0
            </p>
          </div>
          <div className="flex justify-between text-[14px] font-semibold">
            <p className="text-[#252525]">
              coupon
              <span className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
                (consult100)
              </span>
            </p>
            <p className="bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
              Rs -400
            </p>
          </div>

          <div className="bg-[#D73992] flex justify-between  text-white font-bold uppercase w-full  rounded-full mt-2 p-2 px-4">
            <p>Total</p> <p>1100</p>
          </div>
        </div>
      </div>
    </div>
  );
}
