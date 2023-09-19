import { Capacitor } from "@capacitor/core";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import { ScreenBrightness } from "@capacitor-community/screen-brightness";

const QRCodePage = () => {
  useEffect(() => {
    const setScreenBrightness = async () => {
      const brightness = 1;
      await ScreenBrightness.setBrightness({ brightness });
    };

    setScreenBrightness();
  }, []);

  return (
    <>
      {Capacitor.isNativePlatform() && <Header />}
      <Navbar />
      <h1 className="text-slate-950 text-center">QR CODE GENERATOR 👇</h1>
    </>
  );
};

export default QRCodePage;
