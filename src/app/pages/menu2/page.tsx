import styles from './menu2.module.scss';

export default function Menu2() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Conquiste sua Vaga na Universidade</h1>
          <p className={styles.subtitle}>Prepare-se com os melhores materiais organizados por disciplina</p>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Buscar matéria..." />
            <button>Pesquisar</button>
          </div>
        </section>
        
        <section className={styles.features}>
          <div className={`${styles.card} ${styles.math}`}>
            <div className={styles.icon}>∫</div>
            <h3>Matemática</h3>
            <p>Domine álgebra, geometria e cálculo com exercícios comentados.</p>
            <button className={styles.cardButton}>Ver Aulas</button>
          </div>
          
          <div className={`${styles.card} ${styles.portuguese}`}>
            <div className={styles.icon}>✍️</div>
            <h3>Português</h3>
            <p>Gramática aplicada, literatura e técnicas de redação dissertativa.</p>
            <button className={styles.cardButton}>Ver Aulas</button>
          </div>
          
          <div className={`${styles.card} ${styles.humanities}`}>
            <div className={styles.icon}>🌍</div>
            <h3>Humanidades</h3>
            <p>História, geografia e filosofia com abordagem interdisciplinar.</p>
            <button className={styles.cardButton}>Ver Aulas</button>
          </div>
          
          <div className={`${styles.card} ${styles.science}`}>
            <div className={styles.icon}>🔬</div>
            <h3>Ciências da Natureza</h3>
            <p>Química, física e biologia com experimentos virtuais.</p>
            <button className={styles.cardButton}>Ver Aulas</button>
          </div>
        </section>
      </main>
    </>
  );
}