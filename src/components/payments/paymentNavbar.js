import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Select, MenuItem } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function PaymentNavbar() {
  const [showFirstCard, setShowFirstCard] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstCard((prev) => !prev);
    }, 3000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-visible ">
      <div className="fixed w-full max-w-[425px] top-[30px] z-[50] bg-gradient-to-br from-[#C133AE] to-[#D72F75]  p-2 h-[76px] overflow-visible">
        {/* white bg */}
        {/* <div className="absolute bg-white top-[-28px] opacity-5 w-[223px] h-[312px] rotate-[35deg]  right-[-52px] z-[-2]"></div> */}
        {/* logo and menu */}
        <div className=" fixed top-[30px] max-w-[425px] mx-auto left-0 right-0  px-4 flex justify-between items-center">
          <div className="flex items-center">
            <button>
              <Link to="/invoice">
                <LazyLoadImage
                  src="/eva_arrow-back-fill.svg"
                  alt="My Image"
                  //   className="w-[10px] h-[10px]"
                  // effect="blur" // Optional, for blur-up effect
                />
              </Link>
            </button>
            <LazyLoadImage
              src="/doclogo.svg"
              alt="My Image"
              className=" ml-1"
              // effect="blur" // Optional, for blur-up effect
            />
          </div>

          {/* droopdown and sidebar */}
          <div className="flex">
            <Select
              className="text-[13px] font-bold text-white bg-transparent border-none appearance-none pr-2"
              IconComponent={IoIosArrowDown}
              value="delhi"
              MenuProps={{
                PaperProps: {
                  style: {
                    backgroundColor: "#372F62",
                    color: "#fff",
                  },
                },
              }}
              sx={{
                fontSize: "13px",
                border: "none",
                color: "#fff",
                outline: "none",
                "& svg": {
                  color: "#fff",
                },
                "&:focus": {
                  border: "none",
                  outline: "none",
                },
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            >
              <MenuItem value="delhi">Delhi</MenuItem>
              <MenuItem value="mumbai">Mumbai</MenuItem>
              <MenuItem value="bangalore">Bangalore</MenuItem>
              {/* Add more cities here */}
            </Select>
            <LazyLoadImage src="/sidemenu.svg" />
          </div>
        </div>

        {/* animated carousel */}
        <div className="overflow-hidden mt-4 ">
          <div className="flex justify-center pb-1 rounded-full">
            <AnimatePresence>
              {showFirstCard ? (
                <motion.div
                  key="first"
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="w-[196px] h-[50px] rounded-full bg-[#F3EDF4] text-center mx-auto flex items-center justify-evenly mt-[40px] shadow-sm">
                    <div className="rounded-full w-[30px] h-[30px] bg-[#F3EDF4] drop-shadow-xl grid place-items-center">
                      <LazyLoadImage
                        src="/HospitalLocation.svg"
                        alt="Hospital Location"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[13px] font-bold bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                        50
                      </p>
                      <p className="text-[11px] text-black font-bold leading-[9px]">
                        Cities
                      </p>
                    </div>
                    <div className="rounded-full w-[30px] h-[30px] bg-[#F3EDF4] drop-shadow-xl grid place-items-center">
                      <LazyLoadImage
                        src="/doctoricon.svg"
                        alt="Hospital Location"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[13px] font-bold bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                        60
                      </p>
                      <p className="text-[11px] text-black font-bold leading-[9px]">
                        Clinics
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="second"
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="px-4 h-[50px] rounded-full bg-[#F3EDF4] text-center mx-auto flex items-center justify-evenly mt-[40px] shadow-sm">
                    <div className="rounded-full w-[30px] h-[30px] bg-[#F3EDF4] drop-shadow-xl grid place-items-center">
                      <LazyLoadImage
                        src="/icons/accounticon.svg"
                        alt="Hospital Location"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[13px] font-bold bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                        1.25L
                      </p>
                      <p className="text-[11px] text-black font-bold leading-[9px]">
                        Patients
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* end of second card */}
        {/* carousel end */}
      </div>
    </div>
  );
}
