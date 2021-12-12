import React, { useEffect, useState } from "react";
import { Link, navigate, Redirect } from "@reach/router";
import axios from "axios";
const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescripton] = useState("");

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/del/" + productId)
      .then((res) => {
        setProducts(products.filter(product => product._id !== productId)) 
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => setLoaded(false))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res) => {
      setProducts(res.data.products);
      setLoaded(true);
    }, [loaded]);
  });
  if (!loaded) return <div>...loading</div>;
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <p>
            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
          </p>
          <p>
            <label>Price</label>
            <input type="text" onChange={(e) => setPrice(e.target.value)} />
          </p>
          <p>
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => setDescripton(e.target.value)}
            />
          </p>
          <p>
            <input type="submit" value="submit" />
          </p>
        </form>
      </div>
      <div>
        <h2>All products</h2>
        {products.map((prod, idx) => {
          return (
            <div key={idx}>
              <Link to={`/products/${prod._id}`}>
                <p>{prod.title}</p>
              </Link>

              <button
                onClick={(e) => {
                  deleteProduct(prod._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductList;
