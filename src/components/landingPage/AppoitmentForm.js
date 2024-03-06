import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Select, MenuItem } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";

export default function AppointmentForm() {
  const logoMenuRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (logoMenuRef.current) {
        setIsSticky(logoMenuRef.current.getBoundingClientRect().top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="pb-8 overflow-hidden bg-gradient-to-br from-[#E0379E] to-[#EE2B3B] rounded-bl-[45px] relative top-[30px]">
      <div
        className="absolute z-[51] w-[222px] h-[600px] rotate-[32deg] left-[25vw] top-[-52px]  bg-gradient-to-t opacity-10 from-transparent to-white"
        // style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      ></div>
      <div
        className="absolute  z-[51] w-[222px] h-[600px] rotate-[32deg] left-[-47vw] top-[-164px]  bg-gradient-to-t from-transparent opacity-10 to-white"
        // style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      ></div>
      {/* form */}

      {/* logo and menu */}
      <div className="z-[50] fixed top-[30px] max-w-[425px] mx-auto left-0 right-0 z-49 bg-gradient-to-br from-[#E0379E] to-[#EE2B3B] p-[0.8rem] flex justify-between">
        <LazyLoadImage
          src="/doclogo.svg"
          alt="My Image"
          //   className="w-[10px] h-[10px]"
          // effect="blur" // Optional, for blur-up effect
        />
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
      {/* end logo menu */}

      {/* city and clinic div */}

      <div className="w-[196px] h-[50px] rounded-full bg-[#F3EDF4] text-center mx-auto flex items-center justify-evenly mt-[86px]">
        <div className="rounded-full w-[30px] h-[30px] bg-[#F3EDF4] drop-shadow-xl grid place-items-center">
          <LazyLoadImage src="/HospitalLocation.svg" alt="Hospital Location" />
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
          <LazyLoadImage src="/doctoricon.svg" alt="Hospital Location" />
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

      <p className="mx-auto text-[28px] text-white text-center font-black uppercase">
        Achieve Your Best
      </p>
      <div className="relative">
        <p className="mx-auto text-[28px] text-white font-black text-center uppercase">
          <span className="relative mr-2">
            <span className="border border-white p-[2px]">Smile</span>
            <span className="absolute top-[-5px] left-[-3px] w-[7px] h-[7px] bg-white border-2 border-white rounded-full"></span>
            <span className="absolute top-[-5px] right-[-3px] w-[7px] h-[7px] bg-white border-2 border-white rounded-full"></span>
            <span className="absolute bottom-[-5px] left-[-3px] w-[7px] h-[7px] bg-white border-white rounded-full"></span>
            <span className="absolute bottom-[-5px] right-[-3px] w-[7px] h-[7px] bg-white border-white rounded-full"></span>
          </span>
          With us.
        </p>
      </div>

      <p className="text-[12px] text-white text-center mx-4 my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus.
      </p>
      <div className="flex justify-center my-8">
        <button
          className="h-[45px] w-[128px]  text-white font-semibold px-4 rounded-full"
          style={{ background: "rgba(90, 9, 53, 0.25)" }}
        >
          Services
        </button>
        <button
          className="h-[45px] w-[128px]  text-white font-semibold px-4 rounded-full ml-2"
          style={{ background: "rgba(90, 9, 53, 0.25)" }}
        >
          Contact us
        </button>
      </div>

      <p className="text-[20px] text-[#EC60C3] font-bold mx-4">Book</p>
      <p className="text-[36px] text-white font-bold leading-[18px] mx-4">
        Appointment
      </p>
      {/* form */}
      <div className="mx-4 flex flex-col space-y-4">
        <input
          placeholder="Enter Name"
          className="bg-transparent rounded-full h-[45px] shadow-xl p-2 mt-8 text-white font-semibold placeholder:text-white focus:outline-none "
        />
        <input
          placeholder="Choose Date & Time"
          className="bg-transparent rounded-full h-[45px] shadow-xl p-2 mt-8 text-white font-semibold placeholder:text-white focus:outline-none "
        />
        <input
          placeholder="Choose Services"
          className="bg-transparent rounded-full h-[45px] shadow-xl p-2 mt-8 text-white font-semibold placeholder:text-white focus:outline-none "
        />
        <input
          placeholder="Choose test & medicine"
          className="bg-transparent rounded-full h-[45px] shadow-xl p-2 mt-8 text-white font-semibold placeholder:text-white focus:outline-none "
        />
        <input
          placeholder="Choose consultation"
          className="bg-transparent rounded-full h-[45px] shadow-xl p-2 mt-8 text-white font-semibold placeholder:text-white focus:outline-none "
        />
        <button className="bg-[#252525] h-[50px] font-bold text-white text-[20px] text-bold uppercase text-center rounded-full">
          Book Now
        </button>
      </div>
    </div>
  );
}
