import { Capacitor } from "@capacitor/core";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/navbar";

const QRCodePage = () => {
  return (
    <>
      {Capacitor.isNativePlatform() && <Header />}
      <Navbar />
    </>
  );
};

export default QRCodePage;
