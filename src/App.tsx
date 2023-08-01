import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleChange = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <>
      <p>
        {cart.discount} {cart.items[0].title} {cart.items[0].quantity}
        <br />
        {cart.discount} {cart.items[1].title} {cart.items[1].quantity}
      </p>
      <button onClick={handleChange}>Increase Quantity</button>
    </>
  );
}

export default App;
