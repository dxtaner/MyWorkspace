import products from "./data/products";
import { square, double, add, createUser } from "./utils/arrowExamples";

function App() {
  // MAP
  const productNames = products.map((product) => product.name);

  // FILTER
  const expensiveProducts = products.filter((product) => product.price > 500);

  // REDUCE
  const totalPrice = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0,
  );

  // Arrow function usage
  const squaredNumber = square(5);
  const doubledNumber = double(10);
  const sum = add(3, 7);
  const user = createUser("Taner");

  return (
    <div>
      <h1>Map - Filter - Reduce & Arrow Functions</h1>

      <h2>Map (Product Names)</h2>
      {productNames.map((name, index) => (
        <p key={index}>{name}</p>
      ))}

      <h2>Filter (Price &gt; 500)</h2>
      {expensiveProducts.map((product) => (
        <p key={product.id}>
          {product.name} - ${product.price}
        </p>
      ))}

      <h2>Reduce (Total Price)</h2>
      <p>${totalPrice}</p>

      <hr />

      <h2>Arrow Function Examples</h2>
      <p>Square 5: {squaredNumber}</p>
      <p>Double 10: {doubledNumber}</p>
      <p>Add 3 + 7: {sum}</p>
      <p>
        User: {user.username} - {user.createdAt}
      </p>
    </div>
  );
}

export default App;
