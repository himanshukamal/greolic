import React, { useState } from "react";
// import CustomDropDown from "./custom-dropdown";
import {
  Select,
  MenuItem,
  Drawer,
  Modal,
  Paper,
  Menu,
  makeStyles,
} from "@mui/material";
import CustomDropDown from "../custom-dropdown";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/system";
// import Select from '@mui/material/Select';

// StyledMenu to apply custom styles to Menu component
const StyledMenu = styled(Menu)({
  "& .MuiMenu-list": {
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default function SelectCityModal({ isOpen, onClose }) {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const [City, setSetCity] = React.useState("");

  const handleChange = (event) => {
    console.log("event", event);
    setSetCity(event.target.value);
  };

  return (
    <div>
      <Modal open={isOpen} onClose={onClose}>
        <div
          className="rounded-[50px] modal-content w-full max-w-[400px] h-[501px] bg-white p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ fontFamily: "Montserrat" }}
        >
          <div
            className="h-[185px] w-full relative"
            style={{
              backgroundImage: "url('/locationbg.svg')",
              objectFit: "cover",
              backgroundRepeat: "round",
              backgroundSize: "auto",
              fontFamily: "Montserrat",
            }}
          >
            <button className="absolute right-4 top-4" onClick={onClose}>
              <LazyLoadImage src="/roundedclose.svg" alt="Close" />
            </button>
          </div>

          <div className="rounded-[30px] bg-[#FCE7F3] h-[167px] p-4 mt-2 relative">
            <p className="font-bold text-[12px] text-[#252525]">Cities</p>
            {/* <Select
              className="text-[13px] font-bold text-black bg-transparent border-none appearance-none pr-2"
              IconComponent={IoIosArrowDown}
              value={selectedCity}
              onChange={handleSelectCity}
              defaultValue="delhi"
              sx={{
                fontSize: "13px",
                width: "100%",
                borderRadius: "30px",
                backgroundColor: "white",
                textAlign: "center",
                fontWeight: "500",
                color: "#D972AE",
                outline: "none",
                "& svg": {
                  color: "#000",
                },
                "&:focus": {
                  border: "none",
                  outline: "none",
                },
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            >
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              {/* Add more cities here */}
            {/* </Select> */}

            <FormControl fullWidth>
              {/* <InputLabel id="demo-simple-select-label">City</InputLabel> */}
              <Select
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                variant="standard"
                disableUnderline="true"
                value={City}
                label="City"
                // placeholder="city"
                renderValue={(value) => (value ? value : "Select an option")}
                onChange={handleChange}
                sx={{
                  border: "none",
                  height: "35px",
                  textAlign: "center",
                  color: "#C7609B",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  borderRadius: "30px",
                  backgroundColor: "#fff",
                  "& .Mui-selected": {
                    color: "#C7609B", // Color for the selected option
                  },
                }}

                // className="text-pink-500"
              >
                <MenuItem
                  value={"Delhi"}
                  divider={true}
                  // sx={{ textAlign: "center" }}
                  // sx={{ textAlign: "center", width: "100%" }}
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    justifyContent: "center", // Aligns the content horizontally
                    display: "flex", // Makes the content a flexbox container
                    fontSize: "14px",
                    color: "#C7609B",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                  }}
                >
                  Delhi
                </MenuItem>
                <MenuItem
                  value="Mumbai"
                  divider={true}
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    justifyContent: "center", // Aligns the content horizontally
                    display: "flex", // Makes the content a flexbox container
                    fontSize: "14px",
                    color: "#C7609B",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                  }}
                >
                  Mumbai
                </MenuItem>
                <MenuItem
                  value="Chennai"
                  divider={true}
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    justifyContent: "center", // Aligns the content horizontally
                    display: "flex", // Makes the content a flexbox container
                    fontSize: "14px",
                    color: "#C7609B",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                  }}
                >
                  Chennai
                </MenuItem>
                <MenuItem
                  value="Lucknow"
                  divider={true}
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    justifyContent: "center", // Aligns the content horizontally
                    display: "flex", // Makes the content a flexbox container
                    fontSize: "14px",
                    color: "#C7609B",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                  }}
                >
                  Lucknow
                </MenuItem>
                <MenuItem
                  value="Bangalore"
                  divider={true}
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    justifyContent: "center", // Aligns the content horizontally
                    display: "flex", // Makes the content a flexbox container
                    fontSize: "14px",
                    color: "#C7609B",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                  }}
                >
                  Bangalore
                </MenuItem>
                <MenuItem
                  value="Gurgaon"
                  divider={true}
                  // sx={{ marginBottom: "0px" }}
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    justifyContent: "center", // Aligns the content horizontally
                    display: "flex", // Makes the content a flexbox container
                    fontSize: "14px",
                    color: "#C7609B",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                  }}
                >
                  Gurgaon
                </MenuItem>
              </Select>
            </FormControl>
            <button className="rounded-full bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] text-white font-bold text-center mt-4 py-[10px] w-full">
              Choose City to proceed
            </button>
          </div>

          {/* last div */}
          <div className="relative h-[109px] w-full bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B] rounded-[40px] mt-2 p-4 flex overflow-hidden justify-around items-center">
            {/* bg circle */}
            <div className="w-[220px] h-[220px] p-14 absolute right-[-65px] top-[-107px] bg-gradient-to-br opacity-10 from-transparent to-white rounded-full">
              <div className="w-full h-full bg-[#252525] rounded-full"></div>
            </div>

            {/* bg-left */}

            <div className="w-[108px] h-[108px] p-7 absolute left-[-8px] top-[-39px] bg-gradient-to-br opacity-10 from-transparent to-white rounded-full">
              <div className="w-full h-full bg-[#252525] rounded-full"></div>
            </div>

            <div className="w-60">
              <p className="text-white font-black text-[18px]">
                Download app now!!
              </p>
              <p className="text-[8px] mt-2 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie.
              </p>
            </div>
            <div className="flex flex-col">
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
        </div>
      </Modal>
    </div>
  );
}
