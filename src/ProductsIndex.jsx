/* eslint-disable react/prop-types */
import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <div>
        Search filter:{" "}
        <input
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          list="titles"
        />
        <datalist id="titles">
          {props.products.map((product) => (
            <option key={product.id}>{product.name}</option>
          ))}
        </datalist>
      </div>

      <h1>All products</h1>

      {props.products
        .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.url} />
            <p>Description: {product.description}</p>
            <p>inventory_total: {product.inventory_total}</p>
            <button onClick={() => props.onShowProduct(product)}>More info</button>
          </div>
        ))}
    </div>
  );
}
