import React, { useState, useRef } from "react";

const OtpInput = () => {
  const [password, setPassword] = useState(Array(4).fill(-1));
  const [activeInput, setActiveInput] = useState(0);
  const inpRefs = useRef(null);

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
    </div>
  );
};

export default OtpInput;
