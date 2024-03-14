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
        <div className="mx-2">
          <button
            onClick={handleOpen}
            className=" text-white rounded-full w-full mx-auto my-4 h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[20px] shadow-md shadow-rose-500"
          >
            Verify
          </button>
        </div>

        <Modal open={open} onClose={handleClose}>
          <div className="relative rounded-[50px] modal-content w-full max-w-[400px] min-h-[600px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-full bg-white rounded-[50px] mx-2 pb-2">
              {/* <img src="/images/bg-top.png" alt="" className=" h-[178px] " /> */}
              <div className="flex justify-center">
                <img src="/brownpinkbg.svg" alt="brownpinkbg" />
              </div>

              <img
                src="/images/booking.png"
                alt=""
                className="absolute -top-10 left-20 h-[189px] "
              />

              <div className="py-1 px-6">
                {" "}
                <h3 className=" text-[32px] font-bold bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                  Booking Confirmed
                </h3>
                <p className=" text-[#252525] text-[12px]">
                  For more details go to upcoming appointments.
                </p>
              </div>
              <div className="mx-2">
                <div className="bg-[#252525] py-4 px-4 w-full my-2 rounded-[35px] text-white text-[11px]">
                  <div className="flex justify-around">
                    <p>Patient Name</p>
                    <p className="font-bold min-w-[133px]">Wayne Bruce</p>
                  </div>
                  <div className="flex justify-around mt-1">
                    <p>Date & Time</p>
                    <p className="font-bold min-w-[133px]">12 Nov, 11:00 am</p>
                  </div>
                  <div className="flex justify-around mt-1">
                    <p>Service</p>
                    <p className="font-bold min-w-[133px]">Dental Braces</p>
                  </div>
                  <div className="flex justify-around mt-1">
                    <p>Address</p>
                    <p className="font-bold max-w-[133px]">
                      Dental Clinic
                      <span className="text-[8px]">
                        <br />
                        12/2, Mathura Road, Sector 37, Faridabad - Delhi
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-2">
                <div className=" bg-[#FCF2FD] rounded-[35px]  py-2 px-4 my-2 w-full ">
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
              </div>

              {/* <button className=" text-white rounded-full w-full mx-auto my-4 h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[14px]">
                Submit
              </button> */}
              <div className="mx-4">
                <PaymentFailed />
              </div>
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
