import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Select, MenuItem, Drawer } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useWindowSize } from "@react-hook/window-size";
import SelectCityModal from "../modals/selectCityModal";
import { useSelector } from "react-redux";

export default function InvoiceNavbar() {
  const [showFirstCard, setShowFirstCard] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [width, height] = useWindowSize();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedCity = useSelector((state) => state.city.selectedCity);

  console.log("selectedCity in payment navbar", selectedCity);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstCard((prev) => !prev);
    }, 3000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="relative overflow-visible">
      <div className="fixed w-full max-w-[425px] top-[30px] z-[50] bg-gradient-to-r from-[#CE318C] to-[#DC2E68]  p-2 h-[76px] overflow-visible ">
        {/* white bg */}
        {/* <div className="absolute bg-white top-[-28px] opacity-5 w-[223px] h-[312px] rotate-[35deg]  right-[-52px] z-[-2]"></div> */}
        {/* logo and menu */}
        <div
          className="fixed top-[30px] max-w-[425px] mx-auto left-0 right-0  px-4 flex justify-between items-center h-[76px]"
          style={{
            backgroundImage:
              "url('/Rectangle 1716.svg'),url('/Rectangle 1713.svg')",
            backgroundPosition: "left -30px, right -30px",
            backgroundRepeat: "no-repeat,no-repeat",
          }}
        >
          <div className="flex items-center">
            <Link to="/landing">
              <LazyLoadImage
                src="/eva_arrow-back-fill.svg"
                alt="My Image"
                //   className="w-[10px] h-[10px]"
                // effect="blur" // Optional, for blur-up effect
              />
            </Link>
            <LazyLoadImage
              src="/doclogo.svg"
              alt="My Image"
              className=" ml-2"
              // effect="blur" // Optional, for blur-up effect
            />
          </div>

          {/* droopdown and sidebar */}
          <div className="flex items-center">
            {!selectedCity ? (
              <button
                onClick={handleOpenModal}
                className="p-2 text-white rounded-full  px-4 text-[12px] font-bold"
              >
                {/* Open the modal on button click */}
                Select City
              </button>
            ) : (
              <p className="text-[12px] text-white font-bold px-4">
                {selectedCity}
              </p>
            )}

            <button onClick={toggleDrawer}>
              <LazyLoadImage src="/sidemenu.svg" />
            </button>
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
              <div className="p-4 w-[80vw] bg-[#FCF2FC] overflow-scroll noscrollbar min-h-[100vh]">
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
                  <LazyLoadImage
                    src="icons/redlock.svg"
                    alt="mobile1"
                    className="ml-2 mr-2 w-[14px] h-[14px]"
                  />
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

        {/* animated carousel */}
        <div className="overflow-hidden mt-2 ">
          <div className="flex justify-center pb-1 rounded-full">
            <AnimatePresence>
              {showFirstCard ? (
                <motion.div
                  key="first"
                  initial={{ opacity: 0, x: "10%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-10%" }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
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
                  initial={{ opacity: 0, x: "10%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-10%" }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
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
      <div className="mx-2">
        <SelectCityModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
}
