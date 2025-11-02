
function Product({ name, price, inStock }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock ✅" : "Out of Stock ❌"}
      </p>
    </div>
  );
}

export default Product;
