import { FaWhatsapp } from "react-icons/fa";

import styles from "./ScheduleBtn.module.css";

export default function ScheduleBtn() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5517997433129"
      className={styles.btn}
      target="_blank"
    >
      <FaWhatsapp className={styles.wpp} />
    </a>
  );
}
