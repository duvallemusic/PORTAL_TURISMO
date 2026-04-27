import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1>Descubra o seu proximo destino</h1>
      <p>
        Bem-vindo ao Portal Turismo. Aqui voce encontra destinos incriveis para
        planejar viagens memoraveis pelo Brasil.
      </p>
      <Link href="/destinos" className={styles.button}>
        Ver destinos
      </Link>
    </section>
  );
}
