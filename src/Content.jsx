import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";
import { ProductsShowPage } from "./ProductsShowPage";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [products, setProduct] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  };
  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProduct([...products, response.data]);
      successCallback();
    });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };
  const handleUpdateProduct = (id, params, successCallback) => {
    console.log("handleUpdateProduct", params);
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then((response) => {
      setProduct(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  const handleDestroyProduct = (id) => {
    console.log("handleDestroyProduct", id);
    axios.delete(`http://localhost:3000/products/${id}.json`).then((response) => {
      console.log(response);
      setProduct(products.filter((product) => product.id !== id));
      handleClose();
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <main>
      <div>
        <h1 className="text-3xl underline text-center">Welcome to The </h1>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/new" element={<ProductsNew onCreateProduct={handleCreateProduct} />} />
          <Route
            path="/products"
            element={<ProductsIndex name={name} products={products} onShowProduct={handleShowProduct} />}
          />
          <Route path="/products/:id" element={<ProductsShowPage />} />
          <Route
            path="/"
            element={<ProductsIndex name={name} products={products} onShowProduct={handleShowProduct} />}
          />
        </Routes>

        <Modal show={isProductsShowVisible} onClose={handleClose}>
          <ProductsShow
            product={currentProduct}
            onUpdateProduct={handleUpdateProduct}
            onDestroyProduct={handleDestroyProduct}
          />
        </Modal>
      </div>
    </main>
  );
}
