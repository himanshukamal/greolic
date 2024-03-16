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
          <div className="relative  modal-content w-full max-w-[400px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-full bg-white rounded-[50px] pb-2 mx-2">
              {/* <div
                style={{
                  backgroundImage: `url('/images/bg-top.png')`,
                  backgroundPosition: "top",
                  height: "200px",
                  backgroundRepeat: "no-repeat",
                }}
              ></div> */}
              <img src="/brownpinkbg.svg" alt="brownpinkbg" />
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
                <p className=" text-[#252525] text-[12px]">
                  by providing your phone no. & email id.
                </p>
              </div>

              <div className="mx-2">
                <div className=" bg-[#FCF2FD] rounded-[35px] p-2 py-4 w-full">
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
              </div>

              {/* <button className=" text-white rounded-full w-full mx-auto my-4 h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[14px]">
                PROCEED
              </button> */}

              <Verification />
              <div className="mx-2">
                <div className=" bg-[#252525] text-white rounded-full w-full mx-auto mt-6 px-4 py-4">
                  <h4 className="text-center text-[14px]">
                    {" "}
                    Your appointment is scheduled for Friday,
                    <span className="text-[#D576FF] font-bold">
                      November 12th
                    </span>{" "}
                    at<span className="text-[#D576FF] font-bold">11 am</span> in{" "}
                    <span className="text-[#D576FF] font-bold">Faridabad.</span>{" "}
                  </h4>
                </div>
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
