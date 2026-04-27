import { CardDestino } from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./destinos.module.css";

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
