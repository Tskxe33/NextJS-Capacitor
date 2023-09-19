import { Inter } from "next/font/google";
import { Share } from "@capacitor/share";
import { Capacitor } from "@capacitor/core";
import Navbar from "./components/navbar";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const share = async () => {
    await Share.share({
      title: "IT Engine",
      text: "The engine that keeps your business moving.",
      url: "https://itengine.rs/",
      dialogTitle: "Share with friends",
    });
  };

  return (
    <>
      {Capacitor.isNativePlatform() && <Header />}
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <h1></h1>
        {Capacitor.isNativePlatform() && (
          <button
            onClick={share}
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            SHARE
          </button>
        )}
      </main>
    </>
  );
}
