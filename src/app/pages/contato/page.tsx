import styles from "./contato.module.scss";

export default function Contato() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entre em Contato</h1>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <h2>Informações de Contato</h2>
          <p>
            <i className={styles.icon}></i>
            email@exemplo.com
          </p>
          <p>
            <i className={styles.icon}></i>
            (00) 1234-5678
          </p>
          <p>
            <i className={styles.icon}></i>
            Rua Exemplo, 123 - Cidade/Estado
          </p>
        </div>

        <form className={styles.contactForm}>
          <h2>Envie uma Mensagem</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Assunto</label>
            <input type="text" id="subject" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
