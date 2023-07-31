import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alert, setAlert] = useState(false);

  return (
    <>
      {alert && <Alert onClose={() => setAlert(false)}>My Alert</Alert>}

      <Button onClick={() => setAlert(true)}>Button</Button>
    </>
  );
}

export default App;
