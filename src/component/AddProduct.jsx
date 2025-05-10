import React, { useState } from "react";

function AddProduct(props) {
  let { products, setProducts } = props;
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  let clearForm = () => {
    setName(""); 
    setCategory(""); 
    setPrice("");
  };

  let addProduct = () => {
    setProducts([
      ...products,
      {
        id: Math.floor(Math.random() * 10000),
        name: name,
        category: category,
        price: price,
      },
    ]);
    clearForm();
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <button onClick={addProduct}>Add</button>
    </div>
  );
}
export default AddProduct;
