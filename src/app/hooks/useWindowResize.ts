"use client";

import { useState } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

export function useWindowResizer() {
  const [size] = useState<WindowSize>({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0, 
    height: typeof window !== 'undefined' ? window.innerHeight : 0 
  });

  const resizeWindow = (width: number, height: number) => {
      const features = `
        width=${width},
        height=${height},
        left=${(window.screen.width - width) / 2},
        top=${(window.screen.height - height) / 2}
      `;
      const newWindow = window.open(window.location.href, '_blank', features);
      
      if (!newWindow) {
        alert('Por favor, permita pop-ups para esta funcionalidade');
        return;
      }
  };

  return { ...size, resizeWindow }; 
}