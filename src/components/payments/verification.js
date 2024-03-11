import { Modal } from "@mui/material";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OtpInput from "./otp-input";
import BookingConfirmed from "./booking-confirmed";

export default function Verification() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        {/* Trigger btn  */}

        <button
          onClick={handleOpen}
          className=" text-white rounded-full w-full mx-auto my-4 h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[14px]"
        >
          PROCEED
        </button>

        <Modal open={open} onClose={handleClose}>
          <div className="relative rounded-[50px] modal-content w-full max-w-[400px]  bg-white p-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-full">
              <img src="/images/bg-top.png" alt="" className=" h-[178px] " />
              <img
                src="/images/verChar.png"
                alt=""
                className="absolute -top-8 left-4 h-[189px] "
              />

              <div className="py-1 px-6">
                {" "}
                <h3 className=" text-[32px] font-bold bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                  Verification
                </h3>
                <p className=" text-[#252525] ">
                  Enter OTP sent to registered email & Phone no.
                </p>
              </div>

              <OtpInput />

              {/* <button className=" text-white rounded-full w-full mx-auto my-4 h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[14px]">
                Verify
              </button> */}

              <BookingConfirmed />

              <p className=" font-extrabold text-center text-sm my-6 text-[#252525] ">Didn’t Receive? Resend</p>
            </div>

            {/* CLOSE BTN  */}
            <button
              className="absolute top-8 right-8 text-white"
              onClick={handleClose}
            >
              <LazyLoadImage src="/roundedclose.svg" alt="Close" />
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}
