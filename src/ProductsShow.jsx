/* eslint-disable react/prop-types */
export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroyProduct(props.Product.id);
  };

  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <p>Inventory Total: {props.product.inventory_total}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          price: <input defaultValue={props.product.price} name="price" type="text" />
        </div>
        <div>
          description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <div>
          inventory_total: <input defaultValue={props.product.inventory_total} name="inventory_total" type="text" />
        </div>
        <button type="submit">Update product</button>
      </form>
      <button onClick={handleClick}> Destroy Product</button>
    </div>
  );
}
