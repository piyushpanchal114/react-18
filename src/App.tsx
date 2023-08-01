import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleChange = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Cheese"],
    });
  };

  return (
    <>
      <p>
        {pizza.name} {pizza.toppings}
      </p>
      <button onClick={handleChange}>Add Topping</button>
    </>
  );
}

export default App;
