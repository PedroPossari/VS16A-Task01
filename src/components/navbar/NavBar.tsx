// components/NavBar.tsx
"use client";
import React from "react";
import styles from "./navbar.module.scss";
import TextMenu from "../textMenu/TextMenu";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      {" "}
      {/* Alterado de navContainer para navbar */}
      <div className={styles.navbar}>
        {" "}
        {/* Alterado de menuItems para navbar */}
        <TextMenu texto="Home" href="/" />
        <TextMenu texto="Matérias" href="/pages/menu2" />
        <TextMenu texto="Simulados" href="/pages/menu3" />
        <TextMenu texto="Quem Somos" href="/pages/quemSomos" />
        <TextMenu texto="Contato" href="/pages/contato" />
      </div>
    </nav>
  );
}
