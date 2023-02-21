import "./Product.css";

function Product(props) {
  return (
    <div className="product-item">
      <h1>{props.title}</h1>
      <div className="product-item__description">
        <h2>{props.description}</h2>
        <div className="product-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default Product;
