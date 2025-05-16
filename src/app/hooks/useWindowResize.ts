"use client";

import { useState } from "react";

const useRealWindowResizer = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeWindow = (width: number, height: number) => {
    if (window.opener && window.name) {
      window.resizeTo(width, height);
    } else {
      const newWindow = window.open(
        window.location.href,
        "redimensionavel",
        `width=${width},height=${height}`
      );

      if (newWindow) {
        window.close();
      } else {
        alert("Permita pop-ups para redimensionamento automático");
      }
    }

    setWindowSize({ width, height });
  };

  return {
    width: windowSize.width,
    height: windowSize.height,
    resizeWindow,
  };
};

export default useRealWindowResizer;
