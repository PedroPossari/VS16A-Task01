"use client";
import React, { useState } from "react";
import styles from "./navbar.module.scss";
import TextMenu from "../textMenu/TextMenu";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.mobileMenuButton} onClick={toggleMenu}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </div>
      
      <div className={`${styles.navItems} ${isMenuOpen ? styles.show : ""}`}>
        <TextMenu texto="Home" href="/" />
        <TextMenu texto="Matérias" href="/pages/menu2" />
        <TextMenu texto="Simulados" href="/pages/menu3" />
        <TextMenu texto="Quem Somos" href="/pages/quemSomos" />
        <TextMenu texto="Contato" href="/pages/contato" />
        <TextMenu texto="Redimencionar" href="/pages/testeJanela" />
      </div>
    </nav>
  );
}