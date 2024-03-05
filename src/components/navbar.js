import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Select, MenuItem } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="">
      {/* logo and menu */}
      <div className="z-[50] fixed top-[30px] max-w-[425px] mx-auto left-0 right-0 z-49 bg-gradient-to-br from-[#E0379E] to-[#EE2B3B] p-4 flex justify-between">
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
    </div>
  );
}
