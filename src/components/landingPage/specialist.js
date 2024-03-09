import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, AnimatePresence } from "framer-motion";
import ProgressDemo from "./GradientProgressbar";
// import WhiteProgressBar from "./WhiteProgressbar";

export default function Specialist() {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % 3);
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[542px] bg-gradient-to-br from-[#AD37E0] to-[#EE2B3B]">
      <p className="text-[20px] text-[#c95dc8] font-bold mx-4 pt-4">Our</p>
      <div className="flex justify-between">
        <p className="text-[36px] text-[#fff] font-bold leading-[18px] mx-4">
          Specialist
        </p>
        {/* white progressbar */}
        <WhiteProgressBar currentCard={currentCard} />
      </div>

      {/* specialist carousel */}
      <div className="flex justify-center overflow-hidden gap-2">
        <AnimatePresence>
          {currentCard === 0 && <CardMotion key={0} />}
          {currentCard === 1 && <CardMotion key={1} />}
          {currentCard === 2 && <CardMotion key={2} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

const CardMotion = ({ key, currentCard }) => {
  return (
    <motion.div
      key={key}
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      exit={{ x: "-100%", opacity: 0, transition: { duration: 0.5 } }}
      className={`w-[268px] h-[386px] rounded-[134px] p-8 mt-4 shadow-lg ${
        key === currentCard ? "bg-white" : "bg-[rgba(255, 255, 255, 0.1)]"
      }`}
    >
      <div className="w-[208px] h-[208px] rounded-full">
        <LazyLoadImage src="/specialist1.svg" alt="" className="rounded-full" />
      </div>
      <div className="">
        <p className="text-[#bebebe] font-bold text-[11px] uppercase text-center mt-8">
          BDS, MDS
        </p>
        <p className="text-center text-[20px] font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
          Dr. Brian Stanley
        </p>
        <p className="text-center text-[11px] font-bold text-[#252525]">
          Dental Specialist
        </p>
        <div className="flex justify-center mt-2">
          <LazyLoadImage src="starbutton.svg" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

// const WhiteProgressBar = ({ currentCard }) => {
//   const stepWidth = 100 / 3; // Divide the progress bar into equal steps based on the number of cards
//   const progressWidth = stepWidth * (currentCard + 1);

//   return (
//     <div className="absolute top-0 left-0 right-0 h-1 bg-white w-[50px]">
//       <div
//         className="h-full bg-white"
//         style={{ width: `${progressWidth}%`, transition: "width 1s" }}
//       ></div>
//     </div>
//   );
// };
const WhiteProgressBar = ({ currentCard }) => {
  const progressWidth = ((currentCard + 1) / 3) * 100; // Calculate progress width based on current card index

  return (
    <div className="h-2 bg-pink-500 relative w-[40px] mr-2 rounded-full">
      <div
        className="h-full bg-white absolute top-0 left-0 rounded-full"
        style={{ width: `${progressWidth}%`, transition: "width 1s" }}
      ></div>
    </div>
  );
};
