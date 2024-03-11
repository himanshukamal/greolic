import React from "react";
import InvoiceNavbar from "../components/invoice/invoiceNavbar";
import TopAdvertisement from "../components/TopAdvertisement";
import PaymentForm from "../components/payments/paymentForm";
import Basefooter from "../components/landingPage/basefooter";
import ConfirmBooking from "../components/payments/confirm-booking";

export default function PaymentPage() {
  return (
    <div className="max-w-[425px] mx-auto">
      <TopAdvertisement />
      <InvoiceNavbar />
      <PaymentForm />
      <Basefooter customBtn={<ConfirmBooking />} />
    </div>
  );
}
