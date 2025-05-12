import React from "react";

const Product = React.memo((prop) => {
  let { product, deleteProduct } = prop;

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          width: "fit-content",
          margin: "2px",
          padding: "3px",
        }}
      >
        <p>{`Name: ${product.name}`}</p>
        <p>{`Category: ${product.category}`}</p>
        <p>{`Price: ${product.price}`}</p>
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </div>
    </>
  );
});
export default Product;
