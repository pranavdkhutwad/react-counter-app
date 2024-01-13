import { useState } from "react";
import Product from "./product/Product";
import Total from "./total/Total";

function Counter() {
  const [products, setProducts] = useState([
    {
      id: 1,
      count: 0,
      imgUrl:
        "https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Car",
    },
    {
      id: 2,
      count: 0,
      imgUrl:
        "https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob25lfGVufDB8fDB8fHww",
      altText: "Phone",
    },
    {
      id: 3,
      count: 0,
      imgUrl:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D",
      altText: "bicycle",
    },
  ]);

  const handleIncrement = (id) => {
    const newProducts = [...products];

    const index = newProducts.findIndex((p) => p.id === id);

    const newProduct = { ...newProducts[index] };
    newProduct.count = newProduct.count + 1;

    newProducts[index] = newProduct;

    setProducts(newProducts);
  };

  const handleDecrement = (id) => {
    const newProducts = [...products];

    const index = newProducts.findIndex((p) => p.id === id);

    const newProduct = { ...newProducts[index] };

    if (newProduct.count) {
      newProduct.count = newProduct.count - 1;

      newProducts[index] = newProduct;

      setProducts(newProducts);
    }
  };

  const handleDelete = (id) => {
    const newProducts = products.filter((p) => p.id !== id);

    setProducts(newProducts);
  };

  const getTotal = () => {
    const sum = products.reduce((acc, p) => {
      acc = acc + p.count;
      return acc;
    }, 0);

    return sum;
  };

  return (
    <>
      <Total>Total: {getTotal()}</Total>
      {products.map((product) => (
        <Product
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          key={product.id}
          product={product}
        />
      ))}
    </>
  );
}

export default Counter;
