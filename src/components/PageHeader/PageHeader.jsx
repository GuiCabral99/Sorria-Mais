import { useState } from "react";
import styles from "./PageHeader.module.css";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function PageHeader(props) {
  const [trigger, setTrigger] = useState(true);
  const [menu, setMenu] = useState(styles.menuOff);
  const [menuBars, setMenuBars] = useState(styles.menuBars);
  const [menuX, setMenuX] = useState(styles.hidden);

  function changeClass() {
    setTrigger(!trigger);
    if (trigger) {
      setMenu(styles.menuOn);
      setMenuBars(styles.hidden);
      setMenuX(styles.menuX);
    } else {
      setMenu(styles.menuOff);
      setMenuBars(styles.menuBars);
      setMenuX(styles.hidden);
    }
  }

  return (
    <header
      className={`${styles.page_header}  ${props.page_header_home}`}
      id="home"
    >
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src="/imgs/favicon.png" alt="logo dente" />
          <p>Clínica Sorria Mais</p>
        </div>
        <div
          className={menuBars}
          onClick={(e) => {
            changeClass();
          }}
        >
          <FaBars className={styles.menuBarsIcon} />
        </div>
        <div
          className={menuX}
          onClick={(e) => {
            changeClass();
          }}
        >
          <FaTimes className={styles.menuXIcon} />
        </div>
      </div>
      <nav className={menu}>
        <a href="#home" className={props.homeLink}>
          Página inicial
        </a>
        <a href="#services" className={props.servicesLink}>
          Serviços
        </a>
        <a href="#testimonies" className={props.testimoniesLink}>
          Depoimentos
        </a>
        <a href="#local" className={props.contactLink}>
          Localização
        </a>
      </nav>
      <SocialMedia />
    </header>
  );
}
