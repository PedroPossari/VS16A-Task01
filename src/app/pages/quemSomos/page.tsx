// app/quemSomos/page.tsx
import React from "react";
import styles from "./quemSomos.module.scss";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <main className={styles.quemSomosContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Quem Somos</h1>
          <p>Conheça nossa história, missão e valores</p>
        </div>
      </section>

      <section className={styles.historySection}>
        <div className={styles.sectionContent}>
          <div className={styles.textContent}>
            <h2>Nossa História</h2>
            <p>
              Fundada em 2010, nossa plataforma nasceu da necessidade de oferecer
              recursos educacionais de qualidade para estudantes de todo o Brasil.
              Começamos como um pequeno projeto e hoje somos referência em
              preparação para vestibulares e ENEM.
            </p>
            <p>
              Ao longo dos anos, ajudamos mais de 500.000 estudantes a alcançar
              seus objetivos acadêmicos.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/img/EquipeReunida.png"
              alt="Nossa equipe em reunião"
              width={500}
              height={350}
              className={styles.historyImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.sectionContent}>
          <h2>Missão, Visão e Valores</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h3>Missão</h3>
              <p>
                Democratizar o acesso à educação de qualidade, proporcionando
                ferramentas eficazes para o aprendizado e desenvolvimento
                acadêmico.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Visão</h3>
              <p>
                Ser reconhecida como a principal plataforma de apoio educacional
                do Brasil, transformando vidas através do conhecimento.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Valores</h3>
              <ul>
                <li>Excelência acadêmica</li>
                <li>Acessibilidade</li>
                <li>Inovação constante</li>
                <li>Compromisso com resultados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.sectionContent}>
          <h2>Nossa Equipe</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamCard}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className={styles.teamImage}
                />
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const teamMembers = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Fundadora e CEO",
    bio: "Pedagoga com 15 anos de experiência em educação digital.",
    image: "/img/ANA-CEO.jpg",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Diretor Acadêmico",
    bio: "Mestre em Educação pela USP e especialista em tecnologias educacionais.",
    image: "/img/Carlos.jpg",
  },
  {
    id: 3,
    name: "Mariana Oliveira",
    role: "Coordenadora de Conteúdo",
    bio: "Licenciada em Letras e autora de materiais didáticos.",
    image: "/img/Mariana.jpeg",
  },
];