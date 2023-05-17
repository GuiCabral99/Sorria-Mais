import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h4>Ligue (17) 3612-0723</h4>
        <h4> Whatsapp (17) 99743-3129</h4>
      </div>
      <div className={styles.time}>
        <p>
          Segunda à Sexta das 8h as 19h <span>aos Sábados das 8h as 12h</span>
        </p>
      </div>
      <div className={styles.copy}>
        <p>
          <img src="/imgs/favicon.png" alt="logo dente" />
          &copy; 2023 Clínica Sorria Mais.
        </p>
      </div>
    </footer>
  );
}
