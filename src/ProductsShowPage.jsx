import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function ProductsShowPage() {
  const [product, setProduct] = useState({});
  const params = useParams();

  const handleShowProduct = () => {
    axios.get(`/products/${params.id}.json`).then((response) => {
      console.log(response);
      setProduct(response.data);
    });
  };

  useEffect(handleShowProduct, []);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image_url} alt="" width="300px" />
      <p>Chef: {product.chef}</p>
      <p>Ingredients: {product.ingredients}</p>
      <p>Directions: {product.directions}</p>
      <Link to="/products">Back to all recipes</Link>
    </div>
  );
}
