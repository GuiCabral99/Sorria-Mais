import styles from "../PageHeader/PageHeader.module.css";

export default function PageHeader() {
  return (
    <main className={styles.page_header}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src="" alt="" />
          <p>Clínica Sorria Mais</p>
        </div>
        <div className={styles.links}>
          <a href="/">Página inicial</a>
          <a href="/services">Serviços</a>
          <a href="/about">Sobre</a>
          <a href="/testimonies">Depoimentos</a>
          <a href="/contact">Contato</a>
        </div>
      </div>
    </main>
  );
}
