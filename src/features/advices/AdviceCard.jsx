import styles from "./AdviceCard.module.css";
import DiceButton from "./components/DiceButton/DiceButton";
import { useAdvice } from "./hooks/useAdvice";
import { motion } from "motion/react";

function AdviceCard() {
  const { currentAdvice, getNewAdvice, isLoading } = useAdvice();

  return (
    <motion.article
      className={styles.card}
      initial={{ scale: 0.75 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.35 }}
      layout
    >
      <section className={styles.card__content}>
        <h1 className={styles.card__id}>Advice #{currentAdvice.id}</h1>
        <motion.p className={styles.card__advice}>
          &ldquo;{currentAdvice.advice}&rdquo;
        </motion.p>
      </section>

      <svg
        viewBox="0 0 444 16"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["card__divisor--desktop"]}
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>

      <svg
        viewBox="0 0 295 16"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["card__divisor--mobile"]}
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>

      <DiceButton
        onClick={getNewAdvice}
        type="button"
        disabled={isLoading}
        className={styles.card__button}
      />
    </motion.article>
  );
}

export default AdviceCard;
