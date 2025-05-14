import React from "react";
import styles from './start.module.scss';

export default function Start() {
    return(
      <>   
      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Bem-vindo ao Portal do Vestibular</h2>
          <p>Seu destino completo para se preparar para os vestibulares do Brasil!</p>
        </section>
        <section className={styles.features}>
          <div className={styles.card}>
            <h3>Resumos</h3>
            <p>Conteúdos objetivos e atualizados das principais disciplinas.</p>
          </div>
          <div className={styles.card}>
            <h3>Simulados</h3>
            <p>Simulados online com correção automática para treinar seu conhecimento.</p>
          </div>
          <div className={styles.card}>
            <h3>Dicas</h3>
            <p>Orientações de estudo, técnicas de memorização e motivação.</p>
          </div>
        </section>
      </main>
    </>
    );
}