import Image from "next/image";
import Link from "next/link";
import { Destino } from "@/data/destinos";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
  destino: Destino;
};

export function CardDestino({ destino }: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={destino.imagem}
          alt={`Foto de ${destino.nome}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2>{destino.nome}</h2>
        <p>{destino.localizacao}</p>
        <Link href={`/destinos/${destino.id}`} className={styles.link}>
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}
