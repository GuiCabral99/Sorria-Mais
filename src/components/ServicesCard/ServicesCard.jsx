import styles from "./ServicesCard.module.css";

export default function ServicesCard(props) {
  return (
    <div className={styles.card}>
      <img src={props.srcImg} alt={props.altImg} />
      <div className={styles.text}>
        <h3>{props.titleCard}</h3>
        <p>{props.paragraphCard}</p>
      </div>
    </div>
  );
}
