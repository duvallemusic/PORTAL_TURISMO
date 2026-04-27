import Link from "next/link";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            Portal Turismo
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Inicio</Link>
            <Link href="/destinos">Destinos</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Explore o Brasil e planeje sua proxima viagem.</p>
        </div>
      </footer>
    </div>
  );
}
