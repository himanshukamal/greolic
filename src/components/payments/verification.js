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

        <div className="mx-2">
          <button
            onClick={handleOpen}
            style={{
              boxShadow:
                "0px 4px 10px rgba(173, 55, 224, 0.5), 0px 6px 30px rgba(238, 43, 59, 0.5)",
            }}
            className=" text-white rounded-full w-full my-4 h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[20px]"
          >
            PROCEED
          </button>
        </div>

        <Modal open={open} onClose={handleClose}>
          <div className="relative  modal-content w-full max-w-[400px]   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-full bg-white rounded-[50px] mx-2 pb-2">
              {/* <img src="/images/bg-top.png" alt="" className=" h-[178px] " /> */}
              <img src="/brownpinkbg.svg" alt="brownpinkbg" />
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
                <p className=" text-[#252525] text-[12px]">
                  Enter OTP sent to registered email & Phone no.
                </p>
              </div>
              <div className="mx-2">
                <OtpInput />
              </div>

              {/* <button className=" text-white rounded-full w-full mx-auto my-4 h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[14px]">
                Verify
              </button> */}
              <div className="mx-2">
                {" "}
                <BookingConfirmed />
              </div>

              <p className="  text-center text-sm my-6 text-[#252525] text-[14px]">
                Didn’t Receive?{" "}
                <span className="font-extrabold bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                  Resend
                </span>
              </p>
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
