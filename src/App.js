import "./App.css";
import Modal from "./modal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App" onClick={() => console.log("Clicked")}>
      <h2>Click to open Modal</h2>
      <button onClick={() => setShow((s) => !s)}>Open Modal</button>
      <Modal show={show} closeModal={() => setShow(false)} />
    </div>
  );
}

export default App;
