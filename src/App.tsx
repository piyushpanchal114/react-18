import { useState } from "react";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";

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
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        nostrum ipsam neque harum enim voluptas officiis quae tenetur ad cum ex
        optio placeat veniam ipsum. Culpa id, quod, itaque libero porro quaerat
        repudiandae, ab mollitia necessitatibus sint nulla repellat? Numquam
        exercitationem ipsa sunt ipsam velit? Quod sequi est dignissimos cum.
        Molestiae veritatis est doloremque velit asperiores, omnis dignissimos
        iusto tempora quis. Recusandae natus sed sequi aliquid aliquam,
        architecto culpa provident mollitia, quis quia officiis nobis ad
        reiciendis pariatur voluptatibus, labore facilis laborum magnam.
        Eligendi expedita iste laborum repellendus necessitatibus sit modi
        voluptate, culpa quam velit temporibus commodi praesentium voluptatem
        sapiente numquam impedit ea reiciendis maiores quod quia quis eaque?
        Quos voluptas cumque laborum tempora accusamus, assumenda illo ullam
        enim similique sunt iusto adipisci nulla aut architecto itaque, numquam
        suscipit quas nam beatae reprehenderit! Quod labore nostrum tenetur quo!
        Hic nihil est pariatur rerum ea! Nisi vero sapiente ipsum similique
        ullam?
      </ExpandableText>
    </>
  );
}

export default App;
