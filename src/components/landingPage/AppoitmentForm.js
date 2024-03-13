import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Select, MenuItem, Drawer } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import "@fontsource/montserrat";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/600.css";
import { useWindowSize } from "@react-hook/window-size";
import CustomDropDown from "../custom-dropdown";
// import { Dialog, DialogOverlay } from "@radix-ui/react-dialog";
// import { DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
// import { Modal, Button } from "@mui/material";
import DateSelector from "../date-selector";
import TimeSelector from "../time-selector";
import ChooseServices from "./inputOptions/chooseServices";
import ChooseConsultation from "./inputOptions/chooseConsultation";
import ChooseDoctor from "./inputOptions/chooseDoctor";
import AnimatedCarousel from "../animatedCarousel";
import Navbar from "../navbar";
import { Link } from "react-router-dom";

export default function AppointmentForm() {
  const logoMenuRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [width, height] = useWindowSize();
  const [showModal, setShowModal] = useState(false);
  const [showAppDownloadModal, setShowAppDownloadModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShowAppDownloadModal = () => {
    console.log(" you are inside showAppDownloadModal");

    setShowAppDownloadModal(true);
    // setShowModal(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

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
    <div className="pb-8 overflow-hidden bg-gradient-to-br from-[#CC3190] to-[#EE2B3B] rounded-bl-[45px] relative top-[30px]">
      {/* <div
        className="absolute z-[51] w-[222px] h-[600px] rotate-[32deg] left-[25vw] top-[-52px]  bg-gradient-to-t opacity-10 from-transparent to-white"
        // style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      ></div> */}
      {/* <div
        className="absolute  z-[51] w-[222px] h-[600px] rotate-[32deg] left-[-47vw] top-[-164px]  bg-gradient-to-t from-transparent opacity-10 to-white"
        // style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      ></div> */}
      {/* form */}
      <Navbar />
      {/* logo and menu */}
      {/* <div className="z-[51] fixed top-[30px] max-w-[425px] mx-auto left-0 right-0 z-49 bg-gradient-to-br from-[#E0379E] to-[#EE2B3B] p-[0.8rem] flex justify-between">
        <LazyLoadImage
          src="/doclogo.svg"
          alt="My Image"
          
        />
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
          </Select>
          <button onClick={toggleDrawer}>
            <LazyLoadImage src="/sidemenu.svg" />
          </button>
          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
            <div className="p-4 w-[80vw] bg-[#FCF2FC] h-dvh">
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
      </div> */}

      {/* end logo menu */}

      {/* city and clinic div */}

      {/* <div className="w-[196px] h-[50px] rounded-full bg-[#F3EDF4] text-center mx-auto flex items-center justify-evenly mt-[86px]">
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
      </div> */}
      <AnimatedCarousel />
      <p className="mx-auto text-[28px] text-white text-center font-black uppercase mt-4">
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
          className="backdrop-blur bg-white bg-opacity-10  rounded-full h-[45px] shadow-xl p-2 mt-8 text-white font-semibold placeholder:text-white focus:outline-none "
        />

        <CustomDropDown
          trigger={
            <div className="backdrop-blur bg-white bg-opacity-10 rounded-full h-[45px] shadow-xl p-2 text-start   text-white font-semibold">
              Choose Date & Time
            </div>
          }
          content={
            <div className="py-2 px-[2px] bg-[#FCF2FD] rounded-3xl ">
              <div
                className={`bg-[#FCF2FD] bottom-6  max-h-[60vh] overflow-y-scroll min-h-[500px] my-2 py-4 px-6 rounded-3xl`}
              >
                <h3 className=" mt-2 mb-4  text-[13px] font-bold  text-[#252525] ">
                  Date
                </h3>
                <DateSelector onSelectDate={handleDateSelect} />
                <h3 className=" mt-2 mb-4  text-[13px] font-bold  text-[#252525] ">
                  Time
                </h3>

                <TimeSelector onSelectTime={handleTimeSelect} />

                <div className="my-4 mx-1 px-4 py-4 bg-[#252525] rounded-full flex justify-between ">
                  <h2 className="text-[16px] font-[900]  bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text">
                    {selectedDate ?? "13 Dec 2022,"}{" "}
                    {selectedTime ?? "02:00 pm"}
                  </h2>
                  <div className=" flex flex-col justify-center items-center text-white w-[66px] h-[24px] rounded-[20px] bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B]  drop-shadow shadow-md  shadow-rose-400 ">
                    <h3 className=" text-[10px] font-black ">DONE</h3>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <CustomDropDown
          trigger={
            <div className="backdrop-blur bg-white bg-opacity-10 rounded-full h-[45px] shadow-xl p-2 text-start   text-white font-semibold  ">
              Choose Services
            </div>
          }
          content={
            // <div className="bg-[#FCF2FD] bottom-6  max-h-[268px] overflow-y-scroll my-4 p-4 rounded-3xl">
            //   <h3 className="text-[16px] text-[#AD648D] font-semibold border-b border-[#F5D3E7] my-1 p-1 pb-2 ">
            //     Dental Braces
            //   </h3>
            //   <h3 className="text-[16px] text-[#AD648D] font-semibold border-b border-[#F5D3E7] my-1 p-1 pb-2 ">
            //     Dental Crown
            //   </h3>
            //   <div className=" flex justify-between item-center align-middle border-b border-[#F5D3E7] pb-2">
            //     <h3 className="text-[20px]  bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text font-extrabold  my-1 p-1  ">
            //       Tooth Extraction
            //     </h3>
            //     <div className=" flex flex-col justify-center my-auto py-2 items-center text-white w-[66px] h-[24px] rounded-[20px] bg-gradient-to-r from-[#AD37E0] to-[#EE2B3B]  drop-shadow shadow-md  shadow-rose-400 ">
            //       <h3 className=" text-[10px] font-black my-auto  ">Rs.300</h3>
            //     </div>
            //   </div>
            //   <h3 className="text-[16px] text-[#AD648D] font-semibold border-b border-[#F5D3E7] my-1 p-1 pb-2 ">
            //     Root Canal
            //   </h3>
            //   <h3 className="text-[16px] text-[#AD648D] font-semibold border-b border-[#F5D3E7] my-1 p-1 pb-2 ">
            //     Whitening
            //   </h3>
            //   <h3 className="text-[16px] text-[#AD648D] font-semibold border-b border-[#F5D3E7] my-1 p-1 pb-2 ">
            //     Tooth Straightening
            //   </h3>
            // </div>
            <ChooseServices />
          }
        />

        <CustomDropDown
          trigger={
            <div className="backdrop-blur bg-white bg-opacity-10 rounded-full h-[45px] shadow-xl p-2 text-start   text-white font-semibold  ">
              Choose Doctor
            </div>
          }
          content={
            // Main Container
            // <div className="bg-[#FCF2FD] bottom-6 max-h-[389px] noscrollbar my-4 px-4 py-1 rounded-3xl  ">
            //   {/* (BDS, MDS)  */}
            //   <div className="bg-white h-[77px] flex my-4 p-1  rounded-3xl ">
            //     <div className="m-auto">
            //       <div className=" flex ">
            //         <h3 className="text-[16px] text-[#252525] font-semibold  my-1 ">
            //           Dr. David Russ
            //         </h3>
            //         <p className=" text-[#CA3BA1] text-[8px] font-semibold my-auto  mx-2">
            //           (BDS, MDS)
            //         </p>
            //       </div>

            //       <p className=" text-[10px] ">K.T Nagar</p>

            //       <div className=" flex ">
            //         <h4 className="text-[12px] text-[#AD37E0] font-semibold  my-1 ">
            //           Availability :
            //         </h4>
            //         <p className=" text-[#252525] text-[8px] font-semibold my-auto  mx-2">
            //           10:00 AM - 01:00 PM, 04:00 PM - 09:00 PM
            //         </p>
            //       </div>
            //     </div>

            //     <div className=" h-[15px] w-[15px]  rounded-full m-auto mr-1 bg-[#F3EDF4]  shadow-2xl ">
            //       {" "}
            //       <div className="bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] h-[8px] w-[8px] rounded-full m-auto mt-1 shadow-2xl "></div>
            //     </div>
            //   </div>
            //   {/* (BDS, MDS)  */}
            //   <div className="bg-white h-[77px] flex my-4 p-1  rounded-3xl ">
            //     <div className="m-auto">
            //       <div className=" flex ">
            //         <h3 className="text-[16px] text-[#252525] font-semibold  my-1 ">
            //           Dr. David Russ
            //         </h3>
            //         <p className=" text-[#CA3BA1] text-[8px] font-semibold my-auto  mx-2">
            //           (BDS, MDS)
            //         </p>
            //       </div>

            //       <p className=" text-[10px] ">K.T Nagar</p>

            //       <div className=" flex ">
            //         <h4 className="text-[12px] text-[#AD37E0] font-semibold  my-1 ">
            //           Availability :
            //         </h4>
            //         <p className=" text-[#252525] text-[8px] font-semibold my-auto  mx-2">
            //           10:00 AM - 01:00 PM, 04:00 PM - 09:00 PM
            //         </p>
            //       </div>
            //     </div>

            //     <div className=" h-[15px] w-[15px]  rounded-full m-auto mr-1 bg-[#F3EDF4]  shadow-2xl ">
            //       {" "}
            //       <div className="bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] h-[8px] w-[8px] rounded-full m-auto mt-1 shadow-2xl "></div>
            //     </div>
            //   </div>
            //   {/* (BDS, MDS)  */}
            //   <div className="bg-white h-[77px] flex my-4 p-1  rounded-3xl ">
            //     <div className="m-auto">
            //       <div className=" flex ">
            //         <h3 className="text-[16px] text-[#252525] font-semibold  my-1 ">
            //           Dr. David Russ
            //         </h3>
            //         <p className=" text-[#CA3BA1] text-[8px] font-semibold my-auto  mx-2">
            //           (BDS, MDS)
            //         </p>
            //       </div>

            //       <p className=" text-[10px] ">K.T Nagar</p>

            //       <div className=" flex ">
            //         <h4 className="text-[12px] text-[#AD37E0] font-semibold  my-1 ">
            //           Availability :
            //         </h4>
            //         <p className=" text-[#252525] text-[8px] font-semibold my-auto  mx-2">
            //           10:00 AM - 01:00 PM, 04:00 PM - 09:00 PM
            //         </p>
            //       </div>
            //     </div>

            //     <div className=" h-[15px] w-[15px]  rounded-full m-auto mr-1 bg-[#F3EDF4]  shadow-2xl ">
            //       {" "}
            //       <div className="bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] h-[8px] w-[8px] rounded-full m-auto mt-1 shadow-2xl "></div>
            //     </div>
            //   </div>
            //   {/* (BDS, MDS)  */}
            //   <div className="bg-white h-[77px] flex my-4 p-1  rounded-3xl ">
            //     <div className="m-auto">
            //       <div className=" flex ">
            //         <h3 className="text-[16px] text-[#252525] font-semibold  my-1 ">
            //           Dr. David Russ
            //         </h3>
            //         <p className=" text-[#CA3BA1] text-[8px] font-semibold my-auto  mx-2">
            //           (BDS, MDS)
            //         </p>
            //       </div>

            //       <p className=" text-[10px] ">K.T Nagar</p>

            //       <div className=" flex ">
            //         <h4 className="text-[12px] text-[#AD37E0] font-semibold  my-1 ">
            //           Availability :
            //         </h4>
            //         <p className=" text-[#252525] text-[8px] font-semibold my-auto  mx-2">
            //           10:00 AM - 01:00 PM, 04:00 PM - 09:00 PM
            //         </p>
            //       </div>
            //     </div>

            //     <div className=" h-[15px] w-[15px]  rounded-full m-auto mr-1 bg-[#F3EDF4]  shadow-2xl ">
            //       {" "}
            //       <div className="bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] h-[8px] w-[8px] rounded-full m-auto mt-1 shadow-2xl "></div>
            //     </div>
            //   </div>
            //   {/* (BDS, MDS)  */}
            //   <div className="bg-white h-[77px] flex my-4 p-1  rounded-3xl ">
            //     <div className="m-auto">
            //       <div className=" flex ">
            //         <h3 className="text-[16px] text-[#252525] font-semibold  my-1 ">
            //           Dr. David Russ
            //         </h3>
            //         <p className=" text-[#CA3BA1] text-[8px] font-semibold my-auto  mx-2">
            //           (BDS, MDS)
            //         </p>
            //       </div>

            //       <p className=" text-[10px] ">K.T Nagar</p>

            //       <div className=" flex ">
            //         <h4 className="text-[12px] text-[#AD37E0] font-semibold  my-1 ">
            //           Availability :
            //         </h4>
            //         <p className=" text-[#252525] text-[8px] font-semibold my-auto  mx-2">
            //           10:00 AM - 01:00 PM, 04:00 PM - 09:00 PM
            //         </p>
            //       </div>
            //     </div>

            //     <div className=" h-[15px] w-[15px]  rounded-full m-auto mr-1 bg-[#F3EDF4]  shadow-2xl ">
            //       {" "}
            //       <div className="bg-[#e6979e] h-[8px] w-[8px] rounded-full m-auto mt-1 shadow-2xl "></div>
            //     </div>
            //   </div>
            // </div>
            <ChooseDoctor />
          }
        />
        <CustomDropDown
          trigger={
            <div className="backdrop-blur bg-white bg-opacity-10 rounded-full h-[45px] shadow-xl p-2 text-start   text-white font-semibold  ">
              Choose consultation
            </div>
          }
          content={<ChooseConsultation />}
        />
        <Link to="/invoice">
          <p className="bg-[#252525] h-[50px] font-bold text-white text-[20px] text-bold uppercase pt-2 text-center rounded-full">
            Book Now
          </p>
        </Link>
      </div>
      {/* Dialog Trigger */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-[60] min-w-[300px]">
          <div
            className="bg-white p-2 pt-1 rounded-lg relative h-[501px]"
            style={{
              backgroundImage: "url('/Union (1).svg')",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              borderRadius: "40px",
            }}
          >
            <div
              className="h-[280px] relative -mt-[6em] left-[-4%]"
              style={{ backgroundImage: "url('/pngwing.svg')" }}
            ></div>
            <div
              className="h-[199px] w-[199px] absolute -top-8  left-[24%]"
              style={{
                backgroundImage: "url('/giftbox.svg')",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-row-reverse">
              <LazyLoadImage
                src="/priceDrop.svg"
                alt="bg"
                className=" h-[124px] w-[106px]"
              />
            </div>

            <div className=" flex justify-center">
              <h2 className="text-2xl font-bold text-[#252525] text-center">
                Quality Care at Very Low Price
              </h2>
            </div>
            <p className="font-semibold text-center bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-transparent bg-clip-text text-[12px]">
              Affordable care begins at{" "}
              <span className="text-lg font-bold">Rs. 200.</span>
            </p>

            {/* <p className="mb-4">Triggered after 3 seconds.</p> */}
            <button className="absolute right-4 top-4" onClick={handleClose}>
              <LazyLoadImage src="/roundedclose.svg" alt="Close" />
            </button>
            <div className="absolute bottom-[1.75em] w-[100%]">
              <div className="flex justify-around items-center  w-full">
                <div className="flex w-[100px] flex-col">
                  <p className="text-[8px] font-bold text-[#252525]">
                    T&C Applies*
                  </p>
                  <div className="flex">
                    <LazyLoadImage
                      src="appstore.svg"
                      alt="appstore"
                      className="w-[56px]"
                    />
                    <LazyLoadImage
                      src="playstoreicon.svg"
                      alt="play store"
                      className="w-[56px] ml-2"
                    />
                  </div>
                </div>
                <button
                  onClick={handleShowAppDownloadModal}
                  className="px-8 text-white rounded-full  h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[14px] drop-shadow-lg shadow-lg shadow-rose-400"
                >
                  Start Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAppDownloadModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-[61] min-w-[300px]">
          <div className="bg-white h-[px] p-4 rounded-[40px] mx-2">
            <LazyLoadImage src="/downloadapp.svg" alt="download app" />
            <div className="flex justify-around mt-4">
              <button
                // onClick={setShowAppDownloadModal(false)}
                onClick={() => setShowAppDownloadModal(false)}
                className="px-8 bg-[#FCE7F3] text-[#CB76A7] text-[14px] rounded-full h-[50px] font-bold uppercase"
              >
                Close
              </button>
              <button
                onClick={handleShowAppDownloadModal}
                className="px-8 text-white rounded-full  h-[50px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] font-bold uppercase text-[14px]"
              >
                Download app
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
