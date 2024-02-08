import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional, for blur-up effect
import "@fontsource/league-spartan";
import { IoIosArrowDown } from "react-icons/io";
import { Select, MenuItem } from "@mui/material";
import Statchart from "./statsChart";

export default function Search() {
  const data = [
    { name: "Category 1", value: 50 },
    { name: "Category 2", value: 75 },
    { name: "Category 3", value: 100 },
  ];
  return (
    <div className="w-full h-[351px] bg-[#372F62] rounded-br-[45px]">
      {/* menu ,logo */}
      <div className="flex pt-2 justify-around items-center">
        <div
          className="w-[59px] h-[42px] rounded-[30px] flex items-center justify-center"
          style={{
            boxShadow: "19px 19px 38px #231e3f,-19px -10px 38px #4b4085",
            background: "#372F62",
          }}
        >
          <LazyLoadImage
            src="/menuIcons.svg"
            alt="My Image"
            //   className="w-[10px] h-[10px]"
            // effect="blur" // Optional, for blur-up effect
          />
        </div>
        {/* logo */}
        <div>
          <p className="text-[36px] text-white font-black">
            gre
            <span className="text-transparent bg-gradient-to-r from-[#E4C17F]  to-[#E48E51] bg-clip-text">
              oilc
            </span>
          </p>
          <p className="text-white text-[8px] font-black relative right-[-56px] top-[-14px] tracking-[.30em]">
            Ufnuskt
          </p>
        </div>
        <div className="flex items-center justify-between w-[177px] h-[42px] rounded-[50px] bg-white">
          <div className="w-[52px] h-[32px] ml-[0.45em]">
            <LazyLoadImage src="/cityImage1.svg" className="rounded-3xl" />
          </div>
          <p className="text-[14px] font-black text-transparent bg-gradient-to-r from-[#E4C17F]  to-[#E48E51] bg-clip-text">
            50 Cities
          </p>
          <div className="mr-4">
            <p className="text-[#E957C9] font-black text-[12px]">1/3</p>
            <div className="flex gap-0.5">
              {" "}
              <p className="w-[3px] h-[3px] rounded-full bg-[#E957C9]"></p>
              <p className="bg-[#C8C8C8] rounded-full  w-[3px] h-[3px]"></p>
              <p className="bg-[#C8C8C8] rounded-full  w-[3px] h-[3px]"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-6 items-center gap-1">
        <LazyLoadImage
          src="/target.svg"
          alt="My Image"
          //   className="w-[10px] h-[10px]"
          // effect="blur" // Optional, for blur-up effect
        />
        {/* <p className="text-[13px] font-bold text-white pt-[4px]">Delhi</p> */}
        {/* <div className="relative">
          <select className="text-[13px] font-bold text-white bg-transparent border-none appearance-none">
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <IoIosArrowDown className="text-white" />
          </div>
        </div> */}
        {/* city selector  */}
        <div className="">
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
        </div>

        {/* input search div */}
      </div>
      <div className="mx-6 mt-1 relative">
        <input
          type="search"
          className="h-[46px] w-full rounded-full pl-6 placeholder:text-white font-bold text-white border-none outline-none"
          placeholder="Search Doctor"
          style={{
            boxShadow:
              "inset 8px 8px 16px #231e3f,inset -8px -8px 16px #4b4085",
            background: "#372F62",
          }}
        />
        <button
          className="absolute right-[8px] top-[5px]  h-[36px] w-[36px]  rounded-full p-2 font-bold  ml-2"
          style={{
            background: "linear-gradient(145deg, #3b3269, #322a58)",
            boxShadow: "8px 8px 16px #231e3f,-8px -8px 16px #4b4085",
          }}
        >
          <LazyLoadImage src="/charm_search.svg" alt="My Image" />
        </button>
      </div>

      {/* stats chart */}
      <div className="ml-4 flex items-center justify-around">
        <Statchart />
        <div className="flex-col ">
          {/* total patient button */}
          <div
            className="w-[140px] h-[50px] rounded-full relative"
            style={{
              boxShadow:
                "inset 8px 8px 16px #231e3f,inset -8px -8px 16px #4b4085",
              background: "#372F62",
            }}
          >
            <button
              className="absolute left-2 top-2 h-[36px] w-[36px]  rounded-full p-2 "
              style={{
                background: "linear-gradient(145deg, #3b3269, #322a58)",
                boxShadow: "8px 8px 16px #231e3f,-8px -8px 16px #4b4085",
              }}
            >
              <LazyLoadImage src="/DentalPatient.svg" alt="My Image" />
            </button>

            <div className="absolute left-[55px] top-3">
              <p className="text-[8px] font-bold text-white">Total Patients</p>
              <p className="text-[16px] font-black text-transparent bg-gradient-to-r from-[#E4C17F]  to-[#E48E51] bg-clip-text">
                17+ Lakh
              </p>
            </div>
          </div>

          {/* total doctor button */}
          <div
            className="w-[140px] h-[50px] rounded-full relative mt-4"
            style={{
              boxShadow:
                "inset 8px 8px 16px #231e3f,inset -8px -8px 16px #4b4085",
              background: "#372F62",
            }}
          >
            <button
              className="absolute left-2 top-2 h-[36px] w-[36px]  rounded-full p-2 "
              style={{
                background: "linear-gradient(145deg, #3b3269, #322a58)",
                boxShadow: "8px 8px 16px #231e3f,-8px -8px 16px #4b4085",
              }}
            >
              <LazyLoadImage src="/doctor.svg" alt="My Image" />
            </button>

            <div className="absolute left-[55px] top-3">
              <p className="text-[8px] font-bold text-white">Total Doctors</p>
              <p className="text-[16px] font-black text-transparent bg-gradient-to-r from-[#E4C17F]  to-[#E48E51] bg-clip-text">
                15,000+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
