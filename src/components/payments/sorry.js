import { Modal } from "@mui/material";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PaymentFailed() {
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
          style={{
            boxShadow:
              "0px 4px 10px rgba(173, 55, 224, 0.5), 0px 6px 30px rgba(238, 43, 59, 0.5)",
          }}
          className=" text-white rounded-full w-full mx-auto my-4 h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[20px]"
        >
          Submit
        </button>

        <Modal open={open} onClose={handleClose} className="mx-2">
          <div className="relative rounded-[50px] modal-content w-full max-w-[400px] min-h-[512px]  bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="/images/bg-up.png"
              alt=""
              className=" -mb-9 w-[400px] h-[275px]"
            />
            <div className=" absolute z-50 top-16 left-0 ">
              <div className="  py-1  px-2">
                <h3 className=" text-center text-[32px] font-bold bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                  Sorry!
                </h3>
                <p className="text-center text-[#252525] font-semibold ">
                  This option is not available, Choose Cash instead.
                </p>
              </div>
              <img
                src="/images/sryChar.png"
                alt=""
                className="m-auto h-[324px] "
              />
            </div>
            <img
              src="/images/bg-down.png"
              alt=""
              className="absolute bottom-0 h-[275px] "
            />
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
