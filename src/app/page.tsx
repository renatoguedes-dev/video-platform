import Header from "./components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <Header />
      <h1>Pagina Inicial</h1>
    </div>
  );
}
