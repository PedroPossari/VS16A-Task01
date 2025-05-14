import React from "react";
import styles from './menu3.module.scss';

export default function Menu3() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Simulados Online</h1>
          <p className={styles.subtitle}>Teste seus conhecimentos e prepare-se para o grande dia!</p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span>+10.000</span>
              <p>Questões disponíveis</p>
            </div>
            <div className={styles.statItem}>
              <span>100%</span>
              <p>Baseado nos editais</p>
            </div>
            <div className={styles.statItem}>
              <span>24h</span>
              <p>Disponível quando quiser</p>
            </div>
          </div>
        </section>
        
        <section className={styles.features}>
          <div className={`${styles.card} ${styles.enem}`}>
            <div className={styles.icon}>🏆</div>
            <h3>Simulado ENEM Completo</h3>
            <p>180 questões no formato oficial com tempo real e relatório detalhado.</p>
            <div className={styles.details}>
              <span>⏱️ 5h30 de prova</span>
              <span>📊 Nota TRI</span>
            </div>
            <button className={styles.cardButton}>Iniciar Simulado</button>
          </div>
          
          <div className={`${styles.card} ${styles.materia}`}>
            <div className={styles.icon}>📚</div>
            <h3>Simulado por Matéria</h3>
            <p>Foque nas disciplinas que precisa melhorar com provas específicas.</p>
            <div className={styles.details}>
              <span>🧩 40 questões</span>
              <span>🎯 Nível selecionável</span>
            </div>
            <button className={styles.cardButton}>Escolher Matéria</button>
          </div>
          
          <div className={`${styles.card} ${styles.ranking}`}>
            <div className={styles.icon}>📈</div>
            <h3>Desempenho e Ranking</h3>
            <p>Acompanhe sua evolução e compare seu desempenho nacionalmente.</p>
            <div className={styles.details}>
              <span>🏅 Medalhas</span>
              <span>📅 Histórico completo</span>
            </div>
            <button className={styles.cardButton}>Ver Resultados</button>
          </div>
        </section>
      </main>
    </>
  );
}