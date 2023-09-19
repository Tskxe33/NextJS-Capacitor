import dynamic from "next/dynamic";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const NonSSRWrapper: React.FC<Props> = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
