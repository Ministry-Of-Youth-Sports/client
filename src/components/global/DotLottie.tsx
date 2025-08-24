import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const DotLottie = ({ url }: { url: string }) => {
  return <DotLottieReact src={url} loop autoplay />;
};

export default DotLottie;
