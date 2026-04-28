import Image from "next/image";
import Link from "next/link";
import styles from "./CardDestino.module.css";

export type CardDestinoData = {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
};

type CardDestinoProps = {
  destino: CardDestinoData;
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
        <p>{destino.descricao}</p>
        <Link href={`/destinos/${destino.id}`} className={styles.link}>
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}
