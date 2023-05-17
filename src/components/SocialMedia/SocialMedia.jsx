import styles from "./SocialMedia.module.css";

import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className={styles.social_media_container}>
      <a href="https://www.instagram.com/clinica_sorria__mais/" target="_blank">
        <FaInstagram className={styles.social_media} />
      </a>

      <a
        href="https://www.facebook.com/ClinicaSorriaMaisBarretos"
        target="_blank"
      >
        <FaFacebook className={styles.social_media} />
      </a>
      {/* <a href="/about">
        <FaWhatsapp className={styles.social_media} />
      </a> */}
    </div>
  );
}
