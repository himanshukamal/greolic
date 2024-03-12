import { Modal } from "@mui/material";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OtpInput from "./otp-input";
import PaymentFailed from "./sorry";

export default function BookingConfirmed() {
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
          Verify
        </button>

        <Modal open={open} onClose={handleClose}>
          <div className="relative rounded-[50px] modal-content w-full max-w-[400px] min-h-[600px]  bg-white p-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-full">
              <img src="/images/bg-top.png" alt="" className=" h-[178px] " />
              <img
                src="/images/booking.png"
                alt=""
                className="absolute -top-20 left-20 h-[189px] "
              />

              <div className="py-1 px-6">
                {" "}
                <h3 className=" text-[32px] font-bold bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                  Booking Confirmed
                </h3>
                <p className=" text-[#252525] ">
                  For more details go to upcoming appointments.
                </p>
              </div>

              <div className=" bg-[#FCF2FD] rounded-[50px]  py-2 px-4 my-2 w-full ">
                <h3 className="mt-4 text-[20px] font-bold bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                  Never Miss An Update
                </h3>
                <p className=" text-[#252525] text-[10px] ">
                  Enter your alternate email so that you never miss reminders,
                  confirmations, and all the details you need for a smooth
                  experience.
                </p>
                <input
                  type="text"
                  className="h-[46px] w-full mb-2 rounded-full pl-6 my-4  border-none outline-none"
                  placeholder="Email ID ( Optional )"
                />
              </div>

              {/* <button className=" text-white rounded-full w-full mx-auto my-4 h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[14px]">
                Submit
              </button> */}

              <PaymentFailed />
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
