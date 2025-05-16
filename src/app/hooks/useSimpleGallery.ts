import { useState } from "react";

export const useSimpleGallery = (images: string[], startIndex = 0) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const next = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  return {
    currentImage: images[currentIndex],
    currentIndex,
    total: images.length,
    next,
    prev,
    goTo,
  };
};
