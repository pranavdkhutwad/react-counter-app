import styles from "./Image.module.css";

function Image({ src, alt }) {
  return <img className={styles.Img} src={src} alt={alt} />;
}

export default Image;
