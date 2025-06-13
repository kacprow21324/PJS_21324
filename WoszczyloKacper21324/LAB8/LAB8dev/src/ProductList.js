import React, { useCallback, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan"]);

  const removeProduct = useCallback((item: string) => {
    setProducts((prev) => prev.filter((p) => p !== item));
  }, []);

  return (
    <div>
      <h2>Lista produktów</h2>
      <ul>
        {products.map((product) => (
          <li key={product}>
            {product}{" "}
            <button onClick={() => removeProduct(product)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
