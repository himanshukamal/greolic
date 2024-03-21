import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AppDownloadModal() {
  const [showAppDownloadModal, setShowAppDownloadModal] = useState(false);

  const handleShowAppDownloadModal = () => {
    console.log(" you are inside showAppDownloadModal");

    setShowAppDownloadModal(true);
    // setShowModal(false);
  };
  return (
    <div>
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
    </div>
  );
}
