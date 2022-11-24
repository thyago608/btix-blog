import React from "react";
import Lottie from "react-lottie";
import girlCodingAnimation from "assets/animation/girl-coding.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: girlCodingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function Hero() {
  return <Lottie options={defaultOptions} />;
}
