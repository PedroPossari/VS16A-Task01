import Link from 'next/link';
import styles from './navbar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/pages/home">Home</Link>
      <Link href="/pages/menu2">Matérias</Link>
      <Link href="/pages/menu3">Simulados</Link>
    </nav>
  );
}