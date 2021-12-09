import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ProductList from "./components/ProductList";
import Detail from "./views/Detail";
import { Router } from '@reach/router'
function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res) => {
      setProducts(res.data.products);
      setLoaded(true);
    });
  }, []);
  return (
    <div className="App">
      <Form />
      <hr />
      {loaded && <ProductList products={products} />}
      <Router>
        <Detail path="/products/:id"/>
      </Router>
    </div>
  );
}

export default App;
