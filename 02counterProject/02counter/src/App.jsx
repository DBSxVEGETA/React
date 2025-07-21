import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);

  // let counter = 15;

  const increaseCounter = () => {
    if (counter < 20) {
      let newCounter = counter + 1;
      setCounter(newCounter);
    }
    // console.log("clicked", newCounter);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      let newCounter = counter - 1;
      setCounter(newCounter);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter} </h2>
      <button style={{ marginRight: "10px" }} onClick={increaseCounter}>
        Add Value
      </button>
      <button onClick={decreaseCounter}> Subtract Value</button>
    </>
  );
}

export default App;
