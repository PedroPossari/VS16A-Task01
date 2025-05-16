"use client";

import dynamic from "next/dynamic";
import { SimpleGallery } from "../../../components/SimpleGallery/SimpleGallery";
import styles from "./colaboradores.module.scss";

const WindowResizer = dynamic(
  () => import("../../../components/WindowResizer/WindowResizer"),
  { ssr: false, loading: () => <p>Carregando...</p> }
);

export default function ColaboradoresPage() {
  const images = [
    { src: "/img/ANA-CEO.jpg", name: "Ana Silva", role: "CEO" },
    { src: "/img/Carlos.jpg", name: "Carlos Mendes", role: "CTO" },
    { src: "/img/Mariana.jpeg", name: "Mariana Costa", role: "Diretora de Marketing" }
  ];

  return (
    <div className={styles.colaboradoresContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Nossos Colaboradores</h1>
          <p>Conheça o time que faz a diferença todos os dias</p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <h2>Conheça Nossa Equipe</h2>
        <p className={styles.galleryDescription}>
          Nossos colaboradores são o coração da nossa empresa. Cada um traz habilidades únicas
          e paixão pelo que faz, criando juntos um ambiente inovador e acolhedor.
        </p>
        <SimpleGallery images={images} />
      </section>

      <section className={styles.teamValues}>
        <h2>Nossos Valores</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>👥</div>
            <h3>Colaboração</h3>
            <p>Trabalhamos juntos, compartilhando conhecimento e apoiando uns aos outros para alcançar nossos objetivos comuns.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>💡</div>
            <h3>Inovação</h3>
            <p>Encorajamos a criatividade e buscamos constantemente novas maneiras de melhorar e crescer.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>❤️</div>
            <h3>Respeito</h3>
            <p>Valorizamos a diversidade e tratamos todos com dignidade, empatia e compreensão.</p>
          </div>
        </div>
      </section>

      <WindowResizer />
    </div>
  );
}