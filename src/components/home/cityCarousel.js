import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";

const CityCarousel = () => {
  const [currentCity, setCurrentCity] = useState(0);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.pexels.com/v1/search?query=city&per_page=3",
          {
            headers: {
              Authorization:
                "kRG5AoH7olSFO4ZjQCLqIgJ7NoLK0WoTn6gTirPEBae8T0SCevRLJ19R",
            },
          }
        );
        setCities(response.data.photos);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCity((prevCity) => (prevCity + 1) % cities.length);
    }, 3000); // Change city every 3 seconds
    return () => clearInterval(interval);
  }, [cities]);

  return (
    <div className="flex items-center justify-between w-[177px] h-[42px] rounded-[50px] bg-white">
      <div className="w-[52px] h-[32px] ml-[0.45em] transition-opacity duration-500 ease-in-out">
        <img
          src={cities[currentCity]?.src.medium}
          alt="City"
          className="rounded-3xl h-[32px] object-fit min-w-[52px] "
        />
      </div>
      <p className="text-[14px] font-black text-transparent bg-gradient-to-r from-[#E4C17F]  to-[#E48E51] bg-clip-text">
        50 Cities
      </p>
      <div className="mr-4">
        <p className="text-[#E957C9] font-black text-[12px] transition-opacity duration-500 ease-in-out">{`${
          currentCity + 1
        }/${cities.length}`}</p>
        <div className="flex gap-0.5">
          {cities.map((_, index) => (
            <FaCircle
              key={index}
              size={3}
              color={index === currentCity ? "#E957C9" : "#C8C8C8"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityCarousel;
