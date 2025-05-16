"use client";

import useRealWindowResizer from "../../hooks/useWindowResize";

export default function PaginaRedimensionavel() {
  const { width, height, resizeWindow } = useRealWindowResizer();

  const presets = [
    // Smartphones pequenos
    { label: "iPhone SE", width: 375, height: 667 },
    { label: "Galaxy S8", width: 360, height: 740 },
    
    // Smartphones médios
    { label: "iPhone 12 Pro", width: 390, height: 844 },
    { label: "Pixel 5", width: 393, height: 851 },
    
    // Smartphones grandes
    { label: "iPhone 14 Pro Max", width: 430, height: 932 },
    { label: "Galaxy S22 Ultra", width: 412, height: 915 },
    
    // Tablets pequenos
    { label: "iPad Mini", width: 768, height: 1024 },
    { label: "Nexus 7", width: 600, height: 960 },
    
    // Tablets grandes
    { label: "iPad Pro 11\"", width: 834, height: 1194 },
    { label: "iPad Pro 12.9\"", width: 1024, height: 1366 },
    
    // Notebooks/Desktops
    { label: "HD", width: 1366, height: 768 },
    { label: "Full HD", width: 1920, height: 1080 },
    { label: "2K", width: 2560, height: 1440 },
    { label: "4K", width: 3840, height: 2160 },
    
    // Telas ultrawide
    { label: "Ultrawide 21:9", width: 2560, height: 1080 },
    { label: "Super Ultrawide", width: 3840, height: 1080 },
    
    // Modo retrato
    { label: "Desktop Retrato", width: 768, height: 1024 },
    { label: "4K Retrato", width: 2160, height: 3840 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Redimensionador Real de Janela</h1>
      
      <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          <strong>Importante:</strong> Esta função só funciona completamente se:
        </p>
        <ul className="list-disc pl-5 mt-2 text-yellow-700">
          <li>O navegador não bloqueou pop-ups</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
      </div>

      <div className="flex gap-2 mb-4">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => resizeWindow(preset.width, preset.height)}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <p>Tamanho atual: {width} × {height} pixels</p>
      </div>
    </div>
  );
}