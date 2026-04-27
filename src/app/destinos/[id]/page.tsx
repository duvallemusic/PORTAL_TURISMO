import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinos } from "@/data/destinos";
import styles from "./detalhe.module.css";

type DestinoDetailProps = {
  params: Promise<{ id: string }>;
};

export default async function DestinoDetailPage({ params }: DestinoDetailProps) {
  const { id } = await params;
  const destino = destinos.find((item) => item.id === id);

  if (!destino) {
    notFound();
  }

  return (
    <article className={styles.detail}>
      <Link href="/destinos" className={styles.back}>
        Voltar para destinos
      </Link>
      <h1>{destino.nome}</h1>
      <div className={styles.imageWrapper}>
        <Image
          src={destino.imagem}
          alt={`Foto de ${destino.nome}`}
          fill
          className={styles.image}
          sizes="100vw"
        />
      </div>
      <p>{destino.descricao}</p>
      <ul>
        <li>
          <strong>Localizacao:</strong> {destino.localizacao}
        </li>
        <li>
          <strong>Melhor epoca:</strong> {destino.melhorEpoca}
        </li>
      </ul>
    </article>
  );
}
