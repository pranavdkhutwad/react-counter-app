import Badge from "../../../shared/components/badge/Badge";
import Button from "../../../shared/components/button/Button";
import Image from "../../../shared/components/image/Image";

import styles from "./Product.module.css";

function Product({ product, onIncrement, onDecrement, onDelete }) {
  return (
    <section className={styles.Product}>
      <Badge>{product.count || "zero"}</Badge>
      <Image src={product.imgUrl} alt={product.altText} />
      <Button type="danger" onClick={() => onDecrement(product.id)}>
        -
      </Button>
      <Button type="success" onClick={() => onIncrement(product.id)}>
        +
      </Button>
      <Button type="danger" onClick={() => onDelete(product.id)}>
        Delete
      </Button>
    </section>
  );
}

export default Product;
