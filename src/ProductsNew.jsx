/* eslint-disable react/prop-types */
export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="float" />
        </div>
        <div>
          Description: <input name="Description" type="text" />
        </div>
        <div>
          Inventory Total: <input name="Inv Total" type="text" />
        </div>
        <div>
          Supplier Id <input name="supplier ID" type="text" />
        </div>

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
