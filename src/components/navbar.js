import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Select, MenuItem } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import AnimatedCarousel from "./animatedCarousel";
import { Select, MenuItem, Drawer } from "@mui/material";
// import { IoIosArrowDown } from "react-icons/io";
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/600.css";
import { useWindowSize } from "@react-hook/window-size";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [width, height] = useWindowSize();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="flex flex-col h-[80px]  ">
      <div className=" z-[52] fixed top-[30px] max-w-[425px] mx-auto left-0 right-0 z-49 bg-gradient-to-br from-[#E0379E] to-[#EE2B3B] p-[0.8rem] ">
        <div className="flex justify-between">
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
            {/* <LazyLoadImage src="/sidemenu.svg" className="" /> */}
            <button onClick={toggleDrawer}>
              <LazyLoadImage src="/sidemenu.svg" />
            </button>
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
              <div className="p-4 w-[80vw] bg-[#FCF2FC] h-dvh">
                {/* Add your drawer content here */}
                <div className="flex justify-between">
                  <LazyLoadImage src="/sidebarLogo.svg" alt="logo" />
                  <button onClick={toggleDrawer}>
                    <LazyLoadImage src="X.svg" alt="closeicon" />
                  </button>
                </div>
                <div
                  className={`relative mt-6 rounded-[20px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] p-4 flex shadow-xl shadow-[#ebabd5] ${
                    width <= 422 ? "h-[110px]" : "h-[99px]"
                  }`}
                >
                  <div className="w-[65%]">
                    <p className="text-white font-bold text-[12px] leading-[15px]">
                      Download app and unlock all features.
                    </p>
                    <p className="text-white text-[8px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis molestie.
                    </p>
                    <div className="flex gap-2">
                      <LazyLoadImage
                        src="appstore.svg"
                        alt="appstore"
                        className="w-[56px]"
                      />
                      <LazyLoadImage
                        src="playstoreicon.svg"
                        alt="play store"
                        className="w-[56px]"
                      />
                    </div>
                  </div>
                  <LazyLoadImage
                    src="red3.svg"
                    alt="mobile1"
                    className="absolute right-[3.4rem] top-[-15px] z-4"
                  />
                  <LazyLoadImage
                    src="red1.svg"
                    alt="mobile1"
                    className="absolute right-4 top-[-1px] z-5"
                  />
                </div>
                <div className="mt-4 flex items-center">
                  <LazyLoadImage
                    src="guestavatar.svg"
                    alt="mobile1"
                    className="mr-2"
                  />
                  <div className="flex flex-col">
                    <p className="text-bold text-[20px] font-bold text-[#252525]">
                      Guest User
                    </p>
                    <p className="text-gray-600 text-[12px]">User ID</p>
                  </div>

                  {/* links */}
                </div>
                <div className="rounded-full bg-white flex h-[48px] items-center px-4 mt-4">
                  <LazyLoadImage
                    src="icons/account-circle.svg"
                    alt="mobile1"
                    className="mr-2 w-[24px] h-[24px]"
                  />
                  <p className="font-semibold">Profile</p>
                </div>
                <div className="mt-2 rounded-full bg-transparent focus:bg-white flex h-[48px] items-center px-4">
                  <LazyLoadImage
                    src="icons/Frame124.svg"
                    alt="mobile1"
                    className="mr-2 w-[24px] h-[24px]"
                  />
                  <p className="font-semibold">Upcoming Appointments</p>
                  <LazyLoadImage
                    src="icons/redlock.svg"
                    alt="mobile1"
                    className="ml-2 mr-2 w-[14px] h-[14px]"
                  />
                </div>
                <div className="mt-2 rounded-full bg-transparent focus:bg-white flex h-[48px] items-center px-4">
                  <LazyLoadImage
                    src="icons/Notification.svg"
                    alt="mobile1"
                    className="mr-2 w-[24px] h-[24px]"
                  />
                  <p className="font-semibold">Previous Appointments</p>
                  <LazyLoadImage
                    src="icons/redlock.svg"
                    alt="mobile1"
                    className="ml-2 mr-2 w-[14px] h-[14px]"
                  />
                </div>
                <div className="mt-2 rounded-full bg-transparent focus:bg-white flex h-[48px] items-center px-4">
                  <LazyLoadImage
                    src="icons/Settings.svg"
                    alt="mobile1"
                    className="mr-2 w-[24px] h-[24px]"
                  />
                  <p className="font-semibold">Top Doctors</p>
                  <LazyLoadImage
                    src="icons/redlock.svg"
                    alt="mobile1"
                    className="ml-2 mr-2 w-[14px] h-[14px]"
                  />
                </div>
                <div className="mt-2 rounded-full bg-transparent focus:bg-white flex h-[48px] items-center px-4">
                  <LazyLoadImage
                    src="icons/Invoice.svg"
                    alt="mobile1"
                    className="mr-2 w-[24px] h-[24px]"
                  />
                  <p className="font-semibold">Insurance</p>
                  <LazyLoadImage
                    src="icons/redlock.svg"
                    alt="mobile1"
                    className="ml-2 mr-2 w-[14px] h-[14px]"
                  />
                </div>
                <div className="mt-2 rounded-full bg-transparent focus:bg-white flex h-[48px] items-center px-4">
                  <LazyLoadImage
                    src="icons/Paper Clip.svg"
                    alt="mobile1"
                    className="mr-2 w-[24px] h-[24px]"
                  />
                  <p className="font-semibold">Privacy Policy</p>
                  <LazyLoadImage
                    src="icons/redlock.svg"
                    alt="mobile1"
                    className="ml-2 mr-2 w-[14px] h-[14px]"
                  />
                </div>
                <div className="mt-2 rounded-full bg-transparent focus:bg-white flex h-[48px] items-center px-4">
                  <LazyLoadImage
                    src="icons/paper.svg"
                    alt="mobile1"
                    className="mr-2 w-[24px] h-[24px]"
                  />
                  <p className="font-semibold">terms and conditions</p>
                  <LazyLoadImage
                    src="icons/redlock.svg"
                    alt="mobile1"
                    className="ml-2 mr-2 w-[14px] h-[14px]"
                  />
                </div>
                <div className="flex items-center px-4 mt-2">
                  <div
                    style={{
                      backgroundImage: "url('/Ellipse 175.svg')",
                      backgroundPosition: "center",
                      objectFit: "cover",
                    }}
                    className="w-[56px] h-[56px] grid place-items-center relative"
                  >
                    <div
                      className="w-[36px] h-[36px] grid place-items-center mr-[4px] mb-[4px]"
                      style={{
                        backgroundImage: "url('/Ellipse 176.svg')",
                        backgroundPosition: "center",
                        objectFit: "cover",
                      }}
                    >
                      <LazyLoadImage
                        src="Power.svg"
                        alt="mobile1"
                        className="w-[14px] h-[14px] mr-[6px] mb-[6px]"
                      />
                    </div>
                    {/* bg-gradient-to-tr from-[#F0CBE0] to-[#F0CBE0]  */}
                    <div
                      className="absolute top-[0.6em] right-[1.7em] rounded-full rotate-[45deg] w-[18px] h-[21px] "
                      style={{
                        backgroundImage:
                          "linear-gradient(to top, rgba(234,199,219,1) 0%, rgba(240,203,224,0) 100%)",
                      }}
                    ></div>
                  </div>
                  <p className="font-semibold mb-[6px]">Login</p>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
      {/* <div className=" fixed left-0 right-0 top-[70px] overflow-hidden"> */}

      {/* </div> */}
    </div>
  );
}
