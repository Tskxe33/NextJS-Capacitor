import { Inter } from "next/font/google";
import { Share } from "@capacitor/share";
import { Capacitor } from "@capacitor/core";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import { Camera, CameraResultType } from "@capacitor/camera";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ScreenBrightness } from "@capacitor-community/screen-brightness";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [photo, setPhoto] = useState("");

  const share = async () => {
    try {
      await Share.share({
        title: "IT Engine",
        text: "The engine that keeps your business moving.",
        url: "https://itengine.rs/",
        dialogTitle: "Share with friends",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const setCurrentBrightness = async () => {
      const { brightness: currentBrightness } =
        await ScreenBrightness.getBrightness();

      console.log(currentBrightness);

      await ScreenBrightness.setBrightness({ brightness: -1 });
    };

    Capacitor.isNativePlatform() && setCurrentBrightness();
  }, []);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    image?.webPath && setPhoto(image?.webPath);
  };

  return (
    <>
      {Capacitor.isNativePlatform() && <Header />}
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        {!Capacitor.isNativePlatform() && (
          <h1 className="text-slate-950">
            We don&#39;t have access to the native camera on web.
          </h1>
        )}
        {Capacitor.isNativePlatform() && (
          <button
            onClick={share}
            type="button"
            className="mt-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            SHARE TESTING
          </button>
        )}

        {Capacitor.isNativePlatform() && (
          <>
            <button
              onClick={takePicture}
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              CAMERA TESTING
            </button>

            {photo && (
              <Image
                src={photo}
                width={50}
                height={50}
                alt="photo"
                className="w-screen"
              />
            )}
          </>
        )}
      </main>
    </>
  );
}
