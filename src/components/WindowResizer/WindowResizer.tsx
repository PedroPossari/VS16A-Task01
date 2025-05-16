"use client";

import { useWindowResizer } from '../../app/hooks/useWindowResize';

type Preset = {
  label: string;
  width: number;
  height: number;
};

export default function WindowResizer() {
  const { width, height, resizeWindow } = useWindowResizer(); 

  const presets: Preset[] = [
    { label: "Celular", width: 375, height: 667 },
    { label: "Tablet", width: 768, height: 1024 },
    { label: "Notebook", width: 1366, height: 768 },
    { label: "Desktop", width: 1920, height: 1080 },
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Redimensionador de Janela</h1>
      
      <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-yellow-800">
          <strong>Atenção:</strong> Alguns navegadores podem bloquear o redimensionamento.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {presets.map(({ label, width: w, height: h }) => (
          <button
            key={label}
            onClick={() => resizeWindow(w, h)} 
            className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded text-sm"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="p-3 bg-gray-50 rounded border">
        <p>Tamanho atual: <strong>{width} × {height}px</strong></p>
      </div>
    </div>
  );
}