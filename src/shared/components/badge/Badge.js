import styles from "./Badge.module.css";

function Badge({ children }) {
  return <div className={styles.Badge}>{children}</div>;
}

export default Badge;
