import { Modal, Image } from "@mui/material";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Verification from "./verification";

export default function ConfirmBooking() {
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
          className="h-[50px] flex items-center justify-center bg-white rounded-full shadow-lg"
        >
          <span
            className="text-[16px] px-4 font-bold bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text uppercase"
            // style={{
            //   backgroundImage: "linear-gradient(to right, #FF6CBE, #FF6666)",
            // }}
          >
            Pay cash
          </span>
        </button>

        <Modal open={open} onClose={handleClose}>
          <div className="relative rounded-[50px] modal-content w-full max-w-[400px]  bg-white p-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-full">
              <img src="/images/bg-top.png" alt="" className=" h-[178px] " />
              <img
                src="/images/loginChar.png"
                alt=""
                className="absolute -top-8 left-4 h-[189px] "
              />

              <div className="py-1 px-6">
                {" "}
                <h3 className=" text-[32px] font-bold bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                  Confirm Booking
                </h3>
                <p className=" text-[#252525] ">
                  by providing your phone no. & email id.
                </p>
              </div>

              <div className=" bg-[#FCF2FD] rounded-[50px] p-2 w-full ">
                <input
                  type="text"
                  className="h-[46px] w-full mb-2 rounded-full pl-6  border-none outline-none"
                  placeholder="Phone No"
                />
                <input
                  type="email"
                  className="h-[46px] w-full rounded-full pl-6  border-none outline-none"
                  placeholder="Email ID"
                />
              </div>

              {/* <button className=" text-white rounded-full w-full mx-auto my-4 h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[14px]">
                PROCEED
              </button> */}

              <Verification />

              <div className=" bg-[#252525] text-white rounded-full w-full mx-auto mt-6 px-4 py-4 ">
                <h4 className="text-center ">
                  {" "}
                  Your appointment is scheduled for Friday, November 12th at 11
                  am in Faridabad.{" "}
                </h4>
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
