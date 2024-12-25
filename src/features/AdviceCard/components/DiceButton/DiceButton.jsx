import styles from "./DiceButton.module.css";
import PropTypes from "prop-types";
import { concatClassNames as cn } from "@/helpers/concatClassNames.js";

function DiceButton({
  type = "button",
  onClick,
  className,
  disabled,
  ...props
}) {
  return (
    <button
      className={cn(styles.button, className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <svg
        className={styles.button__icon}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path
          d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fill="#202733"
        />
      </svg>
    </button>
  );
}

DiceButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default DiceButton;
