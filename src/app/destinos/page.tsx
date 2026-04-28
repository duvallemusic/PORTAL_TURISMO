import { CardDestino, type CardDestinoData } from "@/components/CardDestino";
import styles from "./destinos.module.css";

const destinos: CardDestinoData[] = [
  {
    id: "gramado",
    nome: "Gramado",
    imagem:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    descricao:
      "Cidade charmosa com clima europeu, ótima gastronomia e atrações para todas as idades.",
  },
  {
    id: "fernando-de-noronha",
    nome: "Fernando de Noronha",
    imagem:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    descricao:
      "Praias paradisíacas e mar cristalino, perfeito para mergulho e contato com a natureza.",
  },
  {
    id: "foz-do-iguacu",
    nome: "Foz do Iguaçu",
    imagem:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    descricao:
      "Destino famoso pelas Cataratas do Iguaçu e paisagens naturais impressionantes.",
  },
];

export default function DestinosPage() {
  return (
    <section>
      <header className={styles.header}>
        <h1>Destinos Turisticos</h1>
        <p>Escolha um destino para ver mais detalhes e montar seu roteiro.</p>
      </header>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}
