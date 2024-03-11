import React from "react";
import TopAdvertisement from "../components/TopAdvertisement";
import AppoitmentForm from "../components/landingPage/AppoitmentForm";
import Achievement from "../components/landingPage/Achievement";
import Basefooter from "../components/landingPage/basefooter";
import Services from "../components/landingPage/services";
import Specialist from "../components/landingPage/specialist";
import Testimonial from "../components/landingPage/testimonial";
import Navbar from "../components/navbar";

export default function Landingpage() {
  return (
    <div>
      <div className="max-w-[425px] mx-auto">
        <TopAdvertisement />
        <AppoitmentForm />
        <Achievement />
        <Services />
        <Specialist />
        <Testimonial />
        <Basefooter />
      </div>
    </div>
  );
}
