import styles from "./Button.module.css";

const getBtnTypeClass = (type) => {
  switch (type) {
    case "success": {
      return styles.BtnSuccess;
    }
    case "danger": {
      return styles.BtnDanger;
    }
    default: {
      return "";
    }
  }
};

function Button({ type, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.Btn} ${getBtnTypeClass(type)}`}
    >
      {children}
    </button>
  );
}

export default Button;
