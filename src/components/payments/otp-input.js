import { LinearProgress } from "@mui/material";
import  { useState, useRef, useEffect } from "react";

const OtpInput = () => {
  const [password, setPassword] = useState(Array(4).fill(-1));
  const [activeInput, setActiveInput] = useState(0);
  const inpRefs = useRef(null);

  const [progress, setProgress] = useState(0);

   const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
        setProgress((prevProgress) => prevProgress + 3.33); // Increment by 3.33 for 30 steps
      } else {
        clearInterval(countdownInterval);
        console.log("Countdown complete!");
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [seconds]);

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace") {
      let pass = [...password];
      pass[i] = -1;
      setPassword(pass);
      setActiveInput(i - 1);
      if (i !== 0) {
        let nextInput = inpRefs.current[i - 1];
        nextInput?.focus();
      } else {
        inpRefs.current[i].blur();
      }
    }
  };

  const handleChange = (e, i) => {
    let v = e.nativeEvent["data"];
    let pass = [...password];
    let value = parseInt(v);
    if (!isNaN(value)) {
      pass[i] = value;
      setPassword(pass);
      setActiveInput(i + 1);
      let nextInput = inpRefs.current[i + 1];
      nextInput?.focus();
    }
  };

  const handleSumit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center bg-[#FCF2FD]  rounded-[50px]  p-4 my-5 flex flex-col justify-center items-center">
      <form onSubmit={handleSumit} ref={inpRefs}>
        <div className="flex space-x-4">
          {password.map((digit, i) => (
            <div
              key={i}
              className="w-18 h-14 relative  border-none overflow-hidden"
            >
              <input
                onFocus={() => setActiveInput(i)}
                onBlur={() => setActiveInput(-1)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onChange={(e) => handleChange(e, i)}
                className="w-full text-black border rounded-[50px]  border-[#ced4da] h-full text-center "
                id={`pin_${i}`}
                type="text"
                value={digit !== -1 ? digit : ""}
              ></input>
            </div>
          ))}
        </div>
      </form>

      <div className="w-full px-2 my-4">
        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ backgroundColor: "#fff", color: "#9C527C" }}
        />
      </div>

      <div className="flex justify-between w-full mb-4 px-2 ">
        <p className=" text-[#9C527C] cursor-pointer  ">Resend OTP in</p>
        <p className=" font-semibold  ">00:{seconds}</p>
      </div>
    </div>
  );
};

export default OtpInput;
