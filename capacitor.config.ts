import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "nextjs-capacitor-demo",
  webDir: "out",
  server: {
    androidScheme: "https",
    url: "http://10.0.21.5:3000",
    cleartext: true,
  },
};

export default config;
