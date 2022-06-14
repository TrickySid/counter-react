import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState("0");

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const handleKeyPress = (event) => {
    if (event.key === "+") {
      document.querySelector("h1").innerHTML(count + 1);
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <button className="inc-button" onClick={increase}>
        +
      </button>
      <button className="dec-button" onClick={decrease}>
        -
      </button>
    </>
  );
};

export default App;
