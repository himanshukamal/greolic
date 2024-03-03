import React from "react";
import * as Progress from "@radix-ui/react-progress";

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <Progress.Indicator
        className="h-full bg-gradient-to-r from-[#FF5764] to-[#FF4AE2]"
        style={{ width: `${progress}%` }}
      />
    </Progress.Root>
  );
};

export default ProgressDemo;
