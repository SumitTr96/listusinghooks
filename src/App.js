import "./styles.css";
import { useEffect, useMemo, useState } from "react";
import ProductList from "./component/ProductList";
import AddProduct from "./component/AddProduct";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  let dummyproducts = [
    {
      id: 1,
      name: "apple",
      category: "fruit",
      price: 100,
    },
    {
      id: 2,
      name: "mobile",
      category: "electronics",
      price: 10000,
    },
  ];

  useEffect(() => {
    setProducts(dummyproducts);
  }, []);

  let filteredProducts = useMemo(()=>{
  return search
    ? products.filter((productName) => productName.name === search)
    : products;
},[search, products])

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <AddProduct products={filteredProducts} setProducts={setProducts} />
      <ProductList products={filteredProducts} setProducts={setProducts} />
    </div>
  );
}
