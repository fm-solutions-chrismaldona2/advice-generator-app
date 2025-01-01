import styles from "./CenteredWrapper.module.css";
import PropTypes from "prop-types";

function CenteredWrapper({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}

CenteredWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenteredWrapper;
