import React from "react";
import TopAdvertisement from "../components/TopAdvertisement";
import Testimonial from "../components/landingPage/testimonial";
import Basefooter from "../components/landingPage/basefooter";

import InvoiceBill from "../components/invoice/invoiceBill";
import Navbar from "../components/navbar";
import DoctorInfoCard from "../components/doctorInfoCard";

export default function Invoice() {
  return (
    <div className="max-w-[425px] mx-auto">
      <TopAdvertisement />
      <Navbar />
      <InvoiceBill />
      <DoctorInfoCard />
      <Testimonial />
      <Basefooter />
    </div>
  );
}
