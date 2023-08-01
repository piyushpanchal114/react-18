import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: { name: "John" },
  });

  const handleChange = () => {
    setGame({ ...game, player: { ...game.player, name: "bob" } });
  };

  return (
    <>
      <p>
        {game.id} {game.player.name}
      </p>
      <button onClick={handleChange}>Change</button>
    </>
  );
}

export default App;
