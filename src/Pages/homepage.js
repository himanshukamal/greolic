import React from "react";
// import TopAdvertisement from "./components/TopAdvertisement";
import Footer from "../components/footer";
import Search from "../components/home/Search";
import DentistFeatures from "../components/home/features";
import TopAdvertisement from "../components/TopAdvertisement";

export default function homepage() {
  return (
    <div>
      <div className="overflow-hidden">
        <TopAdvertisement />
        <Search />
        <DentistFeatures />
        <Footer />
      </div>
    </div>
  );
}
