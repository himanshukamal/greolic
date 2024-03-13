// import React from "react";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Select, MenuItem } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedCarousel() {
  const [showFirstCard, setShowFirstCard] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstCard((prev) => !prev);
    }, 3000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* animated carousel */}
      <div className="overflow-hidden">
        <div className="flex justify-center pb-1 rounded-full">
          <AnimatePresence>
            {showFirstCard ? (
              <motion.div
                key="first"
                initial={{ opacity: 0, x: "60%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-60%" }}
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
                initial={{ opacity: 0, x: "60%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-60%" }}
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
    </div>
  );
}
