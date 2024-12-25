import styles from "./CardWrapper.module.css";
import PropTypes from "prop-types";

function CardWrapper({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardWrapper;
