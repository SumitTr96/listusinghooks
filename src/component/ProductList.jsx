import React from "react";
import Product from "./Product";

const ProductList=React.memo((prop)=> {
  let { products, setProducts } = prop;

  let deleteProduct = (deleteProductId) => {
    setProducts(products.filter((product) => product.id != deleteProductId));
  };
  return (
    <>
      <div>
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </>
  );
});
export default ProductList;
