import "./App.css";
import Product from "./Product";

function App() {
  const products = [
    {
      title: "Product 1",
      price: 10,
      description: "First product",
    },
    {
      title: "Product 2",
      price: 20,
      description: "Second product",
    },
  ];
  return (
    <div>
      <h1>My Demo Shop</h1>
      <Product
        title={products[0].title}
        price={products[0].price}
        description={products[0].description}
      ></Product>
            <Product
        title={products[1].title}
        price={products[1].price}
        description={products[1].description}
      ></Product>
    </div>
  );
}

export default App;
