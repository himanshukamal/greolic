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
import AppDownloadModal from "../modals/appDownloadModal";

export default function AppointmentForm() {
  const logoMenuRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [width, height] = useWindowSize();
  const [showModal, setShowModal] = useState(false);
  const [showAppDownloadModal, setShowAppDownloadModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedTime, setSelectedTime] = useState(null);

  const [selectedConsultation, setSelectedConsultation] = useState(null);

  // Function to update selected consultation family
  const selectConsultation = (family) => {
    console.log("selected consultation is", family);
    setSelectedConsultation(family);
  };

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
      <div
        className="absolute z-[49] w-[222px] h-[600px] rotate-[32deg] left-[25vw] top-[-52px]  bg-gradient-to-t opacity-10 from-transparent to-white"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      ></div>
      <div
        className="absolute  z-[49] w-[222px] h-[600px] rotate-[32deg] left-[-47vw] top-[-164px]  bg-gradient-to-t from-transparent opacity-10 to-white"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      ></div>
      {/* form */}
      <Navbar />

      {/* <AnimatedCarousel /> */}
      <div>
        <p className="mx-auto text-[28px] text-white text-center font-black uppercase mt-[140px]">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
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
            className="backdrop-blur bg-white bg-opacity-10  rounded-full shadow-xl p-2 mt-8 text-white font-semibold placeholder:text-white focus:outline-none "
          />

          <CustomDropDown
            trigger={
              <div className="backdrop-blur bg-white bg-opacity-10 rounded-full shadow-xl p-2 text-start   text-white font-semibold">
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
              <div className="backdrop-blur bg-white bg-opacity-10 rounded-full  shadow-xl p-2 text-start   text-white font-semibold  ">
                Choose Services
              </div>
            }
            content={<ChooseServices />}
          />

          <CustomDropDown
            trigger={
              <div className="backdrop-blur bg-white bg-opacity-10 rounded-full  shadow-xl p-2 text-start   text-white font-semibold  ">
                Choose Doctor
              </div>
            }
            content={<ChooseDoctor />}
          />
          <CustomDropDown
            trigger={
              <div className="backdrop-blur bg-white bg-opacity-10 rounded-full shadow-xl p-2 text-start   text-white font-semibold  ">
                Choose consultation
              </div>
            }
            content={
              <ChooseConsultation onSelectConsultation={selectConsultation} />
            }
          />
          <Link to="/invoice">
            <p className="bg-[#252525] font-bold text-white text-[20px] text-bold uppercase p-2 text-center rounded-full">
              Book Now
            </p>
          </Link>
        </div>
      </div>

      {/* Dialog Trigger */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-[60] min-w-[300px]">
          <div className="mx-2">
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
        </div>
      )}

      {showAppDownloadModal && <AppDownloadModal />}
    </div>
  );
}
