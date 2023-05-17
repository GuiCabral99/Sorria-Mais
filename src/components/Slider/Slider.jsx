import { useState } from "react";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import styles from "./Slider.module.css";

export default function Slider({ children: depoimentos }) {
  const [countWitness, setCountWitness] = useState(0);

  const nextWitness = () => {
    setCountWitness((countWitness) =>
      countWitness === depoimentos.length - 1 ? 0 : countWitness + 1
    );
  };
  const backWitness = () => {
    setCountWitness((countWitness) =>
      countWitness === 0 ? depoimentos.length - 1 : countWitness - 1
    );
  };

  return (
    <main className={styles.container}>
      <div
        className={styles.witnessContainer}
        style={{ transform: `translateX(-${countWitness * 18}rem` }}
      >
        {depoimentos}
      </div>
      <div className={styles.btnContainer}>
        <button onClick={nextWitness}>
          <FaArrowAltCircleRight className={styles.btn} />
        </button>
        <button onClick={backWitness}>
          <FaArrowAltCircleLeft className={styles.btn} />
        </button>
      </div>
    </main>
  );
}
