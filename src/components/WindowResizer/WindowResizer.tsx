"use client";

import { useWindowResizer } from '../../app/hooks/useWindowResize';
import styles from './WindowResizer.module.scss';

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
    <div className={styles.windowResizer}>
      <h2 className={styles.title}>Redimensionador de Janela</h2>
      
      <div className={styles.alert}>
        <svg className={styles.alertIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
        </svg>
        <p>Atenção: Alguns navegadores podem bloquear o redimensionamento.</p>
      </div>

      <div className={styles.presets}>
        {presets.map(({ label, width: w, height: h }) => (
          <button
            key={label}
            onClick={() => resizeWindow(w, h)} 
            className={styles.presetButton}
          >
            {label}
            <span className={styles.presetSize}>{w}×{h}</span>
          </button>
        ))}
      </div>

      <div className={styles.currentSize}>
        <svg className={styles.sizeIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clipRule="evenodd" />
        </svg>
        <p>Tamanho atual: <strong>{width} × {height}px</strong></p>
      </div>
    </div>
  );
}